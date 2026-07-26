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
      <span className="absolute inset-0 flex items-center justify-center bg-black/25 transition-colors group-hover:bg-black/35">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-sky-500 shadow-xl shadow-black/40 transition-transform group-hover:scale-110">
          <svg viewBox="0 0 24 24" className="h-8 w-8 translate-x-0.5 fill-white" aria-hidden>
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
    </button>
  );
}
