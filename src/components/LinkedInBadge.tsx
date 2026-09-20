import Image from "next/image";
import { LinkedInIcon } from "@/data/socials";

// A self-contained LinkedIn card. We used to inject LinkedIn's official
// profile.js badge here, but that loader drops an iframe that silently fails to
// render on plenty of mobile browsers, leaving a tall blank gap where the card
// should be. This static card always renders, matches the site's look, and
// links straight to the profile.
export default function LinkedInBadge() {
  return (
    <a
      href="https://www.linkedin.com/in/johnosberg?trk=profile-badge"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex w-full max-w-sm flex-col items-center gap-4 rounded-xl border border-black/10 bg-white/70 p-6 text-center shadow-sm backdrop-blur-md transition-colors hover:border-[#0a66c2]/50 hover:bg-white/90 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-[#4d9fe8]/50 dark:hover:bg-white/[0.07]"
    >
      <Image
        src="/headshot-v2.png"
        alt="John Osberg"
        width={80}
        height={80}
        className="h-20 w-20 rounded-full object-cover ring-2 ring-[#0a66c2]/30"
      />
      <div className="flex flex-col gap-0.5">
        <span className="font-[family-name:var(--font-sora)] text-lg font-bold text-zinc-950 dark:text-white">
          John Osberg
        </span>
        <span className="text-sm text-zinc-600 dark:text-zinc-300">
          Founding Director &amp; VP Partnerships @ Brandlete
        </span>
      </div>
      <span className="inline-flex items-center gap-2 rounded-sm border border-[#0a66c2]/60 bg-[#0a66c2]/10 px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#0a66c2] transition-colors group-hover:bg-[#0a66c2] group-hover:text-white dark:border-[#4d9fe8]/50 dark:text-[#66b2ff] dark:group-hover:bg-[#0a66c2] dark:group-hover:text-white">
        <LinkedInIcon className="h-4 w-4 shrink-0" />
        View Profile
        <span className="transition-transform group-hover:translate-x-0.5">↗</span>
      </span>
    </a>
  );
}
