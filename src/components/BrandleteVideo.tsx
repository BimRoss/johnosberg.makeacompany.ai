"use client";
import { useRef, useState } from "react";

export default function BrandleteVideo({
  src,
  poster,
  title,
}: {
  src: string;
  poster: string;
  title: string;
}) {
  const [playing, setPlaying] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);

  if (playing) {
    return (
      <video
        ref={ref}
        className="absolute inset-0 h-full w-full bg-black"
        src={src}
        poster={poster}
        controls
        autoPlay
        playsInline
        onPlay={() => {
          // Only one of the three can play at a time: pause every other video.
          document.querySelectorAll("video").forEach((v) => {
            if (v !== ref.current) v.pause();
          });
        }}
      />
    );
  }

  return (
    <button
      onClick={() => setPlaying(true)}
      className="group absolute inset-0 h-full w-full"
      aria-label={`Play ${title}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={poster} alt={title} className="h-full w-full object-cover" />
      {/* Light bottom gradient only, so the poster stays bright instead of the
          old full-cover scrim that muddied darker frames. */}
      <span className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/35 via-transparent to-transparent transition-colors group-hover:from-black/45">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#00ccff]/95 shadow-xl shadow-[#00ccff]/40 ring-4 ring-white/25 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
          <svg viewBox="0 0 24 24" className="h-5 w-5 translate-x-0.5 fill-[#04070e]" aria-hidden>
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
    </button>
  );
}
