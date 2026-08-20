import Events from "@/src/pages_migrated/resources/Events";
import { getPageBySlug, getEvents } from "@/src/lib/wordpress";
import { constructMetadata } from "@/src/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('events');
  return constructMetadata({
    title: page?.title || "Upcoming Events & Webinars",
    description: page?.excerpt || "Join our architects and industry leaders as they dismantle the future of digital enterprise.",
  });
}

export default async function Page() {
  const [wordpressPage, eventsData] = await Promise.all([
    getPageBySlug('events'),
    getEvents()
  ]);

  return <Events wordpressData={wordpressPage} eventsData={eventsData} globalSettings={wordpressPage?.globalSettings} />;
}
