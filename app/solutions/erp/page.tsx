import ERP from "@/src/pages_migrated/solutions/ERP";
import { getPageBySlug } from "@/src/lib/wordpress";
import { constructMetadata } from "@/src/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('erp');
  return constructMetadata({
    title: page?.title || "ERP Solutions",
    description: "Enterprise Resource Planning solutions tailored for your business efficiency.",
  });
}

export default async function Page() {
  const wordpressData = await getPageBySlug('erp');
  return <ERP wordpressData={wordpressData} />;
}
