import Contact from "@/src/pages_migrated/Contact";
import { getPageBySlug } from "@/src/lib/wordpress";
import { constructMetadata } from "@/src/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('contact');
  return constructMetadata({
    title: page?.title || "Contact Us",
    description: "Get in touch with Nabhira Technologies. Let us discuss how we can help your enterprise evolve through advanced AI and Cloud architectures.",
  });
}

export default async function Page() {
  const wordpressData = await getPageBySlug('contact');
  return <Contact wordpressData={wordpressData} />;
}
