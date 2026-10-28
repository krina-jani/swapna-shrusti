"use client";

import React, { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { IMAGES, VISA_QUESTIONS } from "@/data/content";

export default function VisaEntry() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="visa-entry" className="relative bg-[#16212e] text-white overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Background with Statue of Liberty silhouette on the right side */}
      <div 
        className="absolute right-0 top-0 bottom-0 w-full sm:w-2/3 lg:w-1/2 bg-contain sm:bg-cover bg-no-repeat bg-right opacity-35 sm:opacity-40 pointer-events-none mix-blend-screen"
        style={{
          backgroundImage: `url(${IMAGES.statueOfLiberty})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#16212e] via-[#16212e]/90 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          {/* Header Tag */}
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#d4af37] uppercase">
            TRAVEL INFORMATION
          </span>

          {/* Heading */}
          <h2 className="mt-2 font-heading font-black text-3xl sm:text-4xl md:text-5xl tracking-tight uppercase leading-tight text-white">
            VISA & ENTRY
          </h2>

          <p className="mt-3 text-sm sm:text-base text-zinc-300">
            Find the information you need to plan your trip to the United States.
          </p>

          {/* Accordion Questions List */}
          <div className="mt-8 space-y-3">
            {VISA_QUESTIONS.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="border-b border-zinc-700/80 transition-colors"
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full py-4 text-left flex items-center justify-between group cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-semibold text-zinc-100 group-hover:text-blue-300 transition-colors pr-4">
                      {item.q}
                    </span>
                    <span className="text-zinc-400 group-hover:text-white transition-colors shrink-0">
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pb-4 text-xs sm:text-sm text-zinc-300 leading-relaxed pr-6 animate-in fade-in duration-200">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom link */}
          <div className="mt-8">
            <a
              href="#destinations"
              className="inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold text-zinc-300 hover:text-white underline-offset-4 hover:underline group"
            >
              <span>View All Travel Information</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

