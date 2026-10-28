"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Menu, X, ArrowRight } from "lucide-react";

const SLIDES = [
  {
    id: 1,
    tag: "YOUR ESCAPE INTO NATURE",
    titlePart1: "Discover a World",
    titlePart2: "of Wonder",
    desc: "Experience unforgettable stays, refreshing escapes, and extraordinary adventures at Swapna Srushti Resort.",
    // Exact match for lush resort pool with lit glowing villas and sunset sky
    bg: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2560&q=85",
    cta1: "Explore Experiences",
    cta1Link: "/discover",
    cta2: "Book Your Stay",
    cta2Link: "/booking",
  },
  {
    id: 2,
    tag: "AUTHENTIC SERENITY",
    titlePart1: "Serene Cottages",
    titlePart2: "& Royal Living",
    desc: "Immerse yourself in nature sanctuaries sheltered under swaying palm groves and tranquil starlit nights.",
    bg: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2560&q=85",
    cta1: "View Accommodations",
    cta1Link: "/accommodation",
    cta2: "Book Your Stay",
    cta2Link: "/booking",
  },
  {
    id: 3,
    tag: "THRILL & ADVENTURE",
    titlePart1: "Adventures &",
    titlePart2: "Joyful Escapes",
    desc: "From thrilling dirt tracks and crystal water splashes to vibrant cultural celebrations for every family member.",
    bg: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=2560&q=85",
    cta1: "Discover Activities",
    cta1Link: "/discover",
    cta2: "Book Your Stay",
    cta2Link: "/booking",
  },
  {
    id: 4,
    tag: "GRAND CELEBRATIONS",
    titlePart1: "Royal Weddings",
    titlePart2: "& Banquets",
    desc: "Create timeless fairy-tale memories across our expansive landscaped lawns and regal wedding avenues.",
    bg: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2560&q=85",
    cta1: "Explore Events",
    cta1Link: "/events",
    cta2: "Book Your Stay",
    cta2Link: "/booking",
  },
  {
    id: 5,
    tag: "FARM TO TABLE",
    titlePart1: "Pure Vegetarian",
    titlePart2: "Gourmet Flavors",
    desc: "Indulge in authentic Gujarati Thalis, Kathiyawadi favorites, and seasonal harvest delicacies.",
    bg: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2560&q=85",
    cta1: "Our Dining",
    cta1Link: "/restaurant",
    cta2: "Book Your Stay",
    cta2Link: "/booking",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[currentSlide];

  return (
    <section className="relative w-full h-[720px] sm:h-[800px] lg:h-[860px] overflow-hidden bg-black select-none">
      
      {/* Background Slides */}
      {SLIDES.map((s, idx) => (
        <div
          key={s.id}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ${
            idx === currentSlide
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105 pointer-events-none"
          }`}
          style={{
            backgroundImage: `url('${s.bg}')`,
          }}
        >
          {/* Gradients matching reference: dark bottom, warm vignette sides */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent sm:w-2/3" />
        </div>
      ))}

      {/* ========================================================================= */}
      {/* FLOATING PILL NAVBAR WITH COMFORTABLE LENGTH & PROPORTIONS                 */}
      {/* ========================================================================= */}
      <div className="absolute top-5 sm:top-7 inset-x-0 z-30 max-w-6xl mx-auto px-4 sm:px-6">
        <header className="w-full bg-[#1e252b]/60 hover:bg-[#1e252b]/75 backdrop-blur-md rounded-full border border-white/20 shadow-2xl px-5 sm:px-7 py-2.5 sm:py-3 flex items-center justify-between transition-colors">
          
          {/* Logo on Left */}
          <Link href="/" className="flex items-center space-x-2.5 shrink-0 group">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10">
              <Image
                src="/images/logo.png"
                alt="Swapna Srushti Logo"
                fill
                className="object-contain filter drop-shadow group-hover:scale-105 transition-transform"
              />
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
          <nav className="hidden lg:flex items-center space-x-6 text-[13px] font-medium text-white/90">
            <Link href="/" className="relative py-1 text-white font-semibold">
              Home
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#E5B564] rounded-full" />
            </Link>
            <Link href="/accommodation" className="hover:text-white transition-colors">
              Accommodation
            </Link>
            <Link href="/discover" className="hover:text-white transition-colors">
              Experiences
            </Link>
            <Link href="/restaurant" className="hover:text-white transition-colors">
              Dining
            </Link>
            <Link href="/gallery" className="hover:text-white transition-colors">
              Gallery
            </Link>
            <Link href="/discover" className="hover:text-white transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </nav>

          {/* Right Action: Gold Book Your Stay pill + Hamburger */}
          <div className="flex items-center space-x-2.5">
            <Link
              href="/booking"
              className="px-5 py-2 sm:py-2.5 rounded-full bg-[#E5B564] hover:bg-[#d4a24f] text-[#1c1c1c] text-xs sm:text-sm font-bold tracking-wide flex items-center space-x-1.5 shadow-lg transition-all hover:scale-105"
            >
              <span>Book Your Stay</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Navigation Menu"
              className="p-1.5 sm:p-2 text-white/80 hover:text-white flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
            >
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </header>

        {/* Mobile Dropdown Menu if triggered */}
        {mobileMenuOpen && (
          <div className="mt-3 p-5 rounded-2xl bg-[#1e252b]/95 backdrop-blur-xl border border-white/20 text-white space-y-3 font-semibold text-sm shadow-2xl animate-in fade-in duration-200">
            <div className="flex justify-between items-center pb-2 border-b border-zinc-700">
              <span className="text-xs uppercase text-[#E5B564] font-bold">Quick Navigation</span>
              <button onClick={() => setMobileMenuOpen(false)}><X className="w-5 h-5 text-zinc-400 hover:text-white" /></button>
            </div>
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-white hover:text-[#E5B564]">Home</Link>
            <Link href="/accommodation" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-white hover:text-[#E5B564]">Accommodation</Link>
            <Link href="/discover" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-white hover:text-[#E5B564]">Experiences</Link>
            <Link href="/restaurant" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-white hover:text-[#E5B564]">Dining</Link>
            <Link href="/gallery" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-white hover:text-[#E5B564]">Gallery</Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-white hover:text-[#E5B564]">Contact</Link>
            <div className="pt-2">
              <Link href="/booking" onClick={() => setMobileMenuOpen(false)} className="w-full py-2.5 rounded-full bg-[#E5B564] text-black font-bold text-center block text-xs uppercase">
                Book Your Stay Now
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* ========================================================================= */}
      {/* HERO CONTENT: EXACT PROPORTIONS & TYPOGRAPHY                              */}
      {/* ========================================================================= */}
      <div className="relative z-20 h-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col justify-center">
        <div className="max-w-xl sm:max-w-2xl mt-16 sm:mt-20">
          
          {/* Top Tagline with horizontal accent line */}
          <div className="flex items-center space-x-3 mb-4 sm:mb-5">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-[#E5B564] uppercase font-sans">
              {slide.tag}
            </span>
            <span className="w-12 h-[1px] bg-white/40" />
          </div>

          {/* Large Serif Headline */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.05] tracking-tight font-normal drop-shadow-lg">
            {slide.titlePart1} <br />
            <span className="italic font-light text-[#E5B564]">
              {slide.titlePart2}
            </span>
          </h1>

          {/* Subtitle Description */}
          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-white/90 font-sans leading-relaxed max-w-lg drop-shadow">
            {slide.desc}
          </p>

          {/* Dual Pill CTA Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
            <Link
              href={slide.cta1Link}
              className="px-6 sm:px-7 py-3 rounded-full bg-[#E5B564] hover:bg-[#d4a24f] text-[#1c1c1c] text-xs sm:text-sm font-bold tracking-wider flex items-center space-x-2 shadow-xl hover:scale-105 transition-all"
            >
              <span>{slide.cta1}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href={slide.cta2Link}
              className="px-6 sm:px-7 py-3 rounded-full bg-black/40 hover:bg-black/60 border border-white/60 text-white text-xs sm:text-sm font-semibold tracking-wider backdrop-blur-sm transition-all hover:border-white shadow-lg"
            >
              <span>{slide.cta2}</span>
            </Link>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* FLOATING PREV / NEXT CIRCULAR ARROWS                                      */}
      {/* ========================================================================= */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/35 hover:bg-black/60 border border-white/40 text-white flex items-center justify-center backdrop-blur-md transition-all hover:scale-110 cursor-pointer"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 ml-[-2px]" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/35 hover:bg-black/60 border border-white/40 text-white flex items-center justify-center backdrop-blur-md transition-all hover:scale-110 cursor-pointer"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 mr-[-2px]" />
      </button>

      {/* ========================================================================= */}
      {/* BOTTOM SLIDE PAGINATION DOTS                                              */}
      {/* ========================================================================= */}
      <div className="absolute bottom-6 sm:bottom-8 inset-x-0 z-30 flex items-center justify-center space-x-2.5">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              i === currentSlide
                ? "w-7 h-2 bg-[#E5B564]"
                : "w-2 h-2 bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>

    </section>
  );
}
