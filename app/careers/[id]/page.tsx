import JobDetails from "@/src/pages_migrated/JobDetails";
import { jobs } from "@/src/data/migrated_data";

export function generateStaticParams() {
  return jobs.map((job) => ({
    id: job.id,
  }));
}

export default function Page() {
  return <JobDetails />;
}
