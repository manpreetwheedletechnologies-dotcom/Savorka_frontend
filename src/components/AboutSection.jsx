
import React from "react";
import { MdOutlineTouchApp, MdVerified, MdHeadsetMic } from "react-icons/md";
import Rectangle from "../assets/Rectangle.png";
const FEATURES = [
  {
    icon: <MdOutlineTouchApp size={35} />,
    title: "Advanced Technology Integration",
    text: "We use high-efficiency solar panels, intelligent monitoring systems, and engineered designs to ensure maximum energy generation for every project.",
  },
  {
    icon: <MdVerified size={35} />,
    title: "Quality You Can Trust",
    text: "Every system we build follows strict quality checks, certified components, and industry-standard safety protocols for long-term reliability.",
  },  
  {
    icon: <MdHeadsetMic size={35} />,
    title: "End-to-End Customer Support",
    text: "From consultation to commissioning and post-installation maintenance, our team ensures smooth, transparent, and hassle-free project execution.",
  },
];
 
const AboutSection = () => {
  return (
    <section id="about-us" className="bg-[#F1F1EF] py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2
          className="font-[Monorope] font-bold text-center text-[#005B00]"
          style={{ width: "auto", height: "auto", fontSize: "clamp(28px, 5vw, 45px)", lineHeight: "1.2" }}
        >
          Building Sustainable Energy Solutions for Every Sector
        </h2>
 
        <p className="text-center text-gray-500 text-sm max-w-2xl mx-auto mb-10 leading-relaxed text-[#000000]">
          At Savorka Solar, our approach goes beyond installation. We focus on engineering
          reliability, long-term performance, and customer satisfaction through state-of-the-art
          technology and expert execution.
        </p>
 
        <hr className="border-gray-200 mb-10 max-w-xl mx-auto" />
 
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Features list */}
          <div className="flex-1 space-y-7">
            {FEATURES.map((f, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div
                  className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center text-white"
                  style={{ background: "linear-gradient(135deg, #2d7a27, #76c442)" }}
                >
                  {f.icon}
                </div>
                <div>
                  <h3
                    className={`font-heading font-bold text-base mb-1 px-2 py-1 inline-block ${f.title
                        ? "text-[#3C8C06]"
                        : "text-navy"
                      }`}
                  >
                    {f.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed text-[#000000]">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
 
          {/* Solar panel image */}
          <div className="flex-1 flex justify-center">
            <img
              src={Rectangle}
              alt="Solar panel with green leaves"
              className="w-full max-w-sm rounded-2xl object-cover"
              style={{ maxHeight: "380px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
 
export default AboutSection;
 
 