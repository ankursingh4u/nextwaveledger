"use client";

import { motion } from "framer-motion";
import { MessagesSquare, ShieldCheck, LayoutList } from "lucide-react";

const points = [
  {
    icon: MessagesSquare,
    title: "Plain-language explainers",
    body: "End-to-end encryption, freemium limits, deliverability reputation — we translate SaaS marketing language into what it actually means for you.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent disclosure",
    body: "Affiliate commissions fund this site, but they never determine a recommendation, and we say so next to every link — not just in a footer.",
  },
  {
    icon: LayoutList,
    title: "Criteria, not a catalog",
    body: "Every guide is built from explicit selection criteria and a clear verdict on who should buy and who should skip — not a reworded spec sheet.",
  },
];

export function Differentiators() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">Why read NextWave Ledger</h2>
        <p className="mt-2 text-muted">What we try to do differently from a typical affiliate catalog.</p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {points.map((point, i) => (
          <motion.div
            key={point.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="rounded-2xl border border-border bg-white p-6 shadow-soft transition-shadow hover:shadow-card"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-light text-accent-dark">
              <point.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-base font-semibold text-foreground">{point.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{point.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
