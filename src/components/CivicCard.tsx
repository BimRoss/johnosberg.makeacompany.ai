"use client";

import { useState } from "react";

import type { Civic } from "@/data/site";

// Civic/volunteer role chip: org logo (with monogram fallback) + role + org.
export default function CivicCard({ c }: { c: Civic }) {
  const [failed, setFailed] = useState(!c.logo);

  return (
    <div className="flex items-center gap-3 rounded-xl border border-black/10 bg-white/70 px-4 py-3.5 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-black/20 hover:shadow-md hover:shadow-black/5 dark:border-white/10 dark:bg-zinc-950/55 dark:hover:border-white/20">
      {failed ? (
        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg font-[family-name:var(--font-sora)] text-xs font-bold"
          style={{ backgroundColor: `${c.accent}1f`, color: c.accent }}
        >
          {c.mark}
        </span>
      ) : (
        <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white ring-1 ring-black/5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={c.logo}
            alt={`${c.org} logo`}
            width={28}
            height={28}
            loading="lazy"
            className="h-7 w-7 object-contain"
            onError={() => setFailed(true)}
          />
        </span>
      )}
      <span className="min-w-0">
        <span className="block truncate font-[family-name:var(--font-sora)] text-sm font-semibold leading-snug text-zinc-900 dark:text-white">
          {c.role}
        </span>
        <span className="block truncate font-mono text-[10px] uppercase tracking-[0.1em] text-zinc-600 dark:text-zinc-400">
          {c.org}
        </span>
      </span>
    </div>
  );
}
