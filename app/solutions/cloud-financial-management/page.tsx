import CloudFinancialManagement from "@/src/pages_migrated/solutions/CloudFinancialManagement";
import { getPageBySlug } from "@/src/lib/wordpress";

export default async function Page() {
  const wordpressData = await getPageBySlug('cloud-financial-management');
  return <CloudFinancialManagement wordpressData={wordpressData} />;
}
