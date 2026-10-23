"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-accent-dark py-16">
      <div className="bg-mesh-ink absolute inset-0 opacity-70" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto flex max-w-4xl flex-col items-center gap-5 px-4 text-center sm:px-6"
      >
        <h2 className="text-balance text-2xl font-semibold text-white sm:text-3xl">
          Not sure where to start? Pick a guide and we&apos;ll do the comparing for you.
        </h2>
        <p className="max-w-xl text-white/80">
          Every guide ends with a clear verdict: who should buy, who should skip, and what to
          consider instead.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/guides"
            className="group inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-accent-dark transition-transform hover:-translate-y-0.5"
          >
            Browse buying guides{" "}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/30 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/10"
          >
            <Mail className="h-4 w-4" /> Ask us a question
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
