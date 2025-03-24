// pages/rewards.tsx
"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import PrizeLogo from "./PrizeLogo";

const slides = [
    {
        title: "Code Astraa",
        image: "first.png",
        prize: "50k worth of cash prize for the 1st Position.",
    },
    {
        title: "Code Astraa",
        image: "second.png",
        prize: "30k worth of cash prize for the 2nd Position.",
    },
    {
        title: "Code Astraa",
        image: "third.png",
        prize: "20k worth of cash prize for the 3rd Position.",
    },
];

const Rewards: React.FC = () => {
    return (
        <div className="relative -z-1">
            <img src="/nbg3.png" className="absolute inset-0 w-screen h-screen" />
            <section
                id="prizes"
                className="h-screen flex flex-col items-center justify-center bg-inherit relative overflow-hidden bg-repeat-y bg-cover"
            >
                {/* Background */}
                <div className="absolute inset-0 bg-cover bg-center" />

                {/* Main content */}
                <div className="relative z-10 w-full max-w-7xl  px-4">
                    {/* Title */}
                    <div className="text-center flex items-center justify-center mt-5">
                        <PrizeLogo />
                    </div>

                    {/* Slider Section */}
                    <div className="relative max-w-4xl mx-auto md:y-12">
                        <Swiper
                            modules={[EffectFade, Autoplay]}
                            effect="fade"
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            className="w-full"
                        >
                            {slides.map((slide, index) => (
                                <SwiperSlide key={index}>
                                    <div className="flex">
                                        <div className="flex items-center justify-center">
                                            <img src="/arrowright.png" />
                                        </div>
                                        <div className="flex flex-col md:flex-row justify-center items-center gap-6 ">
                                            <div className="flex relative items-center justify-center">
                                                <img src="/frame.png" alt="frame here" className="" />
                                                <img
                                                    src={slide.image}
                                                    alt={slide.title}
                                                    className="object-cover h-10/12 md:h-88 rounded-lg absolute top-2 md:top-4 md:right-16"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <img src="/arrowleft.png" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Rewards;
