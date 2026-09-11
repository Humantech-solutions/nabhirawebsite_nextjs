import Blogs from "@/src/pages_migrated/resources/Blogs";
import { getAllPosts, getPageBySlug, getSiteChrome } from "@/src/lib/wordpress";
import { getIPublishAllBlogs, getIPublishImageUrl } from "@/src/lib/ipublish";
import { extractPatternFromBody } from "@/src/lib/ipublish-pattern";
import { constructMetadata } from "@/src/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug("blogs");
  return constructMetadata({
    title: page?.title || "Insights & Perspectives | Hutech Solutions",
    description:
      "Explore the latest architectural insights, AI trends, and cloud-native innovations from Hutech Solutions.",
    path: "/resources/blogs/",
  });
}

export const revalidate = 0;

export default async function Page() {
  const [posts, wordpressData, siteChrome, ipublishData] = await Promise.all([
    getAllPosts(),
    getPageBySlug("blogs"),
    getSiteChrome(),
    getIPublishAllBlogs().catch(() => []),
  ]);

  const ipublishBlogs = (ipublishData || []).map((item: any) => {
    const rawDate = item.published_at || item.updated_at || item.created_at;
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
    const extractedPattern = extractPatternFromBody(item.body || item.current_body);

    return {
      id: item.slug || item.id || "",
      slug: item.slug || item.id || "",
      title: item.title,
      date: rawDate || formattedDate,
      rawDate: rawDate,
      displayDate: formattedDate,
      excerpt: item.excerpt || "",
      content: "",
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
        rawPattern: item.raw_banner_pattern,
        patternColor: item.banner_pattern_color,
        patternOpacity: item.banner_pattern_opacity,
        customPatternStyle: extractedPattern || undefined,
        overlayColor: item.overlay_color,
        overlayOpacity: item.featured_image_overlay,
        titlePosition: item.featured_title_position,
        titleColor: item.title_color,
        titleColorMode: item.title_color_mode,
        titleGradientTo: item.title_gradient_to,
        titleGradientDirection: item.title_gradient_direction,
        titleFont: item.title_font,
        titleWeight: item.title_weight,
        titleItalic: item.title_italic,
        titleScale: item.title_size_scale,
        titleLineHeight: item.title_line_height,
        titleShadow: item.title_shadow,
        titlePadding: item.featured_title_padding,
        titleMarginX: item.title_margin_x,
        titleMarginY: item.title_margin_y,
      },
    };
  });

  // Sort all blogs by date of release (newest / most recent first)
  const allBlogs = [...ipublishBlogs, ...(posts || [])].sort((a: any, b: any) => {
    const timeA = new Date(a.rawDate || a.date || a.published_at || a.updated_at || a.created_at || 0).getTime() || 0;
    const timeB = new Date(b.rawDate || b.date || b.published_at || b.updated_at || b.created_at || 0).getTime() || 0;
    return timeB - timeA;
  });

  return <Blogs posts={allBlogs} wordpressData={wordpressData} siteChrome={siteChrome} />;
}
