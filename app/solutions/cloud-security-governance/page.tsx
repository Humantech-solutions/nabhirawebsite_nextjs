import CloudSecurityGovernance from "@/src/pages_migrated/services/cloud/CloudSecurityGovernance";
import { getPageBySlug } from "@/src/lib/wordpress";

export default async function Page() {
  const wordpressData = await getPageBySlug('cloud-security-governance');
  return <CloudSecurityGovernance wordpressData={wordpressData} />;
}
