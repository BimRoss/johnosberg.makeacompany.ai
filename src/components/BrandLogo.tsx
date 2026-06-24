"use client";

import { useState } from "react";

import type { Brand } from "@/data/site";

// Real brand logos load from a logo CDN (nominative use for genuine
// partnerships). If a logo doesn't resolve, we fall back to a clean
// monogram tile so the wall never shows a broken image.
export default function BrandLogo({ brand }: { brand: Brand }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="flex items-center gap-3 rounded-xl border border-black/10 bg-white/70 px-4 py-4 backdrop-blur-md transition-colors hover:border-black/20 dark:border-white/10 dark:bg-zinc-950/55 dark:hover:border-white/20">
      {failed ? (
        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg font-[family-name:var(--font-sora)] text-sm font-bold"
          style={{ backgroundColor: `${brand.accent}1f`, color: brand.accent }}
        >
          {brand.mark}
        </span>
      ) : (
        <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white ring-1 ring-black/5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://logo.clearbit.com/${brand.domain}?size=80`}
            alt={`${brand.name} logo`}
            width={28}
            height={28}
            loading="lazy"
            className="h-7 w-7 object-contain"
            onError={() => setFailed(true)}
          />
        </span>
      )}
      <span className="font-[family-name:var(--font-sora)] text-[13px] font-medium leading-tight text-zinc-700 dark:text-zinc-300">
        {brand.name}
      </span>
    </div>
  );
}
