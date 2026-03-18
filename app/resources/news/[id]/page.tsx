import NewsDetail from "@/src/pages_migrated/resources/NewsDetail";
import { newsItems } from "@/src/data/migrated_data";
import { constructMetadata, getArticleSchema, getBreadcrumbSchema } from "@/src/lib/seo";
import { Schema } from "@/src/components/SEO/Schema";
import { siteConfig } from "@/src/config/site";
import { Metadata } from 'next';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return newsItems.map((item) => ({
    id: item.id.toString(),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const item = newsItems.find((n) => n.id.toString() === id);

  if (!item) return constructMetadata({ title: "News Not Found" });

  return constructMetadata({
    title: item.title,
    description: item.title, // NewsItems don't have separate excerpt in migrated_data
    image: item.image,
  });
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const item = newsItems.find((n) => n.id.toString() === id);

  if (!item) return null;

  const url = `${siteConfig.url}/resources/news/${id}`;

  return (
    <>
      <Schema
        jsonLd={getArticleSchema({
          title: item.title,
          description: item.title,
          image: item.image,
          datePublished: item.date,
          authorName: "Nabhira News",
          url: url,
        })}
      />
      <Schema
        jsonLd={getBreadcrumbSchema([
          { name: "Home", item: "/" },
          { name: "Resources", item: "/resources/news" },
          { name: "News", item: "/resources/news" },
          { name: item.title, item: `/resources/news/${id}` },
        ])}
      />
      <NewsDetail />
    </>
  );
}
