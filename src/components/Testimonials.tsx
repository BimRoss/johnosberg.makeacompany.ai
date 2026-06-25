import { testimonials, type Testimonial } from "@/data/testimonials";

// Initials avatar. LinkedIn's recommendation export carries no photos and
// member headshots aren't ours to scrape, so each person gets a clean monogram
// in a deterministic gradient keyed off their name.
const AVATAR_GRADIENTS = [
  "from-emerald-500 to-teal-600",
  "from-sky-500 to-blue-600",
  "from-violet-500 to-purple-600",
  "from-amber-500 to-orange-600",
  "from-rose-500 to-pink-600",
  "from-cyan-500 to-sky-600",
  "from-indigo-500 to-violet-600",
  "from-lime-500 to-emerald-600",
];

function initials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function gradientFor(name: string) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
  return AVATAR_GRADIENTS[h % AVATAR_GRADIENTS.length];
}

function Card({ t }: { t: Testimonial }) {
  return (
    <figure className="flex w-[320px] shrink-0 flex-col gap-4 rounded-2xl border border-black/10 bg-white/75 p-5 backdrop-blur-md dark:border-white/10 dark:bg-zinc-950/55 sm:w-[360px]">
      <blockquote className="line-clamp-6 text-[15px] leading-7 text-zinc-800 dark:text-zinc-300">
        “{t.text}”
      </blockquote>
      <figcaption className="mt-auto flex items-center gap-3">
        <span
          aria-hidden
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${gradientFor(
            t.name
          )} font-[family-name:var(--font-sora)] text-sm font-bold text-white shadow-sm`}
        >
          {initials(t.name)}
        </span>
        <span className="min-w-0">
          <span className="block truncate font-[family-name:var(--font-sora)] text-base font-semibold text-zinc-900 dark:text-white">
            {t.name}
          </span>
          <span className="block truncate font-mono text-[11px] uppercase tracking-[0.1em] text-zinc-600 dark:text-zinc-400">
            {t.title}
            {t.company ? ` · ${t.company}` : ""}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}

function Row({ items, dir }: { items: Testimonial[]; dir: "l" | "r" }) {
  return (
    <div className="group flex overflow-hidden">
      <div
        className={`flex w-max gap-5 pr-5 ${
          dir === "l" ? "animate-marquee-l" : "animate-marquee-r"
        } group-hover:[animation-play-state:paused]`}
      >
        {items.map((t, i) => (
          <Card key={`a-${i}`} t={t} />
        ))}
        {items.map((t, i) => (
          <Card key={`b-${i}`} t={t} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const mid = Math.ceil(testimonials.length / 2);
  const rowA = testimonials.slice(0, mid);
  const rowB = testimonials.slice(mid);
  return (
    <div className="marquee-mask flex flex-col gap-5">
      <Row items={rowA} dir="l" />
      <Row items={rowB} dir="r" />
    </div>
  );
}
