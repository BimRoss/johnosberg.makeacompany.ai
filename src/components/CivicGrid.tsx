"use client";

// The civic/volunteer logo wall, filterable by category. Same chip pattern as
// PartnershipsGrid: chips toggle which orgs show, "All" resets, counts live on
// each chip. Dependency-free, themed for light/dark.

import { useState } from "react";

import CivicCard from "@/components/CivicCard";
import { civic, CIVIC_CATEGORIES, type CivicCategory } from "@/data/site";

export default function CivicGrid() {
  const [active, setActive] = useState<CivicCategory | "All">("All");

  const counts = CIVIC_CATEGORIES.map((c) => ({
    ...c,
    value: civic.filter((o) => o.category === c.name).length,
  }));
  const shown = active === "All" ? civic : civic.filter((o) => o.category === active);

  const chip = (on: boolean) =>
    `inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.1em] transition-all ${
      on
        ? "border-transparent text-white shadow-sm"
        : "border-black/15 text-zinc-600 hover:border-black/35 hover:text-zinc-900 dark:border-white/15 dark:text-zinc-400 dark:hover:border-white/40 dark:hover:text-white"
    }`;

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActive("All")}
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
              onClick={() => setActive(on ? "All" : c.name)}
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

      <div className="grid grid-cols-4 gap-3 sm:grid-cols-6 md:grid-cols-8">
        {shown.map((c, i) => (
          <CivicCard key={`${c.org}-${c.role}-${i}`} c={c} />
        ))}
      </div>
    </div>
  );
}
