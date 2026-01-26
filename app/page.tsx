import { CallToAction } from "@/components/sections/CallToAction";
import { Hero } from "@/components/sections/Hero";
import { Issues } from "@/components/sections/Issues";

export default function Home() {
  return (
    <>
      <Hero
        title={
          <>
            Leadership for
            <br />
            San Diego County
          </>
        }
        subtitle="After 14 years of elected public service, I'm ready to meet the challenges our region faces. A husband, local business owner, Mayor, and proud member of the North County community."
        donateUrl="https://secure.franklinforsupervisor.com/15"
        volunteerUrl="https://secure.franklinforsupervisor.com/volunteer-web"
      />

      <Issues
        items={[
          {
            title: "Affordability",
            description: "Lower the cost of living and protect working and middle-class families.",
          },
          {
            title: "Homelessness",
            description: "Real solutions that restore safety, accountability, and compassion.",
          },
          {
            title: "Public Safety",
            description: "Support law enforcement and policies that prevent crime before it starts.",
          },
          {
            title: "Fire Prevention",
            description: "Plan now—firebreaks, evacuation routes, and prevention technology that works.",
          },
          {
            title: "Fix our Roads",
            description: "Deliver on the 78 corridor and reduce traffic with real infrastructure.",
          },
          {
            title: "Community",
            description: "Families, faith, and neighbors working together for a safer, cleaner North County.",
          },
        ]}
      />

      <CallToAction
        title="Help us win in District 5"
        body="This campaign is powered by neighbors who want safer communities, lower costs, and accountable county government. Join the team—volunteer your time or chip in what you can today."
        primaryCta={{ label: "Donate", href: "https://secure.franklinforsupervisor.com/15" }}
        secondaryCta={{ label: "Volunteer", href: "https://secure.franklinforsupervisor.com/volunteer-web" }}
      />
    </>
  );
}
