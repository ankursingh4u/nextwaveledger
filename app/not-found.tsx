import Link from "next/link";
import { Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-light text-accent-dark">
        <Compass className="h-6 w-6" />
      </div>
      <h1 className="mt-6 text-3xl font-semibold text-foreground">Page not found</h1>
      <p className="mt-2 text-muted">
        The page you&apos;re looking for doesn&apos;t exist or may have moved. Try one of these instead.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground hover:bg-accent-dark">
          Go home
        </Link>
        <Link href="/guides" className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:border-accent hover:text-accent">
          Browse buying guides
        </Link>
      </div>
    </div>
  );
}
