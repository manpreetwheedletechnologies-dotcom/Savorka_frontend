import React from "react";
import HeroImageSection from "../components/HeroImageSection";
import Projects from "../components/Projects";
import { BlurImage } from "../pages/ServicesPage";
import bg_all from "../assets/main_h.png";
import { Helmet } from "react-helmet-async";
const ProjectsPage = () => (
  <>
    <Helmet>
      <title>Solar Projects by Savorka | Case Studies & Installations</title>
      <meta name="description" content="Discover Savorka’s successful solar projects, rooftop installations & case studies showcasing efficient and sustainable energy solutions." />
    </Helmet>

    <main>
      <HeroImageSection title="OUR PROJECTS" heroImage={bg_all} />
      <Projects />
      <BlurImage />
    </main>
  </>
);

export default ProjectsPage;