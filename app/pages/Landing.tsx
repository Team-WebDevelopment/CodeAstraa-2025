"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const glowEffect = {
  textShadow: "0px 0px 12px rgba(255, 215, 0, 0.7)",
};

const Landing = () => {
  return (
    <section
      className="min-h-screen flex flex-col items-center bg-cover bg-center relative overflow-hidden"
      style={{ backgroundImage: "url('bg.png')" }}
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image className="mb-6 mt-28" alt="logo" src="/web.png" height={300} width={300} />
      </motion.div>
      
      <motion.div 
        className="text-center text-amber-400 relative"
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        <motion.p className="mb-10 text-2xl" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Presents
        </motion.p>
        
        <motion.h1 
          className="text-7xl drop-shadow-lg harryp" 
          style={glowEffect}
        >
          CODE ASTRAA 1.0
        </motion.h1>
        
        <motion.p 
          className="text-2xl my-4 harryp"
        >
          Hackardium Leviosa
        </motion.p>
        
        <motion.p 
          className="text-4xl harryp" 
        >
          At Galgotias University on 4 and 5 April 2025
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Landing;
