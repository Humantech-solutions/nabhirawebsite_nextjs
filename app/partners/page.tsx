import Partners from "@/src/pages_migrated/about/Partners";
import { getPageBySlug } from "@/src/lib/wordpress";
import { constructMetadata } from "@/src/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('partners');
  return constructMetadata({
    title: page?.title || "Partners Ecosystem",
    description: "Our strategic alliances with world-leading technology pioneers to deliver integrated, future-proof solutions.",
  });
}

export default async function Page() {
  const wordpressData = await getPageBySlug('partners');
  return <Partners wordpressData={wordpressData} />;
}
