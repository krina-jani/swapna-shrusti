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
    category: "SWIMMING POOL",
    heading: ["Refresh", "Rejuvenate", "Relax"],
    description:
      "Dive into crystal clear waters surrounded by lush greenery. Our swimming pool is the perfect place to unwind, relax and create refreshing moments with family and friends.",
    buttonText: "Explore Swimming Pool",
    buttonLink: "/discover/swimming-pool",
    bgType: "green",
    image: "/images/sticky-pool.jpg",
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
    image: "/images/sticky-wedding.jpg",
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
            className="sticky w-full min-h-screen flex items-center shadow-2xl overflow-hidden border-t border-black/10"
          >
            <div className="w-full h-full min-h-screen flex flex-col lg:flex-row">
              
              {/* Left Panel (47% width on desktop) */}
              <div
                className={`relative w-full lg:w-[47%] min-h-[460px] lg:min-h-screen flex flex-col justify-center px-8 sm:px-14 lg:px-20 py-16 sm:py-20 z-10 ${
                  isGreen ? "bg-[#173A2B] text-white" : "bg-[#F7F3E9] text-[#202522]"
                }`}
              >
                {/* Subtle Decorative Botanical Leaf / Curved Lines Overlay */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-[0.08]"
                  style={{
                    backgroundImage: isGreen
                      ? "radial-gradient(ellipse at 80% 50%, rgba(197, 164, 109, 0.45) 0%, transparent 70%)"
                      : "radial-gradient(ellipse at 80% 50%, rgba(23, 58, 43, 0.35) 0%, transparent 70%)",
                  }}
                />
                
                {/* SVG Decorative Curved Botanical Lines matching the reference watermark */}
                <svg
                  className="absolute -right-20 top-1/4 w-[360px] h-[360px] pointer-events-none opacity-[0.06] select-none"
                  viewBox="0 0 200 200"
                  fill="none"
                  stroke={isGreen ? "#C5A46D" : "#173A2B"}
                  strokeWidth="2.5"
                >
                  <path d="M 10 100 Q 60 20 120 70 T 190 120" />
                  <path d="M 30 140 Q 80 40 140 90 T 200 150" />
                  <path d="M 0 60 Q 50 -10 100 40 T 170 90" />
                </svg>

                {/* Content Container */}
                <div className="relative z-10 max-w-lg">
                  
                  {/* Number & Horizontal Line Header: e.g. 01/04 ────── */}
                  <div className="flex items-center space-x-3 mb-6">
                    <span
                      className={`text-xs sm:text-sm font-sans font-bold tracking-widest ${
                        isGreen ? "text-white/80" : "text-[#202522]/80"
                      }`}
                    >
                      {section.number}
                    </span>
                    <span
                      className={`w-12 h-[1px] ${
                        isGreen ? "bg-white/40" : "bg-black/30"
                      }`}
                    />
                  </div>

                  {/* Category Tag */}
                  <span className="text-[11px] sm:text-xs font-sans font-extrabold tracking-[0.25em] text-[#C5A46D] uppercase block mb-3">
                    {section.category}
                  </span>

                  {/* Heading: Bold Editorial Display Serif */}
                  <h2
                    className={`font-serif font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.08] mb-6 ${
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
                    className={`font-sans text-sm sm:text-base leading-relaxed mb-8 max-w-md ${
                      isGreen ? "text-white/80" : "text-zinc-700"
                    }`}
                  >
                    {section.description}
                  </p>

                  {/* Button: Champagne Gold Pill */}
                  <div>
                    <Link
                      href={section.buttonLink}
                      className="inline-flex items-center space-x-2 px-7 py-3 rounded-full bg-[#C5A46D] hover:bg-[#b5935b] text-[#173A2B] font-sans font-bold text-xs sm:text-sm tracking-wide shadow-md transition-all hover:scale-105 active:scale-95"
                    >
                      <span>{section.buttonText}</span>
                      <ArrowRight className="w-4 h-4 ml-0.5" />
                    </Link>
                  </div>

                </div>
              </div>

              {/* Right Panel: Large Edge-to-Edge Photograph (53% width on desktop) */}
              <div className="relative w-full lg:w-[53%] min-h-[380px] lg:min-h-screen overflow-hidden">
                <img
                  src={section.image}
                  alt={section.category}
                  className="w-full h-full object-cover object-center absolute inset-0 transition-transform duration-700 hover:scale-105"
                />
              </div>

            </div>
          </section>
        );
      })}
    </div>
  );
}

