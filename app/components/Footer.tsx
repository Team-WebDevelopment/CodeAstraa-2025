import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gradient-to-t from-black to-[#2A1A5E] text-white py-6 px-4 sm:px-10 w-full">
            <div className="flex justify-between mx-9">
                <div className="font-mno">
                    <p className="text-lg">
                        Stay Connected For Future Hackathons
                    </p>
                    <p className="text-md mt-2">
                        Join over 10,500 people who recieve...
                    </p>

                    <div className="mt-6">
                        <input type="text" className="bg-white p-2 border-4 border-black" />
                        <button className="bg-[#270A4B] px-4 py-2 ml-4 border-4 border-black">
                            Sign-Up
                        </button>
                    </div>
                </div>
                <div className="flex flex-col">
                    <span className="text-lg font-bold">
                        Collaborators
                    </span>
                    <div className="text-center flex flex-col lowercase text-md">
                        <span>LINK1</span>
                        <span>LINK2</span>
                        <span>LINK3</span>
                        <span>LINK4</span>
                        <span>LINK4</span>
                    </div>
                </div>
                <div>
                    LOGO
                </div>
            </div>

            <div className="max-w-[1200px] mx-8 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 mt-18">
                {/* Left Section: Logos and Text */}
                <div className="flex flex-col items-center md:items-start">
                    <div className="flex items-center gap-10 mb-4">
                        <img
                            src="/About/a1.png"
                            alt="IEEE Logo"
                            className="h-[40px] w-auto"
                        />
                        <div className="relative">
                            <img
                                src="/About/a1.png"
                                alt="IEEE Student Branch Logo"
                                className="h-[40px] w-auto"
                            />
                        </div>
                        <img
                            src="/About/a1.png"
                            alt="Galgotias University Logo"
                            className="h-[40px] w-auto"
                        />
                    </div>

                    {/* Text */}
                    <div className="text-center md:text-left text-sm text-white leading-[1.4] font-medium ont-serif">
                        <p>© 2025 IEEE Student Branch, Galgotias University</p>
                        <p>Galgotias University, Plot No. 2, Yamuna Expy,</p>
                        <p>opposite Buddha International Circuit, Sector 17A,</p>
                        <p>Greater Noida, Uttar Pradesh 203201</p>
                    </div>
                </div>

                {/* Right Section: Social Media */}
                <div className="flex flex-col items-center justify-center h-full">
                    <p className="text-[20px] mb-3 tracking-wide font-medium">
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
            <div className="py-6">
                <hr />
            </div>
            <div className="flex justify-end space-x-9">
                <span>
                    Status
                </span>
                <span>
                    Privacy Policy
                </span>
                <span>
                    Terms of Use
                </span>
                <span>
                    LOGO HERE
                </span>
            </div>
        </footer>
    );
};

export default Footer;
