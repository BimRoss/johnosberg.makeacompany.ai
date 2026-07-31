"use client";

import { useState } from "react";

import { tools, type Tool } from "@/data/site";

// One tool: brand logo (logo.dev) with a colored-monogram fallback, name
// beneath. Chip lifts and glows brand-cyan on hover.
function ToolChip({ tool }: { tool: Tool }) {
  const [failed, setFailed] = useState(!tool.logo);

  return (
    <div className="group flex flex-col items-center gap-2 rounded-xl border border-black/10 bg-white/70 p-3 text-center backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-[#00ccff]/50 hover:shadow-md hover:shadow-[#00ccff]/10 dark:border-white/10 dark:bg-zinc-950/55 dark:hover:border-[#00ccff]/40">
      {failed ? (
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg font-[family-name:var(--font-sora)] text-xs font-bold"
          style={{ backgroundColor: `${tool.accent}1f`, color: tool.accent }}
        >
          {tool.mark}
        </span>
      ) : (
        <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white ring-1 ring-black/5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={tool.logo}
            alt={`${tool.name} logo`}
            width={24}
            height={24}
            loading="lazy"
            className="h-6 w-6 object-contain"
            onError={() => setFailed(true)}
          />
        </span>
      )}
      <span className="text-[11px] font-medium leading-tight text-zinc-800 transition-colors group-hover:text-zinc-950 dark:text-zinc-300 dark:group-hover:text-white">
        {tool.name}
      </span>
    </div>
  );
}

export default function SkillsGrid() {
  return (
    <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
      {tools.map((t) => (
        <ToolChip key={t.name} tool={t} />
      ))}
    </div>
  );
}
