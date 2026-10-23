"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Search } from "lucide-react";

export function SearchBox({ placeholder = "Search articles, reviews, guides…" }: { placeholder?: string }) {
  const [value, setValue] = useState("");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!value.trim()) return;
    router.push(`/search?q=${encodeURIComponent(value.trim())}`);
  }

  return (
    <form onSubmit={handleSubmit} className="relative" role="search">
      <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
      <input
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        aria-label="Search NextWave Ledger"
        className="w-full rounded-full border border-border bg-white py-3 pl-11 pr-24 text-sm text-foreground shadow-sm transition-shadow focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
      />
      <button
        type="submit"
        className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-accent-foreground transition-colors hover:bg-accent-dark"
      >
        Search
      </button>
    </form>
  );
}
