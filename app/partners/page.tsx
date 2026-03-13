import Partners from "../../src/pages_migrated/about/Partners";
import { getPageBySlug } from "../../src/lib/wordpress";

export default async function PartnersPage() {
  const wordpressData = await getPageBySlug("partners-ecosystem");
  return <Partners wordpressData={wordpressData} />;
}
