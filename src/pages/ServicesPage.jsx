import React, { useState } from "react";
import ContactFormSection from "../components/ContactFormSection";
import { AboutHero } from "../pages/AboutPage";
import blurimg from "../assets/blurserviceimg.png";
import namesimg from "../assets/nameimg.png";

import solarModel from "../assets/savorkarenewable.png";
import service1 from "../assets/serviceimg1.png";
import service2 from "../assets/serviceimg1.png";
import service3 from "../assets/serviceimg1.png";
import service4 from "../assets/serviceimg1.png";


/* ─── Services Section ─── */
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
    <section style={s.wrapper}>
      {/* Top — heading left, image right */}
      <div style={s.topRow}>
        <div style={s.topLeft}>
          <h2 style={s.heading}>Our Services</h2>
          <p style={s.desc}>
            We are among the largest EPC contractor in the country
            that delivers high-performance On-Grid, Off-Grid, and 
            Hybrid solar systems. With 150+ MWp installed capacity and
            70+ satisfied clients, we don't just install solar – we power
            long-term, sustainable energy solutions.
          </p>
        </div>
        <div style={s.topRight}>
          <img src={solarModel} alt="solar model" style={s.heroImg} />
        </div>
      </div>

      {/* 2×2 Service Cards */}
      <div style={s.grid}>
        {services.map((svc, i) => (
          <div key={i} style={s.card}>
            <img src={svc.img} alt={svc.title} style={s.cardImg} />
            <div style={s.cardBody}>
              <h3 style={s.cardTitle}>{svc.title}</h3>
              <p style={s.cardDesc}>{svc.desc}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
const blurImgStyle = {
  width: "100%",
  height: "auto",
  opacity: 1
};

export function BlurImage() {
  return (
    <div>
      <img src={blurimg} alt="Blur" style={blurImgStyle} />
    </div>

  );
}
const namesImgStyle = {
  width: "80%",
  height: "auto",
  opacity: 1
};

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

function NameImage() {
  return (
    <div style={containerStyle}>
      <img src={namesimg} alt="nameimg" style={namesImgStyle} />
    </div>
  );
}

/* ─── Styles ─── */
const s = {
  wrapper: {
    background: "#f4f6f0",
    padding: "2px 5%", // reduced horizontal padding for small devices
    fontFamily: "'Monorope', sans-serif",
  },
  topRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginBottom: "18px",
    gap: "24px",
  },
  topLeft: {
    flex: "1 1 320px",
    maxWidth: "600px",
  },
  topRight: {
    flex: "1 1 280px",
    display: "flex",
    justifyContent: "center",
  },
  heading: {
    fontSize: "clamp(24px, 4vw, 32px)", // responsive font size
    fontWeight: "600",
    color: "#1a7a3c",
    marginBottom: "16px",
    lineHeight: 1,
  },
  desc: {
    fontSize: "clamp(14px, 2.5vw, 16px)", // responsive font
    color: "#555",
    lineHeight: "1.7",
  },
  heroImg: {
    width: "100%",
    maxWidth: "400px",
    height: "auto",
    objectFit: "contain",
  },
cardImgWrapper: {
  padding: "0 20px",  
},
grid: {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "30px",
},

card: {
  background: "#fff",
  borderRadius: "12px",
  padding: "12px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
  textAlign: "center",
},

cardImg: {
  width: "100%",
  height: "140px",
  objectFit: "cover",
  borderRadius: "8px",
},
// cardImg: {
//   width: "100%",
//   height: "180px",
//   objectFit: "cover",
//   display: "block",
//   borderRadius: "16px 16px 0 0",
// },
  cardBody: {
    padding: "18px 20px 22px",
    textAlign: "center",
  },
  cardTitle: {
    fontSize: "clamp(14px, 2vw, 15px)",
    fontWeight: "700",
    color: "#222",
    marginBottom: "8px",
  },
  cardDesc: {
    fontSize: "clamp(13px, 1.8vw, 15px)",
    color: "#6b7280",
    lineHeight: "1.6",
    margin: 0,
  },


};



/* ─── Page ─── */
const ServicesPage = () => {
  return (
    <main>
      <AboutHero />
      <ServicesSection />
        <BlurImage />
        <NameImage />
      <ContactFormSection />
    </main>
  );
};

export default ServicesPage;