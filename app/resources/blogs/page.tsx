import Blogs from "@/src/pages_migrated/resources/Blogs";
import { getAllPosts, getPageBySlug } from "@/src/lib/wordpress";
import { constructMetadata } from "@/src/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('blogs');
  return constructMetadata({
    title: page?.title || "Insights & Perspectives",
    description: "Explore the latest architectural insights, AI trends, and cloud-native innovations from Nabhira.",
  });
}

export default async function Page() {
  const posts = await getAllPosts();
  const wordpressData = await getPageBySlug('blogs');
  return <Blogs posts={posts} wordpressData={wordpressData} />;
}
