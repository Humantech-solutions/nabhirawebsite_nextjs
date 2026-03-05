import CaseStudies from "@/src/pages_migrated/resources/CaseStudies";
import { getPageBySlug } from "@/src/lib/wordpress";

export default async function Page() {
  const wordpressData = await getPageBySlug('case-studies');
  return <CaseStudies wordpressData={wordpressData} />;
}
