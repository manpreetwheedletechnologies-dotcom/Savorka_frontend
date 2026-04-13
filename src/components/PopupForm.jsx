import React, { useState, useEffect } from "react";
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
  "Management Committee Member",
  "Resident",
  "Builder",
  "Facility Manager",
];

const MONTHLY_BILL_OPTIONS = [
  "0 - 50,000",
  "50,000 - 1,00,000",
  "1,00,000+",
];

const AGM_STATUS_OPTIONS = [
  "We already have AGM approval",
  "We don't have an AGM approval yet",
  "We want help in preparing for our AGM",
];

const API_ENDPOINTS = {
  0: "/residential",
  1: "/housingsociety",
  2: "/commercial",
};

const initialFormState = {
  name: "",
  whatsapp: "",
  pincode: "",
  societyName: "",
  companyName: "",
  city: "",
  commercialBill: "",
};

const initialErrorsState = {
  name: "",
  whatsapp: "",
  pincode: "",
  societyName: "",
  companyName: "",
  city: "",
  commercialBill: "",
  monthlyBill: "",
  agmStatus: "",
  selectedBill: "",
  selectedDesignation: "",
  agreed: "",
};

const PopupForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [selectedBill, setSelectedBill] = useState(null);
  const [selectedDesignation, setSelectedDesignation] = useState(null);
  const [agreed, setAgreed] = useState(true);
  const [monthlyBill, setMonthlyBill] = useState("");
  const [agmStatus, setAgmStatus] = useState("");
  const [responseMsg, setResponseMsg] = useState("");
  const [msgType, setMsgType] = useState("");
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState(initialFormState);
  const [errors, setErrors] = useState(initialErrorsState);
  const [touched, setTouched] = useState({});

