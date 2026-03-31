import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const TopBar = () => {
  return (
    <div className="bg-dark text-white px-6 md:px-[5%] py-2 flex justify-between items-center text-sm">
      <a href="mailto:info@savorka.in" className="topbar-link flex items-center gap-2">
        <FaEnvelope className="text-xs" />
        info@savorka.in
      </a>
      <div className="flex items-center gap-4">
        <a href="https://www.facebook.com/share/18UkDvnpcQ/" target="_blank" className="topbar-link hover:text-primary-bright transition-colors">
          <FaFacebookF size={14} />
        </a>
        {/* <a href="#" className="topbar-link hover:text-primary-bright transition-colors">
          <FaXTwitter size={14} />
        </a> */}
        <a href="https://www.instagram.com/its_savorkasolar?igsh=bmF0MWhiNHduZTNu" target="_blank" className="topbar-link hover:text-primary-bright transition-colors">
          <FaInstagram size={14} />
        </a>
        <a href="https://www.linkedin.com/company/savorka-solar/" target="_blank" className="topbar-link hover:text-primary-bright transition-colors">
          <FaLinkedinIn size={14} />
        </a>
        {/* <a href="#" className="topbar-link hover:text-primary-bright transition-colors">
          <FaYoutube size={15} />
        </a> */}
      </div>
    </div>
  );
};

export default TopBar;
