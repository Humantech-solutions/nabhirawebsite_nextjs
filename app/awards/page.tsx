import Awards from "@/src/pages_migrated/about/Awards";
import { getPageBySlug } from "@/src/lib/wordpress";
import { constructMetadata, getWebPageSchema } from "@/src/lib/seo";
import { Schema } from "@/src/components/SEO/Schema";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug("awards");
  return constructMetadata({
    title: page?.title || "Awards & Recognitions",
    description: "Discover our industry accolades, awards, and global recognitions for AI, cloud, and engineering excellence.",
    path: "/awards/",
  });
}

export default async function AwardsPage() {
  const wordpressData = await getPageBySlug("awards");
  const pageSchema = getWebPageSchema({
    title: wordpressData?.title || "Awards & Recognitions",
    description: "Discover our industry accolades, awards, and global recognitions for AI, cloud, and engineering excellence.",
    path: "/awards/",
  });

  return (
    <>
      <Schema jsonLd={pageSchema} />
      <Awards wordpressData={wordpressData} />
    </>
  );
}
