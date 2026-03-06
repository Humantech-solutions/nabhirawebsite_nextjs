import CloudMigration from "@/src/pages_migrated/services/cloud/CloudMigration";
import { getPageBySlug } from "@/src/lib/wordpress";

export default async function Page() {
  const wordpressData = await getPageBySlug('cloud-migration');
  return <CloudMigration wordpressData={wordpressData} />;
}
