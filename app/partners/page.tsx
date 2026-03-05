import Partners from "@/src/pages_migrated/about/Partners";
import { getPageBySlug } from "@/src/lib/wordpress";

export default async function Page() {
  const wordpressData = await getPageBySlug('partners');
  return <Partners wordpressData={wordpressData} />;
}
