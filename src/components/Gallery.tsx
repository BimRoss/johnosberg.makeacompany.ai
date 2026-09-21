"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { gallery, type Moment } from "@/data/site";

// Same drift speed as the endorsements marquee so the two sections feel like
// one family. px/second; bump to speed the filmstrip up.
const DRIFT_SPEED = 32;

// One photo in the strip. Fixed height, width follows the image's aspect ratio,
// so portrait and landscape shots sit together like a real filmstrip. Clicking
// opens the lightbox at this photo.
function Frame({ m, onOpen }: { m: Moment; onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative h-52 shrink-0 overflow-hidden rounded-xl border border-black/10 bg-zinc-200 ring-1 ring-black/5 transition-transform hover:z-10 hover:scale-[1.02] sm:h-64 dark:border-white/10 dark:bg-zinc-800 dark:ring-white/10"
      aria-label={m.caption ? `View: ${m.caption}` : "View photo"}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={m.src}
        alt={m.caption ?? ""}
        loading="lazy"
        draggable={false}
        className="h-full w-auto max-w-none object-cover"
      />
      {m.caption && (
        <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 pb-2 pt-6 text-left font-[family-name:var(--font-sora)] text-[11px] font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">
          {m.caption}
        </span>
      )}
    </button>
  );
}

// The drifting strip. A transform track (not a scroll container) so it never
// hijacks the page's vertical scroll — same trick the endorsements marquee uses.
// Items are duplicated once so the -50% loop wraps seamlessly.
function Strip({ onOpen }: { onOpen: (i: number) => void }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const measure = () => {
      const setWidth = track.scrollWidth / 2;
      if (setWidth > 0) setDuration(setWidth / DRIFT_SPEED);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    return () => ro.disconnect();
  }, []);

  return (
    <div className="marquee-mask overflow-hidden">
      <div
        ref={trackRef}
        className="flex w-max gap-4 animate-marquee-l"
        style={duration ? { animationDuration: `${duration}s` } : { animationName: "none" }}
      >
        {gallery.map((m, i) => (
          <Frame key={`a-${i}`} m={m} onOpen={() => onOpen(i)} />
        ))}
        {gallery.map((m, i) => (
          <Frame key={`b-${i}`} m={m} onOpen={() => onOpen(i)} />
        ))}
      </div>
    </div>
  );
}

// Full-screen viewer. Arrow keys / on-screen chevrons / swipe move between
// photos; click the backdrop or Esc closes.
function Lightbox({
  index,
  onClose,
  onMove,
}: {
  index: number;
  onClose: () => void;
  onMove: (dir: 1 | -1) => void;
}) {
  const touchX = useRef<number | null>(null);
  const m = gallery[index];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") onMove(1);
      else if (e.key === "ArrowLeft") onMove(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onMove]);

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
      onClick={onClose}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) onMove(dx < 0 ? 1 : -1);
        touchX.current = null;
      }}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
      >
        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M5 5l10 10M15 5L5 15" strokeLinecap="round" />
        </svg>
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onMove(-1);
        }}
        aria-label="Previous"
        className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-6"
      >
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onMove(1);
        }}
        aria-label="Next"
        className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6"
      >
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <figure className="flex max-h-full max-w-4xl flex-col items-center gap-3" onClick={(e) => e.stopPropagation()}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={m.src}
          alt={m.caption ?? ""}
          className="max-h-[80vh] w-auto rounded-lg object-contain shadow-2xl"
        />
        {m.caption && (
          <figcaption className="text-center font-[family-name:var(--font-sora)] text-sm font-semibold text-white">
            {m.caption}
          </figcaption>
        )}
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/50">
          {index + 1} / {gallery.length}
        </span>
      </figure>
    </div>
  );
}

export default function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  const move = useCallback((dir: 1 | -1) => {
    setOpen((i) => (i === null ? i : (i + dir + gallery.length) % gallery.length));
  }, []);

  return (
    <>
      <Strip onOpen={(i) => setOpen(i)} />
      {open !== null && <Lightbox index={open} onClose={() => setOpen(null)} onMove={move} />}
    </>
  );
}
