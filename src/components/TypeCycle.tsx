"use client";

import { useEffect, useState } from "react";

const PHRASES = [
  "revenue generator.",
  "partnership builder.",
  "deal closer.",
  "network architect.",
  "growth driver.",
  "connector of dots.",
];

export default function TypeCycle() {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = PHRASES[idx];
    let t: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < word.length) {
      t = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 70);
    } else if (!deleting && displayed.length === word.length) {
      t = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else {
      setDeleting(false);
      setIdx((i) => (i + 1) % PHRASES.length);
    }

    return () => clearTimeout(t);
  }, [displayed, deleting, idx]);

  return (
    <p className="on-photo mt-3 font-mono text-sm font-medium uppercase tracking-[0.18em] text-zinc-700 dark:text-zinc-400 sm:text-base">
      {"I'm a "}
      <span className="text-emerald-600 dark:text-emerald-400">{displayed}</span>
      <span className="ml-px inline-block w-0.5 animate-pulse bg-emerald-500 align-middle">&nbsp;</span>
    </p>
  );
}
