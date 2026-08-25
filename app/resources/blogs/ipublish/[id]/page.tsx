import { getIPublishContentById } from "@/src/lib/ipublish";
import { IPublishDetailClient } from "@/src/components/ipublish/IPublishDetailClient";
import { notFound } from "next/navigation";
import { constructMetadata } from "@/src/lib/seo";

export async function generateMetadata({ params }: { params: { id: string } | Promise<{ id: string }> }) {
  // Handle both sync and async params for Next.js compatibility
  const resolvedParams = await params;
  const content = await getIPublishContentById(resolvedParams.id);
  
  if (!content) return constructMetadata({ title: "Not Found" });
  
  return constructMetadata({
    title: `${content.title} | Insights & Perspectives`,
    description: content.excerpt || "",
    image: content.featured_image_url
  });
}

export default async function IPublishPage({ params }: { params: { id: string } | Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const content = await getIPublishContentById(resolvedParams.id);
  
  if (!content) {
    notFound();
  }
  
  return <IPublishDetailClient content={content} />;
}
