import CloudSecurityGovernance from "@/src/pages_migrated/services/cloud/CloudSecurityGovernance";
import { getPageBySlug } from "@/src/lib/wordpress";
import { constructMetadata } from "@/src/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('cloud-security-governance');
  return constructMetadata({
    title: page?.title || "Cloud Security & Governance",
    description: "Automated compliance and comprehensive security governance for regulated industries.",
  });
}

export default async function Page() {
  const wordpressData = await getPageBySlug('cloud-security-governance');
  return <CloudSecurityGovernance wordpressData={wordpressData} />;
}
