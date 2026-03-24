import React from "react";
import HeroSection from "../components/HeroSection";
import GoGreenSection from "../components/GoGreenSection";
import WhySolarSection from "../components/WhySolarSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactFormSection from "../components/ContactFormSection";
import PopupForm from "../components/PopupForm";

const HomePage = () => {
  return (
    <main>
      <PopupForm />

      <HeroSection />
      <GoGreenSection />
      <WhySolarSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
    <section className="px-16 py-12">
      {/* <ContactFormSection /> */}
    </section>
  </main>
  );
};

export default HomePage;
