import Leadership from "@/src/pages_migrated/about/Leadership";
import { getPageBySlug } from "@/src/lib/wordpress";
import { constructMetadata } from "@/src/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('leadership');
  return constructMetadata({
    title: page?.title || "Our Leadership",
    description: "Meet the visionaries behind the precision engineering at Nabhira Technologies.",
  });
}

export default async function Page() {
  const wordpressData = await getPageBySlug('leadership');
  return <Leadership wordpressData={wordpressData} />;
}
