"use client";

// "In the press" list, capped to a preview with a show-all toggle so the
// Recognized section doesn't run long. Same collapse pattern as the logo walls.

import { useState } from "react";

import PressLogo from "@/components/PressLogo";
import { press } from "@/data/site";

const PREVIEW_COUNT = 4;

export default function PressList() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? press : press.slice(0, PREVIEW_COUNT);

  return (
    <div className="flex flex-col gap-2.5">
      <div className="cascade grid grid-cols-1 gap-x-10 sm:grid-cols-2">
        {visible.map((p) => (
          <a
            key={p.href}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="on-photo group flex items-center gap-2.5 border-t border-black/10 py-1.5 dark:border-white/10"
          >
            <span className="flex w-32 shrink-0 items-center gap-1.5 sm:w-40">
              <PressLogo item={p} />
              <span className="min-w-0 truncate font-mono text-[10px] uppercase leading-tight tracking-[0.1em] text-zinc-800 dark:text-zinc-400">
                {p.source}
              </span>
            </span>
            <span
              className={`flex-1 font-[family-name:var(--font-sora)] text-[13px] font-semibold leading-tight transition-colors ${
                p.title.includes("Brandlete")
                  ? "text-[#0088cc] dark:text-[#00ccff]"
                  : "text-zinc-900 group-hover:text-black dark:text-zinc-200 dark:group-hover:text-white"
              }`}
            >
              {p.title}
            </span>
            <span className="shrink-0 text-zinc-400 transition-transform group-hover:translate-x-0.5">
              ↗
            </span>
          </a>
        ))}
      </div>

      {press.length > PREVIEW_COUNT && (
        <div className="flex justify-center pt-1">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="rounded-full border border-black/15 px-4 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-zinc-600 transition-all hover:border-black/35 hover:text-zinc-900 dark:border-white/15 dark:text-zinc-400 dark:hover:border-white/40 dark:hover:text-white"
          >
            {expanded ? "Show less" : `Show all ${press.length}`}
          </button>
        </div>
      )}
    </div>
  );
}
