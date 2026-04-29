import React from "react";
import HeroSection from "../components/HeroSection";
import GoGreenSection from "../components/GoGreenSection";
import WhySolarSection from "../components/WhySolarSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactFormSection from "../components/ContactFormSection";
import PopupForm from "../components/PopupForm";
import { Helmet } from "react-helmet-async";
const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Savorka Solar | Solar EPC Company in India | 150+ MWp Installed</title>
        <meta name="description" content="Savorka Solar delivers On-Grid, Off-Grid & Hybrid solar systems across 8 states. 150+ MWp installed. Residential, commercial & industrial solar solutions." />
        <link rel="canonical" href="https://www.savorka.in/" />      
      </Helmet>

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
    </>
  );
};

export default HomePage;
