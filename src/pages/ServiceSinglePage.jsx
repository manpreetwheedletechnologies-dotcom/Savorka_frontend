import React from "react";
import { useParams, Navigate } from "react-router-dom";
import servicesData from "../data/servicesData";
import SolarRevolutionSection from "../components/SolarRevolutionSection";
import HeroImageSection from "../components/HeroImageSection";
import { Helmet } from "react-helmet-async";
// ─── Reusable bullet list ─────────────────────────────────────────────────────
const BulletList = ({ items }) => (
  <ul className="space-y-2 mt-3">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-2 text-gray-600 text-[15px] sm:text-[16px]">
        <span className="text-[#1a7a3c] mt-1 shrink-0">•</span>
        {item}
      </li>
    ))}
  </ul>
);
const SEO_META = {
  "residential": {
    title: "Residential Solar Panel Installation | Rooftop Solar for Homes | Savorka Solar",
    description:
      "Power your home with clean energy. Savorka Solar installs On-Grid, Off-Grid & Hybrid rooftop solar systems for homes. Reduce electricity bills by up to 80%. Get a free quote.",
    canonical : "https://www.savorka.in/services/residential",
    },
  "commercial-industrial-solar": {
    title: "Commercial & Industrial Solar Solutions | Rooftop Solar EPC | Savorka Solar",
    description:
      "Cut commercial electricity costs with Savorka Solar's industrial rooftop solar systems. Turnkey EPC, net metering & O&M for factories, warehouses & businesses.",
      canonical : "https://www.savorka.in/services/commercial-industrial-solar",
  },
  "ground-mounted-solar": {
    title: "Ground Mounted Solar Plant Installation | Utility Scale Solar | Savorka Solar",
    description:
      "Savorka Solar designs and installs ground-mounted solar power plants for large-scale energy needs. Scalable MW-range solutions across India. Request a proposal.",
      canonical : "https://www.savorka.in/services/ground-mounted-solar",
  },
  "solar-structure-manufacturing": {
    title: "Solar Mounting Structure Manufacturer | GI & MS Structures | Savorka Solar",
    description:
      "In-house solar structure manufacturing for rooftop & ground-mounted solar plants. Hot-dip galvanized GI structures built for durability. Pan-India delivery.",
      canonical : "https://www.savorka.in/services/solar-structure-manufacturing",
  },
};

// ─── Numbered process list ────────────────────────────────────────────────────
const ProcessList = ({ items }) => (
  <ol className="space-y-2 mt-3">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-3 text-gray-600 text-[15px] sm:text-[16px]">
        <span className="bg-[#1a7a3c] text-white text-[13px] font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">
          {i + 1}
        </span>
        {item}
      </li>
    ))}
  </ol>
);

