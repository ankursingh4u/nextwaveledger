import type { Metadata } from "next";
import { getBySection } from "@/lib/content";
import { SectionListing } from "@/components/SectionListing";

export const metadata: Metadata = {
  title: "Reviews",
  description: "Hands-on, criteria-based assessments of what's actually worth buying.",
  alternates: { canonical: "/reviews" },
};

export default async function ReviewsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const items = getBySection("reviews").filter((i) => !category || i.category === category);

  return <SectionListing section="reviews" items={items} activeCategory={category} />;
}
