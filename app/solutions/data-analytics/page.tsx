import DataAnalytics from "@/src/pages_migrated/services/data/DataAnalytics";
import { getPageBySlug } from "@/src/lib/wordpress";
import { constructMetadata } from "@/src/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('data-analytics');
  return constructMetadata({
    title: page?.title || "Data Analytics",
    description: "Unlock actionable insights from your data with our advanced analytics solutions.",
  });
}

export default async function Page() {
  const wordpressData = await getPageBySlug('data-analytics');
  return <DataAnalytics wordpressData={wordpressData} />;
}
