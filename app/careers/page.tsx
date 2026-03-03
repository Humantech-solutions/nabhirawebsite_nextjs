import Careers from "@/src/pages_migrated/Careers";
import { getPageBySlug } from "@/src/lib/wordpress";

export default async function Page() {
  const wordpressData = await getPageBySlug('careers');
  return <Careers wordpressData={wordpressData} />;
}
