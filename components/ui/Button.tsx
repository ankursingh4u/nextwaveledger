import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary: "bg-accent text-accent-foreground hover:bg-accent-dark",
  secondary: "bg-highlight text-white hover:brightness-95",
  ghost: "bg-transparent text-accent hover:bg-accent-light",
  outline: "bg-transparent text-foreground border border-border hover:border-accent hover:text-accent",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 ease-out active:scale-[0.97] whitespace-nowrap";

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  external,
  ...props
}: {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  href?: string;
  external?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "nofollow sponsored noopener" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
