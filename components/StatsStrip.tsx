"use client";

import { motion } from "framer-motion";
import { BookOpenCheck, Users, LayoutGrid, ListChecks } from "lucide-react";
import { CountUp } from "./ui/CountUp";

export function StatsStrip({
  published,
  writers,
  categories,
  criteria,
}: {
  published: number;
  writers: number;
  categories: number;
  criteria: number;
}) {
  const stats = [
    { icon: BookOpenCheck, value: published, label: "Guides & reviews published" },
    { icon: Users, value: writers, label: "Specialist staff writers" },
    { icon: LayoutGrid, value: categories, label: "Gadget categories covered" },
    { icon: ListChecks, value: criteria, suffix: "+", label: "Selection criteria documented" },
  ];

  return (
    <div className="relative -mt-8 z-10 mx-auto max-w-5xl px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border shadow-card sm:grid-cols-4"
      >
        {stats.map(({ icon: Icon, value, suffix, label }) => (
          <div key={label} className="flex flex-col items-center gap-1.5 bg-white px-4 py-6 text-center">
            <Icon className="h-4 w-4 text-accent" />
            <p className="text-2xl font-semibold text-foreground sm:text-3xl">
              <CountUp value={value} suffix={suffix} />
            </p>
            <p className="text-xs text-muted">{label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
