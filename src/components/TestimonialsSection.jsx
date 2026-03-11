import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ALL_TESTIMONIALS = [
  [
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
  ],
  [
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
  ],
];

const TestimonialCard = ({ role, company, text }) => (
  <div className="testimonial-card">
    <div
      className="px-5 py-3"
      style={{ background: "linear-gradient(135deg, #4a7c3f, #2d7a27)" }}
    >
      <p className="font-heading font-bold text-white text-sm">{role}</p>
      <p className="text-green-200 text-xs tracking-widest mt-0.5">{company}</p>
    </div>
    <div className="p-5 flex gap-4 items-start">
      <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center text-gray-400 text-xl font-bold">
        {role.charAt(0)}
      </div>
      <p className="text-gray-600 text-xs leading-relaxed">{text}</p>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const [page, setPage] = useState(0);

  return (
    <section className="bg-white py-16 px-6 md:px-16" id="project">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading font-black text-primary text-2xl md:text-3xl text-center mb-10">
          Trusted by <span className="text-navy">Businesses, Industries</span> &amp;{" "}
          <span className="text-navy">Homeowners</span> Across India
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {ALL_TESTIMONIALS[page].map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-end gap-3 text-sm text-gray-500">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="flex items-center gap-1 disabled:opacity-40 hover:text-primary transition-colors font-medium"
          >
            <FaChevronLeft size={11} /> Previous
          </button>
          {ALL_TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`w-7 h-7 rounded-full font-heading font-bold text-xs transition-all ${
                page === i
                  ? "bg-primary text-white shadow-md"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <span className="text-gray-300">…</span>
          <button
            onClick={() => setPage((p) => Math.min(ALL_TESTIMONIALS.length - 1, p + 1))}
            disabled={page === ALL_TESTIMONIALS.length - 1}
            className="flex items-center gap-1 disabled:opacity-40 hover:text-primary transition-colors font-medium"
          >
            Next <FaChevronRight size={11} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
