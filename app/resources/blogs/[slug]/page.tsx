import BlogDetail from "@/src/pages_migrated/resources/BlogDetail";
import { getPostBySlug, getAllPosts } from "@/src/lib/wordpress";
import { notFound } from "next/navigation";
import { constructMetadata, getArticleSchema, getBreadcrumbSchema } from "@/src/lib/seo";
import { Schema } from "@/src/components/SEO/Schema";
import { siteConfig } from "@/src/config/site";
import { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return constructMetadata({ title: "Post Not Found" });

  const title = post.title?.rendered || post.title || "Blog Post";
  const excerpt = post.excerpt?.rendered?.replace(/<[^>]*>/g, '') || post.excerpt || "";

  return constructMetadata({
    title: title,
    description: excerpt,
    image: post.featured_media_url || post.image,
  });
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const title = post.title?.rendered || post.title || "Blog Post";
  const excerpt = post.excerpt?.rendered?.replace(/<[^>]*>/g, '') || post.excerpt || "";
  const url = `${siteConfig.url}/resources/blogs/${slug}`;
  const date = post.date || new Date().toISOString();
  const author = post._embedded?.author?.[0]?.name || post.author || "Nabhira Team";

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
