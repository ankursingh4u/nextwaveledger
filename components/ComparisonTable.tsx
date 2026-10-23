import { Scale } from "lucide-react";
import type { ComparisonTableData } from "@/lib/content/types";

export function ComparisonTable({ data }: { data: ComparisonTableData }) {
  return (
    <div className="rounded-2xl border border-border bg-white p-5 shadow-soft sm:p-6">
      <div className="mb-4 flex items-center gap-2 text-sm font-medium text-muted">
        <Scale className="h-4 w-4 text-accent" />
        {data.optionALabel} <span className="text-border">vs.</span> {data.optionBLabel}
      </div>

      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full min-w-[520px] border-collapse text-sm">
          <thead>
            <tr className="text-left">
              <th className="w-1/3 border-b border-border bg-surface px-4 py-3 font-semibold text-muted">
                Criterion
              </th>
              <th className="border-b border-l border-border bg-accent-light px-4 py-3 font-semibold text-accent-dark">
                {data.optionALabel}
              </th>
              <th className="border-b border-l border-border bg-surface px-4 py-3 font-semibold text-foreground">
                {data.optionBLabel}
              </th>
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row, i) => (
              <tr key={row.criterion} className={i % 2 === 1 ? "bg-surface/50" : ""}>
                <th scope="row" className="border-b border-border px-4 py-3 align-top font-medium text-foreground">
                  {row.criterion}
                </th>
                <td className="border-b border-l border-border px-4 py-3 align-top text-foreground/90">
                  {row.optionA}
                </td>
                <td className="border-b border-l border-border px-4 py-3 align-top text-foreground/90">
                  {row.optionB}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-sm text-muted">
        <span className="font-semibold text-foreground">How we evaluated this: </span>
        {data.methodology}
      </p>
    </div>
  );
}
