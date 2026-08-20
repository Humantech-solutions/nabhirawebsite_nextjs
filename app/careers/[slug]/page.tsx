import JobDetails from "@/src/pages_migrated/JobDetails";
import { getRecruitProJobs, getRecruitProJobBySlug } from "@/src/lib/recruitpro";
import { getCareerPosts, getCareerPostBySlug } from "@/src/lib/wordpress";
import { constructMetadata, getBreadcrumbSchema } from "@/src/lib/seo";
import { Schema } from "@/src/components/SEO/Schema";
import { siteConfig } from "@/src/config/site";
import { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

import { jobs } from "@/src/data/migrated_data";

function slugify(title: string, location: string) {
  return `${title}-${location}`.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
}

export async function generateStaticParams() {
  const recruitProJobs = await getRecruitProJobs() || [];
  const wpJobsRaw = await getCareerPosts() || [];
  
  const allJobs = [...recruitProJobs, ...wpJobsRaw];
  
  if (allJobs.length === 0) {
    return jobs.map((job) => ({
      slug: slugify(job.title, job.location),
    }));
  }
  
  return allJobs.map((job: any) => ({
    slug: job.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  let wpJob = await getRecruitProJobBySlug(slug);
  
  if (!wpJob) {
    const wpData = await getCareerPostBySlug(slug);
    if (wpData) {
      wpJob = {
        title: wpData.title,
        location: wpData.location
      };
    }
  }

  if (!wpJob) return constructMetadata({ title: "Job Not Found" });

  const title = wpJob.title || "Job Opportunity";
  const location = wpJob.location || "Nabhira Technologies";

  return constructMetadata({
    title: `${title} — ${location}`,
    description: `${title} at Nabhira Technologies. View details and apply.`,
  });
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  
  let mappedJob = await getRecruitProJobBySlug(slug);
  
  if (!mappedJob) {
    const wpJob = await getCareerPostBySlug(slug);
    if (wpJob) {
      mappedJob = {
        id: wpJob.jobId || slug,
        slug: wpJob.slug,
        title: wpJob.title,
        location: wpJob.location || "Nabhira Technologies",
        type: wpJob.type || "Full Time",
        department: wpJob.department || "Engineering",
        experience: wpJob.experience || "Not Specified",
        jobId: wpJob.jobId || slug,
        posted: wpJob.posted,
        description: wpJob.content,
      };
    }
  }

  if (!mappedJob) return null;

  return (
    <>
      <Schema
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "JobPosting",
          identifier: mappedJob.id,
          title: mappedJob.title,
          description: `${mappedJob.title} - ${mappedJob.department} at Nabhira Technologies`,
          datePosted: mappedJob.posted || new Date().toISOString().split('T')[0],
          employmentType: mappedJob.type,
          hiringOrganization: {
            "@type": "Organization",
            name: siteConfig.name,
            sameAs: siteConfig.url,
          },
          jobLocation: {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              addressLocality: mappedJob.location,
            },
          },
        }}
      />
      <Schema
        jsonLd={getBreadcrumbSchema([
          { name: "Home", item: "/" },
          { name: "Careers", item: "/careers" },
          { name: mappedJob.title, item: `/careers/${mappedJob.slug}` },
        ])}
      />
      <JobDetails wpJob={mappedJob} />
    </>
  );
}
