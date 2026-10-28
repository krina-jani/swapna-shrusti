"use client";

import React, { useState } from "react";
import Link from "next/link";
import { X, Image as ImageIcon } from "lucide-react";
import { RESORT_INFO } from "@/data/resortData";

const CATEGORIES = ["All", "Resort", "Rooms", "Experiences", "Events", "Restaurant"];

export default function GalleryPreview() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const filteredPhotos = activeCategory === "All"
    ? RESORT_INFO.gallery
    : RESORT_INFO.gallery.filter(g => g.category === activeCategory);

  return (
    <section id="gallery" className="bg-[#F7F3E9] text-[#202522] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase">
              VISUAL INSPIRATION
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-[#173A2B] tracking-tight mt-2">
              Moments Captured at Swapna Srushti
            </h2>
            <p className="text-sm sm:text-base text-zinc-700 mt-2 font-sans">
              Browse through authentic glimpses of lush botanical grounds, joyous celebrations, luxurious room interiors, and leisure experiences.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                  activeCategory === cat
                    ? "bg-[#173A2B] text-white shadow-md"
                    : "bg-white text-zinc-700 border border-zinc-200 hover:bg-zinc-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredPhotos.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setLightboxImg(item.img)}
              className="group relative h-64 rounded-xl overflow-hidden shadow-md cursor-pointer border-2 border-white"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                <span className="text-[10px] uppercase font-bold text-[#C5A46D]">{item.category}</span>
                <h4 className="font-serif font-bold text-lg">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div 
          onClick={() => setLightboxImg(null)}
          className="fixed inset-0 z-50 bg-black/90 p-4 flex items-center justify-center animate-in fade-in"
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute -top-12 right-0 text-white p-2 hover:text-[#C5A46D]"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={lightboxImg}
              alt="Enlarged view"
              className="max-w-full max-h-[85vh] rounded-lg object-contain shadow-2xl border-2 border-white/20"
            />
          </div>
        </div>
      )}
    </section>
  );
}

