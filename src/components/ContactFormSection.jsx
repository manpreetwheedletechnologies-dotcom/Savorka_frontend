import React, { useState } from "react";
import ContackLayer from "../assets/Layer.png";

const TABS = ["RESIDENTIAL", "HOUSING SOCIETY", "COMMERCIAL"];
const BILL_OPTIONS = [
  "Less than ₹ 1500",
  "₹ 1500 - ₹ 2500",
  "₹ 2500 - ₹ 4000",
  "₹ 4000 - ₹ 8000",
  "More than ₹ 8000",
];

const ContactFormSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedBill, setSelectedBill] = useState(null);
  const [agreed, setAgreed] = useState(true);
  const [form, setForm] = useState({ name: "", whatsapp: "", pincode: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We will contact you shortly.");
  };

  return (
    <section
      id="contact"
      className="py-16 px-6 md:px-16"
      style={{ background: "#F6FCD0" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-start">
        {/* Left Content + Image */}
        <div className="flex-1 min-w-0">
          <h2 className="font-heading font-black text-dark text-3xl md:text-3xl leading-tight mb-4">
            Stop carrying it alone
            <br />
            Start feeling supported
          </h2>

          {/* Image */}
          <div className="my-6">
            <img
              src={ContackLayer}
              alt="Solar and wind energy"
              className="w-full max-w-xs rounded-2xl object-cover"
              style={{ height: "200px" }}
            />
          </div>

          <p className="font-heading font-bold text-primary text-base mb-2 leading-snug">
            Please fill the form and we will get in touch with you for the consultation
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Take the first step toward clean, cost-saving solar energy with a no-obligation
            consultation from SAVORKA.
          </p>
        </div>

        {/* Divider */}
        <div
          className="hidden md:block"
          style={{ width: "2px", backgroundColor: "#030202", margin: "0 10px" }}
        />

        {/* Right – Form */}
        <div
          className="flex-1 min-w-0 rounded-2xl p-6 md:p-8"
          style={{ background: "#F6FCD0", border: "1px solid #eafcd9" }}
        >
          {/* Tabs */}
          <div
            className="flex rounded-xl overflow-hidden mb-6"
            style={{ border: "1.5px solid #ccc" }}
          >
            {TABS.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`flex-1 py-2.5 text-xs font-heading font-bold transition-all duration-200 ${
                  activeTab === i
                    ? "bg-navy text-white"
                    : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-heading font-semibold text-gray-700 mb-1.5">
                Full Name:
              </label>
              <input
                type="text"
                placeholder="Enter your Full Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-2 rounded-lg text-sm bg-white border border-gray-200 outline-none focus:border-primary transition-colors"
              />
            </div>

            {/* WhatsApp */}
            <div>
              <label className="block text-xs font-heading font-semibold text-gray-700 mb-1.5">
                WhatsApp Number:
              </label>
              <input
                type="tel"
                placeholder="Enter your WhatsApp Number"
                value={form.whatsapp}
                onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                className="w-full px-4 py-2 rounded-lg text-sm bg-white border border-gray-200 outline-none focus:border-primary transition-colors"
              />
            </div>

            {/* Pincode */}
            <div>
              <label className="block text-xs font-heading font-semibold text-gray-700 mb-1.5">
                Pincode:
              </label>
              <input
                type="text"
                placeholder="Enter your Pincode"
                value={form.pincode}
                onChange={(e) => setForm({ ...form, pincode: e.target.value })}
                className="w-full px-4 py-2 rounded-lg text-sm bg-white border border-gray-200 outline-none focus:border-primary transition-colors"
              />
            </div>

            {/* Monthly bill */}
            <div>
              <label className="block text-xs font-heading font-semibold text-gray-700 mb-2">
                What is your average monthly bill?
              </label>
              <div className="flex flex-wrap gap-2">
                {BILL_OPTIONS.map((opt, i) => (
                  <button
                    type="button"
                    key={i}
                    onClick={() => setSelectedBill(i)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-heading font-medium border transition-all duration-150 ${
                      selectedBill === i
                        ? "bg-primary border-primary text-white"
                        : "bg-white border-gray-200 text-gray-600 hover:border-primary"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-center gap-2 pt-1">
              <input
                type="checkbox"
                id="terms"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="w-4 h-4 accent-navy rounded"
              />
              <label htmlFor="terms" className="text-xs text-gray-600">
                I agree to Sarvoka's Terms of Service &amp; Policies.
              </label>
            </div>

            <button
              type="submit"
              disabled={!agreed}
              className="bg-navy text-white px-8 py-2 rounded-lg font-heading font-bold text-sm hover:bg-navy-light transition-colors disabled:opacity-50 mt-1"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;