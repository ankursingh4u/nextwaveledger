import type { Metadata } from "next";
import { getBySection } from "@/lib/content";
import { SectionListing } from "@/components/SectionListing";

export const metadata: Metadata = {
  title: "Articles",
  description: "How-to guides, explainers, and troubleshooting walkthroughs for everyday gadgets.",
  alternates: { canonical: "/articles" },
};

export default async function ArticlesPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const items = getBySection("articles").filter((i) => !category || i.category === category);

  return <SectionListing section="articles" items={items} activeCategory={category} />;
}
