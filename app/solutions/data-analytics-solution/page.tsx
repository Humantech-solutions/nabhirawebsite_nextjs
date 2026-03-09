import DataAnalyticsSolution from "@/src/pages_migrated/services/data/DataAnalyticsSolution";
import { getPageBySlug } from "@/src/lib/wordpress";
import { constructMetadata } from "@/src/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('data-analytics-solution');
  return constructMetadata({
    title: page?.title || "Data Analytics Solutions",
    description: "End-to-end data analytics solutions tailored to your business needs.",
  });
}

export default async function Page() {
  const wordpressData = await getPageBySlug('data-analytics-solution');
  return <DataAnalyticsSolution wordpressData={wordpressData} />;
}
