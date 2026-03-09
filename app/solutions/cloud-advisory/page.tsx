import CloudAdvisory from "@/src/pages_migrated/services/cloud/CloudAdvisory";
import { getPageBySlug } from "@/src/lib/wordpress";
import { constructMetadata } from "@/src/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('cloud-advisory');
  return constructMetadata({
    title: page?.title || "Cloud Advisory",
    description: "Expert guidance on your cloud strategy and technical architecture.",
  });
}

export default async function Page() {
  const wordpressData = await getPageBySlug('cloud-advisory');
  return <CloudAdvisory wordpressData={wordpressData} />;
}
