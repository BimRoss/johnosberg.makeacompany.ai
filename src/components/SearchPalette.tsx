"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { brands, podcasts, press, roles } from "@/data/site";

type Item = {
  label: string;
  sub?: string;
  kind: string;
  href: string;
  external?: boolean;
};

function buildIndex(): Item[] {
  const sections: Item[] = [
    { label: "By the numbers", kind: "Section", href: "#numbers" },
    { label: "Experience", kind: "Section", href: "#experience" },
    { label: "Partnerships", kind: "Section", href: "#partnerships" },
    { label: "Recommendations", kind: "Section", href: "#recommendations" },
    { label: "In the news", kind: "Section", href: "#news" },
    { label: "Podcasts", kind: "Section", href: "#podcasts" },
    { label: "Download resume", kind: "Action", href: "/resume.pdf", external: true },
  ];
  const exp: Item[] = roles.map((r) => ({
    label: `${r.org} — ${r.title}`,
    sub: r.period,
    kind: "Experience",
    href: "#experience",
  }));
  const news: Item[] = press.map((p) => ({
    label: p.title,
    sub: p.source,
    kind: "Press",
    href: p.href,
    external: true,
  }));
  const pods: Item[] = podcasts.map((p) => ({
    label: p.title,
    sub: p.role,
    kind: "Podcast",
    href: p.href,
    external: true,
  }));
  const partners: Item[] = brands.map((b) => ({
    label: b.name,
    kind: "Partner",
    href: b.url,
    external: true,
  }));
  return [...sections, ...exp, ...news, ...pods, ...partners];
}

export default function SearchPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const index = useMemo(buildIndex, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return index;
    return index.filter((i) =>
      `${i.label} ${i.sub ?? ""} ${i.kind}`.toLowerCase().includes(q)
    );
  }, [query, index]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (
        e.key === "/" &&
        !open &&
        !/input|textarea/i.test((e.target as HTMLElement)?.tagName || "")
      ) {
        e.preventDefault();
        setOpen(true);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
      setTimeout(() => inputRef.current?.focus(), 20);
    }
  }, [open]);

  useEffect(() => setActive(0), [query]);

  function go(item: Item) {
    setOpen(false);
    if (item.external) {
      window.open(item.href, "_blank", "noopener,noreferrer");
      return;
    }
    const el = document.querySelector(item.href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Search this site"
        className="search-pulse group fixed left-4 top-4 z-40 flex items-center gap-2.5 rounded-full border border-amber-400/60 bg-white/85 px-5 py-3 font-mono text-sm font-bold uppercase tracking-[0.14em] text-emerald-800 shadow-lg shadow-amber-400/25 backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-amber-400 hover:bg-white/95 dark:border-amber-400/50 dark:bg-zinc-900/75 dark:text-emerald-100 dark:hover:bg-zinc-900/90 sm:left-6 sm:top-6"
      >
        <svg viewBox="0 0 24 24" className="bolt-flicker h-5 w-5 fill-amber-400" aria-hidden>
          <path d="M7 2v11h3v9l7-12h-4l4-8z" />
        </svg>
        <span>Search</span>
        <span className="hidden rounded border border-amber-400/40 px-1.5 py-0.5 text-[10px] text-amber-600 opacity-80 dark:text-amber-300 sm:inline">
          ⌘K
        </span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-start justify-center bg-black/40 px-4 pt-[12vh] backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-lg overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl dark:border-white/10 dark:bg-zinc-900"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-black/10 px-4 dark:border-white/10">
              <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 fill-amber-400" aria-hidden>
                <path d="M7 2v11h3v9l7-12h-4l4-8z" />
              </svg>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    setActive((a) => Math.min(a + 1, results.length - 1));
                  } else if (e.key === "ArrowUp") {
                    e.preventDefault();
                    setActive((a) => Math.max(a - 1, 0));
                  } else if (e.key === "Enter" && results[active]) {
                    go(results[active]);
                  }
                }}
                placeholder="Search experience, press, partners…"
                className="w-full bg-transparent py-4 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 dark:text-white"
              />
            </div>
            <ul className="max-h-[55vh] overflow-y-auto py-2">
              {results.length === 0 && (
                <li className="px-4 py-6 text-center text-sm text-zinc-500">
                  No matches.
                </li>
              )}
              {results.map((item, i) => (
                <li key={`${item.kind}-${item.label}-${i}`}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onClick={() => go(item)}
                    className={`flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left ${
                      i === active
                        ? "bg-emerald-500/10"
                        : "hover:bg-black/5 dark:hover:bg-white/5"
                    }`}
                  >
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-medium text-zinc-900 dark:text-zinc-100">
                        {item.label}
                      </span>
                      {item.sub && (
                        <span className="block truncate text-xs text-zinc-500">
                          {item.sub}
                        </span>
                      )}
                    </span>
                    <span className="shrink-0 rounded-full border border-black/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.12em] text-zinc-500 dark:border-white/15">
                      {item.kind}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
