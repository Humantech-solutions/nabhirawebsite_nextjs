import Solutions from "@/src/pages_migrated/Solutions";
import { getSolutionBySlug } from "@/src/lib/wordpress";
import { constructMetadata, getWebPageSchema } from "@/src/lib/seo";
import { Schema } from "@/src/components/SEO/Schema";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getSolutionBySlug('solutions');
  return constructMetadata({
    title: page?.title || "Solutions",
    description: "Explore our suite of enterprise-grade software solutions, from AI-powered POS to modular ERP systems.",
    path: "/solutions/",
  });
}

export default async function Page() {
  const wordpressData = await getSolutionBySlug('solutions');
  const pageSchema = getWebPageSchema({
    title: wordpressData?.title || "Solutions",
    description: "Explore our suite of enterprise-grade software solutions, from AI-powered POS to modular ERP systems.",
    path: "/solutions/",
  });

  return (
    <>
      <Schema jsonLd={pageSchema} />
      <Solutions wordpressData={wordpressData} />
    </>
  );
}


