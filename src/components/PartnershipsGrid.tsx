"use client";

// The partnerships logo wall, filterable by sector. Chips toggle which brands
// show; "All" resets. Counts live on each chip so the wall reads like data.
// Dependency-free, themed for light/dark.

import { useState } from "react";

import BrandLogo from "@/components/BrandLogo";
import { brands, SECTORS, type Sector } from "@/data/site";

export default function PartnershipsGrid() {
  const [active, setActive] = useState<Sector | "All">("All");

  const counts = SECTORS.map((s) => ({
    ...s,
    value: brands.filter((b) => b.sector === s.name).length,
  }));
  const shown = active === "All" ? brands : brands.filter((b) => b.sector === active);

  const chip = (on: boolean, color?: string) =>
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
          <span className={active === "All" ? "text-white/70" : "text-zinc-400"}>{brands.length}</span>
        </button>
        {counts.map((s) => {
          const on = active === s.name;
          return (
            <button
              key={s.name}
              type="button"
              onClick={() => setActive(on ? "All" : s.name)}
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

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {shown.map((b) => (
          <BrandLogo key={b.name} brand={b} />
        ))}
      </div>
    </div>
  );
}
