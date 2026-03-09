import Clients from "@/src/pages_migrated/about/Clients";
import { getPageBySlug } from "@/src/lib/wordpress";
import { constructMetadata } from "@/src/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('clients');
  return constructMetadata({
    title: page?.title || "Our Clients",
    description: "Trusted by industry leaders worldwide - from agile startups to global retail enterprises.",
  });
}

export default async function Page() {
  const wordpressData = await getPageBySlug('clients');
  return <Clients wordpressData={wordpressData} />;
}
