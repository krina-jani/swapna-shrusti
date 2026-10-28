"use client";

import React, { useState } from "react";
import { IMAGES } from "@/data/content";

export default function DreamTrip() {
  const [activePin, setActivePin] = useState<number | null>(null);

  return (
    <section id="dream-trip" className="bg-[#f5f5f3] py-16 sm:py-24 text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase">
          PLAN YOUR JOURNEY
        </span>

        <h2 className="mt-2 font-heading font-black text-3xl sm:text-4xl md:text-5xl text-[#0d1624] tracking-tight uppercase leading-tight">
          YOUR DREAM TRIP<br />BEGINS HERE
        </h2>

        <p className="mt-3 text-sm sm:text-base text-zinc-600 max-w-xl mx-auto">
          Explore iconic destinations, unique experiences and travel inspiration across the United States.
        </p>

        <div className="mt-6 mb-12">
          <a
            href="#destinations"
            className="inline-block px-7 py-3 rounded-full bg-[#122338] text-white text-xs sm:text-sm font-bold tracking-wide hover:bg-[#1e3a5f] transition-all shadow-sm"
          >
            Explore the Map
          </a>
        </div>
      </div>

      {/* Styled US Map Illustration with Interactive Circle Photo Vignettes */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
        <div className="relative w-full h-[320px] sm:h-[440px] md:h-[500px] bg-[#e8e9e4]/70 rounded-3xl p-4 sm:p-8 overflow-hidden border border-zinc-200/80 shadow-inner flex items-center justify-center">
          
          {/* Subtle US Map Outline graphic (SVG) */}
          <svg
            className="absolute inset-0 w-full h-full text-zinc-300/60 pointer-events-none p-6"
            viewBox="0 0 960 600"
            fill="currentColor"
          >
            {/* Representative stylized US Continental landmass shape */}
            <path d="M 120 180 Q 220 170 340 185 Q 460 175 600 180 Q 750 170 850 160 Q 890 220 870 270 Q 840 330 810 390 Q 780 430 720 440 Q 640 450 550 490 Q 480 500 420 460 Q 320 480 240 430 Q 150 410 130 350 Q 110 270 120 180 Z" 
              fill="#e2e4dc"
              stroke="#cfd3c7"
              strokeWidth="2"
            />
            {/* Dotted travel itinerary arcs connecting the pins */}
            <path
              d="M 170 290 Q 280 220 370 330 T 560 320 T 730 280 T 820 220"
              fill="none"
              stroke="#0284c7"
              strokeWidth="2"
              strokeDasharray="6 6"
              className="opacity-75"
            />
            <path
              d="M 230 390 Q 340 440 460 380 T 680 400"
              fill="none"
              stroke="#0284c7"
              strokeWidth="2"
              strokeDasharray="6 6"
              className="opacity-60"
            />
          </svg>

          {/* Destination Circular Image Pins positioned across the USA */}
          {IMAGES.dreamPins.map((pin) => (
            <div
              key={pin.id}
              className="absolute group transition-transform duration-300 hover:scale-125 z-20 cursor-pointer"
              style={{
                left: `${pin.x}%`,
                top: `${pin.y}%`,
              }}
              onMouseEnter={() => setActivePin(pin.id)}
              onMouseLeave={() => setActivePin(null)}
            >
              <div className="relative">
                {/* Pin Circular Photo */}
                <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full border-2 sm:border-3 border-white shadow-lg overflow-hidden bg-white ring-2 ring-black/10">
                  <img
                    src={pin.img}
                    alt={pin.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Hover Tooltip Label */}
                <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-zinc-900 text-white text-xs font-semibold rounded-md whitespace-nowrap shadow-md pointer-events-none transition-opacity duration-200 ${activePin === pin.id ? "opacity-100" : "opacity-0"}`}>
                  {pin.name}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-zinc-900" />
                </div>
              </div>
            </div>
          ))}

          {/* Compass Rose Accent */}
          <div className="absolute top-4 right-4 sm:top-8 sm:right-8 text-zinc-400 font-mono text-[10px] tracking-widest uppercase">
            N ↑
          </div>
        </div>
      </div>
    </section>
  );
}

