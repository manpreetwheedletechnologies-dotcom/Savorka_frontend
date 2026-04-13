import React from "react";
import mainImg from "../assets/mainImg.jpeg";
import smallImg from "../assets/smallImg.jpeg";

export default function SolarRevolutionSection({
  titleLine1 = "Join the Solar Revolution",
  titleLine2 = "with Savorka",
  coverLabel = "What we cover",
  coveragePoints = [
    "Evaluation of power load and energy needs",
    "Design of off-grid and hybrid solar solutions",
    "Selection & integration of suitable battery banks",
    "Setup and configuration of hybrid inverters",
    "Complete system installation & commissioning",
    "Testing and optimization for efficient performance",
  ],
  yearsText = "9+ YEARS",
  experienceText = "Experience",
  mainImage = mainImg,
  smallImage = smallImg,
}) {
  return (
    <section className="w-full bg-[#F6FCD0] px-4 sm:px-6 md:px-10 lg:px-[100px] py-8 md:py-10">
      <div className="max-w-[1120px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-8 lg:gap-10 items-stretch">
          {/* LEFT IMAGE COMPOSITION */}
          <div className="relative mx-auto w-full max-w-[360px] lg:self-stretch">
            <div className="relative h-full min-h-[360px] md:min-h-[390px] lg:min-h-[400px]">
              {/* Main image */}
              <div className="overflow-hidden h-full group relative cursor-pointer">
                <img
                  src={mainImage}
                  alt="Solar engineer working on installation"
                  className="w-full h-[320px] sm:h-[340px] md:h-[370px] lg:h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-500 flex items-center justify-center">
                  <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition duration-300">
                    View Image
                  </span>
                </div>
              </div>

              {/* Bottom green strip */}
              <div className="absolute left-0 bottom-0 h-[28px] bg-[#3D9800] w-full"></div>

              {/* Small overlapping image */}
              <div className="absolute left-[-22px] bottom-[-10px] sm:left-[-28px] sm:bottom-[-12px] w-[112px] sm:w-[122px] md:w-[132px] bg-white p-[4px] shadow-sm z-10 group cursor-pointer overflow-hidden">
                <img
                  src={smallImage}
                  alt="Solar technician cleaning solar panel"
                  className="w-full h-[112px] sm:h-[122px] md:h-[132px] object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-500 flex items-center justify-center">
                  <span className="text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition duration-300">
                    View
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col justify-center">
            <h2 className="text-black font-extrabold leading-[1.02] text-[24px] sm:text-[30px] md:text-[36px] lg:text-[38px] max-w-[520px]">
              {titleLine1}
              <br />
              {titleLine2}
            </h2>

            <div className="mt-5 flex flex-row items-start gap-4 md:gap-5">
              <div className="flex flex-row items-start gap-2 shrink-0">
                <div
                  className="text-transparent font-extrabold leading-none tracking-tight text-[42px] sm:text-[48px] md:text-[54px]"
                  style={{
                    WebkitTextStroke: "1.5px #18A51B",
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                  }}
                >
                  {yearsText}
                </div>

                <div
                  className="text-[#333333] font-extrabold leading-none text-[28px] sm:text-[34px] md:text-[40px]"
                  style={{
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                  }}
                >
                  {experienceText}
                </div>
              </div>

              <div className="flex-1 min-w-0 pt-1">
                <div className="inline-block bg-[#4D9E1D] px-4 md:px-5 py-2 mb-4">
                  <span className="text-white font-bold text-[20px] sm:text-[22px] md:text-[24px] leading-none">
                    {coverLabel}
                  </span>
                </div>

                <ul className="space-y-1.5 text-black text-[16px] sm:text-[17px] md:text-[18px] leading-[1.35] font-normal max-w-[620px]">
                  {coveragePoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="mt-[1px] text-[16px] leading-none">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




// import React from "react";
// import mainImg from "../assets/mainImg.jpeg";
// import smallImg from "../assets/smallImg.jpeg";

// const coveragePoints = [
//   "Evaluation of power load and energy needs",
//   "Design of off-grid and hybrid solar solutions",
//   "Selection & integration of suitable battery banks",
//   "Setup and configuration of hybrid inverters",
//   "Complete system installation & commissioning",
//   "Testing and optimization for efficient performance",
// ];

// export default function SolarRevolutionSection() {
//   return (
//     <section className="w-full bg-[#F6FCD0] px-4 sm:px-6 md:px-10 lg:px-[100px] py-8 md:py-10">
//       <div className="max-w-[1120px] mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-8 lg:gap-10 items-stretch">
//           {/* LEFT IMAGE COMPOSITION */}
//           <div className="relative mx-auto w-full max-w-[360px] lg:self-stretch">
//             <div className="relative h-full min-h-[360px] md:min-h-[390px] lg:min-h-[400px]">
//               {/* Main image */}
//               <div className="overflow-hidden h-full group relative cursor-pointer">
//                 <img
//                   src={mainImg}
//                   alt="Solar engineer working on installation"
//                   className="w-full h-[320px] sm:h-[340px] md:h-[370px] lg:h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                 />

//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-500 flex items-center justify-center">
//                   <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition duration-300">
//                     View Image
//                   </span>
//                 </div>
//               </div>

//               {/* Bottom green strip */}
//               <div className="absolute left-0 bottom-0 h-[28px] bg-[#3D9800] w-full"></div>

//               {/* Small overlapping image */}
//               <div className="absolute left-[-22px] bottom-[-10px] sm:left-[-28px] sm:bottom-[-12px] w-[112px] sm:w-[122px] md:w-[132px] bg-white p-[4px] shadow-sm z-10 group cursor-pointer overflow-hidden">
//                 <img
//                   src={smallImg}
//                   alt="Solar technician cleaning solar panel"
//                   className="w-full h-[112px] sm:h-[122px] md:h-[132px] object-cover transition-transform duration-500 group-hover:scale-110"
//                 />

//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-500 flex items-center justify-center">
//                   <span className="text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition duration-300">
//                     View
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT CONTENT */}
//           <div className="flex flex-col justify-center">
//             {/* Heading */}
//             <h2 className="text-black font-extrabold leading-[1.02] text-[24px] sm:text-[30px] md:text-[36px] lg:text-[38px] max-w-[520px]">
//               Join the Solar Revolution
//               <br />
//               with Savorka
//             </h2>

//             {/* Content row */}
//             <div className="mt-5 flex flex-row items-start gap-4 md:gap-5">
//               {/* Vertical years block */}
//               <div className="flex flex-row items-start gap-2 shrink-0">
//                 <div
//                   className="text-transparent font-extrabold leading-none tracking-tight text-[42px] sm:text-[48px] md:text-[54px]"
//                   style={{
//                     WebkitTextStroke: "1.5px #18A51B",
//                     writingMode: "vertical-rl",
//                     transform: "rotate(180deg)",
//                   }}
//                 >
//                   9+ YEARS
//                 </div>

//                 <div
//                   className="text-[#333333] font-extrabold leading-none text-[28px] sm:text-[34px] md:text-[40px]"
//                   style={{
//                     writingMode: "vertical-rl",
//                     transform: "rotate(180deg)",
//                   }}
//                 >
//                   Experience
//                 </div>
//               </div>

//               {/* Points block */}
//               <div className="flex-1 min-w-0 pt-1">
//                 <div className="inline-block bg-[#4D9E1D] px-4 md:px-5 py-2 mb-4">
//                   <span className="text-white font-bold text-[20px] sm:text-[22px] md:text-[24px] leading-none">
//                     What we cover
//                   </span>
//                 </div>

//                 <ul className="space-y-1.5 text-black text-[16px] sm:text-[17px] md:text-[18px] leading-[1.35] font-normal max-w-[620px]">
//                   {coveragePoints.map((point, index) => (
//                     <li key={index} className="flex items-start gap-2">
//                       <span className="mt-[1px] text-[16px] leading-none">
//                         •
//                       </span>
//                       <span>{point}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
