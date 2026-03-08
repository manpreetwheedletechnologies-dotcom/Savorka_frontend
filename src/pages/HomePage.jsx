import React from "react";
import HeroSection from "../components/HeroSection";
import GoGreenSection from "../components/GoGreenSection";
import WhySolarSection from "../components/WhySolarSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactFormSection from "../components/ContactFormSection";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <GoGreenSection />
      <WhySolarSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactFormSection />
    </main>
  );
};

export default HomePage;
