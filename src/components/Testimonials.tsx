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

// Wraps every case-insensitive occurrence of `term` in a highlighted <mark> so
// the word someone searched for pops in the card. Returns the text untouched
// when there's no term.
function Highlight({ text, term }: { text: string; term: string }) {
  if (!term) return <>{text}</>;
  const parts: React.ReactNode[] = [];
  const lower = text.toLowerCase();
  const needle = term.toLowerCase();
  let i = 0;
  let key = 0;
  while (i <= text.length) {
    const idx = lower.indexOf(needle, i);
    if (idx === -1) {
      parts.push(text.slice(i));
      break;
    }
    if (idx > i) parts.push(text.slice(i, idx));
    parts.push(
      <mark
        key={key++}
        className="rounded bg-[#00ccff]/30 px-0.5 text-inherit dark:bg-[#00ccff]/25"
      >
        {text.slice(idx, idx + needle.length)}
      </mark>
    );
    i = idx + needle.length;
  }
  return <>{parts}</>;
}

// NOTE: no backdrop-blur on these cards, on purpose. The marquee renders ~270
// cards animating nonstop; giving each one a backdrop-filter layer overwhelmed
// iOS WebKit's renderer and killed the whole tab (Chrome-on-iOS showed its
// "Can't open this page / Restart Chrome" crash page, most reliably right after
// focusing the search field, which forces a full repaint). A more opaque solid
// background keeps the frosted look without the per-card blur layer. Don't add
// backdrop-blur back here.
function Card({ t, term = "", clamp = true, fluid = false }: { t: Testimonial; term?: string; clamp?: boolean; fluid?: boolean }) {
  const width = fluid ? "w-full" : "w-[320px] shrink-0 sm:w-[360px]";
  return (
    <figure className={`flex ${width} flex-col gap-2 rounded-2xl border border-black/10 bg-white/90 p-4 dark:border-white/10 dark:bg-zinc-950/85`}>
      <span aria-hidden className="select-none font-serif text-xl leading-none text-[#00ccff]/50 dark:text-[#00ccff]/40">&#10077;</span>
      <blockquote className={`${clamp ? "line-clamp-3" : ""} text-[13px] leading-[1.45] text-zinc-800 dark:text-zinc-300`}>
        <Highlight text={t.text} term={term} />
      </blockquote>
      <div className="mt-auto flex flex-col gap-2">
        <Stars />
        <figcaption className="flex items-center gap-3">
          <Avatar name={t.name} size="md" />
          <span className="min-w-0">
            <span className="block truncate font-[family-name:var(--font-sora)] text-sm font-semibold text-zinc-900 dark:text-white">
              <Highlight text={t.name} term={term} />
            </span>
            <span className="block truncate font-mono text-[11px] uppercase tracking-[0.1em] text-zinc-500 dark:text-zinc-400">
              <Highlight text={t.title + (t.company ? ` · ${t.company}` : "")} term={term} />
            </span>
          </span>
        </figcaption>
      </div>
    </figure>
  );
}

