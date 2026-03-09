import CloudTransformation from "../../../src/pages_migrated/services/cloud/CloudTransformation";
import { getPageBySlug } from "@/src/lib/wordpress";
import { constructMetadata } from "@/src/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('cloud-transformation');
  return constructMetadata({
    title: page?.title || "Cloud Transformation",
    description: "Accelerate your digital evolution with our comprehensive cloud transformation services.",
  });
}

export default async function Page() {
  const wordpressData = await getPageBySlug('cloud-transformation');
  return <CloudTransformation wordpressData={wordpressData} />;
}
