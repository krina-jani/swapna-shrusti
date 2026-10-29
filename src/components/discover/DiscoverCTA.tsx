"use client";

import React from "react";
import TextType from "@/components/ui/TextType";

export default function DiscoverCTA() {
  return (
    <section className="py-20 bg-[#173A2B] text-white border-t border-zinc-800 text-center px-4">
      <div className="max-w-3xl mx-auto space-y-4">
        <div className="w-full flex justify-center items-center">
          <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase block text-center">
            PLAN YOUR GETAWAY
          </span>
        </div>
        <div className="w-full flex justify-center items-center min-h-[4rem] sm:min-h-[5.5rem]">
          <TextType
            as="h2"
            text="Ready to Experience Swapna Srushti?"
            className="font-serif font-bold text-3xl sm:text-5xl text-white text-center inline-block"
            typingSpeed={75}
            pauseDuration={2000}
            deletingSpeed={40}
            loop={true}
            showCursor={true}
            cursorStyle="underscore"
            cursorColor="#C5A46D"
            cursorGlide={true}
            startOnVisible={true}
          />
        </div>
        <p className="text-sm sm:text-base text-zinc-300 font-sans max-w-xl mx-auto leading-relaxed">
          Contact Swapna Srushti Resort to confirm your stay package, day-outing arrangements, or private family picnic.
        </p>
        <div className="pt-3 flex flex-wrap justify-center items-center gap-4">
          <a
            href="/contact"
            className="px-8 py-3.5 rounded-full btn-gold text-xs uppercase tracking-wider font-bold shadow-xl hover:scale-105 transition-all"
          >
            Enquire For Bookings
          </a>
          <a
            href="/accommodation"
            className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs uppercase tracking-wider font-semibold transition-all"
          >
            View Accommodations
          </a>
        </div>
      </div>
    </section>
  );
}

