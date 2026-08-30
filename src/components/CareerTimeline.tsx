"use client";

// Interactive career timeline. A horizontal track draws itself in on scroll,
// each stop is a marker sized by the revenue driven there, and hovering or
// tapping a marker surfaces that role's headline metric. Keyboard accessible:
// markers are real buttons, arrow-free focus works, and the detail card is
// tied to the active stop. Dependency-free, themed for light/dark.

import { useEffect, useRef, useState } from "react";

import { milestones } from "@/data/site";

export default function CareerTimeline() {
  // Default the timeline to the Brandlete stop — John's #1 focus — rather than
  // the most recent role.
  const brandleteIndex = milestones.findIndex((m) =>
    m.org.toLowerCase().includes("brandlete")
  );
  const [active, setActive] = useState(
    brandleteIndex >= 0 ? brandleteIndex : milestones.length - 1
  );
  const [drawn, setDrawn] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce =
      typeof matchMedia !== "undefined" &&
      matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof IntersectionObserver === "undefined") {
      setDrawn(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setDrawn(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Every stop is the same size — the active one gets a small, fixed bump.
  const DOT = 16;

  const current = milestones[active];

  return (
    <div ref={ref} className="flex flex-col gap-6">
      {/* Track */}
      <div className="relative pt-2">
        {/* base line */}
        <div className="absolute left-0 right-0 top-[22px] h-[2px] rounded-full bg-black/10 dark:bg-white/10" />
        {/* animated progress line */}
        <div
          className="absolute left-0 top-[22px] h-[2px] rounded-full bg-gradient-to-r from-[#0088cc] to-[#00ccff]"
          style={{
            width: drawn ? "100%" : "0%",
            transition: "width 1.4s cubic-bezier(0.22,1,0.36,1)",
          }}
        />
        <div className="relative flex items-start justify-between">
          {milestones.map((m, i) => {
            const on = i === active;
            return (
              <button
                key={m.year}
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                aria-pressed={on}
                aria-label={`${m.year} — ${m.org}, ${m.metric}`}
                className="group flex flex-1 flex-col items-center gap-2 focus:outline-none"
              >
                <span className="flex h-11 items-center justify-center">
                  <span
                    className={`rounded-full ring-2 transition-all duration-300 ${
                      on
                        ? "bg-[#00ccff] ring-[#00ccff]/40"
                        : "bg-white ring-black/15 group-hover:ring-[#00ccff]/50 dark:bg-zinc-800 dark:ring-white/20"
                    }`}
                    style={{
                      width: on ? DOT + 6 : DOT,
                      height: on ? DOT + 6 : DOT,
                      opacity: drawn ? 1 : 0,
                      transform: drawn ? "scale(1)" : "scale(0.3)",
                      transitionDelay: `${i * 120 + 300}ms`,
                    }}
                  />
                </span>
                <span
                  className={`font-mono text-[11px] font-semibold tracking-[0.08em] transition-colors sm:text-xs ${
                    on ? "text-[#0088cc] dark:text-[#00ccff]" : "text-zinc-500 dark:text-zinc-400"
                  }`}
                >
                  {m.year}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Detail card for the active stop */}
      <div
        key={active}
        className="anim-fade-up mx-auto flex w-full max-w-md flex-col items-center gap-1.5 rounded-xl border border-black/10 bg-white/70 px-5 py-4 text-center backdrop-blur-md dark:border-white/10 dark:bg-zinc-950/55"
      >
        <span className="font-[family-name:var(--font-sora)] text-base font-bold text-zinc-900 dark:text-white">
          {current.org}
        </span>
        <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          {current.title}
        </span>
        <span className="mt-1 inline-flex items-center gap-2 rounded-full border border-[#00ccff]/30 bg-[#00ccff]/10 px-3 py-1 font-mono text-[11px] font-semibold text-[#0088cc] dark:text-[#00ccff]">
          {current.metric}
        </span>
      </div>
    </div>
  );
}
