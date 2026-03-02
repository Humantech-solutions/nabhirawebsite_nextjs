import News from "@/src/pages_migrated/News";
import { getPageBySlug } from "@/src/lib/wordpress";

export default async function Page() {
  const wordpressData = await getPageBySlug('news');
  return <News wordpressData={wordpressData} />;
}
