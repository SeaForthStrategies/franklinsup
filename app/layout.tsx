import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { DevOnlyPreviewSwitcher } from "@/components/dev/DevOnlyPreviewSwitcher.client";
import faviconPng from "@/Images/Franklin Favicon.png";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "I’m running for San Diego County Supervisor 2026",
  description: "Experienced leadership for District 5. Fighting for affordability, public safety, fire prevention, and fixing our roads.",
  keywords: ["San Diego County", "Supervisor", "District 5", "North County", "2026 Election"],
  authors: [{ name: "My campaign" }],
  icons: {
    icon: faviconPng.src,
    apple: faviconPng.src,
  },
  openGraph: {
    title: "I’m running for Supervisor 2026",
    description: "Leadership for San Diego County District 5",
    url: "https://franklinforsupervisor.com",
    siteName: "Franklin for Supervisor",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "I’m running for Supervisor 2026",
    description: "Leadership for San Diego County District 5",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <head>
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://i.ytimg.com" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://i.ytimg.com" />
      </head>
      <body>
        {process.env.NODE_ENV !== "production" ? <DevOnlyPreviewSwitcher /> : null}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-neutral-surface focus:px-4 focus:py-3 focus:shadow-card focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
