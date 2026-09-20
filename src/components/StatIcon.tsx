import type { StatIconKey } from "@/data/site";

// Tiny line icon per stat tile — makes The Numbers glanceable at a scroll
// instead of a wall of bare figures. Pure inline SVG (no client JS), stroke
// inherits the tile's accent via currentColor.
const PATHS: Record<StatIconKey, React.ReactNode> = {
  // dollar in a circle — financial impact
  impact: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v10M14.5 9.2c-.5-.9-1.5-1.2-2.5-1.2-1.4 0-2.5.8-2.5 2s1.1 1.7 2.5 2 2.5.8 2.5 2-1.1 2-2.5 2c-1 0-2-.3-2.5-1.2" />
    </>
  ),
  // upward bars — capital raised
  capital: (
    <>
      <path d="M4 20h16" />
      <path d="M7 20v-6M12 20V8M17 20v-9" />
    </>
  ),
  // hand holding heart — nonprofit funds
  nonprofit: (
    <>
      <path d="M12 8.5c-1-1.6-3.2-1.7-4.3-.3-.9 1.1-.7 2.6.3 3.6L12 15l4-3.2c1-1 1.2-2.5.3-3.6-1.1-1.4-3.3-1.3-4.3.3Z" />
      <path d="M3 15.5c1 .7 2 1 3.5 1H10l-1.3-1" />
    </>
  ),
  // trending arrow — growth & partnerships
  growth: (
    <>
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
    </>
  ),
  // running shoe — miles ran
  miles: (
    <>
      <path d="M3 16v-3l4-1 2.5-3 2 1-1 2 4 1 6 1c1.5.2 2.5 1 2.5 2v.5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z" />
      <path d="M9 12l2 1.5M12.5 11l2 1.5" />
    </>
  ),
  // eye — LinkedIn impressions
  impressions: (
    <>
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" />
      <circle cx="12" cy="12" r="2.5" />
    </>
  ),
  // people — audience & network
  network: (
    <>
      <circle cx="9" cy="9" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <path d="M16 6.2a3 3 0 0 1 0 5.6M17.5 19a5.5 5.5 0 0 0-3-4.9" />
    </>
  ),
};

export default function StatIcon({
  icon,
  className,
}: {
  icon: StatIconKey;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      {PATHS[icon]}
    </svg>
  );
}
