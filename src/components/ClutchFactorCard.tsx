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
const NTANGIBLE_URL = "https://ntangible.co";

export default function ClutchFactorCard() {
  return (
    <TiltCard className="rounded-2xl">
      <div
        className="group relative block overflow-hidden rounded-2xl bg-[#0a0a0a] px-4 py-3.5 ring-1 ring-white/10 transition-shadow hover:ring-[#00ccff]/40"
      >
        {/* corner registration marks, like the assessment card */}
        <span aria-hidden className="pointer-events-none absolute left-2.5 top-2.5 h-3 w-3 border-l border-t border-white/25" />
        <span aria-hidden className="pointer-events-none absolute right-2.5 top-2.5 h-3 w-3 border-r border-t border-white/25" />
        <span aria-hidden className="pointer-events-none absolute bottom-2.5 left-2.5 h-3 w-3 border-b border-l border-white/25" />
        <span aria-hidden className="pointer-events-none absolute bottom-2.5 right-2.5 h-3 w-3 border-b border-r border-white/25" />

        <div className="flex flex-col items-center gap-2.5 text-center sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:text-left">
          {/* Left: label + context */}
          <div className="flex flex-col items-center gap-1 sm:items-start">
            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.22em] text-[#00ccff]">
              <a
                href={NTANGIBLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                title="nTangible homepage (opens in a new tab)"
                className="underline-offset-2 hover:underline"
              >
                nTangible
              </a>{" "}
              · Clutch Factor™
            </span>
            <span className="font-[family-name:var(--font-sora)] text-base font-bold leading-tight text-white sm:text-lg">
              Composure under pressure
            </span>
            <span className="max-w-xs text-[12px] leading-snug text-zinc-400">
              Independently assessed. Top 1% globally when the stakes peak.
            </span>
            <a
              href={REPORT_URL}
              target="_blank"
              rel="noopener noreferrer"
              title="View John's full Clutch Factor report on nTangible (opens in a new tab)"
              className="mt-0.5 inline-flex items-center gap-1.5 font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-zinc-500 transition-colors hover:text-[#00ccff]"
            >
              View my full report
              <span className="transition-transform group-hover:translate-x-0.5">↗</span>
            </a>
          </div>

          {/* Right: the circular-gauge score thumbnail */}
          <div className="flex shrink-0 items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/clutch-factor-803.png"
              alt="nTangible Clutch Factor™ score: 803 out of 1000, Elite"
              width={660}
              height={660}
              className="block h-auto w-28 rounded-xl sm:w-32"
            />
          </div>
        </div>
      </div>
    </TiltCard>
  );
}
