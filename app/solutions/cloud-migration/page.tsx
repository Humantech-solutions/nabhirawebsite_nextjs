import CloudMigration from "@/src/pages_migrated/services/cloud/CloudMigration";
import { getPageBySlug } from "@/src/lib/wordpress";
import { constructMetadata } from "@/src/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('cloud-migration');
  return constructMetadata({
    title: page?.title || "Cloud Migration Services",
    description: "Move mission-critical workloads to the cloud with surgical precision and zero risk.",
  });
}

export default async function Page() {
  const wordpressData = await getPageBySlug('cloud-migration');
  return <CloudMigration wordpressData={wordpressData} />;
}
