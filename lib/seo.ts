/**
 * Canonical site URL. Set NEXT_PUBLIC_SITE_URL in the Vercel project settings
 * (and in .env.local for local builds) — canonical, Open Graph and sitemap
 * URLs all derive from it.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://rohitmanora.vercel.app"
).replace(/\/$/, "");

export const SITE_NAME = "Rohit Manora";

export const SITE_TITLE = "Rohit Manora — Senior Experience Engineer";

export const SITE_DESCRIPTION =
  "Rohit Manora is a Senior Experience Engineer at Publicis Sapient, building frontend architectures, microfrontends and enterprise web applications with React, Next.js and Adobe Experience Manager.";
