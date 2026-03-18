import CaseStudyDetail from "@/src/pages_migrated/resources/CaseStudyDetail";
import { caseStudies } from "@/src/data/migrated_data";
import { constructMetadata, getArticleSchema, getBreadcrumbSchema } from "@/src/lib/seo";
import { Schema } from "@/src/components/SEO/Schema";
import { siteConfig } from "@/src/config/site";
import { Metadata } from 'next';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    id: study.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const study = caseStudies.find((s) => s.slug === id);

  if (!study) return constructMetadata({ title: "Case Study Not Found" });

  return constructMetadata({
    title: study.title,
    description: study.challenge,
    image: study.image,
  });
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const study = caseStudies.find((s) => s.slug === id);

  if (!study) return null;

  const url = `${siteConfig.url}/resources/case-studies/${id}`;

  return (
    <>
      <Schema
        jsonLd={getArticleSchema({
          title: study.title,
          description: study.challenge,
          image: study.image,
          datePublished: "2026-01-01", // Placeholder date
          authorName: "Nabhira Architects",
          url: url,
        })}
      />
      <Schema
        jsonLd={getBreadcrumbSchema([
          { name: "Home", item: "/" },
          { name: "Resources", item: "/resources/case-studies" },
          { name: "Case Studies", item: "/resources/case-studies" },
          { name: study.title, item: `/resources/case-studies/${id}` },
        ])}
      />
      <CaseStudyDetail />
    </>
  );
}
