import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "What data NextWave Ledger collects, how it's used, and how to contact us about privacy.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="October 1, 2026">
      <p>
        This policy describes what information NextWave Ledger (&quot;we,&quot; &quot;us&quot;) collects when you
        visit nextwaveledger.com, how we use it, and how you can contact us about it.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>
          <strong>Usage data:</strong> pages visited, approximate location (derived from IP),
          device and browser type, and referring site, collected through analytics tools.
        </li>
        <li>
          <strong>Contact form data:</strong> name, email address, and message content when you
          voluntarily submit our contact form (which opens a pre-filled email to our support
          address rather than storing data on our servers).
        </li>
        <li>
          <strong>Cookies:</strong> small files used for basic site functionality and analytics.
          See the Cookies section below.
        </li>
      </ul>

      <h2>How we use this information</h2>
      <p>
        We use usage data to understand which content is useful, fix broken pages, and improve
        site performance. We use contact form information only to respond to your inquiry.
        We do not sell personal information to third parties.
      </p>

      <h2>Cookies and analytics</h2>
      <p>
        We may use cookies and similar technologies, including third-party analytics services,
        to understand aggregate site traffic and improve the site. You can disable cookies in
        your browser settings; doing so may affect some site functionality but will not prevent
        you from reading content.
      </p>

      <h2>Affiliate links and third-party sites</h2>
      <p>
        Some links on this site are affiliate links that take you to third-party software
        vendors. Once you leave our site, that vendor&apos;s own privacy policy applies to any
        data they collect.
        See our <a href="/affiliate-disclosure">Affiliate Disclosure</a> for more on how these
        links work.
      </p>

      <h2>Data retention</h2>
      <p>
        We retain aggregate analytics data only as long as needed to understand site trends, and
        we retain contact form submissions only as long as needed to resolve your inquiry and
        keep a reasonable record of correspondence.
      </p>

      <h2>Your rights</h2>
      <p>
        You may request details about what information we hold about you, request corrections,
        or request deletion, subject to applicable law, by emailing{" "}
        <a href="mailto:help@nextwaveledger.com">help@nextwaveledger.com</a>.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy as our practices evolve. Material changes will be reflected by
        updating the &quot;Last updated&quot; date above.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy can be sent to{" "}
        <a href="mailto:help@nextwaveledger.com">help@nextwaveledger.com</a> or through our{" "}
        <a href="/contact">Contact page</a>.
      </p>
    </LegalLayout>
  );
}
