import { Info } from "lucide-react";

export function DisclosureBanner({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <p className="flex items-start gap-1.5 text-xs text-muted">
        <Info className="w-3.5 h-3.5 mt-0.5 shrink-0" />
        <span>
          We may earn a commission if you sign up or buy through this link, at no extra cost to you.
        </span>
      </p>
    );
  }

  return (
    <div className="flex items-start gap-3 rounded-xl border border-border bg-surface px-4 py-3 text-sm text-muted">
      <Info className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
      <p>
        NextWave Ledger may earn a commission when you sign up or buy through links on this
        page. This never affects the price you pay, and it does not influence which tools we
        recommend.
        Read our{" "}
        <a href="/affiliate-disclosure" className="text-accent underline hover:text-accent-dark">
          full affiliate disclosure
        </a>
        .
      </p>
    </div>
  );
}
