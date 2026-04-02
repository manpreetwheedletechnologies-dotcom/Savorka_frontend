import React from "react";
import { motion } from "framer-motion";
import bg_all from "../assets/hero_svg.jpg";

const HeroImageSection = ({
  title,
  heroImage = bg_all,
}) => {
  return (
    <div className="w-full flex flex-col items-center py-8">
      <div className="relative w-full px-4">
        {/* 1. Static Image Section */}
        <div
          className="relative w-full h-56 md:h-[430px] shadow-sm"
          style={{
            clipPath: "url(#hero-clip-path)",
            WebkitClipPath: "url(#hero-clip-path)",
          }}
        >
          <img
            src={heroImage}
            alt="Hero Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* 2. ONLY THE TITLE IS ANIMATED — renders only if title is provided */}
{title && (
  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none 
                  px-4 sm:px-6 md:px-8 
                  pb-10 sm:pb-14 md:pb-20">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full max-w-[90%] sm:max-w-md md:max-w-lg lg:max-w-xl
                 bg-white/10 backdrop-blur-md border border-white/20
                 px-5 sm:px-6 md:px-10 
                 py-4 sm:py-5 md:py-6 
                 rounded-xl sm:rounded-2xl 
                 shadow-2xl text-center"
    >
      
      <h1 className="
        font-extrabold text-transparent bg-clip-text 
        bg-gradient-to-r from-white via-green-100 to-green-300 
        drop-shadow-sm tracking-tight leading-tight
        text-[clamp(1.5rem,5vw,3rem)]
      ">
        {title}
      </h1>

      {/* Animated Underline */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "clamp(3rem, 20vw, 5rem)" }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="h-1 sm:h-1.5 
                   bg-gradient-to-r from-[#8FCC36] to-[#61C825] 
                   mx-auto mt-3 sm:mt-4 
                   rounded-full 
                   shadow-[0_0_15px_rgba(143,204,54,0.6)]"
      />
      
    </motion.div>
  </div>
)}

        {/* 3. Clip Path Definition */}
        <svg width="0" height="0" className="absolute">
          <defs>
            <clipPath id="hero-clip-path" clipPathUnits="objectBoundingBox">
              <path d="M0,0 H1 V0.85 Q1,1 0.85,1 H0.62 C0.58,1 0.56,0.82 0.5,0.82 C0.44,0.82 0.42,1 0.38,1 H0.15 Q0,1 0,0.85 Z" />
            </clipPath>
          </defs>
        </svg>

        {/* 4. Static Button Area */}
        <div className="absolute bottom-[-25px] md:bottom-[-45px] left-1/2 -translate-x-1/2">
          <button className="w-20 h-20 md:w-28 md:h-28 rounded-full flex items-center justify-center cursor-pointer bg-white border-[8px] border-white overflow-hidden">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 172 172"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="86" cy="86" r="86" fill="url(#paint_grad)" />
              <path
                d="M54 70L86 102L118 70"
                stroke="white"
                strokeWidth="12"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint_grad"
                  x1="86"
                  y1="0"
                  x2="86"
                  y2="172"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#8FCC36" />
                  <stop offset="1" stopColor="#61C825" />
                </linearGradient>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroImageSection;