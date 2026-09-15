import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = getSiteUrl();

  if (!url) return [];

  return [
    { url: url.href, priority: 1 },
    ...projects.map((project) => ({
      url: new URL(`/projects/${project.id}`, url).href,
      priority: 0.8,
    })),
  ];
}
