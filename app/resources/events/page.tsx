import Events from "@/src/pages_migrated/Events";
import { getPageBySlug } from "@/src/lib/wordpress";

export default async function Page() {
  const wordpressData = await getPageBySlug('events');
  return <Events wordpressData={wordpressData} />;
}
