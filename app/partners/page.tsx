import Partners from "@/src/pages_migrated/about/Partners";
import { getPageBySlug } from "@/src/lib/wordpress";
import { constructMetadata, getWebPageSchema } from "@/src/lib/seo";
import { Schema } from "@/src/components/SEO/Schema";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('partners') || await getPageBySlug('partners-ecosystem');
  return constructMetadata({
    title: page?.title || "Our Partners",
    description: "Collaborating with industry leaders to deliver cutting-edge technology solutions.",
    path: "/partners/",
  });
}

export default async function Page() {
  const wordpressData = await getPageBySlug('partners') || await getPageBySlug('partners-ecosystem');
  const pageSchema = getWebPageSchema({
    title: wordpressData?.title || "Our Partners",
    description: "Collaborating with industry leaders to deliver cutting-edge technology solutions.",
    path: "/partners/",
  });

  return (
    <>
      <Schema jsonLd={pageSchema} />
      <Partners wordpressData={wordpressData} />
    </>
  );
}
