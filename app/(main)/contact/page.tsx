import type { Metadata } from "next";
import Script from "next/script";
import { TallyEmbedLoader } from "@/components/forms/TallyEmbedLoader.client";

export const metadata: Metadata = {
  title: "Contact me",
  openGraph: {
    title: "Contact me",
    url: "https://franklinforsupervisor.com/contact",
    siteName: "Franklin for Supervisor",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <Script src="https://tally.so/widgets/embed.js" strategy="beforeInteractive" />
      <div className="min-h-[600px] w-full">
        <iframe
          data-tally-src="https://tally.so/embed/QKAYel?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          loading="lazy"
          width="100%"
          height="200"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="Contact me"
          className="min-h-[200px] w-full"
        />
      </div>
      <TallyEmbedLoader />
    </>
  );
}
