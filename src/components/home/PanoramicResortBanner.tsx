import React from "react";
import Image from "next/image";

export default function PanoramicResortBanner() {
  return (
    <section className="w-full bg-[#173A2B] overflow-hidden">
      <div className="relative w-full aspect-[1024/372] overflow-hidden group">
        <Image
          src="/images/resort-sunset-panoramic.png"
          alt="Swapna Srushti Resort Sunset Pool & Pavilions"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
        />
        {/* Subtle top & bottom vignette transitions to seamlessly blend with adjacent sections */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F7F3E9]/20 via-transparent to-transparent pointer-events-none" />
      </div>
    </section>
  );
}

