import type { Metadata } from "next";
import { IssuesVideosSection } from "@/components/sections/IssuesVideosSection";
import { RecordNewsSection } from "@/components/sections/RecordNewsSection";
import { PrioritiesSection } from "@/components/sections/PrioritiesSection";
import { SectionDivider } from "@/components/ui/SectionDivider";

export const metadata: Metadata = {
  title: "John on the Issues | John Franklin for Supervisor 2026",
  description:
    "Short videos where John Franklin lays out the issue, the stakes, and what San Diego County should do next.",
  openGraph: {
    title: "John on the Issues | John Franklin for Supervisor 2026",
    description:
      "Short videos where John Franklin lays out the issue, the stakes, and what San Diego County should do next.",
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
  { title: "No Early Release for Sexually Violent Predators:", videoId: "8PV5N9RD9W8" },
  { title: "Fiscal Responsibility:", videoId: "rELPIcuan2w" },
] as const;

const SOURCE_ICON_UTSD =
  "https://franklinforsupervisor.com/wp-content/uploads/2026/01/UTSD-34f9e2.svg";

export default function IssuesPage() {
  return (
    <>
      <IssuesVideosSection
        volunteerUrl="https://secure.franklinforsupervisor.com/volunteer-web"
        items={[...ISSUE_VIDEOS]}
        borderless
      />

      <SectionDivider variant="wave1" />

      <RecordNewsSection
        donateUrl="https://secure.franklinforsupervisor.com/15?_gl=1*1jmx4dj*_gcl_au*NDI0MzU5NjY1LjE3NjQ2OTQ1NTM."
        borderless
        lead={{
          title: "SANDAG’s Multibillion-Dollar Project: The Case Is Full of Holes",
          url: "https://www.sandiegouniontribune.com/2025/04/23/opinion-sandags-case-for-multibillion-dollar-project-is-full-of-holes/",
          ariaLabel: "Read: SANDAG’s Multibillion-Dollar Project: The Case Is Full of Holes",
          imageUrl:
            "https://franklinforsupervisor.com/wp-content/uploads/2026/01/Opinion-SANDAGs-case-for-multibillion-dollar-project-is-full-of-holes-.webp",
          imageAlt: "SANDAG rail project",
          sourceIconUrl: SOURCE_ICON_UTSD,
          sourceName: "San Diego Union-Tribune",
          dateLabel: "Apr 23, 2025",
          dateTime: "2025-04-23",
          excerpt:
            "A clear-eyed critique of the plan’s assumptions, costs, and accountability — and why taxpayers deserve answers.",
        }}
        rail={[
          {
            title: "County Tax Hikes Must Be Rejected",
            url: "https://www.sandiegouniontribune.com/2025/03/19/opinion-supervisors-push-for-higher-county-taxes-must-be-rejected/",
            imageUrl:
              "https://franklinforsupervisor.com/wp-content/uploads/2026/01/Opinion-Supervisors-push-for-higher-county-taxes-must-be-rejected-.webp",
            imageAlt: "Home with for sale sign",
            sourceIconUrl: SOURCE_ICON_UTSD,
            sourceName: "San Diego Union-Tribune",
            dateLabel: "Mar 19, 2025",
            dateTime: "2025-03-19",
          },
          {
            title: "Pair Compassion With Accountability",
            url: "https://www.sandiegouniontribune.com/2025/09/30/opinion-to-reduce-homelessness-pair-compassion-with-accountability/",
            imageUrl:
              "https://franklinforsupervisor.com/wp-content/uploads/2026/01/Opinion-To-reduce-homelessness-pair-compassion-with-accountability-.webp",
            imageAlt: "Speaker at podium",
            sourceIconUrl: SOURCE_ICON_UTSD,
            sourceName: "San Diego Union-Tribune",
            dateLabel: "Sep 30, 2025",
            dateTime: "2025-09-30",
          },
          {
            title: "Transfer Tax Hike Will Worsen the Housing Crisis",
            url: "https://voiceofsandiego.org/2025/04/25/terra-lawson-remers-property-transfer-tax-hike-will-worsen-the-housing-crisis/",
            imageUrl:
              "https://franklinforsupervisor.com/wp-content/uploads/2026/01/Terra-Lawson-Remers-Property-Transfer-Tax-Hike-Will-Worsen-the-Housing-Crisis-.jpg",
            imageAlt: "Housing event",
            sourceIconUrl: SOURCE_ICON_UTSD,
            sourceName: "Voice of San Diego",
            dateLabel: "Apr 25, 2025",
            dateTime: "2025-04-25",
          },
        ]}
      />

      <SectionDivider variant="wave2" />

      <PrioritiesSection
        borderless
        cards={[
          {
            type: "text",
            id: "affordability",
            title: "Affordability",
            lead:
              "We must tackle the rising cost of living by lowering taxes and making housing more affordable for working and middle class families.",
            bullets: [
              "Oppose the Vehicle Milage Tax (VMT)",
              "Oppose Sales Tax Increases",
              "Oppose the Housing Sales Tax (Transfer Tax)",
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
              "Oppose Dangerous Sanctuary City Policies that protect Murders, Rapists and Drug Dealers",
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

