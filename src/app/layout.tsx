import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import {
  LINK_PREVIEW_DESCRIPTION,
  PUBLIC_EMAIL,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
} from "@/data/site";
import { socials } from "@/data/socials";

import "./globals.css";

// Brandlete brand type: Playfair Display headlines + Inter body. The CSS
// variable names below are legacy (--font-sora / --font-ibm-plex) so the
// existing font-[family-name:var(--font-sora)] usages across components keep
// working — only the underlying typeface changed.
const display = Playfair_Display({
  weight: ["600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const body = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: LINK_PREVIEW_DESCRIPTION,
  applicationName: SITE_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    title: SITE_TITLE,
    description: LINK_PREVIEW_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [{ url: "/og.png?v=86", width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: LINK_PREVIEW_DESCRIPTION,
    images: ["/og.png?v=86"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f7fb" },
    { media: "(prefers-color-scheme: dark)", color: "#05070d" },
  ],
};

const themeInit = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d);}catch(e){document.documentElement.classList.add('dark');}})();`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_NAME,
  url: SITE_URL,
  email: PUBLIC_EMAIL,
  jobTitle: "VP of Partnerships & Growth Leader",
  address: { "@type": "PostalPlace", addressLocality: "Buffalo", addressRegion: "NY" },
  sameAs: socials.filter((s) => s.external).map((s) => s.href),
  worksFor: [
    { "@type": "Organization", name: "Brandlete, Inc.", url: "https://brandlete.com" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
