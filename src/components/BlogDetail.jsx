import React from "react";
import { useParams, Link } from "react-router-dom";
import HeroImageSection from "../components/HeroImageSection";
import {
  CalendarDays,
  Clock3,
  ArrowLeft,
  User2,
} from "lucide-react";
import BlogsData from "../data/BlogsData";

const BlogDetail = () => {
  const { slug } = useParams();

  const blog = BlogsData.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <section className="min-h-screen bg-[#f8faf8] flex items-center justify-center px-4">
        <div className="bg-white max-w-[620px] w-full rounded-3xl border border-[#e5e7eb] shadow-sm p-8 text-center">
          <h2 className="text-[30px] font-bold text-[#111827] mb-3">
            Blog Not Found
          </h2>

          <p className="text-[#6b7280] text-[16px] leading-7 mb-7">
            The article you’re looking for may have been moved or no longer
            exists.
          </p>

          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 rounded-full bg-[#117816] px-6 py-3 text-white font-semibold hover:opacity-90 transition"
          >
            <ArrowLeft size={18} />
            Back to Blogs
          </Link>
        </div>
      </section>
    );
  }

  const relatedBlogs = BlogsData.filter(
    (item) => item.slug !== blog.slug
  ).slice(0, 3);

  return (
    <div className="bg-[#f7faf7] min-h-screen">
      {/* HERO IMAGE COMPONENT */}
      <div className="w-full bg-white">
  <HeroImageSection
   
    heroImage={blog.image}
    imageClassName="scale-[2.5] object-cover"
  />
</div>

      {/* HERO CONTENT BELOW IMAGE */}
      <section className="relative border-b border-[#eef2ee] bg-white">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <div className="max-w-[920px] mx-auto text-center">
            <span className="inline-flex rounded-full bg-[#e8f7ea] px-4 py-2 text-[12px] tracking-[0.14em] uppercase font-bold text-[#117816] mb-5">
              {blog.category}
            </span>

            <h1 className="text-[28px] sm:text-[38px] lg:text-[52px] leading-[1.1] font-bold text-[#111827] mb-6">
              {blog.title}
            </h1>

<p
  className="text-[#4b5563] text-[16px] sm:text-[18px] leading-8 mb-8"
  dangerouslySetInnerHTML={{ __html: blog.shortDescription }}
/>
            {/* Meta */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-[#6b7280] text-[14px]">
              <span className="inline-flex items-center gap-2">
                <User2 size={16} />
                {blog.author}
              </span>

              <span className="inline-flex items-center gap-2">
                <CalendarDays size={16} />
                {blog.date}
              </span>

              <span className="inline-flex items-center gap-2">
                <Clock3 size={16} />
                {blog.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[920px] mx-auto">
          <article className="bg-white rounded-[28px] border border-[#edf1ed] shadow-sm p-6 sm:p-10 md:p-14">
            <div className="space-y-12">
              {blog.content?.map((section, index) => (
                <section
                  key={index}
                  className="border-b border-[#f2f4f2] pb-10 last:border-0 last:pb-0"
                >
                  {/* Heading */}
                  {section.heading && (
                    <h2 className="text-[26px] sm:text-[32px] font-bold text-[#111827] leading-tight mb-5">
                      {section.heading}
                    </h2>
                  )}

                  {/* Subheading */}
                  {section.subheading && (
                    <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#117816] mb-5">
                      {section.subheading}
                    </h3>
                  )}

                  {/* Points */}
                  {section.points && section.points.length > 0 && (
                    <ul className="space-y-3 mb-6">
                      {section.points.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-[#374151] text-[16px] sm:text-[17px] leading-8"
                        >
                          <span className="mt-[10px] h-[8px] w-[8px] rounded-full bg-[#117816] shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Description */}
                  {section.description && (
                    <p className="text-[#4b5563] text-[16px] sm:text-[18px] leading-9 whitespace-pre-line" dangerouslySetInnerHTML={{ __html: section.description }}>
                    </p>
                    
                  )}
                </section>
              ))}
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;



// import React from "react";
// import solarservices from "../assets/solarservice.jpeg";
// import BlogCardsRow from "../components/BlogCardsRow";
// import { BlurImage } from "../pages/ServicesPage";
// import blogdetail_image from "../assets/blogdetail_image.svg";
// import BlogDetailContent from "../components/BlogDetailContent";
// import CommentFormSection from "./CommentFormSection";


// const BlogDetail = () => {
//   return (
//     <div className="font-sans bg-white">
//       {/* HERO */}
//       <div className="w-full overflow-hidden">
//         <img
//           src={solarservices}
//           alt="Blog Hero"
//           className="w-full h-[220px] sm:h-[260px] md:h-[320px] lg:h-[380px] object-cover"
//         />
//       </div>

//       {/* HEADING */}
//       {/* HEADING */}
//       <section className="bg-white mt-6 md:mt-10 px-4 sm:px-6 md:px-10 py-10 md:py-14">
//         <div className="max-w-[1100px] mx-auto text-center">
//           <h2 className="text-center text-[#0c7812] font-semibold text-[clamp(18px,2.8vw,32px)] leading-[1.3] mb-6 md:mb-8">
//             Adani Logistics Ltd – Taloja | 150 kW Rooftop Solar Project
//           </h2>

//           <div className="w-full overflow-hidden">
//             <img
//               src={blogdetail_image}
//               alt="Adani Logistics Solar Project"
//               className="w-full h-[180px] sm:h-[260px] md:h-[340px] lg:h-[420px] object-cover"
//             />
//           </div>
//         </div>
//       </section>

//        <BlogDetailContent />
//        <CommentFormSection/>
//     </div>
//   );
// };

// export default BlogDetail;
