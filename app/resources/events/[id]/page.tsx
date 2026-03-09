import EventDetail from "@/src/pages_migrated/resources/EventDetail";
import { events } from "@/src/data/migrated_data";
import { constructMetadata, getBreadcrumbSchema } from "@/src/lib/seo";
import { Schema } from "@/src/components/SEO/Schema";
import { siteConfig } from "@/src/config/site";
import { Metadata } from 'next';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return events.map((event) => ({
    id: event.id.toString(),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const event = events.find((e) => e.id.toString() === id);

  if (!event) return constructMetadata({ title: "Event Not Found" });

  return constructMetadata({
    title: event.title,
    description: event.description,
    image: event.image,
  });
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const event = events.find((e) => e.id.toString() === id);

  if (!event) return null;

  return (
    <>
      <Schema
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Event",
          name: event.title,
          description: event.description,
          startDate: event.date, // Note: migrated_data has human-readable strings
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
          { name: event.title, item: `/resources/events/${id}` },
        ])}
      />
      <EventDetail />
    </>
  );
}
