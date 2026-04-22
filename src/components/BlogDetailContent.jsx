// import React from "react";

// const categories = [
//   "On-Grid Solar Solutions",
//   "Off-Grid & Hybrid Solar Solutions",
//   "Solar Operation & Maintenance (O&M)",
//   "Solar Structure Manufacturing",
// ];

// const services = [
//   "On-Grid Solar Solutions",
//   "Off-Grid & Hybrid Solar Solutions",
//   "Solar Operation & Maintenance (O&M)",
//   "Solar Structure Manufacturing",
// ];

// const latestBlogs = [
//   "PM KUSUM-C Project – Jasingpura...",
//   "Adani Logistics Ltd – Taloja | 150 kW...",
//   "Mukul Overseas Pvt Ltd – Mainpuri | 800 kW...",
//   "Paras Glass Ware Pvt Ltd – Firozabad | 450 kW...",
// ];

// const ListBlock = ({ title, items }) => {
//   return (
//     <div>
//       <h3 className="font-[Manrope] font-bold text-[22px] sm:text-[24px] leading-[1.2] text-[#0c7812] mb-5">
//         {title}
//       </h3>

//       <ul className="space-y-2 sm:space-y-3">
//         {items.map((item, index) => (
//           <li key={index}>
//             <button
//               type="button"
//               className="group flex w-full items-start gap-3 rounded-[10px] px-2 py-2 text-left transition-all duration-300 hover:bg-[#edf6e8]"
//             >
//               <span className="mt-[2px] text-[#0c7812] text-[18px] leading-none transition-transform duration-300 group-hover:translate-x-[2px]">
//                 ›
//               </span>

//               <span className="font-[Manrope] text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.5] text-[#0c7812] font-semibold transition-all duration-300 group-hover:text-[#095d0f] group-hover:translate-x-[3px]">
//                 {item}
//               </span>
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const BlogDetailContent = () => {
//   return (
//     <section className="w-full bg-white px-4 sm:px-6 md:px-8 lg:px-[60px] xl:px-[90px] py-10 md:py-14">
//       <div className="max-w-[1380px] mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.75fr] gap-10 lg:gap-14 xl:gap-20">
//           {/* LEFT CONTENT */}
//           <div className="pr-0 lg:pr-10 xl:pr-14 lg:border-r lg:border-[#d8d8d2]">
//             <div className="mb-10 md:mb-14">
//               <h2 className="font-[Manrope] font-extrabold text-[26px] sm:text-[30px] md:text-[32px] leading-[1.2] text-[#0c7812] mb-4">
//                 Description:
//               </h2>

//               <div className="font-[Manrope] text-[16px] sm:text-[17px] md:text-[18px] leading-[1.6] text-[#2f2f2f] font-medium space-y-0">
//                 <p>
//                   Adani Logistics Ltd’s facility in Taloja, Maharashtra is
//                   implementing clean energy solutions with the installation of a
//                   150 kW rooftop solar power plant. This on-grid solar system
//                   ensures reliable electricity, reduces operational costs, and
//                   minimizes the facility’s carbon footprint.
//                 </p>

//                 <p>
//                   The solar panels are mounted on a tin shade rooftop structure,
//                   engineered for optimal sunlight exposure, durability, and
//                   long-term performance. Our team provided a complete turnkey
//                   solution, including design, engineering, supply,
//                   installation, and commissioning, resulting in a fully
//                   operational and efficient solar energy system.
//                 </p>

//                 <p>
//                   This project highlights Adani Logistics Ltd’s commitment to
//                   sustainability and green energy adoption in logistics
//                   operations.
//                 </p>
//               </div>
//             </div>

//             <div>
//               <h2 className="font-[Manrope] font-extrabold text-[26px] sm:text-[30px] md:text-[32px] leading-[1.2] text-[#0c7812] mb-4">
//                 Specification:
//               </h2>

//               <ul className="pl-5 list-disc font-[Manrope] text-[16px] sm:text-[17px] md:text-[18px] leading-[1.6] text-[#2f2f2f] font-medium space-y-0">
//                 <li>Client Name: Adani Logistics Ltd</li>
//                 <li>Project Location: Taloja, Maharashtra</li>
//                 <li>Project Capacity: 150 kW</li>
//                 <li>Installation Type: Rooftop Solar Power Plant</li>
//                 <li>Mounting Structure: Tin Shade Rooftop Structure</li>
//                 <li>System Type: On-Grid Solar System</li>
//                 <li>Project Status: Ongoing</li>
//                 <li>
//                   Execution Scope: Design, Engineering, Supply, Installation &
//                   Commissioning
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* RIGHT SIDEBAR */}
//           <div className="pt-0 lg:pt-8 lg:pl-2 xl:pl-4">
//             <div className="space-y-10 md:space-y-14">
//               <ListBlock title="Categories" items={categories} />
//               <ListBlock title="Our Services" items={services} />
//               <ListBlock title="Our Latest Blogs" items={latestBlogs} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlogDetailContent;