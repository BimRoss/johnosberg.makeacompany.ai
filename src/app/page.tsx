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
import PressList from "@/components/PressList";
import RoleLogo from "@/components/RoleLogo";
import AwardsList from "@/components/AwardsList";
import StatIcon from "@/components/StatIcon";
import TiltCard from "@/components/TiltCard";
import TypeCycle from "@/components/TypeCycle";
import BrandleteVideo from "@/components/BrandleteVideo";
import ClutchFactor from "@/components/ClutchFactor";
import ClutchFactorCard from "@/components/ClutchFactorCard";
import ThemeToggle from "@/components/ThemeToggle";
import {
  roles,
  SITE_NAME,
  stats,
} from "@/data/site";
import { LinkedInIcon } from "@/data/socials";

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
        className="relative z-10 mx-auto flex w-full max-w-4xl flex-col gap-8 px-5 pb-8 pt-20 sm:px-8 md:gap-9 md:pb-10 md:pt-28"
      >
        {/* Hero */}
        <section className="reveal flex flex-col items-center gap-5 md:flex-row md:items-center md:gap-8">
          {/* Text column */}
          <div className="order-2 flex min-w-0 flex-col items-center text-center md:order-1 md:flex-1">
            <span className="label-shimmer font-mono text-[11px] font-bold uppercase tracking-[0.26em] sm:text-xs">
              Partnerships · Growth · Sports Tech
            </span>
            <h1 className="on-photo mt-3 font-[family-name:var(--font-sora)] text-5xl font-extrabold leading-[0.9] tracking-tight text-zinc-900 dark:text-white sm:text-6xl md:text-[3.75rem]">
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
            <TypeCycle />
            <p className="on-photo mt-3 font-[family-name:var(--font-sora)] text-xl font-semibold leading-snug text-[#015f92] dark:text-[#00ccff] sm:text-2xl">
              Founding Director x VP Partnerships
              <span className="mt-2 flex items-center justify-center gap-1.5 whitespace-nowrap">
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

            {/* Primary actions */}
            <div className="mt-4 flex w-full flex-col items-center">
              <BookCallBtn />
              {/* The three "features" — Clutch Factor badge + the two links —
                  grouped inside one tinted panel so they read as a module with
                  real structure instead of three loose elements. */}
              <div className="mt-4 flex w-full max-w-sm flex-col items-center gap-2.5 rounded-2xl border border-[#00ccff]/20 bg-gradient-to-b from-white/60 to-white/30 p-3 backdrop-blur-sm dark:border-[#00ccff]/20 dark:from-white/[0.06] dark:to-white/[0.02]">
                {/* Clutch Factor — nTangible assessment */}
                <ClutchFactor />
                <a
                  href="https://www.linkedin.com/in/johnosberg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#0a66c2]/25 bg-[#0a66c2]/[0.08] px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#0a66c2] transition-colors hover:bg-[#0a66c2]/[0.14] dark:border-[#66b2ff]/25 dark:bg-[#66b2ff]/[0.08] dark:text-[#99ccff] dark:hover:bg-[#66b2ff]/[0.14]"
                >
                  <LinkedInIcon className="h-6 w-6 shrink-0" />
                  Connect on LinkedIn
                  <span className="transition-transform group-hover:translate-x-0.5">↗</span>
                </a>
                <a
                  href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7495912172493975553"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#00ccff]/30 bg-[#00ccff]/[0.08] px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#0088cc] transition-colors hover:bg-[#00ccff]/[0.16] dark:border-[#00ccff]/30 dark:text-[#00ccff] dark:hover:bg-[#00ccff]/[0.16]"
                >
                  <Image
                    src="/bts-logo.png"
                    alt=""
                    width={28}
                    height={28}
                    className="h-7 w-7 shrink-0 rounded-[6px] object-contain"
                  />
                  Newsletter
                  <span className="transition-transform group-hover:translate-x-0.5">↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Photo column */}
          <div className="order-1 shrink-0 md:order-2">
            <TiltCard className="w-28 rounded-2xl sm:w-36 md:w-44">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-2xl shadow-black/40 ring-1 ring-black/10 dark:ring-white/15">
                <Image
                  src="/headshot-v2.png"
                  alt={SITE_NAME}
                  fill
                  priority
                  sizes="176px"
                  className="object-cover"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-[#00ccff]/25"
                />
              </div>
            </TiltCard>
          </div>
        </section>

        {/* Latest podcast — tune in */}
        <section className="reveal-on-scroll">
          <a
            href="https://www.toolstalentstechniques.com/john-osberg/"
            target="_blank"
            rel="noopener noreferrer"
            title="Listen to John on Tools, Talents &amp; Techniques (opens in a new tab)"
            className="group flex items-center gap-4 rounded-2xl border border-black/10 bg-white/50 p-3 backdrop-blur-sm transition-colors hover:border-[#00ccff]/50 hover:bg-white/70 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-[#00ccff]/40 dark:hover:bg-white/[0.07] sm:p-4"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/podcasts/ttt-ep120.png"
              alt="Tools, Talents &amp; Techniques episode 120 cover"
              width={72}
              height={72}
              loading="lazy"
              className="h-16 w-16 shrink-0 rounded-xl object-cover ring-1 ring-black/10 dark:ring-white/10 sm:h-[72px] sm:w-[72px]"
            />
            <div className="flex min-w-0 flex-1 flex-col gap-0.5">
              <span className="flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-[#0088cc] dark:text-[#00ccff] sm:text-[11px]">
                <span aria-hidden>🎙</span> Brandlete, Inc. Featured in New Podcast - 10/20/2026
              </span>
              <p className="truncate font-[family-name:var(--font-sora)] text-base font-bold leading-tight text-zinc-900 dark:text-white sm:text-lg">
                One Platform for Youth Athlete Development
              </p>
              <span className="truncate font-[family-name:var(--font-sora)] text-xs font-medium text-zinc-500 dark:text-zinc-400 sm:text-sm">
                Ep. 120 · Tools, Talents &amp; Techniques with Dustin Sutton
              </span>
            </div>
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#0088cc] px-3.5 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-transform group-hover:scale-[1.03] dark:bg-[#00ccff] dark:text-zinc-900 sm:px-4 sm:text-xs">
              Tune in
              <span className="transition-transform group-hover:translate-x-0.5">↗</span>
            </span>
          </a>
        </section>

        {/* Brandlete */}
        <section id="brandlete" className="reveal-on-scroll flex scroll-mt-24 flex-col gap-6 md:-mt-10">
          <div className="flex flex-col gap-3">
            <h2 className="on-photo font-[family-name:var(--font-sora)] text-3xl font-bold leading-tight tracking-tight text-[#0088cc] dark:text-[#00ccff] sm:text-4xl">
              What we&apos;ve built at Brandlete, Inc.
            </h2>
            <p className="on-photo font-[family-name:var(--font-sora)] text-lg font-semibold text-black dark:text-white sm:text-xl">
              The Athlete Development Driven Sports Program Operating System.
            </p>
            {/* Who it's for — icon chips replace the paragraph */}
            <ul className="flex flex-wrap gap-1.5">
              {[
                {
                  label: "Coaches",
                  href: "https://www.brandlete.com/solutions/coaches",
                  icon: (
                    <>
                      <path d="M3 11v2a1 1 0 0 0 1 1h2l4 3V7L6 10H4a1 1 0 0 0-1 1Z" />
                      <path d="M14 9a4 4 0 0 1 0 6" />
                    </>
                  ),
                },
                {
                  label: "Athletes",
                  href: "https://www.brandlete.com/solutions/athletes",
                  icon: (
                    <>
                      <circle cx="12" cy="15" r="4" />
                      <path d="M9 11 7 4M15 11l2-7M10.5 15h3" />
                    </>
                  ),
                },
                {
                  label: "Families",
                  href: "https://www.brandlete.com/solutions/parents",
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
                  href: "https://www.brandlete.com/solutions/organizations",
                  icon: (
                    <>
                      <path d="M5 21V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v16" />
                      <path d="M13 21V9h5a1 1 0 0 1 1 1v11" />
                      <path d="M3 21h18M8 8h2M8 12h2M8 16h2" />
                    </>
                  ),
                },
              ].map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white/50 px-2.5 py-1.5 font-[family-name:var(--font-sora)] text-[13px] font-semibold text-zinc-800 backdrop-blur-sm transition-transform hover:scale-[1.03] hover:border-[#0088cc]/40 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-100 dark:hover:border-[#00ccff]/40"
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
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://www.brandlete.com/platform/max"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#00ccff]/40 bg-[#00ccff]/[0.1] px-2.5 py-1.5 font-[family-name:var(--font-sora)] text-[13px] font-bold text-[#0088cc] transition-transform hover:scale-[1.03] dark:text-[#00ccff]"
                >
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
                  Max, your AI Coach
                </a>
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

          {/* Hiring — Playmaker Network */}
          <div className="hire-glow relative overflow-hidden rounded-2xl border border-[#00ccff]/40 bg-gradient-to-br from-[#00ccff]/[0.14] via-[#00ccff]/[0.05] to-transparent p-3 sm:p-4">
            <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#00ccff]/20 blur-3xl" />
            <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-16 h-48 w-48 rounded-full bg-[#00ccff]/10 blur-3xl" />
            <div className="relative flex flex-col items-center gap-2.5 text-center sm:flex-row sm:items-center sm:justify-between sm:gap-5 sm:text-left">
              <div className="flex flex-col gap-1">
                <span className="inline-flex items-center gap-2 self-center sm:self-start">
                  <span aria-hidden className="hire-dot inline-block h-2 w-2 rounded-full bg-[#00ccff] shadow-[0_0_8px_2px_rgba(0,204,255,0.8)]" />
                  <span className="font-[family-name:var(--font-sora)] text-[11px] font-bold uppercase tracking-[0.22em] text-[#0088cc] dark:text-[#00ccff]">
                    Now Hiring
                  </span>
                </span>
                <h3 className="font-[family-name:var(--font-sora)] text-lg font-bold leading-tight text-zinc-900 dark:text-white sm:text-xl">
                  Join the Playmaker Network
                </h3>
                <p className="max-w-md text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
                  Brandlete is building the athlete development sports operating system. We want builders, coaches, and partners ready to move the game forward.
                </p>
              </div>
              <a
                href="https://www.brandlete.com/playmakers"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-fit shrink-0 items-center justify-center gap-2 rounded-full bg-[#00ccff] px-4 py-2 font-[family-name:var(--font-sora)] text-[13px] font-bold text-zinc-950 shadow-lg shadow-[#00ccff]/25 transition-all hover:-translate-y-0.5 hover:bg-[#33d6ff] hover:shadow-xl hover:shadow-[#00ccff]/40"
              >
                Apply now
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* The Numbers */}
        <section className="reveal-on-scroll flex flex-col gap-4">
          <h2 className="eyebrow on-photo">The Numbers</h2>
          <div className="cascade mx-auto flex w-full max-w-xl flex-wrap justify-center gap-1.5">
            {stats.map((s) => (
              <TiltCard
                key={s.label}
                className={`rounded-lg ${
                  s.icon === "countless"
                    ? "w-full"
                    : "w-[calc(50%-0.1875rem)] md:w-[calc(25%-0.28125rem)]"
                }`}
              >
                <div className="flex h-full flex-col items-center justify-center rounded-lg border border-black/10 bg-white/40 px-2 py-1.5 text-center backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.03] md:px-2 md:py-1.5">
                  <StatIcon icon={s.icon} className="mb-0.5 h-3.5 w-3.5 text-[#0088cc]/90 dark:text-[#00ccff]/90 md:h-3.5 md:w-3.5" />
                  <div className="font-[family-name:var(--font-sora)] text-base font-bold leading-tight text-[#0088cc] dark:text-[#00ccff] md:text-xl">
                    {/\d/.test(s.value) ? <CountUp value={s.value} /> : s.value}
                  </div>
                  <div className="mt-0.5 font-mono text-[8px] font-medium uppercase tracking-[0.08em] text-zinc-500 dark:text-zinc-400 md:text-[9px]">
                    {s.label}
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </section>

        {/* Athletic Achievements — golf + ultra running */}
        <section className="reveal-on-scroll flex flex-col gap-3">
          <h2 className="eyebrow on-photo">Athletic Achievements</h2>
          <div className="cascade mx-auto flex w-full max-w-xl flex-col gap-1">
            {[
              { badge: "2020", icon: "golf" as const, logo: "/logos/jacknicklaus.png", href: "https://www.oncoregolf.com/verox1-doubleswin/", title: "Jack Nicklaus Doubles Golf Championship Winner" },
              { badge: "2020–24", icon: "trail" as const, logo: "/logos/goggins.png", href: "https://www.runnersworld.com/training/a44831397/4x4x48-challenge/", title: "Ultra Challenge Finisher · ", miles: "52, 57, 63, 69 miles ran" },
              { badge: "2023", icon: "golf" as const, logo: "/logos/news-pga.png", href: "https://www.linkedin.com/posts/johnosberg_three-years-ago-i-was-the-1-golfer-of-22-share-7507292785624944640-khTz/", title: "PGA of America Medalist, Playing Ability Test · 1 of 22 to qualify" },
              { badge: "2025", icon: "trail" as const, logo: "/logos/mindover.png", href: "https://mindoverfoundation.com/", title: "Mind Over Miles Runner · 70 mi ran, 18 hours, early finish - injury" },
              { badge: "Personal Bests", icon: "timer" as const, logo: "/logos/powerofozmosis.png", title: "13.1 miles — 1:28:06   ·   26.2 miles — 3:11:28", metric: true, center: true },
              { badge: "To Date", icon: "clock" as const, logo: "/logos/calendar.png", title: "164 half marathons · 8 marathons · 9 ultra events · 4 biathlons", line2: "5x 48 hour challenge finishes · 4x 24 hour challenge finishes", metric: true },
            ].map((h, i) => (
              <TiltCard key={`${h.badge}-${i}`} className="rounded-lg">
                {(() => {
                  const inner = (
                    <>
                      {h.logo ? (
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-md bg-white p-1 ring-1 ring-black/5">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={h.logo}
                            alt=""
                            loading="lazy"
                            className="h-full w-full object-contain"
                          />
                        </span>
                      ) : (
                        <StatIcon
                          icon={h.icon}
                          className="h-5 w-5 shrink-0 text-[#0088cc]/70 dark:text-[#00ccff]/70"
                        />
                      )}
                      <span className={`shrink-0 whitespace-nowrap font-[family-name:var(--font-sora)] font-bold text-[#0088cc] dark:text-[#00ccff] ${h.metric ? "text-sm md:text-base" : "text-lg"}`}>
                        {h.badge}
                      </span>
                      <span className={`text-[12px] font-medium leading-snug text-zinc-800 dark:text-zinc-200 md:text-[13px] ${h.center ? "flex-1 text-center" : ""}`}>
                        {h.title}
                        {h.miles && <span className="whitespace-nowrap">{h.miles}</span>}
                        {h.line2 && <span className="block">{h.line2}</span>}
                      </span>
                    </>
                  );
                  const cardClass = `on-photo flex items-center gap-2.5 rounded-lg border border-black/10 bg-white/40 px-3 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.03] ${h.metric ? "py-1.5" : "py-2"}`;
                  return h.href ? (
                    <a
                      href={h.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={h.title}
                      className={`${cardClass} transition-opacity hover:opacity-80`}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className={cardClass}>{inner}</div>
                  );
                })()}
              </TiltCard>
            ))}
          </div>
        </section>

        {/* Clutch Factor — nTangible assessment */}
        <section id="clutch" className="reveal-on-scroll scroll-mt-24">
          <ClutchFactorCard />
        </section>

        {/* Experience */}
        <section id="experience" className="reveal-on-scroll flex scroll-mt-24 flex-col gap-6">
          <h2 className="eyebrow on-photo">Experience</h2>
          <div className="cascade flex flex-col">
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
                  {r.blurb && (
                    <p className="mt-1 text-[13px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {r.blurb}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Early career — small logo row to save vertical space. The detail
              lives in the full résumé; this is just the trail of where he came
              up. Each mark links to the company. */}
          <div className="flex flex-col gap-2.5 border-t border-black/10 pt-5 dark:border-white/10 sm:flex-row sm:items-center sm:gap-4">
            <h3 className="shrink-0 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
              Early Career
            </h3>
            <div className="flex flex-wrap items-center gap-2">
              {roles.slice(-4).map((r) => (
                <RoleLogo key={r.org} role={r} size="sm" />
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
              Endorsed by 138+ leaders.
            </p>
          </div>
          <Testimonials />
        </section>

        {/* Recognized — news & awards */}
        <section id="recognized" className="reveal-on-scroll flex scroll-mt-24 flex-col gap-6">
          <h2 className="eyebrow on-photo">Recognized</h2>

          {/* In the press */}
          <div className="flex flex-col gap-2.5">
            <h3 className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
              In the press
            </h3>
            <PressList />
          </div>

          {/* Awards & honors */}
          <div className="flex flex-col gap-2.5">
            <h3 className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
              Awards &amp; honors
            </h3>
            <AwardsList />
          </div>
        </section>

        {/* Footer */}
        <footer className="on-photo flex flex-col items-center gap-3 border-t border-black/20 pt-8 pb-24 text-xs text-zinc-700 dark:border-white/10 dark:text-white">
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
