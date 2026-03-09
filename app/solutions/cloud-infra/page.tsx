import CloudInfra from "@/src/pages_migrated/solutions/CloudInfra";
import { getPageBySlug } from "@/src/lib/wordpress";
import { constructMetadata } from "@/src/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('cloud-infra');
  return constructMetadata({
    title: page?.title || "Cloud Infra Deployment & Monitoring",
    description: "Predictive monitoring, sovereign cloud governance, and elastic infrastructure.",
  });
}

export default async function Page() {
  const wordpressData = await getPageBySlug('cloud-infra');
  return <CloudInfra wordpressData={wordpressData} />;
}
