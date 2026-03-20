import type { Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="w-full bg-primary">{children}</div>;
}
