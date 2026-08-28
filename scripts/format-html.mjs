// scripts/format-html.mjs
// Prettifies all HTML files in the `out/` directory after `next build`
// and ensures 404.html and .htaccess are in place for Hostinger / Apache deployment.
// Usage: node scripts/format-html.mjs

import { readdir, readFile, writeFile, copyFile, access } from 'fs/promises';
import { join, extname } from 'path';
import { constants } from 'fs';
import { format } from 'prettier';

const OUT_DIR = './out';

async function exists(path) {
  try {
    await access(path, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function walkDir(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await walkDir(fullPath));
    } else if (extname(entry.name) === '.html') {
      files.push(fullPath);
    }
  }
  return files;
}

async function ensure404AndHtaccess() {
  // Ensure out/404.html exists for Apache ErrorDocument 404
  const out404Path = join(OUT_DIR, '404.html');
  const notFoundIndexPath = join(OUT_DIR, '_not-found', 'index.html');
  const notFoundAltPath = join(OUT_DIR, '404', 'index.html');

  if (!await exists(out404Path)) {
    if (await exists(notFoundIndexPath)) {
      await copyFile(notFoundIndexPath, out404Path);
      console.log('📋 Copied _not-found/index.html -> out/404.html');
    } else if (await exists(notFoundAltPath)) {
      await copyFile(notFoundAltPath, out404Path);
      console.log('📋 Copied 404/index.html -> out/404.html');
    }
  }

  // Ensure public/.htaccess is copied to out/.htaccess
  const publicHtaccess = join('./public', '.htaccess');
  const outHtaccess = join(OUT_DIR, '.htaccess');
  if (await exists(publicHtaccess)) {
    await copyFile(publicHtaccess, outHtaccess);
    console.log('📋 Copied public/.htaccess -> out/.htaccess');
  }
}

async function main() {
  await ensure404AndHtaccess();

  let htmlFiles;
  try {
    htmlFiles = await walkDir(OUT_DIR);
  } catch {
    console.error(`❌ Could not read "${OUT_DIR}" directory. Run "npm run build" first.`);
    process.exit(1);
  }

  if (htmlFiles.length === 0) {
    console.log('No HTML files found in out/');
    return;
  }

  console.log(`✨ Prettifying ${htmlFiles.length} HTML files...`);
  
  let success = 0;
  for (const file of htmlFiles) {
    try {
      const raw = await readFile(file, 'utf8');
      const formatted = await format(raw, {
        parser: 'html',
        printWidth: 120,
        tabWidth: 2,
        useTabs: false,
        htmlWhitespaceSensitivity: 'css',
        endOfLine: 'lf',
      });
      await writeFile(file, formatted, 'utf8');
      success++;
    } catch (err) {
      console.warn(`⚠ Skipped ${file}: ${err.message}`);
    }
  }

  console.log(`✅ Done! Formatted ${success}/${htmlFiles.length} files.`);
}

main();
