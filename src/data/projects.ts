// Every URL here was checked live and returned 200 on 2026-07-29.
// Deliberately left out: Mental Bank Ledger (private), the private QR generator,
// and anything with revenue numbers attached. Add them back only on purpose.

export type Project = {
  name: string;
  blurb: string;
  href: string;
  meta: string;
  accent: string;
  tone: string;
};

export const projects: Project[] = [
  {
    name: "Uplift Coach",
    blurb:
      "An AI life coach that lives in Telegram. Subscription product, built and run solo: bot, billing, and the marketing site.",
    href: "https://upliftcoach.netlify.app",
    meta: "live · subscription",
    accent: "var(--green)",
    tone: "var(--green-text)",
  },
  {
    name: "GetQRCodePro",
    blurb:
      "QR code generator with a one-time price instead of a subscription, which is most of the pitch. Static site, no backend.",
    href: "https://getqrcodepro.com",
    meta: "live · product",
    accent: "var(--blue)",
    tone: "var(--blue-text)",
  },
  {
    name: "Eleven Eleven Paper Co",
    blurb:
      "Angel numbers, written up properly, attached to a print shop. An experiment in whether good content can carry a small merch catalogue.",
    href: "https://elevenelevenpaperco.com",
    meta: "live · content + merch",
    accent: "var(--purple)",
    tone: "var(--purple-text)",
  },
  {
    name: "Free Reverse Image Search",
    blurb:
      "Multi-engine launcher, an EXIF parser written from scratch, and three perceptual hashes. One file, no server, MIT licensed.",
    href: "https://github.com/benjaminc-tech/free-reverse-image-search",
    meta: "open source · MIT",
    accent: "var(--red)",
    tone: "var(--red-text)",
  },
  {
    name: "Middle Pillar Tutorial",
    blurb:
      "An interactive walkthrough of a nine-step Golden Dawn ritual. Not monetised, not trying to be. I just wanted it to exist.",
    href: "https://benjaminc-tech.github.io/middle-pillar-tutorial",
    meta: "live · free",
    accent: "var(--yellow)",
    tone: "var(--yellow-text)",
  },
  {
    name: "Numerology Calculator",
    blurb:
      "Does the arithmetic that numerology sites bury under three screens of preamble. Loads instantly, asks for nothing.",
    href: "https://free-numerology-calculator.netlify.app",
    meta: "live · free tool",
    accent: "var(--blue)",
    tone: "var(--blue-text)",
  },
];

export const elsewhere = [
  { label: "github", href: "https://github.com/benjaminc-tech" },
  // Fill these in, or delete the ones you do not want public.
  { label: "x", href: "https://x.com/" },
  { label: "linkedin", href: "https://www.linkedin.com/" },
  { label: "instagram", href: "https://instagram.com/" },
  { label: "email", href: "mailto:benjamincgoldberger@gmail.com" },
];
