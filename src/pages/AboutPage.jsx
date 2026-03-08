import React from "react";
import ContactFormSection from "../components/ContactFormSection";
import heroimg from "../assets/abouthero.png";
import blurimg from "../assets/solarservice.png";

// ─── HERO ─────────────────────────────────────────────────────────────
export const AboutHero = () => (
  <div style={heroWrapper}>
    <img src={heroimg} alt="About hero" style={heroImage} />
  </div>
);

// ─── ABOUT INTRO ─────────────────────────────────────────────────────
const AboutIntro = () => (
  <section style={introSection}>
    <h2 style={introTitle}>About Us</h2>
    <div style={divider}></div>
    <h3 style={introSubtitle}>
      Building Sustainable Energy Solutions for Every Sector
    </h3>
    <p style={introParagraph}>
      At Savorka Solar, our approach goes beyond installation. We focus on
      engineering reliability, long-term performance, and customer satisfaction
      through state-of-the-art technology and expert execution.
    </p>
  </section>
);


import bigImage from "../assets/aboutimg1.png"; // large left image
import smallImage1 from "../assets/aboutimg2.png"; // top right small images
import smallImage2 from "../assets/aboutimg3.png"; // bottom right small images
// icons for the cards
import iconEye from "../assets/icon1.png";  
import iconTarget from "../assets/icon2.png";
import iconHandStar from "../assets/icon3.png";

const SolarSection = () => {
  return (
    <section style={sectionWrapper}>
      {/* Top grid with images and text */}
      <div style={topGrid}>
        <img src={bigImage} alt="Family with solar panels" style={bigImageStyle} />
        <div style={rightImagesAndText}>
          <div style={smallImagesRow}>
            <img src={smallImage1} alt="Solar rooftops" style={smallImageStyle} />
            <img src={smallImage2} alt="Solar panels field" style={smallImageStyle} />
          </div>
          <div>
            <h2 style={heading}>Heading</h2>
            <p style={paragraph}>
              At Savorka Solar, our approach goes beyond installation. We focus on
              engineering reliability, long-term performance, and customer satisfaction
              through state-of-the-art technology and expert execution.
            </p>
          </div>
        </div>
      </div>

      {/* Our Purpose cards */}
      <h2 style={purposeTitle}>Our Purpose</h2>
      <div style={cardsGrid}>
        <PurposeCard
          icon={iconEye}
          text="Properties with solar installations are more attractive to buyers and tenants.
          Lower energy costs and sustainable infrastructure increase resale value and market demand."
          backgroundColor="#2f7d0a"
          marginTop={-40}
        />
        <PurposeCard
          icon={iconTarget}
          text="Properties with solar installations are more attractive to buyers and tenants.
          Lower energy costs and sustainable infrastructure increase resale value and market demand."
          backgroundColor="#4a9c14"
          marginTop={40}
        />
        <PurposeCard
          icon={iconHandStar}
          text="Properties with solar installations are more attractive to buyers and tenants.
          Lower energy costs and sustainable infrastructure increase resale value and market demand."
          backgroundColor="#8cc63f"
           marginTop={-40}
        />
      </div>
    </section>
  );
};

const PurposeCard = ({ icon, text, backgroundColor, marginTop = 0}) => (
  <div style={{ ...cardBase, backgroundColor, marginTop }}>
    <img src={icon} alt="" style={iconStyle} />
    <p style={cardText}>{text}</p>
  </div>
);


// ─── IMAGE WITH BLUR ─────────────────────────────────────────────────
const ImageWithBlur = ({ src, alt }) => (
  <div style={blurWrapper}>
    <img src={src} alt={alt} style={blurImage} />
    <div style={blurOverlay} />
  </div>
);

// ─── MAIN PAGE ───────────────────────────────────────────────────────
const AboutPage = () => {
  return (
    <main>
      <AboutHero />
      <AboutIntro />
      <SolarSection />
      <ImageWithBlur src={blurimg} alt="Solar panels on a rooftop" />
      <ContactFormSection />
    </main>
  );
};

