import MediaEntertainment from "../../../src/pages_migrated/industries/MediaEntertainment";
import { getPageBySlug } from "@/src/lib/wordpress";
import { constructMetadata } from "@/src/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('media-entertainment');
  return constructMetadata({
    title: page?.title || "Media & Entertainment",
    description: "Digital content supply chains and personalized experiences for media organizations.",
  });
}

export default async function Page() {
  const wordpressData = await getPageBySlug('media-entertainment');
  return <MediaEntertainment wordpressData={wordpressData} />;
}
