import Link from "next/link";

const footerLinks: { label: string; href: string }[] = [
  { label: "Features", href: "/#features" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Support", href: "/support" },
];

export default function Footer() {
  return (
    <footer className="border-t border-hairline/60 px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <span className="text-xs font-semibold tracking-[0.18em] text-muted">
            WILDLENS
          </span>
          <div className="flex flex-wrap justify-center gap-x-7 gap-y-3 text-xs text-muted">
            {footerLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="transition-colors hover:text-foreground"
              >
                {label}
              </Link>
            ))}
          </div>
          <p className="text-xs text-muted/70">
            &copy; {new Date().getFullYear()} WildLens. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
