import { CallToAction } from "@/components/sections/CallToAction";
import { HomeCoverHero } from "@/components/sections/HomeCoverHero.client";
import { HomeQuoteSection } from "@/components/sections/HomeQuoteSection";
import { HomeIconIssues } from "@/components/sections/HomeIconIssues";
import { HomePressStrip } from "@/components/sections/HomePressStrip";
import { HomeStoryStack } from "@/components/sections/HomeStoryStack";
import { HomeSupportDonate } from "@/components/sections/HomeSupportDonate";
import { HomeSupportMarquee } from "@/components/sections/HomeSupportMarquee";

export default function Home() {
  const donateUrl = "https://secure.franklinforsupervisor.com/15";
  const volunteerUrl = "https://secure.franklinforsupervisor.com/volunteer-web";

  return (
    <>
      <HomeCoverHero donateUrl={donateUrl} endorsementsHref="/endorsements" />

      <HomeSupportDonate donateUrl={donateUrl} volunteerUrl={volunteerUrl} />
      <HomeSupportMarquee />

      <HomeQuoteSection
        imageUrl="https://franklinforsupervisor.com/wp-content/uploads/2025/03/331991699_977728099877968_6602021448170566335_n.jpg"
        quote="I’ve spent my career serving our communities—and I’m ready to deliver a safer, cleaner North County."
      />

      <HomeStoryStack
        items={[
          {
            title: "Experience & Focused",
            body: "After 14 years of elected public service, I’m ready to meet the challenges our region faces. I’m a husband, a local small business-owner, a Mayor, and a proud member of the North County community.",
            imageUrl:
              "https://franklinforsupervisor.com/wp-content/uploads/2025/03/334951701_160180913515747_5557203737502548974_n.jpg",
          },
          {
            title: "A common-sense agenda",
            body: "Families deserve safe neighborhoods, dependable infrastructure, and responsible budgeting that protects quality of life. My priorities focus on measurable outcomes—not headlines.",
            imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2025/03/sc2.png",
          },
          {
            title: "People over politics",
            body: "North County works best when leaders listen, build consensus, and deliver. I will partner with cities and communities to get results—without the drama.",
            imageUrl:
              "https://franklinforsupervisor.com/wp-content/uploads/2025/03/347799573_644190660379563_4869575071748284670_n.jpg",
          },
        ]}
      />

      <HomeIconIssues learnMoreHref="/issues" />

      <HomePressStrip />

      <CallToAction
        title="Get involved"
        body=""
        primaryCta={{ label: "Donate", href: donateUrl }}
        secondaryCta={{ label: "Volunteer", href: volunteerUrl }}
      />
    </>
  );
}
