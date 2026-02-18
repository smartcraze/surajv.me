import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: "https://surajv.dev",
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://surajv.dev/projects",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://surajv.dev/passion",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: "https://surajv.dev/resource",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://surajv.dev/meet",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `https://surajv.dev/projects/${project.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...projectPages];
}
