// Clean, dependency-free data visualizations driven by John's resume numbers.
// All charts are inline SVG, themed via Tailwind stroke/fill utilities so they
// follow the light/dark toggle.

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
  const pct = 97;
  const r = 46;
  const c = 2 * Math.PI * r;
  const dash = (pct / 100) * c;
  return (
    <Card kicker="PGA of America · Partnerships" title="Partner portfolio health">
      <div className="flex items-center gap-6">
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
      <svg viewBox={`0 0 ${W} 22`} className="w-full" role="img" aria-label="Capital secured breakdown">
        {segs.map((s) => {
          const w = (s.value / total) * W;
          const seg = (
            <rect key={s.label} x={x + 1} y="0" width={Math.max(w - 2, 1)} height="22" rx="3" className={s.fill} />
          );
          x += w;
          return seg;
        })}
      </svg>
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
      <div className="flex flex-col gap-2.5">
        {rows.map((r) => (
          <div key={r.label} className="flex flex-col gap-1">
            <div className="flex items-baseline justify-between text-xs">
              <span className="text-zinc-600 dark:text-zinc-400">{r.label}</span>
              <span className="font-mono text-zinc-900 dark:text-white">${(r.value / 1000).toFixed(0)}K</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-black/5 dark:bg-white/10">
              <div className="h-full rounded-full bg-amber-500" style={{ width: `${(r.value / max) * 100}%` }} />
            </div>
          </div>
        ))}
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
        <RetentionRing />
        <CapitalBar />
        <NonprofitBars />
      </div>
    </section>
  );
}
