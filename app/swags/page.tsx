// pages/page.tsx
"use client";
import React, { useRef, useState, useEffect } from 'react';
import { motion, Variants } from 'motion/react';
import html2canvas from 'html2canvas';

// Animation Variants
const textVariants: Variants = {
  initial: { y: 30, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
};

const buttonVariants: Variants = {
  hover: { scale: 1.1, backgroundColor: '#FFD700', color: '#1F2937', transition: { duration: 0.3 } },
};

const page: React.FC = () => {
  const [userImage, setUserImage] = useState<string | null>(null);
  const [userName, setUserName] = useState<string>(''); // State for user name
  const [teamName, setTeamName] = useState<string>(''); // State for team name
  const [showFrame, setShowFrame] = useState<boolean>(false);
  const frameRef = useRef<HTMLDivElement>(null);

  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userImage && userName && teamName) {
      setShowFrame(true);
    } else {
      alert("Please upload an image, enter your name, and your team name!");
    }
  };

  // Download framed image with improved quality
  const downloadFrame = async () => {
    if (frameRef.current) {
      // Use html2canvas with custom options to improve quality
      const canvas = await html2canvas(frameRef.current, {
        scale: 4,
        useCORS: true,
        backgroundColor: null,
        width: 400, 
        height: 500,
        logging: false, 
      });

      // Convert canvas to high-quality PNG
      const link = document.createElement('a');
      link.download = 'codeastraa-framed-photo.png';
      link.href = canvas.toDataURL('image/png', 1.0); 
      link.click();
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#3E236E] bg-cover bg-center relative overflow-hidden p-10">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/bg.jpg')",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Heading */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={textVariants}
          className="mb-12"
        >
          <h1
            className="text-5xl md:text-7xl harryp text-[#FFD700] mt-12"
            style={{
              textShadow: "0 0 20px rgba(234, 179, 8, 0.5)",
            }}
          >
            Digital Swags
          </h1>
        </motion.div>

        {/* Main Content */}
        <div className="relative max-w-4xl mx-auto">
          {!showFrame ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div className="flex justify-center">
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="font-mono text-lg p-3 rounded-lg bg-white/20 text-white border-2 border-[#800080] focus:outline-none focus:ring-2 focus:ring-[#FFD700] w-full max-w-md"
                />
              </div>

              {/* Team Name Input */}
              <div className="flex justify-center">
                <input
                  type="text"
                  placeholder="Enter your team name"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  className="font-mono text-lg p-3 rounded-lg bg-white/20 text-white border-2 border-[#800080] focus:outline-none focus:ring-2 focus:ring-[#FFD700] w-full max-w-md"
                />
              </div>

              {/* Image Upload */}
              <div className="flex justify-center">
                <label className="cursor-pointer flex items-center space-x-3 bg-[#800080] hover:bg-fuchsia-700 text-white py-3 px-6 rounded-lg harryp text-xl tracking-widest hover:scale-105 duration-200">
                  <span>Upload Your Photo</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <motion.button
                  type="submit"
                  variants={buttonVariants}
                  whileHover="hover"
                  className="bg-[#FFD700] text-[#1F2937] py-3 px-8 rounded-lg harryp text-xl tracking-widest font-semibold shadow-lg shadow-amber-300/50 cursor-pointer"
                >
                  Generate Frame
                </motion.button>
              </div>
            </form>
          ) : (
            <div className="relative flex flex-col justify-center">
              {/* Frame Container */}
              <div
                ref={frameRef}
                className="relative w-[400px] h-[500px]"
              >
                <img
                  src="/swags.svg"
                  alt="Frame"
                  className="absolute w-full h-full object-contain"
                  style={{
                    top: 0,
                    left: 0,
                    zIndex: 1,
                  }}
                />

                {/* User Image */}
                <img
                  src={userImage!}
                  alt="User"
                  className="absolute w-[220px] h-[200px] object-cover rounded-lg"
                  style={{
                    top: '43%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 2,
                  }}
                />

                {/* User Name */}
                <div
                  className="absolute w-full tracking-widest text-center harryp text-[#FFD700] text-2xl"
                  style={{
                    bottom: '30%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    textShadow: '0 0 5px rgba(234, 179, 8, 0.5)',
                    zIndex: 3,
                  }}
                >
                  {userName}
                </div>

                {/* Team Name */}
                <div
                  className="absolute w-full tracking-widest text-center harryp text-white text-lg"
                  style={{
                    bottom: '26%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    textShadow: '0 0 5px rgba(234, 179, 8, 0.5)',
                    zIndex: 3,
                  }}
                >
                  {teamName}
                </div>
              </div>

              {/* Download Button */}
              <div className="mt-8 flex justify-center">
                <motion.button
                  onClick={downloadFrame}
                  variants={buttonVariants}
                  whileHover="hover"
                  className="flex items-center space-x-2 bg-[#FFD700] text-[#1F2937] py-3 px-8 rounded-lg harryp text-xl tracking-widest font-semibold shadow-lg shadow-amber-300/50 cursor-pointer"
                >
                  <span>Download Framed Photo</span>
                </motion.button>
              </div>
            </div>
          )}
        </div>
      <div className="mt-12 text-purple-300/70 text-sm">
          Create your magical digital swag and share the enchantment!
        </div>
      </div>
    </div>
  );
};

export default page;