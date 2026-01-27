export function Footer() {
  const contactUrl =
    "https://secure.franklinforsupervisor.com/contact?_gl=1%2A1hbffur%2A_gcl_au%2ANDA2MjI2MjM4LjE3Njk0NDU2NTI.";

  return (
    <footer className="bg-primary-900 text-white">
      <div className="mx-auto max-w-content px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3 md:items-start">
          <div>
            <p className="font-heading text-lg font-black uppercase tracking-tight">
              John Franklin for Supervisor 2026
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
                <a className="text-white/75 hover:text-white" href="/about">
                  About
                </a>
              </li>
              <li>
                <a className="text-white/75 hover:text-white" href="/issues">
                  Issues
                </a>
              </li>
              <li>
                <a className="text-white/75 hover:text-white" href="/endorsements">
                  Endorsements
                </a>
              </li>
              <li>
                <a className="text-white/75 hover:text-white" href="/news">
                  News
                </a>
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
              <a className="text-white/75 hover:text-white" href="#" rel="noopener noreferrer">
                Facebook
              </a>
              <a className="text-white/75 hover:text-white" href="#" rel="noopener noreferrer">
                X
              </a>
              <a className="text-white/75 hover:text-white" href="#" rel="noopener noreferrer">
                Instagram
              </a>
              <a className="text-white/75 hover:text-white" href="#" rel="noopener noreferrer">
                TikTok
              </a>
              <a className="text-white/75 hover:text-white" href="#" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/60">
          © {new Date().getFullYear()} John Franklin for Supervisor
        </div>
      </div>
    </footer>
  );
}

