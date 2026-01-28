import type { Metadata } from "next";

import { EndorsementsGrid, ORGANIZATION_ENDORSEMENTS, PEOPLE_ENDORSEMENTS } from "@/components/sections/EndorsementsGrid";
import { EndorsementQuote } from "@/components/sections/EndorsementQuote";
import { EndorsementsTopAnimations } from "@/components/sections/EndorsementsTopAnimations.client";
import { SectionDivider } from "@/components/ui/SectionDivider";

export const metadata: Metadata = {
  title: "Endorsements – Support my campaign",
  openGraph: {
    title: "Endorsements – Support my campaign",
    url: "https://franklinforsupervisor.com/endorsements",
    siteName: "Franklin for Supervisor",
    type: "website",
  },
};

export default function EndorsementsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary-900 py-14 text-white sm:py-20 lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-25">
          <div className="absolute inset-0 bg-[radial-gradient(900px_260px_at_50%_-10%,rgba(59,130,246,.35),transparent_60%)]" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-balance text-4xl font-black uppercase tracking-tight text-white sm:text-5xl md:text-6xl">
              Endorsements
            </h1>

            <EndorsementsTopAnimations people={PEOPLE_ENDORSEMENTS} organizations={ORGANIZATION_ENDORSEMENTS} />
          </div>
        </div>
      </section>

      <SectionDivider variant="wave1" className="opacity-70" />

      <section className="relative overflow-hidden bg-primary-900 text-white">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(1100px_520px_at_50%_0%,rgba(239,68,68,.18),transparent_62%)]" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <EndorsementsGrid endorsements={PEOPLE_ENDORSEMENTS} variant="people" />

          <div className="mt-14 sm:mt-16">
            <h2 className="text-center text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
              Organizations
            </h2>
            <div className="mt-6 sm:mt-8">
              <EndorsementsGrid endorsements={ORGANIZATION_ENDORSEMENTS} variant="orgs" />
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="wave2" className="opacity-70" />

      <EndorsementQuote
        quote="Mayor Franklin is a common sense thinker who doesn’t take no for an answer. I’ve known him for 21 years. He’s a problem solver who gets to the source of the problem and finds solutions. He believes in accountability and transparency. He’s got my vote!"
        author="Congressman Darrell Issa"
        imageUrl="https://franklinforsupervisor.com/wp-content/uploads/2025/02/272330064_479135523575125_5456602968414208822_n.jpg"
        tone="dark"
      />
    </>
  );
}
