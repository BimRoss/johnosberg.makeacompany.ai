import TiltCard from "@/components/TiltCard";

// The nTangible Clutch Factor assessment: an independently-scored read on
// composure under pressure. Just the 803/1000 ELITE badge thumbnail, linked to
// the full report. The badge art is dark on purpose, so it reads as its own
// artifact in both themes.
const REPORT_URL =
  "https://portal.ntangible.co/assessment/5f46156b-e07d-4f48-9fea-145bd97d8af1/report";

export default function ClutchFactor() {
  return (
    <div className="flex justify-center">
      <TiltCard className="w-16 rounded-xl sm:w-20">
        <a
          href={REPORT_URL}
          target="_blank"
          rel="noopener noreferrer"
          title="View John's full Clutch Factor report on nTangible (opens in a new tab)"
          className="group relative block overflow-hidden rounded-2xl ring-1 ring-white/10 transition-shadow hover:ring-[#00ccff]/50"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/clutch-factor-803.png"
            alt="nTangible Clutch Factor™ score: 803 out of 1000, Elite"
            width={660}
            height={660}
            className="block h-auto w-full"
          />
        </a>
      </TiltCard>
    </div>
  );
}
