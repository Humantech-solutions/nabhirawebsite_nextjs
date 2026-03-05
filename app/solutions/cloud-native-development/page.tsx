import CloudNativeDevelopment from "@/src/pages_migrated/solutions/CloudNativeDevelopment";
import { getPageBySlug } from "@/src/lib/wordpress";

export default async function Page() {
  const wordpressData = await getPageBySlug('cloud-native-development');
  return <CloudNativeDevelopment wordpressData={wordpressData} />;
}
