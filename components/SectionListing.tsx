import Link from "next/link";
import type { ContentItem, Section } from "@/lib/content/types";
import { sectionLabels } from "@/lib/content";
import { ContentCard } from "./ContentCard";
import { AnimatedSection } from "./ui/AnimatedSection";
import { Badge } from "./ui/Badge";

export function SectionListing({
  section,
  items,
  activeCategory,
}: {
  section: Section;
  items: ContentItem[];
  activeCategory?: string;
}) {
  const labels = sectionLabels[section];
  const categories = Array.from(new Set(items.map((i) => i.category)));
  const allInSection = items;

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <AnimatedSection>
        <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">{labels.plural}</h1>
        <p className="mt-2 max-w-2xl text-muted">{labels.description}</p>
      </AnimatedSection>

      <div className="mt-6 flex flex-wrap gap-2">
        <Link href={`/${section}`}>
          <Badge tone={!activeCategory ? "accent" : "muted"} className="cursor-pointer">
            All
          </Badge>
        </Link>
        {categories.map((cat) => (
          <Link key={cat} href={`/${section}?category=${encodeURIComponent(cat)}`}>
            <Badge tone={activeCategory === cat ? "accent" : "muted"} className="cursor-pointer">
              {cat}
            </Badge>
          </Link>
        ))}
      </div>

      {allInSection.length === 0 ? (
        <p className="mt-10 text-muted">No {labels.plural.toLowerCase()} match that category yet.</p>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {allInSection.map((item, i) => (
            <ContentCard key={item.slug} item={item} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
