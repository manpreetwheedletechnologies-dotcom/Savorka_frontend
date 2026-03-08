import React from "react";

const SavorkaLogo = ({ light = false }) => {
  return (
    <div className="flex items-center gap-2 select-none">
      {/* S icon */}
      <div className="relative w-10 h-10 flex-shrink-0">
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="20" cy="20" r="20" fill="url(#logoGrad)" />
          <text x="20" y="27" textAnchor="middle" fontSize="22" fontWeight="900" fontFamily="Montserrat, sans-serif" fill="white">S</text>
          <defs>
            <linearGradient id="logoGrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#76c442" />
              <stop offset="100%" stopColor="#0d4f8b" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {/* Text */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-heading font-black text-xl tracking-wider ${light ? "text-white" : "text-navy"}`}
          style={{ letterSpacing: "0.08em" }}
        >
          SAVORKA
        </span>
        <span
          className="text-[9px] font-bold tracking-[0.3em] px-1 rounded-sm mt-0.5"
          style={{
            background: "linear-gradient(90deg, #76c442, #4caf50)",
            color: "white",
            letterSpacing: "0.25em",
          }}
        >
          SOLAR
        </span>
      </div>
    </div>
  );
};

export default SavorkaLogo;
