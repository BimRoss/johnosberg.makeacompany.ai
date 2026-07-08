"use client";

import { useEffect, useState } from "react";

// Top-right "live dock": visitor-local date/time + weather, a fresh quote each
// visit, and a few tailored ways-to-connect prompts. All client-side (static
// export): IP geolocation via ipapi.co, weather via open-meteo (both keyless,
// CORS-friendly). Everything degrades gracefully if a fetch is blocked.

const QUOTES: { t: string; a: string }[] = [
  { t: "Opportunities don't happen. You create them.", a: "Chris Grosser" },
  { t: "Your network is your net worth.", a: "Porter Gale" },
  { t: "The best way to predict the future is to create it.", a: "Peter Drucker" },
  { t: "Relationships are the currency of real growth.", a: "John Osberg" },
  { t: "Done is better than perfect.", a: "Sheryl Sandberg" },
  { t: "Luck is what happens when preparation meets opportunity.", a: "Seneca" },
  { t: "If you want to go fast, go alone. If you want to go far, go together.", a: "African proverb" },
  { t: "Whether you think you can or you can't, you're right.", a: "Henry Ford" },
  { t: "Great things are done by a series of small things brought together.", a: "Van Gogh" },
  { t: "Start where you are. Use what you have. Do what you can.", a: "Arthur Ashe" },
  { t: "The harder you work, the luckier you get.", a: "Gary Player" },
  { t: "People don't buy what you do, they buy why you do it.", a: "Simon Sinek" },
  { t: "Action is the foundational key to all success.", a: "Pablo Picasso" },
  { t: "Be so good they can't ignore you.", a: "Steve Martin" },
  { t: "Momentum is built one conversation at a time.", a: "John Osberg" },
  { t: "Fall seven times, stand up eight.", a: "Japanese proverb" },
  { t: "Success is not final, failure is not fatal: it is the courage to continue that counts.", a: "Winston Churchill" },
  { t: "You miss 100% of the shots you don't take.", a: "Wayne Gretzky" },
  { t: "Ideas are easy. Execution is everything.", a: "John Doerr" },
  { t: "Make each day your masterpiece.", a: "John Wooden" },
  { t: "Drive for show, putt for dough.", a: "Golf proverb" },
  { t: "The best time to plant a tree was 20 years ago. The second best is now.", a: "Proverb" },
  { t: "Trust is built in drops and lost in buckets.", a: "Kevin Plank" },
  { t: "Hard work beats talent when talent doesn't work hard.", a: "Tim Notke" },
];

const CONNECT_IDEAS: string[] = [
  "Co-host a founder fireside or podcast episode",
  "Build a sports-brand activation or sponsorship together",
  "Tap me for GTM, growth, or partnership advisory",
  "Bring me in to speak on partnerships & revenue",
  "Open doors across my Buffalo & sports network",
  "Pilot a Brandlete athlete-development partnership",
  "Strategize a launch or fundraising campaign",
  "Trade intros, just two connectors comparing notes",
  "Mentor a founder cohort or pitch competition",
  "Grab a round of twilight golf and talk shop",
];

function pickQuote() {
  // index varies per visit without Math.random at module scope concerns
  const i = Math.floor((Date.now() / 1000) % QUOTES.length);
  return QUOTES[(i + Math.floor(Math.random() * QUOTES.length)) % QUOTES.length];
}

function pickIdeas(n: number) {
  const pool = [...CONNECT_IDEAS];
  const out: string[] = [];
  while (out.length < n && pool.length) {
    out.push(pool.splice(Math.floor(Math.random() * pool.length), 1)[0]);
  }
  return out;
}

function weatherFor(code: number): { emoji: string; label: string } {
  if (code === 0) return { emoji: "☀️", label: "Clear" };
  if (code <= 3) return { emoji: "⛅", label: "Partly cloudy" };
  if (code <= 48) return { emoji: "🌫️", label: "Fog" };
  if (code <= 57) return { emoji: "🌦️", label: "Drizzle" };
  if (code <= 67) return { emoji: "🌧️", label: "Rain" };
  if (code <= 77) return { emoji: "❄️", label: "Snow" };
  if (code <= 82) return { emoji: "🌦️", label: "Showers" };
  if (code <= 86) return { emoji: "🌨️", label: "Snow showers" };
  return { emoji: "⛈️", label: "Storms" };
}

