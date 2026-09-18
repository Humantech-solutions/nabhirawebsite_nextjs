import CaseStudies from "@/src/pages_migrated/resources/CaseStudies";
import { getPageBySlug, getCaseStudies } from "@/src/lib/wordpress";
import { constructMetadata, getWebPageSchema } from "@/src/lib/seo";
import { Schema } from "@/src/components/SEO/Schema";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('case-studies');
  return constructMetadata({
    title: page?.title || "Architectural Proof Points",
    description: "Real-world evidence of how we transform complex legacy estates into agile digital machines.",
    path: "/resources/case-studies/",
  });
}

export default async function Page() {
  const [wordpressPage, caseStudiesData] = await Promise.all([
    getPageBySlug('case-studies'),
    getCaseStudies()
  ]);
  
  const pageSchema = getWebPageSchema({
    title: wordpressPage?.title || "Architectural Proof Points",
    description: "Real-world evidence of how we transform complex legacy estates into agile digital machines.",
    path: "/resources/case-studies/",
  });

  return (
    <>
      <Schema jsonLd={pageSchema} />
      <CaseStudies wordpressData={wordpressPage} caseStudiesData={caseStudiesData} globalSettings={wordpressPage?.globalSettings} />
    </>
  );
}
