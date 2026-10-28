"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { IMAGES, HISTORICAL_GEMS } from "@/data/content";

export default function HistoricalGems() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-[#16202c] text-white py-16 sm:py-24 overflow-hidden">
      {/* Right-aligned US Capitol building background image */}
      <div
        className="absolute right-0 top-0 bottom-0 w-full md:w-3/5 lg:w-1/2 bg-contain sm:bg-cover bg-no-repeat bg-right-bottom opacity-40 sm:opacity-50 pointer-events-none mix-blend-lighten"
        style={{
          backgroundImage: `url(${IMAGES.usCapitol})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#16202c] via-[#16202c]/90 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          {/* Section Subheading */}
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight uppercase leading-none text-white">
            HISTORICAL GEMS<br />THROUGH THE AGES
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
            From iconic landmarks to charming historic towns, the USA is rich in history and heritage waiting to be explored.
          </p>

          <div className="mt-6 mb-8">
            <button className="px-6 py-2.5 rounded-full bg-white text-zinc-900 text-xs font-bold tracking-wide hover:bg-zinc-200 transition-all shadow-sm">
              Explore Historical Destinations
            </button>
          </div>

          {/* Expandable Historic Cities List */}
          <div className="space-y-1">
            {HISTORICAL_GEMS.map((gem, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={gem.name} className="border-b border-zinc-700/60">
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full py-3.5 text-left flex items-center justify-between group cursor-pointer"
                  >
                    <span className="text-sm font-semibold text-zinc-200 group-hover:text-blue-300 transition-colors">
                      {gem.name}
                    </span>
                    <span className="text-zinc-400 group-hover:text-white transition-colors">
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5" />
                      ) : (
                        <Plus className="w-3.5 h-3.5" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pb-4 text-xs text-zinc-300 leading-relaxed animate-in fade-in duration-200 pr-4">
                      {gem.desc}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

