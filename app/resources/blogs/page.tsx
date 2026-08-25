import Blogs from "@/src/pages_migrated/resources/Blogs";
import { getAllPosts, getPageBySlug, getSiteChrome } from "@/src/lib/wordpress";
import { getIPublishContents } from "@/src/lib/ipublish";
import { constructMetadata } from "@/src/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('blogs');
  return constructMetadata({
    title: page?.title || "Insights & Perspectives",
    description: "Explore the latest architectural insights, AI trends, and cloud-native innovations from Hutech Solutions.",
  });
}

export default async function Page() {
  const [posts, wordpressData, siteChrome, ipublishData] = await Promise.all([
    getAllPosts(),
    getPageBySlug('blogs'),
    getSiteChrome(),
    getIPublishContents().catch(() => [])
  ]);

  const ipublishBlogs = (ipublishData || [])
    .filter((item: any) => item.content_type === "blog")
    .map((item: any) => ({
      id: item.id,
      slug: item.id,
      title: item.title,
      date: item.published_at || item.created_at,
      excerpt: item.excerpt || "",
      author: "Hutech Solutions",
      category: "iPublish",
      image: item.featured_image_url || undefined,
      isIPublish: true,
      ipublishMeta: {
        gradientFrom: item.banner_gradient_from || "#6d5ef8",
        gradientTo: item.banner_gradient_to || "#ec4899",
        gradientDirection: item.banner_gradient_direction || "135deg",
      }
    }));

  const allBlogs = [...ipublishBlogs, ...(posts || [])];

  return <Blogs posts={allBlogs} wordpressData={wordpressData} siteChrome={siteChrome} />;
}
