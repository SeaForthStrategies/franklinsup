import type { Metadata } from "next";

import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Endorsements | My campaign for Supervisor 2026",
  description: "A growing coalition supporting me for San Diego County Supervisor, District 5.",
  openGraph: {
    title: "Endorsements | My campaign for Supervisor 2026",
    description: "A growing coalition supporting me for San Diego County Supervisor, District 5.",
    url: "https://franklinforsupervisor.com/endorsements",
    siteName: "Franklin for Supervisor",
    type: "website",
  },
};

export default function EndorsementsPage() {
  const contactUrl =
    "https://secure.franklinforsupervisor.com/contact?_gl=1%2A1hbffur%2A_gcl_au%2ANDA2MjI2MjM4LjE3Njk0NDU2NTI.";

  return (
    <section className="bg-neutral-base">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <SectionHeader
          eyebrow="Endorsements"
          title="Support you can trust"
          lead="We’re finalizing an updated list of endorsements and community supporters."
        />

        <div className="mt-10 rounded-3xl border border-neutral-border bg-neutral-surface p-6 shadow-card sm:p-8">
          <p className="text-sm text-neutral-muted">
            If you’d like to add your endorsement, please reach out through the Contact page.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a className="site-cta site-cta--secondary" href={contactUrl}>
              Contact the campaign
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
        </div>
      </div>
    </section>
  );
}

