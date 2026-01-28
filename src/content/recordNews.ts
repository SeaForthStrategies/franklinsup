export type RecordNewsItem = {
  title: string;
  url: string;
  imageUrl: string;
  imageAlt: string;
  sourceIconUrl: string;
  sourceName: string;
  dateLabel: string;
  dateTime: string; // YYYY-MM-DD
  excerpt?: string;
  ariaLabel?: string;
};

export const SOURCE_ICON_UTSD =
  "https://franklinforsupervisor.com/wp-content/uploads/2026/01/UTSD-34f9e2.svg";

export const RECORD_NEWS_LEAD: RecordNewsItem = {
  title: "Opinion: SANDAG’s Multibillion-Dollar Project: The Case Is Full of Holes",
  url: "https://www.sandiegouniontribune.com/2025/04/23/opinion-sandags-case-for-multibillion-dollar-project-is-full-of-holes/",
  ariaLabel: "Read: Opinion: SANDAG’s Multibillion-Dollar Project: The Case Is Full of Holes",
  imageUrl:
    "https://franklinforsupervisor.com/wp-content/uploads/2026/01/Opinion-SANDAGs-case-for-multibillion-dollar-project-is-full-of-holes-.webp",
  imageAlt: "SANDAG rail project",
  sourceIconUrl: SOURCE_ICON_UTSD,
  sourceName: "San Diego Union-Tribune",
  dateLabel: "Apr 23, 2025",
  dateTime: "2025-04-23",
  excerpt:
    "A clear-eyed critique of the plan’s assumptions, costs, and accountability — and why taxpayers deserve answers.",
};

export const RECORD_NEWS_RAIL: RecordNewsItem[] = [
  {
    title: "Opinion: County Tax Hikes Must Be Rejected",
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
    title: "Opinion: To reduce homelessness, pair compassion with accountability",
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
    title: "Terra Lawson-Remer’s Property Transfer Tax Hike Will Worsen the Housing Crisis",
    url: "https://voiceofsandiego.org/2025/04/25/terra-lawson-remers-property-transfer-tax-hike-will-worsen-the-housing-crisis/",
    imageUrl:
      "https://franklinforsupervisor.com/wp-content/uploads/2026/01/Terra-Lawson-Remers-Property-Transfer-Tax-Hike-Will-Worsen-the-Housing-Crisis-.jpg",
    imageAlt: "Housing event",
    sourceIconUrl: SOURCE_ICON_UTSD,
    sourceName: "Voice of San Diego",
    dateLabel: "Apr 25, 2025",
    dateTime: "2025-04-25",
  },
];

