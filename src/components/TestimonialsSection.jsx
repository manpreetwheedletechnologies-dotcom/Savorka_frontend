import React, { useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ALL_TESTIMONIALS = [
  {
    role: "Facility Manager",
    company: "COMMERCIAL BUILDING",
    text: "Our monthly electricity costs dropped significantly after installing an On-Grid system by Savorka Solar. Their team handled everything from design to net-metering.",
  },
  {
    role: "Operations Head",
    company: "MANUFACTURING UNIT",
    text: "Savorka Solar delivered our 500 kWp rooftop system with precision and professionalism. The installation was smooth, and the performance has exceeded expectations.",
  },
  {
    role: "Director",
    company: "INDUSTRIAL CLIENT",
    text: "The O&M team ensures our solar plant runs at peak performance throughout the year. Fast response, accurate monitoring, and excellent reporting.",
  },
  {
    role: "Plant Manager",
    company: "TEXTILE INDUSTRY",
    text: "Savorka Solar's hybrid solution helped us achieve energy independence. The battery backup system ensures uninterrupted production even during grid outages.",
  },
  {
    role: "CEO",
    company: "REAL ESTATE DEVELOPER",
    text: "Installing solar across our housing society increased property values and reduced common area electricity bills by over 70%. Excellent ROI.",
  },
  {
    role: "Principal",
    company: "EDUCATIONAL INSTITUTION",
    text: "Our school now runs almost entirely on solar energy. The savings go back into education. Savorka's team was professional and completed the project on time.",
  },
];

// On desktop: 3 cards per page. On mobile: 1 card per page.
const DESKTOP_PER_PAGE = 3;

const TestimonialCard = ({ role, company, text }) => (
  <div className="rounded-lg overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full">
    <div
      className="px-5 py-3"
      style={{ background: "linear-gradient(135deg, #4a7c3f, #2d7a27)" }}
    >
      <p className="font-bold text-white text-sm">{role}</p>
      <p className="text-green-200 text-xs tracking-widest mt-0.5">{company}</p>
    </div>
    <div className="p-5 flex gap-4 items-start bg-white flex-1">
      <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center text-gray-500 font-bold text-base">
        {role.charAt(0)}
      </div>
      <p className="text-gray-600 text-xs leading-relaxed">{text}</p>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const [page, setPage] = useState(0);
  const desktopTrackRef = useRef(null);
  const mobileTrackRef = useRef(null);

  const desktopPages = Math.ceil(ALL_TESTIMONIALS.length / DESKTOP_PER_PAGE);
  const mobilePages = ALL_TESTIMONIALS.length;

  const goToPage = (newPage, total) => {
    if (newPage < 0 || newPage >= total) return;
    setPage(newPage);

    // Scroll desktop track
    if (desktopTrackRef.current) {
      desktopTrackRef.current.scrollTo({
        left: desktopTrackRef.current.offsetWidth * newPage,
        behavior: "smooth",
      });
    }

    // Scroll mobile track
    if (mobileTrackRef.current) {
      mobileTrackRef.current.scrollTo({
        left: mobileTrackRef.current.offsetWidth * newPage,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-white py-10 md:py-16 px-4 md:px-16" id="project">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-black text-2xl md:text-3xl text-center mb-8 leading-snug">
          Trusted by{" "}
          <span className="text-green-700">Businesses, Industries</span> &amp;{" "}
          <span className="text-green-700">Homeowners</span> Across India
        </h2>

        {/* ── DESKTOP: 3 cards per slide ── */}
        <div className="hidden md:block overflow-hidden mb-6">
          <div
            ref={desktopTrackRef}
            className="flex"
            style={{ overflowX: "hidden", scrollSnapType: "x mandatory" }}
          >
            {Array.from({ length: desktopPages }).map((_, gi) => (
              <div
                key={gi}
                className="grid grid-cols-3 gap-5 p-1"
                style={{ flex: "0 0 100%", scrollSnapAlign: "start" }}
              >
                {ALL_TESTIMONIALS.slice(
                  gi * DESKTOP_PER_PAGE,
                  gi * DESKTOP_PER_PAGE + DESKTOP_PER_PAGE
                ).map((t, i) => (
                  <TestimonialCard key={i} {...t} />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ── MOBILE: 1 card per slide ── */}
        <div className="block md:hidden overflow-hidden mb-6">
          <div
            ref={mobileTrackRef}
            className="flex"
            style={{ overflowX: "hidden", scrollSnapType: "x mandatory" }}
          >
            {ALL_TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="p-1"
                style={{ flex: "0 0 100%", scrollSnapAlign: "start" }}
              >
                <TestimonialCard {...t} />
              </div>
            ))}
          </div>
        </div>

        {/* ── PAGINATION ── */}
        {/* Desktop pagination */}
        <div className="hidden md:flex items-center justify-end gap-3 text-sm text-gray-500">
          <button
            onClick={() => goToPage(page - 1, desktopPages)}
            disabled={page === 0}
            className="flex items-center gap-1 disabled:opacity-40 hover:text-green-700 transition-colors font-medium"
          >
            <FaChevronLeft size={11} /> Previous
          </button>
          {Array.from({ length: desktopPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i, desktopPages)}
              className={`w-7 h-7 rounded-full font-bold text-xs transition-all ${
                page === i
                  ? "bg-green-700 text-white shadow-md"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => goToPage(page + 1, desktopPages)}
            disabled={page === desktopPages - 1}
            className="flex items-center gap-1 disabled:opacity-40 hover:text-green-700 transition-colors font-medium"
          >
            Next <FaChevronRight size={11} />
          </button>
        </div>

        {/* Mobile pagination */}
        <div className="flex md:hidden items-center justify-center gap-3 text-sm text-gray-500">
          <button
            onClick={() => goToPage(page - 1, mobilePages)}
            disabled={page === 0}
            className="flex items-center gap-1 disabled:opacity-40 hover:text-green-700 transition-colors font-medium"
          >
            <FaChevronLeft size={11} /> Prev
          </button>
          <span className="text-gray-400 text-xs">
            {page + 1} / {mobilePages}
          </span>
          <button
            onClick={() => goToPage(page + 1, mobilePages)}
            disabled={page === mobilePages - 1}
            className="flex items-center gap-1 disabled:opacity-40 hover:text-green-700 transition-colors font-medium"
          >
            Next <FaChevronRight size={11} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;