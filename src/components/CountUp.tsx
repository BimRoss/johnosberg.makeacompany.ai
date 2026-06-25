"use client";

import { useEffect, useRef, useState } from "react";

// Parses a stat string like "$8.5M+", "15+ yrs", "275%" into a fixed prefix,
// an animatable number, and a suffix — then counts the number up from 0 the
// first time it scrolls into view. Decimals are preserved.
function parse(value: string) {
  const m = value.match(/^(\D*)([\d,]+(?:\.\d+)?)([\s\S]*)$/);
  if (!m) return { prefix: "", target: 0, suffix: value, decimals: 0, raw: value };
  const [, prefix, num, suffix] = m;
  const clean = num.replace(/,/g, "");
  const decimals = clean.includes(".") ? clean.split(".")[1].length : 0;
  return { prefix, target: parseFloat(clean), suffix, decimals, raw: value };
}

export default function CountUp({ value }: { value: string }) {
  const { prefix, target, suffix, decimals, raw } = parse(value);
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce =
      typeof matchMedia !== "undefined" &&
      matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof IntersectionObserver === "undefined") {
      setDisplay(target);
      setDone(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const dur = 1300;
        let start = 0;
        const step = (t: number) => {
          if (!start) start = t;
          const p = Math.min(1, (t - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          setDisplay(target * eased);
          if (p < 1) requestAnimationFrame(step);
          else setDone(true);
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  // Once finished, render the exact original string so formatting is pristine.
  const shown = done
    ? raw
    : `${prefix}${display.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}${suffix}`;

  return (
    <span ref={ref} className="tabular-nums">
      {shown}
    </span>
  );
}
