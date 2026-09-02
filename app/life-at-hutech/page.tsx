import LifeAtHutech from "@/src/pages_migrated/about/LifeAtHutech";
import { getPageBySlug } from "@/src/lib/wordpress";
import { constructMetadata } from "@/src/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug("life-at-hutech");
  return constructMetadata({
    title: page?.title || "Life at Hutech | Careers & Culture | Hutech Solutions",
    description:
      page?.metaDesc ||
      "Discover life at Hutech Solutions—our people, workplace culture, celebrations, innovation, and career opportunities. Explore what makes Hutech more than just a workplace.",
  });
}

export default async function LifeAtHutechPage() {
  const wordpressData = await getPageBySlug("life-at-hutech");
  return <LifeAtHutech wordpressData={wordpressData} />;
}
