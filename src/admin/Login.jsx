import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API_BASE_URL from "../config/api";
import { AuthContext } from "../auth/AuthContext";

// ── Icons ─────────────────────────────────────────────────────────────────────
const LoginArrowIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
    <polyline points="10 17 15 12 10 7" />
    <line x1="15" y1="12" x2="3" y2="12" />
  </svg>
);

const MailIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const LockIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const EyeOffIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
    <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
    <line x1="2" x2="22" y1="2" y2="22" />
  </svg>
);

const EyeOnIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

// ── Cloud Background ──────────────────────────────────────────────────────────
const CloudBackground = () => (
  <div
    className="absolute inset-0 overflow-hidden pointer-events-none select-none"
    aria-hidden="true"
  >
    {/* Sky gradient */}
    <div className="absolute inset-0 bg-gradient-to-b from-sky-300 via-sky-200 to-blue-100" />

    {/* Subtle arc lines */}
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.18]"
      viewBox="0 0 1024 768"
      preserveAspectRatio="xMidYMid slice"
    >
      <ellipse
        cx="512"
        cy="980"
        rx="440"
        ry="400"
        fill="none"
        stroke="white"
        strokeWidth="1.2"
      />
      <ellipse
        cx="512"
        cy="980"
        rx="580"
        ry="530"
        fill="none"
        stroke="white"
        strokeWidth="0.9"
      />
      <ellipse
        cx="512"
        cy="980"
        rx="720"
        ry="660"
        fill="none"
        stroke="white"
        strokeWidth="0.6"
      />
    </svg>

    {/* Bottom wave clouds */}
    <div className="absolute bottom-0 left-0 right-0">
      <svg
        viewBox="0 0 1440 260"
        className="w-full"
        preserveAspectRatio="none"
        style={{ display: "block" }}
      >
        <path
          fill="white"
          fillOpacity="0.55"
          d="M0,200L60,188C120,176,240,152,360,149C480,147,600,165,720,178C840,191,960,196,1080,185C1200,174,1320,148,1380,135L1440,122L1440,260L0,260Z"
        />
        <path
          fill="white"
          fillOpacity="0.35"
          d="M0,230L80,218C160,206,320,182,480,178C640,174,800,190,960,196C1120,202,1280,198,1360,196L1440,194L1440,260L0,260Z"
        />
        <path
          fill="white"
          fillOpacity="0.7"
          d="M0,248L120,242C240,236,480,224,720,224C960,224,1200,236,1320,242L1440,248L1440,260L0,260Z"
        />
      </svg>
    </div>

    {/* Left cloud puff */}
    <div className="absolute bottom-16 -left-8 w-64 h-28 opacity-75">
      <div className="absolute bottom-0 left-6 w-48 h-16 bg-white rounded-full opacity-60" />
      <div className="absolute bottom-6 left-12 w-36 h-20 bg-white rounded-full opacity-75" />
      <div className="absolute bottom-2 left-0 w-24 h-12 bg-white rounded-full opacity-50" />
    </div>

    {/* Right cloud puff */}
    <div className="absolute bottom-12 -right-6 w-72 h-32 opacity-70">
      <div className="absolute bottom-0 right-6 w-56 h-16 bg-white rounded-full opacity-60" />
      <div className="absolute bottom-8 right-16 w-40 h-24 bg-white rounded-full opacity-75" />
      <div className="absolute bottom-3 right-0 w-28 h-14 bg-white rounded-full opacity-50" />
    </div>
  </div>
);

