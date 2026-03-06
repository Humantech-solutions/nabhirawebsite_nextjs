import CaseStudyDetail from "@/src/pages_migrated/resources/CaseStudyDetail";
import { caseStudies } from "@/src/data/migrated_data";

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    id: study.id.toString(),
  }));
}

export default function Page() {
  return <CaseStudyDetail />;
}
