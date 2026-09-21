import Image from "next/image";

import Backdrop from "@/components/Backdrop";
import BookCallBtn from "@/components/BookCallBtn";
import ChromeFx from "@/components/ChromeFx";
import CountUp from "@/components/CountUp";
import ScrollReveal from "@/components/ScrollReveal";
import SearchPalette from "@/components/SearchPalette";
import Testimonials from "@/components/Testimonials";
import PartnershipsGrid from "@/components/PartnershipsGrid";
import CivicGrid from "@/components/CivicGrid";
import PressLogo from "@/components/PressLogo";
import RoleLogo from "@/components/RoleLogo";
import AwardLogo from "@/components/AwardLogo";
import PodcastThumb from "@/components/PodcastThumb";
import Gallery from "@/components/Gallery";
import StatIcon from "@/components/StatIcon";
import BrandleteVideo from "@/components/BrandleteVideo";
import ThemeToggle from "@/components/ThemeToggle";
import LinkedInBadge from "@/components/LinkedInBadge";
import {
  awards,
  podcasts,
  press,
  roles,
  SITE_NAME,
  stats,
} from "@/data/site";
import { LinkedInIcon, NewsletterIcon } from "@/data/socials";

export default function Home() {
  return (
    <>
      <Backdrop />
      <ThemeToggle />
      <SearchPalette />
      <ScrollReveal />
      <ChromeFx />
      <main
        id="main"
        className="relative z-10 mx-auto flex w-full max-w-4xl flex-col gap-20 px-5 pb-8 pt-20 sm:px-8 md:gap-24 md:pb-10 md:pt-28"
      >
        {/* Hero */}
        <section className="reveal flex flex-col items-center gap-10 md:flex-row md:items-center md:gap-14">
          {/* Text column */}
          <div className="order-2 flex min-w-0 flex-col items-center text-center md:order-1 md:flex-1">
            <span className="label-shimmer font-mono text-[11px] font-bold uppercase tracking-[0.26em] sm:text-xs">
              Partnerships · Growth · Sports Tech
            </span>
            <h1 className="on-photo mt-4 font-[family-name:var(--font-sora)] text-5xl font-extrabold leading-[0.9] tracking-tight text-zinc-900 dark:text-white sm:text-6xl md:text-[4.4rem]">
              <a
                href="https://www.linkedin.com/in/johnosberg"
                target="_blank"
                rel="noopener noreferrer"
                title="John Osberg on LinkedIn (opens in a new tab)"
                className="name-hero transition-opacity hover:opacity-80"
              >
                John Osberg
              </a>
            </h1>
            <p className="on-photo mt-5 font-[family-name:var(--font-sora)] text-xl font-semibold leading-snug text-[#015f92] dark:text-[#00ccff] sm:text-2xl">
              Founding Director &amp; VP Partnerships{" "}
              <span className="inline-flex items-center gap-1.5 whitespace-nowrap align-middle">
                <span aria-hidden className="text-base font-normal text-[#0088cc]/70 dark:text-[#00ccff]/70 sm:text-lg">@</span>{" "}
                <a
                  href="https://www.brandlete.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Visit brandlete.com (opens in a new tab)"
                  aria-label="Brandlete (opens in a new tab)"
                  className="group inline-flex items-center gap-1.5 align-middle transition-opacity hover:opacity-80"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/brandlete-logo-light.png"
                    alt="Brandlete"
                    className="inline h-7 w-auto dark:hidden sm:h-8"
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/brandlete-logo-dark.png"
                    alt="Brandlete"
                    className="hidden h-7 w-auto dark:block sm:h-8"
                  />
                </a>
              </span>
            </p>
            <p className="on-photo mt-5 max-w-md text-base leading-7 text-zinc-700 dark:text-white">
              16+ years turning relationships into revenue across sports, tech, and nonprofit.
            </p>

            {/* Primary actions */}
            <div className="mt-8 flex flex-col items-center">
              <BookCallBtn />
              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
                <a
                  href="https://www.linkedin.com/in/johnosberg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#0a66c2] transition-colors hover:text-[#084a8f] dark:text-[#66b2ff] dark:hover:text-[#99ccff]"
                >
                  <LinkedInIcon className="h-4 w-4 shrink-0" />
                  Connect on LinkedIn
                  <span className="transition-transform group-hover:translate-x-0.5">↗</span>
                </a>
                <a
                  href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7495912172493975553"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#0088cc] transition-colors hover:text-[#00b8e6] dark:text-[#00ccff] dark:hover:text-[#66e0ff]"
                >
                  <NewsletterIcon className="h-4 w-4 shrink-0" />
                  Newsletter
                  <span className="transition-transform group-hover:translate-x-0.5">↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Photo column */}
          <div className="order-1 shrink-0 md:order-2">
            <div className="relative aspect-[4/5] w-48 overflow-hidden rounded-2xl shadow-2xl shadow-black/40 ring-1 ring-black/10 dark:ring-white/15 sm:w-56 md:w-72">
              <Image
                src="/headshot-v2.png"
                alt={SITE_NAME}
                fill
                priority
                sizes="288px"
                className="object-cover"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-[#00ccff]/25"
              />
            </div>
          </div>
        </section>

        {/* Brandlete */}
        <section id="brandlete" className="reveal-on-scroll flex scroll-mt-24 flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h2 className="on-photo font-[family-name:var(--font-sora)] text-3xl font-bold leading-tight tracking-tight text-[#0088cc] dark:text-[#00ccff] sm:text-4xl">
              What we&apos;ve built at Brandlete
            </h2>
            <p className="on-photo font-[family-name:var(--font-sora)] text-lg font-semibold text-black dark:text-white sm:text-xl">
              The Athlete Development Driven Sports Program Operating System.
            </p>
            {/* Who it's for — icon chips replace the paragraph */}
            <ul className="flex flex-wrap gap-2">
              {[
                {
                  label: "Coaches",
                  icon: (
                    <>
                      <path d="M3 11v2a1 1 0 0 0 1 1h2l4 3V7L6 10H4a1 1 0 0 0-1 1Z" />
                      <path d="M14 9a4 4 0 0 1 0 6" />
                    </>
                  ),
                },
                {
                  label: "Athletes",
                  icon: (
                    <>
                      <circle cx="12" cy="15" r="4" />
                      <path d="M9 11 7 4M15 11l2-7M10.5 15h3" />
                    </>
                  ),
                },
                {
                  label: "Families",
                  icon: (
                    <>
                      <circle cx="9" cy="9" r="3" />
                      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
                      <path d="M16 6.2a3 3 0 0 1 0 5.6M17.5 19a5.5 5.5 0 0 0-3-4.9" />
                    </>
                  ),
                },
                {
                  label: "Organizations",
                  icon: (
                    <>
                      <path d="M5 21V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v16" />
                      <path d="M13 21V9h5a1 1 0 0 1 1 1v11" />
                      <path d="M3 21h18M8 8h2M8 12h2M8 16h2" />
                    </>
                  ),
                },
              ].map((c) => (
                <li
                  key={c.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white/50 px-3 py-1.5 font-[family-name:var(--font-sora)] text-[13px] font-semibold text-zinc-800 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-100"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.6}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                    className="h-4 w-4 text-[#0088cc] dark:text-[#00ccff]"
                  >
                    {c.icon}
                  </svg>
                  {c.label}
                </li>
              ))}
              <li className="inline-flex items-center gap-1.5 rounded-full border border-[#00ccff]/40 bg-[#00ccff]/[0.1] px-3 py-1.5 font-[family-name:var(--font-sora)] text-[13px] font-bold text-[#0088cc] dark:text-[#00ccff]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.6}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                  className="h-4 w-4"
                >
                  <path d="M12 3l1.8 4.5L18 9l-4.2 1.5L12 15l-1.8-4.5L6 9l4.2-1.5L12 3Z" />
                  <path d="M18 15l.6 1.6L20.5 17l-1.9.6L18 19.5l-.6-1.9L15.5 17l1.9-.4L18 15Z" />
                </svg>
                Max, the AI assistant
              </li>
            </ul>
          </div>

          <figure className="flex flex-col gap-2">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-black/10 shadow-xl shadow-black/10 dark:border-white/10 dark:shadow-black/40">
              <BrandleteVideo
                src="/brandlete.mp4"
                poster="/brandlete-poster.jpg"
                title="Brandlete — the athlete development driven sports program operating system"
              />
            </div>
          </figure>

          {/* Hiring — one calm CTA */}
          <div className="flex flex-col items-center gap-3 rounded-xl border border-[#00ccff]/40 bg-[#00ccff]/[0.07] p-4 sm:flex-row sm:items-center sm:justify-center sm:gap-5">
            <div className="flex items-center gap-2">
              <span aria-hidden className="hire-dot inline-block h-1.5 w-1.5 rounded-full bg-[#00ccff] shadow-[0_0_8px_2px_rgba(0,204,255,0.8)]" />
              <span className="font-[family-name:var(--font-sora)] text-base font-bold text-[#0088cc] dark:text-[#00ccff]">
                Brandlete is hiring.
              </span>
            </div>
            <a
              href="https://www.brandlete.com/playmakers"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-fit items-center justify-center gap-2 rounded-full bg-[#00ccff] px-5 py-2.5 font-[family-name:var(--font-sora)] text-[13px] font-bold text-zinc-950 transition-all hover:-translate-y-0.5 hover:bg-[#33d6ff]"
            >
              Join the Playmaker Network
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </section>

        {/* The Numbers */}
        <section className="reveal-on-scroll flex flex-col gap-5">
          <h2 className="eyebrow on-photo">The Numbers</h2>
          <div className="mx-auto flex w-full max-w-2xl flex-wrap justify-center gap-2">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex w-[calc(50%-0.25rem)] flex-col items-center justify-center rounded-lg border border-black/10 bg-white/40 px-3 py-4 text-center backdrop-blur-sm md:w-[calc(25%-0.375rem)] dark:border-white/10 dark:bg-white/[0.03]"
              >
                <StatIcon icon={s.icon} className="mb-1.5 h-5 w-5 text-[#0088cc]/90 dark:text-[#00ccff]/90" />
                <div className="font-[family-name:var(--font-sora)] text-2xl font-bold text-[#0088cc] dark:text-[#00ccff] md:text-[1.7rem]">
                  {/\d/.test(s.value) ? <CountUp value={s.value} /> : s.value}
                </div>
                <div className="mt-1 font-mono text-[9px] font-medium uppercase tracking-[0.1em] text-zinc-500 dark:text-zinc-400">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="reveal-on-scroll flex scroll-mt-24 flex-col gap-8">
          <h2 className="eyebrow on-photo">Experience</h2>
          <div className="flex flex-col">
            {roles.slice(0, -4).map((r, i) => (
              <div
                key={r.org}
                className={`on-photo flex flex-col gap-1 py-4 md:flex-row md:items-center md:gap-6 ${
                  i > 0 ? "border-t border-black/10 dark:border-white/10" : ""
                }`}
              >
                <div className="flex min-w-0 items-center gap-3 md:w-72 md:shrink-0">
                  <RoleLogo role={r} />
                  <div className="min-w-0">
                    <div
                      className={`font-[family-name:var(--font-sora)] text-lg font-semibold ${
                        r.org.includes("Brandlete")
                          ? "text-[#0088cc] dark:text-[#00ccff]"
                          : "text-zinc-900 dark:text-white"
                      }`}
                    >
                      {r.org}
                    </div>
                    <div className="mt-1 font-mono text-xs uppercase tracking-[0.1em] text-zinc-700 dark:text-zinc-400">
                      {r.period}
                    </div>
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[15px] font-semibold text-zinc-900 dark:text-zinc-200">
                    {r.title}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Early career — condensed 2-up grid to save vertical space */}
          <div className="flex flex-col gap-3 border-t border-black/10 pt-5 dark:border-white/10">
          <h3 className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
            Early Career
          </h3>
          <div className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
            {roles.slice(-4).map((r) => (
              <div key={r.org} className="on-photo flex min-w-0 items-center gap-3">
                <RoleLogo role={r} />
                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-2">
                    <span className="font-[family-name:var(--font-sora)] text-base font-semibold text-zinc-900 dark:text-white">
                      {r.org}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-zinc-500 dark:text-zinc-400">
                      {r.period}
                    </span>
                  </div>
                  <div className="truncate text-[13px] font-medium text-zinc-700 dark:text-zinc-300">
                    {r.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
        </section>

        {/* Partnerships */}
        <section id="partnerships" className="reveal-on-scroll flex scroll-mt-24 flex-col gap-6">
          <h2 className="eyebrow on-photo">Partnerships built with</h2>
          <PartnershipsGrid />
        </section>

        {/* Civic & nonprofit */}
        <section id="civic" className="reveal-on-scroll flex scroll-mt-24 flex-col gap-6">
          <h2 className="eyebrow on-photo">Civic leadership &amp; volunteer work</h2>
          <CivicGrid />
        </section>

        {/* Endorsements */}
        <section id="recommendations" className="reveal-on-scroll flex scroll-mt-24 flex-col gap-6">
          <div className="flex flex-col gap-1">
            <h2 className="eyebrow on-photo">Endorsements</h2>
            <p className="on-photo font-[family-name:var(--font-sora)] text-lg font-bold text-zinc-950 dark:text-white sm:text-xl">
              Endorsed by 137+ leaders.
            </p>
          </div>
          <Testimonials />
        </section>

        {/* Recognized — news, awards, podcasts folded into one */}
        <section id="recognized" className="reveal-on-scroll flex scroll-mt-24 flex-col gap-8">
          <h2 className="eyebrow on-photo">Recognized</h2>

          {/* In the news */}
          <div className="flex flex-col gap-2.5">
            <h3 className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
              In the news
            </h3>
            <div className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">
              {press.map((p) => (
                <a
                  key={p.href}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="on-photo group flex items-center gap-2.5 border-t border-black/10 py-1.5 dark:border-white/10"
                >
                  <span className="flex w-32 shrink-0 items-center gap-1.5 sm:w-40">
                    <PressLogo item={p} />
                    <span className="min-w-0 truncate font-mono text-[10px] uppercase leading-tight tracking-[0.1em] text-zinc-800 dark:text-zinc-400">
                      {p.source}
                    </span>
                  </span>
                  <span
                    className={`flex-1 font-[family-name:var(--font-sora)] text-[13px] font-semibold leading-tight transition-colors ${
                      p.title.includes("Brandlete")
                        ? "text-[#0088cc] dark:text-[#00ccff]"
                        : "text-zinc-900 group-hover:text-black dark:text-zinc-200 dark:group-hover:text-white"
                    }`}
                  >
                    {p.title}
                  </span>
                  <span className="shrink-0 text-zinc-400 transition-transform group-hover:translate-x-0.5">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Awards & honors */}
          <div className="flex flex-col gap-2.5">
            <h3 className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
              Awards &amp; honors
            </h3>
            <div className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">
              {awards.map((a, i) => (
                <div
                  key={`${a.org}-${i}`}
                  className="on-photo flex items-start gap-3 border-t border-black/10 py-2.5 dark:border-white/10"
                >
                  <a href={a.url} target="_blank" rel="noopener noreferrer" aria-label={a.org} className="shrink-0">
                    <AwardLogo award={a} />
                  </a>
                  <div className="min-w-0 flex-1">
                    <a
                      href={a.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-fit font-mono text-[10px] uppercase tracking-[0.1em] text-zinc-600 transition-colors hover:text-[#0088cc] dark:text-zinc-400 dark:hover:text-[#00ccff]"
                    >
                      {a.org}
                    </a>
                    <div className="mt-1 flex flex-col gap-1">
                      {a.items.map((it, j) => (
                        <div key={`${it.title}-${j}`} className="flex items-baseline justify-between gap-4">
                          <span className="min-w-0 font-[family-name:var(--font-sora)] text-[13px] font-semibold leading-tight text-zinc-900 dark:text-white">
                            {it.title}
                          </span>
                          <span className="shrink-0 font-mono text-[11px] font-semibold text-[#0088cc] dark:text-[#00ccff]">
                            {it.year}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Podcasts */}
          <div className="flex flex-col gap-2.5">
            <h3 className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
              Podcasts
            </h3>
            <div className="flex flex-col">
              {podcasts.map((pod, i) => (
                <a
                  key={pod.href}
                  href={pod.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`on-photo group flex items-center gap-4 py-2 ${
                    i > 0 ? "border-t border-black/10 dark:border-white/10" : ""
                  }`}
                >
                  <PodcastThumb pod={pod} />
                  <span className="min-w-0 flex-1">
                    <span className="block font-[family-name:var(--font-sora)] text-[13px] font-semibold text-zinc-900 transition-colors group-hover:text-black dark:text-zinc-200 dark:group-hover:text-white">
                      {pod.title}
                    </span>
                    <span className="mt-0.5 block font-mono text-[10px] uppercase tracking-[0.1em] text-zinc-500 dark:text-zinc-400">
                      {pod.role}
                    </span>
                  </span>
                  <span className="shrink-0 text-zinc-400 transition-transform group-hover:translate-x-0.5">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Moments — a drifting filmstrip of life & career photos */}
        <section id="moments" className="reveal-on-scroll flex scroll-mt-24 flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="eyebrow on-photo">Moments</h2>
            <p className="on-photo max-w-2xl text-sm leading-6 text-zinc-700 dark:text-zinc-300">
              A few from along the way. Tap any photo to open it, then swipe or arrow through.
            </p>
          </div>
          <Gallery />
        </section>

        {/* Connect */}
        <section id="connect" className="reveal-on-scroll flex scroll-mt-24 flex-col items-center gap-6">
          <h2 className="eyebrow on-photo">Connect</h2>
          <LinkedInBadge />
        </section>

        {/* Footer */}
        <footer className="on-photo flex flex-col items-center gap-3 border-t border-black/20 pt-8 pb-24 text-xs text-zinc-700 dark:border-white/10 dark:text-white">
          <a
            href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7495912172493975553"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0088cc] transition-colors hover:text-[#00b8e6] dark:text-[#00ccff]"
          >
            Newsletter: &ldquo;Bigger Than Sports&rdquo;
            <span aria-hidden className="transition-transform group-hover:translate-x-0.5">↗</span>
          </a>
          <span>© {new Date().getFullYear()} John Osberg</span>
          <p className="flex flex-wrap items-center justify-center gap-x-1 text-[11px] text-zinc-600 dark:text-white">
            Built in plain language with the AI agent &ldquo;Ross&rdquo; from{" "}
            <a
              href="https://makeacompany.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 font-semibold text-[#0088cc] transition-colors hover:text-[#00b8e6] dark:text-[#00ccff] dark:hover:text-[#66e0ff]"
            >
              <Image
                src="/logos/makeacompany.png"
                alt=""
                width={16}
                height={16}
                className="h-4 w-4 rounded-full bg-white object-contain p-[1px]"
              />
              MakeaCompany
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">↗</span>
            </a>
          </p>
        </footer>
      </main>
    </>
  );
}
