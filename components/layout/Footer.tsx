import Link from "next/link";

export function Footer() {
  const contactUrl =
    "https://secure.franklinforsupervisor.com/contact?_gl=1%2A1hbffur%2A_gcl_au%2ANDA2MjI2MjM4LjE3Njk0NDU2NTI.";

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
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3 md:items-start">
          <div>
            <p className="font-heading text-lg font-black uppercase tracking-tight">
              Supervisor 2026
            </p>
            <p className="mt-3 text-sm text-white/75">
              Paid for by John Franklin for Supervisor 2026 • FPPC ID 1462594
            </p>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-widest text-white/80">
              Links
            </p>
            <ul className="mt-4 space-y-2 text-sm">
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
                <a className="text-white/75 hover:text-white" href={contactUrl}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-widest text-white/80">
              Follow
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm">
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

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/60">
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

