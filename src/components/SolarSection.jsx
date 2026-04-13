import React from "react";
import bigImage from "../assets/aboutimg_1.png";
import smallImage1 from "../assets/aboutimg_2.png";
import smallImage2 from "../assets/aboutimg_3.png";
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
  <section className="w-full overflow-hidden py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-28">
    <div className="mx-auto max-w-[1400px]">
      <div className="grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] items-start gap-6 md:gap-8 lg:gap-10 xl:gap-12">
        {/* LEFT MAIN IMAGE */}
        <div className="w-full order-1">
          <div
            className="bg-white p-3 sm:p-4 lg:p-5 shadow-[0_10px_30px_rgba(0,0,0,0.08)]
    rounded-tl-[110px] rounded-tr-[18px] 
    rounded-br-[110px] rounded-bl-[18px] 
    sm:rounded-tl-[150px] sm:rounded-br-[150px] 
    lg:rounded-tl-[200px] lg:rounded-br-[200px]"
          >
            <div
              className="w-full overflow-hidden 
      rounded-tl-[95px] rounded-tr-[14px] 
      rounded-br-[95px] rounded-bl-[14px] 
      sm:rounded-tl-[130px] sm:rounded-br-[130px] 
      lg:rounded-tl-[200px] lg:rounded-br-[200px]"
            >
              <img
                src={bigImage}
                alt="Family with solar panels"
                className="block w-full h-[260px] xs:h-[300px] sm:h-[380px] md:h-[460px] lg:h-[520px] xl:h-[580px] object-cover transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.01]"
              />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full flex flex-col justify-start gap-4 sm:gap-5 md:gap-6 order-2">
          {/* SMALL IMAGES */}
          <div className="grid grid-cols-1 min-[520px]:grid-cols-2 gap-4 sm:gap-5">
            <div className="bg-white p-3 sm:p-4 group rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
              <div className="w-full overflow-hidden rounded-[18px] sm:rounded-[22px] lg:rounded-[26px]">
                <img
                  src={smallImage1}
                  alt="Solar rooftop"
                  className="block w-full h-[180px] sm:h-[210px] md:h-[220px] lg:h-[230px] xl:h-[250px] object-cover object-center transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-[1.03]"
                />
              </div>
            </div>

            <div className="bg-white p-3 sm:p-4 group rounded-[24px] sm:rounded-[28px] lg:rounded-[32px]">
              <div
                className="w-full overflow-hidden 
    rounded-tl-[18px] rounded-tr-[18px] 
    rounded-bl-[18px] rounded-br-[40px]   /* 👈 increased only bottom-right */
    sm:rounded-br-[55px] 
    lg:rounded-br-[70px]"
              >
                <img
                  src={smallImage2}
                  alt="Solar field"
                  className="block w-full h-[180px] sm:h-[210px] md:h-[220px] lg:h-[230px] xl:h-[250px] object-cover object-center transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-[1.03]"
                />
              </div>
            </div>
          </div>

          {/* TEXT */}
          <div className="w-full transition-transform duration-500 hover:translate-x-1">
            <h2 className="text-green-900 font-bold text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] xl:text-[46px] leading-[1.08] mb-3 sm:mb-4 text-center lg:text-left max-w-none lg:max-w-[720px]">
              Your Reliable Solar Energy Partner Since 2016
            </h2>

            <p className="text-gray-800 text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-[1.75] text-center lg:text-left max-w-none lg:max-w-[760px]">
              Founded in 2016 and headquartered in Noida, Savorka is committed
              to delivering sustainable solar energy solutions to businesses
              across India. With a focus on innovation, efficiency, and
              reliability, we help organizations transition to clean energy
              while reducing operational costs and carbon footprint. Our expert
              team ensures seamless solar adoption through advanced technology
              and end-to-end project execution.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SolarSection;
