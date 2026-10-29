"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Masonry, { MasonryItem } from "@/components/ui/Masonry";
import { EXPERIENCES } from "@/data/resortData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function DiscoverSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const mobileCardsRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  // Transform experiences into Masonry items for desktop (>= md / 768px)
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

  // Mobile Scroll Animations with GSAP & ScrollTrigger
  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Only execute mobile animation if viewport is < 768px
      const isMobile = window.innerWidth < 768;
      if (!isMobile) return;

      // Animate Section Header
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Animate Mobile Cards with smooth stagger in both directions
      if (mobileCardsRef.current) {
        const cards = mobileCardsRef.current.querySelectorAll(".mobile-service-card");
        gsap.fromTo(
          cards,
          { opacity: 0, y: 32, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: mobileCardsRef.current,
              start: "top 82%",
              end: "bottom 15%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="discover"
      className="bg-[#202522] text-white py-16 sm:py-20 md:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div ref={headerRef} className="max-w-3xl mb-8 sm:mb-12 md:mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase block mb-1">
            EXPERIENCES & SERVICES
          </span>
          <h2 className="font-serif font-bold text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mt-1 leading-tight">
            Adventures, Leisure & Relaxation
          </h2>
          <p className="text-xs xs:text-sm sm:text-base text-zinc-300 mt-3 font-sans leading-relaxed">
            Whether seeking heart-racing outdoor obstacle challenges, serene afternoon laps in the pool, or bonfire evenings under the stars, our resort offers curated amenities for every visitor.
          </p>
        </div>

        {/* =========================================================================
            MOBILE LAYOUT ONLY (< 768px): Refined 2-Column Responsive Service Cards Grid
            ========================================================================= */}
        <div
          ref={mobileCardsRef}
          className="block md:hidden grid grid-cols-2 gap-3 xs:gap-3.5 sm:gap-4 w-full"
        >
          {EXPERIENCES.map((exp, idx) => (
            <Link
              key={exp.id}
              href={`/discover/${exp.slug}`}
              className="mobile-service-card group relative flex flex-col justify-end min-h-[200px] xs:min-h-[220px] rounded-2xl overflow-hidden border border-zinc-700/60 shadow-lg bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-[#C5A46D] transition-transform duration-300 active:scale-[0.98]"
            >
              {/* Background Image */}
              <img
                src={exp.image}
                alt={exp.name}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />

              {/* Dark Luxury Gradient Overlays for clear text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20 pointer-events-none" />

              {/* Content Box */}
              <div className="relative z-10 p-3 xs:p-3.5 flex flex-col justify-end">
                {/* Service Title */}
                <h3 className="font-serif font-bold text-sm xs:text-base text-white leading-snug drop-shadow-sm group-hover:text-[#E5B564] transition-colors">
                  {exp.name}
                </h3>

                {/* Short Description */}
                <p className="text-[10px] xs:text-[11px] text-zinc-300/90 font-sans leading-tight mt-1 line-clamp-2 drop-shadow-sm">
                  {exp.description}
                </p>

                {/* Gold EXPLORE -> Action */}
                <div className="mt-2.5 flex items-center space-x-1 text-[#C5A46D] font-bold text-[9px] xs:text-[10px] uppercase tracking-wider group-hover:text-[#ffd699] transition-colors">
                  <span>EXPLORE</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* =========================================================================
            DESKTOP LAYOUT ONLY (>= 768px): Untouched Masonry Grid
            ========================================================================= */}
        <div className="hidden md:block w-full">
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
