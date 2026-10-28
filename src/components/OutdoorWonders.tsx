import React from "react";
import { IMAGES } from "@/data/content";

export default function OutdoorWonders() {
  return (
    <section id="outdoors" className="bg-white py-16 sm:py-24 text-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Split Layout with Panoramic Background as shown in the reference */}
        <div className="relative rounded-2xl overflow-hidden min-h-[300px] sm:min-h-[360px] flex items-center p-8 sm:p-12 mb-10 shadow-sm border border-zinc-100">
          {/* Panoramic Landscape Background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${IMAGES.outdoorHero})`,
            }}
          />
          {/* White/Bright Vignette for pristine text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent sm:w-2/3" />

          {/* Content */}
          <div className="relative z-10 max-w-lg">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase">
              OUTDOOR WONDERS
            </span>

            <h2 className="mt-2 font-heading font-black text-3xl sm:text-4xl md:text-5xl text-[#0d1624] tracking-tight uppercase leading-[0.95]">
              NATURE LIKE<br />NOWHERE ELSE
            </h2>

            <p className="mt-3 text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
              From majestic mountains and vast deserts to stunning coastlines and national parks, the United States is an outdoor lover&apos;s paradise.
            </p>

            <div className="mt-6">
              <button className="px-6 py-2.5 rounded-full bg-[#122338] text-white text-xs font-bold tracking-wide hover:bg-[#1e3a5f] transition-all shadow-sm">
                Explore Outdoor Destinations
              </button>
            </div>
          </div>
        </div>

        {/* 3 Scenic Photography Cards (National Parks, Road Trips, Coastlines) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {IMAGES.outdoorCards.map((card) => (
            <div
              key={card.title}
              className="group relative h-64 sm:h-72 rounded-lg overflow-hidden cursor-pointer shadow-sm hover:shadow-lg transition-all"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url(${card.img})`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                <h3 className="font-heading font-black text-xl tracking-tight leading-snug">
                  {card.title}
                </h3>
                <p className="text-xs text-zinc-300 font-medium mt-0.5">
                  {card.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

