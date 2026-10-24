import CountUp from "@/components/CountUp";
import TiltCard from "@/components/TiltCard";

// The full nTangible Clutch Factor assessment card: an independently-scored
// read on composure under pressure. Echoes the assessment card's own look
// (dark panel, giant score, ELITE pill, corner registration marks) and links to
// the full report. Dark in both themes on purpose, so it reads as its own
// artifact. Lives in its original spot between Athletic Achievements and
// Experience; the small badge thumbnail near the hero is the separate
// ClutchFactor component.
const REPORT_URL =
  "https://portal.ntangible.co/assessment/5f46156b-e07d-4f48-9fea-145bd97d8af1/report";

export default function ClutchFactorCard() {
  return (
    <TiltCard className="rounded-2xl">
      <a
        href={REPORT_URL}
        target="_blank"
        rel="noopener noreferrer"
        title="View John's full Clutch Factor report on nTangible (opens in a new tab)"
        className="group relative block overflow-hidden rounded-2xl bg-[#0a0a0a] p-5 ring-1 ring-white/10 transition-shadow hover:ring-[#00ccff]/40 sm:p-6"
      >
        {/* corner registration marks, like the assessment card */}
        <span aria-hidden className="pointer-events-none absolute left-3 top-3 h-4 w-4 border-l border-t border-white/25" />
        <span aria-hidden className="pointer-events-none absolute right-3 top-3 h-4 w-4 border-r border-t border-white/25" />
        <span aria-hidden className="pointer-events-none absolute bottom-3 left-3 h-4 w-4 border-b border-l border-white/25" />
        <span aria-hidden className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 border-b border-r border-white/25" />

        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:text-left">
          {/* Left: label + context */}
          <div className="flex flex-col items-center gap-2 sm:items-start">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#00ccff]">
              nTangible · Clutch Factor™
            </span>
            <span className="font-[family-name:var(--font-sora)] text-lg font-bold leading-tight text-white sm:text-xl">
              Composure under pressure
            </span>
            <span className="max-w-xs text-[13px] leading-6 text-zinc-400">
              Independently assessed. Top-tier for performing when the stakes peak. Top 1% globally ranked.
            </span>
            <span className="mt-1 inline-flex items-center gap-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500 transition-colors group-hover:text-[#00ccff]">
              View full report
              <span className="transition-transform group-hover:translate-x-0.5">↗</span>
            </span>
          </div>

          {/* Right: the score */}
          <div className="flex shrink-0 flex-col items-center gap-2">
            <div className="flex items-baseline gap-1.5">
              <span className="font-[family-name:var(--font-sora)] text-5xl font-extrabold leading-none text-white sm:text-6xl">
                <CountUp value="803" />
              </span>
              <span className="font-mono text-sm font-semibold text-zinc-500">/ 1000</span>
            </div>
            <span className="rounded-full bg-[#00ccff] px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#0a0a0a]">
              Elite
            </span>
          </div>
        </div>

        {/* What the score measures (from the nTangible assessment card) */}
        <div className="mt-4 border-t border-white/10 pt-4">
          <p className="text-[13px] leading-6 text-zinc-400">
            The nTangible Clutch Factor™ is a 1 to 1,000 score that measures and
            predicts an athlete&apos;s mental capacity to perform under
            high-pressure, game-deciding moments.
          </p>
        </div>
      </a>
    </TiltCard>
  );
}
