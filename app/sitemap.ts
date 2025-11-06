import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: "https://surajv.me",
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: "https://surajv.me/projects",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://surajv.me/docs",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://surajv.me/resource",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://surajv.me/meet",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
