import Careers from "@/src/pages_migrated/Careers";
import { getPageBySlug, getCareerPosts } from "@/src/lib/wordpress";
import { constructMetadata } from "@/src/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('careers');
  return constructMetadata({
    title: page?.title || "Careers",
    description: "Join Nabhira Technologies and build what is next. Explore our open positions in AI, Cloud, and Data Engineering.",
  });
}

export default async function Page() {
  const wordpressData = await getPageBySlug('careers');
  const wpJobs = await getCareerPosts();
  return <Careers wordpressData={wordpressData} wpJobs={wpJobs} />;
}
