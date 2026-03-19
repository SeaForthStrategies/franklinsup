import Link from "next/link";

export function Footer() {
  const socialLinks = [
    { label: "Facebook", href: "https://www.facebook.com/mayor.john.franklin/", icon: "facebook" },
    { label: "X", href: "https://x.com/mayorjohnfranklin", icon: "x" },
    { label: "Instagram", href: "https://www.instagram.com/mayorjohnfranklin/", icon: "instagram" },
    { label: "TikTok", href: "https://www.tiktok.com/@mayorjohnfranklin", icon: "tiktok" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/mayorjohnfranklin/", icon: "linkedin" },
    { label: "YouTube", href: "https://www.youtube.com/@mayorjohnfranklin/videos", icon: "youtube" },
  ] as const;

  function renderSocialIcon(icon: (typeof socialLinks)[number]["icon"]) {
    switch (icon) {
      case "facebook":
        return (
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
            <path d="M13.5 8.5V6.7c0-.85.56-1.04.95-1.04h2.43V2h-3.34C9.84 2 9 4.79 9 6.57V8.5H6.75V13H9v9h4.5v-9h3l.45-4.5h-3.45z" />
          </svg>
        );
      case "x":
        return (
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
            <path d="M18.24 2h3.31l-7.23 8.26L22.82 22h-6.67l-5.22-6.82L4.96 22H1.64l7.73-8.84L1.18 2h6.84l4.72 6.23L18.24 2zm-1.17 18h1.83L6.99 3.9H5.03L17.07 20z" />
          </svg>
        );
      case "instagram":
        return (
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5zm9.88 1.5a1.12 1.12 0 1 1-2.25 0 1.12 1.12 0 0 1 2.25 0zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
          </svg>
        );
      case "tiktok":
        return (
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
            <path d="M14.35 3c.22 1.86 1.25 3.3 3.12 3.62v3.07a6.66 6.66 0 0 1-3.02-.85v5.82a5.66 5.66 0 1 1-4.9-5.62v3.15a2.54 2.54 0 1 0 1.78 2.43V3h3.02z" />
          </svg>
        );
      case "linkedin":
        return (
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
            <path d="M4.98 3A1.98 1.98 0 1 1 5 6.96 1.98 1.98 0 0 1 4.98 3zM3.5 8h3v12h-3V8zm5.5 0h2.88v1.64h.04c.4-.76 1.38-1.56 2.84-1.56C17.8 8.08 20 10 20 13.52V20h-3v-5.76c0-1.37-.02-3.14-1.92-3.14-1.92 0-2.22 1.5-2.22 3.04V20H9V8z" />
          </svg>
        );
      case "youtube":
        return (
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
            <path d="M21.58 7.19a2.97 2.97 0 0 0-2.08-2.1C17.66 4.5 12 4.5 12 4.5s-5.66 0-7.5.59a2.97 2.97 0 0 0-2.08 2.1A31.3 31.3 0 0 0 2 12a31.3 31.3 0 0 0 .42 4.81 2.97 2.97 0 0 0 2.08 2.1c1.84.59 7.5.59 7.5.59s5.66 0 7.5-.59a2.97 2.97 0 0 0 2.08-2.1A31.3 31.3 0 0 0 22 12a31.3 31.3 0 0 0-.42-4.81zM10 15.5v-7l6 3.5-6 3.5z" />
          </svg>
        );
    }
  }

  return (
    <footer className="border-t border-white/10 bg-gradient-to-b from-primary-900 to-primary-800 text-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="space-y-6 sm:space-y-8">
          <div className="border-b border-white/10 pb-4 sm:pb-5">
            <p className="font-heading text-lg font-black uppercase tracking-tight sm:text-xl">
              Supervisor 2026
            </p>
          </div>

          <div className="grid gap-4 sm:gap-5 md:grid-cols-2 md:gap-6">
            <div className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-[1px] sm:p-6">
              <p className="text-xs font-black uppercase tracking-widest text-white/85 sm:text-sm">
                Links
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
                <li>
                  <Link
                    className="text-white/80 transition-colors duration-150 hover:text-white"
                    href="/about"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white/80 transition-colors duration-150 hover:text-white"
                    href="/issues"
                  >
                    Issues
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white/80 transition-colors duration-150 hover:text-white"
                    href="/endorsements"
                  >
                    Endorsements
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white/80 transition-colors duration-150 hover:text-white"
                    href="/news"
                  >
                    News
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white/80 transition-colors duration-150 hover:text-white"
                    href="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-[1px] sm:p-6">
              <p className="text-xs font-black uppercase tracking-widest text-white/85 sm:text-sm">
                Follow
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-2.5 text-sm sm:gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-primary-900/40 text-white/90 transition-all duration-150 hover:-translate-y-0.5 hover:border-white/45 hover:bg-white/10 hover:text-white"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    {renderSocialIcon(link.icon)}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-6 text-xs leading-relaxed text-white/75">
          <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <div className="text-left text-white/80">
              © {new Date().getFullYear()} Supervisor 2026{" "}
              <span aria-hidden="true" className="text-white/35">
                •
              </span>{" "}
              <span className="text-[10px] text-white/60 sm:text-[11px]">
                Site by SeaForthStrategies
              </span>
            </div>
            <p className="text-left text-white/90 sm:text-right">
              Paid for by John Franklin for Supervisor 2026 • FPPC ID 1462594
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

