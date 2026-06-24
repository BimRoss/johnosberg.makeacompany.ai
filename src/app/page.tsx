import Image from "next/image";

import Backdrop from "@/components/Backdrop";
import ThemeToggle from "@/components/ThemeToggle";
import {
  brands,
  HERO_LABEL,
  HERO_SUMMARY,
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
            <p className="border-l-2 border-black/20 pl-3 font-mono text-[10px] font-medium uppercase leading-relaxed tracking-[0.22em] text-zinc-500 dark:border-white/25 dark:text-zinc-400 sm:text-xs">
              {HERO_LABEL}
            </p>
            <h1 className="mt-4 font-[family-name:var(--font-sora)] text-5xl font-extrabold leading-[0.95] tracking-tight text-zinc-900 dark:text-white sm:text-6xl md:text-7xl">
              John Osberg
            </h1>
            <p className="mt-3 font-[family-name:var(--font-sora)] text-lg font-semibold text-zinc-600 dark:text-zinc-300 sm:text-xl">
              Head of Growth &amp; Partnerships · Buffalo, NY
            </p>
          </div>
        </section>

        {/* Summary + CTA */}
        <section className="reveal-2 -mt-12 flex flex-col gap-7 md:-mt-16">
          <p className="max-w-3xl text-[15px] leading-7 text-zinc-700 dark:text-zinc-300 sm:text-lg sm:leading-8">
            {HERO_SUMMARY}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/resume.pdf"
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
                className="inline-flex items-center gap-2 border border-black/15 px-4 py-3 font-mono text-xs text-zinc-600 transition-colors hover:border-black/40 hover:text-zinc-900 dark:border-white/15 dark:text-zinc-300 dark:hover:border-white/50 dark:hover:text-white"
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span className="hidden sm:inline">{label}</span>
              </a>
            ))}
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
                {s.value}
              </div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500">
                {s.label}
              </div>
            </div>
          ))}
        </section>

        {/* Experience */}
        <section className="flex flex-col gap-8">
          <h2 className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-zinc-500">
            Experience
          </h2>
          <div className="flex flex-col">
            {roles.map((r, i) => (
              <div
                key={r.org}
                className={`flex flex-col gap-2 py-7 md:flex-row md:gap-10 ${
                  i > 0 ? "border-t border-black/10 dark:border-white/10" : ""
                }`}
              >
                <div className="md:w-1/3 md:shrink-0">
                  <div className="font-[family-name:var(--font-sora)] text-base font-semibold text-zinc-900 dark:text-white">
                    {r.org}
                  </div>
                  <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.1em] text-zinc-500">
                    {r.period}
                  </div>
                </div>
                <div className="md:w-2/3">
                  <div className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                    {r.title}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {r.blurb}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Brands */}
        <section className="flex flex-col gap-6">
          <h2 className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-zinc-500">
            Partnerships built with
          </h2>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {brands.map((b) => (
              <span
                key={b}
                className="font-[family-name:var(--font-sora)] text-base font-medium text-zinc-700 dark:text-zinc-300 md:text-lg"
              >
                {b}
              </span>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="flex flex-col gap-2 border-t border-black/10 pt-8 text-xs text-zinc-500 dark:border-white/10">
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
