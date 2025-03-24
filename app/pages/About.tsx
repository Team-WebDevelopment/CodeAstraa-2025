import React from "react";
import LogosScroller from "../components/LogosScroller";
import "../pages/About.css";

export default function About() {
    return (
        <div className="relative">
            <img src="/nbg1.png" className="absolute inset-0 w-screen h-screen" />
            <section
                id="about"
                className="min-h-screen md:h-screen flex flex-col bg-cover relative overflow-hidden"
            >
                <div className="max-h-[80px] flex items-center w-full bg-gradient-to-b from-[#382B4C] to-[#8365B2] mt-4">
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
                    <div className="max-w-[1200px] flex px-20">
                        <div className="h-[400px]  w-[350px] md:w-fit border-solid  border-1 rounded-2xl border-amber-200 p-3 overflow-scroll no-scrollbar">
                            <p className="bg-gradient-to-r font-extrabold from-[#edc73c] to-[#FFFFFF] text-sm inline-block text-white text-center bg-clip-text p-6">
                                Welcome to Code Astraa 2025 – a Harry Potter-themed hackathon where magic and technology unite! 💻🪄 Organized by the Web Development Club and the Mobile Development Club under the Engineering Department, powered by the Galgotias Tech Council in collaboration with IEEE GUSB, this event is more than just a competition – it’s an immersive experience designed to spark creativity and innovation.
                                <br />
                                <br />

                                At Code Astraa, your keyboard is your wand and your code creates magic. Whether you're building enchanting web platforms, conjuring spellbinding mobile apps, or brewing up AI-powered potions, this is your chance to showcase your skills and bring your most imaginative ideas to life.
                                <br />
                                <br />

                                But the real magic lies in the people and the journey. You'll collaborate with fellow tech wizards, learn new skills from seasoned mentors, and challenge yourself in an atmosphere inspired by the wizarding world. With mystical challenges, magical rewards, and plenty of fun surprises, Code Astraa promises an unforgettable adventure.

                                <br />
                                <br />
                                So, ready your laptops and wands, and prepare to code your way through the magic at Code Astraa 2025! 🦉✨🔮
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
