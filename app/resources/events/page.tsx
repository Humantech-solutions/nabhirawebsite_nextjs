import Events from "@/src/pages_migrated/resources/Events";
import { getPageBySlug } from "@/src/lib/wordpress";
import { constructMetadata } from "@/src/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('events');
  return constructMetadata({
    title: page?.title || "Upcoming Events & Webinars",
    description: "Join our architects and industry leaders as they dismantle the future of digital enterprise.",
  });
}

export default async function Page() {
  const wordpressData = await getPageBySlug('events');
  return <Events wordpressData={wordpressData} />;
}
