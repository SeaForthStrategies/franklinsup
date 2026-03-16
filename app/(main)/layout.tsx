import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div id="dev-preview-shell" className="min-h-screen bg-transparent text-neutral-ink">
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  );
}
