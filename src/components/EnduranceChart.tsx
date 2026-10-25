"use client";

// A compact, dependency-free data viz for the Athletic Achievements section.
// Two reads of John's running record: his career event breakdown as animated
// bars, and the 4x4x48 ultra-challenge progression climbing year over year.
// All inline SVG/CSS, themed with Tailwind utilities so it follows the
// light/dark toggle, and it animates its fills the first time it scrolls into
// view (useInView), matching the CountUp feel of the stat grid.

import CountUp from "@/components/CountUp";
import { useInView } from "@/components/useInView";

// Career events logged, straight from the "To Date" row.
const events = [
  { label: "Half marathons", value: 164 },
  { label: "Ultra events", value: 9 },
  { label: "Marathons", value: 8 },
  { label: "Biathlons", value: 4 },
];
const totalEvents = events.reduce((a, e) => a + e.value, 0);
const maxEvent = Math.max(...events.map((e) => e.value));

// The 4x4x48 ultra challenge, climbing every year 2020 -> 2024.
const ultra = [
  { year: "2020", miles: 52 },
  { year: "2021", miles: 57 },
  { year: "2022", miles: 63 },
  { year: "2024", miles: 69 },
];
const maxUltra = Math.max(...ultra.map((u) => u.miles));

export default function EnduranceChart() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 gap-2.5 sm:grid-cols-5"
    >
      {/* Event breakdown — horizontal bars */}
      <div className="on-photo flex flex-col gap-2.5 rounded-xl border border-black/10 bg-white/40 p-3.5 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.03] sm:col-span-3">
        <div className="flex items-baseline justify-between">
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-500 dark:text-zinc-400">
            Endurance events logged
          </span>
          <span className="font-[family-name:var(--font-sora)] text-lg font-bold leading-none text-[#0088cc] dark:text-[#00ccff]">
            <CountUp value={`${totalEvents}`} />
          </span>
        </div>
        <div className="flex flex-col gap-2">
          {events.map((e, i) => (
            <div key={e.label} className="flex flex-col gap-1">
              <div className="flex items-baseline justify-between text-[11px]">
                <span className="text-zinc-600 dark:text-zinc-300">{e.label}</span>
                <span className="font-mono font-semibold text-zinc-900 dark:text-white">
                  {e.value}
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-black/5 dark:bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#0088cc] to-[#00ccff]"
                  style={{
                    width: inView ? `${Math.max((e.value / maxEvent) * 100, 4)}%` : "0%",
                    transition: `width 1.1s cubic-bezier(0.22,1,0.36,1) ${i * 90}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ultra progression — vertical columns climbing year over year */}
      <div className="on-photo flex flex-col gap-2.5 rounded-xl border border-black/10 bg-white/40 p-3.5 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.03] sm:col-span-2">
        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-500 dark:text-zinc-400">
          4×4×48 ultra · miles per year
        </span>
        <div className="flex flex-1 items-end justify-between gap-2 pt-1">
          {ultra.map((u, i) => (
            <div key={u.year} className="flex flex-1 flex-col items-center gap-1.5">
              <span className="font-mono text-[11px] font-bold text-[#0088cc] dark:text-[#00ccff]">
                {u.miles}
              </span>
              <div className="flex h-16 w-full items-end overflow-hidden rounded-md bg-black/5 dark:bg-white/10">
                <div
                  className="w-full rounded-md bg-gradient-to-t from-[#0088cc] to-[#00ccff]"
                  style={{
                    height: inView ? `${(u.miles / maxUltra) * 100}%` : "0%",
                    transition: `height 1.1s cubic-bezier(0.22,1,0.36,1) ${i * 110}ms`,
                  }}
                />
              </div>
              <span className="font-mono text-[9px] uppercase tracking-[0.08em] text-zinc-500 dark:text-zinc-400">
                {u.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
