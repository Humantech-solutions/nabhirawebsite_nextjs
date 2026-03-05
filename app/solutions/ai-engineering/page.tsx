import AIEngineering from "@/src/pages_migrated/services/ai/AIEngineering";
import { getPageBySlug } from "@/src/lib/wordpress";

export default async function Page() {
  const wordpressData = await getPageBySlug('ai-engineering');
  return <AIEngineering wordpressData={wordpressData} />;
}
