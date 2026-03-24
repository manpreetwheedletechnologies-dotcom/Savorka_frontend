import React from "react";
import bigImage from "../assets/aboutimg1.png";
import smallImage1 from "../assets/aboutimg2.png";
import smallImage2 from "../assets/aboutimg3.png";
import iconEye from "../assets/icon1.png";
import iconTarget from "../assets/icon2.png";
import iconHandStar from "../assets/icon3.png";

const PurposeCard = ({ icon, text, bgColor }) => (
  <div
    className="w-full max-w-xs p-6 rounded-2xl text-white flex flex-col items-center shadow-lg"
    style={{ backgroundColor: bgColor }}
  >
    <img src={icon} alt="" className="w-12 h-12 mb-4" />
    <p className="text-sm leading-relaxed text-center">{text}</p>
  </div>
);

const SolarSection = () => (
  <section className="py-8 px-4 md:px-28">
    <div className="grid grid-cols-1 md:grid-cols-[1.04fr_1fr] gap-1 md:gap-2 lg:gap-3 items-center mb-10">
      {/* LEFT MAIN IMAGE */}
      <div className="w-full animate-[fadeUp_.7s_ease-out]">
        <img
          src={bigImage}
          alt="Family with solar panels"
          className="w-full max-w-[460px] h-[420px] sm:h-[480px] md:h-[540px] lg:h-[580px] object-cover rounded-l-[50px] transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.01]"
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-col gap-5 animate-[fadeUp_.9s_ease-out]">
        {/* SMALL IMAGES */}
        <div className="flex flex-col md:flex-row gap-3 mb-4">
          <div className="group w-full md:w-1/2 overflow-hidden rounded-2xl">
            <img
              src={smallImage1}
              alt="Solar rooftop"
              className="w-full h-[170px] sm:h-[200px] md:h-[220px] lg:h-[240px] rounded-2xl object-cover transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-[1.03] group-hover:shadow-[0_14px_32px_rgba(0,0,0,0.12)]"
            />
          </div>

          <div className="group w-full md:w-1/2 overflow-hidden rounded-2xl">
            <img
              src={smallImage2}
              alt="Solar field"
              className="w-full h-[170px] sm:h-[200px] md:h-[220px] lg:h-[240px] rounded-2xl object-cover transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-[1.03] group-hover:shadow-[0_14px_32px_rgba(0,0,0,0.12)]"
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="transition-transform duration-500 hover:translate-x-1">
          <h2 className="text-green-900 font-bold text-2xl md:text-3xl lg:text-[40px] leading-[1.15] mb-3 md:text-left text-center">
            Your Reliable Solar Energy Partner Since 2016
          </h2>
          <p className="text-gray-800 text-base md:text-lg leading-relaxed text-center md:text-left">
            Founded in 2016 and headquartered in Noida, Savorka is committed to delivering sustainable solar energy solutions to businesses across India. With a focus on innovation, efficiency, and reliability, we help organizations transition to clean energy while reducing operational costs and carbon footprint. Our expert team ensures seamless solar adoption through advanced technology and end-to-end project execution.
          </p>
        </div>
      </div>
    </div>

    {/* <h2 className="text-green-900 font-bold text-2xl md:text-3xl text-center mb-8">
      Our Purpose
    </h2>

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
    </div> */}
  </section>
);

export default SolarSection;
