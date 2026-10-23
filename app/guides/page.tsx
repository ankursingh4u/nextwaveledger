import type { Metadata } from "next";
import { getBySection } from "@/lib/content";
import { SectionListing } from "@/components/SectionListing";

export const metadata: Metadata = {
  title: "Buying Guides",
  description: "Best picks organized by use case and budget, explained in plain language.",
  alternates: { canonical: "/guides" },
};

export default async function GuidesPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const items = getBySection("guides").filter((i) => !category || i.category === category);

  return <SectionListing section="guides" items={items} activeCategory={category} />;
}
