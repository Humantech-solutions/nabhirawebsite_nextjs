import POS from "@/src/pages_migrated/solutions/POS";
import { getPageBySlug } from "@/src/lib/wordpress";

export default async function Page() {
  const wordpressData = await getPageBySlug('pos');
  return <POS wordpressData={wordpressData} />;
}
