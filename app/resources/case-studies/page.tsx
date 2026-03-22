import CaseStudies from "@/src/pages_migrated/resources/CaseStudies";
import { getPageBySlug, getCaseStudies, getGlobalSettings } from "@/src/lib/wordpress";
import { constructMetadata } from "@/src/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('case-studies');
  return constructMetadata({
    title: page?.title || "Architectural Proof Points",
    description: "Real-world evidence of how we transform complex legacy estates into agile digital machines.",
  });
}

export default async function Page() {
  const [wordpressPage, caseStudiesData, fallbackGlobalSettings] = await Promise.all([
    getPageBySlug('case-studies'),
    getCaseStudies(),
    getGlobalSettings()
  ]);
  
  // Prioritize global settings from the case studies page itself if present
  const globalSettings = wordpressPage?.globalSettings || fallbackGlobalSettings;
  
  return <CaseStudies wordpressData={wordpressPage} caseStudiesData={caseStudiesData} globalSettings={globalSettings} />;
}
