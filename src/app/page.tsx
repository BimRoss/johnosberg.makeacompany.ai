import Image from "next/image";

import Backdrop from "@/components/Backdrop";
import BookCallBtn from "@/components/BookCallBtn";
import ChromeFx from "@/components/ChromeFx";
import CountUp from "@/components/CountUp";
import CursorTrail from "@/components/CursorTrail";
import ScrollReveal from "@/components/ScrollReveal";
import SearchPalette from "@/components/SearchPalette";
import StatTilt from "@/components/StatTilt";
import Testimonials from "@/components/Testimonials";
import TypeCycle from "@/components/TypeCycle";
import CareerTimeline from "@/components/CareerTimeline";
import PartnershipsGrid from "@/components/PartnershipsGrid";
import CivicGrid from "@/components/CivicGrid";
import PressLogo from "@/components/PressLogo";
import RoleLogo from "@/components/RoleLogo";
import SkillsGrid from "@/components/SkillsGrid";
import DataViz from "@/components/DataViz";
import VideoPlayer from "@/components/VideoPlayer";
import BrandleteVideo from "@/components/BrandleteVideo";
import ThemeToggle from "@/components/ThemeToggle";
import GoToBottom from "@/components/GoToBottom";
import {
  awards,
  FEATURED_VIDEO,
  FEATURED_GUEST_VIDEO,
  podcasts,
  press,
  roles,
  SITE_NAME,
  stats,
} from "@/data/site";
import { socials } from "@/data/socials";

