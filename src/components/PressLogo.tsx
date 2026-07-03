"use client";

import { useState } from "react";

import type { PressItem } from "@/data/site";

// Press source logo: loads the logo.dev mark, falls back to the self-hosted
// PNG if logo.dev 404s so the chip never shows a broken image.
export default function PressLogo({ item }: { item: PressItem }) {
  const [src, setSrc] = useState(item.logo);

  return (
    <span className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-md bg-white ring-1 ring-black/5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={`${item.source} logo`}
        width={22}
        height={22}
        loading="lazy"
        className="h-[22px] w-[22px] object-contain"
        onError={() => {
          if (src !== item.fallback) setSrc(item.fallback);
        }}
      />
    </span>
  );
}
