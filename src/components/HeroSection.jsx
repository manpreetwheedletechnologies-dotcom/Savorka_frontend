
import SolarCarousel from "./SolarCarousel";
import { NavLink } from "react-router-dom";
const HeroSection = () => {
  return (
    <section
      id="home"
      className="pt-10 pb-0 text-center overflow-hidden"
    >
      {/* Heading */}
      <h1
        className="font-heading font-semibold text-[#005B00] text-2xl sm:text-3xl md:text-4xl lg:text-4xl px-4"
        style={{ lineHeight: 1.2 }}
      >
        Powering Businesses & Homes with Intelligent Solar EPC Solutions
      </h1>

      {/* Buttons */}
<div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6 mb-10 px-4">
      {/* Learn More Button */}
      <a
        href="#about-us"
        className="group relative w-full sm:w-auto inline-flex h-12 items-center justify-center overflow-hidden font-semibold duration-500"
        style={{
          borderRadius: "8px",
          padding: "10px 66px",
          background: "linear-gradient(135deg, #2A9D24 0%, #21bc19 100%)",
          color: "#ffffff",
        }}
      >
        {/* Default text — slides up on hover */}
        <span className="translate-y-0 opacity-100 transition duration-500 group-hover:-translate-y-[150%] group-hover:opacity-0">
          Learn more
        </span>
 
        {/* Arrow icon — slides in from below on hover */}
        <span className="absolute translate-y-[150%] opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
          >
            <path
              d="M7.5 2C7.77614 2 8 2.22386 8 2.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 2.5C7 2.22386 7.22386 2 7.5 2Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </a>
 
      {/* Send Query Button */}
      <NavLink to="/contact"
        className="group relative w-full sm:w-auto inline-flex h-12 items-center justify-center overflow-hidden font-semibold duration-500"
        style={{
          borderRadius: "8px",
          padding: "10px 66px",
          background: "black",
          color: "#ffffff",
        }}
      >
        {/* Default text — slides up on hover */}
        <span className="translate-y-0 opacity-100 transition duration-500 group-hover:-translate-y-[150%] group-hover:opacity-0">
          Send Query
        </span>
 
        {/* Arrow icon — slides in from below on hover */}
        <span className="absolute translate-y-[150%] opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
          >
            <path
              d="M7.5 2C7.77614 2 8 2.22386 8 2.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 2.5C7 2.22386 7.22386 2 7.5 2Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </NavLink>
    </div>

      {/* Hero Image Full Width */}
      <div className="w-full ">
        <SolarCarousel/>
      </div>
    </section>
  );
};

export default HeroSection;
