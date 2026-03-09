import CloudFinancialManagement from "@/src/pages_migrated/services/cloud/CloudFinancialManagement";
import { getPageBySlug } from "@/src/lib/wordpress";
import { constructMetadata } from "@/src/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('cloud-financial-management');
  return constructMetadata({
    title: page?.title || "Cloud Financial Management (FinOps)",
    description: "Maximize the business value of every cloud dollar through architectural efficiency.",
  });
}

export default async function Page() {
  const wordpressData = await getPageBySlug('cloud-financial-management');
  return <CloudFinancialManagement wordpressData={wordpressData} />;
}
