import Careers from "@/src/pages_migrated/Careers";
import { getPageBySlug, getGlobalSettings, getCareerPosts } from "@/src/lib/wordpress";
import { getRecruitProJobs } from "@/src/lib/recruitpro";
import { constructMetadata, getWebPageSchema } from "@/src/lib/seo";
import { Schema } from "@/src/components/SEO/Schema";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('careers');
  return constructMetadata({
    title: page?.title || "Careers",
    description: "Join Hutech Solutions Technologies and build what is next. Explore our open positions in AI, Cloud, and Data Engineering.",
    path: "/careers/",
  });
}

export default async function Page() {
  const wordpressData = await getPageBySlug('careers');
  const recruitProJobs = await getRecruitProJobs() || [];
  const wpJobsRaw = await getCareerPosts() || [];
  const allJobs = [...recruitProJobs, ...wpJobsRaw];
  
  const pageSchema = getWebPageSchema({
    title: wordpressData?.title || "Careers",
    description: "Join Hutech Solutions Technologies and build what is next. Explore our open positions in AI, Cloud, and Data Engineering.",
    path: "/careers/",
  });

  return (
    <>
      <Schema jsonLd={pageSchema} />
      <Careers wordpressData={wordpressData} wpJobs={allJobs} />
    </>
  );
}
