import { testimonials, type Testimonial } from "@/data/testimonials";

function Card({ t }: { t: Testimonial }) {
  return (
    <figure className="flex w-[320px] shrink-0 flex-col gap-4 rounded-2xl border border-black/10 bg-white/75 p-5 backdrop-blur-md dark:border-white/10 dark:bg-zinc-950/55 sm:w-[360px]">
      <blockquote className="line-clamp-6 text-[15px] leading-7 text-zinc-800 dark:text-zinc-300">
        “{t.text}”
      </blockquote>
      <figcaption className="mt-auto">
        <div className="font-[family-name:var(--font-sora)] text-base font-semibold text-zinc-900 dark:text-white">
          {t.name}
        </div>
        <div className="line-clamp-1 font-mono text-[11px] uppercase tracking-[0.1em] text-zinc-600 dark:text-zinc-400">
          {t.title}
          {t.company ? ` · ${t.company}` : ""}
        </div>
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
