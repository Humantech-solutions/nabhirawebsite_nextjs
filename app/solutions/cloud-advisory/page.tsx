

import CloudAdvisory from "@/src/pages_migrated/solutions/CloudAdvisory";
import { getPageBySlug } from "@/src/lib/wordpress";

export default async function Page() {
  const wordpressData = await getPageBySlug('cloud-advisory');
  return <CloudAdvisory wordpressData={wordpressData} />;
}