export default function Home() {
  return (
    <>
      <Backdrop />
      <ThemeToggle />
      <GoToBottom />
      <ScrollReveal />
      <ChromeFx />
      <SearchPalette />
      <CursorTrail />
      <main
        id="main"
        className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-10 px-5 pb-8 pt-24 sm:gap-14 sm:px-8 md:gap-20 md:pb-10 md:pt-28"
      >
        {/* Hero */}
        <section className="reveal flex flex-col items-start gap-8 md:flex-row md:items-center md:gap-12">
          <div className="shrink-0">
            <div className="relative aspect-[4/5] w-44 overflow-hidden rounded-2xl ring-1 ring-black/10 dark:ring-white/15 sm:w-52 md:w-60">
              <Image
                src="/headshot.png"
                alt={SITE_NAME}
                fill
                priority
                sizes="240px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="min-w-0">
            <h1 className="on-photo font-[family-name:var(--font-sora)] text-4xl font-extrabold leading-[0.95] tracking-tight text-zinc-900 dark:text-white sm:text-5xl md:text-6xl">
              John Osberg
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 sm:mt-5">
              <p className="on-photo font-[family-name:var(--font-sora)] text-xl font-semibold leading-relaxed text-zinc-800 dark:text-zinc-200 sm:text-2xl">
                VP of Partnerships &amp; Founding Member{" "}
                <span aria-hidden className="font-normal text-zinc-500 dark:text-zinc-400">@</span>
              </p>
              <a
                href="https://www.brandlete.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Visit brandlete.com (opens in a new tab)"
                aria-label="Brandlete (opens in a new tab)"
                className="group inline-flex items-center gap-1.5 transition-opacity hover:opacity-80"
              >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/brandlete-logo-light.png"
                alt="Brandlete"
                className="h-8 w-auto dark:hidden sm:h-9"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/brandlete-logo-dark.png"
                alt="Brandlete"
                className="hidden h-8 w-auto dark:block sm:h-9"
              />
              <span
                aria-hidden
                className="text-lg font-bold leading-none text-[#00ccff] transition-transform group-hover:translate-x-0.5 sm:text-xl"
              >
                ↗
              </span>
              </a>
            </div>
            <TypeCycle />
            <a
              href="https://www.linkedin.com/in/johnosberg/details/recommendations/"
              target="_blank"
              rel="noopener noreferrer"
              className="on-photo group mt-6 inline-flex w-fit items-center gap-2 font-mono text-sm font-bold uppercase tracking-[0.16em] text-sky-800 transition-colors hover:text-sky-600 dark:text-sky-300 dark:hover:text-sky-200 sm:mt-7 sm:text-base"
            >
              <span aria-hidden>⭐</span>
              Endorsed by 134+ top professionals
              <span className="transition-transform group-hover:translate-x-0.5">↗</span>
            </a>
          </div>
        </section>

        {/* Summary + CTA */}
        <section className="reveal-2 -mt-6 flex flex-col gap-7 md:-mt-8">
          <div className="flex flex-wrap items-center gap-3">
            <BookCallBtn />
            <span aria-hidden className="hidden w-3 shrink-0 sm:block" />
            {socials.map(({ label, href, Icon, external }) => (
              <a
                key={label}
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="on-photo inline-flex items-center gap-2 border border-[#00ccff]/55 bg-white/30 px-4 py-3 font-mono text-xs font-medium text-zinc-900 backdrop-blur-md transition-colors hover:border-[#00ccff] hover:text-black dark:border-[#00ccff]/45 dark:bg-transparent dark:font-normal dark:text-zinc-200 dark:hover:border-[#00ccff] dark:hover:text-white"
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
            <a
              href="https://westernnewyork.pga.com/usa-national-championships/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-amber-500/50 bg-amber-50/80 px-4 py-3 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-amber-900 backdrop-blur-md transition-colors hover:border-amber-500/80 dark:border-amber-400/30 dark:bg-amber-400/10 dark:text-amber-200 dark:hover:border-amber-400/60"
            >
              <span aria-hidden>🏆</span>
              <span className="hidden sm:inline">USA National Championships</span>
              <span className="transition-transform group-hover:translate-x-0.5">↗</span>
            </a>
          </div>
        </section>

        {/* Brandlete is hiring — banner */}
        <section className="reveal-2">
          <div className="hire-glow relative overflow-hidden rounded-2xl border border-[#00ccff]/40 bg-gradient-to-br from-[#00ccff]/15 via-white/70 to-[#00ccff]/10 p-5 backdrop-blur-md dark:from-[#00ccff]/15 dark:via-zinc-950/70 dark:to-[#0088cc]/15 sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <div className="flex flex-col gap-1">
                <span className="inline-flex w-fit items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[#0088cc] dark:text-[#00ccff]">
                  <span aria-hidden className="hire-dot inline-block h-2 w-2 rounded-full bg-[#00ccff] shadow-[0_0_8px_2px_rgba(0,204,255,0.8)]" />
                  Now hiring
                </span>
                <h2 className="on-photo font-[family-name:var(--font-sora)] text-2xl font-extrabold leading-tight tracking-tight text-zinc-900 dark:text-white sm:text-3xl">
                  Brandlete is hiring!
                </h2>
                <p className="on-photo text-sm font-medium text-zinc-700 dark:text-zinc-300 sm:text-[15px]">
                  Two ways in.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:shrink-0 sm:flex-row sm:items-center">
                <a
                  href="https://www.brandlete.com/playmakers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#00ccff] px-6 py-3.5 font-[family-name:var(--font-sora)] text-sm font-bold text-zinc-950 shadow-lg shadow-[#00ccff]/30 transition-all hover:-translate-y-0.5 hover:bg-[#33d6ff] hover:shadow-xl hover:shadow-[#00ccff]/40 sm:text-base"
                >
                  Apply to the Playmaker Network
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                </a>
                <a
                  href="https://www.linkedin.com/jobs/view/4454747810"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#00ccff] bg-transparent px-6 py-3.5 font-[family-name:var(--font-sora)] text-sm font-bold text-[#0088cc] backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-[#00ccff]/10 dark:text-[#00ccff] sm:text-base"
                >
                  See the open role we&apos;re hiring for
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Brandlete — #1 focus */}
        <section id="brandlete" className="reveal-3 flex scroll-mt-24 flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h2 className="on-photo font-[family-name:var(--font-sora)] text-3xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
              What I&apos;m co-building at Brandlete
            </h2>
            <p className="on-photo font-[family-name:var(--font-sora)] text-lg font-semibold text-[#0088cc] dark:text-[#00ccff] sm:text-xl">
              The Athlete Development Driven Sports Program Operating System.
            </p>
            <p className="on-photo max-w-3xl text-base font-medium leading-7 text-zinc-900 dark:font-normal dark:text-zinc-300 sm:text-[17px] sm:leading-8">
              One connected platform for the coaches, athletes, families, and
              organizations that run youth sports. Development plans, insights and
              feedback, tournaments, communications, registration, and full athlete
              profiles, plus Max, the built-in AI assistant.
            </p>
          </div>

          {/* What's inside — Brandlete-blue outlined pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { label: "Development Plans", href: "https://brandlete.com/platform/athlete-development" },
              { label: "Insights & Feedback", href: "https://brandlete.com/platform/intelligence" },
              { label: "Tournaments", href: "https://brandlete.com/capabilities/tournament-director" },
              { label: "Communications", href: "https://brandlete.com/capabilities/communication-engagement" },
              { label: "Registration", href: "https://brandlete.com/capabilities/registration-forms" },
              { label: "Athlete Profiles", href: "https://brandlete.com/capabilities/athlete-development-record" },
              { label: "Max · AI Assistant", href: "https://brandlete.com/platform/max" },
            ].map((f) => (
              <a
                key={f.label}
                href={f.href}
                target="_blank"
                rel="noopener noreferrer"
                title={`${f.label} on brandlete.com (opens in a new tab)`}
                className="inline-flex items-center rounded-full border border-[#00ccff]/45 bg-[#00ccff]/5 px-3.5 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-zinc-800 backdrop-blur-md transition-colors hover:border-[#00ccff] hover:bg-[#00ccff]/15 hover:text-black dark:text-zinc-200 dark:hover:text-white"
              >
                {f.label}
              </a>
            ))}
          </div>

          <figure className="flex flex-col gap-2">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-black/10 shadow-xl shadow-black/10 dark:border-white/10 dark:shadow-black/40">
              <BrandleteVideo
                src="/brandlete.mp4"
                poster="/brandlete-poster.jpg"
                title="Brandlete — the athlete development driven sports program operating system"
              />
            </div>
            <figcaption className="font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.85),0_0_10px_rgba(0,0,0,0.6)]">
              Everything your program and athletes need to perform on and off the field.
            </figcaption>
          </figure>
        </section>

        {/* Stats */}
        <section className="reveal-3 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-black/10 bg-black/10 dark:border-white/10 dark:bg-white/10 md:grid-cols-4">
          {stats.map((s) => (
            <StatTilt key={s.label}>
              <div className="flex h-full flex-col items-center justify-center bg-white px-5 py-7 text-center dark:bg-zinc-900">
                <div className="font-[family-name:var(--font-sora)] text-3xl font-bold text-zinc-900 dark:text-white md:text-4xl">
                  <CountUp value={s.value} />
                </div>
                <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-600 dark:text-zinc-400">
                  {s.label}
                </div>
              </div>
            </StatTilt>
          ))}
        </section>

        {/* Data viz */}
        <div id="numbers" className="reveal-on-scroll scroll-mt-24">
          <DataViz />
        </div>

        {/* Career timeline */}
        <section id="timeline" className="reveal-on-scroll flex scroll-mt-24 flex-col gap-6">
          <h2 className="on-photo font-mono text-sm font-semibold uppercase tracking-[0.22em] text-zinc-800 dark:text-zinc-300">
            Career at a glance
          </h2>
          <CareerTimeline />
        </section>

        {/* Experience */}
        <section id="experience" className="reveal-on-scroll flex scroll-mt-24 flex-col gap-8">
          <h2 className="on-photo font-mono text-sm font-semibold uppercase tracking-[0.22em] text-zinc-800 dark:text-zinc-300">
            Experience
          </h2>
          <div className="flex flex-col">
            {roles.map((r, i) => (
              <div
                key={r.org}
                className={`on-photo flex flex-col gap-2 py-5 md:flex-row md:gap-10 md:py-7 ${
                  i > 0 ? "border-t border-black/10 dark:border-white/10" : ""
                }`}
              >
                <div className="flex items-start gap-3 md:w-1/3 md:shrink-0">
                  <RoleLogo role={r} />
                  <div className="min-w-0">
                    <div className="font-[family-name:var(--font-sora)] text-lg font-semibold text-zinc-900 dark:text-white">
                      {r.org}
                    </div>
                    <div className="mt-1 font-mono text-xs uppercase tracking-[0.1em] text-zinc-700 dark:text-zinc-400">
                      {r.period}
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <div className="text-base font-semibold text-zinc-900 dark:text-zinc-200">
                    {r.title}
                  </div>
                  {r.blurb && (
                    <p className="mt-2 text-[15px] leading-7 text-zinc-900 dark:text-zinc-300">
                      {r.blurb}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tools & technology */}
        <section id="skills" className="reveal-on-scroll flex scroll-mt-24 flex-col gap-6">
          <h2 className="on-photo font-mono text-sm font-semibold uppercase tracking-[0.22em] text-zinc-800 dark:text-zinc-300">
            Tools & technology
          </h2>
          <SkillsGrid />
        </section>

        {/* Brands */}
        <section id="partnerships" className="reveal-on-scroll flex scroll-mt-24 flex-col gap-6">
          <h2 className="on-photo font-mono text-sm font-semibold uppercase tracking-[0.22em] text-zinc-800 dark:text-zinc-300">
            Partnerships built with
          </h2>
          <PartnershipsGrid />
        </section>

        {/* Civic & nonprofit */}
        <section id="civic" className="reveal-on-scroll flex scroll-mt-24 flex-col gap-6">
          <h2 className="on-photo font-mono text-sm font-semibold uppercase tracking-[0.22em] text-zinc-800 dark:text-zinc-300">
            Civic leadership & volunteer work
          </h2>
          <CivicGrid />
        </section>

        {/* Recommendations */}
        <section id="recommendations" className="reveal-on-scroll flex scroll-mt-24 flex-col gap-6">
          <div className="flex flex-col gap-1">
            <h2 className="on-photo font-mono text-sm font-semibold uppercase tracking-[0.22em] text-zinc-800 dark:text-zinc-300">
              Endorsements
            </h2>
            <p className="on-photo font-[family-name:var(--font-sora)] text-lg font-bold text-zinc-950 dark:text-white sm:text-xl">
              Endorsed by 134+ top professionals.
            </p>
          </div>
          <Testimonials />
        </section>

        {/* In the news */}
        <section id="news" className="reveal-on-scroll flex scroll-mt-24 flex-col gap-6">
          <h2 className="on-photo font-mono text-sm font-semibold uppercase tracking-[0.22em] text-zinc-800 dark:text-zinc-300">
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
                <span className="flex w-32 shrink-0 items-center gap-2 sm:w-44">
                  <PressLogo item={p} />
                  <span className="min-w-0 font-mono text-[10px] uppercase leading-tight tracking-[0.1em] text-zinc-800 dark:text-zinc-400">
                    {p.source}
                  </span>
                </span>
                <span className="flex-1 font-[family-name:var(--font-sora)] text-base font-semibold text-zinc-900 transition-colors group-hover:text-black dark:text-zinc-200 dark:group-hover:text-white sm:text-lg">
                  {p.title}
                </span>
                <span className="shrink-0 text-zinc-400 transition-transform group-hover:translate-x-0.5 group-hover:text-zinc-600 dark:group-hover:text-zinc-200">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Awards & honors */}
        <section id="awards" className="reveal-on-scroll flex scroll-mt-24 flex-col gap-6">
          <h2 className="on-photo font-mono text-sm font-semibold uppercase tracking-[0.22em] text-zinc-800 dark:text-zinc-300">
            Awards & honors
          </h2>
          <div className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">
            {awards.map((a, i) => (
              <div
                key={`${a.org}-${i}`}
                className="on-photo border-t border-black/10 py-3 dark:border-white/10"
              >
                <div className="flex flex-col gap-1.5">
                  {a.items.map((it, j) => (
                    <div key={`${it.title}-${j}`} className="flex items-baseline justify-between gap-4">
                      <span className="min-w-0 font-[family-name:var(--font-sora)] text-[15px] font-semibold leading-snug text-zinc-900 dark:text-white">
                        {it.title}
                      </span>
                      <span className="shrink-0 font-mono text-[11px] font-semibold text-[#0088cc] dark:text-[#00ccff]">
                        {it.year}
                      </span>
                    </div>
                  ))}
                </div>
                <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.1em] text-zinc-600 dark:text-zinc-400">
                  {a.org}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Podcasts */}
        <section id="podcasts" className="reveal-on-scroll flex scroll-mt-24 flex-col gap-6">
          <h2 className="on-photo font-mono text-sm font-semibold uppercase tracking-[0.22em] text-zinc-800 dark:text-zinc-300">
            Podcasts
          </h2>
          <figure className="flex flex-col gap-2">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-black/10 dark:border-white/10">
              <VideoPlayer id={FEATURED_VIDEO.id} start={FEATURED_VIDEO.start} title={FEATURED_VIDEO.title} />
            </div>
            <figcaption className="font-mono text-[11px] uppercase tracking-[0.1em] text-zinc-500 dark:text-white">
              {FEATURED_VIDEO.title}
            </figcaption>
          </figure>
          <figure className="flex flex-col gap-2">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-black/10 dark:border-white/10">
              <VideoPlayer id={FEATURED_GUEST_VIDEO.id} start={FEATURED_GUEST_VIDEO.start} title={FEATURED_GUEST_VIDEO.title} />
            </div>
            <figcaption className="font-mono text-[11px] uppercase tracking-[0.1em] text-zinc-500 dark:text-white">
              {FEATURED_GUEST_VIDEO.title}
            </figcaption>
          </figure>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {podcasts.map((pod) => (
              <a
                key={pod.href}
                href={pod.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-white/70 backdrop-blur-md transition-all duration-200 hover:-translate-y-1 hover:border-black/20 hover:shadow-xl hover:shadow-black/5 dark:border-white/10 dark:bg-zinc-950/55 dark:hover:border-white/20 dark:hover:shadow-black/40"
              >
                <div className="relative aspect-video w-full overflow-hidden border-b border-black/10 dark:border-white/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={
                      pod.thumb.startsWith("/")
                        ? pod.thumb
                        : `https://img.youtube.com/vi/${pod.thumb}/maxresdefault.jpg`
                    }
                    alt={pod.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/40">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-600 text-white shadow-lg shadow-red-500/30 transition-transform duration-200 group-hover:scale-110">
                      <svg viewBox="0 0 24 24" className="h-6 w-6 translate-x-0.5" fill="currentColor" aria-hidden>
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </span>
                  <span className="absolute right-3 top-3 rounded-full border border-white/25 bg-black/45 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-white backdrop-blur-sm">
                    {pod.role}
                  </span>
                </div>
                <div className="p-6 sm:p-7">
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
        <footer className="on-photo flex flex-col gap-2 border-t border-black/20 pt-8 pb-24 text-xs text-zinc-700 dark:border-white/10 dark:text-white">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>© {new Date().getFullYear()} John Osberg</span>
            <a
              href="mailto:john@brandlete.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-700 dark:hover:text-zinc-300"
            >
              john@brandlete.com
            </a>
          </div>
          <p className="flex flex-wrap items-center gap-x-1 text-[11px] text-zinc-600 dark:text-white">
            Site built in plain language with the AI agent &ldquo;Ross&rdquo; from{" "}
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
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                ↗
              </span>
            </a>
          </p>
        </footer>
      </main>
    </>
  );
}
