import IntelligentAutomation from "@/src/pages_migrated/solutions/IntelligentAutomation";
import { getPageBySlug } from "@/src/lib/wordpress";
import { constructMetadata } from "@/src/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('intelligent-automation');
  return constructMetadata({
    title: page?.title || "Intelligent Automation",
    description: "Streamline your business processes with AI-driven intelligent automation.",
  });
}

export default async function Page() {
  const wordpressData = await getPageBySlug('intelligent-automation');
  return <IntelligentAutomation wordpressData={wordpressData} />;
}