// ── Main Component ────────────────────────────────────────────────────────────
const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [apiMessage, setApiMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
  if (Object.keys(errors).length > 0 || apiMessage || successMessage) {
    const timer = setTimeout(() => {
      setErrors({});
      setApiMessage("");
      setSuccessMessage("");
    }, 2000);

    return () => clearTimeout(timer);
  }
}, [errors, apiMessage, successMessage]);

  // ── ORIGINAL LOGIC — UNTOUCHED ──
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors({});
    setApiMessage("");
    setSuccessMessage("");

    let newErrors = {};

    if (!form.email) {
      newErrors.email = "Email is required";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.message === "Email not found") {
          setErrors({ email: "This email is not registered" });
        } else if (data.message === "Password is incorrect") {
          setErrors({ password: "Incorrect password" });
        } else {
          setApiMessage(data.message || "Something went wrong");
        }
        return;
      }

      // SUCCESS
      setSuccessMessage("Login successful. Redirecting...");
      login(data);

      setTimeout(() => {
        navigate("/dashboard");
      }, 1200);
    } catch (error) {
      setApiMessage("Unable to connect to server. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  // ────────────────────────────────

  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Sora:wght@600;700&display=swap');
        * { box-sizing: border-box; }
        .login-root { font-family: 'DM Sans', system-ui, manrope; }
        .login-card {
          background: rgba(255,255,255,0.68);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255,255,255,0.85);
          border-radius: 28px;
          box-shadow: 0 20px 60px rgba(125,185,232,0.28), 0 4px 16px rgba(0,0,0,0.06);
        }
        .login-input {
          width: 100%;
          padding: 12px 14px 12px 42px;
          font-size: 14px;
          font-family: 'DM Sans', system-ui, manrope;
          background: rgba(255,255,255,0.72);
          border: 1.5px solid #e5e7eb;
          border-radius: 14px;
          color: #374151;
          outline: none;
          transition: border-color 0.18s, box-shadow 0.18s, background 0.18s;
        }
        .login-input::placeholder { color: #9ca3af; }
        .login-input:focus {
          border-color: #7dd3fc;
          background: rgba(255,255,255,0.92);
          box-shadow: 0 0 0 3px rgba(125,211,252,0.22);
        }
        .login-btn {
          width: 100%;
          padding: 14px;
          background: #111827;
          color: #fff;
          font-family: 'DM Sans', system-ui, manrope;
          font-size: 14.5px;
          font-weight: 600;
          border: none;
          border-radius: 14px;
          cursor: pointer;
          transition: background 0.18s, transform 0.1s, box-shadow 0.18s;
          box-shadow: 0 2px 10px rgba(17,24,39,0.18);
        }
        .login-btn:hover { background: #1f2937; box-shadow: 0 4px 16px rgba(17,24,39,0.22); }
        .login-btn:active { transform: scale(0.985); }
        .social-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 11px 0;
          background: rgba(255,255,255,0.82);
          border: 1.5px solid #e5e7eb;
          border-radius: 14px;
          cursor: pointer;
          transition: background 0.18s, border-color 0.18s, box-shadow 0.18s;
        }
        .social-btn:hover {
          background: #fff;
          border-color: #d1d5db;
          box-shadow: 0 2px 8px rgba(0,0,0,0.07);
        }
        .icon-wrap {
          position: absolute;
          left: 13px;
          top: 50%;
          transform: translateY(-50%);
          color: #9ca3af;
          pointer-events: none;
          display: flex;
          align-items: center;
        }
        .eye-btn {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          cursor: pointer;
          color: #9ca3af;
          display: flex;
          align-items: center;
          padding: 2px;
          transition: color 0.15s;
        }
        .eye-btn:hover { color: #6b7280; }
        .forgot-link {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 12.5px;
          color: #6b7280;
          font-family: 'DM Sans', system-ui, manrope;
          padding: 0;
          transition: color 0.15s;
        }
        .forgot-link:hover { color: #374151; text-decoration: underline; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .anim-fade-up { animation: fadeUp 0.55s cubic-bezier(0.22,1,0.36,1) both; }
      `}</style>

      <div
        className="login-root"
        style={{
          minHeight: "100vh",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px",
          overflow: "hidden",
        }}
      >
        <CloudBackground />

        {/* Card */}
        <div
          className="login-card anim-fade-up"
          style={{
            position: "relative",
            zIndex: 10,
            width: "100%",
            maxWidth: "380px",
            padding: "36px 32px 32px",
          }}
        >
          {/* Top icon */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "22px",
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                background: "#fff",
                borderRadius: 16,
                boxShadow: "0 4px 18px rgba(0,0,0,0.10)",
                border: "1px solid #f1f5f9",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#111827",
              }}
            >
              <LoginArrowIcon />
            </div>
          </div>

          {/* Heading */}
          <div style={{ textAlign: "center", marginBottom: "26px" }}>
            <h1
              style={{
                fontFamily: "'Sora', manrope",
                fontSize: 22,
                fontWeight: 700,
                color: "#111827",
                margin: "0 0 8px",
                letterSpacing: "-0.3px",
              }}
            >
              Sign in with email
            </h1>
            <p
              style={{
                fontSize: 13.5,
                color: "#6b7280",
                margin: 0,
                lineHeight: 1.55,
              }}
            >
              Sign in to access the Admin Dashboard and manage your system
              securely.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            style={{ display: "flex", flexDirection: "column", gap: 10 }}
          >
            {/* Email */}
            <div style={{ position: "relative" }}>
              <span className="icon-wrap">
                <MailIcon />
              </span>

              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                className="login-input"
              />

              {errors.email && (
                <p
                  style={{
                    color: "#ef4444",
                    fontSize: "12px",
                    marginTop: "4px",
                  }}
                >
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div style={{ position: "relative" }}>
              <span className="icon-wrap">
                <LockIcon />
              </span>

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                onChange={handleChange}
                className="login-input"
                style={{ paddingRight: 40 }}
              />

              <button
                type="button"
                className="eye-btn"
                onClick={() => setShowPassword((v) => !v)}
                tabIndex={-1}
              >
                {showPassword ? <EyeOnIcon /> : <EyeOffIcon />}
              </button>

              {errors.password && (
                <p
                  style={{
                    color: "#ef4444",
                    fontSize: "12px",
                    marginTop: "4px",
                  }}
                >
                  {errors.password}
                </p>
              )}
            </div>

            {apiMessage && (
              <div
                style={{
                  background: "#fee2e2",
                  color: "#b91c1c",
                  padding: "10px",
                  borderRadius: "10px",
                  fontSize: "13px",
                  marginBottom: "6px",
                  textAlign: "center",
                }}
              >
                {apiMessage}
              </div>
            )}

            {successMessage && (
              <div
                style={{
                  background: "#dcfce7",
                  color: "#166534",
                  padding: "10px",
                  borderRadius: "10px",
                  fontSize: "13px",
                  marginBottom: "6px",
                  textAlign: "center",
                }}
              >
                {successMessage}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="login-btn"
              disabled={loading}
              style={{ marginTop: 4, opacity: loading ? 0.7 : 1 }}
            >
              {loading ? "Signing in..." : "Get Started"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

