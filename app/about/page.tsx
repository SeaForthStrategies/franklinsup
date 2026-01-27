import type { Metadata } from "next";

import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "About | My campaign for Supervisor 2026",
  description:
    "Learn more about me — my record of service, priorities, and why I’m running to represent San Diego County District 5.",
  openGraph: {
    title: "About | My campaign for Supervisor 2026",
    description:
      "Learn more about me — my record of service, priorities, and why I’m running to represent San Diego County District 5.",
    url: "https://franklinforsupervisor.com/about",
    siteName: "Franklin for Supervisor",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <section className="bg-neutral-base">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <SectionHeader
          eyebrow="About"
          title="Meet me"
          lead="A proven local leader focused on public safety, responsible spending, and real results for North County."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3 lg:gap-10">
          <div className="lg:col-span-2">
            <div className="prose prose-neutral max-w-none">
              <p>
                I’m running for San Diego County Supervisor to deliver common-sense leadership for District 5. This campaign is focused on
                the basics: safe communities, strong infrastructure, and a county government that respects taxpayers.
              </p>
              <p>
                We’re building this page now. In the meantime, you can learn more by visiting the Issues page and
                following campaign updates in News.
              </p>
            </div>
          </div>

          <aside className="rounded-3xl border border-neutral-border bg-neutral-surface p-6 shadow-card">
            <p className="text-xs font-black uppercase tracking-widest text-neutral-slate/80">Quick links</p>
            <div className="mt-4 flex flex-col gap-3">
              <a className="site-cta site-cta--secondary" href="/issues">
                Issues
              </a>
              <a className="site-cta site-cta--secondary" href="/news">
                News
              </a>
              <a
                className="site-cta site-cta--primary"
                href="https://secure.franklinforsupervisor.com/15"
                target="_blank"
                rel="noopener noreferrer"
              >
                Donate
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

