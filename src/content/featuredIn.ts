/** Individual video appearance */
export interface VideoAppearance {
  videoId: string;
  title: string;
  description: string;
  duration: string;
  host?: string;
  date?: string;
  outlet: "KUSI" | "Fox 5";
}

export const FEATURED_IN = [
  {
    slug: "kusi",
    name: "KUSI News",
    logoUrl: "https://franklinforsupervisor.com/wp-content/uploads/2026/01/KUSI-LOGO.webp",
    sourceUrl: "https://www.youtube.com/watch?v=V0LDn67bbis",
    // Extended content for subpage
    headline: "TV Appearances",
    subhead: "Watch my interviews on local news",
    // Featured/primary video
    videoId: "V0LDn67bbis",
    date: "2025",
    host: "Paul Rudy",
    duration: "4:40",
    description:
      "I've been fortunate to appear on KUSI and Fox 5 to discuss the issues that matter most to North County families—housing affordability, public safety, homelessness, and economic development. Watch my interviews below.",
    keyPoints: [
      "Fighting against tax increases that hurt working families",
      "Addressing homelessness with compassion and accountability",
      "Supporting economic development in North County",
      "Standing up for common-sense policies that deliver results",
    ],
    // KUSI / Fox 5 video appearances
    videos: [
      {
        videoId: "V0LDn67bbis",
        title: "On San Diego Tax Hikes",
        description:
          "I joined Paul Rudy on KUSI's Good Morning San Diego to discuss my opposition to the proposed Transfer Tax that would add $14,000 to the cost of selling a median-priced home.",
        duration: "4:40",
        host: "Paul Rudy",
        date: "2025",
        outlet: "KUSI",
      },
      {
        videoId: "g2_qv-RThEQ",
        title: "Vista Economic Developments",
        description:
          "Discussing the economic developments in Vista and the greater North County region on KUSI's monthly North County Mayor series.",
        duration: "6:30",
        outlet: "KUSI",
      },
      {
        videoId: "03ww-xNLAA4",
        title: "Extended Interview on Homelessness",
        description:
          "An in-depth conversation about homelessness in Vista, where I discussed how close to 200 people live on our streets and my approach to addressing this crisis with both compassion and accountability.",
        duration: "11:40",
        outlet: "Fox 5",
      },
      {
        videoId: "cbNWiTCfbXk",
        title: "Vista Mayoral Candidate Interview",
        description:
          "I appeared on Fox 5 News at 1 p.m. to discuss my vision for Vista and why I was running for Mayor.",
        duration: "5:00",
        outlet: "Fox 5",
      },
    ] as VideoAppearance[],
  },
  {
    slug: "sdut",
    name: "San Diego Union-Tribune",
    logoUrl: "https://franklinforsupervisor.com/wp-content/uploads/2026/01/SDTB-1024x236.png",
    sourceUrl:
      "https://www.sandiegouniontribune.com/2025/09/30/opinion-to-reduce-homelessness-pair-compassion-with-accountability/",
    headline: "Opinion: To reduce homelessness, pair compassion with accountability",
    subhead: "A clear, measurable approach to get people off the street and restore public safety",
    date: "Sept. 30, 2025",
    description:
      "In this op-ed, I lay out why San Diego County must pair compassion with accountability—expanding treatment options for the severely mentally ill, demanding results for taxpayer dollars, and supporting strategies that reduce encampments while connecting people to shelter and services.",
    keyPoints: [
      "I want life-saving treatment options for people who are too sick to choose help on their own",
      "I support accountability for government programs so taxpayers can see real results",
      "I support pairing shelter and services with enforcement so refusing help doesn’t become the default",
      "I want policies that restore safety and dignity in our neighborhoods and for those suffering on the streets",
    ],
  },
  {
    slug: "franklin-for-supervisor",
    name: "Franklin for Supervisor",
    logoUrl: "https://franklinforsupervisor.com/wp-content/uploads/2026/01/Subheading-1024x262.png",
    sourceUrl:
      "https://franklinforsupervisor.com/wp-content/uploads/2026/01/1768601284709-5c6e4dec-d9cd-49a6-911b-7057b1e021a8_1.png",
  },
] as const;

export type FeaturedInItem = (typeof FEATURED_IN)[number];

