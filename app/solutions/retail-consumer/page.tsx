import RetailConsumer from "@/src/pages_migrated/industries/RetailConsumer";
import { getPageBySlug } from "@/src/lib/wordpress";
import { constructMetadata } from "@/src/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('retail-consumer');
  return constructMetadata({
    title: page?.title || "Retail & Consumer Solutions",
    description: "Transformative digital solutions for the retail and consumer goods sectors.",
  });
}

export default async function Page() {
  const wordpressData = await getPageBySlug('retail-consumer');
  return <RetailConsumer wordpressData={wordpressData} />;
}
