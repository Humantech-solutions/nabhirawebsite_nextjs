import Careers from "@/src/pages_migrated/Careers";
import { getPageBySlug, getGlobalSettings, getCareerPosts } from "@/src/lib/wordpress";
import { getRecruitProJobs } from "@/src/lib/recruitpro";
import { constructMetadata } from "@/src/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('careers');
  return constructMetadata({
    title: page?.title || "Careers",
    description: "Join Hutech Solutions Technologies and build what is next. Explore our open positions in AI, Cloud, and Data Engineering.",
  });
}

export default async function Page() {
  const wordpressData = await getPageBySlug('careers');
  const recruitProJobs = await getRecruitProJobs() || [];
  const wpJobsRaw = await getCareerPosts() || [];
  const allJobs = [...recruitProJobs, ...wpJobsRaw];
  
  return <Careers wordpressData={wordpressData} wpJobs={allJobs} />;
}
