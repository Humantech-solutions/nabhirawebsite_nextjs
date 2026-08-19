import CaseStudies from "@/src/pages_migrated/resources/CaseStudies";
import { getPageBySlug, getCaseStudies } from "@/src/lib/wordpress";
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
  const [wordpressPage, caseStudiesData] = await Promise.all([
    getPageBySlug('case-studies'),
    getCaseStudies()
  ]);
  
  return <CaseStudies wordpressData={wordpressPage} caseStudiesData={caseStudiesData} globalSettings={wordpressPage?.globalSettings} />;
}
