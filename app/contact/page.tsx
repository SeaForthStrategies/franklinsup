import type { Metadata } from "next";
import { TallyContactEmbed } from "@/components/forms/TallyContactEmbed.client";

export const metadata: Metadata = {
  title: "Contact – Leadership for San Diego County",
  openGraph: {
    title: "Contact – Leadership for San Diego County",
    url: "https://franklinforsupervisor.com/contact",
    siteName: "Franklin for Supervisor",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <section
      className="relative min-h-[800px] w-full bg-neutral-base"
      aria-label="Contact form"
    >
      <TallyContactEmbed />
    </section>
  );
}
