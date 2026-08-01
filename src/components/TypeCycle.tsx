"use client";

import { useEffect, useState } from "react";

const PHRASES = [
  "Sports Tech Leader.",
  "Youth Sports Advocate.",
  "Lifelong Athlete.",
  "Revenue Generator.",
  "Partnership Builder.",
  "Deal Closer.",
  "Network Architect.",
  "Growth Driver.",
  "Dot Connector.",
];

export default function TypeCycle() {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = PHRASES[idx];
    let t: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < word.length) {
      t = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 75);
    } else if (!deleting && displayed.length === word.length) {
      t = setTimeout(() => setDeleting(true), 3000);
    } else if (deleting && displayed.length > 0) {
      t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else {
      setDeleting(false);
      setIdx((i) => (i + 1) % PHRASES.length);
    }

    return () => clearTimeout(t);
  }, [displayed, deleting, idx]);

  return (
    <p className="on-photo mt-3 font-mono text-sm font-medium uppercase tracking-[0.18em] text-zinc-700 dark:text-zinc-400 sm:text-base">
      {"I'm a "}
      <span className="text-[#0088cc] dark:text-[#00ccff]">{displayed}</span>
      <span className="ml-px inline-block w-0.5 animate-pulse bg-[#00ccff] align-middle">&nbsp;</span>
    </p>
  );
}
