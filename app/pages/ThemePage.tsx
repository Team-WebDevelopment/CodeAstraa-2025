"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import ThemeCard from "../components/ThemeCard";
import { themes } from "../../public/Themes";

const glowEffect = {
    textShadow: "0px 0px 12px rgba(255, 215, 0, 0.7)",
  };


export default function ThemePage() {
  return (
    <section className="min-h-screen flex flex-col items-center bg-cover bg-center relative overflow-hidden p-3  justify-center "
    style={{ backgroundImage: "url('ThemePg.png')" }}>
           <div className="title"> <motion.h1 
                  className="text-5xl drop-shadow-lg harryp mt-2 text-amber-400 relative sm:text-8xl sm:mt-0" 
                  style={glowEffect}
                >
                  Select Your Spell
                </motion.h1></div>
        <div className=" themes grid grid-cols-2  gap-6  xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 ">
        {themes.map(data => (
          <ThemeCard key={data.id} title={data.title} image={data.image} link={data.link} />
        ))}
        </div>
    </section>
  )
}
