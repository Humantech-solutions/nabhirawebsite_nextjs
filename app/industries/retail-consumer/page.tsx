import RetailConsumer from "../../../src/pages_migrated/industries/RetailConsumer";
import { getPageBySlug } from "../../../src/lib/wordpress";

export default async function RetailConsumerPage() {
  const wordpressData = await getPageBySlug("retail-consumer-goods");
  return <RetailConsumer wordpressData={wordpressData} />;
}
