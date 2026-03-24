import React from "react";
import HeroImageSection from "../components/HeroImageSection";
import Projects from "../components/Projects";
import { BlurImage } from "../pages/ServicesPage";
import bg_all from "../assets/hero_svg.jpg";

const ProjectsPage = () => (
  <main>
    <HeroImageSection title="Project Archives" heroImage={bg_all}/>
    <Projects />
    <BlurImage />
  </main>
);

export default ProjectsPage;