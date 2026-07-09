import type { MetadataRoute } from "next";
import { works } from "@/data/work";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: "https://labs.dripcodestudio.com", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 1 },
    { url: "https://labs.dripcodestudio.com/work", lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: "https://labs.dripcodestudio.com/about", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: "https://labs.dripcodestudio.com/contact", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: "https://labs.dripcodestudio.com/labs", lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
  ];

  const workPages = works.map((work) => ({
    url: `https://labs.dripcodestudio.com/work/${work.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...workPages];
}
