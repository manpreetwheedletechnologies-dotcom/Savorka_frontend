import React, { useMemo, useState, useEffect, useRef } from "react";
import solarservices from "../assets/solarservice.jpeg";
import rishabh from "../assets/rishab.png";
import arpit from "../assets/Arpit Chaudhary (Sales Director-Residential and C&I).jpeg";
import priya from "../assets/priya.png";
import sivangi from "../assets/sivangi.png";
import sideimg from "../assets/banner.png";
import HeroImageSection from "../components/HeroImageSection";
import Anil from "../assets/Anil Kumar Pal (Sr. Design Manager).jpeg";
import Yash from "../assets/Yash Tripathi (Production Director).jpeg";
import Sumit from "../assets/Sumit Kumar ( Project Manager).jpeg";
import Tripti from "../assets/Tripti Yadav (Assistant Project Manager).jpeg";
import Vanshika from "../assets/Vanshika Rana ( HR & Admin Trainee).jpeg";
import shivam from "../assets/shivm.jpg"
import API_BASE_URL from "../config/api";

const initialFormData = {
  fullName: "",
  company: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
};

const ContactPage = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observers = cardRefs.current.map((card, i) => {
      if (!card) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            card.style.animationDelay = `${i * 80}ms`;
            card.classList.add("animate-card");
            observer.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      observer.observe(card);
      return observer;
    });
    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  const [isAgreed, setIsAgreed] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", text: "" });

  const teamMembers = [
    { name: "Rishabh Sharma", role: "Managing Director", img: rishabh },
    { name: "Arpit Chaudhary", role: "Sales Director-Residential and C&I", img: arpit },
    { name: "Priya Kaushik", role: "Finance & HR Coordinator", img: priya },
    { name: "Shivani Tyagi", role: "Accounting Manger", img: sivangi },
    { name: "Yash Tripathi", role: "Production Director", img: Yash },
    { name: "Anil Kumar Pal", role: "Sr. Design Engineer", img: Anil },
    { name: "Shivam Gautam", role: "Project Manager", img: shivam },
    { name: "Sumit Kumar", role: "Project Manager", img: Sumit },
    { name: "Tripti Yadav", role: "Assistant Project Manager", img: Tripti },
    { name: "Vanshika Rana", role: "HR & Admin Manager", img: Vanshika },
  ];

  const validateField = (name, value) => {
    const trimmedValue = typeof value === "string" ? value.trim() : value;
    switch (name) {
      case "fullName":
        if (!trimmedValue) return "Full name is required.";
        if (trimmedValue.length < 2) return "Full name must be at least 2 characters.";
        if (!/^[a-zA-Z\s.'-]+$/.test(trimmedValue)) return "Please enter a valid full name.";
        return "";
      case "company":
        if (!trimmedValue) return "Company name is required.";
        if (trimmedValue.length < 2) return "Company name must be at least 2 characters.";
        return "";
      case "phone":
        if (!trimmedValue) return "Phone number is required.";
        if (!/^[6-9]\d{9}$/.test(trimmedValue)) return "Please enter a valid 10-digit Indian phone number.";
        return "";
      case "email":
        if (!trimmedValue) return "Email address is required.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue)) return "Please enter a valid email address.";
        return "";
      case "subject":
        if (!trimmedValue) return "Subject is required.";
        if (trimmedValue.length < 3) return "Subject must be at least 3 characters.";
        return "";
      case "message":
        if (!trimmedValue) return "Message is required.";
        if (trimmedValue.length < 10) return "Message must be at least 10 characters.";
        return "";
      case "agreement":
        if (!isAgreed) return "You must agree to Savorka's Terms of Service & Policies.";
        return "";
      default:
        return "";
    }
  };

  const validateForm = () => {
    const newErrors = {
      fullName: validateField("fullName", formData.fullName),
      company: validateField("company", formData.company),
      phone: validateField("phone", formData.phone),
      email: validateField("email", formData.email),
      subject: validateField("subject", formData.subject),
      message: validateField("message", formData.message),
      agreement: validateField("agreement"),
    };
    Object.keys(newErrors).forEach((key) => {
      if (!newErrors[key]) delete newErrors[key];
    });
    return newErrors;
  };

  const isFormComplete = useMemo(() => {
    return (
      formData.fullName.trim() &&
      formData.company.trim() &&
      formData.phone.trim() &&
      formData.email.trim() &&
      formData.subject.trim() &&
      formData.message.trim() &&
      isAgreed
    );
  }, [formData, isAgreed]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let processedValue = value;
    if (name === "phone") processedValue = value.replace(/\D/g, "").slice(0, 10);
    setFormData((prev) => ({ ...prev, [name]: processedValue }));
    setSubmitStatus({ type: "", text: "" });
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, processedValue) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleAgreementChange = (e) => {
    const checked = e.target.checked;
    setIsAgreed(checked);
    setSubmitStatus({ type: "", text: "" });
    setTouched((prev) => ({ ...prev, agreement: true }));
    setErrors((prev) => ({
      ...prev,
      agreement: checked ? "" : "You must agree to Savorka's Terms of Service & Policies.",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    setTouched({
      fullName: true,
      company: true,
      phone: true,
      email: true,
      subject: true,
      message: true,
      agreement: true,
    });
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      setSubmitStatus({
        type: "error",
        text: "Please correct the highlighted fields and try again.",
      });
      return;
    }
    try {
      setLoading(true);
      setSubmitStatus({ type: "", text: "" });
      const payload = {
        fullName: formData.fullName.trim(),
        companyName: formData.company.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim().toLowerCase(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
      };
      const res = await fetch(`${API_BASE_URL}/contact-us`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      let data = null;
      try { data = await res.json(); } catch { data = null; }
      if (!res.ok) throw new Error(data?.message || "Failed to submit your message. Please try again.");
      setSubmitStatus({
        type: "success",
        text: data?.message || "Your message has been sent successfully. Our team will contact you soon.",
      });
      setFormData(initialFormData);
      setIsAgreed(false);
      setErrors({});
      setTouched({});
    } catch (error) {
      setSubmitStatus({
        type: "error",
        text: error?.message || "Something went wrong while submitting the form. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  const getInputClass = (fieldName) => {
    const hasError = touched[fieldName] && errors[fieldName];
    return `mt-1 p-1 border rounded outline-none transition-all duration-200 ${
      hasError
        ? "border-red-500 focus:border-red-500"
        : "border-[#ccc] focus:border-[#2c8d06]"
    }`;
  };

  const getTextareaClass = (fieldName) => {
    const hasError = touched[fieldName] && errors[fieldName];
    return `mt-1 p-2 border rounded min-h-[90px] outline-none transition-all duration-200 ${
      hasError
        ? "border-red-500 focus:border-red-500"
        : "border-[#ccc] focus:border-[#2c8d06]"
    }`;
  };

  return (
    <div className="font-sans bg-white">

      {/* ── Animation Keyframes ── */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(32px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0)    scale(1);    }
        }
        .animate-card {
          animation: fadeInUp 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes avatarPop {
          0%   { transform: scale(0.6); opacity: 0; }
          70%  { transform: scale(1.1); }
          100% { transform: scale(1);   opacity: 1; }
        }
        .animate-card img {
          animation: avatarPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.25s both;
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        .card-banner-shimmer::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            105deg,
            transparent 40%,
            rgba(255,255,255,0.35) 50%,
            transparent 60%
          );
          background-size: 200% 100%;
          animation: shimmer 2.2s ease-in-out infinite;
        }
      `}</style>

      {/* ── HERO ── */}
      <HeroImageSection title="CONTACT US" heroImage={solarservices} />

      {/* ── ABOUT ── */}
      <section className="text-center px-5 py-8">
        <div className="w-[260px] sm:w-[320px] md:w-[420px] h-[2px] bg-[#d6d6d6] mx-auto mb-5"></div>
        <h3 className="text-[#117816] font-medium text-[clamp(18px,4vw,30px)] mb-4">
          Building Sustainable Energy Solutions for Every Sector
        </h3>
        <p className="max-w-[750px] mx-auto text-[#252424] text-[14px] sm:text-[15px] leading-relaxed">
          At Savorka Solar, we deliver a seamless transition to clean energy through expertly engineered,
          high-performance solar solutions. Our approach goes beyond installation, combining advanced
          technology, precision execution, and uncompromising quality standards. Every system is designed
          for long-term reliability, superior efficiency, and an exceptional customer experience.
        </p>
      </section>

      {/* ── GREEN INFO BAR ── */}
      <div className="flex flex-wrap justify-center text-white overflow-hidden">
        <div className="flex-1 min-w-[220px] text-center p-5 border-r border-white/20 bg-[#3E9800]">
          <h4 className="text-[22px] md:text-[24px] font-semibold">Email Support</h4>
          <p className="text-[15px] md:text-[16px] mt-1">info@savorka.in</p>
        </div>
        <div className="flex-1 min-w-[220px] text-center p-5 border-r border-white/20 bg-[#5BAF12]">
          <h4 className="text-[22px] md:text-[24px] font-semibold">Head Office</h4>
          <p className="text-[15px] md:text-[16px] mt-1">
            32-33, Floor 8, GM IT Park, Sector 142, Noida, UP - 201304
          </p>
        </div>
        <div className="flex-1 min-w-[220px] text-center p-5 bg-[#93CF34]">
          <h4 className="text-[22px] md:text-[24px] font-semibold">Let's Talk</h4>
          <p className="text-[15px] md:text-[16px] mt-1">+91 70177 74339</p>
        </div>
      </div>

      {/* ── CONTACT SECTION ── */}
      <section className="flex flex-wrap justify-center items-start gap-[clamp(20px,5vw,80px)] px-5 py-12 bg-white">
        {/* Image */}
        <div className="relative">
          <div className="p-3 rounded-[80px_20px_80px_20px]">
            <img
              src={sideimg}
              alt="Solar House"
              className="w-[340px] h-[400px] sm:w-[380px] sm:h-[440px] md:w-[420px] md:h-[480px]
                rounded-[70px_15px_70px_15px] object-cover"
            />
          </div>
        </div>

        {/* Form */}
        <form className="w-[clamp(280px,90vw,420px)]" onSubmit={handleSubmit} noValidate>
          <div className="flex flex-wrap gap-[clamp(10px,3vw,20px)] mb-4">
            <div className="flex-1 flex flex-col text-[12px]">
              <label>Full Name:</label>
              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                className={getInputClass("fullName")}
                placeholder="Enter your Full Name"
                autoComplete="name"
              />
              {touched.fullName && errors.fullName && (
                <p className="mt-1 text-[11px] text-red-600">{errors.fullName}</p>
              )}
            </div>
            <div className="flex-1 flex flex-col text-[12px]">
              <label>Company Name:</label>
              <input
                name="company"
                value={formData.company}
                onChange={handleChange}
                onBlur={handleBlur}
                className={getInputClass("company")}
                placeholder="Enter your Company Name"
                autoComplete="organization"
              />
              {touched.company && errors.company && (
                <p className="mt-1 text-[11px] text-red-600">{errors.company}</p>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-[clamp(10px,3vw,20px)] mb-4">
            <div className="flex-1 flex flex-col text-[12px]">
              <label>Phone:</label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                className={getInputClass("phone")}
                placeholder="Enter your Phone"
                inputMode="numeric"
                autoComplete="tel"
              />
              {touched.phone && errors.phone && (
                <p className="mt-1 text-[11px] text-red-600">{errors.phone}</p>
              )}
            </div>
            <div className="flex-1 flex flex-col text-[12px]">
              <label>Email ID:</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={getInputClass("email")}
                placeholder="Enter your Email ID"
                autoComplete="email"
              />
              {touched.email && errors.email && (
                <p className="mt-1 text-[11px] text-red-600">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col mb-4 text-[12px]">
            <label>Subject:</label>
            <input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`mt-1 p-2 ${getInputClass("subject").replace("p-1", "")}`}
              placeholder="Enter your Subject"
            />
            {touched.subject && errors.subject && (
              <p className="mt-1 text-[11px] text-red-600">{errors.subject}</p>
            )}
          </div>

          <div className="flex flex-col mb-4 text-[12px]">
            <label>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              className={getTextareaClass("message")}
              placeholder="Enter your Message"
            />
            {touched.message && errors.message && (
              <p className="mt-1 text-[11px] text-red-600">{errors.message}</p>
            )}
          </div>

          <div className="flex flex-col mb-5">
            <div className="flex items-center gap-2 text-[12px]">
              <input
                type="checkbox"
                checked={isAgreed}
                onChange={handleAgreementChange}
                id="agree"
              />
              <label htmlFor="agree">
                I agree to Savorka&apos;s Terms of Service &amp; Policies.
              </label>
            </div>
            {touched.agreement && errors.agreement && (
              <p className="mt-1 text-[11px] text-red-600">{errors.agreement}</p>
            )}
          </div>

          {submitStatus.text && (
            <div
              className={`mb-4 rounded px-3 py-2 text-[12px] leading-relaxed ${
                submitStatus.type === "success"
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : "bg-red-50 text-red-700 border border-red-200"
              }`}
            >
              {submitStatus.text}
            </div>
          )}

          <button
            type="submit"
            disabled={loading || !isFormComplete}
            className={`bg-[#2c8d06] text-white py-2 px-4 rounded transition-all duration-200 ${
              loading || !isFormComplete
                ? "cursor-not-allowed opacity-50"
                : "cursor-pointer opacity-100 hover:bg-[#256f07]"
            }`}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </section>

      {/* ── TEAM ── */}
      <section className="bg-white px-5 py-14 sm:py-16 md:py-20">
        <div className="max-w-[1100px] mx-auto">

          {/* Heading */}
          <div className="text-center mb-10 md:mb-14">
            <h2 className="font-[Manrope] font-semibold text-[#0a6f12] text-[28px] md:text-[36px] lg:text-[44px] leading-[1.2]">
              Meet our Team
            </h2>
            <div className="w-[65%] max-w-[490px] h-[2px] bg-[#d9d9d9] mx-auto mt-4 mb-5"></div>
            <h3 className="font-[Manrope] font-bold text-[#0a6f12] text-[20px] md:text-[28px] lg:text-[36px] leading-[1.25] max-w-[950px] mx-auto">
              Delivering Solar Excellence with Proven Results
            </h3>
            <p className="max-w-[820px] mx-auto mt-4 text-[#2b2b2b] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.45]">
              Over the years, Savorka Solar has successfully delivered numerous solar projects for
              businesses across diverse industries. Our growing portfolio reflects our commitment to
              quality, performance, and long-term sustainability. Through cutting-edge technology and
              strong project execution, we continue to empower businesses with reliable and efficient
              solar power solutions.
            </p>
          </div>

          {/* Cards */}
          <div>
            {/* TOP 4 — Large */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-8">
              {teamMembers.slice(0, 4).map((member, index) => (
                <div
                  key={index}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className="group opacity-0 w-[230px] sm:w-[230px] rounded-[20px] bg-white overflow-hidden
                    shadow-[10px_14px_22px_rgba(0,0,0,0.22)]
                    transition-[transform,box-shadow] duration-300 ease-out
                    hover:-translate-y-3 hover:scale-[2.02]
                    hover:shadow-[14px_20px_30px_rgba(0,0,0,0.28)]"
                >
                  <div
                    className="h-[90px] relative card-banner-shimmer"
                    style={{ background: "linear-gradient(90deg, #eef71e, #35a28b)" }}
                  >
                    <svg className="absolute bottom-[-1px] left-0 w-full" viewBox="0 0 300 36" preserveAspectRatio="none">
                      <path d="M0 0 Q150 36 300 0 L300 36 L0 36 Z" fill="white" />
                    </svg>
                  </div>
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-[100px] h-[100px] rounded-full border-4 border-white -mt-[44px]
                      mx-auto object-cover relative z-10
                      transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="px-4 pt-3 pb-6 text-center">
                    <h4 className="text-[17px] font-semibold text-gray-900 leading-snug mb-2
                      transition-colors duration-200 group-hover:text-[#35a28b]">
                      {member.name}
                    </h4>
                    <span className="text-[11px] font-medium text-[#27500A] bg-[#EAF3DE] px-3 py-1 rounded-full
                      transition-all duration-200 group-hover:bg-[#35a28b] group-hover:text-white">
                      {member.role}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            {teamMembers.length > 4 && (
              <div className="flex items-center gap-4 mb-7">
                <div className="flex-1 h-px bg-gray-200" />
                <span className="text-xs text-gray-400 uppercase tracking-widest">Team</span>
                <div className="flex-1 h-px bg-gray-200" />
              </div>
            )}

            {/* REST — Small */}
            <div className="flex flex-wrap justify-center gap-4">
              {teamMembers.slice(4).map((member, index) => (
                <div
                  key={index}
                  ref={(el) => (cardRefs.current[4 + index] = el)}
                  className="group opacity-0 w-[160px] sm:w-[170px] rounded-[16px] bg-white overflow-hidden
                    shadow-[6px_8px_16px_rgba(0,0,0,0.15)]
                    transition-[transform,box-shadow] duration-300 ease-out
                    hover:-translate-y-2 hover:scale-[1.02]
                    hover:shadow-[10px_14px_22px_rgba(0,0,0,0.22)]"
                >
                  <div
                    className="h-[68px] relative card-banner-shimmer"
                    style={{ background: "linear-gradient(90deg, #eef71e, #35a28b)" }}
                  >
                    <svg className="absolute bottom-[-1px] left-0 w-full" viewBox="0 0 300 36" preserveAspectRatio="none">
                      <path d="M0 0 Q150 36 300 0 L300 36 L0 36 Z" fill="white" />
                    </svg>
                  </div>
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-[76px] h-[76px] rounded-full border-[3px] border-white -mt-[34px]
                      mx-auto object-cover relative z-10
                      transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="px-3 pt-2 pb-5 text-center">
                    <h4 className="text-[13px] font-semibold text-gray-900 leading-snug mb-1.5
                      transition-colors duration-200 group-hover:text-[#35a28b]">
                      {member.name}
                    </h4>
                    <span className="text-[10px] font-medium text-[#27500A] bg-[#EAF3DE] px-3 py-1 rounded-full
                      transition-all duration-200 group-hover:bg-[#35a28b] group-hover:text-white">
                      {member.role}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ContactPage;