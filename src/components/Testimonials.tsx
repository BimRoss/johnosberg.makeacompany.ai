import { testimonials, type Testimonial } from "@/data/testimonials";

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

const FEATURED: Testimonial[] = [
  {
    name: "Jay O'Brien",
    title: "Senior Relationship Manager",
    company: "Corebridge Financial",
    text: "He was a tremendous partner who was willing to go the extra mile to ensure everyone was more than satisfied with the result. I will miss working with him and expect he will continue growing successful relationships throughout his career. I'd work with him again in a second.",
  },
  {
    name: "Del Reid",
    title: "Founder",
    company: "26 Shirts",
    text: "There's no one quite like John! He keeps a mental inventory of what everyone he knows is working on so that when he meets a new person, he sees exactly how they could complement something one of his connections is already tackling. I always leave conversations with John ready to take on the world.",
  },
  {
    name: "Matthew Cunha",
    title: "Sales Representative",
    company: "Oakley",
    text: "John is the kind of person who produces meaningful results while inspiring everyone around him. His positive outlook isn't just something he turns on for meetings — it's a fundamental part of who he is. Working with him doesn't just push projects forward; it elevates the entire environment.",
  },
  {
    name: "Barbara Boese",
    title: "Transition Coordinator",
    company: "Accessible Academics",
    text: "John Osberg is a force of nature. Arms wide open to help another realize a passion in education, experience or employment. That was over a year ago and the mentorship is thriving — a young man with a disability has been embraced by the world of golf and advertising. John was instrumental in a career exploration and launch.",
  },
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

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} className="h-3.5 w-3.5 fill-amber-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function Avatar({ name, size = "md" }: { name: string; size?: "md" | "lg" }) {
  const gradient = gradientFor(name);
  const outer = size === "lg" ? "h-16 w-16" : "h-10 w-10";
  const inner = size === "lg" ? "h-[58px] w-[58px] text-base" : "h-9 w-9 text-xs";
  return (
    <div className={`${outer} shrink-0 rounded-full bg-gradient-to-br ${gradient} p-[3px] shadow-md`}>
      <div className={`${inner} flex items-center justify-center rounded-full bg-white/15 font-[family-name:var(--font-sora)] font-bold text-white`}>
        {initials(name)}
      </div>
    </div>
  );
}

function FeaturedCard({ t }: { t: Testimonial }) {
  return (
    <figure className="relative flex flex-col gap-5 overflow-hidden rounded-2xl border border-emerald-200/60 bg-white/90 p-6 shadow-lg shadow-emerald-100/40 backdrop-blur-md dark:border-emerald-500/20 dark:bg-zinc-900/70 dark:shadow-emerald-900/20">
      <span aria-hidden className="absolute right-5 top-3 select-none font-serif text-6xl leading-none text-emerald-200/70 dark:text-emerald-700/40">&#10077;</span>
      <Stars />
      <blockquote className="text-[15px] leading-7 text-zinc-800 dark:text-zinc-200">
        &ldquo;{t.text}&rdquo;
      </blockquote>
      <figcaption className="mt-auto flex items-center gap-3.5">
        <Avatar name={t.name} size="lg" />
        <span className="min-w-0">
          <span className="block font-[family-name:var(--font-sora)] text-base font-semibold text-zinc-900 dark:text-white">
            {t.name}
          </span>
          <span className="block truncate font-mono text-[11px] uppercase tracking-[0.1em] text-emerald-700 dark:text-emerald-400">
            {t.title}
          </span>
          {t.company && (
            <span className="block truncate font-mono text-[11px] uppercase tracking-[0.1em] text-zinc-500 dark:text-zinc-500">
              {t.company}
            </span>
          )}
        </span>
      </figcaption>
    </figure>
  );
}

function Card({ t }: { t: Testimonial }) {
  return (
    <figure className="flex w-[320px] shrink-0 flex-col gap-3 rounded-2xl border border-black/10 bg-white/75 p-5 backdrop-blur-md dark:border-white/10 dark:bg-zinc-950/55 sm:w-[360px]">
      <span aria-hidden className="select-none font-serif text-2xl leading-none text-emerald-400/60 dark:text-emerald-600/50">&#10077;</span>
      <blockquote className="line-clamp-5 text-[14px] leading-6 text-zinc-800 dark:text-zinc-300">
        {t.text}
      </blockquote>
      <div className="mt-auto flex flex-col gap-2.5">
        <Stars />
        <figcaption className="flex items-center gap-3">
          <Avatar name={t.name} size="md" />
          <span className="min-w-0">
            <span className="block truncate font-[family-name:var(--font-sora)] text-sm font-semibold text-zinc-900 dark:text-white">
              {t.name}
            </span>
            <span className="block truncate font-mono text-[11px] uppercase tracking-[0.1em] text-zinc-500 dark:text-zinc-400">
              {t.title}
              {t.company ? ` · ${t.company}` : ""}
            </span>
          </span>
        </figcaption>
      </div>
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
    <div className="flex flex-col gap-10">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURED.map((t) => (
          <FeaturedCard key={t.name} t={t} />
        ))}
      </div>
      <div className="marquee-mask flex flex-col gap-5">
        <Row items={rowA} dir="l" />
        <Row items={rowB} dir="r" />
      </div>
    </div>
  );
}
