import React from "react";
import towerImg from "../assets/towerimg.png";

const WhySolarSection = () => {
  const lightCard = {
    background: "#c7c8b5",
    borderRadius: "20px",
    padding: "30px",
    textAlign: "center",
    minHeight: "260px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  const greenCard = {
    background: "#8cc63f",
    borderRadius: "20px",
    padding: "30px",
    textAlign: "center",
    color: "white",
    minHeight: "210px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  const darkGreenCard = {
    background: "#3e8e1c",
    borderRadius: "20px",
    padding: "30px",
    textAlign: "center",
    color: "white",
    minHeight: "210px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  return (
    <section
      style={{
        background: "#f2f2ea",
        padding: "clamp(40px, 6vw, 70px) clamp(20px, 4vw, 60px)",
      }}
    >
      <div style={{ maxWidth: "1300px", margin: "auto" }}>
        
        {/* TOP ROW */}
        <div className="topRow">
          {/* Strong Brand */}
          <div style={lightCard}>
            <h3 style={{ marginBottom: "15px" }}>Strong Brand Image</h3>
            <p style={{ fontSize: "14px", lineHeight: "22px" }}>
              Switching to solar showcases your commitment to sustainability
              and environmental responsibility. It builds trust with clients,
              investors, and partners who value green initiatives.
            </p>
          </div>

          {/* CENTER IMAGE */}
          <div style={{ textAlign: "center" }}>
            <h2
              style={{
                color: "#0c5c13",
                fontSize: "clamp(24px,4vw,36px)",
                marginBottom: "20px",
                fontWeight: "700",
              }}
            >
              Why go SOLAR?
            </h2>

            <img
              src={towerImg}
              alt="solar"
              style={{ width: "100%", maxWidth: "420px" }}
            />
          </div>

          {/* Subsidy */}
          <div style={lightCard}>
            <h3 style={{ marginBottom: "15px" }}>Subsidy & Tax Benefits</h3>
            <p style={{ fontSize: "14px", lineHeight: "22px" }}>
              Many governments offer subsidies, tax credits, and financial
              incentives for solar adoption. These benefits reduce upfront
              costs and improve overall return on investment.
            </p>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="bottomRow">
          <div style={greenCard}>
            <h3>Save on Electricity Bills</h3>
            <p style={{ fontSize: "14px", marginTop: "10px" }}>
              Solar panels generate your own electricity, significantly
              reducing monthly power expenses.
            </p>
          </div>

          <div style={darkGreenCard}>
            <h3>Eco-Friendly Energy Source</h3>
            <p style={{ fontSize: "14px", marginTop: "10px" }}>
              Quick payback period of 3–4 years guaranteed.
            </p>
          </div>

          <div style={darkGreenCard}>
            <h3>Energy Independence</h3>
            <p style={{ fontSize: "14px", marginTop: "10px" }}>
              Durable precision-engineered solar mounting structures.
            </p>
          </div>

          <div style={greenCard}>
            <h3>Increase Property Value</h3>
            <p style={{ fontSize: "14px", marginTop: "10px" }}>
              Properties with solar installations attract buyers and tenants.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .topRow{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:clamp(20px,4vw,30px);
          align-items:center;
          margin-bottom:30px;
        }

        .bottomRow{
          display:grid;
          grid-template-columns:repeat(4,1fr);
          gap:clamp(15px,3vw,30px);
        }

        @media (max-width:1024px){
          .topRow{
            grid-template-columns:1fr;
          }

          .bottomRow{
            grid-template-columns:1fr 1fr;
          }
        }

        @media (max-width:600px){
          .bottomRow{
            grid-template-columns:1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default WhySolarSection;