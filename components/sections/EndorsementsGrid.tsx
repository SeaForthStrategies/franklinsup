import Image from "next/image";

export interface Endorsement {
  id: string;
  name: string;
  title: string;
  imageUrl: string;
  imageAlt?: string;
   // Optional ACF category from WordPress: "Endorsements" | "Leaders" | "Organizations"
  category?: string;
}

export const ENDORSEMENTS: Endorsement[] = [
  {
    id: "darrell-issa",
    name: "Congressman Darrell Issa",
    title: "",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2024/04/darrell_issa-scaled-e1712009289221-1024x988.jpg",
  },
  {
    id: "vince-fong",
    name: "Congressman Vince Fong",
    title: "",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2025/10/Congressman-Vince-Fong.png",
  },
  {
    id: "duncan-hunter",
    name: "Congressman Duncan L. Hunter",
    title: "",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2024/08/Hunter_EL-1024x988.png",
  },
  {
    id: "tony-strickland",
    name: "Senator Tony Strickland",
    title: "",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2025/10/Senator-Tony-Strickland.png",
  },
  {
    id: "jordan-marks",
    name: "Jordan Z. Marks",
    title: "San Diego County Assessor/Recorder/Clerk",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2024/04/Jordan_Marks.png",
  },
  {
    id: "dan-mcallister",
    name: "Dan McAllister (Ret.)",
    title: "San Diego County Treasurer/Tax Collector",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2024/08/Dan-McAllister_EL-1024x988.png",
  },
  {
    id: "bill-horn",
    name: "Supervisor Bill Horn (Ret.)",
    title: "5th District — 1994–2018",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2024/04/Bill_Horn.jpg",
  },
  {
    id: "pam-slater-price",
    name: "Supervisor Pam Slater Price (Fmr.)",
    title: "Hershell Price (Fmr.), San Diego County Water Authority Rep.",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2025/02/20250221_132121-1024x956.jpg",
  },
  {
    id: "dianne-jacob",
    name: "Supervisor Dianne Jacob (Ret.)",
    title: "2nd District — 1993–2020",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2025/03/attachment1741793747295.png",
  },
  {
    id: "ron-roberts",
    name: "Supervisor Ron Roberts (Ret.)",
    title: "1995–2018",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2024/08/Ron-Roberts-Supervisor-Ret-1-1024x988.png",
  },
  {
    id: "dane-white",
    name: "Mayor Dane White",
    title: "Escondido",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2024/04/dane-white.jpg",
  },
  {
    id: "bill-wells",
    name: "Mayor Bill Wells",
    title: "El Cajon",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2025/03/Mayor-Bill-Wells-1024x957.jpg",
  },
  {
    id: "john-mccann",
    name: "Mayor John McCann",
    title: "Chula Vista",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2024/08/John-McCann_EL-1024x988.png",
  },
  {
    id: "john-minto",
    name: "Mayor John Minto",
    title: "Santee",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2024/04/John-Minto-1024x952.jpg",
    imageAlt: "Mayor John Minto Santee",
  },
  {
    id: "sam-abed",
    name: "Mayor Sam Abed (Ret.)",
    title: "Escondido 2010–2018",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2024/04/Sam_Abed-e1712009216958.jpg",
  },
  {
    id: "ernie-dronenburg",
    name: "Ernie Dronenburg (Ret.)",
    title: "San Diego County Assessor/Recorder/Clerk",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2024/04/ernie_dronenburg-e1712009465988.jpg",
  },
  {
    id: "rick-robinson",
    name: "Councilman Rick Robinson",
    title: "Oceanside",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2024/04/rick-robinson-1024x680.jpeg",
  },
  {
    id: "jeff-fox",
    name: "Councilman Jeff Fox",
    title: "Vista",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2025/03/Jeff_1.png",
  },
  {
    id: "joe-green",
    name: "Councilman Joe Green",
    title: "Vista",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2024/04/Joe-Green.jpg",
  },
  {
    id: "joe-garcia",
    name: "Councilman Joe Garcia",
    title: "Escondido",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2024/04/Joe-Garcia-1024x747.jpg",
  },
  {
    id: "christian-garcia",
    name: "Councilman Christian Garcia",
    title: "Escondido",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2025/03/Councilman-Christian-Garcia.png",
  },
  {
    id: "dan-quirk",
    name: "Councilman Dan Quirk",
    title: "Del Mar",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2024/07/Screenshot-2024-07-03-112430.png",
  },
  {
    id: "dustin-trotter",
    name: "Councilman Dustin Trotter",
    title: "Santee",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2024/08/Councilman-Dustin-Trotter-1024x988.jpg",
  },
  {
    id: "rob-mcnelis",
    name: "Councilman Rob McNelis",
    title: "Santee",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2024/08/Rob-McNelis-1024x988.png",
  },
  {
    id: "steve-goble",
    name: "Councilman Steve Goble",
    title: "El Cajon",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2025/11/City-Councilman-Steve-Goble-El-Cajon.png",
  },
  {
    id: "scott-sherman",
    name: "Councilman Scott Sherman (Ret.)",
    title: "San Diego",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2024/08/scott-sherman-1024x988.png",
  },
  {
    id: "john-moorlach",
    name: "John Moorlach",
    title: "State Senator (Ret.), County Supervisor (Ret.)",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2025/07/john46.png",
  },
  {
    id: "tony-krvaric",
    name: "Tony Krvaric",
    title: "Former San Diego Republican Party Chair",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2024/08/Tony1-1024x988.png",
  },
  {
    id: "corey-gustafson",
    name: "Corey Gustafson",
    title: "Former San Diego Republican Party Chair",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2025/03/Corey1.png",
  },
  {
    id: "amy-reichert",
    name: "Amy Reichert",
    title: "Nominee for Supervisor",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2024/04/amy-reichert-1024x937.jpg",
  },
  {
    id: "jim-kelly",
    name: "Trustee Jim Kelly",
    title: "Grossmont Union HS District",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2024/08/Grossmont_Union_High_School_District_Jim_Kelly-1024x988.jpg",
  },
  {
    id: "jo-mackenzie",
    name: "Director Jo MacKenzie",
    title: "Vista Irrigation District",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2025/04/jo.png",
  },
  {
    id: "marty-miller",
    name: "Director Marty Miller",
    title: "Vista Irrigation District, Board President",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2025/12/marty-1024x988.png",
  },
  {
    id: "frank-hilliker",
    name: "Director Frank Hilliker",
    title: "Lakeside Water District",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2024/08/Frank-Hilliker-1024x988.jpg",
  },
  {
    id: "greg-irvine",
    name: "Director Greg Irvine",
    title: "Rainbow Municipal Water District",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2025/09/Greg-Irvine-1024x988.png",
  },
  {
    id: "lisa-hoffman",
    name: "Director Lisa Hoffman",
    title: "Rainbow Municipal Water District",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2025/10/Lisa-Hoffman.png",
  },
  {
    id: "robb-rattray",
    name: "Director Dr. Robb Rattray",
    title: "Valley Center Fire Protection District",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2025/07/john45.png",
  },
  {
    id: "laurie-edwards-tate",
    name: "Director Laurie Edwards-Tate",
    title: "Palomar Health Board",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2025/02/Laurie-Edwards-Tate-1024x988.png",
  },
  {
    id: "michael-pacheco",
    name: "Director Michael Pacheco",
    title: "Palomar Health Board",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2025/08/Michael-Pacheco-1024x988.png",
  },
  {
    id: "bob-weller",
    name: "Bob Weller",
    title: "EUHSD President — Trustee Area 1",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2025/06/Bob-Weller-President-EUHSD-1024x1024.png",
  },
  {
    id: "christi-knight",
    name: "Christi Knight",
    title: "EUHSD — Trustee Area 3",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2025/06/Christi-Knight-Trustee-Area-3-EUHSD.jpg",
  },
  {
    id: "david-vincent",
    name: "David Vincent",
    title: "EUHSD — Trustee Area 5",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2025/06/David-Vincent-EUHSD-Trustee-Area-5-1024x1024.png",
  },
  {
    id: "zesty-harper",
    name: "Zesty Harper",
    title: "EUSD Region 4 Vice President",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2025/06/Zesty-Harper-Region-4-VP-EUSD-1.png",
  },
  {
    id: "andrew-hayes",
    name: "Andrew Hayes",
    title: "Lakeside School Board President",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2025/12/ah25-1024x988.png",
  },
  {
    id: "jacqueline-kaiser",
    name: "Jacqueline Kaiser",
    title: "Palomar College Board President",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2025/06/Jacqueline-Kaiser-scaled-e1673569397709-300x300-1.jpg",
  },
  {
    id: "yvette-marie-acosta",
    name: "Yvette Marie Acosta",
    title: "Palomar College Board Secretary",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2025/06/Screenshot-2025-06-09-at-11.50.05 AM.png",
  },
  {
    id: "anette-ross",
    name: "Anette Ross",
    title: "RSFSD Board of Trustee",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2025/06/IMG_6777-1024x1024.jpeg",
  },
  {
    id: "aldo-alvidres",
    name: "Aldo Alvidres",
    title: "Fallbrook Planning Group",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2025/10/Aldo-Alvidres.png",
  },
  {
    id: "dan-bickford",
    name: "Dan Bickford",
    title: "Central Committee Member",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2024/08/Untitled-1-1024x988.png",
  },
  {
    id: "bill-exeter",
    name: "Bill Exeter",
    title: "Central Committee Member",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2024/08/Bill-Exeter_EL-1024x988.png",
  },
  {
    id: "linda-lopez-alvarez",
    name: "Linda Lopez-Alvarez",
    title: "Chairwoman of the Escondido Republican Women's Headquarters",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2024/07/Screenshot-2024-07-03-115831.png",
    imageAlt: "A",
  },
  {
    id: "dori-rattray",
    name: "Dori Rattray",
    title: "Chair, Valley Center Community Planning Group",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2025/07/Dori-Rattray-1024x988.png",
  },
  {
    id: "delores-chavez-harmes",
    name: "Delores Chavez-Harmes",
    title: "Valley Center Community Planning Group",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2025/02/Dee-Chavez-Harmes-1024x988.png",
  },
  {
    id: "frank-xu",
    name: "Frank Xu",
    title: "Co-Founder, San Diego Asian Americans for Equality",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2025/08/Frank-Xu.png",
  },
  {
    id: "randy-berholtz",
    name: "Randy Berholtz",
    title: "Former Secretary, California Republican Party",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2025/08/randy-berholtz.png",
  },
  {
    id: "kelly-bagla",
    name: "Kelly Bagla, Esq.",
    title: "",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2025/07/KELLY-BAGLA-ESQ-1024x988.png",
  },
  {
    id: "brett-davis",
    name: "Brett Davis",
    title: "Central Committee Member",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2024/07/brett-davis-sm.jpg",
  },
  {
    id: "bob-divine",
    name: "Bob Divine",
    title: "Central Committee Member",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2024/08/Bob-Divine_EL-1024x988.png",
    imageAlt: "A",
  },
  {
    id: "andrew-skale",
    name: "Andrew Skale",
    title: "Central Committee Member",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2024/08/Andrew-Skale-1024x988.jpg",
  },
  {
    id: "armen-kurdian",
    name: "Armen Kurdian",
    title: "Central Committee Member",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2024/08/Armen-Kurdian-1024x988.jpg",
  },
  {
    id: "craig-candelore",
    name: "Craig Candelore",
    title: "Central Committee Member",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2024/08/Craig-Candelore-1024x988.jpg",
  },
  {
    id: "garvin-walsh",
    name: "Garvin Walsh",
    title: "Central Committee Member",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2024/08/Garvin-Walsh_1-1024x988.jpg",
  },
  {
    id: "haydee-sperling",
    name: "Haydee Sperling",
    title: "Central Committee Member",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2024/08/Haydee-Sperling-1024x988.jpg",
  },
  {
    id: "jonathan-sheeder",
    name: "Jonathan Sheeder",
    title: "Central Committee Member",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2024/08/Jonathan-Sheeder-1009x1024.png",
  },
  {
    id: "lee-demeo",
    name: "Lee DeMeo",
    title: "Central Committee Member",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2024/08/Lee-DeMeo-1024x988.jpg",
  },
  {
    id: "tamara-rodriguez",
    name: "Tamara Rodriguez",
    title: "Central Committee Member",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2024/08/Tamara-Rodriguez-1024x988.png",
  },
  {
    id: "antoinette-aceves",
    name: "Antoinette “Andee” Aceves",
    title: "Central Committee Member",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2024/08/Antoinette-Aceves-1024x988.png",
  },
  {
    id: "erika-lowery",
    name: "Erika Lowery",
    title: "Central Committee Member",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2024/08/Erika-Lowery-1024x988.png",
  },
  {
    id: "patti-hopkins",
    name: "Patti Hopkins",
    title: "Central Committee Member",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2024/08/Patti-Hopkins-1024x988.jpg",
  },
  {
    id: "shirley-nakawatase",
    name: "Shirley Nakawatase",
    title: "Central Committee Member",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2024/08/Shirley-Nakawatase-1024x988.png",
  },
  {
    id: "kori-jensen",
    name: "Council Member Kori Jensen",
    title: "Fmr. Oceanside",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2024/09/Kori-Jensen-953x1024.jpg",
  },
  {
    id: "judy-rees",
    name: "Judy Rees",
    title: "Central Committee Member",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2025/02/20250204_140420-1024x918.jpg",
  },
  {
    id: "edy-johnson",
    name: "Edy Johnson",
    title: "Central Committee Member",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2025/08/Edy-Johnson-1024x988.png",
  },
  {
    id: "corbin-sabol",
    name: "Corbin Sabol",
    title: "Central Committee Member",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2025/08/Corbin-Sabol-1024x988.png",
  },
  {
    id: "rebekah-winfree",
    name: "Rebekah Winfree",
    title: "Central Committee Member 2024–2028",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2025/02/Rebekah-Winfree-1024x988.png",
  },
  {
    id: "summer-boger",
    name: "Summer Boger",
    title: "Central Committee Member 2024–2028",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2025/02/20250217_183812-1024x952.jpg",
  },
  {
    id: "brita-lindstrom",
    name: "Brita Lindstrom",
    title: "Central Committee Alternate Member",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2025/08/Lindstrom.png",
  },
  {
    id: "endorsement-logo-screenshot",
    name: "Endorsing organization logo",
    title: "",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2025/05/Screenshot-2025-05-28-at-9.45.11%E2%80%AFAM.png",
  },
  {
    id: "neca",
    name: "NECA",
    title: "",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2025/07/NECA.png",
  },
  {
    id: "rincon-band",
    name: "Rincon Band of Luiseno",
    title: "",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2025/07/Rincon-Band-of-Luiseno-4.png",
  },
  {
    id: "sycuan",
    name: "Sycuan",
    title: "",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2025/07/Sycuan_Seal.png",
  },
  {
    id: "sdcgo",
    name: "SDCGO",
    title: "",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2025/08/SDCGO-1024x988.png",
  },
  {
    id: "valley-center-republicans",
    name: "Valley Center Republicans",
    title: "",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2025/05/Valley-Center-Republicans.jpg",
  },
  {
    id: "nmsd",
    name: "NMSD",
    title: "",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2025/08/NMSD_Franklin_1-1024x988.png",
  },
  {
    id: "nsdr",
    name: "NSDR",
    title: "",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2025/09/NSDR_1-1024x988.png",
  },
  {
    id: "lc",
    name: "LC",
    title: "",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2025/09/LC2.png",
  },
  {
    id: "nbpc",
    name: "NBPC",
    title: "",
    imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2025/12/NBPC.png",
  },
];

