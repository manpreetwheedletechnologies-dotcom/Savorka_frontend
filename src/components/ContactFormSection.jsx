import React, { useEffect, useState } from "react";
import ContackLayer from "../assets/Layer.png";
import API_BASE_URL from "../config/api";

const TABS = ["RESIDENTIAL", "HOUSING SOCIETY", "COMMERCIAL"];

const BILL_OPTIONS = [
  "Less than ₹ 1500",
  "₹ 1500 - ₹ 2500",
  "₹ 2500 - ₹ 4000",
  "₹ 4000 - ₹ 8000",
  "More than ₹ 8000",
];

const DESIGNATION_OPTIONS = [
  "Management Committee",
  "Resident",
  "Builder",
  "Facility Manager",
];

const initialFormState = {
  name: "",
  whatsapp: "",
  pincode: "",
  companyName: "",
  city: "",
  commercialBill: "",
};

const initialErrorsState = {
  name: "",
  whatsapp: "",
  pincode: "",
  companyName: "",
  city: "",
  commercialBill: "",
  societyName: "",
  monthlyBill: "",
  agmStatus: "",
  selectedBill: "",
  selectedDesignation: "",
  agreed: "",
};

// ─── API endpoint map per tab ─────────────────────────────────────────────────
const API_ENDPOINTS = {
  0: "/residential",
  1: "/housingsociety",
  2: "/commercial",
};

// ─── Build payload per tab ────────────────────────────────────────────────────
const buildPayload = ({ activeTab, form, selectedBill, selectedDesignation, societyName, monthlyBill, agmStatus, agreed }) => {
  if (activeTab === 0) {
    return {
      fullname: form.name.trim(),
      whatsappnumber: form.whatsapp.trim(),
      pincode: form.pincode.trim(),
      bill: BILL_OPTIONS[selectedBill],
      agree: agreed,
    };
  }

  if (activeTab === 1) {
    return {
      fullname: form.name.trim(),
      whatsapp: form.whatsapp.trim(),
      pincode: form.pincode.trim(),
      societyName: societyName.trim(),
      bill: monthlyBill,
      agmStatus: agmStatus,
      designation: DESIGNATION_OPTIONS[selectedDesignation],
      agree: agreed,
    };
  }

  if (activeTab === 2) {
    return {
      fullname: form.name.trim(),
      whatsapp: form.whatsapp.trim(),
      pincode: form.pincode.trim(),
      companyName: form.companyName.trim(),
      city: form.city.trim(),
      bill: form.commercialBill.trim(),
      agree: agreed,
    };
  }
};

// ─────────────────────────────────────────────────────────────────────────────

const ContactFormSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedBill, setSelectedBill] = useState(null);
  const [agreed, setAgreed] = useState(true);
  const [selectedDesignation, setSelectedDesignation] = useState(null);
  const [societyName, setSocietyName] = useState("");
  const [monthlyBill, setMonthlyBill] = useState("");
  const [agmStatus, setAgmStatus] = useState("");
  const [responseMsg, setResponseMsg] = useState("");
  const [msgType, setMsgType] = useState(""); // "success" | "error"
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState(initialFormState);
  const [errors, setErrors] = useState(initialErrorsState);
  const [touched, setTouched] = useState({});

  useEffect(() => {
    if (!responseMsg) return;
    const timer = setTimeout(() => {
      setResponseMsg("");
      setMsgType("");
    }, 4000);
    return () => clearTimeout(timer);
  }, [responseMsg]);

  const clearGlobalMessage = () => {
    if (responseMsg) {
      setResponseMsg("");
      setMsgType("");
    }
  };

  const handleFieldChange = (field, value) => {
    clearGlobalMessage();
    let updatedValue = value;
    if (field === "whatsapp") updatedValue = value.replace(/\D/g, "").slice(0, 10);
    if (field === "pincode")  updatedValue = value.replace(/\D/g, "").slice(0, 6);

    setForm((prev) => ({ ...prev, [field]: updatedValue }));
    if (touched[field]) {
      setErrors((prev) => ({ ...prev, [field]: validateSingleField(field, updatedValue) }));
    }
  };

  const handleBlur = (field, value) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({ ...prev, [field]: validateSingleField(field, value) }));
  };

  const validateSingleField = (field, value) => {
    const trimmed = typeof value === "string" ? value.trim() : value;

    switch (field) {
      case "name":
        if (!trimmed) return "Full Name is required.";
        if (trimmed.length < 2) return "Full Name must be at least 2 characters.";
        return "";

      case "whatsapp":
        if (!trimmed) return "WhatsApp Number is required.";
        if (!/^[6-9]\d{9}$/.test(trimmed)) return "Enter a valid 10-digit WhatsApp number.";
        return "";

      case "pincode":
        if (!trimmed) return "Pincode is required.";
        if (!/^\d{6}$/.test(trimmed)) return "Enter a valid 6-digit pincode.";
        return "";

      case "companyName":
        if (activeTab === 2) {
          if (!trimmed) return "Company Name is required.";
          if (trimmed.length < 2) return "Company Name must be at least 2 characters.";
        }
        return "";

      case "city":
        if (activeTab === 2) {
          if (!trimmed) return "City is required.";
          if (trimmed.length < 2) return "Enter a valid city name.";
        }
        return "";

      case "commercialBill":
        if (activeTab === 2 && !trimmed) return "Monthly Bill is required.";
        return "";

      case "societyName":
        if (activeTab === 1) {
          if (!trimmed) return "Society Name is required.";
          if (trimmed.length < 2) return "Society Name must be at least 2 characters.";
        }
        return "";

      case "monthlyBill":
        if (activeTab === 1 && !trimmed) return "Please select Monthly Bill.";
        return "";

      case "agmStatus":
        if (activeTab === 1 && !trimmed) return "Please select AGM Status.";
        return "";

      case "selectedBill":
        if (activeTab === 0 && selectedBill === null) return "Please select your Average Monthly Bill.";
        return "";

      case "selectedDesignation":
        if (activeTab === 1 && selectedDesignation === null) return "Please select your Designation.";
        return "";

      case "agreed":
        if (!agreed) return "Please agree to the Terms of Service & Policies.";
        return "";

      default:
        return "";
    }
  };

  const validateForm = () => {
    const newErrors = {
      name:                validateSingleField("name", form.name),
      whatsapp:            validateSingleField("whatsapp", form.whatsapp),
      pincode:             validateSingleField("pincode", form.pincode),
      companyName:         validateSingleField("companyName", form.companyName),
      city:                validateSingleField("city", form.city),
      commercialBill:      validateSingleField("commercialBill", form.commercialBill),
      societyName:         validateSingleField("societyName", societyName),
      monthlyBill:         validateSingleField("monthlyBill", monthlyBill),
      agmStatus:           validateSingleField("agmStatus", agmStatus),
      selectedBill:        validateSingleField("selectedBill"),
      selectedDesignation: validateSingleField("selectedDesignation"),
      agreed:              validateSingleField("agreed"),
    };

    setErrors(newErrors);
    setTouched({
      name: true, whatsapp: true, pincode: true, companyName: true,
      city: true, commercialBill: true, societyName: true, monthlyBill: true,
      agmStatus: true, selectedBill: true, selectedDesignation: true, agreed: true,
    });

    return !Object.values(newErrors).some(Boolean);
  };

  const resetForm = () => {
    setForm(initialFormState);
    setSelectedBill(null);
    setSelectedDesignation(null);
    setSocietyName("");
    setMonthlyBill("");
    setAgmStatus("");
    setErrors(initialErrorsState);
    setTouched({});
    setAgreed(true);
  };

  const handleTabChange = (i) => {
    clearGlobalMessage();
    setActiveTab(i);
    setSelectedBill(null);
    setSelectedDesignation(null);
    setErrors(initialErrorsState);
    setTouched({});
  };

  const getInputClass = (fieldName, baseClass = "") => {
    const hasError = touched[fieldName] && errors[fieldName];
    return `${baseClass} ${
      hasError
        ? "border-red-500 focus:border-red-500"
        : "border-gray-200 focus:border-green-500"
    }`;
  };

  // ─── Submit ───────────────────────────────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();
    clearGlobalMessage();

    if (!validateForm()) {
      setResponseMsg("Please correct the highlighted fields and try again.");
      setMsgType("error");
      return;
    }

    try {
      setLoading(true);

      const endpoint = `${API_BASE_URL}${API_ENDPOINTS[activeTab]}`;
      const payload  = buildPayload({
        activeTab, form, selectedBill, selectedDesignation,
        societyName, monthlyBill, agmStatus, agreed,
      });

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      let data = null;
      try { data = await res.json(); } catch { data = null; }

      if (!res.ok) {
        throw new Error(data?.msg || data?.error || "Failed to submit form. Please try again.");
      }

      setResponseMsg(data?.msg || "Thank you! Our team will contact you shortly.");
      setMsgType("success");
      resetForm();
    } catch (error) {
      setResponseMsg(
        error?.message || "Something went wrong while submitting the form. Please try again."
      );
      setMsgType("error");
    } finally {
      setLoading(false);
    }
  };

  // ─── Render ───────────────────────────────────────────────────────────────
  return (
    <section
      id="contact"
      className="py-12 px-4 md:px-16"
      style={{ background: "#F6FCD0" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">

        {/* LEFT SIDE */}
        <div className="flex-1">
          <h2 className="font-heading font-black text-dark text-base md:text-xl leading-tight mb-4">
            Let the Sun power your future,
            <br />
            Switch to Solar with complete confidence.
          </h2>

          <div className="my-6 hidden sm:block">
            <img
              src={ContackLayer}
              alt="Solar energy"
              className="w-full max-w-xs rounded-2xl object-cover"
              style={{ height: "200px" }}
            />
          </div>

          <p className="font-heading font-bold text-primary text-sm md:text-base mb-2">
            Please fill the form and we will get in touch with you
          </p>

          <p className="text-gray-600 text-sm">
            Take the first step toward clean, cost-saving solar energy with a
            free consultation from SAVORKA.
          </p>
        </div>

        {/* Divider */}
        <div className="hidden md:block" style={{ width: "5px", backgroundColor: "#ffffff" }} />

        {/* RIGHT SIDE FORM */}
        <div
          className="flex-1 rounded-2xl md:p-8"
          style={{ background: "#F6FCD0", border: "1px solid #eafcd9" }}
        >
          {/* Tabs */}
          <div className="flex rounded-xl overflow-hidden mb-6" style={{ border: "1.5px solid #ccc" }}>
            {TABS.map((tab, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleTabChange(i)}
                className={`flex-1 py-2 text-xs font-heading font-bold transition
                  ${activeTab === i ? "text-green-600" : "text-gray-600 hover:bg-gray-50"}`}
              >
                {tab}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>

            {/* ── RESIDENTIAL ─────────────────────────────────────── */}
            {activeTab === 0 && (
              <>
                {/* Name + Pincode */}
                <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-gray-700">Full Name *</label>
                    <input
                      type="text"
                      placeholder="Enter Full Name"
                      value={form.name}
                      onChange={(e) => handleFieldChange("name", e.target.value)}
                      onBlur={(e) => handleBlur("name", e.target.value)}
                      className={getInputClass("name", "w-full mt-1 px-3 py-2 rounded-lg text-xs md:text-sm bg-white border outline-none")}
                    />
                    {touched.name && errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-700">Pincode *</label>
                    <input
                      type="text"
                      placeholder="Enter Pincode"
                      value={form.pincode}
                      onChange={(e) => handleFieldChange("pincode", e.target.value)}
                      onBlur={(e) => handleBlur("pincode", e.target.value)}
                      className={getInputClass("pincode", "w-full mt-1 px-3 py-2 rounded-lg text-xs md:text-sm bg-white border outline-none")}
                    />
                    {touched.pincode && errors.pincode && <p className="mt-1 text-xs text-red-600">{errors.pincode}</p>}
                  </div>
                </div>

                {/* WhatsApp */}
                <div>
                  <label className="text-xs font-semibold text-gray-700">WhatsApp Number *</label>
                  <input
                    type="tel"
                    placeholder="Enter your WhatsApp Number"
                    value={form.whatsapp}
                    onChange={(e) => handleFieldChange("whatsapp", e.target.value)}
                    onBlur={(e) => handleBlur("whatsapp", e.target.value)}
                    className={getInputClass("whatsapp", "w-full mt-1 px-3 py-2 rounded-lg text-xs md:text-sm bg-white border outline-none")}
                  />
                  {touched.whatsapp && errors.whatsapp && <p className="mt-1 text-xs text-red-600">{errors.whatsapp}</p>}
                </div>

                {/* Bill chips */}
                <div>
                  <label className="text-xs font-semibold text-gray-700 mb-2 block">Average Monthly Bill *</label>
                  <div className="grid grid-cols-2 gap-2">
                    {BILL_OPTIONS.map((opt, i) => (
                      <button
                        type="button"
                        key={i}
                        onClick={() => {
                          clearGlobalMessage();
                          setSelectedBill(i);
                          if (touched.selectedBill) setErrors((prev) => ({ ...prev, selectedBill: "" }));
                        }}
                        className={`px-3 py-2 rounded-lg text-xs border font-medium transition
                          ${selectedBill === i ? "bg-primary text-white border-primary" : "bg-white text-gray-600 border-gray-200"}`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                  {touched.selectedBill && errors.selectedBill && (
                    <p className="mt-2 text-xs text-red-600">{errors.selectedBill}</p>
                  )}
                </div>
              </>
            )}

            {/* ── HOUSING SOCIETY ──────────────────────────────────── */}
            {activeTab === 1 && (
              <>
                {/* Name + Society */}
                <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-gray-700">Full Name *</label>
                    <input
                      type="text"
                      placeholder="Enter Full Name"
                      value={form.name}
                      onChange={(e) => handleFieldChange("name", e.target.value)}
                      onBlur={(e) => handleBlur("name", e.target.value)}
                      className={getInputClass("name", "w-full mt-1 px-3 py-2 rounded-lg text-xs md:text-sm bg-white border outline-none")}
                    />
                    {touched.name && errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-700">Society Name *</label>
                    <input
                      type="text"
                      placeholder="Enter Society Name"
                      value={societyName}
                      onChange={(e) => {
                        clearGlobalMessage();
                        setSocietyName(e.target.value);
                        if (touched.societyName) setErrors((prev) => ({ ...prev, societyName: validateSingleField("societyName", e.target.value) }));
                      }}
                      onBlur={(e) => {
                        setTouched((prev) => ({ ...prev, societyName: true }));
                        setErrors((prev) => ({ ...prev, societyName: validateSingleField("societyName", e.target.value) }));
                      }}
                      className={getInputClass("societyName", "w-full mt-1 px-3 py-2 rounded-lg bg-white border outline-none")}
                    />
                    {touched.societyName && errors.societyName && <p className="mt-1 text-xs text-red-600">{errors.societyName}</p>}
                  </div>
                </div>

                {/* Pincode + WhatsApp */}
                <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-gray-700">Pincode *</label>
                    <input
                      type="text"
                      placeholder="Enter Pincode"
                      value={form.pincode}
                      onChange={(e) => handleFieldChange("pincode", e.target.value)}
                      onBlur={(e) => handleBlur("pincode", e.target.value)}
                      className={getInputClass("pincode", "w-full mt-1 px-3 py-2 rounded-lg text-xs md:text-sm bg-white border outline-none")}
                    />
                    {touched.pincode && errors.pincode && <p className="mt-1 text-xs text-red-600">{errors.pincode}</p>}
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-700">WhatsApp *</label>
                    <input
                      type="tel"
                      placeholder="WhatsApp Number"
                      value={form.whatsapp}
                      onChange={(e) => handleFieldChange("whatsapp", e.target.value)}
                      onBlur={(e) => handleBlur("whatsapp", e.target.value)}
                      className={getInputClass("whatsapp", "w-full mt-1 px-3 py-2 rounded-lg text-xs md:text-sm bg-white border outline-none")}
                    />
                    {touched.whatsapp && errors.whatsapp && <p className="mt-1 text-xs text-red-600">{errors.whatsapp}</p>}
                  </div>
                </div>

                {/* Monthly Bill + AGM Status */}
                <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-gray-700">Monthly Bill *</label>
                    <select
                      value={monthlyBill}
                      onChange={(e) => {
                        clearGlobalMessage();
                        setMonthlyBill(e.target.value);
                        if (touched.monthlyBill) setErrors((prev) => ({ ...prev, monthlyBill: validateSingleField("monthlyBill", e.target.value) }));
                      }}
                      onBlur={(e) => {
                        setTouched((prev) => ({ ...prev, monthlyBill: true }));
                        setErrors((prev) => ({ ...prev, monthlyBill: validateSingleField("monthlyBill", e.target.value) }));
                      }}
                      className={getInputClass("monthlyBill", "w-full mt-1 px-3 py-2 rounded-lg bg-white border outline-none")}
                    >
                      <option value="">Select</option>
                      <option value="0 - 50,000">0 - 50,000</option>
                      <option value="50,000 - 1,00,000">50,000 - 1,00,000</option>
                      <option value="1,00,000+">1,00,000+</option>
                    </select>
                    {touched.monthlyBill && errors.monthlyBill && <p className="mt-1 text-xs text-red-600">{errors.monthlyBill}</p>}
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-700">AGM Status *</label>
                    <select
                      value={agmStatus}
                      onChange={(e) => {
                        clearGlobalMessage();
                        setAgmStatus(e.target.value);
                        if (touched.agmStatus) setErrors((prev) => ({ ...prev, agmStatus: validateSingleField("agmStatus", e.target.value) }));
                      }}
                      onBlur={(e) => {
                        setTouched((prev) => ({ ...prev, agmStatus: true }));
                        setErrors((prev) => ({ ...prev, agmStatus: validateSingleField("agmStatus", e.target.value) }));
                      }}
                      className={getInputClass("agmStatus", "w-full mt-1 px-3 py-2 rounded-lg bg-white border outline-none")}
                    >
                      <option value="">Select</option>
                      <option value="AGM approved">AGM approved</option>
                      <option value="No AGM approval yet">No AGM approval yet</option>
                      <option value="Need help for AGM">Need help for AGM</option>
                    </select>
                    {touched.agmStatus && errors.agmStatus && <p className="mt-1 text-xs text-red-600">{errors.agmStatus}</p>}
                  </div>
                </div>

                {/* Designation chips */}
                <div>
                  <label className="text-xs font-semibold text-gray-700 mb-2 block">Your Designation *</label>
                  <div className="grid grid-cols-2 gap-2">
                    {DESIGNATION_OPTIONS.map((role, i) => (
                      <button
                        type="button"
                        key={i}
                        onClick={() => {
                          clearGlobalMessage();
                          setSelectedDesignation(i);
                          if (touched.selectedDesignation) setErrors((prev) => ({ ...prev, selectedDesignation: "" }));
                        }}
                        className={`px-3 py-2 rounded-lg text-xs border font-medium transition
                          ${selectedDesignation === i ? "bg-primary text-white border-primary" : "bg-white text-gray-600 border-gray-200"}`}
                      >
                        {role}
                      </button>
                    ))}
                  </div>
                  {touched.selectedDesignation && errors.selectedDesignation && (
                    <p className="mt-2 text-xs text-red-600">{errors.selectedDesignation}</p>
                  )}
                </div>
              </>
            )}

            {/* ── COMMERCIAL ───────────────────────────────────────── */}
            {activeTab === 2 && (
              <>
                {/* Name + Company */}
                <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-gray-700">Full Name *</label>
                    <input
                      type="text"
                      placeholder="Enter Full Name"
                      value={form.name}
                      onChange={(e) => handleFieldChange("name", e.target.value)}
                      onBlur={(e) => handleBlur("name", e.target.value)}
                      className={getInputClass("name", "w-full mt-1 px-3 py-2 rounded-lg text-xs md:text-sm bg-white border outline-none")}
                    />
                    {touched.name && errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-700">Company Name *</label>
                    <input
                      type="text"
                      placeholder="Enter Company Name"
                      value={form.companyName}
                      onChange={(e) => handleFieldChange("companyName", e.target.value)}
                      onBlur={(e) => handleBlur("companyName", e.target.value)}
                      className={getInputClass("companyName", "w-full mt-1 px-3 py-2 rounded-lg bg-white border outline-none")}
                    />
                    {touched.companyName && errors.companyName && <p className="mt-1 text-xs text-red-600">{errors.companyName}</p>}
                  </div>
                </div>

                {/* City + Pincode */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-gray-700">City *</label>
                    <input
                      type="text"
                      placeholder="Enter City"
                      value={form.city}
                      onChange={(e) => handleFieldChange("city", e.target.value)}
                      onBlur={(e) => handleBlur("city", e.target.value)}
                      className={getInputClass("city", "w-full mt-1 px-3 py-2 rounded-lg bg-white border outline-none")}
                    />
                    {touched.city && errors.city && <p className="mt-1 text-xs text-red-600">{errors.city}</p>}
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-700">Pincode *</label>
                    <input
                      type="text"
                      placeholder="Enter Pincode"
                      value={form.pincode}
                      onChange={(e) => handleFieldChange("pincode", e.target.value)}
                      onBlur={(e) => handleBlur("pincode", e.target.value)}
                      className={getInputClass("pincode", "w-full mt-1 px-3 py-2 rounded-lg text-xs md:text-sm bg-white border outline-none")}
                    />
                    {touched.pincode && errors.pincode && <p className="mt-1 text-xs text-red-600">{errors.pincode}</p>}
                  </div>
                </div>

                {/* WhatsApp + Monthly Bill */}
                <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-gray-700">WhatsApp *</label>
                    <input
                      type="tel"
                      placeholder="WhatsApp Number"
                      value={form.whatsapp}
                      onChange={(e) => handleFieldChange("whatsapp", e.target.value)}
                      onBlur={(e) => handleBlur("whatsapp", e.target.value)}
                      className={getInputClass("whatsapp", "w-full mt-1 px-3 py-2 rounded-lg text-xs md:text-sm bg-white border outline-none")}
                    />
                    {touched.whatsapp && errors.whatsapp && <p className="mt-1 text-xs text-red-600">{errors.whatsapp}</p>}
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-700">Monthly Bill *</label>
                    <input
                      type="text"
                      placeholder="Avg Monthly Bill"
                      value={form.commercialBill}
                      onChange={(e) => handleFieldChange("commercialBill", e.target.value)}
                      onBlur={(e) => handleBlur("commercialBill", e.target.value)}
                      className={getInputClass("commercialBill", "w-full mt-1 px-3 py-2 rounded-lg bg-white border outline-none")}
                    />
                    {touched.commercialBill && errors.commercialBill && <p className="mt-1 text-xs text-red-600">{errors.commercialBill}</p>}
                  </div>
                </div>
              </>
            )}

            {/* ── TERMS ──────────────────────────────────────────── */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => {
                    clearGlobalMessage();
                    setAgreed(e.target.checked);
                    setTouched((prev) => ({ ...prev, agreed: true }));
                    setErrors((prev) => ({
                      ...prev,
                      agreed: e.target.checked ? "" : "Please agree to the Terms of Service & Policies.",
                    }));
                  }}
                  className="w-4 h-4 accent-navy"
                />
                <span className="text-xs text-gray-600">
                  I agree to Savorka&apos;s Terms of Service & Policies.
                </span>
              </div>
              {touched.agreed && errors.agreed && <p className="mt-1 text-xs text-red-600">{errors.agreed}</p>}
            </div>

            {/* ── RESPONSE MESSAGE ───────────────────────────────── */}
            {responseMsg && (
              <div
                className={`text-sm font-medium px-4 py-2 rounded-lg ${
                  msgType === "success"
                    ? "bg-green-100 text-green-700 border border-green-300"
                    : "bg-red-100 text-red-700 border border-red-300"
                }`}
              >
                {responseMsg}
              </div>
            )}

            {/* ── SUBMIT ─────────────────────────────────────────── */}
            <button
              type="submit"
              disabled={loading}
              className="bg-navy text-white px-8 py-2 rounded-lg text-sm font-bold hover:bg-navy-light disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting..." : "Submit Details"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;