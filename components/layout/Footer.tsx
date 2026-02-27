import Link from "next/link";

export function Footer() {
  const socialLinks = [
    { label: "Facebook", href: "https://www.facebook.com/mayor.john.franklin/" },
    { label: "X", href: "https://x.com/mayorjohnfranklin" },
    { label: "Instagram", href: "https://www.instagram.com/mayorjohnfranklin/" },
    { label: "TikTok", href: "https://www.tiktok.com/@mayorjohnfranklin" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/mayorjohnfranklin/" },
    { label: "YouTube", href: "https://www.youtube.com/@mayorjohnfranklin/videos" },
  ] as const;

  return (
    <footer className="bg-primary-900 text-white">
      <div className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid gap-8 sm:gap-10 md:grid-cols-3 md:items-start">
          <div>
            <p className="font-heading text-base font-black uppercase tracking-tight sm:text-lg">
              Supervisor 2026
            </p>
            <p className="mt-2 text-xs text-white/75 sm:mt-3 sm:text-sm">
              Paid for by John Franklin for Supervisor 2026 • FPPC ID 1462594
            </p>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-widest text-white/80 sm:text-sm">
              Links
            </p>
            <ul className="mt-3 space-y-1.5 text-xs sm:mt-4 sm:space-y-2 sm:text-sm">
              <li>
                <Link className="text-white/75 hover:text-white" href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="text-white/75 hover:text-white" href="/issues">
                  Issues
                </Link>
              </li>
              <li>
                <Link className="text-white/75 hover:text-white" href="/endorsements">
                  Endorsements
                </Link>
              </li>
              <li>
                <Link className="text-white/75 hover:text-white" href="/news">
                  News
                </Link>
              </li>
              <li>
                <Link className="text-white/75 hover:text-white" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-widest text-white/80 sm:text-sm">
              Follow
            </p>
            <div className="mt-3 flex flex-wrap gap-3 text-xs sm:mt-4 sm:gap-4 sm:text-sm">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  className="text-white/75 hover:text-white"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-5 text-[10px] text-white/60 sm:mt-10 sm:pt-6 sm:text-xs">
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 sm:justify-between">
            <div className="text-center sm:text-left">
              © {new Date().getFullYear()} Supervisor 2026{" "}
              <span aria-hidden="true" className="text-white/35">
                •
              </span>{" "}
              <span className="text-white/70">Site by SeaForthStrategies</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

