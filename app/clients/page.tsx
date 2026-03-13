import Clients from "../../src/pages_migrated/about/Clients";
import { getPageBySlug } from "../../src/lib/wordpress";

export default async function ClientsPage() {
  const wordpressData = await getPageBySlug("our-clients");
  return <Clients wordpressData={wordpressData} />;
}
