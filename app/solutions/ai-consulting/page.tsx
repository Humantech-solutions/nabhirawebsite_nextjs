import AIConsulting from "@/src/pages_migrated/solutions/AIConsulting";
import { getPageBySlug } from "@/src/lib/wordpress";

export default async function Page() {
  const wordpressData = await getPageBySlug('ai-consulting');
  return <AIConsulting wordpressData={wordpressData} />;
}
