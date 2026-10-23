import { contentItems } from "./items";
import type { ContentItem, Section } from "./types";

export * from "./types";
export { contentItems };

export function getAllContent(): ContentItem[] {
  return contentItems;
}

export function getBySection(section: Section): ContentItem[] {
  return contentItems.filter((item) => item.section === section);
}

export function getBySlug(section: Section, slug: string): ContentItem | undefined {
  return contentItems.find((item) => item.section === section && item.slug === slug);
}

export function getFeatured(limit = 3): ContentItem[] {
  return contentItems.filter((item) => item.featured).slice(0, limit);
}

export function getTrending(limit = 4): ContentItem[] {
  return contentItems.filter((item) => item.trending).slice(0, limit);
}

export function getLatest(limit = 6): ContentItem[] {
  return [...contentItems]
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
    .slice(0, limit);
}

export function getRelated(current: ContentItem, limit = 3): ContentItem[] {
  return contentItems
    .filter((item) => item.slug !== current.slug && (item.category === current.category || item.section === current.section))
    .slice(0, limit);
}

export function searchContent(query: string): ContentItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return contentItems.filter(
    (item) =>
      item.title.toLowerCase().includes(q) ||
      item.dek.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
  );
}

export const sectionLabels: Record<Section, { singular: string; plural: string; description: string }> = {
  articles: {
    singular: "Article",
    plural: "Articles",
    description: "How-to guides, explainers, and troubleshooting walkthroughs.",
  },
  reviews: {
    singular: "Review",
    plural: "Reviews",
    description: "Hands-on assessments of what's actually worth buying.",
  },
  comparisons: {
    singular: "Comparison",
    plural: "Comparisons",
    description: "Head-to-head breakdowns with clear selection criteria.",
  },
  guides: {
    singular: "Buying Guide",
    plural: "Buying Guides",
    description: "Best picks organized by use case and budget.",
  },
};
