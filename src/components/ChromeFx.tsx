"use client";

import { useEffect, useState } from "react";

// caddieOS-style page chrome: a thin scroll-progress bar pinned to the top, plus
// a floating jump control bottom-right that reads "Go to bottom" near the top of
// the page and swaps to "Back to top" once you've scrolled down. Same cyan pill
// either way, one shared slot.
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

  function toBottom() {
    // Land on the real footer instead of the empty dark backdrop that sits below
    // it on iOS, where the dynamic viewport makes scrollHeight overshoot.
    const footer = document.querySelector("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth", block: "end" });
    } else {
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
    }
  }

  const pill =
    "group fixed bottom-5 right-5 z-50 flex items-center gap-1.5 rounded-full border border-[#04070e]/20 bg-[#00ccff] px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-[#04070e] shadow-md shadow-[#00ccff]/25 transition-all duration-300 hover:bg-[#33d6ff]";
  const shown = "translate-y-0 opacity-100";
  const hidden = "pointer-events-none translate-y-3 opacity-0";

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 h-1">
        <div
          className="h-full origin-left bg-gradient-to-r from-[#0088cc] via-[#00ccff] to-[#7cc9ff] transition-transform duration-150 ease-out"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`${pill} ${showTop ? shown : hidden}`}
      >
        <svg viewBox="0 0 24 24" className="h-3 w-3 transition-transform group-hover:-translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
        Back to top
      </button>

      <button
        type="button"
        aria-label="Go to bottom"
        onClick={toBottom}
        className={`${pill} ${showTop ? hidden : shown}`}
      >
        <svg viewBox="0 0 24 24" className="h-3 w-3 transition-transform group-hover:translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
        Go to bottom
      </button>
    </>
  );
}
