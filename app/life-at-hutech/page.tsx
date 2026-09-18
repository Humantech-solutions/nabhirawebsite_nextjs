import LifeAtHutech from "@/src/pages_migrated/about/LifeAtHutech";
import { getPageBySlug } from "@/src/lib/wordpress";
import { constructMetadata, getWebPageSchema } from "@/src/lib/seo";
import { Schema } from "@/src/components/SEO/Schema";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  let page = null;
  try {
    page = await getPageBySlug("life-at-hutech");
  } catch (error) {
    console.error("Failed to load metadata for life-at-hutech:", error);
  }
  return constructMetadata({
    title: page?.title || "Life at Hutech | Careers & Culture | Hutech Solutions",
    description:
      page?.metaDesc ||
      "Discover life at Hutech Solutions—our people, workplace culture, celebrations, innovation, and career opportunities. Explore what makes Hutech more than just a workplace.",
    path: "/life-at-hutech/",
  });
}

export default async function LifeAtHutechPage() {
  let wordpressData = null;
  try {
    wordpressData = await getPageBySlug("life-at-hutech");
  } catch (error) {
    console.error("Failed to load wordpress data for life-at-hutech:", error);
  }
  const pageSchema = getWebPageSchema({
    title: wordpressData?.title || "Life at Hutech | Careers & Culture | Hutech Solutions",
    description:
      wordpressData?.metaDesc ||
      "Discover life at Hutech Solutions—our people, workplace culture, celebrations, innovation, and career opportunities. Explore what makes Hutech more than just a workplace.",
    path: "/life-at-hutech/",
  });

  return (
    <>
      <Schema jsonLd={pageSchema} />
      <LifeAtHutech wordpressData={wordpressData} />
    </>
  );
}
