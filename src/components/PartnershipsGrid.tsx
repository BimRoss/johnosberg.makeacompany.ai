"use client";

// The partnerships logo wall. Shows a preview of 8 (two rows of 4) with a
// show-all toggle. Dependency-free, themed for light/dark.

import { useState } from "react";

import BrandLogo from "@/components/BrandLogo";
import { brands } from "@/data/site";

const PREVIEW_COUNT = 8;

export default function PartnershipsGrid() {
  const [expanded, setExpanded] = useState(false);

  const visible = expanded ? brands : brands.slice(0, PREVIEW_COUNT);

  return (
    <div className="flex flex-col gap-3">
      {/* Flex-wrap + justify-center. 4-up at every breakpoint so the preview
          reads as two clean rows (4 top, 4 bottom). */}
      <div className="mx-auto flex w-full max-w-xs flex-wrap justify-center gap-1.5">
        {visible.map((b) => (
          <div
            key={b.name}
            className="flex basis-[calc((100%-1.125rem)/4)] [&>a]:flex-1"
          >
            <BrandLogo brand={b} />
          </div>
        ))}
      </div>

      {brands.length > PREVIEW_COUNT && (
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="rounded-full border border-black/15 px-4 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-zinc-600 transition-all hover:border-black/35 hover:text-zinc-900 dark:border-white/15 dark:text-zinc-400 dark:hover:border-white/40 dark:hover:text-white"
          >
            {expanded ? "Show less" : `Show all ${brands.length}`}
          </button>
        </div>
      )}
    </div>
  );
}
