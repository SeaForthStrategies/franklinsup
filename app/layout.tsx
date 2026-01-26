import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "John Franklin for San Diego County Supervisor 2026",
  description: "Experienced leadership for District 5. Fighting for affordability, public safety, fire prevention, and fixing our roads.",
  keywords: ["John Franklin", "San Diego County", "Supervisor", "District 5", "2026 Election"],
  authors: [{ name: "John Franklin for Supervisor 2026" }],
  openGraph: {
    title: "John Franklin for Supervisor 2026",
    description: "Leadership for San Diego County District 5",
    url: "https://franklinforsupervisor.com",
    siteName: "Franklin for Supervisor",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Franklin for Supervisor 2026",
    description: "Leadership for San Diego County District 5",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-neutral-base focus:px-4 focus:py-3 focus:shadow-card focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Skip to content
        </a>

        <div className="min-h-screen bg-neutral-base text-neutral-ink flex flex-col">
          <Header />

          <main id="main-content" className="flex-1">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
