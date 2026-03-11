import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"; 
import { FaBars, FaTimes } from "react-icons/fa";
import SavorkaSolarLogo from "../assets/savorkalogo.png";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Contact us", path: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Function to generate active class
  const getNavLinkClass = ({ isActive }) =>
    `nav-link ${isActive ? "text-green-800 font-bold" : "text-gray-700"}`;

  return (
    <nav
      className={`bg-white sticky top-0 z-50 px-6 md:px-16 py-3 flex items-center justify-between transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      {/* Logo */}
      <NavLink to="/">
        <img
          src={SavorkaSolarLogo}
          alt="Savorka Solar Logo"
          className="h-10 w-auto"
        />
      </NavLink>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-8 list-none">
        {NAV_LINKS.map((link) => (
          <li key={link.name}>
            <NavLink to={link.path} className={getNavLinkClass}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <NavLink to="/contact" className="btn-gosolar hidden md:block">
        Go Solar
      </NavLink>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-dark text-xl p-1"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg py-4 flex flex-col items-center gap-4 md:hidden z-50">
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
            className="btn-gosolar mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Go Solar
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;