import DataEngineering from "@/src/pages_migrated/services/data/DataEngineering";
import { getPageBySlug } from "@/src/lib/wordpress";
import { constructMetadata } from "@/src/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('data-engineering');
  return constructMetadata({
    title: page?.title || "Data Engineering",
    description: "Build robust data pipelines and architecture for enterprise-scale data management.",
  });
}

export default async function Page() {
  const wordpressData = await getPageBySlug('data-engineering');
  return <DataEngineering wordpressData={wordpressData} />;
}
