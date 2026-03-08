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

  // Intersection animation trigger
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

  // Count up animation
  useEffect(() => {
    if (!visible) return;

    STATS.forEach((stat, i) => {
      let start = 0;
      const end = stat.value;
      const duration = 1200;
      const stepTime = Math.abs(Math.floor(duration / end));

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
        background: "#e8e6de",
        padding: "clamp(40px, 6vw, 90px) clamp(20px, 4vw, 40px)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "flex",
          alignItems: "center",
          gap: "clamp(30px, 5vw, 60px)",
          flexWrap: "wrap",
        }}
      >
        {/* LEFT LEAF */}
        <div
          style={{
            flex: "1 1 350px",
            maxWidth: "420px",
            textAlign: "center",
          }}
        >
          <img
            src={leafImage}
            alt="Green Leaf"
            style={{
              width: "100%",
              maxWidth: "420px",
              filter: "drop-shadow(0 15px 20px rgba(0,0,0,0.15))",
            }}
          />
        </div>

        {/* RIGHT CONTENT */}
        <div
          style={{
            flex: 1,
            position: "relative",
            minWidth: "320px",
          }}
        >
          {/* Solar Panels */}
          <div
            style={{
              position: "absolute",
              top: "-60px",
              right: "10px",
              width: "200px",
            }}
          >
            <img
              src={solarPanelsImage}
              alt="Solar Panels"
              style={{
                width: "100%",
                objectFit: "contain",
              }}
            />
          </div>

          {/* Heading */}
          <div
            style={{
              marginBottom: "40px",
            }}
          >
            <img
              src={goGreenImage}
              alt="Go Green Go Savorka"
              style={{
                width: "100%",
                maxWidth: "430px",
              }}
            />
          </div>

          {/* STATS GRID */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "clamp(15px, 3vw, 20px)",
            }}
          >
            {STATS.map((stat, i) => (
              <div
                key={i}
                style={{
                  background: "#f2f2f2",
                  borderRadius: "12px",
                  padding: "20px",
                  textAlign: "center",
                  boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
                  opacity: visible ? 1 : 0,
                  transform: visible
                    ? "translateY(0)"
                    : "translateY(20px)",
                  transition: `all 0.6s ease ${i * 0.1}s`,
                }}
              >
                <p
                  style={{
                    fontFamily: "Montserrat",
                    fontSize: "16px",
                    color: "#143a5c",
                    marginBottom: "6px",
                    fontWeight: "500",
                  }}
                >
                  {stat.label}
                </p>

                <p
                  style={{
                    fontFamily: "Montserrat",
                    fontSize: "34px",
                    fontWeight: "800",
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