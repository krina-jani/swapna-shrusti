import React from "react";
import Link from "next/link";
import { Camera, Film, ArrowRight } from "lucide-react";
import { SHOOT_CATEGORIES } from "@/data/resortData";

export default function ForShootPreview() {
  return (
    <section className="bg-[#202522] text-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase">
              CINEMATOGRAPHY & PHOTOGRAPHY LOCATIONS
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mt-2">
              The Perfect Backdrop For Your Vision
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 mt-3 font-sans">
              From fairy-tale pre-wedding portraits and viral music videos to full-scale TV commercials and feature films, our 100-acre resort grounds provide versatile natural and architectural sets.
            </p>
          </div>

          <Link
            href="/for-shoot"
            className="inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold text-[#C5A46D] hover:text-white uppercase tracking-wider group shrink-0"
          >
            <span>View All Shoot Locations</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 5 Shoot Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {SHOOT_CATEGORIES.map((shoot) => (
            <div
              key={shoot.id}
              className="bg-[#161a18] rounded-xl overflow-hidden border border-zinc-800 shadow-lg group hover:border-[#C5A46D]/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={shoot.image}
                  alt={shoot.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="font-serif font-bold text-lg text-white">
                    {shoot.name}
                  </h3>
                </div>
              </div>

              <div className="p-4 flex flex-col justify-between flex-1">
                <p className="text-xs text-zinc-400 line-clamp-2">
                  {shoot.description}
                </p>

                <div className="mt-4 pt-3 border-t border-zinc-800">
                  <Link
                    href={`/for-shoot/${shoot.slug}`}
                    className="text-[11px] uppercase tracking-wider font-bold text-[#C5A46D] hover:text-white flex items-center justify-between"
                  >
                    <span>View Sets</span>
                    <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

