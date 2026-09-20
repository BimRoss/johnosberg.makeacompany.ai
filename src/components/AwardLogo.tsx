"use client";

import { useState } from "react";

import type { Award } from "@/data/site";

// Issuer logo tile for an Awards & honors entry: loads the logo.dev mark and
// falls back to a colored monogram if the logo is missing or 404s, so a row
// never shows a broken image (same pattern as RoleLogo/PressLogo). Smaller
// issuers with no crisp logo land on a clean monogram rather than a fake mark.
export default function AwardLogo({ award }: { award: Award }) {
  const [failed, setFailed] = useState(!award.logo);

  if (failed) {
    return (
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg font-[family-name:var(--font-sora)] text-[10px] font-bold"
        style={{ backgroundColor: `${award.accent}1f`, color: award.accent }}
      >
        {award.mark}
      </span>
    );
  }

  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white ring-1 ring-black/5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={award.logo}
        alt={`${award.org} logo`}
        width={26}
        height={26}
        loading="lazy"
        className="h-[26px] w-[26px] object-contain"
        onError={() => setFailed(true)}
      />
    </span>
  );
}
