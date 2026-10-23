import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { StatsStrip } from "@/components/StatsStrip";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Differentiators } from "@/components/Differentiators";
import { CtaBand } from "@/components/CtaBand";
import { ContentCard } from "@/components/ContentCard";
import { CategoryCard } from "@/components/CategoryCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { contentItems, getFeatured, getTrending, getLatest, getBySection } from "@/lib/content";

export const metadata: Metadata = {
  title: "NextWave Ledger — Smart Software Buying Guides & Reviews",
  alternates: { canonical: "/" },
};

const categories = [
  { label: "Security & Privacy", description: "Password managers & VPNs", iconKey: "security", accent: "indigo" as const },
  { label: "Productivity", description: "Project & task management", iconKey: "productivity", accent: "teal" as const },
  { label: "Communication", description: "Video calls & team chat", iconKey: "communication", accent: "rose" as const },
  { label: "Finance Tools", description: "Invoicing & budgeting apps", iconKey: "finance", accent: "amber" as const },
  { label: "Cloud Storage", description: "Backup & file sync", iconKey: "cloud", accent: "sky" as const },
  { label: "AI Tools", description: "Writing & content assistants", iconKey: "ai", accent: "amber" as const },
  { label: "Marketing Tools", description: "Email & analytics platforms", iconKey: "marketing", accent: "rose" as const },
];

export default function Home() {
  const featured = getFeatured(3);
  const trending = getTrending(4);
  const latest = getLatest(9);
  const recentArticles = [...getBySection("articles")]
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
    .slice(0, 6);

  const writerCount = new Set(contentItems.map((i) => i.author)).size;
  const categoryCount = new Set(contentItems.map((i) => i.category)).size;
  const criteriaCount = contentItems.reduce((sum, item) => {
    const verdictCriteria = item.verdict ? item.verdict.buyIf.length + item.verdict.skipIf.length : 0;
    const comparisonCriteria = item.comparison ? item.comparison.rows.length : 0;
    return sum + verdictCriteria + comparisonCriteria;
  }, 0);

  return (
    <>
      <Hero />

      <StatsStrip
        published={contentItems.length}
        writers={writerCount}
        categories={categoryCount}
        criteria={criteriaCount}
      />

      <AnimatedSection as="section" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-foreground">Featured guides</h2>
            <p className="mt-1 text-muted">Start here if you&apos;re not sure where to begin.</p>
          </div>
          <Link href="/guides" className="hidden items-center gap-1 text-sm font-medium text-accent hover:text-accent-dark sm:flex">
            All guides <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((item, i) => (
            <ContentCard key={item.slug} item={item} index={i} />
          ))}
        </div>
      </AnimatedSection>

      <ProcessSteps />

      <AnimatedSection as="section" className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-foreground">Trending right now</h2>
              <p className="mt-1 text-muted">What readers are checking out this week.</p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trending.map((item, i) => (
              <ContentCard key={item.slug} item={item} index={i} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <Differentiators />

      <AnimatedSection as="section" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-foreground">How-tos &amp; explainers</h2>
            <p className="mt-1 text-muted">Practical walkthroughs and plain-language breakdowns.</p>
          </div>
          <Link href="/articles" className="hidden items-center gap-1 text-sm font-medium text-accent hover:text-accent-dark sm:flex">
            All articles <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recentArticles.map((item, i) => (
            <ContentCard key={item.slug} item={item} index={i} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection as="section" className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="mb-2 text-2xl font-semibold text-foreground">Browse by category</h2>
          <p className="mb-8 text-muted">Jump straight to the gear you&apos;re researching.</p>
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {categories.map((cat) => (
              <CategoryCard
                key={cat.label}
                href={`/search?category=${encodeURIComponent(cat.label)}`}
                label={cat.label}
                description={cat.description}
                iconKey={cat.iconKey}
                accent={cat.accent}
                count={contentItems.filter((i) => i.category === cat.label).length}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection as="section" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-foreground">Latest from NextWave Ledger</h2>
            <p className="mt-1 text-muted">Freshly published and recently updated.</p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((item, i) => (
            <ContentCard key={item.slug} item={item} index={i} />
          ))}
        </div>
      </AnimatedSection>

      <CtaBand />
    </>
  );
}
