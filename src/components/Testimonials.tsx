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

const FEATURED: Testimonial[] = [
  {
    name: "Jay O'Brien",
    title: "Senior Relationship Manager",
    company: "Corebridge Financial",
    text: "He was a tremendous partner who was willing to go the extra mile to ensure everyone was more than satisfied with the result. I will miss working with him and expect he will continue growing successful relationships throughout his career. I'd work with him again in a second.",
  },
  {
    name: "Del Reid",
    title: "Founder, 26 Shirts",
    company: "Co-Founder, Bills Mafia",
    text: "There's no one quite like John! He keeps a mental inventory of what everyone he knows is working on so that when he meets a new person, he sees exactly how they could complement something one of his connections is already tackling. I always leave conversations with John ready to take on the world.",
  },
  {
    name: "Matthew Cunha",
    title: "Sales Representative",
    company: "Oakley",
    text: "John is the kind of person who produces meaningful results while inspiring everyone around him. His positive outlook isn't just something he turns on for meetings — it's a fundamental part of who he is. Working with him doesn't just push projects forward; it elevates the entire environment.",
  },
  {
    name: "Barbara Boese",
    title: "Transition Coordinator",
    company: "Accessible Academics",
    text: "John Osberg is a force of nature. Arms wide open to help another realize a passion in education, experience or employment. That was over a year ago and the mentorship is thriving — a young man with a disability has been embraced by the world of golf and advertising. John was instrumental in a career exploration and launch.",
  },
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

function FeaturedCard({ t }: { t: Testimonial }) {
  return (
    <figure className="relative flex flex-col gap-5 overflow-hidden rounded-2xl border border-[#00ccff]/30 bg-white/90 p-6 shadow-lg shadow-[#00ccff]/10 backdrop-blur-md dark:border-[#00ccff]/25 dark:bg-zinc-900/70 dark:shadow-[#00ccff]/10">
      <span aria-hidden className="absolute right-5 top-3 select-none font-serif text-6xl leading-none text-[#00ccff]/40 dark:text-[#00ccff]/30">&#10077;</span>
      <Stars />
      <blockquote className="text-[15px] leading-7 text-zinc-800 dark:text-zinc-200">
        &ldquo;{t.text}&rdquo;
      </blockquote>
      <figcaption className="mt-auto flex items-center gap-3.5">
        <Avatar name={t.name} size="lg" />
        <span className="min-w-0">
          <span className="block font-[family-name:var(--font-sora)] text-base font-semibold text-zinc-900 dark:text-white">
            {t.name}
          </span>
          <span className="block truncate font-mono text-[11px] uppercase tracking-[0.1em] text-[#0088cc] dark:text-[#00ccff]">
            {t.title}
          </span>
          {t.company && (
            <span className="block truncate font-mono text-[11px] uppercase tracking-[0.1em] text-zinc-500 dark:text-zinc-500">
              {t.company}
            </span>
          )}
        </span>
      </figcaption>
    </figure>
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
function Row({ items, dir }: { items: Testimonial[]; dir: "l" | "r" }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

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
  }, [dir]);

  return (
    <div
      ref={ref}
      className="no-scrollbar flex gap-5 overflow-x-auto pb-1 [touch-action:pan-x] [-webkit-overflow-scrolling:touch]"
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

export default function Testimonials() {
  const mid = Math.ceil(testimonials.length / 2);
  const rowA = testimonials.slice(0, mid);
  const rowB = testimonials.slice(mid);

  return (
    <div className="flex flex-col gap-10">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURED.map((t) => (
          <FeaturedCard key={t.name} t={t} />
        ))}
      </div>
      <div className="marquee-mask flex flex-col gap-5">
        <Row items={rowA} dir="l" />
        <Row items={rowB} dir="r" />
      </div>
    </div>
  );
}
