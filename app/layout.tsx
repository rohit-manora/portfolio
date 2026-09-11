import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Inter, JetBrains_Mono } from "next/font/google";
import { buildJsonLd } from "@/lib/jsonld";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "@/lib/seo";
import "./globals.css";

/* Self-hosted, latin subset, swap — no external request, no FOUT, no CLS (§17) */
const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  /* Terms the page genuinely establishes — no stuffing toward generic head terms */
  keywords: [
    "Rohit Manora",
    "Senior Experience Engineer",
    "Frontend Architecture",
    "Microfrontend Architecture",
    "React Developer",
    "Next.js Developer",
    "Adobe Experience Manager",
    "Publicis Sapient",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#08090b",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <a
          href="#main"
          className="sr-only-custom focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:border focus:border-line focus:bg-surface-2 focus:px-4 focus:py-2 focus:text-text-primary"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: buildJsonLd() }}
        />
      </body>
    </html>
  );
}
