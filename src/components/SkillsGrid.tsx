"use client";

import { useState } from "react";

import { tools, TOOL_CATEGORIES, type Tool, type ToolCategory } from "@/data/site";

// One tool: brand logo (logo.dev) with a colored-monogram fallback, name
// beneath. Chip lifts and glows brand-cyan on hover.
function ToolChip({ tool }: { tool: Tool }) {
  const [failed, setFailed] = useState(!tool.logo);

  return (
    <div className="group flex flex-col items-center gap-1 rounded-lg border border-black/10 bg-white/70 p-1.5 text-center backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-[#00ccff]/50 hover:shadow-md hover:shadow-[#00ccff]/10 dark:border-white/10 dark:bg-zinc-950/55 dark:hover:border-[#00ccff]/40">
      {failed ? (
        <span
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md font-[family-name:var(--font-sora)] text-[10px] font-bold"
          style={{ backgroundColor: `${tool.accent}1f`, color: tool.accent }}
        >
          {tool.mark}
        </span>
      ) : (
        <span className="flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-md bg-white ring-1 ring-black/5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={tool.logo}
            alt={`${tool.name} logo`}
            width={20}
            height={20}
            loading="lazy"
            className="h-[18px] w-[18px] object-contain"
            onError={() => setFailed(true)}
          />
        </span>
      )}
      <span className="text-[10px] font-medium leading-tight text-zinc-800 transition-colors group-hover:text-zinc-950 dark:text-zinc-300 dark:group-hover:text-white">
        {tool.name}
      </span>
    </div>
  );
}

export default function SkillsGrid() {
  const [active, setActive] = useState<ToolCategory | "All">("All");

  const counts = TOOL_CATEGORIES.map((c) => ({
    ...c,
    value: tools.filter((t) => t.category === c.name).length,
  }));
  const shown = active === "All" ? tools : tools.filter((t) => t.category === active);

  const chip = (on: boolean) =>
    `inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.08em] transition-all ${
      on
        ? "border-transparent text-white shadow-sm"
        : "border-black/15 text-zinc-600 hover:border-black/35 hover:text-zinc-900 dark:border-white/15 dark:text-zinc-400 dark:hover:border-white/40 dark:hover:text-white"
    }`;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-1.5">
        <button
          type="button"
          onClick={() => setActive("All")}
          className={chip(active === "All")}
          style={active === "All" ? { backgroundColor: "#0f172a" } : undefined}
        >
          All
          <span className={active === "All" ? "text-white/70" : "text-zinc-400"}>{tools.length}</span>
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

      <div className="grid grid-cols-4 gap-1.5 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9">
        {shown.map((t) => (
          <ToolChip key={t.name} tool={t} />
        ))}
      </div>
    </div>
  );
}
