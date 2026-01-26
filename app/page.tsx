import { CallToAction } from "@/components/sections/CallToAction";
import { HomeCoverHero } from "@/components/sections/HomeCoverHero.client";
import { HomeIconIssues } from "@/components/sections/HomeIconIssues";
import { HomePressStrip } from "@/components/sections/HomePressStrip";
import { HomeThreeColumnBand } from "@/components/sections/HomeThreeColumnBand";
import { SectionDivider } from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <>
      <HomeCoverHero donateUrl="https://secure.franklinforsupervisor.com/15" endorsementsHref="/endorsements" />

      <SectionDivider variant="wave1" />

      <HomeThreeColumnBand donateUrl="https://secure.franklinforsupervisor.com/15" />

      <SectionDivider variant="dots" />

      <HomePressStrip />

      <SectionDivider variant="wave2" />

      <HomeIconIssues learnMoreHref="/issues" />

      <CallToAction
        title="Help us win in District 5"
        body="This campaign is powered by neighbors who want safer communities, lower costs, and accountable county government. Join the team—volunteer your time or chip in what you can today."
        primaryCta={{ label: "Donate", href: "https://secure.franklinforsupervisor.com/15" }}
        secondaryCta={{ label: "Volunteer", href: "https://secure.franklinforsupervisor.com/volunteer-web" }}
      />
    </>
  );
}
