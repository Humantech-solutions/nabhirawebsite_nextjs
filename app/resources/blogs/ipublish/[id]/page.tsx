import { getIPublishContentById, getIPublishContents } from "@/src/lib/ipublish";
import { IPublishDetailClient } from "@/src/components/ipublish/IPublishDetailClient";
import { notFound } from "next/navigation";
import { constructMetadata } from "@/src/lib/seo";

export async function generateStaticParams() {
  const contents = await getIPublishContents();
  const validContents = contents
    .filter((item: any) => item.content_type === "blog")
    .map((item: any) => ({
      id: item.id ? item.id.toString() : "",
    }))
    .filter((param: { id: string }) => param.id !== "");
  
  if (validContents.length === 0) {
    // Return a dummy array if empty, to prevent "missing generateStaticParams" error in Next.js export
    return [{ id: "dummy-post" }];
  }
  
  return validContents;
}

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
