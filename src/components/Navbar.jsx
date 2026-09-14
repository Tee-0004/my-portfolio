import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between bg-[#2A2927] px-8 py-6 text-[#F5F3EF] md:px-12 lg:px-16">

      {/* Logo / Name */}
      <div>
        <Link
          to="/"
          className="inline-block font-[Cormorant_Garamond] text-3xl font-[300] tracking-wide scale-y-112"
        >
          TEBOGO
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation menu"
        className="text-2xl md:hidden"
      >
        {isMenuOpen ? "×" : "☰"}
      </button>

      {/* Navigation Links */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } absolute left-0 top-full z-50 w-full flex-col gap-6 bg-[#1a1a1a] px-8 py-8 md:static md:flex md:w-auto md:flex-row md:items-center md:gap-10 md:bg-transparent md:p-0`}
      >

        <Link
          to="/"
          onClick={() => setIsMenuOpen(false)}
          className="text-xs font-light transition-opacity duration-300 hover:opacity-70"
        >
          HOME
        </Link>

        <Link
          to="/about"
          onClick={() => setIsMenuOpen(false)}
          className="text-xs font-light transition-opacity duration-300 hover:opacity-70"
        >
          ABOUT
        </Link>

        <Link
          to="/skills"
          onClick={() => setIsMenuOpen(false)}
          className="text-xs font-light transition-opacity duration-300 hover:opacity-70"
        >
          SKILLS
        </Link>

        <Link
          to="/projects"
          onClick={() => setIsMenuOpen(false)}
          className="text-xs font-light transition-opacity duration-300 hover:opacity-70"
        >
          PROJECTS
        </Link>

        <Link
          to="/contact"
          onClick={() => setIsMenuOpen(false)}
          className="text-xs font-light transition-opacity duration-300 hover:opacity-70"
        >
          CONTACT
        </Link>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle dark mode"
          className="flex items-center justify-center text-[#F5F3EF] transition-opacity duration-300 hover:opacity-70"
        >
          {darkMode ? (
            /* Sun */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </svg>
          ) : (
            /* Moon */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>

      </div>
    </nav>
  );
}

export default Navbar;