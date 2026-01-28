import type { Metadata } from "next";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { EndorsementsGrid } from "@/components/sections/EndorsementsGrid";
import { EndorsementQuote } from "@/components/sections/EndorsementQuote";
import { SectionDivider } from "@/components/ui/SectionDivider";

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
  return (
    <>
      <section className="bg-neutral-base">
        <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <SectionHeader
            eyebrow="Endorsements"
            title="Support for my campaign"
            align="center"
            lead="A growing coalition of leaders, organizations, and community members supporting my campaign for San Diego County Supervisor, District 5."
          />

          <div className="mt-12">
            <EndorsementsGrid />
          </div>
        </div>
      </section>

      <SectionDivider variant="wave1" />

      <EndorsementQuote
        quote="Mayor Franklin is a common sense thinker who doesn't take no for an answer. I've known him for 21 years. He's a problem solver who gets to the source of the problem and finds solutions. He believes in accountability and transparency. He's got my vote!"
        author="Congressman Darrell Issa"
        imageUrl="https://franklinforsupervisor.com/wp-content/uploads/2025/02/272330064_479135523575125_5456602968414208822_n.jpg"
      />
    </>
  );
}
