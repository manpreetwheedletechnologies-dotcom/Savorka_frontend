// import React from "react";
// import { useNavigate } from "react-router-dom";

// const defaultBlogs = [
//   {
//     id: 1,
//     path: "/blog-detail",
//     category: "Service",
//     title: "On-Grid Solar Power Solutions",
//     description:
//       "Cost-effective on-grid solar systems designed to reduce electricity bills and maximize returns through seamless grid connectivity.",
//     image:
//       "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop",
//     author: "Admin",
//     date: "20 Jan 2022",
//     authorImage: "https://randomuser.me/api/portraits/women/44.jpg",
//   },
//   {
//     id: 2,
//     path: "/blog-detail",
//     category: "Service",
//     title: "Off-Grid Solar Power Solutions",
//     description:
//       "Reliable solar power solutions with battery backup for locations with limited or unstable grid availability.",
//     image:
//       "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=1200&auto=format&fit=crop",
//     author: "Admin",
//     date: "19 Jan 2022",
//     authorImage: "https://randomuser.me/api/portraits/men/32.jpg",
//   },
//   {
//     id: 3,
//     path: "/blog-detail",
//     category: "Service",
//     title: "Solar Operation & Maintenance (O&M)",
//     description:
//       "Professional O&M services to ensure consistent performance, maximum energy generation, and extended system life.",
//     image:
//       "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1200&auto=format&fit=crop",
//     author: "Admin",
//     date: "18 Jan 2022",
//     authorImage: "https://randomuser.me/api/portraits/women/65.jpg",
//   },
// ];

// const ArrowIcon = () => (
//   <svg
//     className="h-[16px] w-[16px] shrink-0 text-[#1f2937] transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M7 17L17 7" />
//     <path d="M8 7h9v9" />
//   </svg>
// );

// const BlogCard = ({ blog }) => {
//   const navigate = useNavigate();

//   return (
//     <article
//  onClick={() => navigate(blog.path)}
//  className="group w-full max-w-[350px] cursor-pointer overflow-hidden rounded-[2px] border-[12px] border-white bg-white shadow-[0_10px_24px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_18px_38px_rgba(0,0,0,0.14)]">
//       <img
//         src={blog.image}
//         alt={blog.title}
//         className="h-[150px] sm:h-[160px] md:h-[170px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
//       />

//       <div className="bg-white px-4 pt-4 pb-3">
//         <p className="mb-2 text-[12px] font-semibold text-[#4e9b1f]">
//           {blog.category}
//         </p>

//         <div className="mb-2 flex items-start justify-between gap-2">
//           <h3 className="text-[20px] leading-[1.2] font-semibold text-[#1f2937] group-hover:text-[#0c7812]">
//             {blog.title}
//           </h3>
//           <ArrowIcon />
//         </div>

//         <p className="mb-4 line-clamp-2 text-[14px] leading-[1.6] text-[#7c8798]">
//           {blog.description}
//         </p>

//         <div className="flex items-center gap-2">
//           <img
//             src={blog.authorImage}
//             alt={blog.author}
//             className="h-[32px] w-[32px] rounded-full object-cover"
//           />

//           <div>
//             <p className="text-[12px] font-semibold text-[#1f2937]">
//               {blog.author}
//             </p>
//             <p className="mt-1 text-[11px] text-[#98a2b3]">{blog.date}</p>
//           </div>
//         </div>
//       </div>
//     </article>
//   );
// };

// export default function BlogCardsRow({ blogs = defaultBlogs }) {
//   return (
//     <section className="w-full">
//       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//         {blogs.map((blog) => (
//           <BlogCard key={blog.id} blog={blog} />
//         ))}
//       </div>
//     </section>
//   );
// }
