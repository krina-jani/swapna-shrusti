"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export interface FAQItem {
  q: string;
  a: string;
}

interface FAQSectionProps {
  title: string;
  description: string;
  items: FAQItem[];
  ctaText?: string;
  ctaLink?: string;
}

export default function FAQSection({
  title,
  description,
  items,
  ctaText = "Contact Concierge",
  ctaLink = "/contact",
}: FAQSectionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="bg-[#2D3339] text-white py-20 sm:py-24 border-t border-zinc-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Bold Condensed Heading, Description, Pill CTA button */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <h2 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white font-sans leading-none">
              {title}
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed max-w-md">
              {description}
            </p>
            {ctaText && ctaLink && (
              <div className="pt-2">
                <Link
                  href={ctaLink}
                  className="inline-block px-7 py-3 rounded-full bg-[#C5A46D] hover:bg-[#b8955c] active:scale-[0.98] text-[#173A2B] font-bold text-xs uppercase tracking-wider shadow-lg transition-all"
                >
                  {ctaText}
                </Link>
              </div>
            )}
          </div>

          {/* Right Column: Accordion list with clean border dividers */}
          <div className="lg:col-span-7 divide-y divide-zinc-600/70 border-t border-b border-zinc-600/70">
            {items.map((item, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div key={idx} className="py-5 sm:py-6 group transition-colors">
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full text-left flex items-center justify-between gap-6 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-sans font-semibold text-base sm:text-lg text-white group-hover:text-[#C5A46D] transition-colors leading-snug">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-zinc-400 group-hover:text-white shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#C5A46D]" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="mt-4 text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans pr-6 animate-in fade-in duration-200">
                      <p>{item.a}</p>
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

