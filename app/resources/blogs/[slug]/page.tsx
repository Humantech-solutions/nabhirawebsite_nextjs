import BlogDetail from "@/src/pages_migrated/resources/BlogDetail";
import { getPostBySlug, getAllPosts } from "@/src/lib/wordpress";
import { notFound } from "next/navigation";
import { constructMetadata, getArticleSchema, getBreadcrumbSchema } from "@/src/lib/seo";
import { Schema } from "@/src/components/SEO/Schema";
import { siteConfig } from "@/src/config/site";
import { Metadata } from "next";
import {
  getIPublishPageBySlug,
  getIPublishPages,
  getIPublishImageUrl,
  getIPublishContentById,
} from "@/src/lib/ipublish";
import { IPublishDetailClient } from "@/src/components/ipublish/IPublishDetailClient";

export const revalidate = 0;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const [posts, ipublishPages] = await Promise.all([
    getAllPosts().catch(() => []),
    getIPublishPages().catch(() => []),
  ]);

  const slugs = new Set([
    ...(posts || []).map((post: any) => post.slug).filter(Boolean),
    ...(ipublishPages || []).map((page: any) => page.slug).filter(Boolean),
  ]);

  if (slugs.size === 0) return [{ slug: "fallback" }];
  return Array.from(slugs).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug).catch(() => null);

  if (post) {
    const title = post.title?.rendered || post.title || "Blog Post";
    const excerpt = post.excerpt?.rendered?.replace(/<[^>]*>/g, "") || post.excerpt || "";

    return constructMetadata({
      title: title,
      description: excerpt,
      image: post.featured_media_url || post.image,
      path: `/resources/blogs/${slug}/`,
      type: "article",
      publishedTime: post.date,
      authors: [post.customAuthorName || post._embedded?.author?.[0]?.name || post.author?.node?.name || post.author || "Hutech Solutions Team"],
    });
  }

  // Check iPublish
  const ipublishContent =
    (await getIPublishPageBySlug(slug)) || (await getIPublishContentById(slug));

  if (ipublishContent) {
    const title = ipublishContent.seo_title || ipublishContent.title;
    const description =
      ipublishContent.meta_description ||
      ipublishContent.og_description ||
      ipublishContent.excerpt ||
      "";
    const imageUrl = getIPublishImageUrl(ipublishContent.featured_image_url);

    const baseCanonical =
      ipublishContent.canonical_url ||
      `https://ipublish.hutechsolutions.ai/insights/${ipublishContent.org || "hutech-solutions"}/${ipublishContent.slug || slug}`;
    const canonical = baseCanonical.endsWith("/") ? baseCanonical : `${baseCanonical}/`;

    const keywordsList = [
      ipublishContent.focus_keyword,
      ...(ipublishContent.secondary_keywords || []),
    ].filter(Boolean) as string[];

    return {
      title: {
        absolute: title,
      },
      description,
      keywords: keywordsList.join(", "),
      alternates: {
        canonical,
      },
      openGraph: {
        title: ipublishContent.og_title || title,
        description: ipublishContent.og_description || description,
        url: canonical,
        images: imageUrl ? [{ url: imageUrl }] : [],
        type: "article",
        publishedTime:
          ipublishContent.updated_at ||
          ipublishContent.published_at ||
          ipublishContent.created_at,
      },
      twitter: {
        card: "summary_large_image",
        title: ipublishContent.og_title || title,
        description: ipublishContent.og_description || description,
        images: imageUrl ? [imageUrl] : [],
      },
    };
  }

  return constructMetadata({ title: "Post Not Found" });
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug).catch(() => null);

  if (post) {
    const title = post.title?.rendered || post.title || "Blog Post";
    const excerpt = post.excerpt?.rendered?.replace(/<[^>]*>/g, "") || post.excerpt || "";
    const url = `${siteConfig.url}/resources/blogs/${slug}`;
    const date = post.date || new Date().toISOString();
    const author = post.customAuthorName || post._embedded?.author?.[0]?.name || post.author?.node?.name || post.author || "Hutech Solutions Team";

    return (
      <>
        <Schema
          jsonLd={getArticleSchema({
            title: title,
            description: excerpt,
            image: post.featured_media_url || post.image,
            datePublished: date,
            authorName: author,
            url: url,
          })}
        />
        <Schema
          jsonLd={getBreadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Resources", item: "/resources/blogs" },
            { name: "Blogs", item: "/resources/blogs" },
            { name: title, item: `/resources/blogs/${slug}` },
          ])}
        />
        <BlogDetail post={post} />
      </>
    );
  }

  // Check iPublish
  const ipublishContent =
    (await getIPublishPageBySlug(slug)) || (await getIPublishContentById(slug));

  if (ipublishContent) {
    const imageUrl = getIPublishImageUrl(ipublishContent.featured_image_url);
    const schemaJsonData = ipublishContent.schema_json
      ? {
          ...ipublishContent.schema_json,
          ...(imageUrl && !ipublishContent.schema_json.image ? { image: imageUrl } : {}),
        }
      : {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: ipublishContent.seo_title || ipublishContent.title,
          description:
            ipublishContent.meta_description ||
            ipublishContent.og_description ||
            ipublishContent.excerpt ||
            "",
          image: imageUrl,
          dateModified:
            ipublishContent.updated_at ||
            ipublishContent.published_at ||
            ipublishContent.created_at,
          keywords: [
            ipublishContent.focus_keyword,
            ...(ipublishContent.secondary_keywords || []),
          ]
            .filter(Boolean)
            .join(", "),
        };

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaJsonData),
          }}
        />
        <IPublishDetailClient content={ipublishContent} slug={slug} />
      </>
    );
  }

  notFound();
}
