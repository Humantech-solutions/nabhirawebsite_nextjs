import Contact from "@/src/pages_migrated/Contact";
import { getPageBySlug } from "@/src/lib/wordpress";
import { constructMetadata, getWebPageSchema } from "@/src/lib/seo";
import { Schema } from "@/src/components/SEO/Schema";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('contact');
  return constructMetadata({
    title: page?.title || "Contact Us",
    description: "Get in touch with Hutech Solutions Technologies. Let us discuss how we can help your enterprise evolve through advanced AI and Cloud architectures.",
    path: "/contact/",
  });
}

export default async function Page() {
  const wordpressData = await getPageBySlug('contact');
  const pageSchema = getWebPageSchema({
    title: wordpressData?.title || "Contact Us",
    description: "Get in touch with Hutech Solutions Technologies. Let us discuss how we can help your enterprise evolve through advanced AI and Cloud architectures.",
    path: "/contact/",
  });

  return (
    <>
      <Schema jsonLd={pageSchema} />
      <Contact wordpressData={wordpressData} />
    </>
  );
}
