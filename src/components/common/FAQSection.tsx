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
    <section className="bg-[#0C1E17] text-white py-20 sm:py-24 border-t border-[#1B362A] shadow-inner">
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
                  className="inline-block px-7 py-3 rounded-full bg-[#C5A46D] hover:bg-[#b8955c] active:scale-[0.98] text-[#0C1E17] font-bold text-xs uppercase tracking-wider shadow-lg transition-all"
                >
                  {ctaText}
                </Link>
              </div>
            )}
          </div>

          {/* Right Column: Accordion list with clean border dividers */}
          <div className="lg:col-span-7 divide-y divide-[#1D3E30] border-t border-b border-[#1D3E30]">
            {items.map((item, idx) => {
              const isOpen = openIdx === idx;
              const contentId = `faq-answer-${idx}`;
              const buttonId = `faq-question-${idx}`;
              return (
                <div key={idx} className="py-5 sm:py-6 group transition-colors">
                  <button
                    id={buttonId}
                    onClick={() => toggle(idx)}
                    className="w-full text-left flex items-center justify-between gap-6 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A46D] rounded"
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                  >
                    <span className="font-sans font-semibold text-base sm:text-lg text-white group-hover:text-[#C5A46D] transition-colors leading-snug">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-zinc-400 group-hover:text-white shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isOpen ? "rotate-180 text-[#C5A46D]" : ""
                      }`}
                    />
                  </button>

                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`grid transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans pr-6 pb-1">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
