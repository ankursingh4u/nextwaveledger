import type { Metadata } from "next";
import { getBySection } from "@/lib/content";
import { SectionListing } from "@/components/SectionListing";

export const metadata: Metadata = {
  title: "Comparisons",
  description: "Head-to-head breakdowns with clear selection criteria, not just spec dumps.",
  alternates: { canonical: "/comparisons" },
};

export default async function ComparisonsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const items = getBySection("comparisons").filter((i) => !category || i.category === category);

  return <SectionListing section="comparisons" items={items} activeCategory={category} />;
}
