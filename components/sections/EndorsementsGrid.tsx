import Image from "next/image";

export interface Endorsement {
  id: string;
  name: string;
  title: string;
  imageUrl: string;
  imageAlt?: string;
}

export interface EndorsementCategory {
  id: string;
  title: string;
  endorsements: Endorsement[];
}

const ENDORSEMENT_CATEGORIES: EndorsementCategory[] = [
  {
    id: "congress",
    title: "Congress",
    endorsements: [
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
    ],
  },
  {
    id: "state",
    title: "State",
    endorsements: [
      {
        id: "tony-strickland",
        name: "Senator Tony Strickland",
        title: "",
        imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2025/10/Senator-Tony-Strickland.png",
      },
    ],
  },
  {
    id: "county",
    title: "County",
    endorsements: [
      {
        id: "jordan-marks",
        name: "Jordan Z. Marks",
        title: "San Diego County Assessor/Recorder/Clerk",
        imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2024/04/Jordan_Marks.png",
      },
      {
        id: "dan-mcallister",
        name: "Dan McAllister",
        title: "San Diego County Treasurer/Tax Collector (Ret.)",
        imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2024/08/Dan-McAllister_EL-1024x988.png",
      },
      {
        id: "bill-horn",
        name: "Supervisor Bill Horn",
        title: "5th District - 1994 - 2018 (Ret.)",
        imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2024/04/Bill_Horn.jpg",
      },
      {
        id: "pam-slater-price",
        name: "Supervisor Pam Slater Price",
        title: "Former & Hershell Price, San Diego County Water Authority Rep., Former",
        imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2025/02/20250221_132121-1024x956.jpg",
      },
      {
        id: "dianne-jacob",
        name: "Supervisor Dianne Jacob",
        title: "2nd District - 1993-2020 (Ret.)",
        imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2025/03/attachment1741793747295.png",
      },
      {
        id: "ron-roberts",
        name: "Supervisor Ron Roberts",
        title: "1995-2018 (Ret.)",
        imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2024/08/Ron-Roberts-Supervisor-Ret-1-1024x988.png",
      },
      {
        id: "ernie-dronenburg",
        name: "Ernie Dronenburg",
        title: "San Diego County Assessor/Recorder/Clerk (Ret.)",
        imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2024/04/ernie_dronenburg-e1712009465988.jpg",
      },
    ],
  },
  {
    id: "mayors",
    title: "Mayors",
    endorsements: [
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
        name: "Mayor Sam Abed",
        title: "Escondido 2010-2018 (Ret.)",
        imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2024/04/Sam_Abed-e1712009216958.jpg",
      },
    ],
  },
  {
    id: "council",
    title: "City Council",
    endorsements: [
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
        name: "Councilman Scott Sherman",
        title: "San Diego (Ret.)",
        imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2024/08/scott-sherman-1024x988.png",
      },
      {
        id: "kori-jensen",
        name: "Council Member Kori Jensen",
        title: "Former Oceanside",
        imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2024/09/Kori-Jensen-953x1024.jpg",
      },
    ],
  },
  {
    id: "state-local",
    title: "State & Local Leaders",
    endorsements: [
      {
        id: "john-moorlach",
        name: "John Moorlach",
        title: "State Senator (Ret.), County Supervisor (Ret.)",
        imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2025/07/john46.png",
      },
      {
        id: "amy-reichert",
        name: "Amy Reichert",
        title: "Nominee for Supervisor",
        imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2024/04/amy-reichert-1024x937.jpg",
      },
    ],
  },
  {
    id: "party",
    title: "Party Leadership",
    endorsements: [
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
        id: "randy-berholtz",
        name: "Randy Berholtz",
        title: "Former Secretary, California Republican Party",
        imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2025/08/randy-berholtz.png",
      },
    ],
  },
  {
    id: "school-boards",
    title: "School Boards & Districts",
    endorsements: [
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
        title: "Lakeside Water District, Central Committee Member",
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
        title: "EUHSD President Trustee Area 1",
        imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2025/06/Bob-Weller-President-EUHSD-1024x1024.png",
      },
      {
        id: "christi-knight",
        name: "Christi Knight",
        title: "EUHSD Trustee Area 3",
        imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2025/06/Christi-Knight-Trustee-Area-3-EUHSD.jpg",
      },
      {
        id: "david-vincent",
        name: "David Vincent",
        title: "EUHSD Trustee Area 5",
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
        imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2025/06/Screenshot-2025-06-09-at-11.50.05 AM.png",
      },
      {
        id: "anette-ross",
        name: "Anette Ross",
        title: "RSFSD Board of Trustee",
        imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2025/06/IMG_6777-1024x1024.jpeg",
      },
    ],
  },
  {
    id: "community",
    title: "Community Leaders",
    endorsements: [
      {
        id: "aldo-alvidres",
        name: "Aldo Alvidres",
        title: "Fallbrook Planning Group",
        imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2025/10/Aldo-Alvidres.png",
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
        id: "kelly-bagla",
        name: "Kelly Bagla, Esq.",
        title: "",
        imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2025/07/KELLY-BAGLA-ESQ-1024x988.png",
      },
      {
        id: "linda-lopez-alvarez",
        name: "Linda Lopez-Alvarez",
        title: "Chairwoman of the Escondido Republican Women's Headquarters",
        imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2024/07/Screenshot-2024-07-03-115831.png",
        imageAlt: "A",
      },
    ],
  },
  {
    id: "central-committee",
    title: "Central Committee Members",
    endorsements: [
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
        name: "Antoinette \"Andee\" Aceves",
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
        title: "",
        imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2024/08/Shirley-Nakawatase-1024x988.png",
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
        title: "Central Committee Member 2024-2028",
        imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2025/02/Rebekah-Winfree-1024x988.png",
      },
      {
        id: "summer-boger",
        name: "Summer Boger",
        title: "Central Committee Member 2024-2028",
        imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2025/02/20250217_183812-1024x952.jpg",
      },
      {
        id: "brita-lindstrom",
        name: "Brita Lindstrom",
        title: "Central Committee Alternate Member",
        imageUrl: "https://franklinforsupervisor.com/wp-content/uploads/2025/08/Lindstrom.png",
      },
    ],
  },
  {
    id: "organizations",
    title: "Organizations",
    endorsements: [
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
    ],
  },
];

interface EndorsementCardProps {
  endorsement: Endorsement;
}

function EndorsementCard({ endorsement }: EndorsementCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-border bg-neutral-surface shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-base">
        <Image
          src={endorsement.imageUrl}
          alt={endorsement.imageAlt || `${endorsement.name}${endorsement.title ? ` - ${endorsement.title}` : ""}`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="font-heading text-base font-black uppercase tracking-tight text-neutral-ink sm:text-lg">
          {endorsement.name}
        </h3>
        {endorsement.title && (
          <p className="mt-1.5 text-xs leading-relaxed text-neutral-muted sm:text-sm">{endorsement.title}</p>
        )}
      </div>
    </div>
  );
}

interface EndorsementsGridProps {
  categories?: EndorsementCategory[];
}

export function EndorsementsGrid({ categories = ENDORSEMENT_CATEGORIES }: EndorsementsGridProps) {
  return (
    <div className="space-y-12 sm:space-y-16">
      {categories.map((category) => (
        <section key={category.id} id={category.id} className="scroll-mt-8">
          <h3 className="mb-6 text-2xl font-black uppercase tracking-tight text-neutral-ink sm:text-3xl">
            {category.title}
          </h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4 lg:gap-8">
            {category.endorsements.map((endorsement) => (
              <EndorsementCard key={endorsement.id} endorsement={endorsement} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
