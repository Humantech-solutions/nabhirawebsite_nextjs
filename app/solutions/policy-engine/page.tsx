import PolicyEngine from "@/src/pages_migrated/solutions/PolicyEngine";
import { getPageBySlug } from "@/src/lib/wordpress";

export default async function Page() {
  const wordpressData = await getPageBySlug('policy-engine');
  return <PolicyEngine wordpressData={wordpressData} />;
}
