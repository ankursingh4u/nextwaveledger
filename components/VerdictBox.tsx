import { CheckCircle2, XCircle, ArrowRightLeft, Gavel } from "lucide-react";
import type { VerdictData } from "@/lib/content/types";

export function VerdictBox({ verdict }: { verdict: VerdictData }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-accent/20 bg-gradient-to-br from-accent-light to-white p-5 shadow-soft sm:p-6">
      <div className="mb-3 flex items-center gap-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-accent-foreground">
          <Gavel className="h-4 w-4" />
        </span>
        <h3 className="text-lg font-semibold text-accent-dark">Final verdict</h3>
      </div>
      <p className="prose-body mb-5 text-sm text-foreground/90">{verdict.summary}</p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-green-100 bg-green-50/70 p-4">
          <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-success">
            <CheckCircle2 className="h-3.5 w-3.5" /> Buy if
          </p>
          <ul className="space-y-1.5">
            {verdict.buyIf.map((item) => (
              <li key={item} className="text-sm text-foreground/90">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-red-100 bg-red-50/70 p-4">
          <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-danger">
            <XCircle className="h-3.5 w-3.5" /> Skip if
          </p>
          <ul className="space-y-1.5">
            {verdict.skipIf.map((item) => (
              <li key={item} className="text-sm text-foreground/90">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {verdict.alternatives.length > 0 && (
        <div className="mt-4 rounded-xl border border-border bg-white/70 p-4">
          <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted">
            <ArrowRightLeft className="h-3.5 w-3.5" /> Alternatives to consider
          </p>
          <ul className="space-y-1.5">
            {verdict.alternatives.map((item) => (
              <li key={item} className="text-sm text-foreground/90">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
