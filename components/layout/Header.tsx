"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import supervisorLogoPng from "@/Images/Supervisor_Logo_noBG_v2EL.png";

const CONTACT_URL =
  "https://secure.franklinforsupervisor.com/contact?_gl=1%2A1hbffur%2A_gcl_au%2ANDA2MjI2MjM4LjE3Njk0NDU2NTI.";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  function closeAllMenus() {
    setIsMenuOpen(false);
    setIsAboutOpen(false);
  }

  return (
    <header className="site-header">
      <div className="site-container">
        <nav aria-label="Primary" className="site-nav">
          <div className="site-nav-top">
            <Link href="/" className="site-brand" aria-label="Home">
              <Image
                src={supervisorLogoPng}
                alt="My campaign logo"
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
                <details
                  className="site-nav-dropdown"
                  open={isAboutOpen}
                  onToggle={(e) => setIsAboutOpen((e.currentTarget as HTMLDetailsElement).open)}
                >
                  <summary className="site-nav-link site-nav-dropdown-trigger">
                    <span>About</span>
                    <span aria-hidden="true" className="site-nav-dropdown-caret">
                      <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                        <path
                          d="M6 8l4 4 4-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </summary>
                  <ul className="site-nav-submenu" role="list">
                    <li>
                      <Link className="site-nav-sublink" href="/district-5" onClick={closeAllMenus}>
                        District 5
                      </Link>
                    </li>
                    <li>
                      <Link className="site-nav-sublink" href="/about" onClick={closeAllMenus}>
                        About
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link className="site-nav-link" href="/issues" onClick={closeAllMenus}>
                  Issues
                </Link>
              </li>
              <li>
                <Link className="site-nav-link" href="/endorsements" onClick={closeAllMenus}>
                  Endorsements
                </Link>
              </li>
              <li>
                <Link className="site-nav-link" href="/news" onClick={closeAllMenus}>
                  News
                </Link>
              </li>
              <li>
                <a
                  className="site-nav-link"
                  href={CONTACT_URL}
                  onClick={closeAllMenus}
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