const ORGANIZATION_IDS = new Set([
  "endorsement-logo-screenshot",
  "neca",
  "rincon-band",
  "sycuan",
  "sdcgo",
  "valley-center-republicans",
  "nmsd",
  "nsdr",
  "lc",
  "nbpc",
]);

export const ORGANIZATION_ENDORSEMENTS = ENDORSEMENTS.filter((e) => ORGANIZATION_IDS.has(e.id));
export const PEOPLE_ENDORSEMENTS = ENDORSEMENTS.filter((e) => !ORGANIZATION_IDS.has(e.id));

/**
 * Titles that should be split onto their own line when they appear
 * at the very start of a person's display string.
 *
 * These are only applied to **people** endorsements, never organizations.
 */
const LINE_BREAK_TITLES = [
  "Congressman",
  "Senator",
  "Assessor",
  "Recorder",
  "Clerk",
  "Treasurer",
  "Tax Collector",
  "Supervisor",
  "Mayor",
  "Councilman",
  "Councilwoman",
  "State Senator",
  "Party Chair",
  "Nominee",
  "Trustee",
  "Director",
  "Board President",
  "Central Committee Member",
  "President Trustee",
] as const;

const INLINE_TITLES = [
  "Vice President",
  "Congressman",
  "Congresswoman",
  "Supervisor",
  "Mayor",
  "Councilmember",
  "President",
  "Assemblymember",
  "Senator",
  "Sheriff",
  "Chief",
  "Director",
  "Chair",
  "Commissioner",
  "Judge",
  "CEO",
  "Founder",
] as const;

