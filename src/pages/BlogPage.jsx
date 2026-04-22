import React from "react";
import solarservices from "../assets/solarservice.jpeg";
// import BlogCardsRow from "../components/BlogCardsRow";
import { BlurImage } from "../pages/ServicesPage";
import HeroImageSection from "../components/HeroImageSection";
import { Helmet } from "react-helmet-async";

// const blogRowOne = [
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

// const blogRowTwo = [
//   {
//     id: 4,
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
//     id: 5,
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
//     id: 6,
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

const BlogPage = () => {
  return (
    <>
        <Helmet>
          <title>Solar Energy Blog | Tips, Trends & Guides | Savorka</title>
          <meta name="description" content="Read Savorka’s solar blog for expert tips, industry trends, and guides on solar panels, renewable energy & cost-saving solutions." />
        </Helmet>
    
    <div className="font-sans bg-white">
      {/* HERO */}
       <HeroImageSection 
        title="OUR BLOGS"
        heroImage={solarservices}   // 👈 pass here
      />
      {/* <div className="w-full overflow-hidden">
        <img
          src={solarservices}
          alt="Blog Hero"
          className="w-full h-[220px] sm:h-[260px] md:h-[320px] lg:h-[380px] object-cover"
        />
      </div> */}

      {/* HEADING */}
      <section className="bg-white px-5 sm:px-6 md:px-10 py-10 md:py-14 text-center">
        {/* <h2 className="text-[#0c7812] font-medium text-[clamp(26px,5vw,42px)] leading-tight mb-3">
          Blog
        </h2> */}

        <div className="w-[50%] max-w-[300px] h-[2px] bg-[#d6d6d6] mx-auto mb-5"></div>

        <h3 className="text-[#117816] font-medium text-[clamp(20px,4vw,34px)] leading-tight mb-4 max-w-[1000px] mx-auto">
          Building Sustainable Energy Solutions for Every Sector
        </h3>

        <p className="max-w-[800px] mx-auto text-[#252424] text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed">
          Founded in 2016 and headquartered in Noida, Savorka is committed to
          delivering sustainable solar energy solutions to businesses and homes
          across India.
        </p>
      </section>

      {/* BLOG CARD ROWS */}
      {/* <section className="bg-white px-5 sm:px-8 lg:px-[100px] pb-16 md:pb-20">
  <div className="mx-auto max-w-[1440px] space-y-10 md:space-y-12">
    <BlogCardsRow blogs={blogRowOne} />
    <BlogCardsRow blogs={blogRowTwo} />
  </div>
</section> */}


      {/* BLOG COMING SOON */}
      <section className="bg-white px-5 sm:px-8 lg:px-[100px] pb-16 md:pb-20">
        <div className="mx-auto max-w-[900px]">
          <div className="relative overflow-hidden rounded-[28px] border border-[#d8ead8] bg-gradient-to-br from-[#f8fff8] via-white to-[#f2fbf2] px-6 py-10 sm:px-10 sm:py-14 md:px-14 md:py-16 shadow-[0_20px_60px_rgba(17,120,22,0.08)]">
            
            {/* animated glow */}
            <div className="pointer-events-none absolute -top-16 -left-16 h-40 w-40 rounded-full bg-[#9be15d]/20 blur-3xl animate-pulse"></div>
            <div className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-[#00c16a]/15 blur-3xl animate-pulse"></div>

            {/* top badge */}
            <div className="mb-6 flex justify-center">
              <span className="inline-flex items-center rounded-full border border-[#b7dfb9] bg-[#eff9ef] px-4 py-2 text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.18em] text-[#117816]">
                New updates on the way
              </span>
            </div>

            {/* animated icon */}
            <div className="mb-6 flex justify-center">
              <div className="relative flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#117816] to-[#27a33b] shadow-[0_12px_30px_rgba(17,120,22,0.25)]">
                <div className="absolute inset-0 rounded-full animate-ping bg-[#117816]/20"></div>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="relative z-10 h-9 w-9 sm:h-10 sm:w-10 text-white"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 21H8a2 2 0 0 1-2-2V7m13 14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-5m5 14h-5m-6 0H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2ZM9 13h6m-6 4h6"
                  />
                </svg>
              </div>
            </div>

            {/* content */}
            <div className="text-center">
              <h3 className="text-[#0c7812] font-semibold text-[clamp(24px,4vw,40px)] leading-tight">
                Blogs Coming Soon
              </h3>

              <p className="mx-auto mt-4 max-w-[680px] text-[#4b5563] text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed">
                We’re preparing insightful blogs on solar technology, sustainable
                energy solutions, project execution, and industry updates.
                Fresh content will be published soon.
              </p>

              {/* loading dots */}
              <div className="mt-8 flex items-center justify-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#117816] animate-bounce [animation-delay:-0.3s]"></span>
                <span className="h-3 w-3 rounded-full bg-[#117816] animate-bounce [animation-delay:-0.15s]"></span>
                <span className="h-3 w-3 rounded-full bg-[#117816] animate-bounce"></span>
              </div>

              <p className="mt-4 text-[#117816] text-[13px] sm:text-[14px] font-medium tracking-wide">
                Stay tuned for expert insights
              </p>
            </div>
          </div>
        </div>
      </section>

<BlurImage />
    </div>
    </>
  );
};

export default BlogPage;