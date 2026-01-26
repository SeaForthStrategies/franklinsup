import Image from "next/image";

const LOGO_URL =
  "https://franklinforsupervisor.com/wp-content/uploads/2024/07/Supervisor_Logo_noBG-01.png";

export function Header() {
  return (
    <header className="site-header">
      <div className="site-container">
        <nav aria-label="Primary" className="site-nav">
          <a href="/" className="site-brand" aria-label="Home">
            <Image
              src={LOGO_URL}
              alt="John Franklin for Supervisor"
              width={220}
              height={70}
              priority
              className="site-logo"
            />
          </a>

          <ul className="site-nav-links" role="list">
            <li>
              <a className="site-nav-link" href="/about">
                About
              </a>
            </li>
            <li>
              <a className="site-nav-link" href="/issues">
                Issues
              </a>
            </li>
            <li>
              <a className="site-nav-link" href="/endorsements">
                Endorsements
              </a>
            </li>
            <li>
              <a className="site-nav-link" href="/news">
                News
              </a>
            </li>
            <li>
              <a className="site-nav-link" href="/contact">
                Contact
              </a>
            </li>
          </ul>

          <div className="site-nav-ctas">
            <a
              href="https://secure.franklinforsupervisor.com/15"
              target="_blank"
              rel="noopener noreferrer"
              className="site-cta site-cta--primary"
            >
              Donate
            </a>
            <a
              href="https://secure.franklinforsupervisor.com/volunteer-web"
              target="_blank"
              rel="noopener noreferrer"
              className="site-cta site-cta--secondary"
            >
              Volunteer
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

