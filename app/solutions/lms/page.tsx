import LMS from "@/src/pages_migrated/solutions/LMS";
import { getPageBySlug } from "@/src/lib/wordpress";

export default async function Page() {
  const wordpressData = await getPageBySlug('lms');
  return <LMS wordpressData={wordpressData} />;
}
