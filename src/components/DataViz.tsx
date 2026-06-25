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

// 1. MakeaCompany user growth — area sparkline, 12 → 117 over 6 weeks.
function GrowthChart() {
  const series = [12, 19, 31, 48, 70, 95, 117];
  const min = 12;
  const max = 117;
  const W = 300;
  const H = 110;
  const pad = 6;
  const pts = series.map((v, i) => {
    const x = pad + (i / (series.length - 1)) * (W - pad * 2);
    const y = H - pad - ((v - min) / (max - min)) * (H - pad * 2);
    return [x, y] as const;
  });
  const line = pts.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");
  const area = `${line} L${pts[pts.length - 1][0].toFixed(1)} ${H - pad} L${pts[0][0].toFixed(1)} ${H - pad} Z`;
  return (
    <Card kicker="MakeaCompany.ai · Growth" title="Active users, first 6 weeks">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label="User growth from 12 to 117 over six weeks">
        <defs>
          <linearGradient id="growthFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" className="[stop-color:rgb(16,185,129)]" stopOpacity="0.35" />
            <stop offset="100%" className="[stop-color:rgb(16,185,129)]" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={area} fill="url(#growthFill)" />
        <path d={line} fill="none" className="stroke-emerald-500" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        {pts.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i === pts.length - 1 ? 4 : 2.5} className="fill-emerald-500" />
        ))}
      </svg>
      <div className="flex items-baseline gap-4">
        <span className="font-[family-name:var(--font-sora)] text-2xl font-bold text-zinc-900 dark:text-white">9.8×</span>
        <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400">+880%</span>
        <span className="ml-auto font-mono text-[11px] text-zinc-500">12 → 117</span>
      </div>
    </Card>
  );
}

// 2. PGA partner portfolio — retention ring + growth callout.
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

// 3. Capital secured — segmented bar of the $1.5M total.
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

// 4. Nonprofit fundraising — horizontal bars of the civic totals.
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
        <GrowthChart />
        <RetentionRing />
        <CapitalBar />
        <NonprofitBars />
      </div>
    </section>
  );
}
