import { CallToAction } from "@/components/sections/CallToAction";
import { HomeCommonSense } from "@/components/sections/HomeCommonSense";
import { HomeExperienceDonate } from "@/components/sections/HomeExperienceDonate";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Hero
        title={
          <>
            A Safer, Cleaner
            <br /> North County
          </>
        }
        subtitle=""
        donateUrl="https://secure.franklinforsupervisor.com/15"
        volunteerUrl="https://secure.franklinforsupervisor.com/volunteer-web"
      />

      <HomeExperienceDonate donateUrl="https://secure.franklinforsupervisor.com/15" />

      <HomeCommonSense learnMoreHref="/issues" />

      <CallToAction
        title="Help us win in District 5"
        body="This campaign is powered by neighbors who want safer communities, lower costs, and accountable county government. Join the team—volunteer your time or chip in what you can today."
        primaryCta={{ label: "Donate", href: "https://secure.franklinforsupervisor.com/15" }}
        secondaryCta={{ label: "Volunteer", href: "https://secure.franklinforsupervisor.com/volunteer-web" }}
      />
    </>
  );
}
