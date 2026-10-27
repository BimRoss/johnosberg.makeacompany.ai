import { Fragment } from "react";
import Image from "next/image";

import Backdrop from "@/components/Backdrop";
import BookCallBtn from "@/components/BookCallBtn"; // hero CTA + footer close
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
import ClutchFactorCard from "@/components/ClutchFactorCard";
import Gallery from "@/components/Gallery";
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
            <h1 className="on-photo font-[family-name:var(--font-sora)] text-4xl font-extrabold leading-[0.9] tracking-tight text-zinc-900 dark:text-white sm:text-5xl md:text-[3rem]">
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

            {/* Primary actions */}
            <div className="mt-4 flex w-full flex-col items-center">
              {/* Let's Talk leads as the primary hero CTA, with the two link
                  features stacked below it. The same button also closes the
                  page in the footer. */}
              <div className="mt-4 flex w-full max-w-sm flex-col items-center gap-4">
                <BookCallBtn />
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
            <TiltCard className="w-36 rounded-2xl sm:w-44 md:w-56">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-2xl shadow-black/40 ring-1 ring-black/10 dark:ring-white/15">
                <Image
                  src="/headshot-v2.png"
                  alt={SITE_NAME}
                  fill
                  priority
                  sizes="224px"
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
              width={112}
              height={112}
              loading="lazy"
              className="h-24 w-24 shrink-0 rounded-xl object-cover ring-1 ring-black/10 dark:ring-white/10 sm:h-28 sm:w-28"
            />
            <div className="flex min-w-0 flex-1 flex-col gap-1">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-[#0088cc] dark:text-[#00ccff] sm:text-[11px]">
                Brandlete recent podcast feature
              </span>
              <p className="font-[family-name:var(--font-sora)] text-base font-bold leading-tight text-zinc-900 dark:text-white sm:text-lg">
                One Platform for Youth Athlete Development
              </p>
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
          </div>

          <figure className="flex flex-col gap-2">
            <figcaption className="font-[family-name:var(--font-sora)] text-lg font-bold leading-tight text-zinc-900 dark:text-white sm:text-xl">
              Brandlete Explainer Video
            </figcaption>
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
                    Playmaker Network
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
                Learn more
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
          <div className="cascade mx-auto flex w-full max-w-xl flex-col gap-1.5">
            {[
              { badge: "2020", logo: "/logos/jacknicklaus.png", href: "https://www.oncoregolf.com/verox1-doubleswin/", lines: ["Jack Nicklaus Doubles Golf Championship Winner"] },
              { badge: "2020–24", logo: "/logos/goggins.png", href: "https://www.runnersworld.com/training/a44831397/4x4x48-challenge/", lines: ["Ultra Challenge Finisher", "52, 57, 63, 69 miles run"] },
              { badge: "2023", logo: "/logos/news-pga.png", href: "https://www.linkedin.com/posts/johnosberg_three-years-ago-i-was-the-1-golfer-of-22-share-7507292785624944640-khTz/", lines: ["PGA of America Medalist, Playing Ability Test", "1 of 22 to qualify"] },
              { badge: "2025", logo: "/logos/mindover.png", href: "https://mindoverfoundation.com/", lines: ["Mind Over Miles Runner", "70 mi run · 18 hours · (injury)"] },
              { badge: "PBs/To Date", logo: "/logos/powerofozmosis.png", lines: ["13.1 — 1:28:06 · 26.2 — 3:11:28", "164 half marathons · 8 marathons · 9 ultra events · 4 biathlons", "5× 48-hour challenge finishes · 4× 24-hour challenge finishes"] },
            ].map((h, i) => {
              const cardClass =
                "on-photo grid grid-cols-[1.75rem_4.5rem_1fr] items-center gap-2.5 rounded-xl border border-black/10 bg-white/40 px-3.5 py-2.5 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.03]";
              const inner = (
                <>
                  <span className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-md bg-white p-1 ring-1 ring-black/5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={h.logo} alt="" loading="lazy" className="h-full w-full object-contain" />
                  </span>
                  <span className="text-left font-[family-name:var(--font-sora)] text-[15px] font-bold leading-tight text-[#0088cc] dark:text-[#00ccff]">
                    {h.badge}
                  </span>
                  <span className="min-w-0">
                    {h.lines.map((line, j) => (
                      <span
                        key={j}
                        className={
                          j === 0
                            ? "block text-[13px] font-semibold leading-snug text-zinc-800 dark:text-zinc-100"
                            : "block text-[12px] leading-snug text-zinc-500 dark:text-zinc-400"
                        }
                      >
                        {line}
                      </span>
                    ))}
                  </span>
                </>
              );
              return (
                <TiltCard key={`${h.badge}-${i}`} className="rounded-xl">
                  {h.href ? (
                    <a
                      href={h.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={h.lines.join(" ")}
                      className={`${cardClass} transition-opacity hover:opacity-80`}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className={cardClass}>{inner}</div>
                  )}
                </TiltCard>
              );
            })}
          </div>
        </section>

        {/* Clutch Factor — nTangible assessment. The gauge thumbnail now lives
            inside the card itself, so no standalone badge above it. */}
        <section id="clutch" className="reveal-on-scroll flex scroll-mt-24 flex-col items-center gap-4">
          <div className="w-full">
            <ClutchFactorCard />
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="reveal-on-scroll flex scroll-mt-24 flex-col gap-6">
          <h2 className="eyebrow on-photo">Experience</h2>
          <div className="cascade flex flex-col">
            {roles.slice(0, -4).map((r, i, list) => {
              // Drop a one-time "Founder & advisory roles" divider at the first
              // advisory entry so the overlapping side ventures group cleanly
              // under the primary operating roles above.
              const startAdvisory =
                r.group === "advisory" && list[i - 1]?.group !== "advisory";
              return (
                <Fragment key={r.org}>
                  {startAdvisory && (
                    <h3 className="mt-6 border-t border-black/10 pt-6 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-zinc-500 dark:border-white/10 dark:text-zinc-400">
                      Founder &amp; advisory roles
                    </h3>
                  )}
                  <div
                    className={`on-photo flex flex-col gap-1 py-4 md:flex-row md:items-center md:gap-6 ${
                      i > 0 && !startAdvisory
                        ? "border-t border-black/10 dark:border-white/10"
                        : ""
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
                </Fragment>
              );
            })}
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

        {/* Recognized — news & awards. Lifted up here (right after Experience)
            so this third-party proof lands high on the page instead of near the
            bottom. */}
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
              Endorsed by 140+ leaders.
            </p>
          </div>
          <Testimonials />
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

        {/* Footer */}
        <footer className="on-photo flex flex-col items-center gap-3 border-t border-black/20 pt-8 pb-24 text-xs text-zinc-700 dark:border-white/10 dark:text-white">
          <span>© {new Date().getFullYear()} John Osberg. All rights reserved.</span>
          <details className="group mt-1 w-full max-w-xl px-4 text-center">
            <summary className="mx-auto inline-flex cursor-pointer list-none items-center gap-1 text-[10px] text-zinc-400 transition-colors hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300 [&::-webkit-details-marker]:hidden">
              Legal &amp; privacy
              <span aria-hidden className="transition-transform group-open:rotate-180">⌄</span>
            </summary>
            <div className="mx-auto mt-2 max-w-md space-y-2 text-[9px] leading-relaxed text-zinc-400 dark:text-zinc-500">
              <p>
                All content on this site, including text, images, and design, is
                the property of John Osberg and may not be reproduced,
                distributed, or used without prior written permission. All
                third-party names, logos, and trademarks are the property of
                their respective owners and are shown for identification only,
                without any claim of affiliation or endorsement.
              </p>
              <p>
                This site is provided for informational purposes only, on an
                &ldquo;as is&rdquo; basis, with no warranties of any kind. It
                does not sell your personal information. Any details you share
                through the contact links are used solely to respond to you.
              </p>
            </div>
          </details>
        </footer>
      </main>
    </>
  );
}
