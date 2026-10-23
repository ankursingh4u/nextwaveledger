import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description: "How NextWave Ledger researches, fact-checks, and updates its software reviews and guides.",
  alternates: { canonical: "/editorial-policy" },
};

export default function EditorialPolicyPage() {
  return (
    <LegalLayout title="Editorial Policy" updated="October 1, 2026">
      <p>
        This policy explains how we research, write, and maintain the content on NextWave
        Ledger, and how commercial relationships do — and do not — influence what we publish.
      </p>

      <h2>Our review methodology</h2>
      <p>
        We evaluate software against the specific criteria that change real-world performance
        for the way people actually use it — sync reliability under real conditions, what&apos;s
        actually gated behind a paid tier, day-to-day workflow friction, and genuine security
        claims — rather than restating a vendor&apos;s pricing-page feature list. Where an article
        references illustrative or placeholder product data instead of a specific tested tool,
        we label it clearly as such so readers always know what they&apos;re looking at.
      </p>

      <h2>Independence from advertisers and affiliate partners</h2>
      <p>
        Affiliate commissions fund this site, but they do not determine our recommendations.
        Writers do not know, and are not told, which tools or vendors pay a higher commission
        rate before forming a recommendation. A tool&apos;s placement in a guide reflects our
        assessment of its merits for a given use case, not its commission rate.
      </p>

      <h2>Fact-checking and sourcing</h2>
      <p>
        Technical claims (encryption standards, data handling, pricing-tier limits, and similar)
        are checked against publicly available documentation and vendor policy pages. We avoid
        presenting a single test result as a universal guarantee of performance, since real-world
        results vary by account, usage pattern, and how quickly a vendor changes its plans.
      </p>

      <h2>Updates and corrections</h2>
      <p>
        Pricing, plan limits, and feature availability change after publication — often more
        frequently for software than for physical products. We note a &ldquo;last
        checked&rdquo; date on pricing and specs, and we revisit and update guides periodically
        rather than leaving them static indefinitely. If you spot an error or an outdated claim,
        tell us through our <a href="/contact">Contact page</a> and we will review and correct
        it.
      </p>

      <h2>What we won&apos;t do</h2>
      <ul>
        <li>We won&apos;t publish a five-star recommendation for a tool we have meaningful, disclosed doubts about.</li>
        <li>We won&apos;t misrepresent a sponsored or affiliate relationship as an independent recommendation.</li>
        <li>We won&apos;t copy a vendor&apos;s marketing copy or feature list without original analysis.</li>
      </ul>
    </LegalLayout>
  );
}
