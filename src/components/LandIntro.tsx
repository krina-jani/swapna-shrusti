import React from "react";
import { IMAGES } from "@/data/content";

export default function LandIntro() {
  return (
    <section className="bg-[#f7f7f7] text-zinc-900 pt-16 sm:pt-20 pb-0">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Category Label */}
        <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase">
          WELCOME TO THE USA
        </span>

        {/* Display Headline */}
        <h2 className="mt-3 font-heading font-black text-3xl sm:text-4xl md:text-5xl text-[#0d1624] tracking-tight uppercase leading-tight">
          A LAND OF ENDLESS<br />POSSIBILITIES
        </h2>

        {/* Description */}
        <p className="mt-4 sm:mt-5 text-sm sm:text-base text-zinc-600 max-w-2xl mx-auto leading-relaxed">
          From vibrant cities and small towns to breathtaking national parks and scenic coastlines, the United States offers unforgettable experiences for every kind of traveler.
        </p>

        {/* Button */}
        <div className="mt-6 mb-12 sm:mb-16">
          <a
            href="#destinations"
            className="inline-block px-7 py-3 rounded-full bg-[#122338] text-white text-xs sm:text-sm font-bold tracking-wide hover:bg-[#1e3a5f] transition-all shadow-sm"
          >
            Start Exploring
          </a>
        </div>
      </div>

      {/* Full-width landscape vista banner below */}
      <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[420px] overflow-hidden relative">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${IMAGES.landIntro})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      </div>
    </section>
  );
}

