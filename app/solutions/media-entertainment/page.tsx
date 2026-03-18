import MediaEntertainment from "@/src/pages_migrated/industries/MediaEntertainment";
import { getPageBySlug } from "@/src/lib/wordpress";
import { constructMetadata } from "@/src/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('media-entertainment');
  return constructMetadata({
    title: page?.title || "Media & Entertainment Solutions",
    description: "Empowering media and entertainment companies with advanced digital solutions.",
  });
}

export default async function Page() {
  const wordpressData = await getPageBySlug('media-entertainment');
  return <MediaEntertainment wordpressData={wordpressData} />;
}
