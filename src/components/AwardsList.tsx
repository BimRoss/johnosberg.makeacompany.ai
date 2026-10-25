"use client";

// "Awards & honors" list, capped to a preview with a show-all toggle so the
// Recognized section stays short. Same collapse pattern as the logo walls.

import { useState } from "react";

import AwardLogo from "@/components/AwardLogo";
import { awards } from "@/data/site";

const PREVIEW_COUNT = 6;

export default function AwardsList() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? awards : awards.slice(0, PREVIEW_COUNT);

  return (
    <div className="flex flex-col gap-2.5">
      <div className="cascade grid grid-cols-1 gap-x-10 sm:grid-cols-2">
        {visible.map((a, i) => (
          <div
            key={`${a.org}-${i}`}
            className="on-photo flex items-start gap-3 border-t border-black/10 py-2.5 dark:border-white/10"
          >
            <a href={a.url} target="_blank" rel="noopener noreferrer" aria-label={a.org} className="shrink-0">
              <AwardLogo award={a} />
            </a>
            <div className="min-w-0 flex-1">
              <a
                href={a.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-fit font-mono text-[10px] uppercase tracking-[0.1em] text-zinc-600 transition-colors hover:text-[#0088cc] dark:text-zinc-400 dark:hover:text-[#00ccff]"
              >
                {a.org}
              </a>
              <div className="mt-1 flex flex-col gap-1">
                {a.items.map((it, j) => (
                  <div key={`${it.title}-${j}`} className="flex items-baseline justify-between gap-4">
                    <span className="min-w-0 font-[family-name:var(--font-sora)] text-[13px] font-semibold leading-tight text-zinc-900 dark:text-white">
                      {it.title}
                    </span>
                    <span className="shrink-0 font-mono text-[11px] font-semibold text-[#0088cc] dark:text-[#00ccff]">
                      {it.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {awards.length > PREVIEW_COUNT && (
        <div className="flex justify-center pt-1">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="rounded-full border border-black/15 px-4 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-zinc-600 transition-all hover:border-black/35 hover:text-zinc-900 dark:border-white/15 dark:text-zinc-400 dark:hover:border-white/40 dark:hover:text-white"
          >
            {expanded ? "Show less" : `Show all ${awards.length}`}
          </button>
        </div>
      )}
    </div>
  );
}
