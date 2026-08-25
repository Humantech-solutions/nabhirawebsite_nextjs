import About from "@/src/pages_migrated/about/About";
import { getPageBySlug } from "@/src/lib/wordpress";
import { constructMetadata } from "@/src/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('about');
  return constructMetadata({
    title: page?.title || "About Us",
    description: "Learn about Hutech Solutions Technologies, an architectural powerhouse defining the future of digital enterprise through AI and Cloud-native innovation.",
  });
}

export default async function Page() {
  const wordpressData = await getPageBySlug('about');
  return <About wordpressData={wordpressData} />;
}
