import GovernmentPSU from "../../../src/pages_migrated/industries/GovernmentPSU";
import { getPageBySlug } from "@/src/lib/wordpress";

export default async function Page() {
  const wordpressData = await getPageBySlug('government-psu');
  return <GovernmentPSU wordpressData={wordpressData} />;
}
