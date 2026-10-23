"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap, Info } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/articles", label: "Articles" },
  { href: "/reviews", label: "Reviews" },
  { href: "/comparisons", label: "Comparisons" },
  { href: "/guides", label: "Buying Guides" },
  { href: "/about", label: "About" },
  { href: "/affiliate-disclosure", label: "Disclosure" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/90 backdrop-blur">
      <div className="flex items-center justify-center gap-1.5 bg-accent-dark px-4 py-1.5 text-center text-xs text-white/90">
        <Info className="h-3 w-3 shrink-0" />
        <span>
          We may earn a commission from links on this site.{" "}
          <Link href="/affiliate-disclosure" className="underline hover:text-white">
            Affiliate Disclosure
          </Link>
        </span>
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold text-foreground" onClick={() => setOpen(false)}>
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-accent-foreground">
            <Zap className="h-[18px] w-[18px]" />
          </span>
          <span className="font-serif-heading text-lg">NextWave Ledger</span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            const secondary = link.href === "/affiliate-disclosure";
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  secondary
                    ? `text-xs uppercase tracking-wide ${active ? "text-accent" : "text-muted hover:text-accent"}`
                    : active
                      ? "text-accent"
                      : "text-foreground/80 hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-dark"
          >
            Contact
          </Link>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-border bg-white lg:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4 sm:px-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/90 transition-colors hover:bg-accent-light hover:text-accent-dark"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-accent px-3 py-2.5 text-center text-sm font-medium text-accent-foreground"
              >
                Contact
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
