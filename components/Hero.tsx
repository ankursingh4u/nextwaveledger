"use client";

import { motion } from "framer-motion";
import { ArrowRight, Search, ShieldCheck, ListChecks, Users } from "lucide-react";
import Link from "next/link";
import { SearchBox } from "./SearchBox";

const trustPoints = [
  { icon: ListChecks, label: "Criteria-based, not catalog copy" },
  { icon: ShieldCheck, label: "Commissions disclosed, never hidden" },
  { icon: Users, label: "Written by category specialists" },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-border bg-white">
      <div className="bg-mesh absolute inset-0 -z-10" />
      <div className="bg-grain absolute inset-0 -z-10 opacity-[0.03] mix-blend-multiply" />

      <motion.div
        aria-hidden
        className="absolute -top-16 left-[8%] h-72 w-72 rounded-full bg-accent/10 blur-3xl"
        animate={{ y: [0, -18, 0], x: [0, 10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute top-8 right-[10%] h-64 w-64 rounded-full bg-highlight/15 blur-3xl"
        animate={{ y: [0, 16, 0], x: [0, -12, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent-light px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-dark"
            >
              Smart software buying guides &amp; reviews
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-balance mt-5 text-4xl font-semibold leading-[1.08] text-foreground sm:text-5xl md:text-6xl"
            >
              Choose the right tool{" "}
              <span className="bg-gradient-to-r from-accent via-accent-dark to-accent bg-clip-text text-transparent">
                the first time.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mt-5 max-w-xl text-lg text-muted lg:mx-0"
            >
              NextWave Ledger breaks down what actually matters in password managers, VPNs,
              project management tools, and more — in plain language — so you can subscribe
              with confidence instead of guesswork.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mx-auto mt-8 max-w-md lg:mx-0"
            >
              <SearchBox placeholder="Search password managers, VPNs, project tools…" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm lg:justify-start"
            >
              <Link
                href="/guides"
                className="group inline-flex items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 font-medium text-accent-foreground shadow-glow transition-all hover:bg-accent-dark hover:shadow-lifted"
              >
                Browse buying guides{" "}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/reviews"
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-5 py-2.5 font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <Search className="h-4 w-4" /> Read latest reviews
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start"
            >
              {trustPoints.map(({ icon: Icon, label }) => (
                <span key={label} className="flex items-center gap-1.5 text-xs font-medium text-muted">
                  <Icon className="h-3.5 w-3.5 text-accent" /> {label}
                </span>
              ))}
            </motion.div>
          </div>

          <div className="relative hidden h-[420px] lg:block">
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -4 }}
              animate={{ opacity: 1, y: [0, -10, 0], rotate: -4 }}
              transition={{ opacity: { duration: 0.6, delay: 0.3 }, y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
              className="absolute left-4 top-6 w-56 rounded-2xl border border-border bg-white p-4 shadow-lifted"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">Buying guide</p>
              <p className="mt-1 text-sm font-semibold text-foreground">Best password managers for teams</p>
              <div className="mt-3 flex items-center gap-1.5 text-xs text-muted">
                <ListChecks className="h-3.5 w-3.5 text-success" /> 6 criteria checked
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, rotate: 3 }}
              animate={{ opacity: 1, y: [0, 12, 0], rotate: 3 }}
              transition={{ opacity: { duration: 0.6, delay: 0.5 }, y: { duration: 7, repeat: Infinity, ease: "easeInOut" } }}
              className="absolute right-0 top-32 w-52 rounded-2xl border border-border bg-white p-4 shadow-lifted"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-highlight">Pricing checked</p>
              <p className="mt-1 text-sm font-semibold text-foreground">Updated this month</p>
              <div className="mt-3 flex items-center gap-1.5 text-xs text-muted">
                <ShieldCheck className="h-3.5 w-3.5 text-success" /> Disclosure near every link
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: [0, -8, 0] }}
              transition={{ opacity: { duration: 0.6, delay: 0.7 }, y: { duration: 8, repeat: Infinity, ease: "easeInOut" } }}
              className="absolute bottom-4 left-16 w-48 rounded-2xl border border-border bg-white p-4 shadow-lifted"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">Comparison</p>
              <p className="mt-1 text-sm font-semibold text-foreground">VPN vs. browser privacy</p>
              <div className="mt-3 flex items-center gap-1.5 text-xs text-muted">
                <Users className="h-3.5 w-3.5 text-accent" /> Written by a specialist
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
