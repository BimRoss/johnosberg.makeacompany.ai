"use client";

// Interactive career timeline. A horizontal track draws itself in on scroll,
// each stop is a marker sized by the revenue driven there, and hovering or
// tapping a marker surfaces that role's headline metric. Keyboard accessible:
// markers are real buttons, arrow-free focus works, and the detail card is
// tied to the active stop. Dependency-free, themed for light/dark.

import { useEffect, useRef, useState } from "react";

import { milestones } from "@/data/site";

export default function CareerTimeline() {
  const [active, setActive] = useState(milestones.length - 1);
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

  const maxRev = Math.max(...milestones.map((m) => m.revenueK));
  const size = (k: number) => 12 + Math.round((k / maxRev) * 12); // 12–24px dot

  const current = milestones[active];

  return (
    <div ref={ref} className="flex flex-col gap-6">
      {/* Track */}
      <div className="relative pt-2">
        {/* base line */}
        <div className="absolute left-0 right-0 top-[22px] h-[2px] rounded-full bg-black/10 dark:bg-white/10" />
        {/* animated progress line */}
        <div
          className="absolute left-0 top-[22px] h-[2px] rounded-full bg-gradient-to-r from-emerald-500 to-sky-500"
          style={{
            width: drawn ? "100%" : "0%",
            transition: "width 1.4s cubic-bezier(0.22,1,0.36,1)",
          }}
        />
        <div className="relative flex items-start justify-between">
          {milestones.map((m, i) => {
            const d = size(m.revenueK);
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
                        ? "bg-sky-500 ring-sky-500/40"
                        : "bg-white ring-black/15 group-hover:ring-sky-500/50 dark:bg-zinc-800 dark:ring-white/20"
                    }`}
                    style={{
                      width: on ? d + 6 : d,
                      height: on ? d + 6 : d,
                      opacity: drawn ? 1 : 0,
                      transform: drawn ? "scale(1)" : "scale(0.3)",
                      transitionDelay: `${i * 120 + 300}ms`,
                    }}
                  />
                </span>
                <span
                  className={`font-mono text-[11px] font-semibold tracking-[0.08em] transition-colors sm:text-xs ${
                    on ? "text-sky-600 dark:text-sky-300" : "text-zinc-500 dark:text-zinc-400"
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
        className="anim-fade-up flex flex-col gap-2 rounded-xl border border-black/10 bg-white/70 p-6 backdrop-blur-md dark:border-white/10 dark:bg-zinc-950/55"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <span className="font-[family-name:var(--font-sora)] text-lg font-bold text-zinc-900 dark:text-white">
            {current.org}
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-zinc-500">
            {current.year}
          </span>
        </div>
        <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          {current.title}
        </span>
        <span className="mt-1 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs font-semibold text-emerald-700 dark:text-emerald-300">
          {current.metric}
        </span>
      </div>
    </div>
  );
}
