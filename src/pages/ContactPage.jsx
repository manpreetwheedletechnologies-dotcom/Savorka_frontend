import React from "react";
import solarservices from "../assets/solarservice.png";
import sideimg from "../assets/banner.png";
import ContactFormSection from "../components/ContactFormSection";
const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
const teamMembers = [
  {
    name: "Rishabh Sharma",
    role: "Sales Director",
    img: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Priya Kaushik",
    role: "Finance & HR Coordinator",
    img: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Shivani Tyagi",
    role: "Senior Accountant",
    img: "https://randomuser.me/api/portraits/women/65.jpg"
  }
];
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#f6f6f0" }}>

      {/* HERO */}
      <div style={{ width: "100%", height: "auto", minHeight: "250px", overflow: "hidden" }}>
        <img
          src={solarservices}
          alt="Solar Services"
          style={{ width: "100%", height: "auto", minHeight: "250px", objectFit: "cover" }}
        />
      </div>

      {/* ABOUT */}
      <section style={{ textAlign: "center", padding: "30px 20px" }}>
        <h2
          style={{
            width: "auto", height: "auto", margin: "0 5px", color: "#0c7812", fontFamily: "Monorope, sans-serif", fontWeight: 500, fontSize: "clamp(24px, 5vw, 40px)", lineHeight: "1.2", letterSpacing: "0%", textAlign: "center", opacity: 1
          }}
        >
          About Us
        </h2>

        <h3
          style={{
            maxWidth: "100%", margin: "0 5px", fontFamily: "Monorope, sans-serif", fontWeight: 500, fontSize: "clamp(18px, 4vw, 30px)", lineHeight: "1.3", letterSpacing: "0%", textAlign: "center", color: "#117816"
          }}
        >
          Building Sustainable Energy Solutions for Every Sector
        </h3>

        <p style={{ maxWidth: "750px", margin: "15px auto", color: "#252424" }}>
          At Savorka Solar, our approach goes beyond installation. We focus on engineering reliability, long-term performance, and customer satisfaction through state-of-the-art technology and expert execution.
        </p>
      </section>

      {/* GREEN INFO BAR */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          background: "#2c8d06",
          color: "#fff",
        }}
      >
        <div style={infoBox}>
          <h4>Email Support</h4>
          <p>info@savorka.com</p>
        </div>

        <div style={infoBox}>
          <h4>Head Office</h4>
          <p>Technos Colony, Bhiwani</p>
        </div>

        <div style={{ ...infoBox, borderRight: "none" }}>
          <h4>Let's Talk</h4>
          <p>+91 98765 43210</p>
        </div>
      </div>

      {/* CONTACT SECTION */}
      <section style={contactSection}>

        {/* IMAGE SIDE */}
        <div style={imageWrapper}>
          <div style={imageBorder}>
            <img src={sideimg} alt="Solar House" style={imageStyle} />
          </div>
        </div>

        {/* FORM SIDE */}
        <form style={form} onSubmit={handleSubmit}>

          <div style={row}>
            <div style={field}>
              <label>Full Name:</label>
              <input style={input} placeholder="Enter your Full Name" />
            </div>

            <div style={field}>
              <label>Company Name:</label>
              <input style={input} placeholder="Enter your Company Name" />
            </div>
          </div>

          <div style={row}>
            <div style={field}>
              <label>Phone:</label>
              <input style={input} placeholder="Enter your Phone" />
            </div>

            <div style={field}>
              <label>Email ID:</label>
              <input style={input} placeholder="Enter your Email ID" />
            </div>
          </div>

          <div style={field}>
            <label>Subject:</label>
            <input style={inputFull} placeholder="Enter your Subject" />
          </div>

          <div style={field}>
            <label>Message:</label>
            <textarea style={textarea} placeholder="Enter your Message" />
          </div>

          <div style={checkboxRow}>
            <input type="checkbox" />
            <span>I agree to Savorka's Terms of Service & Policies.</span>
          </div>

          <button style={button}>Submit</button>

        </form>

      </section>

      {/* TEAM */}
