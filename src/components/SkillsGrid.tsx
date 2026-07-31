"use client";

import { useState } from "react";

import { tools, type Tool } from "@/data/site";

// One tool: brand logo (logo.dev) with a colored-monogram fallback, name
// beneath. Chip lifts and glows brand-cyan on hover.
function ToolChip({ tool }: { tool: Tool }) {
  const [failed, setFailed] = useState(!tool.logo);

  return (
    <div className="group flex flex-col items-center gap-3 rounded-2xl border border-black/10 bg-white/70 p-5 text-center backdrop-blur-md transition-all duration-200 hover:-translate-y-1 hover:border-[#00ccff]/50 hover:shadow-lg hover:shadow-[#00ccff]/10 dark:border-white/10 dark:bg-zinc-950/55 dark:hover:border-[#00ccff]/40">
      {failed ? (
        <span
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl font-[family-name:var(--font-sora)] text-sm font-bold"
          style={{ backgroundColor: `${tool.accent}1f`, color: tool.accent }}
        >
          {tool.mark}
        </span>
      ) : (
        <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white ring-1 ring-black/5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={tool.logo}
            alt={`${tool.name} logo`}
            width={32}
            height={32}
            loading="lazy"
            className="h-8 w-8 object-contain"
            onError={() => setFailed(true)}
          />
        </span>
      )}
      <span className="text-[13px] font-medium leading-tight text-zinc-800 transition-colors group-hover:text-zinc-950 dark:text-zinc-300 dark:group-hover:text-white">
        {tool.name}
      </span>
    </div>
  );
}

export default function SkillsGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {tools.map((t) => (
        <ToolChip key={t.name} tool={t} />
      ))}
    </div>
  );
}
