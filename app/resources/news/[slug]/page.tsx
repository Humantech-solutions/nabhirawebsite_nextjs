import NewsDetail from "@/src/pages_migrated/resources/NewsDetail";
import { getNews, getNewsBySlug } from "@/src/lib/wordpress";
import { constructMetadata, getArticleSchema, getBreadcrumbSchema } from "@/src/lib/seo";
import { Schema } from "@/src/components/SEO/Schema";
import { siteConfig } from "@/src/config/site";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  try {
    const news = await getNews();
    if (!news || news.length === 0) return [{ slug: 'fallback' }];
    return news.map((item) => ({ slug: item.slug }));
  } catch {
    return [{ slug: 'fallback' }];
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = await getNewsBySlug(slug);

  if (!item) return constructMetadata({ title: "News Not Found" });

  return constructMetadata({
    title: item.title,
    description: item.excerpt || item.title,
    image: item.image,
  });
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const item = await getNewsBySlug(slug);
  const newsData = await getNews();

  if (!item) return null;

  const url = `${siteConfig.url}/resources/news/${slug}`;

  return (
    <>
      <Schema
        jsonLd={getArticleSchema({
          title: item.title,
          description: item.excerpt || item.title,
          image: item.image,
          datePublished: item.date,
          authorName: item.source || "Hutech Solutions News",
          url,
        })}
      />
      <Schema
        jsonLd={getBreadcrumbSchema([
          { name: "Home", item: "/" },
          { name: "Resources", item: "/resources/news" },
          { name: "News", item: "/resources/news" },
          { name: item.title, item: `/resources/news/${slug}` },
        ])}
      />
      <NewsDetail wordpressData={item} newsData={newsData} />
    </>
  );
}
