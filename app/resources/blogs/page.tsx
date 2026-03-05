import Blogs from "@/src/pages_migrated/Blogs";
import { getAllPosts, getPageBySlug } from "@/src/lib/wordpress";

export default async function Page() {
  const posts = await getAllPosts();
  const wordpressData = await getPageBySlug('blogs');
  return <Blogs posts={posts} wordpressData={wordpressData} />;
}
