import Solutions from "@/src/pages_migrated/Solutions";
import { getPageBySlug } from "@/src/lib/wordpress";

export default async function Page() {
  const wordpressData = await getPageBySlug('solutions');
  return <Solutions wordpressData={wordpressData} />;
}
