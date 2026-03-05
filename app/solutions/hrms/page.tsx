import HRMS from "@/src/pages_migrated/solutions/HRMS";
import { getPageBySlug } from "@/src/lib/wordpress";

export default async function Page() {
  const wordpressData = await getPageBySlug('hrms');
  return <HRMS wordpressData={wordpressData} />;
}
