"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const LOGO_URL =
  "https://franklinforsupervisor.com/wp-content/uploads/2024/07/Supervisor_Logo_noBG-01.png";

const CONTACT_URL =
  "https://secure.franklinforsupervisor.com/contact?_gl=1%2A1hbffur%2A_gcl_au%2ANDA2MjI2MjM4LjE3Njk0NDU2NTI.";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-container">
        <nav aria-label="Primary" className="site-nav">
          <div className="site-nav-top">
            <Link href="/" className="site-brand" aria-label="Home">
              <Image
                src={LOGO_URL}
                alt="Franklin for Supervisor"
                width={220}
                height={70}
                priority
                className="site-logo"
              />
            </Link>

            {/* Mobile menu toggle button */}
            <button
              className="site-menu-toggle lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
              <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
              <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
            </button>
          </div>

          {/* Mobile menu overlay */}
          <div className={`site-nav-menu ${isMenuOpen ? "open" : ""}`}>
            <ul className="site-nav-links" role="list">
              <li>
                <Link className="site-nav-link" href="/about" onClick={() => setIsMenuOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link className="site-nav-link" href="/issues" onClick={() => setIsMenuOpen(false)}>
                  Issues
                </Link>
              </li>
              <li>
                <Link className="site-nav-link" href="/endorsements" onClick={() => setIsMenuOpen(false)}>
                  Endorsements
                </Link>
              </li>
              <li>
                <Link className="site-nav-link" href="/news" onClick={() => setIsMenuOpen(false)}>
                  News
                </Link>
              </li>
              <li>
                <a
                  className="site-nav-link"
                  href={CONTACT_URL}
                  onClick={() => setIsMenuOpen(false)}
                >
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
          </div>
        </nav>
      </div>
    </header>
  );
}

