import HealthcarePharma from "@/src/pages_migrated/industries/HealthcarePharma";
import { getPageBySlug } from "@/src/lib/wordpress";
import { constructMetadata } from "@/src/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('healthcare-pharma');
  return constructMetadata({
    title: page?.title || "Healthcare & Pharma",
    description: "Innovative technology solutions for healthcare providers and pharmaceutical companies.",
  });
}

export default async function Page() {
  const wordpressData = await getPageBySlug('healthcare-pharma');
  return <HealthcarePharma wordpressData={wordpressData} />;
}
