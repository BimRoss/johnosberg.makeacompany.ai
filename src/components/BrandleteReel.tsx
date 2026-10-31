"use client";
import { useEffect, useRef, useState } from "react";
import BrandleteVideo from "@/components/BrandleteVideo";

type VideoItem = {
  kind: "video";
  src: string;
  poster: string;
  title: string;
};
type Item = VideoItem;

// The three Brandlete commercial spots: the explainer, the coach spot, and the
// hoops spot. John's course lives lower on the page as its own featured card,
// not in this row.
const ITEMS: Item[] = [
  {
    kind: "video",
    src: "/brandlete.mp4",
    poster: "/brandlete-poster.jpg",
    title: "Brandlete — the athlete development driven sports program operating system",
  },
  {
    kind: "video",
    src: "/brandlete-coach.mp4",
    poster: "/brandlete-coach-poster.jpg",
    title: "Brandlete — end the group chat chaos for coaches",
  },
  {
    kind: "video",
    src: "/brandlete-hoops.mp4",
    poster: "/brandlete-hoops-poster.jpg",
    title: "Brandlete — every rep toward the dream school",
  },
];

function key(item: Item) {
  return item.src;
}

function Tile({ item }: { item: Item }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-black/10 shadow-xl shadow-black/10 dark:border-white/10 dark:shadow-black/40">
      <BrandleteVideo src={item.src} poster={item.poster} title={item.title} />
    </div>
  );
}

export default function BrandleteReel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);

  // Track which item is centered as the user swipes (mobile/tablet only).
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const i = slideRefs.current.indexOf(entry.target as HTMLDivElement);
            if (i >= 0) setActive(i);
          }
        });
      },
      { root: track, threshold: 0.6 }
    );
    slideRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const goTo = (i: number) => {
    slideRefs.current[i]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  return (
    <figure className="m-0 flex flex-col gap-3">
      {/* Mirror the hero's flex row (text column + photo spacer) so the caption
          centers over the LinkedIn/Newsletter buttons, not over the full-width
          video grid. The flex-1 column + md:pl-[16%] + w-56 spacer reproduce the
          exact geometry the buttons sit in. */}
      <div className="flex items-center md:gap-8">
        <figcaption className="flex-1 text-center text-sm font-semibold tracking-wide text-zinc-900 [text-shadow:0_1px_3px_rgba(255,255,255,0.6)] dark:text-zinc-100 dark:[text-shadow:0_1px_3px_rgba(0,0,0,0.6)] md:pl-[16%]">
          Brandlete Explainer Video &amp; Commercial Spots
        </figcaption>
        <div aria-hidden className="hidden shrink-0 md:block md:w-56" />
      </div>

      {/* Desktop: all three, centered and equal. */}
      <div className="hidden md:grid md:grid-cols-3 md:gap-4">
        {ITEMS.map((item) => (
          <Tile key={key(item)} item={item} />
        ))}
      </div>

      {/* Mobile + tablet: swipe carousel, one centered with a peek of the next. */}
      <div className="md:hidden">
        <div
          ref={trackRef}
          className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth px-5 pb-1 sm:-mx-8 sm:px-8"
        >
          {ITEMS.map((item, i) => (
            <div
              key={key(item)}
              ref={(el) => {
                slideRefs.current[i] = el;
              }}
              className="w-[82%] shrink-0 snap-center sm:w-[64%]"
            >
              <Tile item={item} />
            </div>
          ))}
        </div>

        <div className="mt-3 flex items-center justify-center gap-2">
          {ITEMS.map((item, i) => (
            <button
              key={key(item)}
              onClick={() => goTo(i)}
              aria-label={`Go to item ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                active === i
                  ? "w-6 bg-[#00ccff]"
                  : "w-1.5 bg-zinc-400/50 hover:bg-zinc-400 dark:bg-white/25 dark:hover:bg-white/45"
              }`}
            />
          ))}
        </div>
      </div>
    </figure>
  );
}
