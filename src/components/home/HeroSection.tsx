"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

// Curated 4K Unsplash luxury resort photography
const UNSPLASH_RESORT_IMAGES = [
  "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=3840&q=90", // Tropical pool & illuminated villas at dusk
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=3840&q=90", // Luxury nature resort suite & gardens
  "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=3840&q=90", // Azure waters and resort palm trees
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=3840&q=90", // Luxury vacation resort pool and deck
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=3840&q=90", // Tropical resort chalets in lush greenery
];

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState("Home");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Automatically cycle through Unsplash resort images every 2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev === UNSPLASH_RESORT_IMAGES.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Accommodation", href: "/accommodation" },
    { name: "Experiences", href: "/discover" },
    { name: "Dining", href: "/restaurant" },
    { name: "Gallery", href: "/gallery" },
    { name: "About Us", href: "/discover" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <section className="relative w-full h-[760px] sm:h-[840px] lg:h-[900px] overflow-hidden bg-black select-none">
      
      {/* ========================================================================= */}
      {/* 2-SECOND AUTOMATIC UNSPLASH RESORT IMAGES CAROUSEL                         */}
      {/* ========================================================================= */}
      {UNSPLASH_RESORT_IMAGES.map((imgUrl, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out ${
            idx === currentImageIndex ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
          }`}
          style={{
            backgroundImage: `url('${imgUrl}')`,
          }}
        >
          {/* Subtle gradient vignette on left for sharp headline readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent sm:w-3/5 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
        </div>
      ))}

      {/* ========================================================================= */}
      {/* EXACT PILL NAVBAR (TRANSLUCENT GLASS CAPSULE)                             */}
      {/* ========================================================================= */}
      <div className="absolute top-5 sm:top-6 inset-x-0 z-30 max-w-[1240px] mx-auto px-4 sm:px-6">
        <header className="w-full bg-[#1e252b]/55 hover:bg-[#1e252b]/70 backdrop-blur-md rounded-full border border-white/20 shadow-2xl px-5 sm:px-8 py-2.5 sm:py-3 flex items-center justify-between transition-colors">
          
          {/* Logo on Left */}
          <Link href="/" className="flex items-center space-x-3 shrink-0 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-gradient-to-tr from-amber-400 via-emerald-500 to-sky-400 p-0.5 shadow-md group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#1b2533] rounded-full flex items-center justify-center overflow-hidden relative">
                <div className="absolute -top-1 right-2 w-3.5 h-3.5 rounded-full bg-amber-400 opacity-90" />
                <svg className="w-6 h-6 text-sky-400 relative z-10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 6l7 12H3l4-7 3 5 4-10z" fill="#34d399"/>
                  <path d="M2 18c3-1 6-1 9 0s6 1 9 0v2c-3 1-6 1-9 0s-6-1-9 0v-2z" fill="#38bdf8"/>
                </svg>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="font-serif text-base sm:text-lg font-bold tracking-wide text-white leading-none">
                Swapna Srushti
              </span>
              <span className="text-[8px] tracking-[0.25em] text-[#E5B564] uppercase font-sans font-semibold mt-0.5">
                RESORT
              </span>
            </div>
          </Link>

          {/* Navigation Links in Center */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-7 text-[13px] font-medium text-white/90">
            {navLinks.map((item) => {
              const isActive = activeTab === item.name;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setActiveTab(item.name)}
                  className={`relative py-1 transition-colors ${
                    isActive ? "text-white font-semibold" : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#E5B564] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Gold Book Your Stay pill + Hamburger */}
          <div className="flex items-center space-x-2.5">
            <Link
              href="/booking"
              className="px-5 sm:px-6 py-2.5 rounded-full bg-[#E5B564] hover:bg-[#d4a24f] text-[#1c1c1c] text-xs sm:text-sm font-bold tracking-wide flex items-center space-x-1.5 shadow-lg transition-all hover:scale-105 whitespace-nowrap"
            >
              <span>Book Your Stay</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Navigation Menu"
              className="p-1.5 sm:p-2 text-white/90 hover:text-white flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
            >
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </header>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="mt-3 p-5 rounded-2xl bg-black/95 backdrop-blur-xl border border-white/20 text-white space-y-3 font-semibold text-sm shadow-2xl animate-in fade-in duration-200">
            <div className="flex justify-between items-center pb-2 border-b border-zinc-700">
              <span className="text-xs uppercase text-[#E5B564] font-bold">Quick Navigation</span>
              <button onClick={() => setMobileMenuOpen(false)}><X className="w-5 h-5 text-zinc-400 hover:text-white" /></button>
            </div>
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => {
                  setActiveTab(item.name);
                  setMobileMenuOpen(false);
                }}
                className="block py-1 text-white hover:text-[#E5B564]"
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/booking"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 rounded-full bg-[#E5B564] text-black font-bold text-center block text-xs uppercase"
              >
                Book Your Stay Now
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* ========================================================================= */}
      {/* HERO CONTENT POSITIONED ON LEFT                                           */}
      {/* ========================================================================= */}
      <div className="relative z-20 h-full max-w-[1280px] mx-auto px-6 sm:px-12 lg:px-16 flex flex-col justify-center items-start text-left">
        <div className="max-w-xl sm:max-w-2xl mt-16 sm:mt-24">
          
          {/* Top Tagline with horizontal accent line */}
          <div className="flex items-center space-x-3 mb-4 sm:mb-6">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-white uppercase font-sans drop-shadow">
              YOUR ESCAPE INTO NATURE
            </span>
            <span className="w-12 h-[1px] bg-white/50" />
          </div>

          {/* Headline: Discover a World / of Wonder */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[84px] text-white leading-[1.05] tracking-tight font-normal drop-shadow-xl">
            Discover a World <br />
            <span className="italic font-light text-[#E5B564]">
              of Wonder
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-white/95 font-sans leading-relaxed max-w-lg drop-shadow">
            Experience unforgettable stays, refreshing escapes, and extraordinary adventures at Swapna Srushti Resort.
          </p>

          {/* Dual Pill CTA Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/discover"
              className="px-7 sm:px-8 py-3.5 rounded-full bg-[#E5B564] hover:bg-[#d4a24f] text-[#1c1c1c] text-xs sm:text-sm font-bold tracking-wider flex items-center space-x-2 shadow-xl hover:scale-105 transition-all"
            >
              <span>Explore Experiences</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/booking"
              className="px-7 sm:px-8 py-3.5 rounded-full bg-black/40 hover:bg-black/60 border border-white/60 text-white text-xs sm:text-sm font-semibold tracking-wider backdrop-blur-sm transition-all hover:border-white shadow-lg"
            >
              <span>Book Your Stay</span>
            </Link>
          </div>

        </div>
      </div>

    </section>
  );
}
