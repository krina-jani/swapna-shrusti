import React from "react";
import Link from "next/link";
import { Phone, Calendar } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative bg-[#173A2B] text-white py-20 sm:py-24 text-center overflow-hidden">
      {/* Background with palm silhouette and dark overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#173A2B] via-[#173A2B]/95 to-[#173A2B] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase">
          RECONNECT WITH NATURE
        </span>

        <h2 className="font-serif font-bold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight mt-3">
          Your Next Getaway Starts Here.
        </h2>

        <p className="mt-4 text-sm sm:text-base text-zinc-300 max-w-xl mx-auto font-sans leading-relaxed">
          Escape city stress and experience serene hospitality, delicious meals, and thrilling experiences at Gujarat&apos;s premier luxury resort.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/booking"
            className="px-8 py-3.5 rounded-full btn-gold text-xs sm:text-sm uppercase tracking-wider font-bold shadow-xl hover:scale-105 transition-all flex items-center space-x-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Your Stay</span>
          </Link>

          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white text-xs sm:text-sm uppercase tracking-wider font-semibold transition-all flex items-center space-x-2"
          >
            <Phone className="w-4 h-4 text-[#C5A46D]" />
            <span>Contact Us</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

