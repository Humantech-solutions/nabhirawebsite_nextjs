import AIEngineering from "@/src/pages_migrated/services/ai/AIEngineering";
import { getPageBySlug } from "@/src/lib/wordpress";
import { constructMetadata } from "@/src/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('ai-engineering');
  return constructMetadata({
    title: page?.title || "AI Engineering",
    description: "Robust AI engineering services for building and scaling AI solutions.",
  });
}

export default async function Page() {
  const wordpressData = await getPageBySlug('ai-engineering');
  return <AIEngineering wordpressData={wordpressData} />;
}
