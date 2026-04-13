import React, { useEffect, useRef, useState } from "react";
import leafImage from "../assets/leaf.png";
import solarPanelsImage from "../assets/solarplate.png";
import goGreenImage from "../assets/Gogreenimg.png";

const STATS = [
  { label: "Capacity (MWp)", value: 150, suffix: "+" },
  { label: "States Served", value: 8, suffix: "+" },
  { label: "Happy Clients", value: 70, suffix: "+" },
  { label: "Years of Excellence", value: 9, suffix: "+" },
];

// Green gradient matching the SVG leaf/brand gradient
const GREEN_GRADIENT = "linear-gradient(135deg, #D2FF5D 0%, #8FCC36 25%, #5BA419 46%, #3C8C06 62%, #308300 100%)";

const GoGreenSection = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    STATS.forEach((stat, i) => {
      let start = 0;
      const end = stat.value;
      const duration = 1200;
      const stepTime = duration / end;

      const timer = setInterval(() => {
        start += 1;

        setCounts((prev) => {
          const updated = [...prev];
          updated[i] = start;
          return updated;
        });

        if (start === end) clearInterval(timer);
      }, stepTime);
    });
  }, [visible]);

  return (
    <section
      ref={ref}
      style={{
        padding: isMobile ? "48px 20px" : "72px 40px",
        background: "#ffffff",
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "flex",
          alignItems: "center",
          gap: "60px",
          flexWrap: "wrap",
        }}
      >
        {/* LEFT — Leaf image */}
        <div
          style={{
            flex: "1 1 420px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={leafImage}
            alt="Leaf"
            style={{
              width: isMobile ? "80%" : "90%",
              margin: isMobile ? "0 auto" : "0 0 0 350px",
            }}
          />
        </div>

        {/* RIGHT — Content */}
        <div
          style={{
            flex: "1 1 500px",
            position: "relative",
          }}
        >
          {/* Solar Panels decoration */}
          <img
            src={solarPanelsImage}
            alt="Solar Panels"
            style={{
              position: "absolute",
              right: isMobile ? "20px" : isTablet ? "120px" : "250px",
              top: isMobile ? "-40px" : "-100px",
              width: isMobile ? "90px" : "150px",
            }}
          />

          {/* Go Green Go Savorka heading image */}
          <div style={{ marginBottom: "40px" }}>
            <img
              src={goGreenImage}
              alt="Go Green Go Savorka"
              style={{
                width: "100%",
                maxWidth: "420px",
                margin: isMobile ? "0 auto" : "0 0 -10px -60px",
                display: "block",
              }}
            />
          </div>

          {/* Stats grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
              gap: "18px",
              maxWidth: "420px",
            }}
          >
            {STATS.map((stat, i) => (
              <div
                key={i}
                style={{
                  background: "#ffffff",
                  borderRadius: "18px",
                  textAlign: "center",
                  boxShadow: "0 4px 18px rgba(0, 49, 94, 0.18)",
                  padding: "22px 18px",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.6s ease ${i * 0.1}s`,
                  border: "none",
                }}
              >
                {/* Stat label — navy #00315E */}
                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "13px",
                    letterSpacing: "0.02em",
                    color: "#00315E",
                    marginBottom: "8px",
                    fontWeight: 600,
                    margin: "0 0 8px 0",
                  }}
                >
                  {stat.label}
                </p>

                {/* Stat number — large, green gradient text */}
                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "32px",
                    fontWeight: 800,
                    margin: 0,
                    // Green gradient text matching the SVG brand gradient
                    background: GREEN_GRADIENT,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {counts[i]}
                  {stat.suffix}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoGreenSection;