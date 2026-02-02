"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

import supervisorLogoPng from "@/Images/Supervisor_Logo_noBG_v2EL.png";

const CONTACT_URL =
  "https://secure.franklinforsupervisor.com/contact?_gl=1%2A1hbffur%2A_gcl_au%2ANDA2MjI2MjM4LjE3Njk0NDU2NTI.";

/** Navigation items configuration */
const NAV_ITEMS = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "District 5", href: "/district-5" },
      { label: "About", href: "/about" },
    ],
  },
  { label: "Issues", href: "/issues" },
  { label: "Endorsements", href: "/endorsements" },
  { label: "News", href: "/news" },
  { label: "Contact", href: CONTACT_URL, external: true },
] as const;

/** Hook for focus trapping inside the drawer */
function useFocusTrap(isActive: boolean, containerRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    const container = containerRef.current;
    const focusableSelector =
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';
    
    const getFocusableElements = () =>
      Array.from(container.querySelectorAll<HTMLElement>(focusableSelector)).filter(
        (el) => el.offsetParent !== null
      );

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      const focusable = getFocusableElements();
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    
    // Focus first element when trap activates
    const focusable = getFocusableElements();
    if (focusable.length > 0) {
      focusable[0].focus();
    }

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isActive, containerRef]);
}

/** Hook for scroll lock when drawer is open */
function useScrollLock(isLocked: boolean) {
  useEffect(() => {
    if (!isLocked) return;

    const scrollY = window.scrollY;
    const body = document.body;
    const html = document.documentElement;

    // Save current scroll position and lock
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.overflow = "hidden";
    html.style.overflow = "hidden";

    return () => {
      // Restore scroll position
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.overflow = "";
      html.style.overflow = "";
      window.scrollTo(0, scrollY);
    };
  }, [isLocked]);
}