// A native horizontal scroll strip that the finger owns, with a gentle ambient
// drift layered on top.
//
// Finger scrolling is the browser's native overflow-x scroll — no JS touch
// handlers to drop an event on, so it physically cannot latch the way the old
// rAF-plus-touchstart/touchend version did (that one paused on touchstart and
// relied on a matching touchend that iOS kept dropping, freezing the row for
// good). The only JS is the drift: a rAF loop nudges scrollLeft forward a few
// px/sec and pauses the instant a pointer goes down, resuming on a WINDOW-level
// pointerup/cancel so a release that lands off the strip still clears the hold.
// A time-based safety also resumes if a hold ever outlives ~4s with no move, so
// even a wholly dropped release can't latch it.
//
// The track holds two copies of the cards; scrollLeft is kept inside the first
// copy ([0, half)) so forward drift and forward swipes wrap seamlessly. Don't
// add backdrop-blur to the cards (see Card note) — it crashes iOS.
function Row({ items }: { items: Testimonial[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let holding = false;
    let holdStart = 0;
    let last = 0;
    let raf = 0;
    // Sub-pixel accumulator. Several engines (iOS WebKit, some Chrome builds)
    // store scrollLeft as an integer, so writing 0.5px/frame truncates straight
    // back to the same value and the row never moves — the "stopped drifting"
    // bug. We bank the fractional drift here and only ever push WHOLE pixels
    // onto scrollLeft, so it advances on every engine.
    let acc = 0;

    const half = () => el.scrollWidth / 2;

    const wrap = () => {
      const h = half();
      if (h <= 0) return;
      if (el.scrollLeft >= h) el.scrollLeft -= h;
      else if (el.scrollLeft < 0) el.scrollLeft += h;
    };

    const step = (now: number) => {
      const dt = last ? (now - last) / 1000 : 0;
      last = now;
      // Resume if a hold has outlived any plausible real touch (dropped release).
      if (holding && now - holdStart > 4000) holding = false;
      // Drift never pauses on hover — only while a finger is actively dragging —
      // so the row keeps moving right-to-left at all times on desktop.
      if (!reduced && !holding) {
        acc += MARQUEE_SPEED * dt;
        const whole = Math.trunc(acc);
        if (whole !== 0) {
          el.scrollLeft += whole;
          acc -= whole;
        }
      }
      wrap();
      raf = requestAnimationFrame(step);
    };

    const onDown = () => {
      holding = true;
      holdStart = performance.now();
    };
    const onRelease = () => {
      holding = false;
    };

    el.addEventListener("pointerdown", onDown);
    // Window-level release so a pointerup off the strip still clears the hold.
    window.addEventListener("pointerup", onRelease);
    window.addEventListener("pointercancel", onRelease);
    raf = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onRelease);
      window.removeEventListener("pointercancel", onRelease);
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      className="no-scrollbar flex w-full gap-5 overflow-x-auto overscroll-x-contain [touch-action:pan-x] [-webkit-overflow-scrolling:touch]"
    >
      {items.map((t, i) => (
        <Card key={`a-${i}`} t={t} />
      ))}
      {items.map((t, i) => (
        <Card key={`b-${i}`} t={t} />
      ))}
    </div>
  );
}

function SearchIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <circle cx="9" cy="9" r="6" />
      <path d="M14 14l4 4" strokeLinecap="round" />
    </svg>
  );
}

export default function Testimonials() {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();

  const matches = q
    ? testimonials.filter((t) =>
        `${t.text} ${t.name} ${t.title} ${t.company}`.toLowerCase().includes(q)
      )
    : null;


  return (
    <div className="flex flex-col gap-6">
      {/* Search across every endorsement's words, names, titles, and companies. */}
      <div className="relative w-full max-w-md">
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 dark:text-zinc-500">
          <SearchIcon />
        </span>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by word or name…"
          aria-label="Search endorsements"
          className="w-full rounded-full border border-black/10 bg-white/80 py-2.5 pl-11 pr-10 text-sm text-zinc-900 shadow-sm outline-none backdrop-blur-md transition focus:border-[#00ccff] focus:ring-2 focus:ring-[#00ccff]/30 dark:border-white/10 dark:bg-zinc-950/60 dark:text-white dark:placeholder:text-zinc-500"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 -translate-y-1/2 flex h-6 w-6 items-center justify-center rounded-full text-zinc-400 transition hover:bg-black/5 hover:text-zinc-700 dark:text-zinc-500 dark:hover:bg-white/10 dark:hover:text-zinc-200"
          >
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M5 5l10 10M15 5L5 15" strokeLinecap="round" />
            </svg>
          </button>
        )}
      </div>

      {matches ? (
        <div className="flex flex-col gap-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-zinc-500 dark:text-zinc-400">
            {matches.length === 0
              ? `No endorsements mention “${query.trim()}”`
              : `${matches.length} endorsement${matches.length === 1 ? "" : "s"} mention${matches.length === 1 ? "s" : ""} “${query.trim()}”`}
          </p>
          {matches.length > 0 && (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {matches.map((t, i) => (
                <Card key={`m-${i}`} t={t} term={query.trim()} clamp={false} fluid />
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="marquee-mask flex flex-col gap-3">
          <Row items={testimonials} />
        </div>
      )}
    </div>
  );
}
