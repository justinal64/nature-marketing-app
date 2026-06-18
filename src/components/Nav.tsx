import Link from "next/link";

export default function Nav() {
  return (
    <nav
      className="fixed top-0 z-50 w-full border-b border-foreground/8 backdrop-blur-xl backdrop-saturate-150"
      style={{ backgroundColor: "rgba(244,236,218,0.82)" }}
    >
      <div className="mx-auto flex h-12 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-sm font-semibold tracking-[0.18em] text-foreground transition-opacity hover:opacity-60"
        >
          WILDLENS
        </Link>
        <ul className="hidden items-center gap-9 text-xs text-foreground/70 md:flex">
          <li>
            <Link href="/#features" className="transition-colors hover:text-foreground">
              Features
            </Link>
          </li>
          <li>
            <Link href="/#how-it-works" className="transition-colors hover:text-foreground">
              How it works
            </Link>
          </li>
          <li>
            <Link href="/support" className="transition-colors hover:text-foreground">
              Support
            </Link>
          </li>
        </ul>
        <a
          href="#waitlist"
          className="rounded-full bg-accent px-3.5 py-1.5 text-xs font-medium text-white transition-colors hover:bg-accent-hover"
        >
          Join waitlist
        </a>
      </div>
    </nav>
  );
}
