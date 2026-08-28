"use client";

import { useRef } from "react";

const COLORS = ["#00ccff", "#33d6ff", "#0088cc", "#2563eb", "#7cc9ff", "#ffffff", "#a5f3ff"];

function burst(ox: number, oy: number) {
  const canvas = document.createElement("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.cssText =
    "position:fixed;inset:0;pointer-events:none;z-index:99998;";
  document.body.appendChild(canvas);
  const ctx = canvas.getContext("2d")!;

  const particles = Array.from({ length: 90 }, () => ({
    x: ox,
    y: oy,
    vx: (Math.random() - 0.5) * 14,
    vy: -(Math.random() * 14 + 3),
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

export default function BookCallBtn() {
  const ref = useRef<HTMLAnchorElement>(null);

  function handleClick() {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    burst(r.left + r.width / 2, r.top + r.height / 2);
  }

  return (
    <a
      ref={ref}
      href="https://tinyurl.com/meet-josberg-brandlete"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="group inline-flex items-center gap-2 rounded-sm bg-[#00ccff] px-6 py-3 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#04070e] shadow-lg shadow-[#00ccff]/30 transition-colors hover:bg-[#33d6ff]"
    >
      <span aria-hidden>⚡</span>
      Let&apos;s Talk!
      <span className="transition-transform group-hover:translate-x-0.5">↗</span>
    </a>
  );
}
