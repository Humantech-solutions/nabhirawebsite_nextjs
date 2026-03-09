import BlogDetail from "@/src/pages_migrated/resources/BlogDetail";
import { blogPosts } from "@/src/data/migrated_data";
import { constructMetadata, getArticleSchema, getBreadcrumbSchema } from "@/src/lib/seo";
import { Schema } from "@/src/components/SEO/Schema";
import { siteConfig } from "@/src/config/site";
import { Metadata } from 'next';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id.toString() === id);

  if (!post) return constructMetadata({ title: "Post Not Found" });

  return constructMetadata({
    title: post.title,
    description: post.excerpt,
    image: post.image,
  });
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id.toString() === id);

  if (!post) return null;

  const url = `${siteConfig.url}/resources/blogs/${id}`;

  return (
    <>
      <Schema
        jsonLd={getArticleSchema({
          title: post.title,
          description: post.excerpt,
          image: post.image,
          datePublished: post.date, // Note: migrated_data has string dates
          authorName: post.author,
          url: url,
        })}
      />
      <Schema
        jsonLd={getBreadcrumbSchema([
          { name: "Home", item: "/" },
          { name: "Resources", item: "/resources/blogs" },
          { name: "Blogs", item: "/resources/blogs" },
          { name: post.title, item: `/resources/blogs/${id}` },
        ])}
      />
      <BlogDetail />
    </>
  );
}
