import CloudInfraSolution from "@/src/pages_migrated/solutions/CloudInfra";
import { getPageBySlug } from "@/src/lib/wordpress";

export default async function Page() {
  const wordpressData = await getPageBySlug('cloud-infra');
  return <CloudInfraSolution wordpressData={wordpressData} />;
}
