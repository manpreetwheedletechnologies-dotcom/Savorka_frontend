import React, { useState } from "react";
import { Link } from "react-router-dom";
import SavorkaLogo from "../assets/footerlogo.png";
import { FaChevronRight } from "react-icons/fa";
import servicesData from "../data/servicesData";
import API_BASE_URL from "../config/api";
// import API_BASE_URL from "../config/api";

const QUICK_LINKS = [
  { name: "Home", path: "/" },
  { name: "About us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact Us", path: "/contact" },
];

// const SERVICES = [
//   "On-Grid Solar Solutions",
//   "Off-Grid & Hybrid Solar Solutions",
//   "Solar Operation & Maintenance (O&M)",
//   "Solar Structure Manufacturing",
// ];

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName || !trimmedEmail) {
      setMessageType("error");
      setMessage("Please enter both your name and email address.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setMessageType("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");
      setMessageType("");

      const res = await fetch(`${API_BASE_URL}/newsletters`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to subscribe");
      }

      setMessageType("success");
      setMessage("Thank you for subscribing to our newsletter.");
      setName("");
      setEmail("");
    } catch (error) {
      setMessageType("error");
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="w-full bg-[#050505] pt-10 text-white md:pt-12">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-10 pb-8 sm:grid-cols-2 lg:grid-cols-[1.45fr_0.95fr_1.15fr_1fr] lg:gap-12">
          {/* Brand */}
          <div className="max-w-[360px]">
            <Link to="/" className="inline-block">
              <img
                src={SavorkaLogo}
                alt="Savorka Solar Logo"
                className="h-auto w-[200px] object-contain"
                draggable="false"
              />
            </Link>

            <p className="mt-5 text-[13px] leading-[1.32] text-[#E2E2E2]">
              Savorka Solar is a fast-growing renewable energy company
              delivering end-to-end solar solutions across residential,
              commercial, and industrial sectors. Founded in 2016, we specialize
              in On-Grid, Off-Grid &amp; Hybrid solar systems, O&amp;M services,
              and solar structure manufacturing — helping businesses and
              communities transition to reliable and sustainable energy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 text-[16px] font-bold leading-none text-white">
              Quick Links
            </h4>

            <ul className="space-y-5">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-3 text-[13px] font-semibold text-white/95 transition-colors hover:text-[#B6E23A]"
                  >
                    <FaChevronRight
                      size={9}
                      className="translate-x-0 text-white transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-5 text-[16px] font-bold leading-none text-white">
              Our Services
            </h4>

            <ul className="space-y-5">
              {servicesData.slice(0, 4).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="group flex items-start gap-3 text-[13px] font-semibold leading-[1.3] text-white/95 transition-colors hover:text-[#B6E23A]"
                  >
                    <FaChevronRight
                      size={9}
                      className="mt-[3px] shrink-0 translate-x-0 text-white transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                    <span>{service.cardTitle}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="max-w-[300px]">
            <h4 className="mb-5 text-[16px] font-bold leading-none text-white">
              Newsletter
            </h4>

            <p className="mb-5 text-[13px] leading-[1.3] text-[#E2E2E2]">
              Signup our newsletter to get update information, news, insight or
              promotions.
            </p>

            <div className="space-y-2.5">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (message) {
                    setMessage("");
                    setMessageType("");
                  }
                }}
                className="h-[22px] w-full rounded-[2px] border border-[#BFBFBF] bg-[#F3F3F3] px-3 text-[12px] text-[#1C1C1C] outline-none placeholder:text-[#8B8B8B] focus:border-[#B6E23A]"
              />

              <input
                type="email"
                placeholder="Email ID"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (message) {
                    setMessage("");
                    setMessageType("");
                  }
                }}
                className="h-[22px] w-full rounded-[2px] border border-[#BFBFBF] bg-[#F3F3F3] px-3 text-[12px] text-[#1C1C1C] outline-none placeholder:text-[#8B8B8B] focus:border-[#B6E23A]"
              />

              <button
                onClick={handleSubscribe}
                disabled={loading}
                className="mt-1 inline-flex h-[28px] min-w-[82px] items-center justify-center rounded-[3px] bg-[#B6E23A] px-4 text-[12px] font-bold text-[#0A223F] transition-all duration-200 hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Submitting..." : "Subscribe"}
              </button>

              {message && (
                <p
                  className={`pt-1 text-[12px] leading-[1.35] ${
                    messageType === "success"
                      ? "text-[#B6E23A]"
                      : "text-[#FF8A8A]"
                  }`}
                >
                  {message}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-white/45" />

        <div className="flex min-h-[62px] items-center justify-center py-4 text-center">
          <p className="text-[12px] text-[#D8D8D8]">
            Copyright © 2026 Savorka Solar, All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
