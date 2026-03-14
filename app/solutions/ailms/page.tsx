import AILMSSolution from "@/src/pages_migrated/solutions/AILMS";
import { getPageBySlug } from "@/src/lib/wordpress";
import { constructMetadata } from "@/src/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('lms');
  return constructMetadata({
    title: page?.title || "AI Powered Learning Management System | Nabhira Technologies",
    description: "Learning Management Systems for effective corporate training and education.",
  });
}

export default async function Page() {
  const wordpressData = await getPageBySlug('lms');
  return <AILMSSolution />;
}
