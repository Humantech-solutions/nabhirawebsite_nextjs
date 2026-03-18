import News from "@/src/pages_migrated/resources/News";
import { getPageBySlug } from "@/src/lib/wordpress";
import { constructMetadata } from "@/src/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('news');
  return constructMetadata({
    title: page?.title || "Latest Announcements",
    description: "Stay updated with Nabhira's latest milestones, partnerships, and industry recognitions.",
  });
}

export default async function Page() {
  const wordpressData = await getPageBySlug('news');
  return <News wordpressData={wordpressData} />;
}
