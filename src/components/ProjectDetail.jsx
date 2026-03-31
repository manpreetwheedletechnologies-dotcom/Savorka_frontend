import React from "react";
import { useParams, Navigate } from "react-router-dom";
import BlogCardsRow from "../components/BlogCardsRow";
import SolarRevolutionSection from "../components/SolarRevolutionSection";
import projectsData from "../data/projectsData";

const ProjectDetail = () => {
  const { slug } = useParams();

  const project = projectsData.find((item) => item.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <>
      {/* Hero image */}
      <div className="w-full overflow-hidden">
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full h-[220px] sm:h-[260px] md:h-[320px] lg:h-[380px] object-cover"
        />
      </div>

      {/* Heading + paragraph */}
      <section className="bg-white px-5 sm:px-8 lg:px-[100px] py-10 md:py-14">
        <div className="max-w-[1100px] mx-auto text-center">
          {/* <div className="inline-block rounded-full bg-[#1a7a3c]/10 px-4 py-1 mb-4 text-sm font-medium text-[#1a7a3c]">
            {project.date}
          </div> */}

          <h2 className="text-[#1a7a3c] font-semibold text-[26px] sm:text-[34px] md:text-[40px] leading-tight mb-5">
            {project.title}
          </h2>

          <p className="max-w-[950px] mx-auto text-gray-600 text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed">
            {project.fullDescription}
          </p>
        </div>
      </section>

      <div className="bg-[#FFFFFF] pb-16 md:pb-24">
         <SolarRevolutionSection
    titleLine1={project.solarSection.titleLine1}
    titleLine2={project.solarSection.titleLine2}
    coverLabel={project.solarSection.coverLabel}
    coveragePoints={project.solarSection.coveragePoints}
    yearsText={project.solarSection.yearsText}
    experienceText={project.solarSection.experienceText}
    mainImage={project.solarSection.mainImage}
    smallImage={project.solarSection.smallImage}
  />
      </div>

      {/* <section className="bg-[#FFFFFF] px-5 sm:px-8 lg:px-[100px] pb-16 md:pb-20">
        <div className="text-center mb-10">
          <h2 className="text-[#0c7812] font-medium text-[clamp(22px,3.5vw,32px)] leading-tight">
            Latest News & Blogs
          </h2>

          <div className="w-[260px] md:w-[320px] h-[2px] bg-[#dcdcdc] mx-auto mt-3 mb-12"></div>
        </div>

        <div className="mx-auto max-w-[1440px]">
          <BlogCardsRow />
        </div>
      </section> */}
    </>
  );
};

export default ProjectDetail;