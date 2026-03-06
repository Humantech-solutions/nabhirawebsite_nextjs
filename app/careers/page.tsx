import Careers from "@/src/pages_migrated/Careers";
import { getPageBySlug, getCareerPosts } from "@/src/lib/wordpress";

export default async function Page() {
  const wordpressData = await getPageBySlug('careers');
  const wpJobs = await getCareerPosts();
  return <Careers wordpressData={wordpressData} wpJobs={wpJobs} />;
}
