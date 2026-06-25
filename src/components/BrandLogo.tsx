"use client";

import { useState } from "react";

import type { Brand } from "@/data/site";

// Real brand logos load from a logo CDN (nominative use for genuine
// partnerships). If a logo doesn't resolve, we fall back to a clean
// monogram tile so the wall never shows a broken image.
export default function BrandLogo({ brand }: { brand: Brand }) {
  const [failed, setFailed] = useState(false);

  return (
    <a
      href={brand.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${brand.name} website`}
      className="flex items-center gap-2.5 rounded-xl border border-black/10 bg-white/70 px-3 py-3.5 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-black/20 hover:shadow-md hover:shadow-black/5 dark:border-white/10 dark:bg-zinc-950/55 dark:hover:border-white/20">
      {failed ? (
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg font-[family-name:var(--font-sora)] text-xs font-bold"
          style={{ backgroundColor: `${brand.accent}1f`, color: brand.accent }}
        >
          {brand.mark}
        </span>
      ) : (
        <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white ring-1 ring-black/5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={brand.logo}
            alt={`${brand.name} logo`}
            width={28}
            height={28}
            loading="lazy"
            className="h-6 w-6 object-contain"
            onError={() => setFailed(true)}
          />
        </span>
      )}
      <span className="min-w-0 whitespace-nowrap font-[family-name:var(--font-sora)] text-[11px] font-medium leading-tight tracking-tight text-zinc-700 dark:text-zinc-300">
        {brand.name}
      </span>
    </a>
  );
}
