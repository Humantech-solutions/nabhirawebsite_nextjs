import Clients from "@/src/pages_migrated/about/Clients";
import { getPageBySlug } from "@/src/lib/wordpress";

export default async function Page() {
  const wordpressData = await getPageBySlug('clients');
  
  return <Clients wordpressData={wordpressData} />;
}
