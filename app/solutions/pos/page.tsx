import POS from "@/src/pages_migrated/solutions/POS";
import { getPageBySlug } from "@/src/lib/wordpress";
import { constructMetadata } from "@/src/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('pos');
  return constructMetadata({
    title: page?.title || "POS Solutions",
    description: "Modern Point of Sale systems for retail and service industries.",
  });
}

export default async function Page() {
  const wordpressData = await getPageBySlug('pos');
  return <POS wordpressData={wordpressData} />;
}