export function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState<string | null>(null);

  const drawerRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Apply focus trap and scroll lock
  useFocusTrap(isDrawerOpen, drawerRef);
  useScrollLock(isDrawerOpen);

  // Close drawer and restore focus to hamburger
  const closeDrawer = useCallback(() => {
    setIsDrawerOpen(false);
    setOpenAccordion(null);
    // Restore focus to hamburger button
    setTimeout(() => hamburgerRef.current?.focus(), 0);
  }, []);

  // Toggle drawer
  const toggleDrawer = useCallback(() => {
    if (isDrawerOpen) {
      closeDrawer();
    } else {
      setIsDrawerOpen(true);
    }
  }, [isDrawerOpen, closeDrawer]);

  // Handle Escape key to close drawer
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isDrawerOpen) {
        closeDrawer();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isDrawerOpen, closeDrawer]);

  // Close drawer on route change (for Next.js)
  const handleLinkClick = useCallback(() => {
    closeDrawer();
    setDesktopDropdownOpen(null);
  }, [closeDrawer]);

  // Desktop dropdown handlers (with delay for better UX)
  const handleDropdownEnter = useCallback((label: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setDesktopDropdownOpen(label);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDesktopDropdownOpen(null);
    }, 150);
  }, []);

  // Toggle accordion in mobile drawer
  const toggleAccordion = useCallback((label: string) => {
    setOpenAccordion((prev) => (prev === label ? null : label));
  }, []);

  return (
    <header className="site-header">
      <div className="site-container">
        <nav aria-label="Primary" className="site-nav">
          {/* Top bar: Logo + Hamburger (mobile/tablet) or Logo + Nav + CTAs (desktop) */}
          <div className="site-nav-bar">
            {/* Logo */}
            <Link href="/" className="site-brand" aria-label="Home" onClick={handleLinkClick}>
              <Image
                src={supervisorLogoPng}
                alt="My campaign logo"
                width={220}
                height={70}
                priority
                className="site-logo"
              />
            </Link>

            {/* Desktop Navigation (≥1280px) */}
            <ul className="site-nav-desktop" role="list">
              {NAV_ITEMS.map((item) =>
                "children" in item ? (
                  <li
                    key={item.label}
                    className="site-nav-desktop-dropdown"
                    onMouseEnter={() => handleDropdownEnter(item.label)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <button
                      className="site-nav-link site-nav-dropdown-trigger"
                      aria-expanded={desktopDropdownOpen === item.label}
                      aria-haspopup="true"
                      onClick={() =>
                        setDesktopDropdownOpen((prev) =>
                          prev === item.label ? null : item.label
                        )
                      }
                    >
                      <span>{item.label}</span>
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
                    </button>
                    {desktopDropdownOpen === item.label && (
                      <ul
                        className="site-nav-desktop-submenu"
                        role="list"
                        onMouseEnter={() => handleDropdownEnter(item.label)}
                        onMouseLeave={handleDropdownLeave}
                      >
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              className="site-nav-sublink"
                              href={child.href}
                              onClick={handleLinkClick}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={item.label}>
                    {"external" in item && item.external ? (
                      <a className="site-nav-link" href={item.href} onClick={handleLinkClick}>
                        {item.label}
                      </a>
                    ) : (
                      <Link className="site-nav-link" href={item.href} onClick={handleLinkClick}>
                        {item.label}
                      </Link>
                    )}
                  </li>
                )
              )}
            </ul>

            {/* Desktop CTAs (≥1280px) */}
            <div className="site-nav-ctas-desktop">
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

            {/* Hamburger Button (mobile/tablet <1280px) */}
            <button
              ref={hamburgerRef}
              className="site-menu-toggle"
              onClick={toggleDrawer}
              aria-label={isDrawerOpen ? "Close menu" : "Open menu"}
              aria-expanded={isDrawerOpen}
              aria-controls="mobile-drawer"
            >
              <span className={`hamburger-line ${isDrawerOpen ? "open" : ""}`} />
              <span className={`hamburger-line ${isDrawerOpen ? "open" : ""}`} />
              <span className={`hamburger-line ${isDrawerOpen ? "open" : ""}`} />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile/Tablet Drawer Overlay */}
      <div
        className={`site-drawer-overlay ${isDrawerOpen ? "open" : ""}`}
        onClick={closeDrawer}
        aria-hidden="true"
      />

      {/* Mobile/Tablet Off-Canvas Drawer */}
      <div
        ref={drawerRef}
        id="mobile-drawer"
        className={`site-drawer ${isDrawerOpen ? "open" : ""}`}
        aria-hidden={!isDrawerOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Drawer Header */}
        <div className="site-drawer-header">
          <Link href="/" className="site-drawer-logo" aria-label="Home" onClick={handleLinkClick}>
            <Image
              src={supervisorLogoPng}
              alt="My campaign logo"
              width={180}
              height={57}
              className="h-auto w-[140px] sm:w-[160px]"
            />
          </Link>
          <button
            className="site-drawer-close"
            onClick={closeDrawer}
            aria-label="Close menu"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer Navigation */}
        <nav className="site-drawer-nav" aria-label="Mobile navigation">
          <ul className="site-drawer-links" role="list">
            {NAV_ITEMS.map((item) =>
              "children" in item ? (
                <li key={item.label} className="site-drawer-item">
                  <button
                    className="site-drawer-accordion-trigger"
                    onClick={() => toggleAccordion(item.label)}
                    aria-expanded={openAccordion === item.label}
                  >
                    <span>{item.label}</span>
                    <span
                      className={`site-drawer-accordion-icon ${
                        openAccordion === item.label ? "open" : ""
                      }`}
                      aria-hidden="true"
                    >
                      <svg viewBox="0 0 20 20">
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
                  </button>
                  <ul
                    className={`site-drawer-submenu ${
                      openAccordion === item.label ? "open" : ""
                    }`}
                    role="list"
                  >
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          className="site-drawer-sublink"
                          href={child.href}
                          onClick={handleLinkClick}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.label} className="site-drawer-item">
                  {"external" in item && item.external ? (
                    <a
                      className="site-drawer-link"
                      href={item.href}
                      onClick={handleLinkClick}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      className="site-drawer-link"
                      href={item.href}
                      onClick={handleLinkClick}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              )
            )}
          </ul>
        </nav>

        {/* Drawer CTAs */}
        <div className="site-drawer-ctas">
          <a
            href="https://secure.franklinforsupervisor.com/15"
            target="_blank"
            rel="noopener noreferrer"
            className="site-cta site-cta--primary"
            onClick={handleLinkClick}
          >
            Donate
          </a>
          <a
            href="https://secure.franklinforsupervisor.com/volunteer-web"
            target="_blank"
            rel="noopener noreferrer"
            className="site-cta site-cta--secondary"
            onClick={handleLinkClick}
          >
            Volunteer
          </a>
        </div>
      </div>
    </header>
  );
}

