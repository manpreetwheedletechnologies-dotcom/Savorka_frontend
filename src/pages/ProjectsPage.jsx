import React, { useState } from "react";
import { AboutHero } from "../pages/AboutPage";
import ContactFormSection from "../components/ContactFormSection";
import { BlurImage } from "../pages/ServicesPage";
import solarimg from "../assets/serviceimg1.png";

function Projects() {
  const initialCount = 6;
  const [visibleCount, setVisibleCount] = useState(initialCount);

  const handleShowMore = () => setVisibleCount(projects.length);
  const handleViewLess = () => setVisibleCount(initialCount);

  return (
    <section className="bg-[#f3f3ed] py-16 px-4 md:px-10">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#2c7a1f] text-center mb-10">
        Project Archives
      </h2>

      {/* Responsive Grid */}
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {projects.slice(0, visibleCount).map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-3 border-4 border-[#69b52c] shadow-md text-center"
          >
            <img
              src={solarimg}
              alt="project"
              className="w-full h-44 md:h-48 object-cover rounded-lg"
            />
            <p className="text-sm md:text-base mt-2 font-medium text-[#2c7a1f] leading-snug">
              {item.title}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        {visibleCount < projects.length ? (
          <button
            onClick={handleShowMore}
            className="bg-[#2c7a1f] text-white px-6 py-2 rounded-md text-sm md:text-base hover:bg-[#1e5f17] transition"
          >
            Show More
          </button>
        ) : (
          <button
            onClick={handleViewLess}
            className="bg-[#2c7a1f] text-white px-6 py-2 rounded-md text-sm md:text-base hover:bg-[#1e5f17] transition"
          >
            View Less
          </button>
        )}
      </div>
    </section>
  );
}

const projects = [
  { title: "PM KUSUM-C Project – Jasingpura | 5.2 MW Ground Mounted Solar Project" },
  { title: "Adani Logistics Ltd – Talaja | 150 kW Rooftop Solar Project" },
  { title: "Adani Logistics Ltd – Tauru | 500 kW Rooftop Solar Project" },
  { title: "Adani Logistics Ltd – Palwal | 250 kW Rooftop Solar Project" },
  { title: "Mukul Overseas Pvt Ltd – Mainpuri | 800 kW Rooftop Solar Project" },
  { title: "Paras Glass Ware Pvt Ltd – Firozabad | 450 kW Rooftop Solar Project" },
  { title: "Firozabad Glass Shell Industries – Firozabad | 500 kW Rooftop Solar Project" },
  { title: "Okay Glass Industries – Firozabad | 600 kW Rooftop Solar Project" },
  { title: "Durgesh Block & China Glass Works Ltd – Firozabad | 1500 kW Rooftop Solar Project" },
  { title: "General Traders – Firozabad | 660 kW Rooftop Solar Project" },
  { title: "Farukhi Glass Industries – Firozabad | 1500 kW Rooftop Solar Project" },
  { title: "RGI Rise Glass Industries – Firozabad | 1500 kW Rooftop Solar Project" },
];

const ProjectsPage = () => (
  <main>
    <AboutHero />
    <Projects />
    <BlurImage />
    <section className="px-16 py-12">
      <ContactFormSection />
    </section>
  </main>
);

export default ProjectsPage;