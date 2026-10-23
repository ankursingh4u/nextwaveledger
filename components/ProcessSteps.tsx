"use client";

import { motion } from "framer-motion";
import { Target, Microscope, MessageSquareWarning, RefreshCcw } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    icon: Target,
    title: "Define real criteria",
    body: "Before we write a word, we list what actually changes how a tool performs for its intended use — not whatever the pricing page leads with.",
  },
  {
    icon: Microscope,
    title: "Check real workflow fit, not just the feature list",
    body: "We weigh real-world behavior — sync reliability, day-to-day friction, what's actually gated behind a paid tier — over marketing-friendly feature checklists.",
  },
  {
    icon: MessageSquareWarning,
    title: "Disclose clearly, near the link",
    body: "Affiliate relationships are disclosed right next to the recommendation itself, not buried in a footer you'd never scroll to.",
  },
  {
    icon: RefreshCcw,
    title: "Revisit and update",
    body: "Pricing and plan limits change. We track a last-checked date and come back to update guides instead of leaving them static indefinitely.",
  },
];

export function ProcessSteps() {
  return (
    <section className="bg-mesh-ink relative overflow-hidden bg-ink py-20">
      <div className="bg-grain absolute inset-0 opacity-[0.04]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Our methodology</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink-foreground sm:text-4xl">How we review</h2>
          <p className="mt-3 text-ink-muted">
            The same four-step process behind every guide, review, and comparison we publish.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="relative rounded-2xl border border-ink-border bg-ink-elevated p-6"
            >
              <span className="absolute right-5 top-5 text-3xl font-semibold text-white/5">
                0{i + 1}
              </span>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/20 text-accent-light">
                <step.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-ink-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.body}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/editorial-policy"
            className="text-sm font-medium text-highlight underline-offset-4 hover:underline"
          >
            Read our full editorial policy →
          </Link>
        </div>
      </div>
    </section>
  );
}