<section style={teamSection}>

  <h2 style={teamTitle}>Meet our Team</h2>

  <div style={divider}></div>

  <h3 style={teamSubtitle}>
    Building Sustainable Energy Solutions for Every Sector
  </h3>

  <p style={teamDesc}>
    At Savorka Solar, our approach goes beyond installation. We focus on
    engineering reliability, long-term performance, and customer satisfaction
    through state-of-the-art technology and expert execution.
  </p>

  <div style={teamContainer}>

    {teamMembers.map((member, index) => (
<div key={index} style={teamCard}>

  <div style={cardTop}></div>

  <img src={member.img} alt={member.name} style={teamImg} />

  <h4 style={memberName}>{member.name}</h4>
  <p style={memberRole}>{member.role}</p>

</div>
    ))}

  </div>

</section>

      <main>
        <ContactFormSection />
      </main>

    </div>
  );
};

/* STYLES */

const infoBox = {
  flex: 1,
  minWidth: "220px",
  textAlign: "center",
  padding: "20px",
  borderRight: "1px solid rgba(255,255,255,0.3)",
};

const contactSection = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "clamp(20px, 5vw, 80px)",
  padding: "50px 20px",
  background: "#f3f3ed",
  flexWrap: "wrap"
};

const imageWrapper = {
  position: "relative"
};

const imageBorder = {
  // background: "linear-gradient(180deg,#9be15d,#2c8d06)",
  padding: "12px",
  borderRadius: "80px 20px 80px 20px"
};

const imageStyle = {
  width: "300px",
  height: "340px",
  // objectFit: "cover",
  borderRadius: "70px 15px 70px 15px"
};

const form = {
  width: "clamp(280px, 90vw, 420px)"
};

const row = {
  display: "flex",
  gap: "clamp(10px, 3vw, 20px)",
  marginBottom: "15px",
  flexWrap: "wrap"
};

const field = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  fontSize: "12px"
};

const input = {
  padding: "5px",
  border: "1px solid #ccc",
  borderRadius: "6px",
  marginTop: "4px"
};

const inputFull = {
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "6px",
  marginTop: "4px"
};

const textarea = {
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "6px",
  minHeight: "90px",
  marginTop: "4px"
};

const checkboxRow = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  fontSize: "12px",
  margin: "10px 0 20px"
};

const button = {
  background: "#2c8d06",
  color: "#fff",
  border: "none",
  padding: "5px 15px",
  borderRadius: "4px",
  cursor: "pointer",
};

const teamContainer = {
  display: "flex",
  justifyContent: "center",
  gap: "30px",
  marginTop: "40px",
  flexWrap: "wrap",
};

const teamCard = {
  background: "#fff",
  borderRadius: "12px",
  width: "200px",
  hieght: "280px",
  boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
  textAlign: "center",
  overflow: "hidden",
  paddingBottom: "20px"
};

const teamImg = {
  width: "120px",
  height: "120px",
  borderRadius: "50%",
  background: "#ddd",
  objectFit: "cover",
  display: "block",
  margin: "-45px auto 10px", 
  border: "4px solid #fff"
};
// const teamImg = {
//   width: "90px",
//   height: "90px",
//   borderRadius: "50%",
//   border: "4px solid white",
//   marginTop: "-45px",   // 
//   objectFit: "cover"
// }

const teamSection = {
  textAlign: "center",
  padding: "60px 20px",
  background: "#f6f6f0"
};

const teamTitle = {
  color: "#2c8d06",
  fontSize: "clamp(24px, 5vw, 35px)",
  fontWeight: "500",
  marginBottom: "10px"
};

const divider = {
  width: "clamp(200px, 80vw, 500px)",
  height: "1px",
  background: "#9c9f9c",
  margin: "10px auto 20px",
  borderRadius: "2px"
};

const teamSubtitle = {
  fontSize: "clamp(16px, 3vw, 22px)",
  fontWeight: "500",
  marginBottom: "10px",
  color: "#2e8033"
};

const teamDesc = {
  maxWidth: "700px",
  margin: "0 auto",
  color: "#555",
  fontSize: "14px"
};

const cardTop = {
  height: "80px",
  background: "#6fbe4f"
};

const memberName = {
  marginTop: "10px",
  fontWeight: "600",
  color: "#0c7812"
};

const memberRole = {
  color: "#777",
  fontSize: "14px"
};


export default Contact;