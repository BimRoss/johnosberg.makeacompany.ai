"use client";

import { useState } from "react";

import type { Civic } from "@/data/site";

// Civic/volunteer org tile: small white logo chip on a themed card with the org
// name labeled underneath, matching PartnershipsGrid's BrandLogo. Role lives in
// the title/aria-label so hover and screen readers keep the extra context.
export default function CivicCard({ c }: { c: Civic }) {
  const [failed, setFailed] = useState(!c.logo);

  return (
    <a
      href={c.url}
      target="_blank"
      rel="noopener noreferrer"
      title={`${c.org} — ${c.role}`}
      aria-label={`${c.org} — ${c.role} (opens in new tab)`}
      className="flex flex-col items-center gap-1.5 rounded-lg border border-black/10 bg-white/70 px-2 py-2.5 text-center backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-black/20 hover:shadow-md hover:shadow-black/5 dark:border-white/10 dark:bg-zinc-950/55 dark:hover:border-white/20"
    >
      {failed ? (
        <span
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-[family-name:var(--font-sora)] text-xs font-bold"
          style={{ backgroundColor: `${c.accent}1f`, color: c.accent }}
        >
          {c.mark}
        </span>
      ) : (
        <span className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white ring-1 ring-black/5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={c.logo}
            alt={`${c.org} logo`}
            width={28}
            height={28}
            loading="lazy"
            className="h-5 w-5 object-contain"
            onError={() => setFailed(true)}
          />
        </span>
      )}
      <span className="line-clamp-2 w-full [overflow-wrap:anywhere] font-[family-name:var(--font-sora)] text-[10px] font-medium leading-tight tracking-tight text-zinc-700 dark:text-zinc-300">
        {c.org}
      </span>
    </a>
  );
}
