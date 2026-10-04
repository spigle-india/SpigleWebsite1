import type { MetadataRoute } from "next";
import { insights } from "@/content/insights";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/solutions",
    "/industries",
    "/insights",
    "/about",
    "/contact",
  ];

  const pages = staticPages.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const articles = insights.map((insight) => ({
    url: `${site.url}/insights/${insight.slug}`,
    lastModified: new Date(insight.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...pages, ...articles];
}
