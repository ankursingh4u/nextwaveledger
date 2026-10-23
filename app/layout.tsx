import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
});

const SITE_URL = "https://www.nextwaveledger.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "NextWave Ledger — Smart Software Buying Guides & Reviews",
    template: "%s | NextWave Ledger",
  },
  description:
    "Plain-language software and SaaS reviews, comparisons, and buying guides that explain what actually matters before you subscribe.",
  openGraph: {
    type: "website",
    siteName: "NextWave Ledger",
    title: "NextWave Ledger — Smart Software Buying Guides & Reviews",
    description:
      "Plain-language software and SaaS reviews, comparisons, and buying guides that explain what actually matters before you subscribe.",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "NextWave Ledger — Smart Software Buying Guides & Reviews",
    description:
      "Plain-language software and SaaS reviews, comparisons, and buying guides that explain what actually matters before you subscribe.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
