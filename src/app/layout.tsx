import type { Metadata, Viewport } from "next";
import { Alfa_Slab_One, DM_Sans, Fraunces } from "next/font/google";
import type { ReactNode } from "react";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/json-ld";
import { MobileBar } from "@/components/mobile-bar";
import { site } from "@/content/site";
import { allowIndexing } from "@/lib/indexing";
import { getSiteUrl } from "@/lib/site-url";

import "./globals.css";

const slab = Alfa_Slab_One({ subsets: ["latin"], weight: "400", variable: "--font-slab-face", display: "swap" });
const serif = Fraunces({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-serif-face", display: "swap" });
const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans-face", display: "swap" });

const title = "13 Gypsies · Spanish Tapas in Riverside, Jacksonville";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: { default: title, template: `%s · ${site.name}` },
  description: site.description,
  applicationName: site.name,
  openGraph: { type: "website", locale: "en_US", siteName: site.name, title, description: site.description, url: "/", images: ["/images/dining-room.webp"] },
  twitter: { card: "summary_large_image", title, description: site.description },
  robots: allowIndexing() ? { index: true, follow: true } : { index: false, follow: false, googleBot: { index: false, follow: false } },
  formatDetection: { telephone: true, address: true },
};

export const viewport: Viewport = { themeColor: "#1d1d1a", width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${slab.variable} ${serif.variable} ${sans.variable} h-full`}>
      <body className="min-h-full bg-bone font-sans text-ink antialiased">
        <a href="#content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-coal focus:px-4 focus:py-3 focus:text-paper">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
        <MobileBar />
        <JsonLd />
      </body>
    </html>
  );
}
