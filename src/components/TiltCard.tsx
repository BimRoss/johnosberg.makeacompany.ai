"use client";

import { useRef, type ReactNode } from "react";

// Subtle premium depth: a card leans a few degrees toward the cursor and a
// faint light tracks under the pointer. Hover-only, so nothing moves until you
// point at it. Disabled on touch/coarse pointers and when the visitor prefers
// reduced motion, so it never gets in the way.
export default function TiltCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function enabled() {
    if (typeof window === "undefined") return false;
    if (window.matchMedia("(pointer: coarse)").matches) return false;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
    return true;
  }

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el || !enabled()) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.transition = "transform 0.08s ease-out";
    el.style.transform = `perspective(600px) rotateY(${(px - 0.5) * 9}deg) rotateX(${-(py - 0.5) * 9}deg) scale(1.03)`;
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
    el.style.setProperty("--glow", "1");
  }

  function onLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)";
    el.style.transform = "";
    el.style.setProperty("--glow", "0");
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`tilt-card h-full ${className}`}
      style={{ willChange: "transform" }}
    >
      {children}
    </div>
  );
}
