import Contact from "@/src/pages_migrated/Contact";
import { getPageBySlug } from "@/src/lib/wordpress";

export default async function Page() {
  const wordpressData = await getPageBySlug('contact');
  return <Contact wordpressData={wordpressData} />;
}
