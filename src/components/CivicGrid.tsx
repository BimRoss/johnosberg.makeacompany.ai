"use client";

// The civic/volunteer logo wall, filterable by category. Same chip pattern as
// PartnershipsGrid: chips toggle which orgs show, "All" resets, counts live on
// each chip. Dependency-free, themed for light/dark.

import { useState } from "react";

import CivicCard from "@/components/CivicCard";
import { civic, CIVIC_CATEGORIES, type CivicCategory } from "@/data/site";

const PREVIEW_COUNT = 8;

export default function CivicGrid() {
  const [active, setActive] = useState<CivicCategory | "All">("All");
  const [expanded, setExpanded] = useState(false);

  const counts = CIVIC_CATEGORIES.map((c) => ({
    ...c,
    value: civic.filter((o) => o.category === c.name).length,
  }));
  const shown = active === "All" ? civic : civic.filter((o) => o.category === active);
  const visible = expanded ? shown : shown.slice(0, PREVIEW_COUNT);

  const chip = (on: boolean) =>
    `inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.08em] transition-all ${
      on
        ? "border-transparent text-white shadow-sm"
        : "border-black/15 text-zinc-600 hover:border-black/35 hover:text-zinc-900 dark:border-white/15 dark:text-zinc-400 dark:hover:border-white/40 dark:hover:text-white"
    }`;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-1.5">
        <button
          type="button"
          onClick={() => {
            setActive("All");
            setExpanded(false);
          }}
          className={chip(active === "All")}
          style={active === "All" ? { backgroundColor: "#0f172a" } : undefined}
        >
          All
          <span className={active === "All" ? "text-white/70" : "text-zinc-400"}>{civic.length}</span>
        </button>
        {counts.map((c) => {
          const on = active === c.name;
          return (
            <button
              key={c.name}
              type="button"
              onClick={() => {
                setActive(on ? "All" : c.name);
                setExpanded(false);
              }}
              className={chip(on)}
              style={on ? { backgroundColor: c.color } : undefined}
            >
              <span
                className="h-2 w-2 rounded-sm"
                style={{ backgroundColor: on ? "rgba(255,255,255,0.85)" : c.color }}
              />
              {c.name}
              <span className={on ? "text-white/70" : "text-zinc-400"}>{c.value}</span>
            </button>
          );
        })}
      </div>

      {/* Flex-wrap + justify-center. 4-up at every breakpoint so the preview
          reads as two clean rows (4 top, 4 bottom). */}
      <div className="mx-auto flex w-full max-w-md flex-wrap justify-center gap-1.5">
        {visible.map((c, i) => (
          <div
            key={`${c.org}-${c.role}-${i}`}
            className="flex basis-[calc((100%-1.125rem)/4)] [&>*]:flex-1"
          >
            <CivicCard c={c} />
          </div>
        ))}
      </div>

      {shown.length > PREVIEW_COUNT && (
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="rounded-full border border-black/15 px-4 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-zinc-600 transition-all hover:border-black/35 hover:text-zinc-900 dark:border-white/15 dark:text-zinc-400 dark:hover:border-white/40 dark:hover:text-white"
          >
            {expanded ? "Show less" : `Show all ${shown.length}`}
          </button>
        </div>
      )}
    </div>
  );
}
