import Leadership from "@/src/pages_migrated/about/Leadership";
import { getPageBySlug } from "@/src/lib/wordpress";
import { constructMetadata, getWebPageSchema } from "@/src/lib/seo";
import { Schema } from "@/src/components/SEO/Schema";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('leadership');
  return constructMetadata({
    title: page?.title || "Our Leadership",
    description: "Meet the visionaries behind the precision engineering at Hutech Solutions Technologies.",
    path: "/leadership/",
  });
}

export default async function Page() {
  const wordpressData = await getPageBySlug('leadership');
  const pageSchema = getWebPageSchema({
    title: wordpressData?.title || "Our Leadership",
    description: "Meet the visionaries behind the precision engineering at Hutech Solutions Technologies.",
    path: "/leadership/",
  });

  return (
    <>
      <Schema jsonLd={pageSchema} />
      <Leadership wordpressData={wordpressData} />
    </>
  );
}
