import HealthcarePharma from "@/src/pages_migrated/HealthcarePharma";
import { getPageBySlug } from "@/src/lib/wordpress";
import { constructMetadata } from "@/src/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('healthcare-pharma');
  return constructMetadata({
    title: page?.title || "Healthcare & Pharma Solutions",
    description: "Innovative technology solutions for the healthcare and pharmaceutical industries.",
  });
}

export default async function Page() {
  const wordpressData = await getPageBySlug('healthcare-pharma');
  return <HealthcarePharma wordpressData={wordpressData} />;
}
