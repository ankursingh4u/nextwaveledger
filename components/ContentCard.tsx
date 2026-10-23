"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, ArrowUpRight } from "lucide-react";
import type { ContentItem } from "@/lib/content/types";
import { PlaceholderImage } from "./ui/PlaceholderImage";
import { Badge } from "./ui/Badge";

const sectionKickers: Record<ContentItem["section"], string> = {
  articles: "Article",
  reviews: "Review",
  comparisons: "Comparison",
  guides: "Buying Guide",
};

const accentBar: Record<ContentItem["accent"], string> = {
  indigo: "bg-accent",
  amber: "bg-highlight",
  teal: "bg-teal-500",
  rose: "bg-rose-500",
  sky: "bg-sky-500",
};

export function ContentCard({ item, index = 0 }: { item: ContentItem; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.07, 0.35), ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group h-full"
    >
      <Link
        href={`/${item.section}/${item.slug}`}
        className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition-shadow duration-300 hover:shadow-lifted"
      >
        <span className={`absolute inset-x-0 top-0 h-[3px] ${accentBar[item.accent]}`} />

        <div className="relative overflow-hidden">
          <PlaceholderImage
            iconKey={item.photoKey ?? item.iconKey}
            accent={item.accent}
            alt={`${item.title} photo`}
            className="aspect-[16/10] w-full transition-transform duration-500 group-hover:scale-[1.04]"
          />
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-foreground/80 shadow-soft backdrop-blur-sm">
            {sectionKickers[item.section]}
          </span>
        </div>

        <div className="flex flex-1 flex-col gap-2 p-5">
          <Badge tone="accent" className="w-fit">
            {item.category}
          </Badge>
          <h3 className="flex items-start gap-1.5 text-base font-semibold leading-snug text-foreground transition-colors group-hover:text-accent">
            <span>{item.title}</span>
            <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 translate-x-0 translate-y-0.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
          </h3>
          <p className="line-clamp-2 flex-1 text-sm text-muted">{item.dek}</p>
          <p className="flex items-center gap-1 text-xs text-muted">
            <Clock className="h-3 w-3" /> {item.readTime}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
