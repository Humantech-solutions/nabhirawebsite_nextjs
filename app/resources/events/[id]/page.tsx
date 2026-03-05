import EventDetail from "@/src/pages_migrated/resources/EventDetail";
import { events } from "@/src/data/migrated_data";

export function generateStaticParams() {
  return events.map((event) => ({
    id: event.id.toString(),
  }));
}

export default function Page() {
  return <EventDetail />;
}
