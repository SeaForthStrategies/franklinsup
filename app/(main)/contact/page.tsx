import type { Metadata } from "next";
import { TallyEmbedLoader } from "@/components/forms/TallyEmbedLoader.client";

export const metadata: Metadata = {
  title: "Contact Mayor John Franklin",
  openGraph: {
    title: "Contact Mayor John Franklin",
    url: "https://franklinforsupervisor.com/contact",
    siteName: "Franklin for Supervisor",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <div className="min-h-[600px] w-full">
        <iframe
          data-tally-src="https://tally.so/embed/QKAYel?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          loading="lazy"
          width="100%"
          height={800}
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="Contact Mayor John Franklin"
          className="min-h-[600px] w-full"
        />
      </div>
      <TallyEmbedLoader />
    </>
  );
}
