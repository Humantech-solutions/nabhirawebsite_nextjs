import HRMS from "@/src/pages_migrated/solutions/HRMS";
import { getPageBySlug } from "@/src/lib/wordpress";
import { constructMetadata } from "@/src/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('hrms');
  return constructMetadata({
    title: page?.title || "HRMS Solutions",
    description: "Human Resource Management Systems for modern workforce management.",
  });
}

export default async function Page() {
  const wordpressData = await getPageBySlug('hrms');
  return <HRMS wordpressData={wordpressData} />;
}