/**
 * For people endorsements only:
 * - If the `name` string starts with one of the known titles,
 *   split into:
 *   - line 1: title (e.g. "Mayor")
 *   - line 2: name (e.g. "Dane White")
 *   - line 3: any existing `endorsement.title` (e.g. "Escondido")
 *
 * If no known title prefix is found, we return `null` and fall back
 * to the existing inline-title rendering.
 */
function splitLinesForPerson(
  fullName: string,
  extraLine?: string,
): { titleLine: string; nameLine: string; extraLine?: string } | null {
  const normalizedName = fullName.replace(/\s+/g, " ").trim();
  const normalizedExtra = extraLine?.trim();

  if (!normalizedName) return null;

  for (const title of LINE_BREAK_TITLES) {
    if (normalizedName === title || normalizedName.startsWith(`${title} `)) {
      const remainder = normalizedName.slice(title.length).trim();

      // If for some reason there's no remainder, fall back to default rendering.
      if (!remainder) return null;

      if (normalizedExtra) {
        return {
          titleLine: title,
          nameLine: remainder,
          extraLine: normalizedExtra,
        };
      }

      return {
        titleLine: title,
        nameLine: remainder,
      };
    }
  }

  return null;
}

function splitEndorsementName(fullName: string): { primaryName: string; inlineTitle?: string } {
  for (const title of INLINE_TITLES) {
    const index = fullName.indexOf(title);

    if (index === -1) continue;

    if (index === 0) {
      const primaryName = fullName.slice(title.length).trim();
      return {
        primaryName: primaryName || fullName,
        inlineTitle: title,
      };
    }

    const primaryName = fullName.slice(0, index).trim();
    const inlineTitle = fullName.slice(index).trim();

    if (!primaryName || !inlineTitle) {
      continue;
    }

    return { primaryName, inlineTitle };
  }

  return { primaryName: fullName };
}

