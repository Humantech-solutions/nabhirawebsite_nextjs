import CloudNativeDevelopment from "@/src/pages_migrated/services/cloud/CloudNativeDevelopment";
import { getPageBySlug } from "@/src/lib/wordpress";
import { constructMetadata } from "@/src/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('cloud-native-development');
  return constructMetadata({
    title: page?.title || "Cloud Native Development",
    description: "Build ultra-scalable, resilient applications using serverless, containers, and microservices.",
  });
}

export default async function Page() {
  const wordpressData = await getPageBySlug('cloud-native-development');
  return <CloudNativeDevelopment wordpressData={wordpressData} />;
}
