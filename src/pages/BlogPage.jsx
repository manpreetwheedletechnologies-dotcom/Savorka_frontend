import React from "react";
import solarservices from "../assets/solarservice.png";
import BlogCardsRow from "../components/BlogCardsRow";
import { BlurImage } from "../pages/ServicesPage";
import HeroImageSection from "../components/HeroImageSection";


const blogRowOne = [
  {
    id: 1,
    path: "/blog-detail",
    category: "Service",
    title: "On-Grid Solar Power Solutions",
    description:
      "Cost-effective on-grid solar systems designed to reduce electricity bills and maximize returns through seamless grid connectivity.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop",
    author: "Admin",
    date: "20 Jan 2022",
    authorImage: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    path: "/blog-detail",
    category: "Service",
    title: "Off-Grid Solar Power Solutions",
    description:
      "Reliable solar power solutions with battery backup for locations with limited or unstable grid availability.",
    image:
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=1200&auto=format&fit=crop",
    author: "Admin",
    date: "19 Jan 2022",
    authorImage: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    path: "/blog-detail",
    category: "Service",
    title: "Solar Operation & Maintenance (O&M)",
    description:
      "Professional O&M services to ensure consistent performance, maximum energy generation, and extended system life.",
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1200&auto=format&fit=crop",
    author: "Admin",
    date: "18 Jan 2022",
    authorImage: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const blogRowTwo = [
  {
    id: 4,
    path: "/blog-detail",
    category: "Service",
    title: "On-Grid Solar Power Solutions",
    description:
      "Cost-effective on-grid solar systems designed to reduce electricity bills and maximize returns through seamless grid connectivity.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop",
    author: "Admin",
    date: "20 Jan 2022",
    authorImage: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 5,
    path: "/blog-detail",
    category: "Service",
    title: "Off-Grid Solar Power Solutions",
    description:
      "Reliable solar power solutions with battery backup for locations with limited or unstable grid availability.",
    image:
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=1200&auto=format&fit=crop",
    author: "Admin",
    date: "19 Jan 2022",
    authorImage: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 6,
    path: "/blog-detail",
    category: "Service",
    title: "Solar Operation & Maintenance (O&M)",
    description:
      "Professional O&M services to ensure consistent performance, maximum energy generation, and extended system life.",
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1200&auto=format&fit=crop",
    author: "Admin",
    date: "18 Jan 2022",
    authorImage: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const BlogPage = () => {
  return (
    <div className="font-sans bg-white">
      {/* HERO */}
       <HeroImageSection 
        title="Our Blogs"
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
        <h2 className="text-[#0c7812] font-medium text-[clamp(26px,5vw,42px)] leading-tight mb-3">
          Blog
        </h2>

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
      <section className="bg-white px-5 sm:px-8 lg:px-[100px] pb-16 md:pb-20">
  <div className="mx-auto max-w-[1440px] space-y-10 md:space-y-12">
    <BlogCardsRow blogs={blogRowOne} />
    <BlogCardsRow blogs={blogRowTwo} />
  </div>
</section>

<BlurImage />
    </div>
  );
};

export default BlogPage;