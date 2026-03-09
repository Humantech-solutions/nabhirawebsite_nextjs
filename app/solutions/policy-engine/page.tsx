import PolicyEngine from "@/src/pages_migrated/solutions/PolicyEngine";
import { getPageBySlug } from "@/src/lib/wordpress";
import { constructMetadata } from "@/src/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('policy-engine');
  return constructMetadata({
    title: page?.title || "Policy Engine",
    description: "Advanced policy engine solutions for corporate compliance and decisioning.",
  });
}

export default async function Page() {
  const wordpressData = await getPageBySlug('policy-engine');
  return <PolicyEngine wordpressData={wordpressData} />;
}
