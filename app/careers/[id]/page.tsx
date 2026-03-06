import JobDetails from "@/src/pages_migrated/JobDetails";
import { getCareerPosts, getCareerPostBySlug } from "@/src/lib/wordpress";

export async function generateStaticParams() {
  const wpJobs = await getCareerPosts();
  if (!wpJobs) return [];
  
  return wpJobs.map((job: any) => ({
    id: job.slug,
  }));
}

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;
  const wpJob = await getCareerPostBySlug(id);
  
  return <JobDetails wpJob={wpJob} />;
}
