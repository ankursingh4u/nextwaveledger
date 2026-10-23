"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, CheckCircle2 } from "lucide-react";

const HELP_EMAIL = "help@nextwaveledger.com";

const reasons = [
  "General question",
  "Advertiser / partnership inquiry",
  "Press or media",
  "Correction or feedback on an article",
  "Privacy or data request",
  "Something else",
];

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState(reasons[0]);
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const subject = `[${reason}] Message from ${name || "website visitor"}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Reason: ${reason}`,
      "",
      message,
    ].join("\n");

    const mailtoUrl = `mailto:${HELP_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setSent(true);
    window.location.href = mailtoUrl;
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface p-10 text-center"
          >
            <CheckCircle2 className="h-10 w-10 text-success" />
            <p className="font-semibold text-foreground">Opening your email app…</p>
            <p className="max-w-sm text-sm text-muted">
              We&apos;ve pre-filled a message to {HELP_EMAIL}. If nothing opened, you can email us
              directly at{" "}
              <a href={`mailto:${HELP_EMAIL}`} className="text-accent underline">
                {HELP_EMAIL}
              </a>
              .
            </p>
            <button
              onClick={() => setSent(false)}
              className="mt-2 text-sm font-medium text-accent hover:text-accent-dark"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 rounded-2xl border border-border bg-white p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
                  Your name
                </label>
                <input
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-border px-3.5 py-2.5 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                  placeholder="Jordan Lee"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                  Your email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-border px-3.5 py-2.5 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="reason" className="mb-1.5 block text-sm font-medium text-foreground">
                Reason for contacting us
              </label>
              <select
                id="reason"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="w-full rounded-lg border border-border px-3.5 py-2.5 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
              >
                {reasons.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-lg border border-border px-3.5 py-2.5 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                placeholder="How can we help?"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 self-start rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-dark"
            >
              <Send className="h-4 w-4" /> Send message
            </button>

            <p className="flex items-center gap-1.5 text-xs text-muted">
              <Mail className="h-3.5 w-3.5" />
              This opens your email app with the message pre-filled to {HELP_EMAIL}.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
