import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { EVENTS } from "@/data/resortData";

export default function EventsPreview() {
  return (
    <section id="events" className="bg-[#F7F3E9] text-[#202522] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase">
              CELEBRATIONS & GATHERINGS
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-[#173A2B] tracking-tight mt-2">
              Extraordinary Events in Nature
            </h2>
            <p className="text-sm sm:text-base text-zinc-700 mt-3 font-sans">
              From grand royal destination weddings and lively corporate summits to family picnics and milestone birthday galas, our team transforms special days into unforgettable memories.
            </p>
          </div>

          <Link
            href="/events"
            className="inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold text-[#173A2B] hover:text-[#C5A46D] uppercase tracking-wider group shrink-0"
          >
            <span>Explore All 6 Event Types</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 6 Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EVENTS.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl overflow-hidden border border-zinc-200/90 shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-bold tracking-widest text-[#C5A46D] uppercase">
                    {event.tagline}
                  </span>
                  <h3 className="font-serif font-bold text-2xl text-white">
                    {event.name}
                  </h3>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <p className="text-xs text-zinc-600 leading-relaxed">
                  {event.description}
                </p>

                <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between">
                  <Link
                    href={`/events/${event.slug}`}
                    className="text-xs font-bold uppercase tracking-wider text-[#173A2B] hover:text-[#C5A46D] transition-colors"
                  >
                    View Packages &rarr;
                  </Link>

                  <Link
                    href="/contact"
                    className="px-4 py-2 rounded-full bg-[#173A2B] text-white hover:bg-[#202522] text-xs uppercase tracking-wider font-semibold transition-colors"
                  >
                    Send Enquiry
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