interface EndorsementCardProps {
  endorsement: Endorsement;
  index: number;
  variant: "people" | "orgs";
}

function EndorsementCard({ endorsement, index, variant }: EndorsementCardProps) {
  const isOrg = variant === "orgs";
  const specialLines = !isOrg ? splitLinesForPerson(endorsement.name, endorsement.title) : null;
  const { primaryName, inlineTitle } = splitEndorsementName(endorsement.name);

  return (
    <div
      className={[
        "endorsement-card-wrap group h-full",
        "animate-[fadeInUp_0.55s_ease-out_backwards]",
        "will-change-transform",
      ].join(" ")}
      style={{ animationDelay: `${Math.min(index * 24, 900)}ms` }}
    >
      <div
        className={[
          "relative flex h-full flex-col overflow-hidden rounded-xl shadow-card sm:rounded-2xl",
          isOrg
            ? "border border-neutral-border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            : "border border-white/10 bg-white/[0.06] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08] hover:shadow-2xl",
        ].join(" ")}
      >
        {/* Image area: fixed square so every card has the same size; image always fills it */}
        <div
          className={[
            "relative w-full flex-shrink-0 overflow-hidden",
            isOrg ? "aspect-square bg-white" : "aspect-square bg-white/[0.08]",
          ].join(" ")}
        >
          {isOrg ? (
            <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-4 md:p-5">
              <div className="relative h-full w-full">
                <Image
                  src={endorsement.imageUrl}
                  alt={endorsement.imageAlt || `${endorsement.name}${endorsement.title ? ` - ${endorsement.title}` : ""}`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                  className="object-contain object-center transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          ) : (
            <>
              <Image
                src={endorsement.imageUrl}
                alt={endorsement.imageAlt || `${endorsement.name}${endorsement.title ? ` - ${endorsement.title}` : ""}`}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                className="object-cover object-center size-full min-w-full min-h-full transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/28" />
            </>
          )}
        </div>

        {isOrg ? null : (
          <div className="flex min-h-0 flex-1 flex-col p-3 sm:p-4 md:p-5">
            {specialLines ? (
              <>
                <h3
                  className={[
                    "font-heading text-sm font-black uppercase tracking-tight sm:text-base md:text-lg leading-tight text-white",
                  ].join(" ")}
                >
                  <span>{specialLines.titleLine}</span>
                  <span className="block">{specialLines.nameLine}</span>
                </h3>
                {specialLines.extraLine ? (
                  <p
                    className={[
                      "mt-0.5 text-[10px] leading-relaxed sm:mt-1 sm:text-xs md:text-sm text-white/75",
                    ].join(" ")}
                  >
                    {specialLines.extraLine}
                  </p>
                ) : (
                  <p
                    aria-hidden="true"
                    className={[
                      "mt-0.5 text-[10px] leading-relaxed sm:mt-1 sm:text-xs md:text-sm invisible",
                    ].join(" ")}
                  >
                    &nbsp;
                  </p>
                )}
              </>
            ) : (
              <>
                <h3
                  className={[
                    "font-heading text-sm font-black uppercase tracking-tight sm:text-base md:text-lg leading-tight text-white",
                  ].join(" ")}
                >
                  <span>{primaryName}</span>
                  {inlineTitle && <span className="block">{inlineTitle}</span>}
                </h3>
                {endorsement.title ? (
                  <p
                    className={[
                      "mt-0.5 text-[10px] leading-relaxed sm:mt-1 sm:text-xs md:text-sm text-white/75",
                    ].join(" ")}
                  >
                    {endorsement.title}
                  </p>
                ) : (
                  <p
                    aria-hidden="true"
                    className={[
                      "mt-0.5 text-[10px] leading-relaxed sm:mt-1 sm:text-xs md:text-sm invisible",
                    ].join(" ")}
                  >
                    &nbsp;
                  </p>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

interface EndorsementsGridProps {
  endorsements?: Endorsement[];
  variant?: "people" | "orgs";
}

export function EndorsementsGrid({ endorsements = ENDORSEMENTS, variant = "people" }: EndorsementsGridProps) {
  return (
    <div className="grid auto-rows-fr grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 md:gap-6 lg:gap-8 xl:grid-cols-4">
      {endorsements.map((endorsement, index) => (
        <EndorsementCard key={endorsement.id} endorsement={endorsement} index={index} variant={variant} />
      ))}
    </div>
  );
}
