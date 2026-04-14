import React from "react";
import HeroImageSection from "../components/HeroImageSection";
import Projects from "../components/Projects";
import { BlurImage } from "../pages/ServicesPage";
import bg_all from "../assets/main_h.png";

const ProjectsPage = () => (
  <main>
    <HeroImageSection title="OUR PROJECTS" heroImage={bg_all}/>
    <Projects />
    <BlurImage />
  </main>
);

export default ProjectsPage;