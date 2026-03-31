import React, { useState } from "react";
import { Link } from "react-router-dom";
import projectsData from "../data/projectsData";

export default function Projects() {
  const initialCount = 6;
  const [visibleCount, setVisibleCount] = useState(initialCount);

  const handleShowMore = () => setVisibleCount(projectsData.length);
  const handleViewLess = () => setVisibleCount(initialCount);

  const getBorderShade = (index) => {
    const shades = ["bg-[#8DCD46]", "bg-[#63B81F]", "bg-[#3E980A]"];
    return shades[index % 3];
  };

  return (
    <section className="bg-[#FFFFFF] py-14 sm:py-16 px-4 sm:px-6 md:px-10 lg:px-12">
      <h2 className="mb-10 text-center text-3xl font-semibold text-[#2c7a1f] sm:text-4xl">
        Our Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-y-10 gap-x-6 md:gap-x-8 place-items-center">
        {projectsData.slice(0, visibleCount).map((item, index) => (
          <div
            key={item.slug}
            className="group relative w-full max-w-[300px] sm:max-w-[320px] md:max-w-[340px]"
          >
            <div
              className={`absolute left-[-10px] right-[-10px] top-[12px] bottom-[-12px] rounded-[24px] ${getBorderShade(
                index
              )} transition-all duration-300 ease-out group-hover:bottom-[-15px]`}
            />

            <div className="relative z-10 overflow-hidden rounded-[22px] bg-white p-4 shadow-[0_10px_25px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:shadow-[0_18px_38px_rgba(44,122,31,0.15)]">
              <div className="pointer-events-none absolute left-0 right-0 top-0 z-20 translate-y-[-100%] bg-[#2c7a1f] px-4 py-2 text-center text-xs font-semibold tracking-wide text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:text-sm">
                {item.date}
              </div>

              <img
                src={item.cardImage}
                alt={item.title}
                className="h-[180px] w-full rounded-[18px] object-cover sm:h-[190px] md:h-[200px]"
              />

              <div className="flex min-h-[130px] flex-1 items-center justify-center px-2 pt-5 pb-2 sm:min-h-[145px]">
                <Link
                  to={`/projects/${item.slug}`}
                  className="text-center text-[17px] font-semibold leading-[1.25] text-[#18721f] transition duration-300 hover:text-[#125816] focus:outline-none"
                >
                  {item.title}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        {visibleCount < projectsData.length ? (
          <button
            onClick={handleShowMore}
            className="rounded-md bg-[#2c7a1f] px-6 py-2.5 text-sm text-white transition duration-300 hover:bg-[#1e5f17] md:text-base"
          >
            Show More
          </button>
        ) : (
          <button
            onClick={handleViewLess}
            className="rounded-md bg-[#2c7a1f] px-6 py-2.5 text-sm text-white transition duration-300 hover:bg-[#1e5f17] md:text-base"
          >
            View Less
          </button>
        )}
      </div>
    </section>
  );
}





// import React, { useState } from "react";
// import solarimg from "../assets/serviceimg1.png";

// const projects = [
//   { title: "PM KUSUM-C Project – Jasingpura | 5.2 MW Ground Mounted Solar Project" },
//   { title: "Adani Logistics Ltd – Talaja | 150 kW Rooftop Solar Project" },
//   { title: "Adani Logistics Ltd – Tauru | 500 kW Rooftop Solar Project" },
//   { title: "Adani Logistics Ltd – Palwal | 250 kW Rooftop Solar Project" },
//   { title: "Mukul Overseas Pvt Ltd – Mainpuri | 800 kW Rooftop Solar Project" },
//   { title: "Paras Glass Ware Pvt Ltd – Firozabad | 450 kW Rooftop Solar Project" },
//   { title: "Firozabad Glass Shell Industries – Firozabad | 500 kW Rooftop Solar Project" },
//   { title: "Okay Glass Industries – Firozabad | 600 kW Rooftop Solar Project" },
//   { title: "Durgesh Block & China Glass Works Ltd – Firozabad | 1500 kW Rooftop Solar Project" },
//   { title: "General Traders – Firozabad | 660 kW Rooftop Solar Project" },
//   { title: "Farukhi Glass Industries – Firozabad | 1500 kW Rooftop Solar Project" },
//   { title: "RGI Rise Glass Industries – Firozabad | 1500 kW Rooftop Solar Project" },
// ];

// export default function Projects() {
//   const initialCount = 6;
//   const [visibleCount, setVisibleCount] = useState(initialCount);

//   const handleShowMore = () => setVisibleCount(projects.length);
//   const handleViewLess = () => setVisibleCount(initialCount);

//   const getBorderShade = (index) => {
//     const shades = ["bg-[#8DCD46]", "bg-[#63B81F]", "bg-[#3E980A]"];
//     return shades[index % 3];
//   };

//   return (
//     <section className="bg-[#FFFFFF] py-16 px-4 sm:px-6 md:px-10">
//       <h2 className="text-3xl md:text-4xl font-semibold text-[#2c7a1f] text-center mb-10">
//         Project Archives
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-2 md:gap-x-3 place-items-center">
//         {projects.slice(0, visibleCount).map((item, index) => (
//           <div
//             key={index}
//             className="group relative w-full max-w-[240px] sm:max-w-[255px] md:max-w-[265px]"
//           >
//             {/* Green border layer: left + right + bottom visible */}
//             <div
//               className={`absolute left-[-8px] right-[-8px] top-[12px] bottom-[-10px] rounded-[22px] ${getBorderShade(
//                 index
//               )} transition-all duration-300 ease-out group-hover:bottom-[-12px] group-hover:left-[-9px] group-hover:right-[-9px]`}
//             ></div>

//             {/* Main white card */}
//             <div className="relative z-10 flex min-h-[280px] flex-col rounded-[20px] bg-white p-3 shadow-[0_8px_20px_rgba(0,0,0,0.05)] transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:shadow-[0_18px_36px_rgba(44,122,31,0.12)]">
//               <img
//                 src={solarimg}
//                 alt="project"
//                 className="w-full h-[160px] sm:h-[162px] md:h-[165px] object-cover rounded-[16px]"
//               />

//               <div className="flex flex-1 items-center justify-center px-2 pt-4 pb-1">
//                 <p className="text-center text-[15px] sm:text-[16px] font-semibold leading-[1.2] text-[#18721f] transition-colors duration-300 group-hover:text-[#125816]">
//                   {item.title}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="text-center mt-10">
//         {visibleCount < projects.length ? (
//           <button
//             onClick={handleShowMore}
//             className="rounded-md bg-[#2c7a1f] px-6 py-2 text-sm text-white transition duration-300 hover:bg-[#1e5f17] md:text-base"
//           >
//             Show More
//           </button>
//         ) : (
//           <button
//             onClick={handleViewLess}
//             className="rounded-md bg-[#2c7a1f] px-6 py-2 text-sm text-white transition duration-300 hover:bg-[#1e5f17] md:text-base"
//           >
//             View Less
//           </button>
//         )}
//       </div>
//     </section>
//   );
// }