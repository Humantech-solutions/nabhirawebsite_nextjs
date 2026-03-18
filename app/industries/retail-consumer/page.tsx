import RetailConsumer from "@/src/pages_migrated/industries/RetailConsumer";
import { getPageBySlug } from "@/src/lib/wordpress";
import { constructMetadata } from "@/src/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('retail-consumer') || await getPageBySlug('retail-consumer-goods');
  return constructMetadata({
    title: page?.title || "Retail & Consumer Goods",
    description: "Transforming retail experiences and consumer goods supply chains with AI and digital solutions.",
  });
}

export default async function Page() {
  const wordpressData = await getPageBySlug('retail-consumer') || await getPageBySlug('retail-consumer-goods');
  return <RetailConsumer wordpressData={wordpressData} />;
}
