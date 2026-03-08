 
import React from "react";
import heroimg from "../assets/heroimg.png";
 
const HeroSection = () => {
  return (
    <section
      id="home"
      className="pt-10 pb-0 text-center overflow-hidden"
      style={{ backgroundColor: "#f3f3ed" }}
    >
      {/* Heading */}
      <h1
        className="font-heading font-bold text-primary text-2xl sm:text-3xl md:text-4xl lg:text-4xl px-4"
        style={{ lineHeight: 1.2 }}
      >
        Comprehensive Solar Solutions for Every Need
      </h1>
 
      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6 mb-10 px-4">
        <a
          href="#about-us"
          className="btn-primary w-full sm:w-auto text-center"
          style={{ borderRadius: "8px", padding: "11px 36px" }}
        >
          Learn more
        </a>
 
        <a
          href="#contact"
          className="btn-secondary w-full sm:w-auto text-center"
          style={{ borderRadius: "8px", padding: "11px 36px" }}
        >
          Send Query
        </a>
      </div>
 
      {/* Hero Image Full Width */}
      <div className="w-full">
        <img
          src={heroimg}
          alt="Solar Panels"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};
 
export default HeroSection;
 