import Blogs from "@/src/pages_migrated/resources/Blogs";
import { getAllPosts, getPageBySlug, getSiteChrome } from "@/src/lib/wordpress";
import { getIPublishAllBlogs, getIPublishImageUrl } from "@/src/lib/ipublish";
import { constructMetadata } from "@/src/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('blogs');
  return constructMetadata({
    title: page?.title || "Insights & Perspectives | Hutech Solutions",
    description: "Explore the latest architectural insights, AI trends, and cloud-native innovations from Hutech Solutions.",
    path: "/resources/blogs/",
  });
}

export const revalidate = 60;

export default async function Page() {
  const [posts, wordpressData, siteChrome, ipublishData] = await Promise.all([
    getAllPosts(),
    getPageBySlug('blogs'),
    getSiteChrome(),
    getIPublishAllBlogs().catch(() => [])
  ]);

  const ipublishBlogs = (ipublishData || []).map((item: any) => {
    const rawDate = item.updated_at || item.published_at || item.created_at;
    const formattedDate = rawDate
      ? new Date(rawDate).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })
      : "Recent";

    const wordCount = item.word_count || 500;
    const readTimeMinutes = Math.max(1, Math.ceil(wordCount / 200));
    const imageUrl = getIPublishImageUrl(item.featured_image_url);

    return {
      id: item.slug || item.id || "",
      slug: item.slug || item.id || "",
      title: item.title,
      date: formattedDate,
      excerpt: item.excerpt || "",
      author: "Hutech Solutions",
      category: item.content_type
        ? item.content_type.charAt(0).toUpperCase() + item.content_type.slice(1)
        : "iPublish",
      image: imageUrl,
      imageUrl: imageUrl,
      readTime: `${readTimeMinutes} min read`,
      tags: item.tags || [],
      isIPublish: true,
      ipublishMeta: {
        gradientFrom: item.banner_gradient_from,
        gradientTo: item.banner_gradient_to,
        gradientDirection: item.banner_gradient_direction,
        pattern: item.banner_pattern,
      }
    };
  });

  const allBlogs = [...ipublishBlogs, ...(posts || [])];

  return <Blogs posts={allBlogs} wordpressData={wordpressData} siteChrome={siteChrome} />;
}
