"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SectionData {
  id: string;
  number: string;
  category: string;
  heading: string[];
  description: string;
  buttonText: string;
  buttonLink: string;
  bgType: "green" | "ivory";
  image: string;
}

const SECTIONS: SectionData[] = [
  {
    id: "pool",
    number: "01/04",
    category: "WATER PARK & SWIMMING POOL",
    heading: ["Water Park", "& Resort Pool"],
    description:
      "Experience thrilling water slides, splash zones, wave pools, and crystal-clear swimming waters surrounded by lush greenery. The ultimate place to cool off and celebrate with friends and family.",
    buttonText: "Explore Water Park & Pool",
    buttonLink: "/discover/swimming-pool",
    bgType: "green",
    image: "/images/waterpark/waterpark-aerial.jpg",
  },
  {
    id: "adventure",
    number: "02/04",
    category: "ADVENTURE PARK",
    heading: ["Adventure", "Awaits You"],
    description:
      "Experience thrilling activities, outdoor games and exciting adventures at our adventure park. Perfect for families, friends and adventure lovers of all ages.",
    buttonText: "Explore Adventure Park",
    buttonLink: "/discover/adventure-park",
    bgType: "ivory",
    image: "/images/sticky-adventure.jpg",
  },
  {
    id: "picnic",
    number: "03/04",
    category: "ONE-DAY PICNIC",
    heading: ["Perfect", "Day Out"],
    description:
      "Plan a memorable one-day picnic with your family, friends or group. Enjoy our beautiful gardens, open spaces, activities and delicious dining for a complete day of fun and relaxation.",
    buttonText: "Plan Your Picnic",
    buttonLink: "/events/one-day-picnic",
    bgType: "green",
    image: "/images/sticky-picnic.jpg",
  },
  {
    id: "pre-wedding",
    number: "04/04",
    category: "PRE-WEDDING SHOOT",
    heading: ["Capture", "Your Special", "Moments"],
    description:
      "From dreamy gardens to rustic backdrops, Swapna Srushti Resort offers picture-perfect locations for pre-wedding shoots, albums, films, ad-films and all types of photoshoots.",
    buttonText: "Explore Photoshoot",
    buttonLink: "/for-shoot/pre-wedding",
    bgType: "ivory",
    image: "/images/shoots/resort-poolside-shoot.jpg",
  },
];