// ─── Key Features / Benefits / Process / Applications cards row ───────────────
const ServiceInfoSection = ({ service }) => {
  const cards = [
    service.keyFeatures && {
      icon: "⚡",
      title: "Key Features",
      content: <BulletList items={service.keyFeatures} />,
    },
    service.benefits && {
      icon: "💡",
      title: "Benefits",
      content: <BulletList items={service.benefits} />,
    },
    service.process && {
      icon: "🔧",
      title: "Our Process",
      content: <ProcessList items={service.process} />,
    },
    service.applications && {
      icon: "🛠️",
      title: "Applications",
      content: <BulletList items={service.applications} />,
    },
  ].filter(Boolean);

  if (!cards.length) return null;

  return (
    <section className="bg-[#f8fbf8] px-5 sm:px-8 lg:px-[100px] py-10 md:py-14">
      <div className="max-w-[1100px] mx-auto">
        <div className={`grid grid-cols-1 sm:grid-cols-2 ${cards.length >= 3 ? "lg:grid-cols-3" : ""} gap-6`}>
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white border border-[#dce8de] rounded-2xl p-6 shadow-sm"
            >
              <h3 className="text-[#1a7a3c] font-semibold text-[17px] sm:text-[18px] flex items-center gap-2 mb-1">
                <span>{card.icon}</span> {card.title}
              </h3>
              {card.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── PM Surya Ghar Section ────────────────────────────────────────────────────
const PmSuryaGharSection = ({ data }) => {
  if (!data) return null;
  return (
    <section className="bg-[#f0f9f1] px-5 sm:px-8 lg:px-[100px] py-12 md:py-16">
      <div className="max-w-[1100px] mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <span className="inline-block bg-[#1a7a3c] text-white text-[13px] font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
            Government Scheme
          </span>
          <h2 className="text-[#1a7a3c] font-semibold text-[24px] sm:text-[30px] md:text-[36px] leading-tight mb-2">
            {data.title}
          </h2>
          <p className="text-[#4b7a57] text-[14px] sm:text-[15px] font-medium mb-4">
            {data.subtitle}
          </p>
          <p className="max-w-[800px] mx-auto text-gray-600 text-[15px] sm:text-[16px] leading-relaxed">
            {data.about}
          </p>
        </div>

        {/* Subsidy Cards */}
        <div className="mb-10">
          <h3 className="text-[#1f2937] font-semibold text-[18px] sm:text-[20px] text-center mb-2">
            {data.subsidyTitle}
          </h3>
          <p className="text-center text-gray-500 text-[14px] mb-5">{data.subsidyNote}</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {data.subsidyPoints.map((item, i) => (
              <div
                key={i}
                className="bg-white border border-[#c5e0cc] rounded-2xl p-5 text-center shadow-sm"
              >
                <p className="text-[#4b7a57] font-medium text-[14px] mb-1">{item.label}</p>
                <p className="text-[#1a7a3c] font-bold text-[24px] sm:text-[28px]">{item.amount}</p>
              </div>
            ))}
          </div>
          {data.subsidyFootnote && (
            <p className="text-center text-[#1a7a3c] font-medium text-[14px] mt-4">
              👉 {data.subsidyFootnote}
            </p>
          )}
        </div>

        {/* Scheme Features + Eligibility + How We Help + Why It Matters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: "⚡", title: "Key Features", items: data.schemeFeatures },
            { icon: "🧾", title: "Eligibility", items: data.eligibility },
            { icon: "🔄", title: "How We Help You", items: data.howWeHelp },
            { icon: "💡", title: "Why This Matters", items: data.whyItMatters },
          ].map((col, i) => (
            <div key={i} className="bg-white rounded-2xl border border-[#dce8de] p-5 shadow-sm">
              <h4 className="text-[#0c7812] font-semibold text-[15px] sm:text-[16px] mb-3 flex items-center gap-2">
                <span>{col.icon}</span> {col.title}
              </h4>
              <BulletList items={col.items} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

// ─── Main Page ────────────────────────────────────────────────────────────────
const ServiceSinglePage = () => {
  const { slug } = useParams();
  const service = servicesData.find((item) => item.slug === slug);
  const seoMeta = SEO_META[slug];

  if (!service) return <Navigate to="/services" replace />;

  return (
    <>
      <Helmet>
        <title>{seoMeta.title}</title>
        <meta name="description" content={seoMeta.description} />
        <link rel="canonical" href={seoMeta.canonical} />
      </Helmet>
      {/* Hero Image */}
      {/* <div className="w-full overflow-hidden">
        <img
          src={service.heroImg}
          alt={service.cardTitle}
          className="w-full h-[220px] sm:h-[260px] md:h-[320px] lg:h-[380px] object-cover"
        />
      </div> */}
      <HeroImageSection title={service.pageHeading} heroImage={service.heroImg} />


      {/* Page Heading + Intro Paragraph */}
      <section className="bg-white px-5 sm:px-8 lg:px-[100px] py-10 md:py-14">
        <div className="max-w-[1100px] mx-auto text-center">
          {/* <h2 className="text-[#1a7a3c] font-semibold text-[26px] sm:text-[34px] md:text-[40px] leading-tight mb-5">
            {service.pageHeading}
          </h2> */}
          <p className="max-w-[950px] mx-auto text-gray-600 text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed">
            {service.pageParagraph}
          </p>
        </div>
      </section>

      {/* Key Features / Benefits / Process / Applications */}
      <ServiceInfoSection service={service} />

      {/* PM Surya Ghar — only renders for Residential */}
      {service.pmSuryaGhar && <PmSuryaGharSection data={service.pmSuryaGhar} />}

      {/* Solar Revolution / Coverage Section */}
      <div className="bg-white pb-16 md:pb-24">
        <SolarRevolutionSection {...service.solarSection} />
      </div>

      {/* FAQs Section */}
      {service.faqSection &&
        (service.faqSection.ratingHeading ||
          service.faqSection.faqTitle ||
          service.faqSection.faqs?.length > 0) && (
          <section className="bg-white px-5 sm:px-8 lg:px-[100px] pb-16 md:pb-20">
            <div className="max-w-[1100px] mx-auto">
              {service.faqSection.ratingHeading && (
                <h3 className="text-[#1a7a3c] font-semibold text-[22px] sm:text-[28px] md:text-[34px] leading-snug text-center mb-8">
                  {service.faqSection.ratingHeading}
                </h3>
              )}
              <div className="bg-[#f8fbf8] border border-[#e5efe7] rounded-[20px] p-5 sm:p-7 md:p-10 shadow-sm">
                {service.faqSection.faqTitle && (
                  <h4 className="text-[#0c7812] font-semibold text-[22px] sm:text-[26px] md:text-[30px] mb-6">
                    {service.faqSection.faqTitle}
                  </h4>
                )}
                {service.faqSection.faqs?.length > 0 && (
                  <div className="space-y-5 sm:space-y-6">
                    {service.faqSection.faqs.map((faq, index) => (
                      <div
                        key={index}
                        className="border-b border-[#dce8de] pb-5 last:border-b-0 last:pb-0"
                      >
                        <p className="text-[#1f2937] font-semibold text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed mb-2">
                          Q. {faq.question}
                        </p>
                        <p className="text-gray-600 text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed">
                          A. {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
        )}
    </>
  );
};

export default ServiceSinglePage;