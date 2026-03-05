import ERP from "@/src/pages_migrated/solutions/ERP";
import { getPageBySlug } from "@/src/lib/wordpress";

export default async function Page() {
  const wordpressData = await getPageBySlug('erp');
  return <ERP wordpressData={wordpressData} />;
}
