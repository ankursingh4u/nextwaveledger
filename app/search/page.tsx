import type { Metadata } from "next";
import Link from "next/link";
import { contentItems } from "@/lib/content";
import { ContentCard } from "@/components/ContentCard";
import { SearchBox } from "@/components/SearchBox";

export const metadata: Metadata = {
  title: "Search",
  description: "Search NextWave Ledger's articles, reviews, comparisons, and buying guides.",
  alternates: { canonical: "/search" },
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; category?: string }>;
}) {
  const { q, category } = await searchParams;
  const query = (q ?? "").trim().toLowerCase();

  const results = contentItems.filter((item) => {
    const matchesQuery =
      !query ||
      item.title.toLowerCase().includes(query) ||
      item.dek.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query);
    const matchesCategory = !category || item.category === category;
    return matchesQuery && matchesCategory;
  });

  const heading = category ? `Category: ${category}` : q ? `Results for "${q}"` : "Search";

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">{heading}</h1>
      <div className="mt-6 max-w-md">
        <SearchBox />
      </div>

      {results.length === 0 ? (
        <p className="mt-10 text-muted">
          No results found. Try a different search term, or browse our{" "}
          <Link href="/guides" className="text-accent underline">
            buying guides
          </Link>
          .
        </p>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((item, i) => (
            <ContentCard key={item.slug} item={item} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
