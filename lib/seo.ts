const FALLBACK_URL = "https://rohitmanora.vercel.app";

/**
 * Resolve the canonical origin, tolerating the ways this actually gets
 * misconfigured: an unset variable, a variable present but blank, a value
 * pasted without a protocol, or a trailing slash.
 *
 * `??` alone is not enough — an empty string is neither null nor undefined, so
 * it passes through and `new URL("")` throws at build time.
 */
function resolveSiteUrl(): string {
  const candidates = [
    process.env.NEXT_PUBLIC_SITE_URL,
    // Set automatically by Vercel, so a deploy works with zero configuration.
    process.env.VERCEL_PROJECT_PRODUCTION_URL,
    FALLBACK_URL,
  ];

  for (const candidate of candidates) {
    const value = candidate?.trim();
    if (value === undefined || value === "") continue;
    const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`;
    try {
      return new URL(withProtocol).origin;
    } catch {
      // Malformed — fall through to the next candidate.
    }
  }

  return FALLBACK_URL;
}

/**
 * Canonical site URL. Drives canonical tags, Open Graph URLs, sitemap and robots.
 *
 * Precedence: NEXT_PUBLIC_SITE_URL -> Vercel's production domain -> fallback.
 * Set NEXT_PUBLIC_SITE_URL only when using a custom domain.
 */
export const SITE_URL = resolveSiteUrl();

export const SITE_NAME = "Rohit Manora";

export const SITE_TITLE = "Rohit Manora — Senior Experience Engineer";

export const SITE_DESCRIPTION =
  "Rohit Manora is a Senior Experience Engineer at Publicis Sapient, building frontend architectures, microfrontends and enterprise web applications with React, Next.js and Adobe Experience Manager.";
