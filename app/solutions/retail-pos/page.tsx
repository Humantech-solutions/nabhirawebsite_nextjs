import RetailPOS from "@/src/pages_migrated/solutions/RetailPOS";
import { getPageBySlug } from "@/src/lib/wordpress";
import { constructMetadata } from "@/src/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('retail-pos');
  return constructMetadata({
    title: page?.title || "Retail POS System | Hutech Solutions",
    description: "Modern Point of Sale systems for retail and service industries by Hutech Solutions.",
  });
}

export default async function Page() {
  const wordpressData = await getPageBySlug('retail-pos');
  return <RetailPOS wordpressData={wordpressData} />;
}
