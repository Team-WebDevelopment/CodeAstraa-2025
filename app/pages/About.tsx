import React from "react";
import LogosScroller from "../components/LogosScroller";
import "../pages/About.css";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col bg-cover bg-center relative overflow-hidden"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <div className="max-h-[90px] flex items-center w-full bg-gradient-to-b from-[#382B4C] to-[#8365B2]">
        <LogosScroller />
      </div>
      <div className="flex justify-center mt-5">
        <img
          className="mt-10 w-fit h-[130px] md:h-[180px]"
          src="/About/AboutHeading.png"
          alt=""
        />
      </div>
      <div className="flex justify-center">
        {" "}
        <div className="max-w-[1200px] flex mt-20  px-20">
          <div className="bg-white/20 h-[400px] md:h-[300px] w-[350px] md:w-fit border-solid border-1 border-amber-200 p-3 overflow-scroll no-scrollbar">
            <p className="bg-gradient-to-r font-extrabold from-[#edc73c] to-[#FFFFFF] inline-block text-white text-center bg-clip-text">
              Hackathon: A Hub of Innovation and Collaboration A hackathon is an
              intense, time-bound event where developers, designers, and
              entrepreneurs collaborate to create innovative solutions to
              real-world problems. These events can last anywhere from a few
              hours to several days, encouraging participants to build
              functional prototypes of software, hardware, or business ideas.
              Hackathons have gained immense popularity in recent years,
              fostering creativity, problem-solving, and teamwork. Origins and
              Evolution of Hackathons The term "hackathon" is a combination of
              "hack" (in the sense of creative problem-solving, not cybercrime)
              and "marathon", indicating a long, focused effort. The first
              hackathons emerged in the early 2000s within the tech industry,
              particularly among open-source communities and companies like Sun
              Microsystems and Facebook. Over time, hackathons expanded beyond
              coding competitions to include themes like social impact,
              artificial intelligence, healthcare, and sustainability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
