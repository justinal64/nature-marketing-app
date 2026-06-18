import Reveal from "@/components/Reveal";

const features = [
  {
    eyebrow: "Camera",
    title: "Point and know in seconds.",
    description:
      "Aim your camera at any plant, bird, insect, or snake. On-device AI identifies it instantly — no signal needed.",
    span: "md:col-span-2",
    accent: "text-accent",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M3 9a2 2 0 012-2h1l2-3h8l2 3h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    eyebrow: "Field Guide",
    title: "500+ Sonoran species.",
    description:
      "Browse trees, birds, insects, and snakes with photos, range maps, and identifying features — all bundled offline.",
    span: "",
    accent: "text-sage",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V12" /><path d="M12 12C12 12 8 9 4 10s-2 6 2 8 6-6 6-6z" /><path d="M12 12c0 0 4-3 8-2s2 6-2 8-6-6-6-6z" />
        <path d="M12 8V2" /><path d="M9 5l3-3 3 3" />
      </svg>
    ),
  },
  {
    eyebrow: "Journal",
    title: "Every find, preserved.",
    description:
      "Save sightings with photos and notes. Your personal field journal builds a record of everywhere you've been.",
    span: "",
    accent: "text-[#6B4E6B]",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
        <path d="M8 7h8" /><path d="M8 11h6" />
      </svg>
    ),
  },
  {
    eyebrow: "Progress",
    title: "Come back to the wild.",
    description:
      "Daily streaks, species milestones, and badges turn every walk into a habit worth keeping.",
    span: "md:col-span-2",
    accent: "text-accent-warm",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="mb-3 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Get to know WildLens.
          </h2>
          <p className="mb-12 max-w-xl text-lg text-muted">
            Everything you need to explore the wild, nothing you don&apos;t.
          </p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal key={feature.eyebrow} delay={i * 0.08} className={feature.span}>
              <div className="h-full rounded-[1.75rem] border border-hairline/80 bg-surface p-8 md:p-10">
                <div className={`mb-6 ${feature.accent}`}>{feature.icon}</div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted">
                  {feature.eyebrow}
                </p>
                <h3
                  className={`mb-3 max-w-md text-2xl font-semibold tracking-tight text-foreground ${
                    feature.span ? "md:text-3xl" : ""
                  }`}
                >
                  {feature.title}
                </h3>
                <p className="max-w-md leading-relaxed text-muted">{feature.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
