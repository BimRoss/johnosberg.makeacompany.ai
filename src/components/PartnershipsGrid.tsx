"use client";

// The partnerships logo wall, filterable by sector. Chips toggle which brands
// show; "All" resets. Counts live on each chip so the wall reads like data.
// Dependency-free, themed for light/dark.

import { useState } from "react";

import BrandLogo from "@/components/BrandLogo";
import { brands, SECTORS, type Sector } from "@/data/site";

const PREVIEW_COUNT = 8;

export default function PartnershipsGrid() {
  const [active, setActive] = useState<Sector | "All">("All");
  const [expanded, setExpanded] = useState(false);

  const counts = SECTORS.map((s) => ({
    ...s,
    value: brands.filter((b) => b.sector === s.name).length,
  }));
  const shown = active === "All" ? brands : brands.filter((b) => b.sector === active);
  const visible = expanded ? shown : shown.slice(0, PREVIEW_COUNT);

  const chip = (on: boolean, color?: string) =>
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
          <span className={active === "All" ? "text-white/70" : "text-zinc-400"}>{brands.length}</span>
        </button>
        {counts.map((s) => {
          const on = active === s.name;
          return (
            <button
              key={s.name}
              type="button"
              onClick={() => {
                setActive(on ? "All" : s.name);
                setExpanded(false);
              }}
              className={chip(on, s.color)}
              style={on ? { backgroundColor: s.color } : undefined}
            >
              <span
                className="h-2 w-2 rounded-sm"
                style={{ backgroundColor: on ? "rgba(255,255,255,0.85)" : s.color }}
              />
              {s.name}
              <span className={on ? "text-white/70" : "text-zinc-400"}>{s.value}</span>
            </button>
          );
        })}
      </div>

      {/* Flex-wrap + justify-center. 4-up at every breakpoint so the preview
          reads as two clean rows (4 top, 4 bottom). */}
      <div className="flex flex-wrap justify-center gap-1.5">
        {visible.map((b) => (
          <div
            key={b.name}
            className="flex basis-[calc((100%-1.125rem)/4)] [&>a]:flex-1"
          >
            <BrandLogo brand={b} />
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
