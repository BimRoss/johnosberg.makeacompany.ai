"use client";

import { useEffect, useState } from "react";

// caddieOS-style page chrome: a thin scroll-progress bar pinned to the top and
// a floating "back to top" control that fades in once you've scrolled.
export default function ChromeFx() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      const y = el.scrollTop || window.scrollY;
      setProgress(max > 0 ? y / max : 0);
      setShowTop(y > 600);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 h-1">
        <div
          className="h-full origin-left bg-gradient-to-r from-emerald-500 via-sky-500 to-violet-500 transition-transform duration-150 ease-out"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      <button
        type="button"
        aria-label="Back to top"
        onClick={() =>
          window.scrollTo({ top: 0, behavior: "smooth" })
        }
        className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 transition-all duration-300 hover:bg-emerald-500 ${
          showTop
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </button>
    </>
  );
}
