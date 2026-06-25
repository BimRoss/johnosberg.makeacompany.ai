"use client";

import { useEffect } from "react";

export default function CursorTrail() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let frame = 0;
    let lastX = 0;
    let lastY = 0;

    function spawn(x: number, y: number) {
      const el = document.createElement("span");
      const size = 10 + Math.random() * 8;
      const dx = (Math.random() - 0.5) * 24;
      const dy = -(Math.random() * 20 + 10);
      el.textContent = "⚡";
      el.style.cssText = [
        "position:fixed",
        `left:${x}px`,
        `top:${y}px`,
        `font-size:${size}px`,
        "pointer-events:none",
        "user-select:none",
        "z-index:99999",
        "transform:translate(-50%,-50%)",
        "transition:opacity 0.55s ease,transform 0.55s ease",
        "opacity:0.85",
        "will-change:opacity,transform",
      ].join(";");
      document.body.appendChild(el);

      requestAnimationFrame(() => {
        el.style.opacity = "0";
        el.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) rotate(${(Math.random() - 0.5) * 45}deg) scale(0.5)`;
      });

      setTimeout(() => el.remove(), 600);
    }

    function onMove(e: MouseEvent) {
      frame++;
      if (frame % 4 !== 0) return;
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      if (dx * dx + dy * dy < 36) return;
      lastX = e.clientX;
      lastY = e.clientY;
      spawn(e.clientX, e.clientY);
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return null;
}
