import AIConsulting from "@/src/pages_migrated/solutions/AIConsulting";
import { getPageBySlug } from "@/src/lib/wordpress";
import { constructMetadata } from "@/src/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('ai-consulting');
  return constructMetadata({
    title: page?.title || "AI Consulting",
    description: "Expert AI consulting to help you navigate the complex landscape of artificial intelligence.",
  });
}

export default async function Page() {
  const wordpressData = await getPageBySlug('ai-consulting');
  return <AIConsulting wordpressData={wordpressData} />;
}
