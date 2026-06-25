"use client";

import { useRef, type ReactNode } from "react";

export default function StatTilt({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(400px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) scale(1.04)`;
  }

  function onLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform 0.4s ease";
    el.style.transform = "";
    setTimeout(() => {
      if (el) el.style.transition = "";
    }, 400);
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ willChange: "transform" }}
    >
      {children}
    </div>
  );
}
