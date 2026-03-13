import GovernmentPSU from "../../../src/pages_migrated/industries/GovernmentPSU";
import { getPageBySlug } from "../../../src/lib/wordpress";

export default async function GovernmentPSUPage() {
  const wordpressData = await getPageBySlug("government-psus");
  return <GovernmentPSU wordpressData={wordpressData} />;
}
