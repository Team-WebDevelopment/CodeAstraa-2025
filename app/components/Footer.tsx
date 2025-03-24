import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-[#1E1A34] to-[#2A1A5E] text-white py-6 px-4 sm:px-10 w-full">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 mt-18">
        {/* Left Section: Logos and Text */}
        <div className="flex flex-col items-center md:items-start">
          {/* Logos 
                    <div className="flex items-center gap-5 mb-4">
                        <img
                            src=""
                            alt="IEEE Logo"
                            className="h-[50px] w-auto"
                        />
                        <div className="relative">
                            <img
                                src=""
                                alt="IEEE Student Branch Logo"
                                className="h-[40px] w-auto"
                            />
                        </div>
                        <img
                            src=""
                            alt="Galgotias University Logo"
                            className="h-[40px] w-auto"
                        />
                    </div>
                    */}

          {/* Text */}
          <div className="text-center md:text-left text-sm text-white leading-[1.4] font-medium">
            <p>© 2025 IEEE Student Branch, Galgotias University</p>
            <p>Galgotias University, Plot No. 2, Yamuna Expy,</p>
            <p>opposite Buddha International Circuit, Sector 17A,</p>
            <p>Greater Noida, Uttar Pradesh 203201</p>
          </div>
        </div>

        {/* Right Section: Social Media */}
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-[20px] font-bold mb-3 tracking-wide">
            SUMMON US ON
          </p>
          <div className="flex gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-[26px] hover:text-gray-200 transition-colors duration-300" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-[26px] hover:text-gray-200 transition-colors duration-300" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-[26px] hover:text-gray-200 transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
