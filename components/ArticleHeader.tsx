import { Calendar, Clock, RefreshCw, User } from "lucide-react";
import type { ContentItem } from "@/lib/content/types";
import { PlaceholderImage } from "./ui/PlaceholderImage";
import { Badge } from "./ui/Badge";

export function ArticleHeader({ item }: { item: ContentItem }) {
  return (
    <header className="mx-auto max-w-4xl px-4 pb-8 pt-10 sm:px-6">
      <Badge tone="accent">{item.category}</Badge>
      <h1 className="text-balance mt-4 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
        {item.title}
      </h1>
      <p className="prose-body mt-3 max-w-2xl text-lg text-muted">{item.dek}</p>

      <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-muted">
        <span className="flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 font-medium text-foreground">
          <User className="h-3.5 w-3.5 text-accent" /> {item.author}
        </span>
        <span className="rounded-full border border-border bg-surface px-3 py-1.5">{item.authorRole}</span>
        <span className="flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5">
          <Calendar className="h-3.5 w-3.5" /> {item.publishedDate}
        </span>
        <span className="flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5">
          <RefreshCw className="h-3.5 w-3.5" /> Updated {item.updatedDate}
        </span>
        <span className="flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5">
          <Clock className="h-3.5 w-3.5" /> {item.readTime}
        </span>
      </div>

      <PlaceholderImage
        iconKey={item.photoKey ?? item.iconKey}
        accent={item.accent}
        alt={`${item.title} photo`}
        className="mt-8 aspect-[16/7] w-full rounded-2xl border border-border shadow-lifted"
        priority
      />
    </header>
  );
}
