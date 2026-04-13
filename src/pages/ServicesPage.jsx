import React from "react";
import { Link } from "react-router-dom";
import solarModel from "../assets/savorkarenewable.png";
import blurimg from "../assets/blurserviceimg.png";
import HeroImageSection from "../components/HeroImageSection";
import servicesData from "../data/servicesData";
import bg_all from "../assets/hero_svg.png";

const ServicesPages = () => {
  return (
    <>
      <HeroImageSection title="OUR SERVICES" heroImage={bg_all} />

      <section className="bg-white px-5 sm:px-8 lg:px-[100px] py-10 md:py-14">
        {/* Top section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 mb-10 md:mb-14">
          <div className="flex-1 max-w-[650px]">
            {/* <h2 className="text-[#1a7a3c] font-semibold text-[28px] sm:text-[34px] md:text-[40px] mb-4">
              Our Services
            </h2> */}
            <div className="text-gray-600 leading-relaxed text-[15px] sm:text-[16px] md:text-[17px]">
              <p>
                We are one of the leading EPC contractors in the country, delivering
                high-performance On-Grid, Off-Grid, and Hybrid solar solutions. With
                over 150+ MWp of installed capacity and 70+ satisfied clients, we go
                beyond installation—we provide reliable, long-term sustainable energy
                solutions.
              </p>

              <p className="mt-4 font-medium text-gray-700">
                Our key services include:
              </p>

              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Residential Solar Solutions</li>
                <li>Commercial & Industrial (C&I) Solar Solutions</li>
                <li>Ground-Mounted Solar Projects</li>
                <li>Solar Structure Design & Manufacturing</li>
              </ul>

              <p className="mt-4">
                We work closely with our clients to build lasting partnerships,
                delivering energy solutions designed to perform efficiently for 25
                years and beyond.
              </p>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="group transition-all duration-300 ease-out">
              <img
                src={solarModel}
                alt="solar model"
                className="w-full max-w-[400px] sm:max-w-[480px] md:max-w-[550px] object-contain
        transition-all duration-300 ease-out
        group-hover:-translate-y-3 group-hover:scale-[1.04]
        group-hover:drop-shadow-[0_20px_30px_rgba(0,0,0,0.2)]"
              />
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {servicesData.map((service) => (
            <Link
              to={`/services/${service.slug}`}
              key={service.id}
              className="group bg-white rounded-[18px] overflow-hidden
              shadow-[0_4px_14px_rgba(0,0,0,0.08)]
              transition-all duration-300 ease-out
              hover:-translate-y-2 hover:shadow-[0_16px_30px_rgba(0,0,0,0.14)]"
            >
              <div className="overflow-hidden">
                <img
                  src={service.cardImg}
                  alt={service.cardTitle}
                  className="w-full h-[180px] sm:h-[190px] md:h-[200px] object-cover
                  transition-transform duration-500 ease-out
                  group-hover:scale-[1.04]"
                />
              </div>

              <div className="p-4 sm:p-5">
                <h3 className="text-gray-900 font-bold text-[16px] sm:text-[17px] mb-2 leading-snug">
                  {service.cardTitle}
                </h3>

                <h4 className="text-gray-700 text-[13px] sm:text-[14px] font-medium mb-2">
                  {service.cardSubtitle}
                </h4>

                <p className="text-gray-500 text-[13px] sm:text-[14px] leading-relaxed line-clamp-4">
                  {service.cardDesc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <BlurImage />
    </>
  );
};

export function BlurImage() {
  return (
    <div>
      <img src={blurimg} alt="Blur" className="w-full h-auto opacity-100" />
    </div>
  );
}

export default ServicesPages;
