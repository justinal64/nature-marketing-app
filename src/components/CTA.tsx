"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }
    setStatus("loading");

    const res = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (res.ok) {
      setStatus("success");
      setEmail("");
    } else {
      setStatus("error");
      setMessage(data.error ?? "Something went wrong. Try again.");
    }
  }

  return (
    <section id="waitlist" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[1.75rem] border border-hairline/80 bg-surface px-8 py-20 text-center md:px-12 md:py-24">
            {/* Warm glow */}
            <div
              className="pointer-events-none absolute inset-0"
              aria-hidden="true"
              style={{
                background:
                  "radial-gradient(ellipse 60% 60% at 50% 115%, rgba(212,164,55,0.18) 0%, rgba(184,92,58,0.08) 45%, transparent 70%)",
              }}
            />

            <div className="relative">
              <h2 className="mb-4 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                Be first in the field.
              </h2>
              <p className="mx-auto mb-10 max-w-md text-lg leading-relaxed text-muted">
                WildLens is launching soon on iOS and Android. Join the waitlist and get notified the moment it drops.
              </p>

              {status === "success" ? (
                <div className="mx-auto max-w-md">
                  <p className="text-lg font-medium text-foreground">
                    You&apos;re on the list.
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    We&apos;ll let you know the moment WildLens launches.
                  </p>
                </div>
              ) : (
                <form
                  className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
                  onSubmit={handleSubmit}
                >
                  <input
                    id="waitlist-email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === "error") setStatus("idle");
                    }}
                    disabled={status === "loading"}
                    aria-describedby={status === "error" ? "waitlist-error" : undefined}
                    className={`flex-1 rounded-full border bg-background/80 px-5 py-3 text-sm text-foreground placeholder:text-muted/60 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20 disabled:opacity-50 ${
                      status === "error" ? "border-red-400/60" : "border-hairline"
                    }`}
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white shadow-[0_4px_20px_rgba(184,92,58,0.35)] transition-all hover:bg-accent-hover hover:shadow-[0_4px_28px_rgba(184,92,58,0.5)] disabled:opacity-60"
                  >
                    {status === "loading" ? "Joining…" : "Notify me"}
                  </button>
                </form>
              )}

              <p
                id="waitlist-error"
                role="alert"
                aria-live="polite"
                className={`mt-3 text-sm text-red-500/80 transition-opacity ${status === "error" ? "opacity-100" : "opacity-0 select-none"}`}
              >
                {status === "error" ? message : " "}
              </p>

              {status !== "success" && (
                <p className="mt-6 text-xs text-muted/70">
                  No spam. Just a note when we launch.
                </p>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
