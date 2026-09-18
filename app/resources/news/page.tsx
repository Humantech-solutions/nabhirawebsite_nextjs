import News from "@/src/pages_migrated/resources/News";
import { getPageBySlug, getNews } from "@/src/lib/wordpress";
import { constructMetadata, getWebPageSchema } from "@/src/lib/seo";
import { Schema } from "@/src/components/SEO/Schema";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('news');
  return constructMetadata({
    title: page?.title || "In the News",
    description: "Stay updated with Hutech Solutions' latest milestones, partnerships, and industry recognitions.",
    path: "/resources/news/",
  });
}

export default async function Page() {
  const wordpressData = await getPageBySlug('news');
  const newsData = await getNews();
  
  const pageSchema = getWebPageSchema({
    title: wordpressData?.title || "In the News",
    description: "Stay updated with Hutech Solutions' latest milestones, partnerships, and industry recognitions.",
    path: "/resources/news/",
  });

  return (
    <>
      <Schema jsonLd={pageSchema} />
      <News 
        wordpressData={wordpressData} 
        newsData={newsData} 
        globalSettings={wordpressData?.globalSettings}
      />
    </>
  );
}
