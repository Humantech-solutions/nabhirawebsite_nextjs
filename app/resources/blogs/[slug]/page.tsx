import BlogDetail from "@/src/pages_migrated/BlogDetail";
import { getPostBySlug, getAllPosts } from "@/src/lib/wordpress";
import { notFound } from "next/navigation";

// Required for output: "export" and dynamic routes
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  console.log('[Blog Page] Rendering for slug:', slug);
  
  const post = await getPostBySlug(slug);

  if (!post) {
    console.log('[Blog Page] Post not found for slug:', slug);
    notFound();
  }

  return <BlogDetail post={post} />;
}
