"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Curated 4K Unsplash luxury resort photography
const UNSPLASH_RESORT_IMAGES = [
  "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=3840&q=90", // Tropical pool & illuminated villas at dusk
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=3840&q=90", // Luxury nature resort suite & gardens
  "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=3840&q=90", // Azure waters and resort palm trees
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=3840&q=90", // Luxury vacation resort pool and deck
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=3840&q=90", // Tropical resort chalets in lush greenery
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatically cycle through Unsplash resort images every 2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev === UNSPLASH_RESORT_IMAGES.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[760px] sm:h-[840px] lg:h-[900px] overflow-hidden bg-black select-none">
      
      {/* ========================================================================= */}
      {/* 2-SECOND AUTOMATIC UNSPLASH RESORT IMAGES CAROUSEL                         */}
      {/* ========================================================================= */}
      {UNSPLASH_RESORT_IMAGES.map((imgUrl, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out ${
            idx === currentImageIndex ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
          }`}
          style={{
            backgroundImage: `url('${imgUrl}')`,
          }}
        >
          {/* Subtle gradient vignette on left for sharp headline readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent sm:w-3/5 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
        </div>
      ))}

      {/* ========================================================================= */}
      {/* HERO CONTENT POSITIONED ON LEFT                                           */}
      {/* ========================================================================= */}
      <div className="relative z-20 h-full max-w-[1280px] mx-auto px-6 sm:px-12 lg:px-16 flex flex-col justify-center items-start text-left">
        <div className="max-w-xl sm:max-w-2xl mt-16 sm:mt-24">
          
          {/* Top Tagline with horizontal accent line */}
          <div className="flex items-center space-x-3 mb-4 sm:mb-6">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-white uppercase font-sans drop-shadow">
              YOUR ESCAPE INTO NATURE
            </span>
            <span className="w-12 h-[1px] bg-white/50" />
          </div>

          {/* Headline: Discover a World / of Wonder */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[84px] text-white leading-[1.05] tracking-tight font-normal drop-shadow-xl">
            Discover a World <br />
            <span className="italic font-light text-[#E5B564]">
              of Wonder
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-white/95 font-sans leading-relaxed max-w-lg drop-shadow">
            Experience unforgettable stays, refreshing escapes, and extraordinary adventures at Swapna Srushti Resort.
          </p>

          {/* Dual Pill CTA Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/discover"
              className="px-7 sm:px-8 py-3.5 rounded-full bg-[#E5B564] hover:bg-[#d4a24f] text-[#1c1c1c] text-xs sm:text-sm font-bold tracking-wider flex items-center space-x-2 shadow-xl hover:scale-105 transition-all"
            >
              <span>Explore Experiences</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/booking"
              className="px-7 sm:px-8 py-3.5 rounded-full bg-black/40 hover:bg-black/60 border border-white/60 text-white text-xs sm:text-sm font-semibold tracking-wider backdrop-blur-sm transition-all hover:border-white shadow-lg"
            >
              <span>Book Your Stay</span>
            </Link>
          </div>

        </div>
      </div>

    </section>
  );
}