export default function InfoDock() {
  const [now, setNow] = useState<Date | null>(null);
  const [place, setPlace] = useState<string>("");
  const [wx, setWx] = useState<{ tempF: number; emoji: string; label: string } | null>(null);
  const [quote, setQuote] = useState<{ t: string; a: string } | null>(null);
  const [ideas, setIdeas] = useState<string[]>([]);
  const [connectOpen, setConnectOpen] = useState(false);

  useEffect(() => {
    setNow(new Date());
    setQuote(pickQuote());
    setIdeas(pickIdeas(3));
    const tick = window.setInterval(() => setNow(new Date()), 1000);

    const ctrl = new AbortController();
    const timeout = window.setTimeout(() => ctrl.abort(), 6000);
    (async () => {
      try {
        const geo = await fetch("https://ipapi.co/json/", { signal: ctrl.signal });
        const g = await geo.json();
        if (g.city) setPlace([g.city, g.region_code || g.region].filter(Boolean).join(", "));
        if (g.latitude && g.longitude) {
          const wr = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${g.latitude}&longitude=${g.longitude}&current=temperature_2m,weather_code&temperature_unit=fahrenheit`,
            { signal: ctrl.signal }
          );
          const w = await wr.json();
          if (w?.current) {
            const m = weatherFor(w.current.weather_code);
            setWx({ tempF: Math.round(w.current.temperature_2m), ...m });
          }
        }
      } catch {
        /* offline / blocked — dock still shows clock, quote, ideas */
      } finally {
        window.clearTimeout(timeout);
      }
    })();

    return () => {
      window.clearInterval(tick);
      ctrl.abort();
      window.clearTimeout(timeout);
    };
  }, []);

  const time = now
    ? now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    : "--:--";
  const date = now
    ? now.toLocaleDateString([], { weekday: "short", month: "short", day: "numeric" })
    : "";

  return (
    <aside className="z-40 -mb-4 w-full sm:-mb-8 xl:absolute xl:top-16 xl:right-[calc(50%-50vw+1.5rem)] xl:mb-0 xl:w-72">
      <div className="overflow-hidden rounded-2xl border border-black/10 bg-white/70 backdrop-blur-md dark:border-white/10 dark:bg-zinc-950/55">
        {/* header: live pulse + time */}
        <div className="flex items-center justify-between border-b border-black/10 px-3 py-1.5 xl:px-4 xl:py-2.5 dark:border-white/10">
          <span className="flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-600 dark:text-zinc-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Live
          </span>
          <span className="font-mono text-[11px] tabular-nums text-zinc-700 dark:text-zinc-300">
            {time}
          </span>
        </div>

        {/* date + weather */}
        <div className="flex items-center justify-between gap-2 px-3 py-2 xl:px-4 xl:py-3">
          <div className="min-w-0">
            <div className="font-[family-name:var(--font-sora)] text-sm font-semibold text-zinc-900 dark:text-white">
              {date}
            </div>
            <div className="truncate font-mono text-[10px] uppercase tracking-[0.1em] text-zinc-500">
              {place || "Locating…"}
            </div>
          </div>
          {wx && (
            <div className="flex shrink-0 items-center gap-1.5">
              <span className="text-lg leading-none" aria-hidden>
                {wx.emoji}
              </span>
              <span className="font-[family-name:var(--font-sora)] text-base font-bold text-zinc-900 dark:text-white">
                {wx.tempF}°
              </span>
            </div>
          )}
        </div>

        {/* quote — 2-line clamp on mobile, full on xl */}
        {quote && (
          <div className="border-t border-black/10 px-3 py-2 xl:px-4 xl:py-3 dark:border-white/10">
            <p className="line-clamp-2 text-[12px] italic leading-snug text-zinc-700 xl:line-clamp-none xl:text-[13px] dark:text-zinc-300">
              "{quote.t}"
            </p>
            <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-zinc-500">
              — {quote.a}
            </p>
          </div>
        )}

        {/* ways to connect — collapsed toggle on mobile, always-open on xl */}
        <div className="border-t border-black/10 dark:border-white/10">
          {/* mobile toggle header */}
          <button
            onClick={() => setConnectOpen((v) => !v)}
            className="flex w-full items-center justify-between px-3 py-2 xl:hidden"
            aria-expanded={connectOpen}
          >
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-700 dark:text-emerald-300">
              Ways we could connect
            </span>
            <span className="text-[10px] text-zinc-400">{connectOpen ? "▲" : "▼"}</span>
          </button>
          {/* desktop label (always visible) */}
          <div className="hidden px-4 pt-3 xl:block">
            <div className="mb-2 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-700 dark:text-emerald-300">
              Ways we could connect
            </div>
          </div>
          {/* list — hidden on mobile until toggled, always shown on xl */}
          <ul className={`flex flex-col gap-1.5 px-3 pb-2 xl:block xl:px-4 xl:pb-3 ${connectOpen ? "block" : "hidden xl:block"}`}>
            {ideas.map((idea) => (
              <li
                key={idea}
                className="flex gap-2 text-[12px] leading-snug text-zinc-700 dark:text-zinc-300"
              >
                <span className="shrink-0 text-amber-500" aria-hidden>
                  ⚡
                </span>
                <span>{idea}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
