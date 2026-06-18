"use client";

import { motion } from "motion/react";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

function FadeUp({
  children,
  delay,
  className,
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function PhoneMockup() {
  return (
    <div
      className="rounded-[3rem] border border-foreground/10 bg-surface-elevated p-2.5"
      style={{
        boxShadow:
          "0 30px 80px rgba(61,37,25,0.18), 0 0 60px rgba(212,164,55,0.12)",
      }}
    >
      <div className="overflow-hidden rounded-[2.4rem] bg-background">
        {/* Dynamic island */}
        <div className="flex justify-center pt-4 pb-1">
          <div className="h-6 w-24 rounded-full bg-foreground/8" />
        </div>

        {/* Landscape header strip */}
        <div className="relative mx-3 h-20 overflow-hidden rounded-2xl" style={{ background: "linear-gradient(135deg, #F4ECDA 0%, #E8D5B7 100%)" }}>
          {/* Sun */}
          <div
            className="absolute top-3 right-7 h-8 w-8 rounded-full"
            style={{ background: "#D4A437", boxShadow: "0 0 14px rgba(212,164,55,0.55)" }}
          />
          {/* Back wave */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 290 80" preserveAspectRatio="none">
            <path d="M0 50 Q 72 32 145 54 T 290 44 L 290 80 L 0 80 Z" fill="#B85C3A" opacity="0.18" />
            <path d="M0 64 Q 90 50 180 64 T 290 58 L 290 80 L 0 80 Z" fill="#8B6F47" opacity="0.14" />
          </svg>
          {/* Bird */}
          <svg className="absolute top-5 left-[35%]" width="22" height="12" viewBox="0 0 24 13" opacity="0.4">
            <path d="M2 10 Q 7 2 12 9 Q 17 2 22 10" stroke="#8B6F47" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          </svg>
        </div>

        <div className="px-5 pb-6 pt-4">
          {/* Greeting */}
          <p className="text-[10px] font-semibold tracking-wide text-muted mb-1">
            Monday · June 17
          </p>
          <p className="text-lg font-bold leading-tight text-foreground mb-4">
            Good morning,<br />friend.
          </p>

          {/* AI Identify card */}
          <div
            className="relative mb-5 h-24 overflow-hidden rounded-[1.1rem]"
            style={{ background: "linear-gradient(135deg, #D4A437 0%, #B85C3A 100%)" }}
          >
            {/* Wave overlay */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 260 96" preserveAspectRatio="none">
              <path d="M-10 58 Q 65 36 130 56 T 270 44 L 270 96 L -10 96 Z" fill="#D4A437" opacity="0.6" />
              <path d="M-10 76 Q 80 60 170 76 T 270 68 L 270 96 L -10 96 Z" fill="#3D2519" opacity="0.45" />
            </svg>
            {/* Cactus silhouette */}
            <svg className="absolute right-3 top-1 opacity-75" width="64" height="90" viewBox="0 0 64 96">
              <rect x="26" y="18" width="12" height="72" rx="6" fill="#3D2519" opacity="0.7" />
              <rect x="8" y="40" width="18" height="8" rx="4" fill="#3D2519" opacity="0.7" />
              <rect x="8" y="36" width="8" height="20" rx="4" fill="#3D2519" opacity="0.7" />
              <rect x="38" y="50" width="18" height="8" rx="4" fill="#3D2519" opacity="0.7" />
              <rect x="48" y="44" width="8" height="22" rx="4" fill="#3D2519" opacity="0.7" />
            </svg>
            <div className="absolute left-4 top-4">
              <p className="text-xs font-bold text-foreground/90">AI Identify</p>
              <p className="text-[10px] text-foreground/65 mt-0.5">See something in the wild?</p>
            </div>
            <div
              className="absolute bottom-3 right-4 flex items-center gap-1.5 rounded-full px-3 py-1.5"
              style={{ backgroundColor: "#F4ECDA" }}
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#3D2519" strokeWidth="2.5" strokeLinecap="round">
                <circle cx="12" cy="12" r="3" /><path d="M3 9a2 2 0 012-2h1l2-3h8l2 3h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
              <span className="text-[10px] font-bold text-foreground">Take a photo</span>
            </div>
          </div>

          {/* Recent finds */}
          <p className="text-xs font-bold text-foreground mb-2.5">Recent finds</p>
          <div className="flex gap-2.5">
            {[
              { name: "Saguaro", time: "2h ago", bg: "#9CAB87" },
              { name: "Mourning Dove", time: "Yesterday", bg: "#9CAB87" },
            ].map((item) => (
              <div
                key={item.name}
                className="flex-1 rounded-[1rem] border border-hairline bg-surface p-3"
              >
                <div
                  className="mb-2 h-10 w-10 rounded-[0.65rem]"
                  style={{ backgroundColor: item.bg }}
                />
                <p className="text-[11px] font-bold text-foreground leading-tight">{item.name}</p>
                <p className="text-[10px] text-muted">{item.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-28 pt-36 md:pt-44">
      {/* Warm radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 110%, rgba(212,164,55,0.14) 0%, rgba(184,92,58,0.06) 45%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <FadeUp delay={0}>
          <p className="mb-4 text-base font-semibold text-accent md:text-lg">
            Coming soon to iOS and Android
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h1 className="mb-6 text-5xl font-semibold tracking-tight text-foreground md:text-7xl">
            Identify anything<br className="hidden md:block" /> in the wild.
          </h1>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="mx-auto mb-9 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
            Point your camera at any plant, bird, insect, or snake. WildLens identifies it instantly — even offline, deep in the backcountry.
          </p>
        </FadeUp>
        <FadeUp
          delay={0.3}
          className="flex flex-col items-center justify-center gap-5 sm:flex-row"
        >
          <a
            href="#waitlist"
            className="rounded-full bg-accent px-6 py-3 text-base font-medium text-white shadow-[0_4px_24px_rgba(184,92,58,0.35)] transition-all hover:bg-accent-hover hover:shadow-[0_4px_32px_rgba(184,92,58,0.5)]"
          >
            Join the waitlist
          </a>
          <a href="#features" className="group text-base font-medium text-accent">
            See what it does{" "}
            <span className="inline-block transition-transform group-hover:translate-x-0.5">›</span>
          </a>
        </FadeUp>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 48 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.45, ease }}
        className="relative mx-auto mt-20 w-[268px] sm:w-[290px] md:w-[320px] md:mt-24"
      >
        <PhoneMockup />
      </motion.div>
    </section>
  );
}
