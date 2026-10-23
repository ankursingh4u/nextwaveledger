"use client";

import { useEffect, useState } from "react";
import { List } from "lucide-react";
import { slugify } from "@/lib/slugify";

export function TableOfContents({ headings }: { headings: string[] }) {
  const [active, setActive] = useState<string>(slugify(headings[0] ?? ""));

  useEffect(() => {
    const elements = headings
      .map((h) => document.getElementById(slugify(h)))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -60% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className="sticky top-24 hidden max-h-[calc(100vh-7rem)] overflow-y-auto lg:block">
      <p className="mb-3 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted">
        <List className="h-3.5 w-3.5" /> On this page
      </p>
      <ul className="space-y-2 border-l border-border pl-4">
        {headings.map((heading) => {
          const id = slugify(heading);
          const isActive = active === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`block text-sm transition-colors ${
                  isActive ? "font-medium text-accent" : "text-muted hover:text-foreground"
                }`}
              >
                {heading}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
