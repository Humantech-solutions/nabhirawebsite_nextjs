import ArtificialIntelligence from "../../../src/pages_migrated/ArtificialIntelligence";
import { getPageBySlug } from "@/src/lib/wordpress";

export default async function Page() {
  const wordpressData = await getPageBySlug('artificial-intelligence');
  return <ArtificialIntelligence wordpressData={wordpressData} />;
}
