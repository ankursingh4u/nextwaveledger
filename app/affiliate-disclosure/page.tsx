import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: "How NextWave Ledger uses affiliate links and earns commissions, in plain language.",
  alternates: { canonical: "/affiliate-disclosure" },
};

export default function AffiliateDisclosurePage() {
  return (
    <LegalLayout title="Affiliate Disclosure" updated="October 1, 2026">
      <p>
        NextWave Ledger is reader-supported. In plain terms: when you click certain links on
        this site and sign up or subscribe, we may earn a commission from the software vendor or
        affiliate network. This disclosure explains exactly how that works.
      </p>

      <h2>What this means for you</h2>
      <ul>
        <li>Clicking an affiliate link and subscribing never increases the price you pay.</li>
        <li>We do not charge readers for access to any review, guide, or comparison on this site.</li>
        <li>A commission is paid by the software vendor or affiliate network, not by you.</li>
      </ul>

      <h2>How this affects our recommendations</h2>
      <p>
        It doesn&apos;t determine them. Our writers evaluate tools against the criteria
        described in our <a href="/editorial-policy">Editorial Policy</a> before commission
        rates are considered, if at all. We link to a tool because we believe it fits the
        use case described in the article — the presence of a commission is a byproduct of how
        the site is funded, not the reason a tool was recommended.
      </p>

      <h2>Where you&apos;ll see affiliate links</h2>
      <p>
        Affiliate links typically appear as &ldquo;visit official site&rdquo; buttons on
        product cards within reviews, comparisons, and buying guides. We place a short
        commission disclosure directly near those links and recommendations — not only on
        this page or the site footer — in keeping with FTC guidance on clear and conspicuous
        disclosure.
      </p>

      <h2>Affiliate programs we may participate in</h2>
      <p>
        We may participate in one or more affiliate marketing programs, which may include
        networks such as AvantLink and individual SaaS vendor partner programs. This list may
        change over time as our partnerships evolve; the obligations described above apply
        regardless of which specific program a given link belongs to.
      </p>

      <h2>Questions</h2>
      <p>
        If anything about a specific link or recommendation is unclear, contact us at{" "}
        <a href="mailto:help@nextwaveledger.com">help@nextwaveledger.com</a> and we&apos;ll
        clarify or correct it.
      </p>
    </LegalLayout>
  );
}
