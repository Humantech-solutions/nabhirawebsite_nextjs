import DataGovernance from "@/src/pages_migrated/services/data/DataGovernance";
import { getPageBySlug } from "@/src/lib/wordpress";

export default async function Page() {
  const wordpressData = await getPageBySlug('data-governance');
  return <DataGovernance wordpressData={wordpressData} />;
}
