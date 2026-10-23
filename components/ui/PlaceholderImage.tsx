import Image from "next/image";
import type { Accent } from "@/lib/content/types";

const photoMap: Record<string, string> = {
  security: "/images/categories/security.jpg",
  "security-2": "/images/categories/security-2.jpg",
  "security-3": "/images/categories/security-3.jpg",
  "security-4": "/images/categories/security-4.jpg",
  "security-5": "/images/categories/security-5.jpg",
  "security-6": "/images/categories/security-6.jpg",
  productivity: "/images/categories/productivity.jpg",
  "productivity-2": "/images/categories/productivity-2.jpg",
  "productivity-3": "/images/categories/productivity-3.jpg",
  "productivity-4": "/images/categories/productivity-4.png",
  "productivity-5": "/images/categories/productivity-5.jpg",
  communication: "/images/categories/communication.jpg",
  "communication-2": "/images/categories/communication-2.jpg",
  "communication-3": "/images/categories/communication-3.jpg",
  "communication-4": "/images/categories/communication-4.png",
  finance: "/images/categories/finance.jpg",
  "finance-2": "/images/categories/finance-2.jpg",
  cloud: "/images/categories/cloud.jpg",
  "cloud-2": "/images/categories/cloud-2.jpg",
  "cloud-3": "/images/categories/cloud-3.jpg",
  "cloud-4": "/images/categories/cloud-4.jpg",
  ai: "/images/categories/ai.jpg",
  "ai-2": "/images/categories/ai-2.png",
  "ai-3": "/images/categories/ai-3.jpg",
  "ai-4": "/images/categories/ai-4.jpg",
  marketing: "/images/categories/marketing.jpg",
  "marketing-2": "/images/categories/marketing-2.png",
  "marketing-3": "/images/categories/marketing-3.jpg",
  "marketing-4": "/images/categories/marketing-4.jpg",
};

const accentRing: Record<Accent, string> = {
  indigo: "ring-indigo-500/40",
  amber: "ring-amber-500/40",
  teal: "ring-teal-500/40",
  rose: "ring-rose-500/40",
  sky: "ring-sky-500/40",
};

export function PlaceholderImage({
  iconKey,
  accent = "indigo",
  alt,
  className = "",
  priority = false,
}: {
  iconKey: string;
  accent?: Accent;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  const src = photoMap[iconKey] ?? photoMap.productivity;

  return (
    <div className={`relative overflow-hidden ring-1 ring-inset ${accentRing[accent]} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
        priority={priority}
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
    </div>
  );
}
