import LMS from "@/src/pages_migrated/solutions/LMS";
import { getPageBySlug } from "@/src/lib/wordpress";
import { constructMetadata } from "@/src/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('lms');
  return constructMetadata({
    title: page?.title || "LMS Solutions",
    description: "Learning Management Systems for effective corporate training and education.",
  });
}

export default async function Page() {
  const wordpressData = await getPageBySlug('lms');
  return <LMS wordpressData={wordpressData} />;
}
