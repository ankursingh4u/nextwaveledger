import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms that govern your use of NextWave Ledger.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Use" updated="October 1, 2026">
      <p>
        These Terms of Use govern your access to and use of nextwaveledger.com (the &quot;Site&quot;).
        By using the Site, you agree to these terms.
      </p>

      <h2>Use of content</h2>
      <p>
        Content on this Site is provided for informational purposes to help you make purchasing
        decisions. You may read, share, and link to our content for personal, non-commercial
        use. You may not republish, scrape, or redistribute our articles, reviews, or guides in
        whole or substantial part without our prior written permission.
      </p>

      <h2>No professional advice</h2>
      <p>
        Our reviews, comparisons, and guides reflect our editorial assessment at the time of
        publication and are not a guarantee of software performance, availability, or pricing.
        Features, prices, and plan limits change after publication; always verify current
        details with the vendor before subscribing.
      </p>

      <h2>Affiliate links and third-party sites</h2>
      <p>
        The Site contains links to third-party software vendors, some of which are affiliate links as
        described in our <a href="/affiliate-disclosure">Affiliate Disclosure</a>. We do not
        control, and are not responsible for, the content, policies, pricing, or practices of
        third-party sites you reach through these links.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        The Site and its content are provided &quot;as is&quot; without warranties of any kind. To the
        fullest extent permitted by law, NextWave Ledger is not liable for any damages arising
        from your use of the Site or reliance on its content, including purchase decisions made
        based on our guides or reviews.
      </p>

      <h2>Changes to the Site and these Terms</h2>
      <p>
        We may update the Site&apos;s content or these Terms at any time. Continued use of the Site
        after changes are posted constitutes acceptance of the updated Terms.
      </p>

      <h2>Governing law</h2>
      <p>
        These Terms are governed by the laws of the jurisdiction in which NextWave Ledger
        operates, without regard to conflict-of-law principles.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these Terms can be sent to{" "}
        <a href="mailto:help@nextwaveledger.com">help@nextwaveledger.com</a>.
      </p>
    </LegalLayout>
  );
}
