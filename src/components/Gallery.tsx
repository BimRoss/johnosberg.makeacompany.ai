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

// The strip. A real horizontal scroll container so you can swipe it on a phone,
// drag it with a mouse, or nudge it with the chevrons — and when you leave it
// alone it drifts left on its own, same rhythm as the endorsements wall. Items
// are duplicated once and the scroll position wraps at the halfway mark, so the
// loop is seamless in either direction and never runs out of photos.
function Strip({ onOpen }: { onOpen: (i: number) => void }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  // Auto-drift resumes once now() passes this timestamp; every interaction
  // pushes it out, so the strip stays still while you're working with it.
  const resumeAtRef = useRef(0);
  const hoverRef = useRef(false);
  // Mouse click-drag bookkeeping. draggedRef flips true once the pointer has
  // moved far enough that the gesture is a drag, not a click — that suppresses
  // the lightbox-open click when you let go.
  const dragRef = useRef<{ startX: number; startScroll: number } | null>(null);
  const draggedRef = useRef(false);

  // Pause drift for a beat after any manual interaction.
  const nudgeResume = useCallback((ms = 2500) => {
    resumeAtRef.current = performance.now() + ms;
  }, []);

  // Keep scrollLeft inside [0, setWidth) so the two duplicated sets loop forever.
  const wrap = useCallback((el: HTMLDivElement) => {
    const setWidth = el.scrollWidth / 2;
    if (setWidth <= 0) return;
    if (el.scrollLeft >= setWidth) el.scrollLeft -= setWidth;
    else if (el.scrollLeft < 0) el.scrollLeft += setWidth;
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      const idle = now >= resumeAtRef.current && !hoverRef.current && !dragRef.current;
      if (idle && !reduce) el.scrollLeft += DRIFT_SPEED * dt;
      wrap(el);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [wrap]);

  // Chevron nudge — scroll about one viewport of the strip, smoothly.
  const nudge = useCallback((dir: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    nudgeResume();
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  }, [nudgeResume]);

  return (
    <div className="group/strip relative">
      <div
        ref={scrollRef}
        className="marquee-mask no-scrollbar flex w-full cursor-grab gap-4 overflow-x-auto overscroll-x-contain active:cursor-grabbing"
        onMouseEnter={() => (hoverRef.current = true)}
        onMouseLeave={() => {
          hoverRef.current = false;
          dragRef.current = null;
        }}
        onWheel={() => nudgeResume()}
        onTouchStart={() => nudgeResume()}
        onTouchMove={() => nudgeResume()}
        onPointerDown={(e) => {
          if (e.pointerType !== "mouse") return; // touch scrolls natively
          const el = scrollRef.current;
          if (!el) return;
          dragRef.current = { startX: e.clientX, startScroll: el.scrollLeft };
          draggedRef.current = false;
          nudgeResume();
        }}
        onPointerMove={(e) => {
          const drag = dragRef.current;
          const el = scrollRef.current;
          if (!drag || !el) return;
          const dx = e.clientX - drag.startX;
          if (Math.abs(dx) > 5) draggedRef.current = true;
          el.scrollLeft = drag.startScroll - dx;
          nudgeResume();
        }}
        onPointerUp={() => (dragRef.current = null)}
        onClickCapture={(e) => {
          // Swallow the click that ends a drag so it doesn't open the lightbox.
          if (draggedRef.current) {
            e.preventDefault();
            e.stopPropagation();
            draggedRef.current = false;
          }
        }}
      >
        {gallery.map((m, i) => (
          <Frame key={`a-${i}`} m={m} onOpen={() => onOpen(i)} />
        ))}
        {gallery.map((m, i) => (
          <Frame key={`b-${i}`} m={m} onOpen={() => onOpen(i)} />
        ))}
      </div>

      {/* Desktop toggle arrows — fade in on hover, out of the way on touch. */}
      <button
        type="button"
        onClick={() => nudge(-1)}
        aria-label="Scroll photos left"
        className="absolute left-2 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white opacity-0 backdrop-blur-sm transition hover:bg-black/60 group-hover/strip:opacity-100 sm:flex"
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => nudge(1)}
        aria-label="Scroll photos right"
        className="absolute right-2 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white opacity-0 backdrop-blur-sm transition hover:bg-black/60 group-hover/strip:opacity-100 sm:flex"
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
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
