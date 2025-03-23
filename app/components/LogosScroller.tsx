"use client"
import React from "react";
// import * as framerMotion from "motion/react";
import dynamic from 'next/dynamic';
const Motion = dynamic(() => 
  import('framer-motion').then((mod) => mod.motion.div), 
  { ssr: false }
);
const logos: string[] = [
  "/About/a1.png",
  "/About/a1.png",
  "/About/a1.png",
  "/About/a1.png",
  "/About/a1.png",
  "/About/a1.png",
  "/About/a1.png",
  "/About/a1.png",
  "/About/a1.png",
  "/About/a1.png",
  "/About/a1.png",
  "/About/a1.png",
  "/About/a1.png",
  "/About/a1.png",
  "/About/a1.png",
  "/About/a1.png",
  "/About/a1.png",
  "/About/a2.png",
];

const LogosScroller: React.FC = () => {
  const doubledLogos = [...logos, ...logos];

  return (
    <section className="py-8 lg:py-10 overflow-hidden">
      <div className="relative w-full">
        <Motion
          className="flex items-center whitespace-nowrap"
          initial={{ x: "0%" }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {doubledLogos.map((logo: string, index: number) => (
            <img
              key={index}
              src={logo}
              alt="Logo"
              className="h-8 lg:h-14 mx-6 inline-block"
            />
          ))}
        </Motion>
      </div>
    </section>
  );
};

export default LogosScroller;
