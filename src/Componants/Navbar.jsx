import React, { useState } from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },

    { name: "Courses", path: "/courses" },

    { name: "About", path: "/about" },

    { name: "FAQ", path: "/faq" },

    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed left-0 top-0 z-50 w-full bg-black backdrop-blur-xl shadow-[0_4px_25px_rgba(0,0,0,0.06)]">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8">
        {/* ================= LOGO ================= */}

        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="group flex items-center "
        >
          <img
            src="/pnglogo.png"
            alt="Amazon Business Academy"
            className="h-15 w-50 mt-4    object-contain transition duration-300 group-hover:scale-105"
          />
        </Link>

        {/* ================= DESKTOP NAV ================= */}

        <div className="hidden items-center gap-7 lg:flex ">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="group relative py-2 text-[15px] font-medium text-white transition duration-300"
            >
              {link.name}

              {/* Animated underline */}

              <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#FF9900] transition-all duration-300 ease-out group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* ================= DESKTOP CTA ================= */}

        <div className="hidden lg:block">
          <Link
            to="/courses"
            className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-[#FF9900] px-6 py-3 text-sm font-bold text-gray-900 shadow-[0_6px_20px_rgba(255,153,0,0.20)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ffad33] hover:shadow-[0_8px_25px_rgba(255,153,0,0.30)]"
          >
            <span className="relative z-10">Start Learning</span>

            <span className="relative z-10 text-lg transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>

            {/* Shine */}

            <span className="absolute -left-12 top-0 h-full w-8 rotate-12 bg-white/30 blur-sm transition-all duration-700 group-hover:left-[110%]" />
          </Link>
        </div>

        {/* ================= MOBILE BUTTON ================= */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-800 transition duration-300 hover:bg-orange-50 hover:text-[#FF9900] lg:hidden"
        >
          <div className="relative h-5 w-6">
            <span
              className={`absolute left-0 top-0 block h-[2px] w-6 rounded-full bg-current transition-all duration-300 ${
                isOpen ? "top-2 rotate-45" : ""
              }`}
            />

            <span
              className={`absolute left-0 top-2 block h-[2px] w-6 rounded-full bg-current transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`absolute left-0 top-4 block h-[2px] w-6 rounded-full bg-current transition-all duration-300 ${
                isOpen ? "top-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}

      <div
        className={`overflow-hidden border-t border-gray-100 bg-white transition-all duration-500 ease-in-out lg:hidden ${
          isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">
          <div className="flex flex-col">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="group flex items-center justify-between rounded-xl px-4 py-3.5 text-gray-700 transition-all duration-300 hover:bg-orange-50 hover:pl-6 hover:text-[#FF9900]"
                style={{
                  transitionDelay: isOpen ? `${index * 40}ms` : "0ms",
                }}
              >
                <span className="font-medium">{link.name}</span>

                <span className="translate-x-[-5px] text-[#FF9900] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                  →
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile CTA */}

          <Link
            to="/courses"
            onClick={() => setIsOpen(false)}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#FF9900] px-6 py-3.5 font-bold text-gray-900 shadow-lg shadow-orange-500/20 transition-all duration-300 hover:bg-[#ffad33] active:scale-[0.98]"
          >
            Start Learning
            <span className="transition-transform duration-300 hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
