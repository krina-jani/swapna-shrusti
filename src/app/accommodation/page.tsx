import React from "react";
import Link from "next/link";
import Navbar from "@/components/navigation/Navbar";
import ResortFooter from "@/components/layout/ResortFooter";
import { ACCOMMODATIONS } from "@/data/resortData";
import { Users, Check, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Accommodations — Swapna Srushti Resort",
  description: "Explore our luxurious room categories: Superior Rooms, Premium Rooms, Executive Suites, Cottages, Unique Residency, and Theme Village.",
};

export default function AccommodationPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3E9] text-[#202522]">
      <Navbar />

      <main className="flex-1">
        {/* Banner */}
        <section className="relative h-80 sm:h-96 bg-[#173A2B] text-white flex items-center justify-center text-center px-4">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: `url('${ACCOMMODATIONS[3].image}')`,
            }}
          />
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase">
              LUXURY SANCTUARIES
            </span>
            <h1 className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl mt-2">
              Resort Accommodations
            </h1>
            <p className="text-sm sm:text-base text-zinc-300 mt-3 font-sans max-w-xl mx-auto">
              Every room and cottage is thoughtfully designed to immerse you in tranquil nature while offering modern luxury conveniences.
            </p>
          </div>
        </section>

        {/* Room List Grid */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ACCOMMODATIONS.map((room) => (
              <div
                key={room.id}
                className="bg-white rounded-xl overflow-hidden border border-zinc-200/80 shadow-lg group hover:border-[#C5A46D] transition-all flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-black/75 px-3 py-1 rounded-full text-[11px] text-white flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#C5A46D]" />
                    <span>{room.capacity}</span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold tracking-widest text-[#C5A46D] uppercase">
                      {room.tagline}
                    </span>
                    <h3 className="font-serif font-bold text-2xl text-[#173A2B] mt-1">
                      {room.name}
                    </h3>
                    <p className="text-xs text-zinc-600 mt-2.5 leading-relaxed">
                      {room.description}
                    </p>

                    <div className="mt-4 pt-4 border-t border-zinc-100 flex flex-wrap gap-2">
                      {room.amenities.map((a, i) => (
                        <span key={i} className="text-[11px] bg-zinc-100 text-zinc-700 px-2 py-0.5 rounded flex items-center gap-1">
                          <Check className="w-3 h-3 text-[#C5A46D]" /> {a}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between">
                    <Link
                      href={`/accommodation/${room.slug}`}
                      className="text-xs font-bold uppercase tracking-wider text-[#173A2B] hover:text-[#C5A46D]"
                    >
                      View Details &rarr;
                    </Link>
                    <Link
                      href={`/booking?room=${room.slug}`}
                      className="px-4 py-2 rounded-full btn-gold text-xs uppercase tracking-wider font-semibold"
                    >
                      Book Stay
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <ResortFooter />
    </div>
  );
}

