import React from 'react';
import { Home, Sun, Phone, Mail, AlertTriangle, ArrowLeft, HelpCircle, Globe } from 'lucide-react';

const Savorka404 = () => {
  const handleRedirect = (path, message) => {
    // Option 1: Show a friendly alert (for demo)
    alert(`✨ ${message}`);
    
    // Option 2: Actually redirect (uncomment when ready)
    // window.location.href = path;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-green-50 flex items-center justify-center p-4 sm:p-6 relative overflow-hidden font-sans">
      
      {/* Decorative solar bursts */}
      <div className="absolute w-[40vw] h-[40vw] bg-yellow-300/30 rounded-full top-[-20vh] left-[-15vw] blur-[80px] animate-pulse" />
      <div className="absolute w-[35vw] h-[35vw] bg-green-400/20 rounded-full bottom-[-15vh] right-[-10vw] blur-[80px]" />
      <div className="absolute w-[25vw] h-[25vw] bg-amber-400/20 rounded-full top-1/2 left-1/2 blur-[90px] -translate-x-1/2 -translate-y-1/2" />
      
      {/* Solar panel grid lines (abstract background) */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-green-800" style={{ top: '20%' }} />
        <div className="absolute top-0 left-0 w-full h-px bg-green-800" style={{ top: '40%' }} />
        <div className="absolute top-0 left-0 w-full h-px bg-green-800" style={{ top: '60%' }} />
        <div className="absolute top-0 left-0 w-px h-full bg-green-800" style={{ left: '25%' }} />
        <div className="absolute top-0 left-0 w-px h-full bg-green-800" style={{ left: '50%' }} />
        <div className="absolute top-0 left-0 w-px h-full bg-green-800" style={{ left: '75%' }} />
      </div>

      {/* Main Card */}
      <div className="relative z-10 max-w-2xl w-full bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-amber-300/50 p-6 sm:p-10 text-center">
        
        {/* Solar Icon with rotation */}
        <div className="inline-flex items-center justify-center w-28 h-28 bg-amber-100 rounded-full mb-6 border-2 border-amber-400 animate-spin-slow">
          <Sun className="w-14 h-14 text-amber-500" strokeWidth={1.5} fill="#FBBF24" />
        </div>

        {/* 404 Text */}
        <h1 className="text-7xl sm:text-8xl lg:text-9xl font-black tracking-tighter bg-gradient-to-r from-green-700 via-amber-600 to-yellow-500 bg-clip-text text-transparent mb-4">
          404
        </h1>

        <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-3 flex items-center justify-center gap-2">
          <AlertTriangle className="w-7 h-7 text-amber-500" />
          Solar energy lost!
        </h2>

        <div className="max-w-md mx-auto mb-8">
          <p className="text-green-700 text-base sm:text-lg bg-amber-50/80 backdrop-blur-sm py-3 px-5 rounded-2xl">
            Oops! This page seems to be in the shade. The sunlight couldn't reach it.
            <br />
            <span className="text-sm font-medium text-amber-600">Let's get you back to brighter spaces.</span>
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <button
            onClick={() => handleRedirect('/', '🌞 Heading back to homepage...')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-700 text-white rounded-xl font-semibold shadow-lg hover:bg-green-800 hover:-translate-y-1 transition-all duration-200"
          >
            <Home className="w-5 h-5" />
            Home
          </button>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-stone-100 text-stone-700 rounded-xl font-semibold shadow-sm hover:bg-stone-200 hover:-translate-y-1 transition-all duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>



        <div className="mt-6 text-xs text-stone-500">
          <span>⚡ Savorka Solar — Powering a sustainable future</span>
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Savorka404;