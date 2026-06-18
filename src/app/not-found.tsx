import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <p className="mb-3 text-sm font-semibold tracking-widest text-accent">404</p>
      <h1 className="mb-4 text-4xl font-semibold tracking-tight text-foreground">
        Nothing here in the wild.
      </h1>
      <p className="mb-10 max-w-sm text-base leading-relaxed text-muted">
        This path doesn&apos;t exist — maybe it flew off, burrowed underground, or never was.
      </p>
      <Link
        href="/"
        className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white shadow-[0_4px_24px_rgba(184,92,58,0.3)] transition-all hover:bg-accent-hover"
      >
        Back to WildLens
      </Link>
    </main>
  );
}
