"use client";

import React, { useMemo } from 'react';
import Link from 'next/link';
import { motion as Motion } from "motion/react";
import { SitemapLink } from '../lib/wordpress';
import { ChevronRight } from 'lucide-react';

interface SitemapProps {
  data: SitemapLink[];
}

type TreeNode = {
  name: string;
  path: string;
  children: Record<string, TreeNode>;
};

// Helper to capitalize path segments if a real page doesn't exist for it
const formatSegmentName = (segment: string) => {
  return segment
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const buildTree = (links: SitemapLink[]): TreeNode => {
  const root: TreeNode = { name: 'Pages', path: '/', children: {} };

  links.forEach(link => {
    // Skip home if it's explicitly passed, we handle it as root or a child
    if (link.path === '/') {
      if (!root.children['home']) {
         root.children['home'] = { name: link.name || 'Home', path: '/', children: {} };
      } else {
         root.children['home'].name = link.name;
      }
      return;
    }

    const segments = link.path.split('/').filter(Boolean);
    let currentNode = root;
    let currentPath = '';

    segments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      if (!currentNode.children[segment]) {
        currentNode.children[segment] = {
          name: formatSegmentName(segment),
          path: currentPath,
          children: {}
        };
      }
      
      // If this is the last segment, assign the real name from WP
      if (index === segments.length - 1) {
        currentNode.children[segment].name = link.name;
      }
      
      currentNode = currentNode.children[segment];
    });
  });

  return root;
};

const RecursiveNode = ({ node, depth = 0 }: { node: TreeNode; depth?: number }) => {
  const childKeys = Object.keys(node.children).sort();
  if (childKeys.length === 0) return null;

  return (
    <ul className={`flex flex-col space-y-2 ${depth > 0 ? 'ml-6 mt-2 border-l border-slate-200/50 pl-4' : 'ml-4'}`}>
      {childKeys.map((key, idx) => {
        const childNode = node.children[key];
        const isTopLevel = depth === 0;
        
        return (
          <Motion.li 
            key={childNode.path}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            className="flex flex-col"
          >
            <div className="flex items-start group">
              <span className={`mt-1 mr-2 flex-shrink-0 transition-colors duration-300 ${isTopLevel ? 'text-slate-400' : 'text-[#f99d1c]'}`}>
                {isTopLevel ? (
                  <span className="text-xl leading-none">◦</span>
                ) : (
                  <ChevronRight size={14} className="mt-0.5" />
                )}
              </span>
              <Link 
                href={childNode.path}
                className={`transition-colors duration-300 ${isTopLevel ? 'text-[#11253e] font-medium hover:text-[#f99d1c]' : 'text-[#11253e]/80 font-light hover:text-[#f99d1c]'}`}
              >
                {childNode.name}
              </Link>
            </div>
            
            {Object.keys(childNode.children).length > 0 && (
              <RecursiveNode node={childNode} depth={depth + 1} />
            )}
          </Motion.li>
        );
      })}
    </ul>
  );
};

export function Sitemap({ data }: SitemapProps) {
  const tree = useMemo(() => buildTree(data || []), [data]);

  if (!data || data.length === 0) return null;

  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-12">
        <h2 className="text-2xl font-bold text-[#11253e] mb-6 tracking-tight">Pages</h2>
        <div className="bg-slate-50/50 rounded-2xl p-6 sm:p-10 border border-slate-100">
          <RecursiveNode node={tree} />
        </div>
      </div>
    </section>
  );
}
