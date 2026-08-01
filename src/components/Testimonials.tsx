"use client";

import { useEffect, useRef } from "react";

import { testimonials, type Testimonial } from "@/data/testimonials";

// Cool blue-family gradients — varied enough to tell avatars apart while
// staying inside the Brandlete palette.
const AVATAR_GRADIENTS = [
  "from-[#00ccff] to-[#0088cc]",
  "from-[#38bdf8] to-[#2563eb]",
  "from-[#7cc9ff] to-[#00ccff]",
  "from-[#2563eb] to-[#1e3a8a]",
  "from-[#22d3ee] to-[#0891b2]",
  "from-[#00ccff] to-[#005f99]",
  "from-[#60a5fa] to-[#3b82f6]",
  "from-[#0ea5e9] to-[#0088cc]",
];

function initials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function gradientFor(name: string) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
  return AVATAR_GRADIENTS[h % AVATAR_GRADIENTS.length];
}

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} className="h-3.5 w-3.5 fill-amber-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function Avatar({ name, size = "md" }: { name: string; size?: "md" | "lg" }) {
  const gradient = gradientFor(name);
  const outer = size === "lg" ? "h-16 w-16" : "h-10 w-10";
  const inner = size === "lg" ? "h-[58px] w-[58px] text-base" : "h-9 w-9 text-xs";
  return (
    <div className={`${outer} shrink-0 rounded-full bg-gradient-to-br ${gradient} p-[3px] shadow-md`}>
      <div className={`${inner} flex items-center justify-center rounded-full bg-white/15 font-[family-name:var(--font-sora)] font-bold text-white`}>
        {initials(name)}
      </div>
    </div>
  );
}

function Card({ t }: { t: Testimonial }) {
  return (
    <figure className="flex w-[320px] shrink-0 flex-col gap-3 rounded-2xl border border-black/10 bg-white/75 p-5 backdrop-blur-md dark:border-white/10 dark:bg-zinc-950/55 sm:w-[360px]">
      <span aria-hidden className="select-none font-serif text-2xl leading-none text-[#00ccff]/50 dark:text-[#00ccff]/40">&#10077;</span>
      <blockquote className="line-clamp-5 text-[14px] leading-6 text-zinc-800 dark:text-zinc-300">
        {t.text}
      </blockquote>
      <div className="mt-auto flex flex-col gap-2.5">
        <Stars />
        <figcaption className="flex items-center gap-3">
          <Avatar name={t.name} size="md" />
          <span className="min-w-0">
            <span className="block truncate font-[family-name:var(--font-sora)] text-sm font-semibold text-zinc-900 dark:text-white">
              {t.name}
            </span>
            <span className="block truncate font-mono text-[11px] uppercase tracking-[0.1em] text-zinc-500 dark:text-zinc-400">
              {t.title}
              {t.company ? ` · ${t.company}` : ""}
            </span>
          </span>
        </figcaption>
      </div>
    </figure>
  );
}

// A native horizontally-scrollable row: you can swipe left/right (or drag with
// a mouse / trackpad) to move through the cards. When left alone it drifts on
// its own at a slow pace; any hover, touch, or scroll input pauses that drift
// and hands control to you, then it resumes a beat after you let go. Cards are
// duplicated once so the drift can wrap seamlessly.
function Row({
  items,
  dir,
  drift = true,
}: {
  items: Testimonial[];
  dir: "l" | "r";
  drift?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // A static row (drift off) stays put — no auto-motion, and it never
    // captures the page's vertical scroll. Nothing to wire up.
    if (!drift) return;

    const reduce =
      typeof matchMedia !== "undefined" &&
      matchMedia("(prefers-reduced-motion: reduce)").matches;

    const speed = dir === "l" ? 0.35 : -0.35; // px per frame
    const half = () => el.scrollWidth / 2;

    // The right-moving row starts from the midpoint so it has room to drift back.
    if (dir === "r") el.scrollLeft = half();

    let paused = false;
    let resumeTimer: ReturnType<typeof setTimeout> | undefined;
    let raf = 0;

    const tick = () => {
      if (!paused && !reduce && half() > 0) {
        let next = el.scrollLeft + speed;
        if (next >= half()) next -= half();
        else if (next <= 0) next += half();
        el.scrollLeft = next;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    // Pause on any manual input; resume a short beat after the last one.
    const pause = () => {
      paused = true;
      if (resumeTimer) clearTimeout(resumeTimer);
    };
    const resumeSoon = () => {
      if (resumeTimer) clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => {
        paused = false;
      }, 1400);
    };
    const bump = () => {
      pause();
      resumeSoon();
    };

    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", resumeSoon);
    el.addEventListener("pointerdown", pause);
    el.addEventListener("pointerup", resumeSoon);
    el.addEventListener("pointercancel", resumeSoon);
    el.addEventListener("touchstart", pause, { passive: true });
    el.addEventListener("touchend", resumeSoon, { passive: true });
    el.addEventListener("wheel", bump, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      if (resumeTimer) clearTimeout(resumeTimer);
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", resumeSoon);
      el.removeEventListener("pointerdown", pause);
      el.removeEventListener("pointerup", resumeSoon);
      el.removeEventListener("pointercancel", resumeSoon);
      el.removeEventListener("touchstart", pause);
      el.removeEventListener("touchend", resumeSoon);
      el.removeEventListener("wheel", bump);
    };
  }, [dir, drift]);

  return (
    <div
      ref={ref}
      className="no-scrollbar flex gap-5 overflow-x-auto overscroll-x-contain pb-1 [touch-action:pan-x] [-webkit-overflow-scrolling:touch]"
    >
      {items.map((t, i) => (
        <Card key={`a-${i}`} t={t} />
      ))}
      {/* Duplicate the cards only for the drifting rows, which rely on the
          second copy to wrap seamlessly. A static row shows one clean set. */}
      {drift &&
        items.map((t, i) => (
          <Card key={`b-${i}`} t={t} />
        ))}
    </div>
  );
}

export default function Testimonials() {
  const mid = Math.ceil(testimonials.length / 2);
  const rowA = testimonials.slice(0, mid);
  const rowB = testimonials.slice(mid);

  return (
    <div className="marquee-mask flex flex-col gap-5">
      <Row items={rowA} dir="l" drift={false} />
      <Row items={rowB} dir="r" />
    </div>
  );
}
