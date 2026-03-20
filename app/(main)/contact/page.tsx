import type { Metadata } from "next";

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
    <div className="min-h-screen w-full bg-primary px-4 sm:px-6 lg:px-8">
      <iframe
        src="https://tally.so/embed/QKAYel?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="1000"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title="Contact me"
        className="min-h-screen w-full border-0"
      />
    </div>
  );
}
