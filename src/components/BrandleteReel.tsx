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

// The two Brandlete commercial spots: the explainer and the coach spot. John's
// course lives lower on the page as its own featured card, not in this row.
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
];

function key(item: Item) {
  return item.src;
}

function Tile({ item }: { item: Item }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl ring-1 ring-black/10 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:ring-[#00ccff]/40 dark:ring-white/10 dark:shadow-black/40">
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
    <figure className="m-0 flex flex-col gap-4">
      {/* Brandlete wordmark above the spots. John wanted the graphic kept but
          the "Explainer & Commercial Spots" caption text dropped. */}
      <img
        src="/brandlete-logo-light.png"
        alt="Brandlete"
        className="mx-auto h-8 w-auto dark:hidden sm:h-9"
      />
      <img
        src="/brandlete-logo-dark.png"
        alt="Brandlete"
        className="mx-auto hidden h-8 w-auto dark:block sm:h-9"
      />

      {/* Desktop: both, centered and equal, held to a comfortable width so two
          tiles don't stretch edge to edge. */}
      <div className="mx-auto hidden w-full max-w-3xl md:grid md:grid-cols-2 md:gap-4">
        {ITEMS.map((item) => (
          <Tile key={key(item)} item={item} />
        ))}
      </div>

      {/* Mobile + tablet: swipe carousel, one centered with a peek of the next. */}
      <div className="md:hidden">
        <div
          ref={trackRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth px-[9%] pb-1 sm:px-[18%]"
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
