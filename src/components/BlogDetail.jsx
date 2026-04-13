import React from "react";
import solarservices from "../assets/solarservice.jpeg";
import BlogCardsRow from "../components/BlogCardsRow";
import { BlurImage } from "../pages/ServicesPage";
import blogdetail_image from "../assets/blogdetail_image.svg";
import BlogDetailContent from "../components/BlogDetailContent";
import CommentFormSection from "./CommentFormSection";


const BlogDetail = () => {
  return (
    <div className="font-sans bg-white">
      {/* HERO */}
      <div className="w-full overflow-hidden">
        <img
          src={solarservices}
          alt="Blog Hero"
          className="w-full h-[220px] sm:h-[260px] md:h-[320px] lg:h-[380px] object-cover"
        />
      </div>

      {/* HEADING */}
      {/* HEADING */}
      <section className="bg-white mt-6 md:mt-10 px-4 sm:px-6 md:px-10 py-10 md:py-14">
        <div className="max-w-[1100px] mx-auto text-center">
          <h2 className="text-center text-[#0c7812] font-semibold text-[clamp(18px,2.8vw,32px)] leading-[1.3] mb-6 md:mb-8">
            Adani Logistics Ltd – Taloja | 150 kW Rooftop Solar Project
          </h2>

          <div className="w-full overflow-hidden">
            <img
              src={blogdetail_image}
              alt="Adani Logistics Solar Project"
              className="w-full h-[180px] sm:h-[260px] md:h-[340px] lg:h-[420px] object-cover"
            />
          </div>
        </div>
      </section>

       <BlogDetailContent />
       <CommentFormSection/>
    </div>
  );
};

export default BlogDetail;
