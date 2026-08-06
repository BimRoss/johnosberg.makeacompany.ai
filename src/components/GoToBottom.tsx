"use client";

import { useEffect, useState } from "react";

export default function GoToBottom() {
  // Flip to "Top" once the reader is near the bottom, so the button always
  // does the useful thing instead of going dead at the end of the page.
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    function onScroll() {
      const scrolled = window.scrollY + window.innerHeight;
      setAtBottom(scrolled >= document.documentElement.scrollHeight - 200);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  function jump() {
    window.scrollTo({
      top: atBottom ? 0 : document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }

  return (
    <button
      type="button"
      onClick={jump}
      aria-label={atBottom ? "Go to top" : "Go to bottom"}
      className="fixed left-1/2 top-4 z-30 flex -translate-x-[calc(50%-75px)] items-center gap-1.5 rounded-full border border-black/15 bg-white/70 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.1em] text-zinc-700 backdrop-blur-md transition-colors hover:border-black/40 hover:text-zinc-900 dark:border-white/15 dark:bg-white/5 dark:text-zinc-300 dark:hover:border-white/50 dark:hover:text-white sm:top-6"
    >
      <span>{atBottom ? "Top" : "Bottom"}</span>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`h-3.5 w-3.5 transition-transform ${atBottom ? "rotate-180" : ""}`}
        aria-hidden
      >
        <path d="M12 5v14M5 12l7 7 7-7" />
      </svg>
    </button>
  );
}