// ─── STYLES ─────────────────────────────────────────────────────────

// Hero
const heroWrapper = {
  position: "relative",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  background: "#f4f6f0",  
};

const heroImage = {
  width: "95%",
  height: "auto",
  minHeight: "250px",
  maxHeight: "500px",
  objectFit: "contain",
  borderBottomLeftRadius: "40px",
  borderBottomRightRadius: "40px",
};

// About Intro
const introSection = {
  textAlign: "center",
  padding: "3px 2px",
  background: "#f4f6f0",
};

const introTitle = {
  width: "auto",
  height: "auto",
  margin: "0 5px",
  color: "#0c7812",
  fontFamily: "Monorope, sans-serif",
  fontWeight: 500,
  fontSize: "clamp(24px, 5vw, 40px)",
  lineHeight: "1.2",
  textAlign: "center",
};

const divider = {
  width: "clamp(200px, 80vw, 500px)",
  height: "1px",
  background: "#f4f6f0",
  margin: "10px auto 20px",
  borderRadius: "2px",
};

const introSubtitle = {
  maxWidth: "100%",
  margin: "0 5px",
  fontFamily: "Monorope, sans-serif",
  fontWeight: 500,
  fontSize: "clamp(18px, 4vw, 30px)",
  lineHeight: "1.3",
  textAlign: "center",
  color: "#117816",
};

const introParagraph = {
  maxWidth: "850px",
  margin: "15px auto",
  color: "#252424",
};

// Blur Image
const blurWrapper = {
  position: "relative",
  width: "100%",
  height: "auto",
  minHeight: "250px",
  maxHeight: "400px",
  marginBottom: "30px",
};

const blurImage = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "12px",
};

const blurOverlay = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(255,255,255,0.5)",
  backdropFilter: "blur(4px)",
  borderRadius: "12px",
};
const sectionWrapper = {
  // padding: "clamp(40px, 5vw, 80px) clamp(20px, 5vw, 10%)",
  padding: "5px 120px",
  backgroundColor: "#f4f6f0",
  fontFamily: "'Monorope', sans-serif",
  color: "#000",
};

const topGrid = {
  display: "grid",
  gridTemplateColumns: "1.2fr 1fr",
  gap: "20px",
  alignItems: "center",
  marginBottom: 40,
};

const bigImageStyle = {
  width: "100%",
  maxWidth: "430px",
  height: "auto",
  borderRadius: "50px 0 0 50px",
  objectFit: "cover",
  aspectRatio: "1 / 1",
};

const rightImagesAndText = {
  display: "flex",
  flexDirection: "column",
  gap: 10,
};

const smallImagesRow = {
  display: "flex",
  gap: "20px",
  marginBottom: "20px",
};

const smallImageStyle = {
  width: "calc(50% - 10px)",
  borderRadius: 20,
  objectFit: "cover",
  aspectRatio: "4 / 3",
  // boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
};

const heading = {
  color: "#14532d",
  fontWeight: "700",
  fontSize: 28,
  marginBottom: "8px",
};

const paragraph = {
  color: "#252424",
  fontSize: 16,
  lineHeight: 1.5,
};

const purposeTitle = {
  color: "#14532d",
  fontWeight: "700",
  fontSize: 28,
  // marginBottom: "20px",
  textAlign: "center",
};

const cardsGrid = {
  display: "flex",
  justifyContent: "center",
  gap: 40,
  flexWrap: "wrap",
};

const cardBase = {
  width: 270,
  padding: 35,
  borderRadius: 20,
  color: "#fff",
  textAlign: "center",
  boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const iconStyle = {
  width: 50,
  height: 50,
  marginBottom: 15,
};

const cardText = {
  fontSize: 14,
  lineHeight: 1.6,
  whiteSpace: "pre-line", // keep new lines if any
};

export default AboutPage;