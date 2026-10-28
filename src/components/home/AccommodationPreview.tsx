import React from "react";
import Link from "next/link";
import { ArrowRight, Users, Check } from "lucide-react";
import { ACCOMMODATIONS } from "@/data/resortData";

export default function AccommodationPreview() {
  return (
    <section id="accommodation" className="bg-[#173A2B] text-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase">
              LUXURY LIVING IN NATURE
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mt-2">
              Our Stays & Sanctuaries
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 mt-3 font-sans">
              Choose from secluded garden cottages, contemporary executive suites, or rustic cultural chalets crafted with natural teak and artisanal details.
            </p>
          </div>

          <Link
            href="/accommodation"
            className="inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold text-[#C5A46D] hover:text-white uppercase tracking-wider group shrink-0"
          >
            <span>View All Accommodations</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 6 Room Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ACCOMMODATIONS.map((room) => (
            <div
              key={room.id}
              className="bg-[#202522] rounded-xl overflow-hidden border border-zinc-800 shadow-xl group hover:border-[#C5A46D]/60 transition-all duration-300 flex flex-col"
            >
              {/* Photo */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-medium text-white flex items-center gap-1.5 border border-zinc-700">
                  <Users className="w-3.5 h-3.5 text-[#C5A46D]" />
                  <span>{room.capacity}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A46D]">
                    {room.tagline}
                  </span>
                  <h3 className="font-serif font-bold text-2xl text-white mt-1">
                    {room.name}
                  </h3>
                  <p className="text-xs text-zinc-300 mt-2.5 line-clamp-2 leading-relaxed">
                    {room.description}
                  </p>

                  {/* Highlights list */}
                  <div className="mt-4 pt-4 border-t border-zinc-800 flex flex-wrap gap-2">
                    {room.amenities.slice(0, 3).map((a, i) => (
                      <span key={i} className="text-[11px] bg-zinc-900 text-zinc-300 px-2.5 py-1 rounded-md border border-zinc-800 flex items-center gap-1">
                        <Check className="w-3 h-3 text-[#C5A46D]" /> {a}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between">
                  <Link
                    href={`/accommodation/${room.slug}`}
                    className="text-xs font-bold uppercase tracking-wider text-white hover:text-[#C5A46D] transition-colors"
                  >
                    View Details &rarr;
                  </Link>

                  <Link
                    href={`/booking?room=${room.slug}`}
                    className="px-4 py-2 rounded-full btn-gold text-xs uppercase tracking-wider font-semibold"
                  >
                    Book Now
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

