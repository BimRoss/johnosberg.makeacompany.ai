"use client";

import { useState } from "react";

import type { Role } from "@/data/site";

// Company logo tile for an Experience entry: loads the logo.dev mark and falls
// back to a colored monogram if the logo is missing or 404s, so a row never
// shows a broken image.
export default function RoleLogo({ role }: { role: Role }) {
  const [failed, setFailed] = useState(!role.logo);

  if (failed) {
    return (
      <span
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg font-[family-name:var(--font-sora)] text-[11px] font-bold"
        style={{ backgroundColor: `${role.accent}1f`, color: role.accent }}
      >
        {role.mark}
      </span>
    );
  }

  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white ring-1 ring-black/5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={role.logo}
        alt={`${role.org} logo`}
        width={28}
        height={28}
        loading="lazy"
        className="h-7 w-7 object-contain"
        onError={() => setFailed(true)}
      />
    </span>
  );
}
