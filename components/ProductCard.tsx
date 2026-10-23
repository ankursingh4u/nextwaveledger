"use client";

import { motion } from "framer-motion";
import { Check, X, Clock, AlertTriangle, Tag } from "lucide-react";
import type { ProductCardData, Accent } from "@/lib/content/types";
import { PlaceholderImage } from "./ui/PlaceholderImage";
import { Button } from "./ui/Button";
import { DisclosureBanner } from "./DisclosureBanner";

export function ProductCard({
  product,
  iconKey,
  accent = "indigo",
}: {
  product: ProductCardData;
  iconKey: string;
  accent?: Accent;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition-shadow duration-300 hover:shadow-card"
    >
      {product.isTemplate && (
        <div className="flex items-center gap-2 border-b border-amber-200 bg-amber-50 px-4 py-2 text-xs font-medium text-amber-800">
          <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
          Template data — replace with your own tested product before publishing.
        </div>
      )}

      <div className="grid gap-5 p-5 sm:grid-cols-[160px_1fr] sm:p-6">
        <PlaceholderImage
          iconKey={iconKey}
          accent={accent}
          alt={`${product.name} photo`}
          className="aspect-square w-full rounded-xl sm:w-40"
        />

        <div className="flex flex-col gap-4">
          <div>
            <h3 className="text-lg font-semibold text-foreground">{product.name}</h3>
            <p className="text-sm text-muted">{product.tagline}</p>
          </div>

          <p className="prose-body text-sm text-foreground/90">{product.summary}</p>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-green-100 bg-green-50/60 p-3">
              <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-success">Pros</p>
              <ul className="space-y-1.5">
                {product.pros.map((pro) => (
                  <li key={pro} className="flex items-start gap-1.5 text-sm text-foreground/90">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-success" />
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-red-100 bg-red-50/60 p-3">
              <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-danger">Cons</p>
              <ul className="space-y-1.5">
                {product.cons.map((con) => (
                  <li key={con} className="flex items-start gap-1.5 text-sm text-foreground/90">
                    <X className="mt-0.5 h-3.5 w-3.5 shrink-0 text-danger" />
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {product.specs.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {product.specs.map((spec) => (
                <span
                  key={spec.label}
                  className="inline-flex items-center gap-1 rounded-full border border-border bg-surface px-3 py-1 text-xs text-foreground/90"
                >
                  <span className="text-muted">{spec.label}:</span>
                  <span className="font-medium">{spec.value}</span>
                </span>
              ))}
            </div>
          )}

          <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl bg-accent-light/60 px-4 py-3">
            <div>
              <p className="flex items-center gap-1.5 text-lg font-semibold text-foreground">
                <Tag className="h-4 w-4 text-accent" /> {product.price}
              </p>
              <p className="flex items-center gap-1 text-xs text-muted">
                <Clock className="h-3 w-3" />
                Price checked {product.priceCheckedDate}
              </p>
            </div>
            <Button href={product.retailerHref} external size="sm">
              {product.retailerLabel}
            </Button>
          </div>

          <DisclosureBanner compact />
        </div>
      </div>
    </motion.div>
  );
}
