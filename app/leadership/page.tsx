import Leadership from "@/src/pages_migrated/about/Leadership";
import { getPageBySlug } from "@/src/lib/wordpress";

export default async function Page() {
  const wordpressData = await getPageBySlug('leadership');
  return <Leadership wordpressData={wordpressData} />;
}
