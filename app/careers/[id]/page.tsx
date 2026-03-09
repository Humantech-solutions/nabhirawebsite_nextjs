import JobDetails from "@/src/pages_migrated/JobDetails";
import { jobs } from "@/src/data/migrated_data";
import { constructMetadata, getBreadcrumbSchema } from "@/src/lib/seo";
import { Schema } from "@/src/components/SEO/Schema";
import { siteConfig } from "@/src/config/site";
import { Metadata } from 'next';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return jobs.map((job) => ({
    id: job.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const job = jobs.find((j) => j.id === id);

  if (!job) return constructMetadata({ title: "Job Not Found" });

  return constructMetadata({
    title: job.title,
    description: `${job.title} in ${job.location} - ${job.department} Department.`,
  });
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const job = jobs.find((j) => j.id === id);

  if (!job) return null;

  return (
    <>
      <Schema
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "JobPosting",
          title: job.title,
          description: job.title, // Standardizing on title for description if no excerpt
          datePosted: "2026-03-01", // Placeholder
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
          { name: job.title, item: `/careers/${id}` },
        ])}
      />
      <JobDetails />
    </>
  );
}
