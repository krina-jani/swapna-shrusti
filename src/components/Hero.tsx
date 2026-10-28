"use client";

import React, { useState } from "react";
import { Play, X } from "lucide-react";
import { IMAGES } from "@/data/content";

export default function Hero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section className="relative w-full h-[640px] sm:h-[720px] lg:h-[780px] bg-zinc-950 overflow-hidden flex items-center justify-center text-center">
      {/* Background Image with Dark Vignette Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: `url(${IMAGES.hero})`,
        }}
      >
        {/* Gradients to match the reference: subtle dark top, vignette sides, warm glow center-right */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/60" />
        <div className="absolute inset-0 bg-radial from-transparent via-black/20 to-black/60" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center">
        {/* Top small category label */}
        <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-zinc-300 uppercase mb-3">
          DISCOVER
        </span>

        {/* Main Display Headline */}
        <h1 className="font-heading font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[0.95] uppercase drop-shadow-md">
          AMERICA<br />THE BEAUTIFUL
        </h1>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-zinc-200 font-medium max-w-xl mx-auto drop-shadow">
          Iconic places. Endless experiences.<br className="hidden sm:inline" /> A trip for every traveler.
        </p>

        {/* Pill-shaped navigation buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a
            href="#destinations"
            className="px-6 py-2.5 rounded-full bg-white text-zinc-900 text-xs sm:text-sm font-bold tracking-wide shadow-md hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95"
          >
            Destinations
          </a>
          <a
            href="#experiences"
            className="px-6 py-2.5 rounded-full bg-white text-zinc-900 text-xs sm:text-sm font-bold tracking-wide shadow-md hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95"
          >
            Experiences
          </a>
          <a
            href="#dream-trip"
            className="px-6 py-2.5 rounded-full bg-white text-zinc-900 text-xs sm:text-sm font-bold tracking-wide shadow-md hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95"
          >
            Trip Ideas
          </a>
          <a
            href="#visa-entry"
            className="px-6 py-2.5 rounded-full bg-white text-zinc-900 text-xs sm:text-sm font-bold tracking-wide shadow-md hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95"
          >
            Plan Your Trip
          </a>
        </div>

        {/* Watch the Film CTA with Play Circle */}
        <div className="mt-10 sm:mt-12">
          <button
            onClick={() => setIsVideoModalOpen(true)}
            className="group inline-flex items-center space-x-3 text-white text-xs sm:text-sm font-semibold tracking-wider uppercase hover:text-blue-300 transition-colors"
          >
            <span className="w-10 h-10 rounded-full border border-white/80 flex items-center justify-center group-hover:scale-110 group-hover:border-blue-400 group-hover:bg-blue-600/20 transition-all">
              <Play className="w-4 h-4 text-white fill-white ml-0.5" />
            </span>
            <span>Watch the Film</span>
          </button>
        </div>
      </div>

      {/* Video Modal Popup */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden shadow-2xl border border-zinc-800">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 z-20 text-white/80 hover:text-white p-2 rounded-full bg-black/50"
              aria-label="Close video"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative pt-[56.25%] w-full">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/1la4jNZv0m4?autoplay=1"
                title="America the Beautiful Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

