"use client";

import React, { useState } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { IMAGES } from "@/data/content";

const CATEGORIES = ["All", "Cities", "Nature", "Culture", "Road Trips", "Food & Drink"];

export default function ExploreDestinations() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  return (
    <section id="destinations" className="bg-white py-16 sm:py-24 text-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="max-w-3xl">
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase">
            TRAVEL INSPIRATION
          </span>

          <h2 className="mt-2 font-heading font-black text-3xl sm:text-4xl md:text-5xl text-[#0d1624] tracking-tight uppercase leading-tight">
            EXPLORE AMAZING<br />DESTINATIONS
          </h2>

          <p className="mt-3 text-sm sm:text-base text-zinc-600">
            From world-famous cities to hidden gems, discover what makes every corner of the United States unique.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="mt-6 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = selectedFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  isActive
                    ? "bg-[#16212e] text-white"
                    : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* 3 Featured Tall Destination Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {IMAGES.exploreCards.map((card) => (
            <div
              key={card.id}
              className="group relative h-[380px] sm:h-[440px] rounded-lg overflow-hidden cursor-pointer shadow-md"
            >
              {/* Background photo */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url(${card.img})`,
                }}
              />
              
              {/* Dark subtle gradient bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              {/* Text overlay bottom */}
              <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col justify-end text-white">
                <h3 className="font-heading font-black text-2xl tracking-tight uppercase">
                  {card.name}
                </h3>
                <span className="text-[11px] tracking-widest uppercase font-semibold text-zinc-300 mt-1">
                  {card.tagline}
                </span>
              </div>
            </div>
          ))}

          {/* Floating Next Arrow on the third card (as seen in the reference) */}
          <button 
            aria-label="Next destination"
            className="absolute -right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-zinc-800 shadow-xl hidden lg:flex items-center justify-center hover:bg-zinc-100 hover:scale-110 transition-all border border-zinc-200 z-10"
          >
            <ChevronRight className="w-5 h-5 text-zinc-900" />
          </button>
        </div>

        {/* POPULAR DESTINATIONS Section Subheading */}
        <div className="mt-16 sm:mt-20">
          <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-600 mb-6">
            POPULAR DESTINATIONS
          </h3>

          {/* 6 Grid Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {IMAGES.popularDestinations.map((dest) => (
              <div
                key={dest.id}
                className="group relative h-48 sm:h-52 rounded-md overflow-hidden cursor-pointer shadow-sm hover:shadow-lg transition-all"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${dest.img})`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                  <h4 className="font-heading font-bold text-xl tracking-tight leading-snug">
                    {dest.title}
                  </h4>
                  <span className="text-[10px] tracking-widest font-semibold uppercase text-zinc-300">
                    {dest.subtitle}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

