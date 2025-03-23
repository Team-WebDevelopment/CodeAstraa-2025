// components/Footer.tsx
"use client";
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion, Variants } from 'motion/react';
import Link from 'next/link';
import React from 'react';

// Define animation variants with TypeScript
const iconVariants: Variants = {
  hover: { 
    scale: 1.3, 
    rotate: 15, 
    color: '#FFD700', // Golden glow like a spell
    transition: { duration: 0.3, ease: 'easeInOut' } 
  },
  initial: { scale: 0, opacity: 0 },
  animate: { 
    scale: 1, 
    opacity: 1, 
    transition: { duration: 0.6, ease: 'easeOut' } 
  },
};

const textVariants: Variants = {
  initial: { y: 30, opacity: 0 },
  animate: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.8, delay: 0.3, ease: 'easeOut' } 
  },
};

const sparkleVariants: Variants = {
  animate: {
    opacity: [0, 1, 0],
    scale: [0.5, 1, 0.5],
    transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
  },
};

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white py-16 overflow-hidden">
      {/* Magical Sparkle Background */}
      <motion.div
        className="absolute top-0 left-0 w-4 h-4 bg-yellow-400 rounded-full blur-md"
        variants={sparkleVariants}
        animate="animate"
        style={{ left: '10%', top: '20%' }}
      />
      <motion.div
        className="absolute top-0 left-0 w-6 h-6 bg-indigo-400 rounded-full blur-md"
        variants={sparkleVariants}
        animate="animate"
        style={{ left: '70%', top: '40%' }}
      />
      <motion.div
        className="absolute top-0 left-0 w-5 h-5 bg-purple-400 rounded-full blur-md"
        variants={sparkleVariants}
        animate="animate"
        style={{ left: '40%', top: '80%' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={textVariants}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              {/* <FaWandMagicSparkles className="h-10 w-10 text-yellow-500" /> */}
              <h2 className="text-3xl font-bold text-yellow-300">CodeAstraa</h2>
            </div>
            <p className="text-sm text-gray-200">
              Casting spells of code to shape the future.
            </p>
          </motion.div>

          {/* Links Section */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={textVariants}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-purple-300">Enchanted Links</h3>
            <ul className="space-y-3 text-sm text-gray-200">
              <li>
                <Link href="#" className="hover:text-yellow-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-yellow-400 transition-colors">
                  Timeline
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-yellow-400 transition-colors">
                  Theme
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-yellow-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact & Socials */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={textVariants}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-purple-300">Summon Us</h3>
            <p className="text-sm text-gray-200">
              Owl Post:{' '}
              <a href="mailto:gtc.webdevelopment@gmail.com" className="hover:text-yellow-400">
                gtc.webdevelopment@gmail.com
              </a>
            </p>
            <div className="flex space-x-6">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                variants={iconVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
              >
                <FaGithub className="h-7 w-7 text-gray-200" />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                variants={iconVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
              >
                <FaTwitter className="h-7 w-7 text-gray-200" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                variants={iconVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
              >
                <FaLinkedin className="h-7 w-7 text-gray-200" />
              </motion.a>
              <motion.a
                href="mailto:gtc.webdevelopment@gmail.com"
                variants={iconVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
              >
                <FaEnvelope className="h-7 w-7 text-gray-200" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={textVariants}
          className="mt-12 pt-8 border-t border-purple-800 text-center text-sm text-gray-300"
        >
          <p>
            Conjured with ✨ by the Web Development Wizards
          </p>
        </motion.div>
      </div>

      {/* Magical Glowing Line */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 via-purple-500 to-indigo-500"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 2, ease: 'easeInOut', delay: 0.5 }}
      />
    </footer>
  );
};

export default Footer;