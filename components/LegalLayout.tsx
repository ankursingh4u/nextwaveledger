import type { ReactNode } from "react";
import { AnimatedSection } from "./ui/AnimatedSection";

export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated?: string;
  children: ReactNode;
}) {
  return (
    <AnimatedSection as="section" className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">{title}</h1>
      {updated && <p className="mt-2 text-sm text-muted">Last updated: {updated}</p>}
      <div className="prose-body mt-8 space-y-5 text-foreground/90 [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5 [&_a]:text-accent [&_a]:underline [&_a:hover]:text-accent-dark">
        {children}
      </div>
    </AnimatedSection>
  );
}
