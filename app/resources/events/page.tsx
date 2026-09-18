import Events from "@/src/pages_migrated/resources/Events";
import { getPageBySlug, getEvents } from "@/src/lib/wordpress";
import { constructMetadata, getWebPageSchema } from "@/src/lib/seo";
import { Schema } from "@/src/components/SEO/Schema";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('events');
  return constructMetadata({
    title: page?.title || "Upcoming Events & Webinars",
    description: page?.excerpt || "Join our architects and industry leaders as they dismantle the future of digital enterprise.",
    path: "/resources/events/",
  });
}

export default async function Page() {
  const [wordpressPage, eventsData] = await Promise.all([
    getPageBySlug('events'),
    getEvents()
  ]);

  const pageSchema = getWebPageSchema({
    title: wordpressPage?.title || "Upcoming Events & Webinars",
    description: wordpressPage?.excerpt || "Join our architects and industry leaders as they dismantle the future of digital enterprise.",
    path: "/resources/events/",
  });

  return (
    <>
      <Schema jsonLd={pageSchema} />
      <Events wordpressData={wordpressPage} eventsData={eventsData} globalSettings={wordpressPage?.globalSettings} />
    </>
  );
}
