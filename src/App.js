import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import Login from "./admin/Login";
import Dashboard from "./admin/Dashboard";
import ProtectedRoute from "./auth/ProtectedRoute";
import "./styles/index.css";

function App() {
  return (
    <>
      <ScrollToTop /> {/* Scrolls to top on every route change */}
      <Routes>

        {/* Public Website Layout */}
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
                </Routes>
              </div>

              <Footer />
            </div>
          }
        />

        {/* Admin Login */}
        <Route path="/admin" element={<Login />} />

        {/* Protected Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

      </Routes>
    </>
  );
}

export default App;