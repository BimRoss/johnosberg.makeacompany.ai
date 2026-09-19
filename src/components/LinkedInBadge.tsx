"use client";

import { useEffect, useRef, useState } from "react";

// LinkedIn's official profile badge. The profile.js loader scans the DOM for
// any `.LI-profile-badge` placeholder and swaps in a live iframe card. We inject
// the placeholder as raw HTML (via a ref, not JSX) so React never reconciles the
// subtree LinkedIn mutates, then append the loader once the placeholder is in
// the DOM. Theme is picked to match whatever the site is showing at load.
export default function LinkedInBadge() {
  const holder = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted || !holder.current) return;
    const dark = document.documentElement.classList.contains("dark");
    holder.current.innerHTML =
      `<div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium"` +
      ` data-theme="${dark ? "dark" : "light"}" data-type="VERTICAL" data-vanity="johnosberg"` +
      ` data-version="v1"><a class="badge-base__link LI-simple-link"` +
      ` href="https://www.linkedin.com/in/johnosberg?trk=profile-badge">John Osberg</a></div>`;

    const script = document.createElement("script");
    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, [mounted]);

  return <div ref={holder} className="flex justify-center min-h-[280px]" />;
}
