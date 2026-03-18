import AgenticAI from "@/src/pages_migrated/services/ai/AgenticAI";
import { getPageBySlug } from "@/src/lib/wordpress";
import { constructMetadata } from "@/src/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('agentic-ai');
  return constructMetadata({
    title: page?.title || "Agentic AI",
    description: "Harness the power of autonomous AI agents for your enterprise operations.",
  });
}

export default async function Page() {
  const wordpressData = await getPageBySlug('agentic-ai');
  return <AgenticAI wordpressData={wordpressData} />;
}
