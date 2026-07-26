"use client";

// Clean, dependency-free data visualizations driven by John's resume numbers.
// All charts are inline SVG, themed via Tailwind stroke/fill utilities so they
// follow the light/dark toggle. Each chart animates its fill the first time it
// scrolls into view (useInView), matching the CountUp feel of the stat grid.

import { useEffect, useRef, useState } from "react";

import { brands, revenueByVenture, SECTORS } from "@/data/site";

// Fires once when the element first enters view. Honors reduced-motion by
// reporting "in view" immediately so nothing animates.
function useInView<T extends Element>(threshold = 0.35) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce =
      typeof matchMedia !== "undefined" &&
      matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function Card({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-black/10 bg-white/70 p-6 backdrop-blur-md dark:border-white/10 dark:bg-zinc-950/55">
      <div>
        <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-600 dark:text-zinc-400">
          {kicker}
        </div>
        <div className="mt-1 font-[family-name:var(--font-sora)] text-lg font-semibold text-zinc-900 dark:text-white">
          {title}
        </div>
      </div>
      {children}
    </div>
  );
}

// 1. PGA partner portfolio — retention ring + growth callout.
function RetentionRing() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const pct = 97;
  const r = 46;
  const c = 2 * Math.PI * r;
  const dash = (pct / 100) * c;
  return (
    <Card kicker="PGA of America · Partnerships" title="Partner portfolio health">
      <div ref={ref} className="flex items-center gap-6">
        <svg viewBox="0 0 120 120" className="h-28 w-28 -rotate-90" role="img" aria-label="97 percent partner retention">
          <circle cx="60" cy="60" r={r} fill="none" className="stroke-black/10 dark:stroke-white/10" strokeWidth="10" />
          <circle
            cx="60"
            cy="60"
            r={r}
            fill="none"
            className="stroke-sky-500"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={`${dash.toFixed(1)} ${c.toFixed(1)}`}
            strokeDashoffset={inView ? 0 : dash}
            style={{ transition: "stroke-dashoffset 1.3s cubic-bezier(0.22,1,0.36,1)" }}
          />
          <text x="60" y="60" className="rotate-90 fill-zinc-900 font-[family-name:var(--font-sora)] text-[22px] font-bold dark:fill-white" textAnchor="middle" dominantBaseline="central" style={{ transformOrigin: "60px 60px" }}>
            97%
          </text>
        </svg>
        <div className="flex flex-col gap-3">
          <div>
            <div className="font-[family-name:var(--font-sora)] text-2xl font-bold text-zinc-900 dark:text-white">275%</div>
            <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500">partner growth</div>
          </div>
          <div>
            <div className="font-[family-name:var(--font-sora)] text-2xl font-bold text-zinc-900 dark:text-white">60+</div>
            <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500">account portfolio</div>
          </div>
        </div>
      </div>
    </Card>
  );
}

// 2. Capital secured — segmented bar of the $1.5M total.
function CapitalBar() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const segs = [
    { label: "Venture capital", value: 725, fill: "fill-violet-500", bg: "bg-violet-500" },
    { label: "Non-dilutive state", value: 500, fill: "fill-violet-400", bg: "bg-violet-400" },
    { label: "Additional sources", value: 275, fill: "fill-violet-300", bg: "bg-violet-300" },
  ];
  const total = segs.reduce((a, s) => a + s.value, 0);
  const W = 300;
  let x = 0;
  return (
    <Card kicker="Capital · Across ventures" title="$1.5M+ secured">
      <div ref={ref}>
        <svg viewBox={`0 0 ${W} 22`} className="w-full" role="img" aria-label="Capital secured breakdown">
          {segs.map((s) => {
            const w = (s.value / total) * W;
            const seg = (
              <rect
                key={s.label}
                x={x + 1}
                y="0"
                width={inView ? Math.max(w - 2, 1) : 0}
                height="22"
                rx="3"
                className={s.fill}
                style={{ transition: "width 1.1s cubic-bezier(0.22,1,0.36,1)" }}
              />
            );
            x += w;
            return seg;
          })}
        </svg>
      </div>
      <div className="flex flex-col gap-1.5">
        {segs.map((s) => (
          <div key={s.label} className="flex items-center gap-2 text-xs">
            <span className={`h-2.5 w-2.5 rounded-sm ${s.bg}`} />
            <span className="text-zinc-600 dark:text-zinc-400">{s.label}</span>
            <span className="ml-auto font-mono text-zinc-900 dark:text-white">${s.value}K</span>
          </div>
        ))}
      </div>
    </Card>
  );
}

