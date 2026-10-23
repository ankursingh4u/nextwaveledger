import type { Metadata } from "next";
import { Mail, Clock, MapPin } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with NextWave Ledger for questions, partnerships, press, or corrections.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <AnimatedSection as="section" className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">Contact Us</h1>
      <p className="mt-2 max-w-xl text-muted">
        Questions about a review, a partnership inquiry, press request, or something we got
        wrong — we read every message.
      </p>

      <div className="mt-6 flex flex-wrap gap-6 text-sm text-foreground/90">
        <span className="flex items-center gap-1.5">
          <Mail className="h-4 w-4 text-accent" /> help@nextwaveledger.com
        </span>
        <span className="flex items-center gap-1.5">
          <Clock className="h-4 w-4 text-accent" /> We typically respond within 2 business days
        </span>
        <span className="flex items-start gap-1.5">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
          <span>
            Punit Joshi, Kuchaman City, PO: Kuchamancity-d, Dist: Nagaur, Rajasthan — 341508, India
          </span>
        </span>
      </div>

      <div className="mt-8">
        <ContactForm />
      </div>
    </AnimatedSection>
  );
}
