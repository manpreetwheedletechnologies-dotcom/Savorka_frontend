 
import React from "react";
import serviceimg1 from "../assets/serviceimg1.png";
import serviceimg2 from "../assets/serviceimg2.png";
import serviceimg3 from "../assets/serviceimg3.png";
import serviceimg4 from "../assets/serviceimg4.png";
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
 
const ServiceCard = ({ img, title, desc, radius }) => (
  <div
    style={{
      background: "#fff",
      borderRadius: radius,
      overflow: "hidden",
      boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
      transition: "all 0.35s ease",
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
    <img
      src={img}
      alt={title}
      style={{
        width: "100%",
        height: "180px",
        objectFit: "cover",
      }}
    />
 
    <div style={{ padding: "22px", textAlign: "center" }}>
      <h3
        style={{
          fontFamily: "Montserrat",
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
        background:
          "linear-gradient(to bottom, #e8e5de 15%, #dce8c4 45%)",
        overflow: "hidden",
      }}
    >
      {/* Solar background */}
      <div
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          width: "100%",
          height: "70%",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.35,
        }}
      />
 
      {/* Cards */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(280px, 1fr))",
            gap: "clamp(20px, 4vw, 30px)",
          }}
        >
          {/* Card 1 */}
          <ServiceCard
            {...SERVICES[0]}
            radius="20px"
          />
 
          {/* Card 2 (top right large rounded corner) */}
          <ServiceCard
            {...SERVICES[1]}
            radius="80px 20px 20px 20px"
          />
 
          {/* Card 3 (bottom left large rounded corner) */}
          <ServiceCard
            {...SERVICES[2]}
            radius="90px 20px 80px 20px"
          />
 
          {/* Card 4 */}
          <ServiceCard
            {...SERVICES[3]}
            radius="20px"
          />
        </div>
      </div>
    </section>
  );
};
 
export default ServicesSection;
 