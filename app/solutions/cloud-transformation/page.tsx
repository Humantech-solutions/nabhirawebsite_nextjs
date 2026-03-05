import CloudTransformation from "../../../src/pages_migrated/CloudTransformation";
import { getPageBySlug } from "@/src/lib/wordpress";

export default async function Page() {
  const wordpressData = await getPageBySlug('cloud-transformation');
  return <CloudTransformation wordpressData={wordpressData} />;
}
