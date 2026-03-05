import RetailConsumer from "../../../src/pages_migrated/RetailConsumer";
import { getPageBySlug } from "@/src/lib/wordpress";

export default async function Page() {
  const wordpressData = await getPageBySlug('retail-consumer');
  return <RetailConsumer wordpressData={wordpressData} />;
}
