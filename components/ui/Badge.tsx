import type { ReactNode } from "react";

type Tone = "accent" | "highlight" | "muted" | "success";

const toneClasses: Record<Tone, string> = {
  accent: "bg-accent-light text-accent-dark",
  highlight: "bg-highlight-light text-highlight",
  muted: "bg-surface-alt text-muted",
  success: "bg-green-50 text-success",
};

export function Badge({
  children,
  tone = "accent",
  className = "",
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-wide ${toneClasses[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
