"use client";

import { useState } from "react";

import type { Podcast } from "@/data/site";

// Cover thumbnail for a podcast row. `thumb` is either a YouTube video id
// (resolved to its mqdefault still) or a local image path starting with "/".
// On a load error it falls back to a play-glyph tile so a row never shows a
// broken image.
function thumbUrl(thumb: string): string {
  return thumb.startsWith("/")
    ? thumb
    : `https://img.youtube.com/vi/${thumb}/mqdefault.jpg`;
}

export default function PodcastThumb({ pod }: { pod: Podcast }) {
  const [failed, setFailed] = useState(!pod.thumb);

  return (
    <span className="relative flex h-12 w-[4.75rem] shrink-0 items-center justify-center overflow-hidden rounded-md bg-zinc-200 ring-1 ring-black/5 dark:bg-zinc-800 dark:ring-white/10">
      {failed ? (
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-zinc-500" fill="currentColor" aria-hidden>
          <path d="M8 5v14l11-7z" />
        </svg>
      ) : (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={thumbUrl(pod.thumb)}
            alt={`${pod.title} cover`}
            loading="lazy"
            className="h-full w-full object-cover"
            onError={() => setFailed(true)}
          />
          <span
            aria-hidden
            className="absolute inset-0 flex items-center justify-center bg-black/15 opacity-0 transition-opacity group-hover:opacity-100"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/90">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-zinc-900" fill="currentColor" aria-hidden>
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
        </>
      )}
    </span>
  );
}
