import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import SavorkaSolarLogo from "../assets/savorkalogo.png";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Project", path: "/projects" },
   { name: "Blogs", path: "/blogs" },
  { name: "Contact us", path: "/contact" },
  
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const menuRef = useRef(null);
  const lastScrollY = useRef(0);

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;

      // Update shadow state
      setScrolled(currentScrollY > 10);

      // Hide/show navbar based on scroll direction
      if (currentScrollY > lastScrollY.current && currentScrollY > 60) {
        // Scrolling DOWN → hide navbar
        setNavVisible(false);
        setMenuOpen(false); // also close mobile menu
      } else {
        // Scrolling UP → show navbar
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
      }
    };
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

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
        {NAV_LINKS.map((link) => (
          <li key={link.name}>
            <NavLink to={link.path} className={getNavLinkClass}>
              {link.name}
            </NavLink>
          </li>
        ))}
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

      {/* Mobile Menu — always in DOM for transition to work */}
      <div
        className={`absolute top-full left-0 w-full shadow-lg py-5 flex flex-col items-center gap-5 md:hidden z-50 transition-all duration-300 ease-in-out ${
          menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        style={{
          backgroundColor: "rgba(245, 245, 232, 0.88)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={getNavLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </NavLink>
        ))}
        <NavLink
          to="/contact"
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