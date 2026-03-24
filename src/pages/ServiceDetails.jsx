import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Parses and renders the desc string with proper formatting:
// - "FAQs"                        → green section heading
// - "Our Expertise:" / "What is covered?" → subheading
// - "Q. ..."                      → bold question
// - "A. ..."                      → indented answer with green left border
// - "• ..."                       → bullet list item
// - empty lines                   → spacing
// - everything else               → normal paragraph
const FormattedDesc = ({ text }) => {
  const lines = text.split("\n");
  const subheadingKeywords = ["Our Expertise:", "Our Expertise", "What is covered?"];

  const elements = [];
  let bulletBuffer = [];
  let key = 0;

  const flushBullets = () => {
    if (bulletBuffer.length === 0) return;
    elements.push(
      <ul key={key++} className="space-y-2 my-3 pl-1">
        {bulletBuffer.map((b, i) => (
          <li key={i} className="flex items-start gap-2 text-gray-700 text-sm sm:text-base leading-relaxed">
            <span className="text-[#1a7a3c] font-bold mt-0.5">•</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    );
    bulletBuffer = [];
  };

  lines.forEach((line) => {
    const trimmed = line.trim();

    // Empty line → spacing
    if (!trimmed) {
      flushBullets();
      elements.push(<div key={key++} className="h-2" />);
      return;
    }

    // "FAQs" heading
    if (trimmed === "FAQs") {
      flushBullets();
      elements.push(
        <h3 key={key++} className="text-[#1a7a3c] font-bold text-lg sm:text-xl mt-6 mb-3 pb-2 border-b border-[#1a7a3c]/25">
          FAQs
        </h3>
      );
      return;
    }

    // Subheadings like "Our Expertise:" / "What is covered?"
    if (subheadingKeywords.some((kw) => trimmed.startsWith(kw))) {
      flushBullets();
      elements.push(
        <h4 key={key++} className="text-gray-800 font-semibold text-base sm:text-lg mt-5 mb-1">
          {trimmed}
        </h4>
      );
      return;
    }

    // Q. question
    if (trimmed.startsWith("Q.")) {
      flushBullets();
      elements.push(
        <p key={key++} className="text-gray-800 font-semibold text-sm sm:text-base mt-4 mb-1">
          {trimmed}
        </p>
      );
      return;
    }

    // A. answer
    if (trimmed.startsWith("A.")) {
      flushBullets();
      elements.push(
        <p key={key++} className="text-gray-600 text-sm sm:text-base mb-2 pl-4 border-l-2 border-[#1a7a3c]/40">
          {trimmed}
        </p>
      );
      return;
    }

    // Bullet point
    if (trimmed.startsWith("•")) {
      bulletBuffer.push(trimmed.replace(/^•\s*/, ""));
      return;
    }

    // Normal paragraph
    flushBullets();
    elements.push(
      <p key={key++} className="text-gray-600 text-sm sm:text-base leading-relaxed">
        {trimmed}
      </p>
    );
  });

  flushBullets();

  return <div className="space-y-1">{elements}</div>;
};

// ─── Main Detail Page ────────────────────────────────────────────────────────

const ServiceDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f4f6f0]">
        <div className="text-center">
          <p className="text-gray-500 mb-4">Service not found.</p>
          <button
            onClick={() => navigate(-1)}
            className="text-[#1a7a3c] font-semibold hover:underline"
          >
            ← Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f4f6f0]">

      {/* Hero image with overlay title */}
      <div className="relative w-full" style={{ height: "320px" }}>
        <img
          src={state.img}
          alt={state.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45 flex flex-col justify-end p-6 sm:p-10">
          {/* Back button */}
          <button
            onClick={() => navigate(-1)}
            className="absolute top-5 left-5 sm:top-8 sm:left-8 text-white bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium transition"
          >
            ← Back
          </button>

          {/* FIX: Show title and subtitle on detail page */}
          <h1 className="text-white font-bold text-2xl sm:text-4xl drop-shadow">
            {state.title}
          </h1>
          <p className="text-green-300 font-medium text-sm sm:text-base mt-1">
            {state.Subtitle}
          </p>
        </div>
      </div>

      {/* Formatted content */}
      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-10">
        <div className="bg-white rounded-2xl shadow-md p-6 sm:p-10">
          <FormattedDesc text={state.desc} />
        </div>

        {/* Bottom back button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => navigate(-1)}
            className="bg-[#1a7a3c] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#15612f] transition"
          >
            ← Back to Services
          </button>
        </div>
      </div>

    </div>
  );
};

export default ServiceDetails;