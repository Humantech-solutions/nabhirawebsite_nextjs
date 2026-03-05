import DataAnalytics from "@/src/pages_migrated/DataAnalytics";
import { getPageBySlug } from "@/src/lib/wordpress";

export default async function Page() {
  const wordpressData = await getPageBySlug('data-analytics');
  return <DataAnalytics wordpressData={wordpressData} />;
}
