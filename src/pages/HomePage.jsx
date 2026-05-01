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
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Savorka Solar",
    "url": "https://www.savorka.in/",
    "logo": "https://www.savorka.in/path-to-logo.png",
    "description":
      "Savorka Solar is a renewable energy company providing rooftop, on-grid, off-grid, and hybrid solar solutions for residential, commercial, and industrial sectors in India.",
    "foundingDate": "2016",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Teachers Colony",
      "addressLocality": "Bulandshahr",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "203001",
      "addressCountry": "IN",
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-7017774339",
      "contactType": "customer support",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"],
    },
    "sameAs": [
      "https://www.instagram.com/its_savorkasolar",
      "https://www.facebook.com/profile.php?id=61586037744597",
      "https://www.linkedin.com/company/savorka-solar/",
    ],
  };

  return (
    <>
      <Helmet>
        <title>
          Savorka Solar | Solar EPC Company in India | 150+ MWp Installed
        </title>
        <meta
          name="description"
          content="Savorka Solar delivers On-Grid, Off-Grid & Hybrid solar systems across 8 states. 150+ MWp installed. Residential, commercial & industrial solar solutions."
        />
        <link rel="canonical" href="https://www.savorka.in/" />

        {/* FIXED JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
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