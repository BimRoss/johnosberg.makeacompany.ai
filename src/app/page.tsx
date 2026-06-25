import Image from "next/image";

import Backdrop from "@/components/Backdrop";
import ChromeFx from "@/components/ChromeFx";
import CountUp from "@/components/CountUp";
import ScrollReveal from "@/components/ScrollReveal";
import SearchPalette from "@/components/SearchPalette";
import BrandLogo from "@/components/BrandLogo";
import DataViz from "@/components/DataViz";
import ThemeToggle from "@/components/ThemeToggle";
import {
  brands,
  FEATURED_VIDEO,
  HERO_LABEL,
  HERO_SUMMARY,
  podcasts,
  press,
  roles,
  SITE_NAME,
  stats,
} from "@/data/site";
import { DownloadIcon, socials } from "@/data/socials";

export default function Home() {
  return (
    <>
      <Backdrop />
      <ThemeToggle />
      <ScrollReveal />
      <ChromeFx />
      <SearchPalette />
      <main
        id="main"
        className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-24 px-5 pb-24 pt-16 sm:px-8 md:gap-32 md:pt-24"
      >
        {/* Hero */}
        <section className="reveal flex flex-col items-start gap-8 md:flex-row md:items-center md:gap-12">
          <div className="shrink-0">
            <div className="relative h-32 w-32 overflow-hidden rounded-2xl ring-1 ring-black/10 dark:ring-white/15 md:h-44 md:w-44">
              <Image
                src="/headshot.png"
                alt={SITE_NAME}
                fill
                priority
                sizes="176px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="min-w-0">
            <p className="label-shimmer border-l-2 border-emerald-600/60 pl-3 font-mono text-[11px] font-bold uppercase leading-relaxed tracking-[0.24em] dark:border-emerald-400/60 sm:text-sm">
              {HERO_LABEL}
            </p>
            <h1 className="on-photo mt-4 font-[family-name:var(--font-sora)] text-5xl font-extrabold leading-[0.95] tracking-tight text-zinc-900 dark:text-white sm:text-6xl md:text-7xl">
              John Osberg
            </h1>
            <p className="on-photo mt-3 font-[family-name:var(--font-sora)] text-lg font-semibold text-zinc-700 dark:text-zinc-300 sm:text-xl">
              VP of Partnerships @ Brandlete, Inc. · Head of Growth @ MakeaCompany.ai (MaC)
            </p>
            <p className="on-photo mt-4 font-[family-name:var(--font-sora)] text-2xl font-bold leading-tight tracking-tight text-zinc-950 dark:text-white sm:text-3xl md:text-4xl">
              Get to know me before we formally connect. ⚡
            </p>
            <a
              href="https://www.linkedin.com/in/johnosberg/details/recommendations/"
              target="_blank"
              rel="noopener noreferrer"
              className="on-photo group mt-4 inline-flex w-fit items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-sky-800 transition-colors hover:text-sky-600 dark:text-sky-300 dark:hover:text-sky-200 sm:text-xs"
            >
              <span aria-hidden>⭐</span>
              Endorsed by 134+ top professionals and counting
              <span className="transition-transform group-hover:translate-x-0.5">↗</span>
            </a>
          </div>
        </section>

        {/* Summary + CTA */}
        <section className="reveal-2 -mt-12 flex flex-col gap-7 md:-mt-16">
          <p className="on-photo max-w-3xl text-[15px] font-medium leading-7 text-zinc-950 dark:font-normal dark:text-zinc-300 sm:text-lg sm:leading-8">
            {HERO_SUMMARY}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://calendar.app.google/yPadngiD35aN7BWa7"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-sm bg-emerald-600 px-6 py-3 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-lg shadow-emerald-600/25 transition-colors hover:bg-emerald-500"
            >
              <span aria-hidden>⚡</span>
              Book a call
              <span className="transition-transform group-hover:translate-x-0.5">↗</span>
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-zinc-900/80 px-6 py-3 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-zinc-900 transition-colors hover:bg-zinc-900 hover:text-white dark:border-white/80 dark:text-white dark:hover:bg-white dark:hover:text-black"
            >
              <DownloadIcon className="h-4 w-4" />
              Download resume
            </a>
            {socials.map(({ label, href, Icon, external }) => (
              <a
                key={label}
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="on-photo inline-flex items-center gap-2 border border-black/25 bg-white/30 px-4 py-3 font-mono text-xs font-medium text-zinc-900 backdrop-blur-md transition-colors hover:border-black/50 hover:text-black dark:border-white/15 dark:bg-transparent dark:font-normal dark:text-zinc-300 dark:hover:border-white/50 dark:hover:text-white"
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span className="hidden sm:inline">{label}</span>
              </a>
            ))}
            <a
              href="https://www.bizjournals.com/buffalo/news/2019/04/01/buffalo-2019-30-under-30-winners-wny.html"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-amber-500/50 bg-amber-50/80 px-4 py-3 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-amber-900 backdrop-blur-md transition-colors hover:border-amber-500/80 dark:border-amber-400/30 dark:bg-amber-400/10 dark:text-amber-200 dark:hover:border-amber-400/60"
            >
              <span aria-hidden>🏆</span>
              <span className="hidden sm:inline">30 Under 30</span>
              <span className="transition-transform group-hover:translate-x-0.5">↗</span>
            </a>
          </div>
        </section>

        {/* Stats */}
        <section className="reveal-3 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-black/10 bg-black/10 dark:border-white/10 dark:bg-white/10 md:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white/70 px-5 py-7 text-center backdrop-blur-md dark:bg-zinc-950/55"
            >
              <div className="font-[family-name:var(--font-sora)] text-3xl font-bold text-zinc-900 dark:text-white md:text-4xl">
                <CountUp value={s.value} />
              </div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500">
                {s.label}
              </div>
            </div>
          ))}
        </section>

        {/* Data viz */}
        <div id="numbers" className="reveal-on-scroll scroll-mt-24">
          <DataViz />
        </div>

        {/* Experience */}
        <section id="experience" className="reveal-on-scroll flex scroll-mt-24 flex-col gap-8">
          <h2 className="on-photo font-mono text-xs font-medium uppercase tracking-[0.22em] text-zinc-600 dark:text-zinc-400">
            Experience
          </h2>
          <div className="flex flex-col">
            {roles.map((r, i) => (
              <div
                key={r.org}
                className={`on-photo flex flex-col gap-2 py-7 md:flex-row md:gap-10 ${
                  i > 0 ? "border-t border-black/10 dark:border-white/10" : ""
                }`}
              >
                <div className="md:w-1/3 md:shrink-0">
                  <div className="font-[family-name:var(--font-sora)] text-base font-semibold text-zinc-900 dark:text-white">
                    {r.org}
                  </div>
                  <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.1em] text-zinc-700 dark:text-zinc-500">
                    {r.period}
                  </div>
                </div>
                <div className="md:w-2/3">
                  <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-200">
                    {r.title}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-zinc-900 dark:text-zinc-400">
                    {r.blurb}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Brands */}
        <section id="partnerships" className="reveal-on-scroll flex scroll-mt-24 flex-col gap-6">
          <h2 className="on-photo font-mono text-xs font-medium uppercase tracking-[0.22em] text-zinc-600 dark:text-zinc-400">
            Partnerships built with
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {brands.map((b) => (
              <BrandLogo key={b.name} brand={b} />
            ))}
          </div>
        </section>

        {/* In the news */}
        <section id="news" className="reveal-on-scroll flex scroll-mt-24 flex-col gap-6">
          <h2 className="on-photo font-mono text-xs font-medium uppercase tracking-[0.22em] text-zinc-600 dark:text-zinc-400">
            In the news
          </h2>
          <div className="flex flex-col">
            {press.map((p, i) => (
              <a
                key={p.href}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`on-photo group flex items-center gap-4 py-4 ${
                  i > 0 ? "border-t border-black/10 dark:border-white/10" : ""
                }`}
              >
                <span className="w-40 shrink-0 font-mono text-[11px] uppercase tracking-[0.1em] text-zinc-700 dark:text-zinc-500">
                  {p.source}
                </span>
                <span className="flex-1 font-[family-name:var(--font-sora)] text-sm font-semibold text-zinc-900 transition-colors group-hover:text-black dark:text-zinc-200 dark:group-hover:text-white sm:text-base">
                  {p.title}
                </span>
                <span className="shrink-0 text-zinc-400 transition-transform group-hover:translate-x-0.5 group-hover:text-zinc-600 dark:group-hover:text-zinc-200">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Podcasts */}
        <section id="podcasts" className="reveal-on-scroll flex scroll-mt-24 flex-col gap-6">
          <h2 className="on-photo font-mono text-xs font-medium uppercase tracking-[0.22em] text-zinc-600 dark:text-zinc-400">
            Podcasts
          </h2>
          <figure className="flex flex-col gap-2">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-black/10 dark:border-white/10">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${FEATURED_VIDEO.id}?start=${FEATURED_VIDEO.start}`}
                title={FEATURED_VIDEO.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <figcaption className="font-mono text-[11px] uppercase tracking-[0.1em] text-zinc-500">
              {FEATURED_VIDEO.title}
            </figcaption>
          </figure>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {podcasts.map((pod) => (
              <a
                key={pod.href}
                href={pod.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between gap-7 rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur-md transition-all duration-200 hover:-translate-y-1 hover:border-black/20 hover:shadow-xl hover:shadow-black/5 dark:border-white/10 dark:bg-zinc-950/55 dark:hover:border-white/20 dark:hover:shadow-black/40 sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-600 text-white shadow-lg shadow-red-500/25 transition-transform duration-200 group-hover:scale-105">
                    <svg viewBox="0 0 24 24" className="h-6 w-6 translate-x-0.5" fill="currentColor" aria-hidden>
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <span className="rounded-full border border-black/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500 dark:border-white/15">
                    {pod.role}
                  </span>
                </div>
                <div>
                  <span className="block font-[family-name:var(--font-sora)] text-lg font-semibold leading-snug text-zinc-900 dark:text-white">
                    {pod.title}
                  </span>
                  <span className="mt-2 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.1em] text-zinc-500 transition-colors group-hover:text-red-500">
                    Watch the playlist
                    <span className="transition-transform group-hover:translate-x-0.5">↗</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="on-photo flex flex-col gap-2 border-t border-black/20 pt-8 text-xs text-zinc-700 dark:border-white/10 dark:text-zinc-400">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>© {new Date().getFullYear()} John Osberg</span>
            <a
              href="mailto:john@makeacompany.ai"
              className="hover:text-zinc-700 dark:hover:text-zinc-300"
            >
              john@makeacompany.ai
            </a>
          </div>
          <div>
            Built by{" "}
            <a
              href="https://makeacompany.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:text-zinc-400 dark:decoration-zinc-700 dark:hover:text-white"
            >
              Ross @ MakeaCompany
            </a>
          </div>
        </footer>
      </main>
    </>
  );
}
