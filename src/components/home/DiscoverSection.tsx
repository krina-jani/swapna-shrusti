import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EXPERIENCES } from "@/data/resortData";

export default function DiscoverSection() {
  return (
    <section id="discover" className="bg-[#202522] text-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase">
            EXPERIENCES & SERVICES
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mt-2">
            Adventures, Leisure & Relaxation
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 mt-3 font-sans">
            Whether seeking heart-racing outdoor obstacle challenges, serene afternoon laps in the pool, or bonfire evenings under the stars, our resort offers curated amenities for every visitor.
          </p>
        </div>

        {/* Image-led service cards (Pool, Gym, Games, Garden, Campfire, Adventure Park, Party Plot) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXPERIENCES.map((exp, idx) => {
            const isLarge = idx === 0 || idx === 1; // Pool and Adventure Park featured larger
            return (
              <div
                key={exp.id}
                className={`${isLarge ? "sm:col-span-2 lg:col-span-2" : "col-span-1"} group relative h-72 sm:h-80 rounded-xl overflow-hidden shadow-lg border border-zinc-800 cursor-pointer`}
              >
                <img
                  src={exp.image}
                  alt={exp.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A46D]">
                    {exp.tagline}
                  </span>
                  <h3 className="font-serif font-bold text-2xl text-white mt-1">
                    {exp.name}
                  </h3>
                  <p className="text-xs text-zinc-300 mt-1.5 line-clamp-2">
                    {exp.description}
                  </p>
                  <div className="mt-3">
                    <Link
                      href={`/discover/${exp.slug}`}
                      className="inline-flex items-center space-x-1.5 text-xs uppercase font-bold text-[#C5A46D] hover:text-white transition-colors"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

