export default function OzmosisLink() {
  return (
    <a
      href="https://powerofozmosis.makeacompany.ai"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="POWER of OZmosis (opens in a new tab)"
      title="POWER of OZmosis"
      className="fixed left-16 top-4 z-30 inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/15 bg-white ring-1 ring-black/5 backdrop-blur-md transition-all hover:border-[#f5c518]/60 hover:ring-[#f5c518]/30 dark:border-white/20 sm:left-[4.75rem] sm:top-6"
    >
      {/* Real OZmosis mark on a clean white chip so the navy reads in both themes. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/oz-logo.png" alt="" aria-hidden className="h-6 w-6 object-contain" />
    </a>
  );
}
