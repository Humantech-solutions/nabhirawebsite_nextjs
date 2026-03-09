import DataFoundation from "@/src/pages_migrated/solutions/DataFoundation";
import { getPageBySlug } from "@/src/lib/wordpress";
import { constructMetadata } from "@/src/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('data-foundation');
  return constructMetadata({
    title: page?.title || "Data Foundation",
    description: "Establish a solid data foundation for your modern data architecture.",
  });
}

export default async function Page() {
  const wordpressData = await getPageBySlug('data-foundation');
  return <DataFoundation wordpressData={wordpressData} />;
}
