"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { LinkedInIcon } from "@/data/socials";

const COLORS = ["#00ccff", "#33d6ff", "#0088cc", "#2563eb", "#7cc9ff", "#ffffff", "#a5f3ff"];

function burst(ox: number, oy: number) {
  const canvas = document.createElement("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.cssText =
    "position:fixed;inset:0;pointer-events:none;z-index:99998;";
  document.body.appendChild(canvas);
  const ctx = canvas.getContext("2d")!;

  const particles = Array.from({ length: 70 }, () => ({
    x: ox,
    y: oy,
    vx: (Math.random() - 0.5) * 13,
    vy: -(Math.random() * 13 + 3),
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    w: Math.random() * 7 + 3,
    h: Math.random() * 4 + 2,
    rot: Math.random() * Math.PI * 2,
    rotV: (Math.random() - 0.5) * 0.25,
    life: 1,
  }));

  let raf: number;
  function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;
    for (const p of particles) {
      p.vy += 0.4;
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.rotV;
      p.life -= 0.013;
      if (p.life <= 0) continue;
      alive = true;
      ctx.save();
      ctx.globalAlpha = p.life;
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    }
    if (alive) raf = requestAnimationFrame(tick);
    else { cancelAnimationFrame(raf); canvas.remove(); }
  }
  raf = requestAnimationFrame(tick);
}

const CAL_HREF =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0bFqo43JGcdk9kShp6SSL5J4ZZyWsuaawJnrFhsmzZTkZzmtSBEq3-DyzO9VPWQE8jKZ7KXtvN";

type Item = {
  label: string;
  href: string;
  icon: React.ReactNode;
  // Tailwind utility classes for the row's accent (text + hover bg + border).
  cls: string;
};

// Items inside the "Let's Connect!" dropdown.
const ITEMS: Item[] = [
  {
    label: "Schedule a call",
    href: CAL_HREF,
    icon: <span aria-hidden className="text-base leading-none">⚡</span>,
    cls: "text-[#0088cc] border-[#00ccff]/25 hover:bg-[#00ccff]/[0.12] dark:text-[#00ccff] dark:border-[#00ccff]/25 dark:hover:bg-[#00ccff]/[0.14]",
  },
  {
    label: "Courses",
    href: "https://johnosberg.gumroad.com/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M3 9h18l-1.5 10.5a2 2 0 0 1-2 1.5H6.5a2 2 0 0 1-2-1.5L3 9Z" />
        <path d="M3 9l2-5h14l2 5" />
        <path d="M9 13a3 3 0 0 0 6 0" />
      </svg>
    ),
    cls: "text-[#0088cc] border-[#00ccff]/30 hover:bg-[#00ccff]/[0.12] dark:text-[#00ccff] dark:border-[#00ccff]/30 dark:hover:bg-[#00ccff]/[0.14]",
  },
  {
    label: "OZmosis",
    href: "https://powerofozmosis.makeacompany.ai",
    icon: (
      <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-[5px] bg-white ring-1 ring-black/5">
        <Image
          src="/oz-logo.png"
          alt=""
          width={24}
          height={24}
          className="h-4 w-4 object-contain"
        />
      </span>
    ),
    cls: "text-[#1b3b6f] border-[#1b3b6f]/30 hover:bg-[#1b3b6f]/[0.10] dark:text-[#f5c518] dark:border-[#f5c518]/30 dark:hover:bg-[#1b3b6f]/40",
  },
];

// Standalone buttons that sit below the dropdown, side by side.
const SOCIALS: Item[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/johnosberg",
    icon: <LinkedInIcon className="h-5 w-5 shrink-0" />,
    cls: "text-[#0a66c2] border-[#0a66c2]/25 hover:bg-[#0a66c2]/[0.12] dark:text-[#99ccff] dark:border-[#66b2ff]/25 dark:hover:bg-[#66b2ff]/[0.12]",
  },
  {
    label: "Newsletter",
    href: "https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7495912172493975553",
    icon: (
      <Image
        src="/bts-logo.png"
        alt=""
        width={24}
        height={24}
        className="h-5 w-5 shrink-0 rounded-[5px] object-contain"
      />
    ),
    cls: "text-[#0088cc] border-[#00ccff]/30 hover:bg-[#00ccff]/[0.12] dark:text-[#00ccff] dark:border-[#00ccff]/30 dark:hover:bg-[#00ccff]/[0.14]",
  },
];

export default function LinkHub() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  // Close on outside click or Escape.
  useEffect(() => {
    if (!open) return;
    function onDown(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function toggle() {
    const next = !open;
    setOpen(next);
    if (next && btnRef.current) {
      const r = btnRef.current.getBoundingClientRect();
      burst(r.left + r.width / 2, r.top + r.height / 2);
    }
  }

  return (
    <div className="mt-4 flex w-full max-w-xs flex-col items-center gap-2.5">
      <div ref={wrapRef} className="relative w-full">
      <button
        ref={btnRef}
        type="button"
        onClick={toggle}
        aria-haspopup="true"
        aria-expanded={open}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-sm bg-[#00ccff] px-6 py-3 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#04070e] shadow-lg shadow-[#00ccff]/30 transition-colors hover:bg-[#33d6ff]"
      >
        <span aria-hidden>⚡</span>
        Let&apos;s Connect!
        <svg
          viewBox="0 0 24 24"
          className={`h-4 w-4 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {/* Dropdown panel — in-flow, so opening it pushes the page down
          instead of floating on top of the content below. */}
      <div
        className={`grid w-full origin-top transition-all duration-300 ease-out ${
          open ? "mt-2 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div
            role="menu"
            className="rounded-xl border border-black/10 bg-white/85 p-1.5 shadow-xl shadow-black/10 backdrop-blur-md dark:border-white/10 dark:bg-[#0a0f1a]/90 dark:shadow-black/40"
          >
            {ITEMS.map((it) => (
              <a
                key={it.label}
                href={it.href}
                target="_blank"
                rel="noopener noreferrer"
                role="menuitem"
                tabIndex={open ? 0 : -1}
                className={`group flex w-full items-center gap-3 rounded-lg border border-transparent px-3 py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.12em] transition-colors ${it.cls}`}
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center">{it.icon}</span>
                {it.label}
                <span className="ml-auto opacity-50 transition-transform group-hover:translate-x-0.5">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      </div>

      {/* Separate LinkedIn + Newsletter buttons, side by side. */}
      <div className="grid w-full grid-cols-2 gap-2.5">
        {SOCIALS.map((it) => (
          <a
            key={it.label}
            href={it.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex w-full items-center justify-center gap-2 rounded-sm border bg-white/60 px-3 py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.12em] backdrop-blur-sm transition-colors dark:bg-white/[0.04] ${it.cls}`}
          >
            <span className="flex h-5 w-5 shrink-0 items-center justify-center">{it.icon}</span>
            {it.label}
          </a>
        ))}
      </div>
    </div>
  );
}
