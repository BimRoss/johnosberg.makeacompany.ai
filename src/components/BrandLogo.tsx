"use client";

import { useState } from "react";

import type { Brand } from "@/data/site";

// Real brand logos load from a logo CDN (nominative use for genuine
// partnerships). If a logo doesn't resolve, we fall back to a clean
// monogram tile so the wall never shows a broken image. Logo-only, no name
// label: the logo fills its square footprint so the wall reads as pure marks.
export default function BrandLogo({ brand }: { brand: Brand }) {
  const [failed, setFailed] = useState(false);

  return (
    <a
      href={brand.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${brand.name} website`}
      title={brand.name}
      className="flex aspect-square items-center justify-center rounded-lg border border-black/10 bg-white/70 p-2 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-black/20 hover:shadow-md hover:shadow-black/5 dark:border-white/10 dark:bg-zinc-950/55 dark:hover:border-white/20">
      {failed ? (
        <span
          className="flex h-full w-full items-center justify-center rounded-lg font-[family-name:var(--font-sora)] text-lg font-bold"
          style={{ backgroundColor: `${brand.accent}1f`, color: brand.accent }}
        >
          {brand.mark}
        </span>
      ) : (
        /* White plate is kept so dark/transparent marks (Oakley, NYSGA) stay
           legible on the dark theme, but the logo now fills ~92% of it, so the
           white reads as a thin border hugging the mark, not a big empty card. */
        <span className="flex h-full w-full items-center justify-center overflow-hidden rounded-md bg-white ring-1 ring-black/5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={brand.logo}
            alt={`${brand.name} logo`}
            width={96}
            height={96}
            loading="lazy"
            className="h-[92%] w-[92%] object-contain"
            onError={() => setFailed(true)}
          />
        </span>
      )}
    </a>
  );
}
