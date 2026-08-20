import Awards from "@/src/pages_migrated/about/Awards";
import { getPageBySlug } from "@/src/lib/wordpress";

export default async function AwardsPage() {
  const wordpressData = await getPageBySlug("awards");
  return <Awards wordpressData={wordpressData} />;
}
