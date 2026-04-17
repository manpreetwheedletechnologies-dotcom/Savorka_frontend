import React, { useState } from "react";
import { Link } from "react-router-dom";
import projectsData from "../data/projectsData";

export default function Projects() {
  const INITIAL_COUNT = 6;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [animatingOut, setAnimatingOut] = useState(false);

  const handleShowMore = () => {
    setVisibleCount(projectsData.length);
  };

  const handleViewLess = () => {
    setAnimatingOut(true);
    setTimeout(() => {
      setVisibleCount(INITIAL_COUNT);
      setAnimatingOut(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      <style>{`
        /* ── Card entrance animation ── */
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(32px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0)    scale(1);    }
        }

        /* ── Animated spinning gradient border ── */
        @keyframes borderSpin {
          0%   { background-position: 0%   50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0%   50%; }
        }

        /* ── Accent bar slide-in ── */
        @keyframes accentSlide {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }

        /* ── Button shimmer sweep ── */
        @keyframes shimmer {
          from { transform: translateX(-100%); }
          to   { transform: translateX(100%);  }
        }

        /* ── Reduced-motion safety ── */
        @media (prefers-reduced-motion: reduce) {
          .proj-card-wrap,
          .proj-card-inner,
          .proj-ribbon,
          .proj-img,
          .proj-overlay,
          .proj-badge,
          .proj-arrow-btn,
          .proj-accent-bar,
          .proj-kw-pill { transition: none !important; animation: none !important; }
        }

        /* ────────────────────────────────────────
           WRAPPER — entire card is the link
        ──────────────────────────────────────── */
        .proj-card-wrap {
          position: relative;
          cursor: pointer;
          perspective: 900px;
          animation: cardIn 0.55s cubic-bezier(0.23, 1, 0.32, 1) both;
          text-decoration: none;
          display: block;
          color: inherit;
        }
        .proj-card-wrap:focus-visible .proj-card-inner {
          outline: 2px solid #3E980A;
          outline-offset: 3px;
        }

        /* ────────────────────────────────────────
           INNER CARD (white surface, lifts on hover)
        ──────────────────────────────────────── */
        .proj-card-inner {
          position: relative;
          border-radius: 22px;
          background: #ffffff;
          border: 0.5px solid rgba(0,0,0,0.08);
          overflow: hidden;
          transform: translateY(0) rotateX(0deg);
          transition:
            transform   0.38s cubic-bezier(0.23, 1, 0.32, 1),
            box-shadow  0.38s cubic-bezier(0.23, 1, 0.32, 1),
            border-color 0.3s;
          will-change: transform;
        }
        .proj-card-wrap:hover .proj-card-inner {
          transform: translateY(-10px) rotateX(3deg);
          box-shadow:
            0 24px 48px rgba(62, 152, 10, 0.18),
            0  8px 16px rgba(0,   0,   0, 0.08);
          border-color: #8DCD46;
        }

        /* ── Animated glow border (clip-trick) ── */
        .proj-card-inner::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 22px;
          padding: 1.5px;
          background: linear-gradient(135deg, #3E980A, #8DCD46, #63B81F, #3E980A);
          background-size: 300% 300%;
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.35s;
          animation: borderSpin 2.5s linear infinite;
          z-index: 3;
          pointer-events: none;
        }
        .proj-card-wrap:hover .proj-card-inner::before {
          opacity: 1;
        }

        /* ────────────────────────────────────────
           DATE RIBBON (slides in from top)
        ──────────────────────────────────────── */
        .proj-ribbon {
          position: absolute;
          top: 0; left: 0; right: 0;
          z-index: 5;
          background: #2c7a1f;
          color: #ffffff;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-align: center;
          padding: 6px 0;
          transform: translateY(-100%);
          transition: transform 0.32s cubic-bezier(0.23, 1, 0.32, 1);
          pointer-events: none;
        }
        .proj-card-wrap:hover .proj-ribbon {
          transform: translateY(0);
        }

        /* ────────────────────────────────────────
           IMAGE + ZOOM + OVERLAY
        ──────────────────────────────────────── */
       .proj-img-wrap {
  position: relative;
  overflow: hidden;
  height: 290px; /* ← increase this value (try 220px–260px) */
}
        .proj-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.55s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .proj-card-wrap:hover .proj-img {
          transform: scale(1.07);
        }

        /* Green tint overlay */
        .proj-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            160deg,
            rgba(141, 205, 70, 0.12) 0%,
            rgba(24,  114, 31, 0.28) 100%
          );
          opacity: 0;
          transition: opacity 0.35s;
          pointer-events: none;
        }
        .proj-card-wrap:hover .proj-overlay {
          opacity: 1;
        }

        /* Category badge */
        .proj-badge {
          position: absolute;
          bottom: 10px;
          left: 12px;
          background: rgba(24, 114, 31, 0.82);
          color: #d6f5b0;
          font-size: 10px;
          font-weight: 600;
          padding: 3px 10px;
          border-radius: 20px;
          letter-spacing: 0.05em;
          backdrop-filter: blur(4px);
          transform: translateY(8px);
          opacity: 0;
          transition: opacity 0.28s 0.05s, transform 0.28s 0.05s;
          pointer-events: none;
        }
        .proj-card-wrap:hover .proj-badge {
          opacity: 1;
          transform: translateY(0);
        }

        /* ────────────────────────────────────────
           CARD BODY
        ──────────────────────────────────────── */
        .proj-card-body {
  padding: 16px 16px 18px;
  min-height: 120px; 
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 12px;
        }

        .proj-title {
          font-size: 15px;
          font-weight: 600;
          line-height: 1.38;
          color: #18721f;
          text-decoration: none;
          display: block;
          transition: color 0.2s;
        }
        .proj-card-wrap:hover .proj-title {
          color: #2c7a1f;
        }

        /* ── Footer row ── */
        .proj-card-foot {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .proj-kw-pill {
          font-size: 11px;
          font-weight: 700;
          color: #3E980A;
          background: rgba(141, 205, 70, 0.12);
          border: 0.5px solid rgba(62, 152, 10, 0.3);
          padding: 3px 10px;
          border-radius: 20px;
          letter-spacing: 0.04em;
          transition: background 0.25s, color 0.25s;
        }
        .proj-card-wrap:hover .proj-kw-pill {
          background: rgba(62, 152, 10, 0.18);
        }

        .proj-arrow-btn {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 0.5px solid rgba(0,0,0,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f5f5f5;
          transition:
            background     0.22s,
            border-color   0.22s,
            transform      0.28s cubic-bezier(0.23, 1, 0.32, 1);
          flex-shrink: 0;
        }
        .proj-card-wrap:hover .proj-arrow-btn {
          background: #2c7a1f;
          border-color: #2c7a1f;
          transform: rotate(45deg) scale(1.1);
        }
        .proj-arrow-btn svg {
          transition: stroke 0.22s;
        }
        .proj-card-wrap:hover .proj-arrow-btn svg {
          stroke: #ffffff !important;
        }

        /* ── Green accent bar at card bottom ── */
        .proj-accent-bar {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #3E980A, #8DCD46);
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform 0.42s cubic-bezier(0.23, 1, 0.32, 1);
          pointer-events: none;
        }
        .proj-card-wrap:hover .proj-accent-bar {
          transform: scaleX(1);
        }

        /* ────────────────────────────────────────
           SHOW MORE / VIEW LESS BUTTON
        ──────────────────────────────────────── */
        .proj-btn {
          position: relative;
          overflow: hidden;
          background: #2c7a1f;
          color: #ffffff;
          border: none;
          border-radius: 9px;
          padding: 11px 32px;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.03em;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
        }
        .proj-btn:hover {
          background: #1e5f17;
          box-shadow: 0 6px 20px rgba(44, 122, 31, 0.35);
        }
        .proj-btn:hover::after {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 60%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,0.2),
            transparent
          );
          animation: shimmer 0.55s ease forwards;
        }
        .proj-btn:active {
          transform: scale(0.97);
        }
      `}</style>

      <section className="bg-white py-14 sm:py-16 px-4 sm:px-6 md:px-10 lg:px-12">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-y-8 gap-x-4 place-items-center">
          {projectsData.slice(0, visibleCount).map((item, index) => (
            <Link
              key={item.slug}
              to={`/projects/${item.slug}`}
              className="proj-card-wrap w-full max-w-[320px] sm:max-w-[380px] md:max-w-[380px]"
              style={{ animationDelay: `${(index % 6) * 0.08}s` }}
            >
              <div className="proj-card-inner">
                {/* Date ribbon */}
                <div className="proj-ribbon">{item.date}</div>

                {/* Image */}
                <div className="proj-img-wrap">
                  <img
                    src={item.cardImage}
                    alt={item.title}
                    className="proj-img"
                  />
                  <div className="proj-overlay" />
                  {item.category && (
                    <div className="proj-badge">{item.category}</div>
                  )}
                </div>

                {/* Body */}
                <div className="proj-card-body">
                  {/* Title — plain text now, the whole card is the link */}
                  <span className="proj-title">{item.title}</span>

                  <div className="proj-card-foot">
                    {/* Capacity pill */}
                    {(item.capacity || item.kw) && (
                      <span className="proj-kw-pill">
                        {item.capacity || item.kw}
                      </span>
                    )}

                    {/* Arrow icon */}
                    <div className="proj-arrow-btn">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        stroke="#18721f"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="1.5" y1="10.5" x2="10.5" y2="1.5" />
                        <polyline points="4.5,1.5 10.5,1.5 10.5,7.5" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Accent bar */}
                <div className="proj-accent-bar" />
              </div>
            </Link>
          ))}
        </div>

        {/* Toggle button */}
        <div className="mt-10 text-center">
          {visibleCount < projectsData.length ? (
            <button onClick={handleShowMore} className="proj-btn">
              Show More
            </button>
          ) : (
            <button onClick={handleViewLess} className="proj-btn">
              View Less
            </button>
          )}
        </div>
      </section>
    </>
  );
}