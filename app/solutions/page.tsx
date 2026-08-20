import Solutions from "@/src/pages_migrated/Solutions";
import { getPageBySlug } from "@/src/lib/wordpress";
import { constructMetadata } from "@/src/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('solutions');
  return constructMetadata({
    title: page?.title || "Solutions",
    description: "Explore our suite of enterprise-grade software solutions, from AI-powered POS to modular ERP systems.",
  });
}

export default async function Page() {
  const wordpressData = await getPageBySlug('solutions');
  return <Solutions wordpressData={wordpressData} />;
}
