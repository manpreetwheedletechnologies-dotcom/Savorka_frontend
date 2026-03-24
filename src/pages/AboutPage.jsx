import React from "react";
// import ContactFormSection from "../components/ContactFormSection";
import HeroImageSection from "../components/HeroImageSection";
import SolarSection from "../components/SolarSection";
// import heroimg from "../assets/abouthero.png";
import blurimg from "../assets/solarservice.png";
import OurPurposeSection from "../components/OurPurposeSection";
import bg_all from "../assets/hero_svg.jpg";

const AboutHero = () => (
  <div className="w-full bg-white">
    <HeroImageSection title="ABOUT US" heroImage={bg_all}/>
    {/* <img
      src={heroimg}
      alt="About hero"
      className="w-full h-[250px] sm:h-[350px] md:h-[450px] object-cover rounded-b-3xl"
    /> */}
  </div>
);

const AboutIntro = () => (
  <section className="text-center pt-4 pb-8 px-4 md:pt-8 md:pb-8">
    {/* <div className="w-[80%] max-w-lg h-px bg-gray-300 mx-auto my-4">
      
    </div> */}
    <h3 className="text-green-800 font-medium text-2xl md:text-3xl">
      Powering a Greener Tomorrow with Clean Solar Energy.
    </h3>
    <p className="max-w-3xl mx-auto mt-4 text-gray-800 text-base md:text-lg leading-relaxed">
      At Savorka Solar, we deliver a seamless transition to clean energy
      through expertly engineered, high-performance solar solutions. Our
      approach goes beyond installation, combining advanced technology,
      precision execution, and uncompromising quality standards. Every system
      is designed for long-term reliability, superior efficiency, and an
      exceptional customer experience.
    </p>
  </section>
);

const ImageWithBlur = ({ src, alt }) => (
  <div className="relative w-full" style={{ minHeight: 0 }}>
    <img src={src} alt={alt} className="w-full h-auto object-cover rounded-lg" />
    <div className="absolute inset-0 bg-white/20 backdrop-blur-m rounded-lg"></div>
  </div>
);

const AboutPage = () => (
  <main>
    <AboutHero />
    <AboutIntro />
    <SolarSection />
    <OurPurposeSection />
    <ImageWithBlur src={blurimg} alt="Solar panels on rooftop" />
    {/* <section className="px-16 py-12">
      <ContactFormSection />
    </section> */}
  </main>
);

export default AboutPage;