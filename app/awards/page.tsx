import Awards from "@/src/pages_migrated/about/Awards";
import { getPageBySlug } from "@/src/lib/wordpress";
import { constructMetadata } from "@/src/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('awards');
  return constructMetadata({
    title: page?.title || "Awards & Recognition",
    description: "Our commitment to precision engineering and digital excellence as recognized by global industry organizations.",
  });
}

export default async function Page() {
  const wordpressData = await getPageBySlug('awards');
  return <Awards wordpressData={wordpressData} />;
}