// 3. Nonprofit fundraising — horizontal bars of the civic totals.
function NonprofitBars() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const rows = [
    { label: "Combined 501c3", value: 542648 },
    { label: "PGA REACH WNY", value: 298744 },
    { label: "POWER of OZmosis", value: 284512 },
    { label: "OnCore Golf", value: 257336 },
    { label: "Heritage Christian", value: 129058 },
  ];
  const max = Math.max(...rows.map((r) => r.value));
  return (
    <Card kicker="Nonprofit · Fundraising" title="$1.5M+ raised across causes">
      <div ref={ref} className="flex flex-col gap-2.5">
        {rows.map((r, i) => (
          <div key={r.label} className="flex flex-col gap-1">
            <div className="flex items-baseline justify-between text-xs">
              <span className="text-zinc-600 dark:text-zinc-400">{r.label}</span>
              <span className="font-mono text-zinc-900 dark:text-white">${(r.value / 1000).toFixed(0)}K</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-black/5 dark:bg-white/10">
              <div
                className="h-full rounded-full bg-amber-500"
                style={{
                  width: inView ? `${(r.value / max) * 100}%` : "0%",
                  transition: `width 1s cubic-bezier(0.22,1,0.36,1) ${i * 90}ms`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

// 4. Revenue driven by venture — animated horizontal bars.
function RevenueByVenture() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const max = Math.max(...revenueByVenture.map((r) => r.valueK));
  const fmt = (k: number) => (k >= 1000 ? `$${(k / 1000).toFixed(1).replace(/\.0$/, "")}M` : `$${k}K`);
  return (
    <Card kicker="Revenue · By venture" title="$6.5M+ generated, $8.5M+ influenced">
      <div ref={ref} className="flex flex-col gap-3.5">
        {revenueByVenture.map((r, i) => (
          <div key={r.label} className="flex flex-col gap-1">
            <div className="flex items-baseline justify-between text-xs">
              <span className="font-medium text-zinc-700 dark:text-zinc-300">
                {r.label}
                <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.1em] text-zinc-400">{r.period}</span>
              </span>
              <span className="font-mono font-semibold text-zinc-900 dark:text-white">{fmt(r.valueK)}+</span>
            </div>
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-black/5 dark:bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-sky-500"
                style={{
                  width: inView ? `${(r.valueK / max) * 100}%` : "0%",
                  transition: `width 1.1s cubic-bezier(0.22,1,0.36,1) ${i * 110}ms`,
                }}
              />
            </div>
            <div className="font-mono text-[10px] tracking-[0.04em] text-zinc-400">{r.note}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}

// 5. Partnership reach by sector — animated donut over the real brand list.
function SectorDonut() {
  const { ref, inView } = useInView<SVGSVGElement>();
  const counts = SECTORS.map((s) => ({
    ...s,
    value: brands.filter((b) => b.sector === s.name).length,
  })).filter((s) => s.value > 0);
  const total = counts.reduce((a, s) => a + s.value, 0);
  const r = 42;
  const c = 2 * Math.PI * r;
  let offset = 0;

  return (
    <Card kicker="Partnerships · Reach" title={`${total} brands, 5 sectors`}>
      <div className="flex items-center gap-6">
        <svg ref={ref} viewBox="0 0 120 120" className="h-32 w-32 -rotate-90" role="img" aria-label="Partnerships by sector">
          <circle cx="60" cy="60" r={r} fill="none" className="stroke-black/5 dark:stroke-white/5" strokeWidth="14" />
          {counts.map((s) => {
            const frac = s.value / total;
            const len = inView ? frac * c : 0;
            const seg = (
              <circle
                key={s.name}
                cx="60"
                cy="60"
                r={r}
                fill="none"
                stroke={s.color}
                strokeWidth="14"
                strokeDasharray={`${len.toFixed(2)} ${c.toFixed(2)}`}
                strokeDashoffset={-offset}
                style={{ transition: "stroke-dasharray 1.1s cubic-bezier(0.22,1,0.36,1)" }}
              />
            );
            offset += inView ? frac * c : 0;
            return seg;
          })}
          <text x="60" y="60" className="rotate-90 fill-zinc-900 font-[family-name:var(--font-sora)] text-[20px] font-bold dark:fill-white" textAnchor="middle" dominantBaseline="central" style={{ transformOrigin: "60px 60px" }}>
            {total}
          </text>
        </svg>
        <div className="flex min-w-0 flex-col gap-1.5">
          {counts.map((s) => (
            <div key={s.name} className="flex items-center gap-2 text-xs">
              <span className="h-2.5 w-2.5 shrink-0 rounded-sm" style={{ backgroundColor: s.color }} />
              <span className="truncate text-zinc-600 dark:text-zinc-400">{s.name}</span>
              <span className="ml-auto font-mono text-zinc-900 dark:text-white">{s.value}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

export default function DataViz() {
  return (
    <section className="flex flex-col gap-8">
      <h2 className="on-photo font-mono text-xs font-medium uppercase tracking-[0.22em] text-zinc-600 dark:text-zinc-400">
        By the numbers
      </h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <RevenueByVenture />
        <SectorDonut />
        <RetentionRing />
        <CapitalBar />
        <NonprofitBars />
      </div>
    </section>
  );
}
