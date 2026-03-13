import { jobs, events, blogPosts, caseStudies, newsItems } from "@/src/data/migrated_data";
import { siteConfig } from "@/src/config/site";
import { MetadataRoute } from "next";

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticPages = siteConfig.mainNav.map((item) => ({
    url: `${baseUrl}${item.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/resources/blogs/${post.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const newsPages = newsItems.map((item) => ({
    url: `${baseUrl}/resources/news/${item.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const eventPages = events.map((event) => ({
    url: `${baseUrl}/resources/events/${event.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const studyPages = caseStudies.map((study) => ({
    url: `${baseUrl}/resources/case-studies/${study.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const careerPages = jobs.map((job) => ({
    url: `${baseUrl}/careers/${job.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...staticPages,
    ...blogPages,
    ...newsPages,
    ...eventPages,
    ...studyPages,
    ...careerPages,
  ];
}
