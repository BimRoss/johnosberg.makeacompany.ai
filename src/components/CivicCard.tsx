"use client";

import { useState } from "react";

import type { Civic } from "@/data/site";

// Civic/volunteer org tile: logo only (monogram fallback), hyperlinked to the
// org. Org + role live in the title/aria-label so hover and screen readers keep
// the context even though the tile shows just the mark.
export default function CivicCard({ c }: { c: Civic }) {
  const [failed, setFailed] = useState(!c.logo);

  return (
    <a
      href={c.url}
      target="_blank"
      rel="noopener noreferrer"
      title={`${c.org} — ${c.role}`}
      aria-label={`${c.org} — ${c.role} (opens in new tab)`}
      className="flex aspect-square items-center justify-center rounded-xl border border-black/10 bg-white/70 p-1.5 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-black/20 hover:shadow-md hover:shadow-black/5 dark:border-white/10 dark:bg-zinc-950/55 dark:hover:border-white/20"
    >
      {failed ? (
        <span
          className="flex h-full w-full items-center justify-center rounded-lg font-[family-name:var(--font-sora)] text-sm font-bold"
          style={{ backgroundColor: `${c.accent}1f`, color: c.accent }}
        >
          {c.mark}
        </span>
      ) : (
        <span className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-white ring-1 ring-black/5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={c.logo}
            alt={`${c.org} logo`}
            width={40}
            height={40}
            loading="lazy"
            className="h-[88%] w-[88%] object-contain"
            onError={() => setFailed(true)}
          />
        </span>
      )}
    </a>
  );
}
