import CloudModernization from "@/src/pages_migrated/solutions/CloudModernization";
import { getPageBySlug } from "@/src/lib/wordpress";

export default async function Page() {
  const wordpressData = await getPageBySlug('cloud-modernization');
  return <CloudModernization wordpressData={wordpressData} />;
}
