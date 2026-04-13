import React from "react";
import towerImg from "../assets/towerimg.png";

const WhySolarSection = () => {
  return (
    <section className=" px-6 py-14 md:px-12 lg:px-16">
<div className="mx-auto">

        {/* TOP ROW — center bigger, side cards same size */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-stretch mb-6">

          {/* Strong Brand Image — side card */}
          <div className="bg-[#dde3d0] rounded-3xl px-8 py-10 flex flex-col items-center justify-center text-center
            transition-all duration-300 ease-out
            hover:-translate-y-2 hover:shadow-xl hover:shadow-black-200/60 hover:bg-[#ccd4bc] cursor-pointer">
            <h3 className="text-[17px] font-semibold text-[#2d2d2d] mb-4">
              Lower Energy Expenses
            </h3>
            <p className="text-[13.5px] leading-[1.75] text-[#444] max-w-[330px]">
             Generate your own clean power and reduce dependence on expensive grid electricity. Solar significantly lowers monthly energy bills for businesses, homes, and residential communities.
            </p>
          </div>

          {/* CENTER: Title + Image — bigger */}
          <div className="flex flex-col items-center justify-center text-center py-6 scale-105 origin-center
            transition-all duration-300 ease-out hover:scale-110 cursor-pointer group">
            <h2
              className="text-[#2e7d32] font-bold mb-5 transition-colors duration-300 group-hover:text-[#1a5c1a]"
              style={{
                fontSize: "clamp(28px, 4.5vw, 44px)",
              }}
            >
              Why go SOLAR?
            </h2>
            <img
              src={towerImg}
              alt="solar panel illustration"
              className="w-full max-w-[520px] transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Subsidy & Tax Benefits — side card */}
          <div className="bg-[#dde3d0] rounded-3xl px-8 py-10 flex flex-col items-center justify-center text-center
            transition-all duration-300 ease-out
            hover:-translate-y-2 hover:shadow-xl hover:shadow-black-200/60 hover:bg-[#ccd4bc] cursor-pointer">
            <h3 className="text-[17px] font-semibold text-[#2d2d2d] mb-4">
              Faster ROI & Long-Term Savings
            </h3>
            <p className="text-[13.5px] leading-[1.75] text-[#444] max-w-[330px]">
              Optimized system design and efficient installation ensure quicker payback and decades of consistent savings on energy expenses.
            </p>
          </div>
        </div>

        {/* BOTTOM ROW — outer cards TALL, inner two cards SMALL */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 items-stretch">

          {/* Save on Electricity Bills — light green, TALL */}
          <div className="bg-[#8cc63f] rounded-3xl px-7 py-10 flex flex-col items-center justify-center text-center
            transition-all duration-300 ease-out
            hover:-translate-y-2 hover:shadow-xl hover:shadow-black-400/50 hover:bg-[#7db835] cursor-pointer">
            <h3 className="text-[17px] font-semibold text-white mb-3">
              Government Incentives & Tax Benefits
            </h3>
            <p className="text-[13px] leading-[1.7] text-white">
              Benefit from subsidies, tax credits, and policy incentives that reduce upfront investment and improve overall project affordability.
            </p>
          </div>

          {/* Eco-Friendly Energy Source — dark green, SMALL */}
          <div className="bg-[#4a8f2a] rounded-3xl px-7 py-9 flex flex-col items-center justify-center text-center scale-90 origin-center
            transition-all duration-300 ease-out
            hover:scale-95 hover:shadow-xl hover:shadow-black-700/40 hover:bg-[#3d7a22] cursor-pointer">
            <h3 className="text-[17px] font-semibold text-white mb-3">
             Sustainable & Eco-Friendly Power
            </h3>
            <p className="text-[13px] leading-[1.7] text-white">
              Solar power reduces carbon emissions and supports environmental responsibility for organizations, households, and communities alike.
            </p>
          </div>

          {/* Energy Independence — dark green, SMALL */}
          <div className="bg-[#4a8f2a] rounded-3xl px-7 py-9 flex flex-col items-center justify-center text-center scale-90 origin-center
            transition-all duration-300 ease-out
            hover:scale-95 hover:shadow-xl hover:shadow-black-700/40 hover:bg-[#3d7a22] cursor-pointer">
            <h3 className="text-[17px] font-semibold text-white mb-3">
              Energy Independence & Reliability
            </h3>
            <p className="text-[13px] leading-[1.7] text-white">
              Minimize power cuts and protect against rising utility tariffs with dependable on-site solar generation.
            </p>
          </div>

          {/* Increase Property Value — light green, TALL */}
          <div className="bg-[#8cc63f] rounded-3xl px-7 py-10 flex flex-col items-center justify-center text-center
            transition-all duration-300 ease-out
            hover:-translate-y-2 hover:shadow-xl hover:shadow-black-400/50 hover:bg-[#7db835] cursor-pointer">
            <h3 className="text-[17px] font-semibold text-white mb-3">
              Higher Property & Asset Value
            </h3>
            <p className="text-[13px] leading-[1.7] text-white">
             Solar-enabled buildings attract buyers, tenants, and investors with lower operating costs and future-ready sustainable infrastructure.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhySolarSection;