import React from "react";
import serviceimg1 from "../assets/serviceimg1.png";
import serviceimg2 from "../assets/serviceimg2.png";
import serviceimg3 from "../assets/serviceimg3.png";
import serviceimg4 from "../assets/serviceimg4.png";
import bg from "../assets/ser_bg.png"

const SERVICES = [
  {
    img: serviceimg1,
    title: "Efficient On-Grid Solar Power Solutions",
    desc: "Designed to reduce electricity bills and maximize returns through seamless grid integration.",
  },
  {
    img: serviceimg2,
    title: "Solar Structuring and Manufacturing",
    desc: "Durable precision-engineered solar mounting structures for rooftop and ground projects.",
  },
  {
    img: serviceimg3,
    title: "Solar Operation & Maintenance (O&M)",
    desc: "Solar Operation & Maintenance ensures your solar system performs efficiently throughout its lifespan.",
  },
  {
    img: serviceimg4,
    title: "Off-Grid & Hybrid Solar Solutions",
    desc: "Reliable solar power with battery backup for unstable or limited grid areas.",
  },
];

const ServiceCard = ({ img, title, desc, radius, imgRadius = "12px" }) => (
  <div
    style={{
      background: "#fff",
      borderRadius: radius,
      boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
      transition: "all 0.35s ease",
      padding: "16px",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-8px)";
      e.currentTarget.style.boxShadow = "0 20px 50px rgba(0,0,0,0.2)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.12)";
    }}
  >
    {/* Image sits inside padding, gets its own inner radius */}
    <img
      src={img}
      alt={title}
      style={{
        width: "100%",
        height: "200px",
        objectFit: "cover",
        borderRadius: imgRadius,
        display: "block",
      }}
    />

    <div style={{ padding: "18px 8px 8px", textAlign: "center" }}>
      <h3
        style={{
          fontWeight: "700",
          fontSize: "16px",
          color: "#0d2137",
          marginBottom: "10px",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: "13px",
          color: "#6b6b6b",
          lineHeight: "1.6",
          margin: 0,
        }}
      >
        {desc}
      </p>
    </div>
  </div>
);

const ServicesSection = () => {
  return (
    <section
      id="services"
      style={{
        position: "relative",
        padding: "clamp(60px, 8vw, 120px) 20px",
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <div
style={{
  position: "absolute",
  right: 0,
  bottom: 80,
  width: "100%",
  height: "60%",
  backgroundImage: `url(${bg}`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  opacity: 0.8,
}}
      />

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div className="servicesGrid">
          {/* First card — smaller, scaled down, anchored top-left */}
          <div style={{ transform: "scale(0.85)", transformOrigin: "bottom right" }}>
            <ServiceCard
              {...SERVICES[0]}
              radius="20px"
              imgRadius="8px"
            />
          </div>

          <ServiceCard
            {...SERVICES[1]}
            radius="80px 20px 20px 20px"
            imgRadius="64px 8px 8px 8px"
          />

          <ServiceCard
            {...SERVICES[2]}
            radius="90px 20px 80px 20px"
            imgRadius="74px 8px 64px 8px"
          />

          {/* Last card — smaller, scaled down, anchored top-right */}
          <div style={{ transform: "scale(0.85)", transformOrigin: "top left" }}>
            <ServiceCard
              {...SERVICES[3]}
              radius="20px"
              imgRadius="8px"
            />
          </div>
        </div>
      </div>

      <style>{`
        .servicesGrid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: clamp(20px, 4vw, 5px);
        }

        @media (max-width: 768px) {
          .servicesGrid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;