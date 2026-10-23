import { ShieldCheck } from "lucide-react";

const authorBios: Record<string, string> = {
  "Maya Oduya":
    "Maya covers security and privacy tools, focusing on how encryption and access-control claims translate into real day-to-day protection rather than marketing language.",
  "Devin Park":
    "Devin covers productivity and cloud tools, with a focus on real-world workflow fit, sync reliability, and long-term lock-in risk over headline feature lists.",
  "Priya Nair":
    "Priya covers AI and emerging software tools, with an emphasis on what a tool actually automates safely versus what still needs human review.",
};

export function AuthorBio({ author, role }: { author: string; role: string }) {
  const bio = authorBios[author] ?? "A NextWave Ledger staff writer focused on practical, evidence-based software guidance.";

  return (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-5">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent-light text-sm font-semibold text-accent-dark">
        {author
          .split(" ")
          .map((n) => n[0])
          .join("")}
      </div>
      <div>
        <p className="font-semibold text-foreground">{author}</p>
        <p className="text-sm text-muted">{role}</p>
        <p className="mt-2 text-sm text-foreground/90">{bio}</p>
        <p className="mt-2 flex items-center gap-1.5 text-xs text-muted">
          <ShieldCheck className="h-3.5 w-3.5 text-success" />
          Reviewed against our{" "}
          <a href="/editorial-policy" className="text-accent underline hover:text-accent-dark">
            editorial standards
          </a>
        </p>
      </div>
    </div>
  );
}
