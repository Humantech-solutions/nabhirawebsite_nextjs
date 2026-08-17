import Clients from "@/src/pages_migrated/about/Clients";
import { getPageBySlug, getTestimonials } from "@/src/lib/wordpress";
import { constructMetadata } from "@/src/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('clients') || await getPageBySlug('our-clients');
  return constructMetadata({
    title: page?.title || "Our Clients",
    description: "Trusted by industry leaders worldwide. Explore our successful partnerships and client success stories.",
  });
}

export default async function Page() {
  const wordpressData = await getPageBySlug('clients') || await getPageBySlug('our-clients');
  const fields = wordpressData?.clientsPageFields;
  const testimonials = await getTestimonials(fields?.testimonialCount || 3, fields?.testimonialCategory?.nodes?.map((n: any) => n.databaseId) || []);
  
  return <Clients wordpressData={wordpressData} testimonials={testimonials} />;
}
