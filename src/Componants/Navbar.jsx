import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Courses", path: "/courses" },
  { name: "About", path: "/about" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `group relative py-2 text-sm font-medium transition-colors duration-200 ${
      isActive ? "text-cyan-400" : "text-white/75 hover:text-cyan-300"
    }`;

  const ctaClass =
    "group inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition duration-200 hover:-translate-y-0.5 hover:bg-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400";

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/95 text-white shadow-lg shadow-black/10 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          aria-label="Amazon Business Academy home"
          className="flex shrink-0 items-center"
        >
          <img
            src="/SamiAMZ Cyan Smile Logo.png"
            alt="Amazon Business Academy"
            className="h-[62px] w-auto max-w-[155px] object-contain transition-transform duration-200 hover:scale-[1.03]"
          />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === "/"}
              className={linkClass}
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-cyan-400 transition-all duration-200 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link to="/courses" className={ctaClass}>
            Start Learning
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white transition hover:border-cyan-400/60 hover:bg-cyan-400/10 hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 lg:hidden"
        >
          <span className="relative block h-5 w-5">
            <span
              className={`absolute left-0 h-[2px] w-5 rounded-full bg-current transition-all duration-200 ${
                isOpen ? "top-[9px] rotate-45" : "top-[3px]"
              }`}
            />
            <span
              className={`absolute left-0 top-[9px] h-[2px] w-5 rounded-full bg-current transition-all duration-200 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-[2px] w-5 rounded-full bg-current transition-all duration-200 ${
                isOpen ? "top-[9px] -rotate-45" : "top-[15px]"
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-white/10 bg-neutral-950 transition-[max-height,opacity] duration-300 ease-in-out lg:hidden ${
          isOpen
            ? "max-h-[480px] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <div className="flex flex-col">
            {navLinks.map((link, index) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === "/"}
                tabIndex={isOpen ? 0 : -1}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between rounded-lg px-4 py-3 transition-colors duration-200 ${
                    isActive
                      ? "bg-cyan-400/10 text-cyan-300"
                      : "text-white/75 hover:bg-white/5 hover:text-cyan-300"
                  }`
                }
                style={{
                  transitionDelay: isOpen ? `${index * 35}ms` : "0ms",
                }}
              >
                <span className="text-sm font-medium">{link.name}</span>
                <span aria-hidden="true" className="text-cyan-400">
                  →
                </span>
              </NavLink>
            ))}
          </div>

          <Link
            to="/courses"
            tabIndex={isOpen ? 0 : -1}
            onClick={() => setIsOpen(false)}
            className={`${ctaClass} mt-4 w-full`}
          >
            Start Learning
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
