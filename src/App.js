import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import Login from "./admin/Login";
import Dashboard from "./admin/Dashboard";
import ProtectedRoute from "./auth/ProtectedRoute";
import "./styles/index.css";
import BlogPage from "./pages/BlogPage";
import GoSolar from "./pages/GoSolar";
import ServiceSinglePage from "./pages/ServiceSinglePage";
import BlogDetail from "./components/BlogDetail";
import SavorkaBotFloatingButton from "./components/SavorkaBotFloatingButton";
import SavorkaBotPopup from "./components/SavorkaBotPopup";
import ProjectDetail from "./components/ProjectDetail";
import SavorkaPreloader from "./components/Preloader";


function App() {
  const [isBotOpen, setIsBotOpen] = useState(false);
  const [appReady, setAppReady] = useState(false);


  return (
    <>
      {/* Preloader — shown on first load, calls onComplete when done */}
      {!appReady && (
        <SavorkaPreloader onComplete={() => setAppReady(true)} />
      )}

      {/* App — fades in after preloader exits */}
      <AnimatePresence>
        {appReady && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
              // delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <ScrollToTop />

            <SavorkaBotPopup
              isOpen={isBotOpen}
              onClose={() => setIsBotOpen(false)}
            />
            <SavorkaBotFloatingButton
              isOpen={isBotOpen}
              onClick={() => setIsBotOpen(true)}
            />
            <Routes>
              <Route
                path="/*"
                element={
                  <div className="min-h-screen flex flex-col">
                    <TopBar />
                    <Navbar />

                    <div className="flex-1">
                      <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/projects" element={<ProjectsPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/blogs" element={<BlogPage />} />
                        <Route path="/gosolar" element={<GoSolar />} />
                        <Route path="/services/:slug" element={<ServiceSinglePage />} />
                        <Route path="/servicesinglepage" element={<ServiceSinglePage />} />
                        <Route path="/blog-detail" element={<BlogDetail />} />
                        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                        <Route path="/projects/:slug" element={<ProjectDetail />} />
                      </Routes>
                    </div>

                    <Footer />
                  </div>
                }
              />

              <Route path="/admin" element={<Login />} />

              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;