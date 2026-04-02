"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

/**
 * Navigation sections used in the navbar.
 * Each value must match the id of its corresponding section in the page.
 */
const SECTIONS = ["education", "skills", "projects", "contact"];

export default function Navbar() {
  /* ================================
     STATE MANAGEMENT
  ================================== */

  // Tracks whether the user has scrolled down (used for navbar styling)
  const [scrolled, setScrolled] = useState(false);

  // Stores the currently active section based on scroll position
  const [activeSection, setActiveSection] = useState("");

  // Controls mobile menu visibility
  const [menuOpen, setMenuOpen] = useState(false);

  /* ================================
     SCROLL EFFECT HANDLER
  ================================== */

  useEffect(() => {
    /**
     * Handles scroll behavior:
     * - Updates navbar style on scroll
     * - Detects the currently visible section
     * - Closes mobile menu when scrolling
     */
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Add shadow + reduce padding when scrolling down
      setScrolled(scrollY > 50);

      // Close mobile menu automatically when scrolling
      if (menuOpen) {
        setMenuOpen(false);
      }

      // Determine the active section
      let currentSection = "";

      SECTIONS.forEach((section) => {
        const element = document.getElementById(section);
        if (!element) return;

        const sectionTop = element.offsetTop - 120;

        if (scrollY >= sectionTop) {
          currentSection = section;
        }
      });

      setActiveSection(currentSection);
    };

    // Attach scroll listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  /* ================================
     HANDLERS
  ================================== */

  // Close mobile menu when a navigation link is clicked
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  /* ================================
     RENDER
  ================================== */

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 
        bg-slate-600/10 backdrop-blur-md rounded-b-xl
        flex justify-between items-center text-xl
        transition-all duration-300 px-3
        ${scrolled ? "py-2 shadow-md" : "py-5"}
      `}
    >
      {/* ================================
          LOGO
      ================================== */}
      <div>
        <a
          href="#"
          className="font-bold flex justify-center items-center space-x-1"
        >
          <span className="text-blue-500">&lt;</span>
          Abo Al Magd
          <span className="text-blue-500">/&gt;</span>
        </a>
      </div>

      {/* ================================
          DESKTOP NAVIGATION
          Visible on md screens and above
      ================================== */}
      <div className="hidden md:flex justify-center items-center gap-4">
        {SECTIONS.map((section) => (
          <a
            key={section}
            href={`#${section}`}
            onClick={handleLinkClick}
            className={`px-3 py-1 rounded-md transition-all duration-200 cursor-pointer
              ${
                activeSection === section
                  ? "bg-sky-500 text-white shadow-md scale-105"
                  : "text-white hover:bg-sky-500 hover:text-white"
              }
            `}
          >
            {section}
          </a>
        ))}
      </div>

      {/* ================================
          MOBILE NAVIGATION
          Visible below md screens
      ================================== */}
      <div className="md:hidden relative">
        {/* Menu Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-2xl focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
        </button>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div
            className="absolute right-0 mt-2 w-40 
            bg-slate-700 rounded-lg shadow-lg 
            flex flex-col items-center py-2 gap-2"
          >
            {SECTIONS.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={handleLinkClick}
                className={`px-3 py-1 w-full text-center rounded-md
                  transition-all duration-200 cursor-pointer
                  ${
                    activeSection === section
                      ? "bg-sky-500 text-white shadow-md scale-105"
                      : "text-white hover:bg-sky-500 hover:text-white"
                  }
                `}
              >
                {section}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
