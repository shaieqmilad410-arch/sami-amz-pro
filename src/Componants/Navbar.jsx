import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Courses", path: "/courses" },
  { name: "About", path: "/about" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef(null);
  const { pathname } = useLocation();

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    const desktop = window.matchMedia("(min-width: 1024px)");

    const onResize = () => {
      if (desktop.matches) setIsOpen(false);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    desktop.addEventListener("change", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      desktop.removeEventListener("change", onResize);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const focusStyle =
    "focus-visible:outline-2 focus-visible:outline-offset-4 " +
    "focus-visible:outline-cyan-300";

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          aria-hidden="true"
          onClick={closeMenu}
          className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm lg:hidden"
        />
      )}

      <header className="fixed inset-x-0 top-0 z-[100] px-3 pt-3 sm:px-5">
        <nav
          aria-label="Main navigation"
          className={`relative mx-auto w-full max-w-7xl rounded-2xl border text-white backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300 ${
            scrolled || isOpen
              ? "border-cyan-300/20 bg-[#081219]/95 shadow-[0_15px_50px_-20px_rgba(0,0,0,0.8)]"
              : "border-white/10 bg-[#081219]/90"
          }`}
        >
          {/* Main navigation bar */}
          <div className="flex h-16 items-center justify-between gap-3 px-3 sm:h-[68px] sm:px-5">
            {/* Logo */}
            <Link
              to="/"
              onClick={closeMenu}
              aria-label="Sami AMZ Pro home"
              className={`min-w-0 rounded-lg ${focusStyle}`}
            >
              <img
                src="/SamiAMZ Cyan Smile Logo.png"
                alt="Sami AMZ Pro"
                className="block h-12 w-auto max-w-[125px] object-contain sm:h-14 sm:max-w-[150px]"
              />
            </Link>

            {/* Desktop links */}
            <div className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  className={({ isActive }) =>
                    `group relative rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${focusStyle} ${
                      isActive
                        ? "bg-cyan-300/10 text-cyan-200"
                        : "text-slate-400 hover:bg-white/5 hover:text-white"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Desktop CTA */}
            <Link
              to="/courses"
              className={`group hidden items-center gap-4 rounded-xl bg-cyan-300 px-5 py-3 text-sm font-bold text-cyan-950 transition-colors hover:bg-cyan-200 lg:inline-flex ${focusStyle}`}
            >
              Start Learning
              {/* <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none"
              >
                ↗
              </span> */}
            </Link>

            {/* Mobile toggle */}
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-colors lg:hidden ${focusStyle} ${
                isOpen
                  ? "border-cyan-300/40 bg-cyan-300 text-cyan-950"
                  : "border-white/15 bg-white/5 text-cyan-200 hover:bg-white/10"
              }`}
            >
              <span aria-hidden="true" className="relative h-5 w-5">
                <span
                  className={`absolute left-0 h-[2px] w-5 rounded-full bg-current transition-all duration-300 motion-reduce:transition-none ${
                    isOpen ? "top-[9px] rotate-45" : "top-[4px]"
                  }`}
                />

                <span
                  className={`absolute left-0 h-[2px] rounded-full bg-current transition-all duration-300 motion-reduce:transition-none ${
                    isOpen ? "top-[9px] w-5 -rotate-45" : "top-[14px] w-3.5"
                  }`}
                />
              </span>
            </button>
          </div>

          {/* React controls mobile menu visibility */}
          {isOpen && (
            <div
              id="mobile-navigation"
              className="max-h-[calc(100dvh-100px)] overflow-y-auto overscroll-contain border-t border-white/10 lg:hidden"
            >
              <div className="px-3 pt-5 pb-4 sm:px-5">
                <div className="mb-4 flex items-center gap-2 px-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                  <p className="text-[10px] font-medium tracking-[0.2em] text-slate-400">
                    EXPLORE THE ACADEMY
                  </p>
                </div>

                <div className="space-y-1">
                  {navLinks.map((link, index) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      end={link.path === "/"}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        `group flex min-h-14 items-center justify-between gap-4 rounded-xl px-4 py-3 transition-colors ${focusStyle} ${
                          isActive
                            ? "bg-cyan-300/10 text-cyan-200"
                            : "text-slate-200 hover:bg-white/5"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <span className="flex items-center gap-4">
                            <span
                              aria-hidden="true"
                              className={`text-[10px] tabular-nums ${
                                isActive ? "text-cyan-300" : "text-slate-600"
                              }`}
                            >
                              0{index + 1}
                            </span>

                            <span className="text-base font-medium">
                              {link.name}
                            </span>
                          </span>

                          {/* <span
                            aria-hidden="true"
                            className={`flex h-7 w-7 items-center justify-center rounded-lg text-sm ${
                              isActive
                                ? "bg-cyan-300 text-cyan-950"
                                : "bg-white/5 text-slate-400"
                            }`}
                          >
                            ↗
                          </span> */}
                        </>
                      )}
                    </NavLink>
                  ))}
                </div>

                <div className="mt-5 border-t border-white/10 pt-5">
                  <Link
                    to="/courses"
                    onClick={closeMenu}
                    className={`flex min-h-12 w-full items-center justify-between rounded-xl bg-cyan-300 px-5 py-3.5 text-sm font-bold text-cyan-950 transition-colors hover:bg-cyan-200 ${focusStyle}`}
                  >
                    Start Learning
                    {/* <span aria-hidden="true" className="text-lg">
                      ↗
                    </span> */}
                  </Link>

                  <p className="mt-4 text-center text-[10px] tracking-[0.18em] text-slate-500">
                    LEARN. BUILD. GROW.
                  </p>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
