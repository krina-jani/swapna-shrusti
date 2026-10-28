import React from "react";
import { IMAGES } from "@/data/content";

export default function FeaturedStory() {
  return (
    <section className="w-full bg-[#1b2533] text-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px] sm:min-h-[520px]">
        {/* Left Dark Content Panel (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-12 sm:py-16 bg-[#16202c]">
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase">
            FEATURED STORY
          </span>

          <h2 className="mt-3 font-heading font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight uppercase leading-[1.05] text-white">
            THE SPIRIT<br />OF THE WEST
          </h2>

          <p className="mt-4 sm:mt-5 text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
            Wide open landscapes, rich culture and unforgettable adventures await in the American West.
          </p>

          <div className="mt-8">
            <a
              href="#destinations"
              className="inline-block px-7 py-3 rounded-full bg-white text-[#122338] text-xs sm:text-sm font-bold tracking-wide hover:bg-zinc-200 transition-all shadow-md"
            >
              Explore the Story
            </a>
          </div>
        </div>

        {/* Right Photo Area: Cowboy overlooking canyon (7 cols) */}
        <div className="lg:col-span-7 relative min-h-[340px] lg:min-h-full overflow-hidden">
          <div 
            className="w-full h-full min-h-[380px] bg-cover bg-center lg:absolute lg:inset-0 hover:scale-105 transition-transform duration-700"
            style={{
              backgroundImage: `url(${IMAGES.spiritWest})`,
            }}
          />
        </div>
      </div>
    </section>
  );
}

