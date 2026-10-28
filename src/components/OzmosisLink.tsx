function BoltIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden
    >
      <path d="M13 2L4.5 13.5H11l-1 8.5 8.5-11.5H12l1-8.5z" />
    </svg>
  );
}

export default function OzmosisLink() {
  return (
    <a
      href="https://powerofozmosis.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="POWER of OZmosis (opens in a new tab)"
      title="POWER of OZmosis"
      className="fixed left-4 top-4 z-30 inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/15 bg-white/70 text-zinc-700 backdrop-blur-md transition-colors hover:border-black/40 hover:text-zinc-900 dark:border-white/15 dark:bg-white/5 dark:text-zinc-300 dark:hover:border-white/50 dark:hover:text-white sm:left-6 sm:top-6"
    >
      <BoltIcon />
    </a>
  );
}
