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
  // running shoe (side profile, toe right) — miles ran
  miles: (
    <>
      {/* upper: heel counter, tongue bump, long toe box */}
      <path d="M3 11c0-.6.3-.9.8-.8 1.7.4 3 .8 4.7 1 .5-.8.9-1.2 1.5-1.2s1.1.5 1.9 1c2.5 1.2 5.5 1.6 8.2 2.2.8.2 1.1.8.8 1.6-.3.7-1 1.2-2 1.2H4c-.6 0-1-.4-1-1Z" />
      {/* midsole stripe */}
      <path d="M3.3 14.2c6 .7 12 .8 17.3-.1" />
      {/* laces */}
      <path d="M11 11.1l1.9.4M11.8 10.3l1.9.5M12.7 11.8l1.8.4" />
    </>
  ),
  // infinity loop — countless / endless
  countless: (
    <>
      <path d="M8 9.5c-1.9 0-3.5 1.1-3.5 2.5S6.1 14.5 8 14.5c2.5 0 3.5-5 6-5 1.9 0 3.5 1.1 3.5 2.5S17.9 14.5 16 14.5c-2.5 0-3.5-5-6-5Z" />
    </>
  ),
  // eye — LinkedIn impressions
  impressions: (
    <>
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" />
      <circle cx="12" cy="12" r="2.5" />
    </>
  ),
  // globe with orbit — network reach (2nd-degree)
  reach: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
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
