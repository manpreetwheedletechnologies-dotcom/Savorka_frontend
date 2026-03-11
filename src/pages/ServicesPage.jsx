import React from "react";
import solarModel from "../assets/savorkarenewable.png";
import blurimg from "../assets/blurserviceimg.png";
import namesimg from "../assets/nameimg.png";
import ContactFormSection from "../components/ContactFormSection";
import service1 from "../assets/serviceimg1.png";
import service2 from "../assets/serviceimg1.png";
import service3 from "../assets/serviceimg1.png";
import service4 from "../assets/serviceimg1.png";

const ServicesSection = () => {
  const services = [
    {
      img: service1,
      title: "Efficient On-Grid Solar Power Solutions",
      desc: "Cost-effective on-grid solar systems designed to reduce electricity bills and maximize returns through seamless grid integration.",
    },
    {
      img: service2,
      title: "Efficient Off-Grid & Hybrid Solar Solutions",
      desc: "Reliable solar power solutions with battery backup for locations with limited or unstable grid availability.",
    },
    {
      img: service3,
      title: "Solar Operation & Maintenance (O&M)",
      desc: "Professional O&M services to ensure consistent performance, maximum energy generation, and extended system life.",
    },
    {
      img: service4,
      title: "Solar Structure Manufacturing",
      desc: "Durable and precision-engineered solar mounting structures for rooftop and ground-mounted solar projects.",
    },
  ];

  return (
    <section className="bg-[#f4f6f0] px-5 sm:px-10 py-10">
      {/* Top — heading left, image right */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-8">
        <div className="flex-1 max-w-xl">
          <h2 className="text-[#1a7a3c] font-semibold text-3xl sm:text-4xl mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
            We are among the largest EPC contractors in the country that delivers high-performance On-Grid, Off-Grid, and Hybrid solar systems. With 150+ MWp installed capacity and 70+ satisfied clients, we don't just install solar – we power long-term, sustainable energy solutions.
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src={solarModel}
            alt="solar model"
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>

      {/* Service Cards Grid */}
      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-4">
        {services.map((svc, i) => (
          // Outer card — 650×382, border-radius 20px
          <div
            key={i}
            className="bg-white rounded-[20px] p-[35px] shadow-md flex items-center justify-center"
          >
            {/* Inner card — 581×346, border-radius 20px */}
            <div className="bg-white rounded-[20px] overflow-hidden flex flex-col w-full shadow-sm"
              style={{ minHeight: "346px" }}
            >
              {/* Image — 581×210 */}
              <img
                src={svc.img}
                alt={svc.title}
                className="w-full object-cover rounded-t-[20px]"
                style={{ height: "210px" }}
              />
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-gray-900 font-bold text-base mb-2">{svc.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{svc.desc}</p>
              </div>
            </div>
          </div>

        ))}

      </div>
      <div className="mt-16">
        <ContactFormSection />
      </div>
    </section>
  );
};


export function BlurImage() {
  return (
    <div>
      <img src={blurimg} alt="Blur" className="w-full h-auto opacity-100" />
    </div>
  );
}

export function NameImage() {
  return (
    <div className="flex justify-center">
      <img src={namesimg} alt="Names" className="w-4/5 sm:w-3/5 h-auto" />
    </div>
  );
}
export default ServicesSection;