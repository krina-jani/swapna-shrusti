"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { EVENTS } from "@/data/resortData";

export default function EventsPreview() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Triple items for seamless continuous looping carousel
  const eventList = [...EVENTS, ...EVENTS, ...EVENTS, ...EVENTS];

  // Auto-scroll every 2 seconds smoothly
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      handleNext();
    }, 2000);

    return () => clearInterval(timer);
  }, [isHovered]);

  const handleNext = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const card = container.querySelector<HTMLElement>("[data-event-card]");
    const cardWidth = card ? card.offsetWidth : 300;
    const gap = 16;
    const step = cardWidth + gap;

    const maxScroll = container.scrollWidth - container.clientWidth;
    if (container.scrollLeft >= maxScroll - 50) {
      // Loop smoothly back to start without abrupt jumps
      container.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      container.scrollBy({ left: step, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const card = container.querySelector<HTMLElement>("[data-event-card]");
    const cardWidth = card ? card.offsetWidth : 300;
    const gap = 16;
    const step = cardWidth + gap;

    if (container.scrollLeft <= 20) {
      container.scrollTo({ left: container.scrollWidth / 2, behavior: "smooth" });
    } else {
      container.scrollBy({ left: -step, behavior: "smooth" });
    }
  };

  return (
    <section id="events" className="bg-[#F7F3E9] text-[#202522] py-12 sm:py-16 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with balanced compact spacing */}
        <div className="flex items-end justify-between mb-8 sm:mb-10">
          <div className="max-w-2xl">
            <span className="text-[11px] font-sans font-bold tracking-[0.25em] text-[#C5A46D] uppercase block mb-1">
              CELEBRATIONS & GATHERINGS
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#173A2B] tracking-tight leading-tight">
              Extraordinary Events in Nature
            </h2>
          </div>

          {/* Navigation Arrows positioned on the right beside header */}
          <div className="hidden sm:flex items-center space-x-2.5">
            <button
              onClick={handlePrev}
              aria-label="Previous Slide"
              className="w-9 h-9 rounded-full border border-[#DCD3C3] bg-[#FAF7F0] hover:bg-white active:scale-95 flex items-center justify-center text-[#173A2B] shadow-sm transition-all cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Slide"
              className="w-9 h-9 rounded-full border border-[#DCD3C3] bg-[#FAF7F0] hover:bg-white active:scale-95 flex items-center justify-center text-[#173A2B] shadow-sm transition-all cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Smooth Horizontal Scrolling Gallery */}
        <div 
          className="relative w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            ref={scrollContainerRef}
            className="flex items-center space-x-4 sm:space-x-5 overflow-x-auto scrollbar-none scroll-smooth pb-3 select-none"
            style={{ 
              scrollbarWidth: "none", 
              msOverflowStyle: "none",
              scrollSnapType: "x mandatory",
            }}
          >
            {eventList.map((event, idx) => (
              <div
                key={`${event.id}-${idx}`}
                data-event-card=""
                style={{ scrollSnapAlign: "start" }}
                className="relative shrink-0 w-[240px] sm:w-[280px] md:w-[310px] lg:w-[330px] h-[340px] sm:h-[380px] md:h-[410px] rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-[#E7DECD] group cursor-pointer transition-shadow duration-300"
              >
                {/* Clean Image */}
                <Image
                  src={event.image}
                  alt={event.name}
                  fill
                  sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, 330px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle vignette gradient behind text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />

                {/* Top Text: ONLY @swapnasrushti (small icon box removed as requested) */}
                <div className="absolute top-3.5 left-4 text-white/90 drop-shadow">
                  <span className="text-[11px] font-sans font-medium tracking-wide">
                    @swapnasrushti
                  </span>
                </div>

                {/* Centered Title of the image only */}
                <div className="absolute inset-0 flex items-center justify-center p-5 text-center">
                  <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white tracking-wide drop-shadow-md group-hover:text-[#F7F3E9] transition-colors leading-tight">
                    {event.name}
                  </h3>
                </div>

                {/* Tagline at the bottom */}
                {event.tagline && (
                  <div className="absolute bottom-4 left-0 right-0 text-center px-3">
                    <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-sans font-semibold text-[#C5A46D] drop-shadow">
                      {event.tagline}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Arrows positioned neatly below */}
          <div className="flex sm:hidden items-center justify-end space-x-2 mt-3 px-1">
            <button
              onClick={handlePrev}
              aria-label="Previous Slide"
              className="w-8 h-8 rounded-full border border-[#DCD3C3] bg-[#FAF7F0] hover:bg-white active:scale-95 flex items-center justify-center text-[#173A2B] shadow-sm transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Slide"
              className="w-8 h-8 rounded-full border border-[#DCD3C3] bg-[#FAF7F0] hover:bg-white active:scale-95 flex items-center justify-center text-[#173A2B] shadow-sm transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
