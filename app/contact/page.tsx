import type { Metadata } from "next";
import Script from "next/script";

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
    <section
      className="relative h-[100dvh] w-full overflow-hidden bg-neutral-base"
      aria-label="Contact form"
    >
      <Script async src="https://tally.so/widgets/embed.js" strategy="afterInteractive" />
      <iframe
        data-tally-src="https://tally.so/r/QKAYel?transparentBackground=1"
        width="100%"
        height="100%"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title="Contact Mayor John Franklin"
        className="absolute inset-0 h-full w-full border-0"
      />
    </section>
  );
}
