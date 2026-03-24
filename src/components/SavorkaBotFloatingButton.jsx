import React from "react";
import savorkaLogo from "../assets/svorka_bot.svg";

export default function SavorkaBotFloatingButton({ onClick, isOpen }) {
  if (isOpen) return null;

  return (
    <button
      onClick={onClick}
      aria-label="Open Savorka Bot"
      className="
       fixed bottom-4 right-4 z-[9998]
  flex h-[70px] w-[70px] items-center justify-center
  bg-transparent border-0 shadow-none
  transition-all duration-300 hover:scale-105
  animate-botFloat
  sm:bottom-5 sm:right-5 sm:h-[74px] sm:w-[74px]
  animate-bounce
      "
    >
      <img
        src={savorkaLogo}
        alt="Savorka Bot"
        className="h-[90px] w-[90px] object-contain sm:h-[96px] sm:w-[96px]"
      />
    </button>
  );
}