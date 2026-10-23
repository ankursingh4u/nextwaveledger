"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Accent } from "@/lib/content/types";
import { PlaceholderImage } from "./ui/PlaceholderImage";

export function CategoryCard({
  href,
  label,
  description,
  iconKey,
  accent,
  count,
}: {
  href: string;
  label: string;
  description: string;
  iconKey: string;
  accent: Accent;
  count: number;
}) {
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className="group h-full">
      <Link
        href={href}
        className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition-shadow duration-300 hover:shadow-card"
      >
        <PlaceholderImage
          iconKey={iconKey}
          accent={accent}
          alt={`${label} category photo`}
          className="aspect-[16/9] w-full transition-transform duration-300 group-hover:scale-105"
        />
        <div className="flex flex-1 flex-col gap-1 p-5">
          <p className="font-semibold text-foreground">{label}</p>
          <p className="text-sm text-muted">{description}</p>
          <div className="mt-auto flex items-center justify-between pt-3">
            <p className="text-xs font-medium text-accent">{count} published</p>
            <ArrowRight className="h-3.5 w-3.5 text-accent opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
