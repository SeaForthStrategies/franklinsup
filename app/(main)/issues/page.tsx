import type { Metadata } from "next";
import { IssuesVideosSection } from "@/components/sections/IssuesVideosSection";
import { PrioritiesSection } from "@/components/sections/PrioritiesSection";
import { SectionDivider } from "@/components/ui/SectionDivider";

export const metadata: Metadata = {
  title: "My take on the issues | My campaign for Supervisor 2026",
  description:
    "Short videos where I lay out the issue, the stakes, and what San Diego County should do next.",
  openGraph: {
    title: "My take on the issues | My campaign for Supervisor 2026",
    description:
      "Short videos where I lay out the issue, the stakes, and what San Diego County should do next.",
    url: "https://franklinforsupervisor.com/issues",
    siteName: "Franklin for Supervisor",
    type: "website",
  },
};

const ISSUE_VIDEOS = [
  { title: "No Tax Hikes:", videoId: "V0LDn67bbis" },
  { title: "Homelessness & Crime:", videoId: "pIi1Rx-ZRXg" },
  { title: "Creating Jobs:", videoId: "vybOMe_2_Fs", start: 21 },
  {
    title: "Opposes Sanctuary:",
    videoId: "nULDwnohokU",
  },
  { title: "Criminal Justice:", videoId: "8PV5N9RD9W8" },
  { title: "Fiscal Responsibility:", videoId: "rELPIcuan2w" },
] as const;

export default function IssuesPage() {
  return (
    <>
      <IssuesVideosSection
        volunteerUrl="https://secure.franklinforsupervisor.com/volunteer-web"
        items={[...ISSUE_VIDEOS]}
        borderless
      />

      <SectionDivider variant="wave2" />

      <PrioritiesSection
        sectionAnchorId="priorities"
        borderless
        cards={[
          {
            type: "text",
            id: "affordability",
            title: "Affordability",
            lead:
              "We must tackle the rising cost of living by lowering taxes and making housing more affordable for working and middle class families.",
            bullets: [
              "Oppose the Vehicle Mileage Tax (VMT)",
              "Oppose Sales Tax Increases",
              "Oppose the Transfer Tax",
              "Protect Prop 13",
            ],
            body: [
              "California’s extraordinarily high tax rates drive up costs for all of us: taxes increase the prices for gas, utilities, groceries and housing—for both renters and homeowners. I’m a passionate opponent of higher taxes because they always fall on the backs of working families, cutting into your paycheck and your purchasing power.",
            ],
          },
          {
            type: "image",
            id: "notax",
            title: "No Tax Hikes",
            imageUrl:
              "https://franklinforsupervisor.com/wp-content/uploads/2026/01/1768601284709-5c6e4dec-d9cd-49a6-911b-7057b1e021a8_1.png",
            imageAlt: "No Tax Hikes",
          },
          {
            type: "text",
            id: "homelessness",
            title: "Homelessness",
            lead:
              "We must make saying “yes” to accepting help off the streets and into care as the only acceptable answer from those living on the streets.",
            bullets: [
              "Provide Shelter",
              "Breakup Homeless Camps- a threat to public safety",
              "Conservatorship- People cannot choose to be homeless, we must help them help themselves",
              "As Mayor, I led the creation of Vista’s award-winning homelessness strategic plan that lowered the homeless rate",
            ],
            body: [
              "I strongly believe that we cannot allow people, many of whom suffer from mental illness or substance abuse, to choose homelessness. We need to utilize the conservatorship law enacted by Governor Ronald Reagan in 1967, which allows intervention for individuals who are gravely disabled due to severe mental illness or substance use disorder. San Diego County uses conservatorship 11.2 times less than other large jurisdictions, even though the Board of Supervisors directly oversees this tool through the County Conservator and Mental Health Department. It's time to change that.",
              "I was elected Mayor on a platform focusing on solutions to homelessness and led the creation of Vista’s award-winning Homelessness Strategic Plan. I’ll bring those same results to San Diego County as Supervisor.",
            ],
          },
          {
            type: "text",
            id: "safety",
            title: "Public Safety",
            lead:
              "I’m proud that I was the first mayor to sign Summer Stephan’s petition to pass Prop 36 that will ensure law enforcement has the tools and support to crack down on crime. I've fought for years to expand funding and hire more deputies- and we did it.",
            bullets: [
              "Oppose Dangerous Sanctuary City Policies that protect murderers, rapists, and drug dealers",
              "No more early releases or parole for those that harm our children",
            ],
            body: [
              "Public safety isn’t just about enforcement—it’s about smart policies that prevent crime before it happens. As Supervisor, I will deter criminals from committing the crimes that harm so many of us from every happening to begin with.",
              "I will always fight to stop the placement of sexually violent predators in San Diego County. More are placed here than anywhere else in the state.",
              "Enough is enough.",
            ],
          },
          {
            type: "text",
            id: "fire",
            title: "Fire Prevention",
            lead:
              "Proper planning could have prevented the LA wildfires. San Diego County needs to ensure that does not happen here by:",
            bullets: [
              "Removing Ignition Sources: Especially illegal homeless encampments",
              "Creating Appropriate Firebreaks: These need to be as wide as 300 feet, the length of a football field, in forested areas to keep the fire from jumping.",
              "Building Adequate Evacuation Routes: This is especially important in rural and unincorporated areas of the County. These wide roads can also halt the progress of an advancing fire",
            ],
            body: [
              "Under my leadership, the City of Vista built the finest Fire and Rescue Department in Southern California. We've expanded our firefighting force by 15% to decrease response times, purchased 7 new fire trucks, brush fire rigs, ambulances and other fire apparatus.",
              "We've also invested in cutting edge fire prevention technology by installing two new thermal fire imaging cameras, perched high above the city that immediately detected the recent Mar Vista fire, which our firefighters extinguished in a record 21 minutes. The Mar Vista fire is the fire you didn't hear about on the news, because we were prepared to stop it before it threatened life and property.",
            ],
          },
          {
            type: "text",
            id: "roads",
            title: "Fix our Roads and Reduce Traffic",
            lead:
              "I will finally fix the 78 corridor. SANDAG has failed to fix the SR-78/I-5 interchange and the SR-78/I-15 interchange they’ve promised for decades. As Supervisor, I will deliver.",
            bullets: [
              "Modernized Traffic Signals – Use fiber-optic technology, allowing for synchronized and coordinated signal timing to improve traffic flow, just like I did in Vista",
              "Add Miles of New Lanes to keep traffic moving efficiently on our busiest streets",
              "Hold Developers Accountable – While we need more housing, I’ll insist that new housing projects do not worsen traffic congestion. Every development must fully offset its traffic impact with infrastructure improvements that leave our roads better than before",
            ],
            body: [
              "I want to help fix our transportation system based on the reality of how people actually live and commute in North County. Every family across North County wants the same thing: to get to work, school, the grocery store, and back home safely and quickly. But for too long, outdated infrastructure and unchecked development have made our commutes more frustrating.",
            ],
          },
        ]}
      />
    </>
  );
}

