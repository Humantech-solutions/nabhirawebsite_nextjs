import DataAnalyticsSolution from "@/src/pages_migrated/services/data/DataAnalyticsSolution";
import { getPageBySlug } from "@/src/lib/wordpress";

export default async function Page() {
  const wordpressData = await getPageBySlug('data-analytics-solution');
  return <DataAnalyticsSolution wordpressData={wordpressData} />;
}
