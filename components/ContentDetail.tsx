import type { ContentItem } from "@/lib/content/types";
import { getRelated } from "@/lib/content";
import { slugify } from "@/lib/slugify";
import { ArticleHeader } from "./ArticleHeader";
import { AuthorBio } from "./AuthorBio";
import { ProductCard } from "./ProductCard";
import { ComparisonTable } from "./ComparisonTable";
import { VerdictBox } from "./VerdictBox";
import { DisclosureBanner } from "./DisclosureBanner";
import { ContentCard } from "./ContentCard";
import { ReadingProgress } from "./ReadingProgress";
import { TableOfContents } from "./TableOfContents";

export function ContentDetail({ item }: { item: ContentItem }) {
  const hasProducts = (item.product || (item.products && item.products.length > 0));
  const related = getRelated(item, 3);
  const headings = item.body.map((b) => b.heading);

  return (
    <article>
      <ReadingProgress />
      <ArticleHeader item={item} />

      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="lg:grid lg:grid-cols-[1fr_220px] lg:gap-12">
          <div className="max-w-3xl">
            <div className="prose-body space-y-4 text-foreground/90">
              {item.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {hasProducts && (
              <div className="my-8">
                <DisclosureBanner />
              </div>
            )}

            <div className="mt-8 space-y-10">
              {item.body.map((block) => (
                <section key={block.heading} id={slugify(block.heading)} className="scroll-mt-24">
                  <h2 className="mb-3 text-xl font-semibold text-foreground">{block.heading}</h2>
                  <div className="prose-body space-y-3 text-foreground/90">
                    {block.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                  {block.list && (
                    <ul className="mt-3 list-disc space-y-1.5 pl-5 text-foreground/90">
                      {block.list.map((li) => (
                        <li key={li}>{li}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            {item.product && (
              <div className="mt-10">
                <h2 className="mb-4 text-xl font-semibold text-foreground">Featured pick</h2>
                <ProductCard product={item.product} iconKey={item.photoKey ?? item.iconKey} accent={item.accent} />
              </div>
            )}

            {item.products && item.products.length > 0 && (
              <div className="mt-10">
                <h2 className="mb-4 text-xl font-semibold text-foreground">Our picks</h2>
                <div className="space-y-5">
                  {item.products.map((p) => (
                    <ProductCard key={p.name} product={p} iconKey={item.photoKey ?? item.iconKey} accent={item.accent} />
                  ))}
                </div>
              </div>
            )}

            {item.comparison && (
              <div className="mt-10">
                <h2 className="mb-4 text-xl font-semibold text-foreground">Side-by-side comparison</h2>
                <ComparisonTable data={item.comparison} />
              </div>
            )}

            {item.verdict && (
              <div className="mt-10">
                <VerdictBox verdict={item.verdict} />
              </div>
            )}

            <div className="mt-10">
              <AuthorBio author={item.author} role={item.authorRole} />
            </div>
          </div>

          <TableOfContents headings={headings} />
        </div>
      </div>

      {related.length > 0 && (
        <div className="mx-auto mt-16 max-w-6xl border-t border-border px-4 py-12 sm:px-6">
          <h2 className="mb-6 text-xl font-semibold text-foreground">You might also like</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r, i) => (
              <ContentCard key={r.slug} item={r} index={i} />
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
