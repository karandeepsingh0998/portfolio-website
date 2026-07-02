import type { MetadataRoute } from "next";
import { siteContent } from "@/data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteContent.meta.canonicalUrl;

  const caseStudyUrls = siteContent.caseStudies.map((cs) => ({
    url: `${baseUrl}${cs.link}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...caseStudyUrls,
  ];
}
