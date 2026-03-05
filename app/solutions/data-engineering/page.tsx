import DataEngineering from "@/src/pages_migrated/services/data/DataEngineering";
import { getPageBySlug } from "@/src/lib/wordpress";

export default async function Page() {
  const wordpressData = await getPageBySlug('data-engineering');
  return <DataEngineering wordpressData={wordpressData} />;
}
