import DataFoundation from "@/src/pages_migrated/solutions/DataFoundation";
import { getPageBySlug } from "@/src/lib/wordpress";

export default async function Page() {
  const wordpressData = await getPageBySlug('data-foundation');
  return <DataFoundation wordpressData={wordpressData} />;
}
