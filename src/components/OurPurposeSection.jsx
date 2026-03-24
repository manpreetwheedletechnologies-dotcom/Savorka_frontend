import React, { useEffect, useRef, useState } from "react";
import iconEye from "../assets/icon1.png";
import iconTarget from "../assets/icon2.png";
import iconHandStar from "../assets/icon3.png";

const purposeCards = [
  {
    id: 1,
    icon: iconEye,
    title: "Vision",
    bgColor: "#389400",
    description: (
      <>
      To create a future where clean, renewable energy powers every business and contributes to a healthier planet. We envision accelerating India’s transition toward sustainable and environmentally responsible energy solutions.
        {/* Properties with solar installations
        <br />
        are more attractive to buyers and
        <br />
        tenants.
        <br />
        Lower energy costs and
        <br />
        sustainable infrastructure
        <br />
        increase resale value and market
        <br />
        demand. */}
      </>
    ),
  },
  {
    id: 2,
    icon: iconTarget,
    title: "Mission",
    bgColor: "#58ad0e",
    description: (
      <>

      Our mission is to make solar energy accessible, reliable, and cost-effective for businesses. We strive to deliver innovative solar solutions that maximize efficiency, reduce energy costs, and support long-term sustainability goals.
        {/* Properties with solar installations
        <br />
        are more attractive to buyers and
        <br />
        tenants.
        <br />
        Lower energy costs and
        <br />
        sustainable infrastructure
        <br />
        increase resale value and market
        <br />
        demand. */}
      </>
    ),
    offsetDesktop: true,
  },
  {
    id: 3,
    icon: iconHandStar,
    title: "Values",
    bgColor: "#93cd37",
    description: (
      <>


      Integrity, innovation, and sustainability guide everything we do. We believe in building lasting partnerships with our clients while delivering high-quality solar solutions that drive both economic and environmental impact.
        {/* Properties with solar installations
        <br />
        are more attractive to buyers and
        <br />
        tenants.
        <br />
        Lower energy costs and
        <br />
        sustainable infrastructure
        <br />
        increase resale value and market
        <br />
        demand. */}
      </>
    ),
  },
];

const PurposeCard = ({
  icon,
  title,
  description,
  bgColor,
  isVisible,
  delay = 0,
}) => {
  return (
    <div
      className="group w-full max-w-[232px] sm:max-w-[245px] md:max-w-[255px] rounded-[22px] px-5 py-7 md:px-6 md:py-8 text-white shadow-[0_12px_24px_rgba(0,0,0,0.08)] will-change-transform"
      style={{
        backgroundColor: bgColor,
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "translateY(0px) scale(1)"
          : "translateY(-55px) scale(0.94)",
        transition: `opacity 700ms ease, transform 900ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, box-shadow 300ms ease`,
      }}
    >
      <div className="flex justify-center mb-5">
        <img
          src={icon}
          alt={title}
          className="w-12 h-12 md:w-14 md:h-14 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-1"
        />
      </div>

      <p className="text-center text-[13px] sm:text-[14px] md:text-[15px] leading-[1.22] font-normal transition-transform duration-300 group-hover:translate-y-[-1px]">
        {description}
      </p>
    </div>
  );
};

const OurPurposeSection = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      {
        threshold: 0.22,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="pt-0 md:pt-1 pb-8 md:pb-10">
      <div className="mx-auto max-w-[900px]">
        <h2
          className="text-[#0b6a16] font-bold text-[28px] md:text-[34px] text-center mb-3 md:mb-4"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(-20px)",
            transition:
              "opacity 500ms ease, transform 700ms cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          Our Purpose
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 md:gap-y-5 lg:gap-y-0 gap-x-3 md:gap-x-4 lg:gap-x-5 items-start justify-items-center">
          <div className="flex justify-center lg:justify-end">
            <PurposeCard
              icon={purposeCards[0].icon}
              title={purposeCards[0].title}
              description={purposeCards[0].description}
              bgColor={purposeCards[0].bgColor}
              isVisible={visible}
              delay={50}
            />
          </div>

          <div className="flex justify-center lg:pt-[76px]">
            <PurposeCard
              icon={purposeCards[1].icon}
              title={purposeCards[1].title}
              description={purposeCards[1].description}
              bgColor={purposeCards[1].bgColor}
              isVisible={visible}
              delay={170}
            />
          </div>

          <div className="flex justify-center lg:justify-start">
            <PurposeCard
              icon={purposeCards[2].icon}
              title={purposeCards[2].title}
              description={purposeCards[2].description}
              bgColor={purposeCards[2].bgColor}
              isVisible={visible}
              delay={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPurposeSection;