import EnterprisePOS from "@/src/pages_migrated/solutions/EnterprisePOS";
import { getPageBySlug } from "@/src/lib/wordpress";
import { constructMetadata } from "@/src/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('enterprise-pos');
  return constructMetadata({
    title: page?.title || "Enterprise POS & Franchise Management | Hutech Solutions",
    description: "Centralized control for multi-outlet operations with Hutech Solutions' AI-Powered Enterprise POS.",
  });
}

export default async function Page() {
  const wordpressData = await getPageBySlug('enterprise-pos');
  return <EnterprisePOS wordpressData={wordpressData} />;
}
