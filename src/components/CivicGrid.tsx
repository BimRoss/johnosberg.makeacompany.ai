"use client";

// The civic/volunteer logo wall. Shows a preview of 8 (two rows of 4) with a
// show-all toggle. Dependency-free, themed for light/dark.

import { useState } from "react";

import CivicCard from "@/components/CivicCard";
import { civic } from "@/data/site";

const PREVIEW_COUNT = 8;

export default function CivicGrid() {
  const [expanded, setExpanded] = useState(false);

  const visible = expanded ? civic : civic.slice(0, PREVIEW_COUNT);

  return (
    <div className="flex flex-col gap-3">
      {/* Flex-wrap + justify-center. 4-up at every breakpoint so the preview
          reads as two clean rows (4 top, 4 bottom). */}
      <div className="mx-auto flex w-full max-w-xs flex-wrap justify-center gap-1.5">
        {visible.map((c, i) => (
          <div
            key={`${c.org}-${c.role}-${i}`}
            className="flex basis-[calc((100%-1.125rem)/4)] [&>*]:flex-1"
          >
            <CivicCard c={c} />
          </div>
        ))}
      </div>

      {civic.length > PREVIEW_COUNT && (
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="rounded-full border border-black/15 px-4 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-zinc-600 transition-all hover:border-black/35 hover:text-zinc-900 dark:border-white/15 dark:text-zinc-400 dark:hover:border-white/40 dark:hover:text-white"
          >
            {expanded ? "Show less" : `Show all ${civic.length}`}
          </button>
        </div>
      )}
    </div>
  );
}
