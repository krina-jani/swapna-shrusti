import React from "react";
import { IMAGES } from "@/data/content";

export default function SportsSurfing() {
  return (
    <section id="sports" className="bg-[#16202c] text-white py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Split Banner: Text on Left, Big Surfer / Wave on Right */}
        <div className="relative rounded-2xl overflow-hidden min-h-[300px] sm:min-h-[360px] flex items-center p-8 sm:p-12 mb-10 border border-zinc-800 shadow-xl bg-[#121922]">
          {/* Big Ocean Wave & Surfer Image right side */}
          <div
            className="absolute right-0 top-0 bottom-0 w-full sm:w-3/5 lg:w-1/2 bg-cover bg-center transition-transform duration-700"
            style={{
              backgroundImage: `url(${IMAGES.sportsHeroWave})`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#121922] via-[#121922]/95 to-transparent sm:w-2/3" />

          {/* Left Text */}
          <div className="relative z-10 max-w-lg">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#60a5fa] uppercase">
              SPORTS, SURFING AND EVENTS
            </span>

            <h2 className="mt-2 font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase leading-[0.95]">
              EXCITEMENT<br />AROUND EVERY CORNER
            </h2>

            <p className="mt-3 text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
              From world-class sporting events to unforgettable outdoor adventures, there&apos;s always something happening in the United States.
            </p>

            <div className="mt-6">
              <button className="px-6 py-2.5 rounded-full bg-white text-zinc-900 text-xs font-bold tracking-wide hover:bg-zinc-200 transition-all shadow-sm">
                Explore Events
              </button>
            </div>
          </div>
        </div>

        {/* 3 Split Cards: Sports, Surfing, Events & Festivals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {IMAGES.sportsCards.map((card) => (
            <div
              key={card.title}
              className="group relative h-64 sm:h-72 rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all border border-zinc-800"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url(${card.img})`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

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

