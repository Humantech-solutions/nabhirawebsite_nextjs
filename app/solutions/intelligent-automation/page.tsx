import IntelligentAutomation from "@/src/pages_migrated/solutions/IntelligentAutomation";
import { getPageBySlug } from "@/src/lib/wordpress";

export default async function Page() {
  const wordpressData = await getPageBySlug('intelligent-automation');
  return <IntelligentAutomation wordpressData={wordpressData} />;
}
