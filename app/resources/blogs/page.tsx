import Blogs from "@/src/pages_migrated/Blogs";
import { getAllPosts } from "@/src/lib/wordpress";

export default async function Page() {
  const posts = await getAllPosts();
  return <Blogs posts={posts} />;
}
