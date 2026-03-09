import JobDetails from "@/src/pages_migrated/JobDetails";
import { jobs, slugify } from "@/src/data/migrated_data";
import { constructMetadata, getBreadcrumbSchema } from "@/src/lib/seo";
import { Schema } from "@/src/components/SEO/Schema";
import { siteConfig } from "@/src/config/site";
import { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return jobs.map((job) => ({
    slug: job.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug);

  if (!job) return constructMetadata({ title: "Job Not Found" });

  return constructMetadata({
    title: `${job.title} — ${job.location}`,
    description: `${job.title} (${job.id}) in ${job.location}. ${job.type} position in ${job.department} at Nabhira Technologies.`,
  });
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug);

  if (!job) return null;

  return (
    <>
      <Schema
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "JobPosting",
          identifier: job.id,
          title: job.title,
          description: `${job.title} - ${job.department} at Nabhira Technologies`,
          datePosted: "2026-03-01",
          employmentType: job.type,
          hiringOrganization: {
            "@type": "Organization",
            name: siteConfig.name,
            sameAs: siteConfig.url,
          },
          jobLocation: {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              addressLocality: job.location,
            },
          },
        }}
      />
      <Schema
        jsonLd={getBreadcrumbSchema([
          { name: "Home", item: "/" },
          { name: "Careers", item: "/careers" },
          { name: job.title, item: `/careers/${slug}` },
        ])}
      />
      <JobDetails />
    </>
  );
}
