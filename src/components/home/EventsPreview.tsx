"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { EVENTS } from "@/data/resortData";

export default function EventsPreview() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Triple items for seamless continuous looping carousel
  const eventList = [...EVENTS, ...EVENTS, ...EVENTS];

  // Auto-scroll every 2 seconds
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      handleNext();
    }, 2000);

    return () => clearInterval(timer);
  }, [activeIndex, isHovered]);

  const handleNext = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cardWidth = container.querySelector<HTMLElement>("[data-event-card]")?.offsetWidth || 340;
    const gap = 20;
    const step = cardWidth + gap;

    const maxScroll = container.scrollWidth - container.clientWidth;
    if (container.scrollLeft >= maxScroll - 50) {
      // Smoothly loop back
      container.scrollTo({ left: 0, behavior: "smooth" });
      setActiveIndex(0);
    } else {
      container.scrollBy({ left: step, behavior: "smooth" });
      setActiveIndex((prev) => (prev + 1) % EVENTS.length);
    }
  };

  const handlePrev = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cardWidth = container.querySelector<HTMLElement>("[data-event-card]")?.offsetWidth || 340;
    const gap = 20;
    const step = cardWidth + gap;

    if (container.scrollLeft <= 50) {
      container.scrollTo({ left: container.scrollWidth, behavior: "smooth" });
      setActiveIndex(EVENTS.length - 1);
    } else {
      container.scrollBy({ left: -step, behavior: "smooth" });
      setActiveIndex((prev) => (prev - 1 + EVENTS.length) % EVENTS.length);
    }
  };

  return (
    <section id="events" className="bg-[#F7F3E9] text-[#202522] py-20 sm:py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase">
            CELEBRATIONS & GATHERINGS
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-[#173A2B] tracking-tight mt-2">
            Extraordinary Events in Nature
          </h2>
        </div>

        {/* Horizontal Scrolling Gallery matching Brand USA reference */}
        <div 
          className="relative w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            ref={scrollContainerRef}
            className="flex items-center space-x-5 overflow-x-auto scrollbar-none scroll-smooth pb-6 pt-2 select-none"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {eventList.map((event, idx) => (
              <div
                key={`${event.id}-${idx}`}
                data-event-card=""
                className="relative shrink-0 w-[280px] sm:w-[320px] md:w-[360px] h-[380px] sm:h-[420px] md:h-[460px] rounded-2xl overflow-hidden shadow-lg border border-[#E7DECD] group cursor-pointer"
              >
                {/* Clean Image */}
                <Image
                  src={event.image}
                  alt={event.name}
                  fill
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 360px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle gradient behind title */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />

                {/* Instagram / Resort Logo Pin in top-left like reference */}
                <div className="absolute top-4 left-4 flex items-center space-x-2 text-white/90 text-xs font-medium drop-shadow">
                  <span className="w-5 h-5 rounded-md border border-white/40 flex items-center justify-center text-[10px]">
                    ✦
                  </span>
                  <span className="tracking-wide text-[11px] font-sans">@swapnasrushti</span>
                </div>

                {/* Title of the image only */}
                <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                  <h3 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-white tracking-wide drop-shadow-md group-hover:text-[#F7F3E9] transition-colors leading-tight">
                    {event.name}
                  </h3>
                </div>

                {/* Tagline at the bottom */}
                {event.tagline && (
                  <div className="absolute bottom-5 left-0 right-0 text-center px-4">
                    <span className="text-[11px] uppercase tracking-[0.2em] font-sans font-semibold text-[#C5A46D] drop-shadow">
                      {event.tagline}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Controls below cards: Dots indicators & Navigation Arrows */}
          <div className="flex items-center justify-between mt-4 px-2">
            
            {/* Dots */}
            <div className="flex items-center space-x-2">
              {EVENTS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    if (!scrollContainerRef.current) return;
                    const container = scrollContainerRef.current;
                    const cardWidth = container.querySelector<HTMLElement>("[data-event-card]")?.offsetWidth || 340;
                    container.scrollTo({ left: i * (cardWidth + 20), behavior: "smooth" });
                    setActiveIndex(i);
                  }}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === activeIndex % EVENTS.length 
                      ? "w-8 bg-[#173A2B]" 
                      : "w-2 bg-zinc-300 hover:bg-zinc-400"
                  }`}
                />
              ))}
            </div>

            {/* Prev / Next Arrows */}
            <div className="flex items-center space-x-3">
              <button
                onClick={handlePrev}
                aria-label="Previous Slide"
                className="w-10 h-10 rounded-full border border-zinc-300 bg-white hover:bg-zinc-100 active:scale-95 flex items-center justify-center text-[#173A2B] shadow-sm transition-all cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Slide"
                className="w-10 h-10 rounded-full border border-zinc-300 bg-white hover:bg-zinc-100 active:scale-95 flex items-center justify-center text-[#173A2B] shadow-sm transition-all cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
