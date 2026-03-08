import React, { useState } from "react";
import { Link } from "react-router-dom";
import SavorkaLogo from "../assets/footerlogo.png";
import { FaChevronRight } from "react-icons/fa";

const QUICK_LINKS = [
  { name: "Home", path: "/" },
  { name: "About us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];
const SERVICES = [
  "On-Grid Solar Solutions",
  "Off-Grid & Hybrid Solar Solutions",
  "Solar Operation & Maintenance (O&M)",
  "Solar Structure Manufacturing",
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  return (
    <footer className="bg-dark text-white pt-14 pb-0">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Link to="/">
                <img src={SavorkaLogo} alt="Savorka Solar Logo" className="h-10" />
              </Link>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed mt-4">
              Savorka Solar is a fast-growing renewable energy company delivering end-to-end
              solar solutions across residential, commercial, and industrial sectors. Founded
              in 2016, we specialize in On-Grid, Off-Grid &amp; Hybrid solar systems, O&amp;M
              services, and solar structure manufacturing helping businesses and communities
              transition to reliable and sustainable energy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm mb-5 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 text-xs hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <FaChevronRight
                      size={10}
                      className="text-primary-bright group-hover:translate-x-0.5 transition-transform"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm mb-5 tracking-wide">
              Our Services
            </h4>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-gray-400 text-xs hover:text-white transition-colors flex items-start gap-2 group"
                  >
                    <FaChevronRight
                      size={10}
                      className="text-primary-bright mt-0.5 flex-shrink-0 group-hover:translate-x-0.5 transition-transform"
                    />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm mb-5 tracking-wide">
              Newsletter
            </h4>
            <p className="text-gray-400 text-xs leading-relaxed mb-4">
              Signup our newsletter to get update information, news, insight or promotions.
            </p>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg text-xs bg-gray-800 border border-gray-700 text-white placeholder-gray-500 outline-none focus:border-primary transition-colors"
              />
              <input
                type="email"
                placeholder="Email ID"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg text-xs bg-gray-800 border border-gray-700 text-white placeholder-gray-500 outline-none focus:border-primary transition-colors"
              />
              <button
                onClick={() => {
                  setName("");
                  setEmail("");
                }}
               className="w-full py-2.5 rounded-lg font-heading font-bold text-xs text-[#003260] transition-opacity hover:opacity-90 bg-[linear-gradient(90deg,#76c442,#4caf50)]"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 py-5 text-center">
          <p className="text-gray-500 text-xs">
            Copyright © 2026 Savorka Solar, All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;