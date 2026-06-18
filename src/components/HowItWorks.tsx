import Reveal from "@/components/Reveal";

const steps = [
  {
    number: "01",
    title: "Download WildLens",
    description:
      "Free on iOS and Android. No account required to start exploring the field guide.",
  },
  {
    number: "02",
    title: "Point your camera",
    description:
      "See something in the wild? Tap the shutter. WildLens identifies it in seconds — no signal needed.",
  },
  {
    number: "03",
    title: "Read the full profile",
    description:
      "Species name, identifying features, habitat, range, and safety notes — all in one place.",
  },
  {
    number: "04",
    title: "Build your journal",
    description:
      "Save every sighting. Your species count, streak, and badges grow with each find.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="mb-3 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Simple as stepping outside.
          </h2>
          <p className="mb-12 max-w-xl text-lg text-muted">
            From download to your first identification in minutes.
          </p>
        </Reveal>

        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 md:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.08}>
              <div className="border-t border-hairline pt-6">
                <p className="mb-4 text-sm font-medium text-accent">{step.number}</p>
                <h3 className="mb-2 text-lg font-semibold tracking-tight text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
