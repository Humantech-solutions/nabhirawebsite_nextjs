import AgenticAI from "@/src/pages_migrated/solutions/AgenticAI";
import { getPageBySlug } from "@/src/lib/wordpress";

export default async function Page() {
  const wordpressData = await getPageBySlug('agentic-ai');
  return <AgenticAI wordpressData={wordpressData} />;
}
