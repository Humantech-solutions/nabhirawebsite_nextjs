import News from "@/src/pages_migrated/resources/News";
import { getPageBySlug, getNews } from "@/src/lib/wordpress";
import { constructMetadata } from "@/src/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('news');
  return constructMetadata({
    title: page?.title || "In the News",
    description: "Stay updated with Nabhira's latest milestones, partnerships, and industry recognitions.",
  });
}

export default async function Page() {
  const wordpressData = await getPageBySlug('news');
  const newsData = await getNews();
  
  return (
    <News 
      wordpressData={wordpressData} 
      newsData={newsData} 
      globalSettings={wordpressData?.globalSettings}
    />
  );
}
