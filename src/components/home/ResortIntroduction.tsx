import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { RESORT_INFO } from "@/data/resortData";

export default function ResortIntroduction() {
  return (
    <section className="bg-[#F7F3E9] text-[#202522] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Nature-focused editorial copy */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase">
              SANCTUARY OF ETERNAL JOY
            </span>

            <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-[#173A2B] tracking-tight leading-tight">
              Where Pristine Nature Meets Royal Hospitality
            </h2>

            <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-sans">
              Nestled along the tranquil Gandhinagar-Mahudi highway, Swapna Srushti Resort is an oasis of calm spanning lush botanical acres. Far from the chaotic hum of metropolitan life, our haven invites families, vacationers, and corporate teams to reconnect with nature under shaded palm canopies and starlit night skies.
            </p>

            <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-sans">
              From our famous cultural Theme Village showcasing rural Indian folk crafts to adrenaline-charged adventure trails and luxurious poolside cottages, every moment here is curated with warmth and authentic Gujarati hospitality.
            </p>

            {/* Three concise resort highlights */}
            <div className="space-y-4 pt-2">
              {RESORT_INFO.highlights.map((h, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C5A46D] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-[#173A2B]">{h.title}</h4>
                    <p className="text-xs text-zinc-600 mt-0.5">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/discover"
                className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full bg-[#173A2B] text-white hover:bg-[#202522] transition-colors text-xs sm:text-sm font-semibold tracking-wider uppercase group"
              >
                <span>Learn More About Resort</span>
                <ArrowRight className="w-4 h-4 text-[#C5A46D] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Large Resort Photograph with subtle refined botanical border */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
                alt="Swapna Srushti Resort Sanctuary"
                className="w-full h-[420px] sm:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-[#202522]/90 backdrop-blur-md p-5 rounded-xl border border-zinc-700/60 text-white">
                <span className="text-[10px] uppercase font-bold text-[#C5A46D] tracking-widest">
                  Gandhinagar, Gujarat
                </span>
                <p className="text-xs text-zinc-200 mt-1">
                  100+ acres of verdant greenery, exotic palm groves, and serene water bodies.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

