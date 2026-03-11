import React, { useState } from "react";
import solarservices from "../assets/solarservice.png";
import sideimg from "../assets/banner.png";
import ContactFormSection from "../components/ContactFormSection";

const Contact = () => {
  const [isAgreed, setIsAgreed] = useState(false); // Track checkbox state

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isAgreed) return; // Extra safety
    alert("Form submitted!");
  };

  const teamMembers = [
    {
      name: "Rishabh Sharma",
      role: "Sales Director",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Priya Kaushik",
      role: "Finance & HR Coordinator",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Shivani Tyagi",
      role: "Senior Accountant",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
    },
  ];

  return (
    <div className="font-sans bg-[#f6f6f0]">

      {/* HERO */}
      <div className="w-full min-h-[250px] overflow-hidden">
        <img
          src={solarservices}
          alt="Solar Services"
          className="w-full h-auto min-h-[250px] object-cover"
        />
      </div>

      {/* ABOUT */}
      <section className="text-center px-5 py-8">
        <h2 className="text-[#0c7812] font-medium text-[clamp(24px,5vw,40px)] leading-tight mb-3">
          About Us
        </h2>
        <h3 className="text-[#117816] font-medium text-[clamp(18px,4vw,30px)] mb-4">
          Building Sustainable Energy Solutions for Every Sector
        </h3>
        <p className="max-w-[750px] mx-auto text-[#252424]">
          At Savorka Solar, our approach goes beyond installation. We focus on engineering reliability, long-term performance, and customer satisfaction through state-of-the-art technology and expert execution.
        </p>
      </section>

      {/* GREEN INFO BAR */}
      <div className="flex flex-wrap justify-center text-white">
        <div className="flex-1 min-w-[220px] text-center p-5 border-r border-white/30 bg-gradient-to-b from-[#6fbe4f] via-[#2c8d06] to-[#1f5a03]">
          <h4>Email Support</h4>
          <p>info@savorka.com</p>
        </div>
        <div className="flex-1 min-w-[220px] text-center p-5 border-r border-white/30 bg-gradient-to-b from-[#6fbe4f] via-[#2c8d06] to-[#1f5a03]">
          <h4>Head Office</h4>
          <p>Technos Colony, Bhiwani</p>
        </div>
        <div className="flex-1 min-w-[220px] text-center p-5 bg-gradient-to-b from-[#6fbe4f] via-[#2c8d06] to-[#1f5a03]">
          <h4>Let's Talk</h4>
          <p>+91 98765 43210</p>
        </div>
      </div>

      {/* CONTACT SECTION */}
      <section className="flex flex-wrap justify-center items-start gap-[clamp(20px,5vw,80px)] px-5 py-12 bg-[#f3f3ed]">

        {/* IMAGE SIDE */}
        <div className="relative">
          <div className="p-3 rounded-[80px_20px_80px_20px]">
            <img
              src={sideimg}
              alt="Solar House"
              className="w-[300px] h-[340px] rounded-[70px_15px_70px_15px]"
            />
          </div>
        </div>

        {/* FORM SIDE */}
        <form
          className="w-[clamp(280px,90vw,420px)]"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-wrap gap-[clamp(10px,3vw,20px)] mb-4">
            <div className="flex-1 flex flex-col text-[12px]">
              <label>Full Name:</label>
              <input
                className="mt-1 p-1 border border-[#ccc] rounded"
                placeholder="Enter your Full Name"
              />
            </div>
            <div className="flex-1 flex flex-col text-[12px]">
              <label>Company Name:</label>
              <input
                className="mt-1 p-1 border border-[#ccc] rounded"
                placeholder="Enter your Company Name"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-[clamp(10px,3vw,20px)] mb-4">
            <div className="flex-1 flex flex-col text-[12px]">
              <label>Phone:</label>
              <input
                className="mt-1 p-1 border border-[#ccc] rounded"
                placeholder="Enter your Phone"
              />
            </div>
            <div className="flex-1 flex flex-col text-[12px]">
              <label>Email ID:</label>
              <input
                className="mt-1 p-1 border border-[#ccc] rounded"
                placeholder="Enter your Email ID"
              />
            </div>
          </div>

          <div className="flex flex-col mb-4">
            <label>Subject:</label>
            <input
              className="mt-1 p-2 border border-[#ccc] rounded"
              placeholder="Enter your Subject"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label>Message:</label>
            <textarea
              className="mt-1 p-2 border border-[#ccc] rounded min-h-[90px]"
              placeholder="Enter your Message"
            />
          </div>

          {/* AGREEMENT CHECKBOX */}
          <div className="flex items-center gap-2 text-[12px] mb-5">
            <input
              type="checkbox"
              checked={isAgreed}
              onChange={(e) => setIsAgreed(e.target.checked)}
              id="agree"
            />
            <label htmlFor="agree" className="cursor-pointer">
              I agree to Savorka's Terms of Service & Policies.
            </label>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={!isAgreed}
            className={`bg-[#2c8d06] text-white py-2 px-4 rounded transition-all duration-200
              ${!isAgreed ? "cursor-not-allowed opacity-50 blur-s" : "cursor-pointer opacity-100 blur-0"}`}
          >
            Submit
          </button>
        </form>
      </section>

      {/* TEAM SECTION */}
      <section className="text-center py-16 bg-[#f6f6f0] px-5">
        <h2 className="text-[#2c8d06] font-medium text-[clamp(24px,5vw,35px)] mb-2">
          Meet our Team
        </h2>
        <div className="w-[clamp(200px,80vw,500px)] h-[1px] bg-[#9c9f9c] mx-auto rounded mb-4"></div>
        <h3 className="text-[#2e8033] font-medium text-[clamp(16px,3vw,22px)] mb-2">
          Building Sustainable Energy Solutions for Every Sector
        </h3>
        <p className="max-w-[700px] mx-auto text-[#555] text-[14px] mb-10">
          At Savorka Solar, our approach goes beyond installation. We focus on engineering reliability, long-term performance, and customer satisfaction through state-of-the-art technology and expert execution.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg w-52 overflow-hidden pb-5"
            >
              <div className="h-20 bg-[#6fbe4f]"></div>
              <img
                src={member.img}
                alt={member.name}
                className="w-28 h-28 rounded-full border-4 border-white -mt-14 mx-auto object-cover"
              />
              <h4 className="mt-2 font-semibold text-[#0c7812]">{member.name}</h4>
              <p className="text-[#777] text-[14px]">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

    <section className="px-16 py-12">
      <ContactFormSection />
    </section>
    </div>
  );
};

export default Contact;