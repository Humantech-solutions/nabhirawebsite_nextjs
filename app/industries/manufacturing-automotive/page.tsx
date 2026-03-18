import ManufacturingAutomotive from "../../../src/pages_migrated/industries/ManufacturingAutomotive";
import { getPageBySlug } from "../../../src/lib/wordpress";

export default async function ManufacturingAutomotivePage() {
  const wordpressData = await getPageBySlug("manufacturing-automotive");
  return <ManufacturingAutomotive wordpressData={wordpressData} />;
}
