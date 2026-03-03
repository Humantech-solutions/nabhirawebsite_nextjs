import About from "@/src/pages_migrated/About";
import { getPageBySlug } from "@/src/lib/wordpress";

export default async function Page() {
  const wordpressData = await getPageBySlug('about');
  return <About wordpressData={wordpressData} />;
}
