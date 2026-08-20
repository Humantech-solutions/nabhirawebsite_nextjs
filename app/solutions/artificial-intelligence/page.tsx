import ArtificialIntelligence from "@/src/pages_migrated/services/ai/ArtificialIntelligence";
import { getPageBySlug } from "@/src/lib/wordpress";
import { constructMetadata } from "@/src/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('artificial-intelligence');
  return constructMetadata({
    title: page?.title || "Artificial Intelligence",
    description: "Leverage cutting-edge AI technologies to transform your business.",
  });
}

export default async function Page() {
  const wordpressData = await getPageBySlug('artificial-intelligence');
  return <ArtificialIntelligence wordpressData={wordpressData} />;
}
