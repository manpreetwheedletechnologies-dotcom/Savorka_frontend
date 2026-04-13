import React, { useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ALL_TESTIMONIALS = [
  {
    role: "Mr. Vishal Singh",
    company: "ADANI LOGISTICS LIMITED — TAORU",
    location: "Pataudi Road, Garhi Harsaru, Gurugram, Haryana",
    capacity: "500 kWp",
    text: "The 500 kWp solar installation at our Gurugram logistics park has significantly reduced our operational energy costs. Savorka Solar's team handled everything seamlessly — from design to commissioning.",
  },
  {
    role: "Mr. Shyamsundar Sharma",
    company: "ADANI LOGISTICS LIMITED — INDORE",
    location: "ICD Indore, Madhya Pradesh",
    capacity: "200 kWp",
    text: "Our 200 kWp rooftop system at the Indore ICD has been performing above expectations. The installation was professional and the O&M support has been excellent.",
  },
  {
    role: "Mr. Krishan Kumar",
    company: "ADANI AGRI LIMITED — PANIPAT",
    location: "Naultha, Near Geeta University, Panipat, Haryana",
    capacity: "62 kWp",
    text: "Savorka Solar delivered our 62 kWp system on time and within budget. The energy savings have been consistent and the monitoring reports are detailed and accurate.",
  },
  {
    role: "Mr. D",
    company: "KOTKAPURA FACILITY",
    location: "Opposite Hotel Blue Hill, Faridkot Road, Kotkapura",
    capacity: "50 kWp",
    text: "The solar installation has delivered reliable power output month after month. The team was responsive and handled the project with great efficiency.",
  },
  {
    role: "Mr. Rahul Dorlikar",
    company: "DHAMORA FACILITY",
    location: "Dhamora Railway Station, Uttar Pradesh",
    capacity: "37 kWp",
    text: "Our 37 kWp plant near Dhamora railway station runs smoothly. Savorka Solar's O&M team ensures peak performance with fast response times whenever needed.",
  },
  {
    role: "Mr. Om Chaturvedi",
    company: "KANNAUJ FACILITY",
    location: "Near Jasoda Cold Storage, Kannauj, Uttar Pradesh",
    capacity: "48 kWp",
    text: "Savorka Solar's solution has helped us cut electricity costs considerably. The 48 kWp system was installed cleanly and the after-sales service has been outstanding.",
  },
  {
    role: "Mr. Vivekananda Ghosh",
    company: "KATIHAR FACILITY",
    location: "Near Tingachhiya, Bhorabari, Katihar, Bihar",
    capacity: "50 kWp",
    text: "The 50 kWp installation in Katihar has been a game-changer for our facility's energy bills. Professional team, on-time delivery, and great ongoing support.",
  },
  {
    role: "Mr. Nitish Kumar",
    company: "SAMASTIPUR FACILITY",
    location: "Khudiram Bose Pusa Railway Station, Samastipur",
    capacity: "55 kWp",
    text: "Our 55 kWp rooftop system has been generating consistent savings. Savorka Solar's monitoring system gives us full visibility into the plant's performance.",
  },
  {
    role: "Mr. Vikash Kumar",
    company: "ADANI AGRI LOGISTICS — DARBHANGA",
    location: "Village Yogiyara, Block Jale, Darbhanga, Bihar",
    capacity: "43 kWp",
    text: "The solar system installed at our Darbhanga facility has been running flawlessly. Excellent workmanship and a highly professional installation team.",
  },
  {
    role: "Mr. Arup Pattanayak",
    company: "HOOGHLY FACILITY",
    location: "Bandel Station Road, Near Old Loco Yard, Kolkata",
    capacity: "59 kWp",
    text: "Our 59 kWp system near Bandel has delivered impressive results. Energy output has been consistent, and the Savorka team has been very responsive to our needs.",
  },
  {
    role: "Mr. Ramaswamy Gopalan",
    company: "BENGALURU MALUR FACILITY",
    location: "Near Malur Rly. Station, Dyapasandra Village, Malur",
    capacity: "49 kWp",
    text: "Savorka Solar installed our 49 kWp system near Malur station with precision. The plant has been performing optimally and the O&M team is proactive and professional.",
  },
  {
    role: "Mr. M. Kumar",
    company: "COIMBATORE FACILITY",
    location: "Near Madukkarai Rly. Station, Coimbatore, Tamil Nadu",
    capacity: "46 kWp",
    text: "The 46 kWp installation at our Coimbatore facility has reduced our power costs significantly. Savorka Solar's team ensured a smooth installation with zero disruption to operations.",
  },
  {
    role: "Mr. Naren",
    company: "CHENNAI FACILITY",
    location: "Near Elavur Rly. Stn., Goomidipoondi, Thiruvallur, Tamil Nadu",
    capacity: "43 kWp",
    text: "Our 43 kWp solar plant in Thiruvallur has been delivering consistent clean energy. The team at Savorka Solar was professional, timely, and a pleasure to work with.",
  },
];

const DESKTOP_PER_PAGE = 3;

const TestimonialCard = ({ role, company, location, capacity, text }) => (
  <div className="rounded-lg overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full">
    <div
      className="px-5 py-3"
      style={{ background: "linear-gradient(135deg, #4a7c3f, #2d7a27)" }}
    >
      <p className="font-bold text-white text-sm">{role}</p>
      <p className="text-green-200 text-xs tracking-widest mt-0.5">{company}</p>
      <p className="text-green-300 text-xs mt-0.5 opacity-80">{capacity} · {location}</p>
    </div>
    <div className="p-5 flex gap-4 items-start bg-white flex-1">
      <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center text-gray-500 font-bold text-base">
        {role.replace("Mr. ", "").replace("Mr.", "").charAt(0)}
      </div>
      <p className="text-gray-600 text-xs leading-relaxed">{text}</p>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const [page, setPage] = useState(0);
  const desktopTrackRef = useRef(null);
  const mobileTrackRef = useRef(null);

  const desktopPages = Math.ceil(ALL_TESTIMONIALS.length / DESKTOP_PER_PAGE);
  const mobilePages = ALL_TESTIMONIALS.length;

  const goToPage = (newPage, total) => {
    if (newPage < 0 || newPage >= total) return;
    setPage(newPage);

    if (desktopTrackRef.current) {
      desktopTrackRef.current.scrollTo({
        left: desktopTrackRef.current.offsetWidth * newPage,
        behavior: "smooth",
      });
    }

    if (mobileTrackRef.current) {
      mobileTrackRef.current.scrollTo({
        left: mobileTrackRef.current.offsetWidth * newPage,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-white py-10 md:py-16 px-4 md:px-16" id="project">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-black text-2xl md:text-3xl text-center mb-8 leading-snug">
          Trusted by{" "}
          <span className="text-green-700">Businesses, Industries</span> &amp;{" "}
          <span className="text-green-700">Homeowners</span> Across India
        </h2>

        {/* ── DESKTOP: 3 cards per slide ── */}
        <div className="hidden md:block overflow-hidden mb-6">
          <div
            ref={desktopTrackRef}
            className="flex"
            style={{ overflowX: "hidden", scrollSnapType: "x mandatory" }}
          >
            {Array.from({ length: desktopPages }).map((_, gi) => (
              <div
                key={gi}
                className="grid grid-cols-3 gap-5 p-1"
                style={{ flex: "0 0 100%", scrollSnapAlign: "start" }}
              >
                {ALL_TESTIMONIALS.slice(
                  gi * DESKTOP_PER_PAGE,
                  gi * DESKTOP_PER_PAGE + DESKTOP_PER_PAGE
                ).map((t, i) => (
                  <TestimonialCard key={i} {...t} />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ── MOBILE: 1 card per slide ── */}
        <div className="block md:hidden overflow-hidden mb-6">
          <div
            ref={mobileTrackRef}
            className="flex"
            style={{ overflowX: "hidden", scrollSnapType: "x mandatory" }}
          >
            {ALL_TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="p-1"
                style={{ flex: "0 0 100%", scrollSnapAlign: "start" }}
              >
                <TestimonialCard {...t} />
              </div>
            ))}
          </div>
        </div>

        {/* ── DESKTOP PAGINATION ── */}
        <div className="hidden md:flex items-center justify-end gap-3 text-sm text-gray-500">
          <button
            onClick={() => goToPage(page - 1, desktopPages)}
            disabled={page === 0}
            className="flex items-center gap-1 disabled:opacity-40 hover:text-green-700 transition-colors font-medium"
          >
            <FaChevronLeft size={11} /> Previous
          </button>
          {Array.from({ length: desktopPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i, desktopPages)}
              className={`w-7 h-7 rounded-full font-bold text-xs transition-all ${
                page === i
                  ? "bg-green-700 text-white shadow-md"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => goToPage(page + 1, desktopPages)}
            disabled={page === desktopPages - 1}
            className="flex items-center gap-1 disabled:opacity-40 hover:text-green-700 transition-colors font-medium"
          >
            Next <FaChevronRight size={11} />
          </button>
        </div>

        {/* ── MOBILE PAGINATION ── */}
        <div className="flex md:hidden items-center justify-center gap-3 text-sm text-gray-500">
          <button
            onClick={() => goToPage(page - 1, mobilePages)}
            disabled={page === 0}
            className="flex items-center gap-1 disabled:opacity-40 hover:text-green-700 transition-colors font-medium"
          >
            <FaChevronLeft size={11} /> Prev
          </button>
          <span className="text-gray-400 text-xs">
            {page + 1} / {mobilePages}
          </span>
          <button
            onClick={() => goToPage(page + 1, mobilePages)}
            disabled={page === mobilePages - 1}
            className="flex items-center gap-1 disabled:opacity-40 hover:text-green-700 transition-colors font-medium"
          >
            Next <FaChevronRight size={11} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;