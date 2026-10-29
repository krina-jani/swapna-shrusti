"use client";

import React from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ResortIntroduction() {
  return (
    <section className="w-full bg-[#f6f2e8] text-[#202522] py-24 sm:py-32 lg:py-40 px-6 sm:px-12 md:px-16 lg:px-24">
      <div className="w-full max-w-[1500px] mx-auto text-left">
        
        {/* React Bits <ScrollReveal /> animated line-by-line slowly with scrub */}
        <ScrollReveal
          mode="scrub"
          splitBy="lines"
          effect="fade"
          stagger={0.25}
          duration={1.6}
          smoothing={0.6}
          baseOpacity={0.12}
          baseRotation={0}
          baseOffset={15}
          enableBlur={true}
          blurStrength={6}
          wordAnimationEnd="bottom+=300 bottom"
          containerClassName="w-full"
          textClassName="font-serif font-extrabold text-[32px] sm:text-[40px] md:text-[46px] lg:text-[52px] leading-[1.35] text-[#2b3540] tracking-tight"
        >
          Swapna Srushti Resort is a place where peaceful moments meet unforgettable experiences, where nature surrounds every celebration, and where every visit becomes a beautiful memory. Whether you seek a relaxing getaway, exciting adventures, a family picnic, or a destination for your special occasions, discover a world of comfort, connection, and celebration.
        </ScrollReveal>

        {/* Lower Section: Bold & Thick Text */}
        <div className="mt-20 sm:mt-28 flex flex-col items-center justify-center text-center">
          
          {/* PLANNING YOUR NEXT GETAWAY in serif display font */}
          <h3 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-[#1e2730] tracking-wide uppercase mb-6">
            PLANNING YOUR NEXT GETAWAY?
          </h3>

          {/* Solid bold terracotta pill button */}
          <Link
            href="/discover"
            className="inline-block px-10 py-3.5 rounded-full bg-[#cb9c7a] hover:bg-[#b88967] text-[#1a1a1a] font-serif font-bold text-base sm:text-lg tracking-wider shadow-md hover:scale-105 active:scale-95 transition-all"
          >
            Explore Our Resort
          </Link>

        </div>
      </div>
    </section>
  );
}