useEffect(() => {
  sessionStorage.removeItem("popupShown");

  const timer = setTimeout(() => {
    setIsVisible(true);
    sessionStorage.setItem("popupShown", "true");
  }, 7000);

  return () => clearTimeout(timer);
}, []);

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

  const resetForm = () => {
    setForm(initialFormState);
    setSelectedBill(null);
    setSelectedDesignation(null);
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
    setMonthlyBill("");
    setAgmStatus("");
    setErrors(initialErrorsState);
    setTouched({});
    setForm(initialFormState);
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
        if (!/^[6-9]\d{9}$/.test(trimmed))
          return "Enter a valid 10-digit WhatsApp number.";
        return "";

      case "pincode":
        if (!trimmed) return "Pincode is required.";
        if (!/^\d{6}$/.test(trimmed)) return "Enter a valid 6-digit pincode.";
        return "";

      case "societyName":
        if (activeTab === 1) {
          if (!trimmed) return "Name of Housing Society is required.";
          if (trimmed.length < 2)
            return "Housing Society name must be at least 2 characters.";
        }
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
        if (activeTab === 2 && !trimmed)
          return "Average Monthly Bill is required.";
        return "";

      case "monthlyBill":
        if (activeTab === 1 && !trimmed)
          return "Please select Monthly Electricity Bill.";
        return "";

      case "agmStatus":
        if (activeTab === 1 && !trimmed)
          return "Please select AGM Approval Status.";
        return "";

      case "selectedBill":
        if (activeTab === 0 && selectedBill === null)
          return "Please select Average Monthly Electricity Bill.";
        return "";

      case "selectedDesignation":
        if (activeTab === 1 && selectedDesignation === null)
          return "Please select your Designation in Housing Society.";
        return "";

      case "agreed":
        if (!agreed) return "Please agree to Savorka's Terms of Service & Policies.";
        return "";

      default:
        return "";
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: validateSingleField("name", form.name),
      whatsapp: validateSingleField("whatsapp", form.whatsapp),
      pincode: validateSingleField("pincode", form.pincode),
      societyName: validateSingleField("societyName", form.societyName),
      companyName: validateSingleField("companyName", form.companyName),
      city: validateSingleField("city", form.city),
      commercialBill: validateSingleField("commercialBill", form.commercialBill),
      monthlyBill: validateSingleField("monthlyBill", monthlyBill),
      agmStatus: validateSingleField("agmStatus", agmStatus),
      selectedBill: validateSingleField("selectedBill"),
      selectedDesignation: validateSingleField("selectedDesignation"),
      agreed: validateSingleField("agreed"),
    };

    setErrors(newErrors);
    setTouched({
      name: true,
      whatsapp: true,
      pincode: true,
      societyName: true,
      companyName: true,
      city: true,
      commercialBill: true,
      monthlyBill: true,
      agmStatus: true,
      selectedBill: true,
      selectedDesignation: true,
      agreed: true,
    });

    return !Object.values(newErrors).some((error) => error);
  };

  const handleFieldChange = (field, value) => {
    clearGlobalMessage();
    let updatedValue = value;
    if (field === "whatsapp") updatedValue = value.replace(/\D/g, "").slice(0, 10);
    if (field === "pincode") updatedValue = value.replace(/\D/g, "").slice(0, 6);

    setForm((prev) => ({ ...prev, [field]: updatedValue }));

    if (touched[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: validateSingleField(field, updatedValue),
      }));
    }
  };

  const handleBlur = (field, value) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({
      ...prev,
      [field]: validateSingleField(field, value),
    }));
  };

  const getInputClass = (fieldName, baseClass) => {
    const hasError = touched[fieldName] && errors[fieldName];
    return `${baseClass} ${
      hasError
        ? "border-red-500 focus:border-red-500"
        : "border-gray-200 focus:border-[#1a7a3c]"
    }`;
  };

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

      let payload = {};

      if (activeTab === 0) {
        payload = {
          fullname: form.name.trim(),
          whatsappnumber: form.whatsapp.trim(),
          pincode: form.pincode.trim(),
          bill: BILL_OPTIONS[selectedBill],
          agree: agreed,
        };
      }

      if (activeTab === 1) {
        payload = {
          fullname: form.name.trim(),
          whatsapp: form.whatsapp.trim(),
          pincode: form.pincode.trim(),
          societyName: form.societyName.trim(),
          bill: monthlyBill,
          agmStatus: agmStatus,
          designation: DESIGNATION_OPTIONS[selectedDesignation],
          agree: agreed,
        };
      }

      if (activeTab === 2) {
        payload = {
          fullname: form.name.trim(),
          whatsapp: form.whatsapp.trim(),
          pincode: form.pincode.trim(),
          companyName: form.companyName.trim(),
          city: form.city.trim(),
          bill: form.commercialBill.trim(),
          agree: agreed,
        };
      }

      const res = await fetch(`${API_BASE_URL}${API_ENDPOINTS[activeTab]}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      let data = null;
      try { data = await res.json(); } catch { data = null; }

      if (!res.ok) {
        throw new Error(
          data?.msg || data?.error || "Failed to submit form. Please try again."
        );
      }

      setResponseMsg(data?.msg || "Thank you! Our team will contact you shortly.");
      setMsgType("success");
      resetForm();
      setIsVisible(false);
    } catch (error) {
      setResponseMsg(
        error?.message ||
          "Something went wrong while submitting the form. Please try again."
      );
      setMsgType("error");
    } finally {
      setLoading(false);
    }
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={() => setIsVisible(false)}
        className="fixed inset-0 bg-black/55 backdrop-blur-sm z-[999]"
        style={{ animation: "fadeIn 0.3s ease" }}
      />

      {/* Modal */}
      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1000] w-[92%] max-w-lg bg-white rounded-2xl overflow-hidden shadow-2xl"
        style={{ animation: "slideUp 0.35s cubic-bezier(0.34,1.56,0.64,1)" }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#1a7a3c] to-[#2ea84f] px-6 pt-5 pb-4 relative">
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-3 right-4 w-7 h-7 rounded-full bg-white/20 text-white text-sm flex items-center justify-center hover:bg-white/30 transition border-none cursor-pointer"
          >
            ✕
          </button>
          <p className="text-white/80 text-[10px] uppercase tracking-widest mb-1">
            Free Consultation
          </p>
          <h2 className="text-white text-xl font-black font-heading">
            Get a Solar Quote Today
          </h2>
          <p className="text-white/75 text-xs mt-1">
            Fill in your details and our expert will reach out within 24 hours.
          </p>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto max-h-[75vh]">
          {/* Tabs */}
          <div className="flex border-b border-gray-200">
            {TABS.map((tab, i) => (
              <button
                key={i}
                onClick={() => handleTabChange(i)}
                className={`flex-1 py-2.5 text-[10px] font-bold tracking-wide border-none cursor-pointer transition-all
                  ${
                    activeTab === i
                      ? "bg-[#f0faf4] text-[#1a7a3c] border-b-2 border-[#1a7a3c]"
                      : "bg-gray-50 text-gray-500 hover:bg-gray-100"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4" noValidate>

            {/* Full Name */}
            <div>
              <label className="text-[11px] font-semibold text-gray-600 uppercase tracking-wide">
                Full Name *
              </label>
              <input
                type="text"
                placeholder="Enter your Full Name"
                value={form.name}
                onChange={(e) => handleFieldChange("name", e.target.value)}
                onBlur={(e) => handleBlur("name", e.target.value)}
                className={getInputClass(
                  "name",
                  "w-full mt-1 px-4 py-2.5 rounded-lg text-sm bg-gray-50 border outline-none focus:bg-white transition"
                )}
              />
              {touched.name && errors.name && (
                <p className="mt-1 text-xs text-red-600">{errors.name}</p>
              )}
            </div>

            {/* Housing Society Name */}
            {activeTab === 1 && (
              <div>
                <label className="text-[11px] font-semibold text-gray-600 uppercase tracking-wide">
                  Name of Housing Society *
                </label>
                <input
                  type="text"
                  placeholder="Enter Housing Society Name"
                  value={form.societyName}
                  onChange={(e) => handleFieldChange("societyName", e.target.value)}
                  onBlur={(e) => handleBlur("societyName", e.target.value)}
                  className={getInputClass(
                    "societyName",
                    "w-full mt-1 px-4 py-2.5 rounded-lg text-sm bg-gray-50 border outline-none focus:bg-white transition"
                  )}
                />
                {touched.societyName && errors.societyName && (
                  <p className="mt-1 text-xs text-red-600">{errors.societyName}</p>
                )}
              </div>
            )}

            {/* Company Name */}
            {activeTab === 2 && (
              <div>
                <label className="text-[11px] font-semibold text-gray-600 uppercase tracking-wide">
                  Company Name *
                </label>
                <input
                  type="text"
                  placeholder="Enter Company Name"
                  value={form.companyName}
                  onChange={(e) => handleFieldChange("companyName", e.target.value)}
                  onBlur={(e) => handleBlur("companyName", e.target.value)}
                  className={getInputClass(
                    "companyName",
                    "w-full mt-1 px-4 py-2.5 rounded-lg text-sm bg-gray-50 border outline-none focus:bg-white transition"
                  )}
                />
                {touched.companyName && errors.companyName && (
                  <p className="mt-1 text-xs text-red-600">{errors.companyName}</p>
                )}
              </div>
            )}

            {/* City + Pincode (Commercial) OR just Pincode */}
            {activeTab === 2 ? (
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-semibold text-gray-600 uppercase tracking-wide">
                    City *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter City"
                    value={form.city}
                    onChange={(e) => handleFieldChange("city", e.target.value)}
                    onBlur={(e) => handleBlur("city", e.target.value)}
                    className={getInputClass(
                      "city",
                      "w-full mt-1 px-4 py-2.5 rounded-lg text-sm bg-gray-50 border outline-none focus:bg-white transition"
                    )}
                  />
                  {touched.city && errors.city && (
                    <p className="mt-1 text-xs text-red-600">{errors.city}</p>
                  )}
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-gray-600 uppercase tracking-wide">
                    Pincode *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Pincode"
                    value={form.pincode}
                    onChange={(e) => handleFieldChange("pincode", e.target.value)}
                    onBlur={(e) => handleBlur("pincode", e.target.value)}
                    className={getInputClass(
                      "pincode",
                      "w-full mt-1 px-4 py-2.5 rounded-lg text-sm bg-gray-50 border outline-none focus:bg-white transition"
                    )}
                  />
                  {touched.pincode && errors.pincode && (
                    <p className="mt-1 text-xs text-red-600">{errors.pincode}</p>
                  )}
                </div>
              </div>
            ) : (
              <div>
                <label className="text-[11px] font-semibold text-gray-600 uppercase tracking-wide">
                  Pincode *
                </label>
                <input
                  type="text"
                  placeholder="Enter your Pincode"
                  value={form.pincode}
                  onChange={(e) => handleFieldChange("pincode", e.target.value)}
                  onBlur={(e) => handleBlur("pincode", e.target.value)}
                  className={getInputClass(
                    "pincode",
                    "w-full mt-1 px-4 py-2.5 rounded-lg text-sm bg-gray-50 border outline-none focus:bg-white transition"
                  )}
                />
                {touched.pincode && errors.pincode && (
                  <p className="mt-1 text-xs text-red-600">{errors.pincode}</p>
                )}
              </div>
            )}

            {/* WhatsApp */}
            <div>
              <label className="text-[11px] font-semibold text-gray-600 uppercase tracking-wide">
                WhatsApp Number *
              </label>
              <input
                type="tel"
                placeholder="Enter your WhatsApp Number"
                value={form.whatsapp}
                onChange={(e) => handleFieldChange("whatsapp", e.target.value)}
                onBlur={(e) => handleBlur("whatsapp", e.target.value)}
                className={getInputClass(
                  "whatsapp",
                  "w-full mt-1 px-4 py-2.5 rounded-lg text-sm bg-gray-50 border outline-none focus:bg-white transition"
                )}
              />
              {touched.whatsapp && errors.whatsapp && (
                <p className="mt-1 text-xs text-red-600">{errors.whatsapp}</p>
              )}
            </div>

            {/* Residential — Monthly Bill chips */}
            {activeTab === 0 && (
              <div>
                <label className="text-[11px] font-semibold text-gray-600 uppercase tracking-wide mb-2 block">
                  Average Monthly Electricity Bill *
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {BILL_OPTIONS.map((opt, i) => (
                    <button
                      type="button"
                      key={i}
                      onClick={() => {
                        clearGlobalMessage();
                        setSelectedBill(i);
                        if (touched.selectedBill) {
                          setErrors((prev) => ({ ...prev, selectedBill: "" }));
                        }
                      }}
                      className={`px-3 py-2 rounded-lg text-xs border font-medium cursor-pointer transition
                        ${
                          selectedBill === i
                            ? "bg-[#1a7a3c] text-white border-[#1a7a3c]"
                            : "bg-white text-gray-600 border-gray-200 hover:border-[#1a7a3c]"
                        }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                {touched.selectedBill && errors.selectedBill && (
                  <p className="mt-2 text-xs text-red-600">{errors.selectedBill}</p>
                )}
              </div>
            )}

            {/* Housing Society — Monthly Bill dropdown */}
            {activeTab === 1 && (
              <div>
                <label className="text-[11px] font-semibold text-gray-600 uppercase tracking-wide">
                  Monthly Electricity Bill *
                </label>
                <select
                  value={monthlyBill}
                  onChange={(e) => {
                    clearGlobalMessage();
                    setMonthlyBill(e.target.value);
                    if (touched.monthlyBill) {
                      setErrors((prev) => ({
                        ...prev,
                        monthlyBill: validateSingleField("monthlyBill", e.target.value),
                      }));
                    }
                  }}
                  onBlur={(e) => {
                    setTouched((prev) => ({ ...prev, monthlyBill: true }));
                    setErrors((prev) => ({
                      ...prev,
                      monthlyBill: validateSingleField("monthlyBill", e.target.value),
                    }));
                  }}
                  className={getInputClass(
                    "monthlyBill",
                    "w-full mt-1 px-4 py-2.5 rounded-lg text-sm bg-gray-50 border outline-none focus:bg-white transition"
                  )}
                >
                  <option value="">Select</option>
                  {MONTHLY_BILL_OPTIONS.map((option, idx) => (
                    <option key={idx} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {touched.monthlyBill && errors.monthlyBill && (
                  <p className="mt-1 text-xs text-red-600">{errors.monthlyBill}</p>
                )}
              </div>
            )}

            {/* Housing Society — Designation chips */}
            {activeTab === 1 && (
              <div>
                <label className="text-[11px] font-semibold text-gray-600 uppercase tracking-wide mb-2 block">
                  Your Designation in Housing Society *
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {DESIGNATION_OPTIONS.map((role, i) => (
                    <button
                      type="button"
                      key={i}
                      onClick={() => {
                        clearGlobalMessage();
                        setSelectedDesignation(i);
                        if (touched.selectedDesignation) {
                          setErrors((prev) => ({ ...prev, selectedDesignation: "" }));
                        }
                      }}
                      className={`px-3 py-2 rounded-lg text-xs border font-medium cursor-pointer transition
                        ${
                          selectedDesignation === i
                            ? "bg-[#1a7a3c] text-white border-[#1a7a3c]"
                            : "bg-white text-gray-600 border-gray-200 hover:border-[#1a7a3c]"
                        }`}
                    >
                      {role}
                    </button>
                  ))}
                </div>
                {touched.selectedDesignation && errors.selectedDesignation && (
                  <p className="mt-2 text-xs text-red-600">{errors.selectedDesignation}</p>
                )}
              </div>
            )}

            {/* Housing Society — AGM Status */}
            {activeTab === 1 && (
              <div>
                <label className="text-[11px] font-semibold text-gray-600 uppercase tracking-wide">
                  AGM Approval Status *
                </label>
                <select
                  value={agmStatus}
                  onChange={(e) => {
                    clearGlobalMessage();
                    setAgmStatus(e.target.value);
                    if (touched.agmStatus) {
                      setErrors((prev) => ({
                        ...prev,
                        agmStatus: validateSingleField("agmStatus", e.target.value),
                      }));
                    }
                  }}
                  onBlur={(e) => {
                    setTouched((prev) => ({ ...prev, agmStatus: true }));
                    setErrors((prev) => ({
                      ...prev,
                      agmStatus: validateSingleField("agmStatus", e.target.value),
                    }));
                  }}
                  className={getInputClass(
                    "agmStatus",
                    "w-full mt-1 px-4 py-2.5 rounded-lg text-sm bg-gray-50 border outline-none focus:bg-white transition"
                  )}
                >
                  <option value="">Select</option>
                  {AGM_STATUS_OPTIONS.map((option, idx) => (
                    <option key={idx} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {touched.agmStatus && errors.agmStatus && (
                  <p className="mt-1 text-xs text-red-600">{errors.agmStatus}</p>
                )}
              </div>
            )}

            {/* Commercial — Average Monthly Bill */}
            {activeTab === 2 && (
              <div>
                <label className="text-[11px] font-semibold text-gray-600 uppercase tracking-wide">
                  Average Monthly Bill *
                </label>
                <input
                  type="text"
                  placeholder="Enter Average Monthly Bill"
                  value={form.commercialBill}
                  onChange={(e) => handleFieldChange("commercialBill", e.target.value)}
                  onBlur={(e) => handleBlur("commercialBill", e.target.value)}
                  className={getInputClass(
                    "commercialBill",
                    "w-full mt-1 px-4 py-2.5 rounded-lg text-sm bg-gray-50 border outline-none focus:bg-white transition"
                  )}
                />
                {touched.commercialBill && errors.commercialBill && (
                  <p className="mt-1 text-xs text-red-600">{errors.commercialBill}</p>
                )}
              </div>
            )}

            {/* Terms */}
            <div className="flex flex-col">
              <div className="flex items-start gap-2 pt-1">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => {
                    clearGlobalMessage();
                    setAgreed(e.target.checked);
                    setTouched((prev) => ({ ...prev, agreed: true }));
                    setErrors((prev) => ({
                      ...prev,
                      agreed: e.target.checked
                        ? ""
                        : "Please agree to Savorka's Terms of Service & Policies.",
                    }));
                  }}
                  className="w-4 h-4 mt-0.5 accent-[#1a7a3c] cursor-pointer"
                />
                <span className="text-xs text-gray-500 leading-relaxed">
                  I agree to Savorka&apos;s{" "}
                  <span className="text-[#1a7a3c] underline cursor-pointer">
                    Terms of Service & Policies.
                  </span>
                </span>
              </div>
              {touched.agreed && errors.agreed && (
                <p className="mt-1 text-xs text-red-600">{errors.agreed}</p>
              )}
            </div>

            {/* Response Message */}
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

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-[#1a7a3c] to-[#2ea84f] text-white font-bold text-sm rounded-lg tracking-widest hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shadow-lg shadow-green-200"
            >
              {loading ? "SUBMITTING..." : "SUBMIT DETAILS →"}
            </button>

            <p className="text-center text-[10px] text-gray-400 pb-1">
              🔒 Your information is safe with us. No spam, ever.
            </p>
          </form>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp {
          from { opacity: 0; transform: translate(-50%, -44%) scale(0.95); }
          to   { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
      `}</style>
    </>
  );
};

export default PopupForm;