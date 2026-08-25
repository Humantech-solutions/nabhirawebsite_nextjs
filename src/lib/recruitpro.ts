/**
 * Utility functions for fetching jobs from RecruitPro API
 */

function formatDateToDaysAgo(dateString: string) {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "1 day ago";
  if (diffDays > 30) {
    const months = Math.floor(diffDays / 30);
    return `${months} ${months === 1 ? "month" : "months"} ago`;
  }
  return `${diffDays} days ago`;
}

function formatTextToHtml(text: string): string {
  if (!text) return "";

  const lines = text.split("\n");
  let html = "";
  let inList = false;
  let currentListItem = "";
  let currentParagraph = "";

  const flushParagraph = () => {
    if (currentParagraph) {
      currentParagraph = currentParagraph.replace(
        /^(Role Overview:)/i,
        "<strong>$1</strong>",
      );

      if (
        currentParagraph.length < 60 &&
        !currentParagraph.endsWith(".") &&
        (currentParagraph.endsWith(":") ||
          currentParagraph.split(" ").length <= 5)
      ) {
        html += `<p><strong>${currentParagraph}</strong></p>`;
      } else {
        html += `<p>${currentParagraph}</p>`;
      }
      currentParagraph = "";
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (!line) {
      if (currentListItem) {
        html += `<li>${currentListItem}</li>`;
        currentListItem = "";
      }
      if (inList) {
        html += "</ul>";
        inList = false;
      }
      flushParagraph();
      continue;
    }

    const isBullet = /^[•●\-\*]\s*/.test(line);

    if (isBullet) {
      flushParagraph();
      if (currentListItem) {
        html += `<li>${currentListItem}</li>`;
      }
      if (!inList) {
        html += "<ul>";
        inList = true;
      }
      currentListItem = line.replace(/^[•●\-\*]\s*/, "");
    } else {
      if (inList) {
        currentListItem += " " + line;
      } else {
        if (currentParagraph) {
          currentParagraph += " " + line;
        } else {
          currentParagraph = line;
        }
      }
    }
  }

  if (currentListItem) {
    html += `<li>${currentListItem}</li>`;
  }
  if (inList) {
    html += "</ul>";
  }
  flushParagraph();

  return html;
}

function constructDescription(job: any): string {
  let html = "";

  if (job.roleOverview) {
    html += `<h3>Role Overview</h3>${formatTextToHtml(job.roleOverview)}`;
  }
  if (job.description) {
    html += `<h3>Description</h3>${formatTextToHtml(job.description)}`;
  }
  if (job.requirements) {
    html += `<h3>Requirements</h3>${formatTextToHtml(job.requirements)}`;
  }
  if (job.superpowers) {
    html += `<h3>Superpowers</h3>${formatTextToHtml(job.superpowers)}`;
  }
  if (job.benefits) {
    html += `<h3>Benefits</h3>${formatTextToHtml(job.benefits)}`;
  }

  return html;
}

export async function getRecruitProJobs() {
  const url = process.env.RECRUITPRO_API_URL;
  // const token = process.env.RECRUITPRO_API_TOKEN;

  if (!url) {
    console.error("Missing RecruitPro API URL");
    return null;
  }

  try {
    const response = await fetch(url, {
      headers: {
        // Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      next: { revalidate: 60 }, // Cache for 60 seconds
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch jobs: ${response.statusText}`);
    }

    const data = await response.json();

    if (!data.success || !data.jobs) {
      return null;
    }

    // Map to the shape UI expects
    return data.jobs
      .filter((j: any) => j.enabled)
      .map((job: any) => ({
        id: job.id, // we'll use original UUID if needed, but we'll use slug for routes
        slug: job.slug,
        title: job.title,
        department: job.department || "Engineering",
        location: job.location || "Remote",
        type: job.employmentType || "Full-time",
        experience: job.experience || "Not Specified",
        jobId: job.id.split("-")[0].toUpperCase(), // Just a short ID for display
        posted: formatDateToDaysAgo(job.createdAt),
        description: constructDescription(job),
      }));
  } catch (error) {
    console.error("Error fetching RecruitPro jobs:", error);
    return null;
  }
}

export async function getRecruitProJobBySlug(slug: string) {
  const jobs = await getRecruitProJobs();
  if (!jobs) return null;

  const job = jobs.find((j: any) => j.slug === slug);
  return job || null;
}
