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
        background: "#f3f3ed",
        padding: "30px 20px 5px",
        overflow: "hidden",
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
        {/* LEFT LEAF */}
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
              filter: "drop-shadow(0 20px 25px rgba(0,0,0,0.2))",
            }}
          />
        </div>

        {/* RIGHT CONTENT */}
        <div
          style={{
            flex: "1 1 500px",
            position: "relative",
          }}
        >
          {/* Solar Panels */}
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

          {/* Heading */}
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

          {/* Stats */}
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
                  background: "#f4f4f4",
                  borderRadius: "12px",
                  textAlign: "center",
                  boxShadow: "0 6px 14px rgba(0,0,0,0.15)",
                  padding: "15px",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.6s ease ${i * 0.1}s`,
                }}
              >
                <p
                  style={{
                    fontFamily: "Montserrat",
                    fontSize: "15px",
                    color: "#143a5c",
                    marginBottom: "6px",
                    fontWeight: 500,
                  }}
                >
                  {stat.label}
                </p>

                <p
                  style={{
                    fontFamily: "Montserrat",
                    fontSize: "24px",
                    fontWeight: 800,
                    color: "#143a5c",
                    margin: 0,
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