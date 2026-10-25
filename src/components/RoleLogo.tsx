"use client";

import { useState } from "react";

import type { Role } from "@/data/site";

// Company logo tile for an Experience entry: loads the logo.dev mark and falls
// back to a colored monogram if the logo is missing or 404s, so a row never
// shows a broken image. When the role carries a `url`, the whole tile becomes a
// link to that company's site (new tab); orgs with no site render unlinked.
export default function RoleLogo({
  role,
  size = "md",
}: {
  role: Role;
  size?: "md" | "sm";
}) {
  const [failed, setFailed] = useState(!role.logo);

  const box = size === "sm" ? "h-7 w-7" : "h-10 w-10";
  const img = size === "sm" ? "h-5 w-5" : "h-7 w-7";
  const markText = size === "sm" ? "text-[9px]" : "text-[11px]";

  const tile = failed ? (
    <span
      className={`flex ${box} shrink-0 items-center justify-center rounded-lg font-[family-name:var(--font-sora)] ${markText} font-bold`}
      style={{ backgroundColor: `${role.accent}1f`, color: role.accent }}
    >
      {role.mark}
    </span>
  ) : (
    <span className={`flex ${box} shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white ring-1 ring-black/5`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={role.logo}
        alt={`${role.org} logo`}
        width={28}
        height={28}
        loading="lazy"
        className={`${img} object-contain`}
        onError={() => setFailed(true)}
      />
    </span>
  );

  if (!role.url) {
    return tile;
  }

  return (
    <a
      href={role.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${role.org}`}
      title={`Visit ${role.org}`}
      className="shrink-0 rounded-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00ccff]"
    >
      {tile}
    </a>
  );
}