export default function StickyExperienceSections() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative w-full bg-[#173A2B]">
      {SECTIONS.map((section, index) => {
        const isGreen = section.bgType === "green";
        const zIndex = 10 + index * 5;

        return (
          <section
            key={section.id}
            style={{
              top: 0,
              zIndex,
            }}
            className="sticky top-0 w-full h-[100dvh] lg:h-[640px] flex items-center shadow-2xl overflow-hidden border-t border-black/10"
          >
            <div className="w-full h-full flex flex-col lg:flex-row">
              
              {/* Content Panel (Compact ~40% on mobile, 47% width on desktop) */}
              <div
                className={`relative w-full lg:w-[47%] h-[42%] xs:h-[40%] lg:h-full flex flex-col justify-center px-6 sm:px-12 lg:px-16 xl:px-20 py-3 xs:py-4 lg:py-12 z-10 overflow-hidden shrink-0 ${
                  isGreen ? "bg-[#173A2B] text-white" : "bg-[#F7F3E9] text-[#202522]"
                }`}
              >
                {/* ========================================================================= */}
                {/* EXACT TROPICAL PALM LEAF SILHOUETTE WATERMARK PATTERN                      */}
                {/* ========================================================================= */}
                <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
                  
                  {/* Top-Right Palm Frond / Leaves cascading inward */}
                  <svg
                    className="absolute -top-10 -right-12 w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] transition-transform duration-700"
                    viewBox="0 0 400 400"
                    fill={isGreen ? "#FFFFFF" : "#173A2B"}
                    fillOpacity={isGreen ? "0.065" : "0.05"}
                  >
                    {/* Palm leaf stem and radiating leaflets matching reference */}
                    <path d="M 400 0 Q 300 120 180 200 Q 80 260 0 300 C 60 250 140 180 220 120 C 300 60 360 20 400 0 Z" />
                    <path d="M 400 40 C 320 80 240 150 160 230 C 220 170 300 100 400 40 Z" />
                    <path d="M 400 90 C 330 130 250 200 190 280 C 250 210 330 140 400 90 Z" />
                    <path d="M 400 150 C 340 190 270 260 220 340 C 270 270 350 200 400 150 Z" />
                    <path d="M 370 0 C 280 70 200 150 130 230 C 190 160 280 80 370 0 Z" />
                    <path d="M 320 0 C 240 60 170 130 100 210 C 160 140 240 70 320 0 Z" />
                    <path d="M 270 0 C 200 50 130 120 70 190 C 130 130 200 60 270 0 Z" />
                    <path d="M 220 0 C 160 40 100 100 40 170 C 100 110 160 50 220 0 Z" />
                  </svg>

                  {/* Bottom-Right Palm Frond / Leaves branching upward */}
                  <svg
                    className="absolute -bottom-16 -right-16 w-[360px] h-[360px] sm:w-[440px] sm:h-[440px] transition-transform duration-700"
                    viewBox="0 0 400 400"
                    fill={isGreen ? "#FFFFFF" : "#173A2B"}
                    fillOpacity={isGreen ? "0.06" : "0.045"}
                  >
                    <path d="M 400 400 Q 280 300 200 180 Q 140 80 100 0 C 150 60 220 140 280 220 C 340 300 380 360 400 400 Z" />
                    <path d="M 400 340 C 320 260 250 180 170 100 C 230 160 300 240 400 340 Z" />
                    <path d="M 400 280 C 330 210 260 140 190 60 C 250 130 330 200 400 280 Z" />
                    <path d="M 400 220 C 340 160 280 90 220 20 C 270 90 350 150 400 220 Z" />
                    <path d="M 340 400 C 260 320 190 240 120 160 C 180 230 260 310 340 400 Z" />
                    <path d="M 280 400 C 210 330 150 260 80 180 C 140 250 210 320 280 400 Z" />
                  </svg>

                </div>

                {/* Content Container */}
                <div className="relative z-10 max-w-lg">
                  
                  {/* Number & Horizontal Line Header: e.g. 01/04 ────── */}
                  <div className="flex items-center space-x-3 mb-3.5">
                    <span
                      className={`text-xs sm:text-sm font-sans font-bold tracking-widest ${
                        isGreen ? "text-white/80" : "text-[#202522]/80"
                      }`}
                    >
                      {section.number}
                    </span>
                    <span
                      className={`w-10 h-[1px] ${
                        isGreen ? "bg-white/40" : "bg-black/30"
                      }`}
                    />
                  </div>

                  {/* Category Tag */}
                  <span className="text-[10px] sm:text-[11px] font-sans font-extrabold tracking-[0.25em] text-[#C5A46D] uppercase block mb-2.5">
                    {section.category}
                  </span>

                  {/* Heading: Bold Editorial Display Serif */}
                  <h2
                    className={`font-serif font-bold text-2xl xs:text-3xl sm:text-4xl lg:text-[46px] tracking-tight leading-[1.05] mb-2 sm:mb-4 ${
                      isGreen ? "text-white" : "text-[#173A2B]"
                    }`}
                  >
                    {section.heading.map((line, lIdx) => (
                      <span key={lIdx} className="block">
                        {line}
                      </span>
                    ))}
                  </h2>

                  {/* Description text */}
                  <p
                    className={`font-sans text-[11px] xs:text-xs sm:text-sm leading-relaxed mb-3 sm:mb-6 max-w-md line-clamp-3 sm:line-clamp-none ${
                      isGreen ? "text-white/80" : "text-zinc-700"
                    }`}
                  >
                    {section.description}
                  </p>

                  {/* Button: Champagne Gold Pill */}
                  <div>
                    <Link
                      href={section.buttonLink}
                      className="inline-flex items-center space-x-2 px-5 sm:px-7 py-2 sm:py-3 rounded-full bg-[#C5A46D] hover:bg-[#b5935b] text-[#173A2B] font-sans font-bold text-[11px] sm:text-sm tracking-wide shadow-md transition-all hover:scale-105 active:scale-95"
                    >
                      <span>{section.buttonText}</span>
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-0.5" />
                    </Link>
                  </div>

                </div>
              </div>

              {/* Image Panel: Big prominent photographic panel on mobile (~58-60%), 53% width full height on desktop */}
              <div className="relative w-full lg:w-[53%] h-[58%] xs:h-[60%] lg:h-full overflow-hidden shrink-0">
                <img
                  src={section.image}
                  alt={section.category}
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
              </div>

            </div>
          </section>
        );
      })}
    </div>
  );
}
