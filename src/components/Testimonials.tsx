"use client";

import { useEffect, useRef, useState } from "react";
import { testimonials, type Testimonial } from "@/data/testimonials";

// Marquee drift speed, in pixels per second. BOTH rows use this exact value, so
// they move in perfect lockstep regardless of how many cards each holds — no row
// visibly outrunning the other. That lockstep is what fixes the "sloppy/buggy"
// feel; the low number is what fixes "too fast". Bump it up to speed both rows.
const MARQUEE_SPEED = 32;

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

// A CSS-transform marquee: the track slides via translateX, so there is NO
// horizontal scroll container. That's the whole point — an overflow-x scroller
// captures the page's vertical wheel/touch and makes scrolling past this
// section feel stuck. A transform track never intercepts scroll or clicks, so
// the page always scrolls straight through. Cards are duplicated once so the
// -50% translate wraps seamlessly; hovering pauses the drift (CSS).
function Row({ items, dir }: { items: Testimonial[]; dir: "l" | "r" }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    // The track holds the items twice, so one full set is exactly half the
    // scroll width — that's the distance the -50% animation travels each loop.
    // duration = distance / speed keeps px/s identical to the other row and
    // steady across responsive card-width changes.
    const measure = () => {
      const setWidth = track.scrollWidth / 2;
      if (setWidth > 0) setDuration(setWidth / MARQUEE_SPEED);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    return () => ro.disconnect();
  }, []);

  return (
    <div className="overflow-hidden">
      <div
        ref={trackRef}
        className={`flex w-max gap-5 ${
          dir === "l" ? "animate-marquee-l" : "animate-marquee-r"
        }`}
        // Hold still until measured, so there's no fast flash before JS sets the
        // real duration. Once measured, this overrides the CSS fallback.
        style={
          duration
            ? { animationDuration: `${duration}s` }
            : { animationName: "none" }
        }
      >
        {items.map((t, i) => (
          <Card key={`a-${i}`} t={t} />
        ))}
        {items.map((t, i) => (
          <Card key={`b-${i}`} t={t} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const mid = Math.ceil(testimonials.length / 2);
  const rowA = testimonials.slice(0, mid);
  const rowB = testimonials.slice(mid);

  return (
    <div className="marquee-mask flex flex-col gap-5">
      <Row items={rowA} dir="l" />
      <Row items={rowB} dir="r" />
    </div>
  );
}
