import DataGovernance from "@/src/pages_migrated/services/data/DataGovernance";
import { getPageBySlug } from "@/src/lib/wordpress";
import { constructMetadata } from "@/src/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('data-governance');
  return constructMetadata({
    title: page?.title || "Data Governance",
    description: "Ensure data quality, security, and compliance with our data governance frameworks.",
  });
}

export default async function Page() {
  const wordpressData = await getPageBySlug('data-governance');
  return <DataGovernance wordpressData={wordpressData} />;
}
