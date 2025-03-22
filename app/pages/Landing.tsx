"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Logo from "../components/Logo";

export default function HomePage() {
  // Set the date we're counting down to (April 4, 2025)
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdownDate = new Date("April 4, 2025 00:00:00").getTime();

    // Update the countdown every 1 second
    const interval = setInterval(() => {
      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the countdown date
      const distance = countdownDate - now;

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Update state
      setCountdown({
        days,
        hours,
        minutes,
        seconds,
      });

      // If the countdown is finished, clear interval
      if (distance < 0) {
        clearInterval(interval);
        setCountdown({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    }, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Font face declaration */}
      <style jsx global>{`
        @font-face {
          font-family: "Harry P";
          src: url("/HARRYP__.TTF") format("truetype");
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }
      `}</style>

      <section
        className={`min-h-screen flex flex-col items-center justify-center bg-[#3E236E] bg-cover bg-center relative overflow-hidden`}
        style={{
          backgroundImage: "url('/bg.jpg')",
        }}
      >
        {/* Main Content - Center */}
        <div className="text-center mt-16 px-4 z-10">
          <span className="hidden md:block">
            <Logo width={934} height={315} />
          </span>

          <span className="flex md:hidden">
            <Logo width={934} height={130} />
          </span>

          {/* Register Button */}
          <div className="mt-12 md:mt-16 mb-8">
            <Link
              href="/register"
              className="bg-[#1D0B36] tracking-widest text-yellow-400 font-bold text-xl md:text-3xl px-10 py-3 rounded-full border border-yellow-500/30 hover:bg-[#2A1245] transition shadow-lg"
              style={{
                textShadow: "0 0 5px rgba(255,215,0,0.3)",
                fontFamily: "'Harry P', fantasy",
              }}
            >
              Register Now!!
            </Link>
          </div>

          {/* Countdown Section */}
          <div className="mt-12 md:mt-16">
            <h3 className="text-white text-xl md:text-2xl mb-6">
              And the countdown begins:
            </h3>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-gray-400/20 backdrop-blur-sm w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center border border-yellow-500/20">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl text-gray-700 font-bold">
                    {countdown.days}
                  </div>
                  <div className="text-yellow-400 text-xs md:text-sm">Days</div>
                </div>
              </div>

              <div className="bg-gray-400/20 backdrop-blur-sm w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center border border-yellow-500/20">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl text-gray-700 font-bold">
                    {countdown.hours}
                  </div>
                  <div className="text-yellow-400 text-xs md:text-sm">
                    Hours
                  </div>
                </div>
              </div>

              <div className="bg-gray-400/20 backdrop-blur-sm w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center border border-yellow-500/20">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl text-gray-700 font-bold">
                    {countdown.minutes}
                  </div>
                  <div className="text-yellow-400 text-xs md:text-sm">
                    Minutes
                  </div>
                </div>
              </div>

              <div className="bg-gray-400/20 backdrop-blur-sm w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center border border-yellow-500/20">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl text-gray-700 font-bold">
                    {countdown.seconds}
                  </div>
                  <div className="text-yellow-400 text-xs md:text-sm">
                    Seconds
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
