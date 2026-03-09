import ManufacturingAutomotive from "../../../src/pages_migrated/industries/ManufacturingAutomotive";
import { getPageBySlug } from "@/src/lib/wordpress";
import { constructMetadata } from "@/src/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('manufacturing-automotive');
  return constructMetadata({
    title: page?.title || "Manufacturing & Automotive",
    description: "Industry 4.0 and smart manufacturing solutions powered by AI and IIoT.",
  });
}

export default async function Page() {
  const wordpressData = await getPageBySlug('manufacturing-automotive');
  return <ManufacturingAutomotive wordpressData={wordpressData} />;
}
