import NewsDetail from "@/src/pages_migrated/resources/NewsDetail";
import { newsItems } from "@/src/data/migrated_data";

export function generateStaticParams() {
  return newsItems.map((item) => ({
    id: item.id.toString(),
  }));
}

export default function Page() {
  return <NewsDetail />;
}
