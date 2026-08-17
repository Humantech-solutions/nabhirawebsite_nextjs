import EventDetail from "@/src/pages_migrated/resources/EventDetail";
import { getEventBySlug, getEvents } from "@/src/lib/wordpress";
import { constructMetadata, getBreadcrumbSchema } from "@/src/lib/seo";
import { Schema } from "@/src/components/SEO/Schema";
import { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const events = await getEvents();
  return events.map((event: any) => ({
    slug: event.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = await getEventBySlug(slug);

  if (!event) return constructMetadata({ title: "Event Not Found" });

  return constructMetadata({
    title: event.title,
    description: event.excerpt || event.title,
    image: event.image,
  });
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const event = await getEventBySlug(slug);

  if (!event) return null;

  return (
    <>
      <Schema
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Event",
          name: event.title,
          description: event.excerpt || event.title,
          startDate: event.date,
          location: {
            "@type": "Place",
            name: event.location,
            address: event.location,
          },
          image: [event.image],
        }}
      />
      <Schema
        jsonLd={getBreadcrumbSchema([
          { name: "Home", item: "/" },
          { name: "Resources", item: "/resources/events" },
          { name: "Events", item: "/resources/events" },
          { name: event.title, item: `/resources/events/${slug}` },
        ])}
      />
      <EventDetail wordpressData={event} />
    </>
  );
}
