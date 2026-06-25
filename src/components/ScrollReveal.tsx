"use client";

import { useEffect } from "react";

// Adds `.is-visible` to every `.reveal-on-scroll` element as it scrolls into
// view, driving a fade-up. One observer for the whole page. Respects
// prefers-reduced-motion (CSS handles that by skipping the transition).
//
// Built to never leave content stuck invisible: any sliver of an element
// triggers the reveal (threshold 0), anything already on screen at mount is
// revealed immediately, and a failsafe timer force-reveals everything shortly
// after load in case the observer misfires (the mobile "a section won't open"
// bug). A hidden-by-default animation must always have an escape hatch.
export default function ScrollReveal() {
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal-on-scroll")
    );
    const revealAll = () => els.forEach((el) => el.classList.add("is-visible"));

    if (!("IntersectionObserver" in window)) {
      revealAll();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      // threshold 0: any sliver entering view reveals it, so sections taller
      // than the viewport never get skipped on a fast or restored scroll.
      { threshold: 0, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));

    // Reveal anything already within (or above) the viewport at mount — covers
    // reloads that restore scroll position partway down the page.
    const revealOnscreen = () => {
      const vh = window.innerHeight;
      els.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < vh) el.classList.add("is-visible");
      });
    };
    revealOnscreen();

    // Failsafe: never let content stay hidden if the observer hiccups.
    const t = window.setTimeout(revealAll, 2500);

    return () => {
      io.disconnect();
      window.clearTimeout(t);
    };
  }, []);

  return null;
}
