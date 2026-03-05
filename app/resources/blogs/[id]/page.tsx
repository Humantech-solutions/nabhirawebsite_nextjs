import BlogDetail from "@/src/pages_migrated/resources/BlogDetail";
import { blogPosts } from "@/src/data/migrated_data";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default function Page() {
  return <BlogDetail />;
}
