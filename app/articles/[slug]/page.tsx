import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBySection, getBySlug } from "@/lib/content";
import { ContentDetail } from "@/components/ContentDetail";

export async function generateStaticParams() {
  return getBySection("articles").map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getBySlug("articles", slug);
  if (!item) return {};
  return {
    title: item.title,
    description: item.dek,
    alternates: { canonical: `/articles/${item.slug}` },
    openGraph: { title: item.title, description: item.dek, type: "article" },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getBySlug("articles", slug);
  if (!item) notFound();

  return <ContentDetail item={item} />;
}
