"use client";

import React from "react";
import Masonry, { MasonryItem } from "@/components/ui/Masonry";
import { EXPERIENCES } from "@/data/resortData";

export default function DiscoverSection() {
  // Transform experiences into Masonry items matching the user's reference layout
  // Swimming Pool and Adventure Park featured larger (span: 2)
  const items: MasonryItem[] = EXPERIENCES.map((exp, idx) => {
    const isLarge = idx === 0 || idx === 1;
    return {
      id: exp.id,
      img: exp.image,
      width: isLarge ? 640 : 320,
      height: isLarge ? 420 : 380,
      span: isLarge ? 2 : 1,
      title: exp.name,
      tagline: exp.tagline,
      description: exp.description,
      url: `/discover/${exp.slug}`,
      alt: exp.name,
    };
  });

  return (
    <section id="discover" className="bg-[#202522] text-white py-20 sm:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching attached reference */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase">
            EXPERIENCES & SERVICES
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mt-2">
            Adventures, Leisure & Relaxation
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 mt-3 font-sans leading-relaxed">
            Whether seeking heart-racing outdoor obstacle challenges, serene afternoon laps in the pool, or bonfire evenings under the stars, our resort offers curated amenities for every visitor.
          </p>
        </div>

        {/* Animated React Bits Masonry Grid with smooth reveal, spring bounce & lightbox */}
        <div className="w-full">
          <Masonry
            items={items}
            columns={4}
            columnWidth={280}
            gap={20}
            radius={16}
            animateFrom="bottom"
            stagger={0.08}
            duration={0.7}
            bounce={0.15}
            blurToFocus={true}
            revealOnScroll={true}
            hoverEffect="zoom"
            captions="always"
            lightbox={true}
            draggable={false}
          />
        </div>

      </div>
    </section>
  );
}
