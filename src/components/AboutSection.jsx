import React from "react";
import Rectangle from "../assets/Rectangle-r.png";
import advance from "../assets/advance.png";
import quality from "../assets/quality.png";
import endtoend from "../assets/endtoend.png";

const FEATURES = [
  {
    icon: advance,
    title: "Versatile Solar Power Solutions",
    text: "On-grid, off-grid, and hybrid solar solutions for industries, residences, and housing societies- across rooftop and ground-mounted installations.",
  },
  {
    icon: quality,
    title: "Quality You Can Trust",
    text: "Every system we build follows strict quality checks, certified components, and industry-standard safety protocols for long-term reliability.",
  },
  {
    icon: endtoend,
    title: "End-to-End Customer Support",
    text: "From consultation to commissioning and post-installation maintenance, our team ensures smooth, transparent, and hassle-free project execution.",
  },
];

const AboutSection = () => {
  return (
    <section id="about-us" className="py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2
          className="font-bold text-center text-[#005B00] mb-4"
          style={{ fontSize: "clamp(26px, 4vw, 38px)", lineHeight: "1.25", fontFamily: "Manrope, sans-serif" }}
        >
          Building Sustainable Energy Solutions for Every Sector
        </h2>

        {/* Subtext */}
        <p
          className="text-center max-w-3xl mx-auto mb-8 leading-relaxed"
          style={{ color: "#444", fontSize: "15px" }}
        >
          At Savorka Solar, our approach goes beyond installation. We focus on engineering
          reliability, long-term performance, and customer satisfaction through state-of-the-art
          technology and expert execution.
        </p>

        <hr className="border-gray-300 mb-10 max-w-xl mx-auto" />

        {/* Content Row */}
        <div className="flex flex-col md:flex-row gap-10 items-center">

          {/* Features list */}
          <div className="flex-1 space-y-8">
            {FEATURES.map((f, i) => (
              <div key={i} className="flex gap-5 items-start">
                {/* Large circular icon — matches screenshot */}

                  <img
                    src={f.icon}
                    alt={f.title}
                    style={{ width: "72px", height: "72px", objectFit: "contain" }}
                  />

                {/* Text content */}
                <div>
                  <h3
                    className="font-bold mb-1"
                    style={ {color: "#1a7a10", fontSize: "clamp(18px, 4vw, 28px)", lineHeight: "1.25", fontFamily: "Manrope, sans-serif"} }
                  >
                    {f.title}
                  </h3>
                  <p
                    className="leading-relaxed"
                    style={{ color: "#333", fontSize: "14px", maxWidth: "420px" }}
                  >
                    {f.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Solar panel image — right side, no border-radius cut too much */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src={Rectangle}
              alt="Solar panel with green leaves"
              className="rounded-2xl object-cover w-full"
    
              style={{ maxWidth: "420px", maxHeight: "420px", minHeight: "300px", filter: "drop-shadow(0px 20px 4px rgba(0, 0, 0, 0.3))"}}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;