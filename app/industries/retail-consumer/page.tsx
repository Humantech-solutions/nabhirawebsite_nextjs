import RetailConsumer from "../../../src/pages_migrated/industries/RetailConsumer";
import { getPageBySlug } from "@/src/lib/wordpress";
import { constructMetadata } from "@/src/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('retail-consumer');
  return constructMetadata({
    title: page?.title || "Retail & Consumer",
    description: "Omnichannel commerce and intelligent supply chain solutions for retail.",
  });
}

export default async function Page() {
  const wordpressData = await getPageBySlug('retail-consumer');
  return <RetailConsumer wordpressData={wordpressData} />;
}
