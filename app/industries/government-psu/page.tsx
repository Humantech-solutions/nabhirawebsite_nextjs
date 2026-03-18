import GovernmentPSU from "@/src/pages_migrated/industries/GovernmentPSU";
import { getPageBySlug } from "@/src/lib/wordpress";
import { constructMetadata } from "@/src/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('government-psu') || await getPageBySlug('government-psus');
  return constructMetadata({
    title: page?.title || "Government & PSU",
    description: "Enabling digital governance and public sector transformation with AI and Cloud solutions.",
  });
}

export default async function Page() {
  const wordpressData = await getPageBySlug('government-psu') || await getPageBySlug('government-psus');
  return <GovernmentPSU wordpressData={wordpressData} />;
}
