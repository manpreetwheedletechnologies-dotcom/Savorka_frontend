import React from "react";
import solarservices from "../assets/solarservice.png";
import BlogCardsRow from "../components/BlogCardsRow";
import ContactFormSection from "../components/ContactFormSection";
import HeroImageSection from "../components/HeroImageSection";


const GoSolar = () => {


    const blogRowOne = [
  {
    id: 1,
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
  return (
    <div className="font-sans bg-white">
      {/* HERO */}
       <HeroImageSection 
        title="Go Solar"
        heroImage={solarservices}   // 👈 pass here
      />
      {/* <div className="w-full overflow-hidden">
        <img
          src={solarservices}
          alt="Blog Hero"
          className="w-full h-[220px] sm:h-[260px] md:h-[320px] lg:h-[380px] object-cover"
        />
      </div> */}


        <section className="px-16 py-12">
      <ContactFormSection />
    </section>

      {/* ABOUT / COMMENT SECTION */}
    <section className="text-center px-5 sm:px-6 md:px-10 py-10 md:py-14 bg-white">
  
  {/* Heading */}
  <h2 className="text-[#0c7812] font-medium text-[clamp(22px,3.5vw,32px)] leading-tight">
    Latest News & Blogs
  </h2>

  {/* Wider Divider */}
  <div className="w-[320px] md:w-[400px] h-[2px] bg-[#dcdcdc] mx-auto mt-3 mb-12"></div>

  {/* Cards */}
  <div className="mx-auto max-w-[1440px] space-y-10 md:space-y-12 mt-6">
    <BlogCardsRow blogs={blogRowOne} />
  </div>

</section>

     
    </div>
  );
};

export default GoSolar;