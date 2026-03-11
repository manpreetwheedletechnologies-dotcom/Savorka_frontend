import React from "react";
import ContactFormSection from "../components/ContactFormSection";

import heroimg from "../assets/abouthero.png";
import blurimg from "../assets/solarservice.png";

import bigImage from "../assets/aboutimg1.png";
import smallImage1 from "../assets/aboutimg2.png";
import smallImage2 from "../assets/aboutimg3.png";

import iconEye from "../assets/icon1.png";
import iconTarget from "../assets/icon2.png";
import iconHandStar from "../assets/icon3.png";

const PurposeCard = ({ icon, text, bgColor }) => (
  <div className={`w-full max-w-xs p-6 rounded-2xl text-white flex flex-col items-center shadow-lg`} style={{ backgroundColor: bgColor }}>
    <img src={icon} alt="" className="w-12 h-12 mb-4" />
    <p className="text-sm leading-relaxed text-center">{text}</p>
  </div>
);

export const AboutHero = () => (
  <div className="flex justify-center" style={{ backgroundColor: "#f3f3ed" }}>
    <img src={heroimg} alt="About hero" className="w-[95%] max-h-[500px] min-h-[250px] object-contain rounded-b-3xl" />
  </div>
);

const AboutIntro = () => (
  <section className="text-center pt-4 pb-8 px-4 md:pt-8 md:pb-8" style={{ backgroundColor: "#f3f3ed" }}>
    <h2 className="text-green-700 font-medium text-4xl md:text-5xl">About Us</h2>
    <div className="w-[80%] max-w-lg h-px bg-gray-300 mx-auto my-4"></div>
    <h3 className="text-green-800 font-medium text-2xl md:text-3xl">
      Powering a Greener Tomorrow with Clean Solar Energy.
    </h3>
    <p className="max-w-3xl mx-auto mt-4 text-gray-800 text-base md:text-lg leading-relaxed">
      At Savorka Solar, we deliver a seamless transition to clean energy through expertly engineered, high-performance solar solutions. Our approach goes beyond installation, combining advanced technology, precision execution, and uncompromising quality standards. Every system is designed for long-term reliability, superior efficiency, and an exceptional customer experience.
    </p>
  </section>
);

const SolarSection = () => (
  <section className="py-8 px-4 md:px-28" style={{ backgroundColor: "#f3f3ed" }}>
    <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-6 items-center mb-10">
      <img src={bigImage} alt="Family with solar panels" className="w-full max-w-[430px] aspect-square object-cover rounded-l-[50px]" />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <img src={smallImage1} alt="Solar rooftop" className="w-full md:w-1/2 rounded-2xl aspect-[4/3] object-cover" />
          <img src={smallImage2} alt="Solar field" className="w-full md:w-1/2 rounded-2xl aspect-[4/3] object-cover" />
        </div>
        <div>
          <h2 className="text-green-900 font-bold text-2xl md:text-3xl mb-2 md:text-left text-center">
            Your Reliable Solar Energy Partner Since 2016
          </h2>
          <p className="text-gray-800 text-base md:text-lg leading-relaxed text-center md:text-left">
            Over the years, Savorka has successfully delivered numerous solar projects for businesses across diverse industries. Our growing portfolio reflects our commitment to quality, performance, and long-term sustainability. Through cutting-edge technology and strong project execution, we empower businesses with reliable and efficient solar power solutions.
          </p>
        </div>
      </div>
    </div>

    <h2 className="text-green-900 font-bold text-2xl md:text-3xl text-center mb-8">Our Purpose</h2>
    <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center justify-center flex-wrap">
      <PurposeCard
        icon={iconEye}
        text="To create a future where clean, renewable energy powers every business and contributes to a healthier planet."
        bgColor="#2f7d0a"
      />
      <PurposeCard
        icon={iconTarget}
        text="Our mission is to make solar energy accessible, reliable, and cost-effective for businesses."
        bgColor="#4a9c14"
      />
      <PurposeCard
        icon={iconHandStar}
        text="Integrity, innovation, and sustainability guide everything we do while building lasting partnerships."
        bgColor="#8cc63f"
      />
    </div>
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
    <ImageWithBlur src={blurimg} alt="Solar panels on rooftop" />
    <section className="px-16 py-12">
      <ContactFormSection />
    </section>
  </main>
);

export default AboutPage;