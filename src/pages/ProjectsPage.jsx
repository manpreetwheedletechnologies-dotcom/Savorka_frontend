import React, { useState } from "react";
import { AboutHero } from "../pages/AboutPage";
import ContactFormSection from "../components/ContactFormSection";
import { BlurImage } from "../pages/ServicesPage";
import solarimg from "../assets/serviceimg1.png";  

function Projects() {
  const initialCount = 6;
  const [visibleCount, setVisibleCount] = useState(initialCount);

  const handleShowMore = () => {
    setVisibleCount(projects.length);
  };

  const handleViewLess = () => {
    setVisibleCount(initialCount);
  };

  return (
    <>
      <section style={sectionStyle}>
        <h2 style={heading}>Project Archives</h2>

        <div style={grid}>
          {projects.slice(0, visibleCount).map((item, index) => (
            <div key={index} style={card}>
              <img src={solarimg} alt="project" style={image} />
              <p style={cardText}>{item.title}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "30px" }}>
          {visibleCount < projects.length ? (
            <button style={button} onClick={handleShowMore}>
              Show More
            </button>
          ) : (
            <button style={button} onClick={handleViewLess}>
              View Less
            </button>
          )}
        </div>
      </section>
    </>
  );
}
const projects = [
  { title: "PM KUSUM-C Project – Jasingpura | 5.2 MW Ground Mounted Solar Project" },
  { title: "Adani Logistics Ltd – Talaja | 150 kW Rooftop Solar Project" },
  { title: "Adani Logistics Ltd – Tauru | 500 kW Rooftop Solar Project" },
  { title: "Adani Logistics Ltd – Palwal | 250 kW Rooftop Solar Project" },
  { title: "Mukul Overseas Pvt Ltd – Mainpuri | 800 kW Rooftop Solar Project" },
  { title: "Paras Glass Ware Pvt Ltd – Firozabad | 450 kW Rooftop Solar Project" },
  { title: "Firozabad Glass Shell Industries – Firozabad | 500 kW Rooftop Solar Project" },
  { title: "Okay Glass Industries – Firozabad | 600 kW Rooftop Solar Project" },
  { title: "Durgesh Block & China Glass Works Ltd – Firozabad | 1500 kW Rooftop Solar Project" },
  { title: "General Traders – Firozabad | 660 kW Rooftop Solar Project" },
  { title: "Farukhi Glass Industries – Firozabad | 1500 kW Rooftop Solar Project" },
  { title: "RGI Rise Glass Industries – Firozabad | 1500 kW Rooftop Solar Project" }
];

const ProjectsPage = () => {
  return (
    <main>

      <AboutHero />
      <Projects />
      <BlurImage />
      <ContactFormSection />

    </main>
  );
};

export default ProjectsPage;


/* ================= STYLES ================= */

const sectionStyle = {
  background: "#f3f3ed",
  padding: "60px 80px",
};

const heading = {
  fontSize: "43px",
  fontWeight: "600",
  color: "#2c7a1f",
  marginBottom: "40px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "30px",
};

const card = {
  background: "#fff",
  borderRadius: "12px",
  padding: "12px",
  border: "4px solid #69b52c",
  boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
  textAlign: "center",
};

const image = {
  width: "100%",
  height: "140px",
  objectFit: "cover",
  borderRadius: "8px",
};

const cardText = {
  fontSize: "14px",
  marginTop: "10px",
  color: "#2c7a1f",
  fontWeight: "500",
  lineHeight: "1.4",
};

const button = {
  background: "#2c7a1f",
  color: "#fff",
  border: "none",
  padding: "10px 25px",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "14px",
};