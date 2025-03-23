"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTimes,
  FaBars,
} from "react-icons/fa";

const Navbar = () => {
  // State for mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav className="absolute w-full flex justify-between items-center px-10 py-5 z-50">
      {/* Logo - Top Left */}
      <div className="absolute top-5 left-5 md:left-10 z-30">
        <Image src="/navLogo.png" alt="IEEE Logo" width={150} height={100} />
      </div>

      {/* Desktop Navigation - Top Center with Glassmorphism */}
      <div className="absolute top-6 font-mono left-1/2 transform text-md -translate-x-1/2 hidden md:flex space-x-6 bg-white/5 rounded-full border border-yellow-400/5 shadow-lg items-center justify-center">
        <Link
          href="/about"
          className="bg-[#EBC94B] rounded-full px-8 py-2  flex items-center font-bold"
        >
          About
        </Link>
        <Link
          href="/timeline"
          className=" font-bold text-yellow-400 hover:text-yellow-300 transition p-2 px-8"
        >
          Timeline
        </Link>
        <Link
          href="/themes"
          className=" font-bold text-yellow-400 hover:text-yellow-300 transition p-2 px-8"
        >
          Themes
        </Link>
        <Link
          href="/prizes"
          className=" font-bold text-yellow-400 hover:text-yellow-300 transition p-2 px-8"
        >
          Prizes
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="absolute top-5 right-5 md:hidden z-50">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="bg-yellow-400 rounded-full p-3"
        >
          {mobileMenuOpen ? (
            <FaTimes className="text-xl" />
          ) : (
            <FaBars className="text-xl" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          ></div>

          {/* Menu */}
          <div className="absolute right-0 top-0 h-full w-64 bg-[#2A1245]/90 backdrop-blur-md p-8 flex flex-col gap-6 border-l border-yellow-500/20">
            <div className="flex justify-end">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-yellow-400"
              >
                <FaTimes className="text-2xl" />
              </button>
            </div>

            <Link
              href="/about"
              className="bg-yellow-400 rounded-full py-2 px-6 text-center text-lg font-bold"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>

            <Link
              href="/timeline"
              className="text-lg font-bold text-yellow-400 hover:text-yellow-300 transition py-2 text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Timeline
            </Link>

            <Link
              href="/themes"
              className="text-lg font-bold text-yellow-400 hover:text-yellow-300 transition py-2 text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Themes
            </Link>

            <Link
              href="/prizes"
              className="text-lg font-bold text-yellow-400 hover:text-yellow-300 transition py-2 text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Prizes
            </Link>

            {/* Mobile Social Links */}
            <div className="flex justify-center space-x-4 mt-auto">
              <Link href="https://github.com" target="_blank">
                <div className="bg-yellow-400 rounded-full p-2">
                  <FaGithub className="text-lg" />
                </div>
              </Link>
              <Link href="https://linkedin.com" target="_blank">
                <div className="bg-yellow-400 rounded-full p-2">
                  <FaLinkedin className="text-lg" />
                </div>
              </Link>
              <Link href="https://instagram.com" target="_blank">
                <div className="bg-yellow-400 rounded-full p-2">
                  <FaInstagram className="text-lg" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Social Media - Top Right (Desktop only) */}
      <div className="absolute top-7 right-7 hidden md:flex space-x-4 opacity-50">
        <Link href="https://github.com" target="_blank">
          <div className="rounded-full">
            <FaGithub className="text-4xl text-yellow-400 hover:text-yellow-300" />
          </div>
        </Link>
        <Link href="https://linkedin.com" target="_blank">
          <div className="rounded-full">
            <FaLinkedin className="text-4xl text-yellow-400 hover:text-yellow-300" />
          </div>
        </Link>
        <Link href="https://instagram.com" target="_blank">
          <div className="rounded-full">
            <FaInstagram className="text-4xl text-yellow-400 hover:text-yellow-300" />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
