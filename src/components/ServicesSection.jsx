import React from "react";
import serviceimg1 from "../assets/residential.png";
import serviceimg2 from "../assets/c&I.jpeg";
import serviceimg3 from "../assets/ground.jpeg";
import serviceimg4 from "../assets/factory.png";
import bg from "../assets/ser_bg.png"
import { Link } from "react-router-dom";

const SERVICES = [
  {
    img: serviceimg1,
    title: "Residential Solar Solutions",
    desc: "Solar solutions for homes designed to reduce electricity bills and maximize long-term savings.",
    links: "residential"
  },
  {
    img: serviceimg2,
    title: "C&I (Commercial & Industrial) Solar Solutions",
    desc: "Scalable solar systems for businesses to lower operational costs and improve energy efficiency.",
    links: "commercial-industrial-solar"
  },
  {
    img: serviceimg3,
    title: "Ground Mounted Solar Projects",
    desc: "High-efficiency ground-mounted solar installations ideal for large-scale power generation projects.",
    links: "ground-mounted-solar"
  },
  {
    img: serviceimg4,
    title: "Solar Structure Manufacturing ",
    desc: "Durable, precision-engineered solar mounting structures for rooftop and ground-based installations.",
    links: "solar-structure-manufacturing"
  },
];

const ServiceCard = ({ img, title, desc, links, radius, imgRadius = "12px" }) => (
  <Link to={`/services/${links}`}
    key={title}>
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
  </Link>
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