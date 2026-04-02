import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import SavorkaSolarLogo from "../assets/savorkalogo.png";

const SERVICES = [
  { name: "Residential Solar Solutions", path: "/services/residential" },
  { name: "C&I Solar Solutions", path: "/services/commercial-industrial-solar" },
  { name: "Ground Mounted Solar Projects", path: "/services/ground-mounted-solar" },
  { name: "Solar Structure Manufacturing", path: "/services/solar-structure-manufacturing" },
];

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About us", path: "/about" },
  { name: "Services", path: "/services", hasDropdown: true },
  { name: "Project", path: "/projects" },
  { name: "Blogs", path: "/blogs" },
  { name: "Contact us", path: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const menuRef = useRef(null);
  const lastScrollY = useRef(0);
  const dropdownTimeoutRef = useRef(null);

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 10);

      if (currentScrollY > lastScrollY.current && currentScrollY > 60) {
        setNavVisible(false);
        setMenuOpen(false);
        setServicesDropdownOpen(false);
      } else {
        setNavVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
        setServicesDropdownOpen(false);
      }
    };
    if (menuOpen || servicesDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen, servicesDropdownOpen]);

  const handleServicesMouseEnter = () => {
    clearTimeout(dropdownTimeoutRef.current);
    setServicesDropdownOpen(true);
  };

  const handleServicesMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 150);
  };

  const getNavLinkClass = ({ isActive }) =>
    `text-[15px] font-semibold transition-colors duration-200 ${
      isActive ? "text-[#8FCC36]" : "text-[#003260] hover:text-[#8FCC36]"
    }`;

  return (
    <nav
      ref={menuRef}
      className={`sticky top-0 z-50 flex items-center justify-between px-6 md:px-16 py-6 transition-all duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm"
      } ${
        navVisible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
      style={{
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        backgroundColor: "rgba(255, 255, 255, 0.24)",
      }}
    >
      {/* Logo */}
      <NavLink to="/" className="flex items-center shrink-0">
        <img
          src={SavorkaSolarLogo}
          alt="Savorka Solar Logo"
          style={{ height: "55px", width: "auto" }}
        />
      </NavLink>

      {/* Desktop Nav Links */}
      <ul
        className="hidden md:flex items-center list-none m-0 p-0"
        style={{ gap: "36px" }}
      >
        {NAV_LINKS.map((link) =>
          link.hasDropdown ? (
            /* ── Services with dropdown ── */
            <li
              key={link.name}
              className="relative"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              {/* Clicking the label navigates to /services */}
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center gap-1 text-[15px] font-semibold transition-colors duration-200 ${
                    isActive || servicesDropdownOpen
                      ? "text-[#8FCC36]"
                      : "text-[#003260] hover:text-[#8FCC36]"
                  }`
                }
              >
                {link.name}
                <FaChevronDown
                  className={`text-[11px] mt-[1px] transition-transform duration-200 ${
                    servicesDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </NavLink>

              {/* Dropdown panel */}
              <div
                className={`absolute top-[calc(100%+14px)] left-1/2 -translate-x-1/2 w-56 rounded-xl shadow-xl overflow-hidden transition-all duration-200 origin-top ${
                  servicesDropdownOpen
                    ? "opacity-100 scale-y-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 scale-y-95 -translate-y-1 pointer-events-none"
                }`}
                style={{
                  backgroundColor: "rgba(255,255,255,0.98)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(143,204,54,0.2)",
                }}
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
              >
                {/* Small arrow tip */}
                <div
                  className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 rounded-sm"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.98)",
                    border: "1px solid rgba(143,204,54,0.2)",
                    borderBottom: "none",
                    borderRight: "none",
                  }}
                />

                <ul className="py-2 m-0 p-0 list-none">
                  {SERVICES.map((service, idx) => (
                    <li key={service.name}>
                      <NavLink
                        to={service.path}
                        onClick={() => setServicesDropdownOpen(false)}
                        className={({ isActive }) =>
                          `flex items-center gap-2 px-5 py-3 text-[14px] font-medium transition-all duration-150 ${
                            isActive
                              ? "text-[#8FCC36] bg-[#8FCC36]/10"
                              : "text-[#003260] hover:text-[#8FCC36] hover:bg-[#8FCC36]/8"
                          }`
                        }
                      >
                        {/* Accent dot */}
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: "#8FCC36" }}
                        />
                        {service.name}
                      </NavLink>
                      {/* Divider except after last item */}
                      {idx < SERVICES.length - 1 && (
                        <div
                          className="mx-5"
                          style={{
                            height: "1px",
                            backgroundColor: "rgba(0,50,96,0.07)",
                          }}
                        />
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ) : (
            <li key={link.name}>
              <NavLink to={link.path} className={getNavLinkClass}>
                {link.name}
              </NavLink>
            </li>
          )
        )}
      </ul>

      {/* Go Solar CTA */}
      <NavLink
        to="/gosolar"
        className="hidden md:inline-flex items-center justify-center font-semibold rounded-md transition-opacity duration-200 hover:opacity-90"
        style={{
          backgroundColor: "#111111",
          color: "#c8f000",
          fontSize: "15px",
          padding: "10px 22px",
          letterSpacing: "0.01em",
          whiteSpace: "nowrap",
        }}
      >
        Go Solar
      </NavLink>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden p-1"
        style={{ color: "#1a2b4a", fontSize: "22px" }}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-[80px] left-0 w-full shadow-lg py-5 flex flex-col items-center gap-5 md:hidden z-50 transition-all duration-300 ease-in-out ${
          menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
      >
        {NAV_LINKS.map((link) =>
          link.hasDropdown ? (
            <div key={link.name} className="flex flex-col items-center w-full">
              {/* Services row: label navigates, chevron toggles sub-menu */}
              <div className="flex items-center gap-1">
                <NavLink
                  to={link.path}
                  className={getNavLinkClass}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
                <button
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  className="p-1"
                  style={{ color: "#003260" }}
                  aria-label="Toggle services submenu"
                >
                  <FaChevronDown
                    className={`text-[11px] transition-transform duration-200 ${
                      mobileServicesOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
              </div>

              {/* Mobile sub-menu */}
              <div
                className={`flex flex-col items-center gap-2 overflow-hidden transition-all duration-300 ${
                  mobileServicesOpen ? "max-h-60 mt-2 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {SERVICES.map((service) => (
                  <NavLink
                    key={service.name}
                    to={service.path}
                    className={({ isActive }) =>
                      `text-[14px] font-medium transition-colors duration-200 ${
                        isActive ? "text-[#8FCC36]" : "text-[#003260] hover:text-[#8FCC36]"
                      }`
                    }
                    onClick={() => {
                      setMenuOpen(false);
                      setMobileServicesOpen(false);
                    }}
                  >
                    · {service.name}
                  </NavLink>
                ))}
              </div>
            </div>
          ) : (
            <NavLink
              key={link.name}
              to={link.path}
              className={getNavLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </NavLink>
          )
        )}

        <NavLink
          to="/gosolar"
          className="inline-flex items-center justify-center font-semibold rounded-md mt-1"
          style={{
            backgroundColor: "#111111",
            color: "#c8f000",
            fontSize: "15px",
            padding: "10px 22px",
          }}
          onClick={() => setMenuOpen(false)}
        >
          Go Solar
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;