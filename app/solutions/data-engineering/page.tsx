import DataEngineering from "@/src/pages_migrated/solutions/DataEngineering";
import { getPageBySlug } from "@/src/lib/wordpress";

export default async function Page() {
  const wordpressData = await getPageBySlug('data-engineering');
  return <DataEngineering wordpressData={wordpressData} />;
}
