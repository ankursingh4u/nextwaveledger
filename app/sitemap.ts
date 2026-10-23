import type { MetadataRoute } from "next";
import { contentItems } from "@/lib/content";

const SITE_URL = "https://www.nextwaveledger.com";

const staticRoutes = [
  "",
  "/articles",
  "/reviews",
  "/comparisons",
  "/guides",
  "/about",
  "/contact",
  "/editorial-policy",
  "/affiliate-disclosure",
  "/privacy-policy",
  "/terms",
  "/photo-credits",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  const contentEntries: MetadataRoute.Sitemap = contentItems.map((item) => ({
    url: `${SITE_URL}/${item.section}/${item.slug}`,
    lastModified: new Date(item.updatedDate),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...contentEntries];
}
