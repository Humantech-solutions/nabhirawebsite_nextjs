import JobDetails from "@/src/pages_migrated/JobDetails";
import { getCareerPosts, getCareerPostBySlug } from "@/src/lib/wordpress";
import { constructMetadata, getBreadcrumbSchema } from "@/src/lib/seo";
import { Schema } from "@/src/components/SEO/Schema";
import { siteConfig } from "@/src/config/site";
import { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const wpJobs = await getCareerPosts();
  if (!wpJobs) return [];
  
  return wpJobs.map((job: any) => ({
    slug: job.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const wpJob = await getCareerPostBySlug(slug);

  if (!wpJob) return constructMetadata({ title: "Job Not Found" });

  // Handle Wordpress data structure
  const title = wpJob.title || "Job Opportunity";
  const location = wpJob.location || "Nabhira Technologies";

  return constructMetadata({
    title: `${title} — ${location}`,
    description: `${title} at Nabhira Technologies. View details and apply.`,
  });
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const wpJob = await getCareerPostBySlug(slug);

  if (!wpJob) return null;

  const title = wpJob.title || "Job Opportunity";
  const location = wpJob.location || "Nabhira Technologies";
  const jobId = wpJob.id?.toString() || slug;
  const employmentType = wpJob.type || "Full Time";
  const department = wpJob.department || "Engineering";

  return (
    <>
      <Schema
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "JobPosting",
          identifier: jobId,
          title: title,
          description: `${title} - ${department} at Nabhira Technologies`,
          datePosted: wpJob.date || new Date().toISOString().split('T')[0],
          employmentType: employmentType,
          hiringOrganization: {
            "@type": "Organization",
            name: siteConfig.name,
            sameAs: siteConfig.url,
          },
          jobLocation: {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              addressLocality: location,
            },
          },
        }}
      />
      <Schema
        jsonLd={getBreadcrumbSchema([
          { name: "Home", item: "/" },
          { name: "Careers", item: "/careers" },
          { name: title, item: `/careers/${slug}` },
        ])}
      />
      <JobDetails wpJob={wpJob} />
    </>
  );
}
