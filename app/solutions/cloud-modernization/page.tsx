import CloudModernization from "@/src/pages_migrated/services/cloud/CloudModernization";
import { getPageBySlug } from "@/src/lib/wordpress";
import { constructMetadata } from "@/src/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('cloud-modernization');
  return constructMetadata({
    title: page?.title || "Cloud Modernization",
    description: "Modernize your legacy applications and infrastructure for a cloud-native future.",
  });
}

export default async function Page() {
  const wordpressData = await getPageBySlug('cloud-modernization');
  return <CloudModernization wordpressData={wordpressData} />;
}
