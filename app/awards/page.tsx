import Awards from "@/src/pages_migrated/Awards";
import { getPageBySlug } from "@/src/lib/wordpress";

export default async function Page() {
  const wordpressData = await getPageBySlug('awards');
  return <Awards wordpressData={wordpressData} />;
}
