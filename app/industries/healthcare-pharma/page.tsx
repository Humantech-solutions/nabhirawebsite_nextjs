import HealthcarePharma from "../../../src/pages_migrated/industries/HealthcarePharma";
import { getPageBySlug } from "@/src/lib/wordpress";

export default async function Page() {
  const wordpressData = await getPageBySlug('healthcare-pharma');
  return <HealthcarePharma wordpressData={wordpressData} />;
}
