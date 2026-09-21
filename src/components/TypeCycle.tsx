"use client";

import { useEffect, useState } from "react";

const PHRASES = [
  "Sports Tech Leader.",
  "Youth Sports Advocate.",
  "Lifelong Athlete.",
  "Revenue Generator.",
  "Partnership Builder.",
  "Door Opener.",
  "Network Architect.",
  "Growth Driver.",
  "Dot Connector.",
  "Girl Dad.",
];

export default function TypeCycle() {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [still, setStill] = useState(false);

  // If the visitor prefers reduced motion, skip the typing loop and just show
  // the first phrase in full.
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setStill(true);
      setDisplayed(PHRASES[0]);
    }
  }, []);

  useEffect(() => {
    if (still) return;
    const word = PHRASES[idx];
    let t: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < word.length) {
      t = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 90);
    } else if (!deleting && displayed.length === word.length) {
      t = setTimeout(() => setDeleting(true), 6500);
    } else if (deleting && displayed.length > 0) {
      t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else {
      setDeleting(false);
      setIdx((i) => (i + 1) % PHRASES.length);
    }

    return () => clearTimeout(t);
  }, [displayed, deleting, idx, still]);

  return (
    <p className="on-photo mt-6 font-mono text-sm font-semibold uppercase tracking-[0.18em] text-zinc-800 dark:text-zinc-400 sm:mt-8 sm:text-base">
      {"I'm a "}
      <span className="text-[#015f92] dark:text-[#00ccff]">{displayed}</span>
      {!still && (
        <span className="ml-px inline-block w-0.5 animate-pulse bg-[#00ccff] align-middle">&nbsp;</span>
      )}
    </p>
  );
}
