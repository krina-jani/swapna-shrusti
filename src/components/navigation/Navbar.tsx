"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ChevronRight, Menu, X, Phone, Calendar } from "lucide-react";
import gsap from "gsap";
import { ACCOMMODATIONS, EXPERIENCES, EVENTS, SHOOT_CATEGORIES } from "@/data/resortData";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeForShootSubmenu, setActiveForShootSubmenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);

  const megaMenuRef = useRef<HTMLDivElement>(null);
  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Animate Mega Menu opening with GSAP
  useEffect(() => {
    if (activeMenu && megaMenuRef.current) {
      gsap.fromTo(
        megaMenuRef.current,
        { opacity: 0, y: -8 },
        { opacity: 1, y: 0, duration: 0.25, ease: "power2.out" }
      );
    }
  }, [activeMenu]);

  // Lock body scroll on mobile menu open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Handle keyboard escape to close menus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveMenu(null);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleMouseEnter = (menuName: string) => {
    if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    setActiveMenu(menuName);
  };

  const handleMouseLeave = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
      setActiveForShootSubmenu(false);
    }, 200);
  };

  const toggleMobileSection = (section: string) => {
    setMobileExpandedSection(mobileExpandedSection === section ? null : section);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#000000] text-white border-b border-zinc-800 shadow-xl select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-22">
          
          {/* Resort Original Logo with identity intact */}
          <Link href="/" className="flex items-center space-x-3 py-2 shrink-0 group">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
              <Image
                src="/images/logo.png"
                alt="Swapna Srushti Resort Logo"
                width={64}
                height={64}
                priority
                className="object-contain filter drop-shadow hover:scale-105 transition-transform"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-wide text-white leading-tight">
                Swapna Srushti
              </span>
              <span className="text-[10px] sm:text-[11px] tracking-widest text-[#C5A46D] uppercase font-sans font-medium">
                The World of Eternal Joy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav 
            className="hidden xl:flex items-center space-x-1 text-[13px] font-semibold tracking-wider uppercase text-white"
            onMouseLeave={handleMouseLeave}
          >
            {/* 1. Home */}
            <Link 
              href="/" 
              className="px-3.5 py-7 hover:text-[#C5A46D] transition-colors"
            >
              Home
            </Link>

            {/* 2. Accommodation */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter("accommodation")}
            >
              <button
                onClick={() => setActiveMenu(activeMenu === "accommodation" ? null : "accommodation")}
                className={`flex items-center space-x-1 px-4 py-7 transition-colors ${
                  activeMenu === "accommodation" 
                    ? "bg-[#202522] text-[#C5A46D]" 
                    : "hover:bg-zinc-900 text-white"
                }`}
                aria-expanded={activeMenu === "accommodation"}
              >
                <span>Accommodation</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === "accommodation" ? "rotate-180 text-[#C5A46D]" : ""}`} />
              </button>
            </div>

            {/* 3. Discover */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter("discover")}
            >
              <button
                onClick={() => setActiveMenu(activeMenu === "discover" ? null : "discover")}
                className={`flex items-center space-x-1 px-4 py-7 transition-colors ${
                  activeMenu === "discover" 
                    ? "bg-[#202522] text-[#C5A46D]" 
                    : "hover:bg-zinc-900 text-white"
                }`}
                aria-expanded={activeMenu === "discover"}
              >
                <span>Discover</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === "discover" ? "rotate-180 text-[#C5A46D]" : ""}`} />
              </button>
            </div>

            {/* 4. Events */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter("events")}
            >
              <button
                onClick={() => setActiveMenu(activeMenu === "events" ? null : "events")}
                className={`flex items-center space-x-1 px-4 py-7 transition-colors ${
                  activeMenu === "events" 
                    ? "bg-[#202522] text-[#C5A46D]" 
                    : "hover:bg-zinc-900 text-white"
                }`}
                aria-expanded={activeMenu === "events"}
              >
                <span>Events</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === "events" ? "rotate-180 text-[#C5A46D]" : ""}`} />
              </button>
            </div>

            {/* 5. Restaurant */}
            <Link 
              href="/restaurant" 
              className="px-3.5 py-7 hover:text-[#C5A46D] transition-colors"
            >
              Restaurant
            </Link>

            {/* 6. Gallery */}
            <Link 
              href="/gallery" 
              className="px-3.5 py-7 hover:text-[#C5A46D] transition-colors"
            >
              Gallery
            </Link>

            {/* 7. For Shoot */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter("for-shoot")}
            >
              <button
                onClick={() => setActiveMenu(activeMenu === "for-shoot" ? null : "for-shoot")}
                className={`flex items-center space-x-1 px-4 py-7 transition-colors ${
                  activeMenu === "for-shoot" 
                    ? "bg-[#202522] text-[#C5A46D]" 
                    : "hover:bg-zinc-900 text-white"
                }`}
                aria-expanded={activeMenu === "for-shoot"}
              >
                <span>For Shoot</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === "for-shoot" ? "rotate-180 text-[#C5A46D]" : ""}`} />
              </button>
            </div>

            {/* 8. Contact */}
            <Link 
              href="/contact" 
              className="px-3.5 py-7 hover:text-[#C5A46D] transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Right Section: Gold Book Your Stay CTA */}
          <div className="flex items-center space-x-4">
            <Link
              href="/booking"
              className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full btn-gold text-xs sm:text-sm tracking-wider uppercase flex items-center space-x-2 shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Stay</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile menu"
              className="xl:hidden p-2 text-zinc-200 hover:text-white"
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* FULL-WIDTH DESKTOP MEGA-MENU (Matches 3rd Reference Screenshot Exactly)     */}
      {/* ========================================================================= */}
      {activeMenu && (
        <div 
          ref={megaMenuRef}
          onMouseEnter={() => {
            if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
          }}
          onMouseLeave={handleMouseLeave}
          className="w-full bg-[#000000] border-t border-zinc-900 border-b border-zinc-800 shadow-2xl py-8 px-4 sm:px-8 lg:px-16"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Vertically stacked uppercase links with subtle dashed dividers */}
            <div className="col-span-5 border-r border-zinc-800/80 pr-8">
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#C5A46D] uppercase block mb-4">
                {activeMenu.replace("-", " ")}
              </span>

              {/* 1. Accommodation Links */}
              {activeMenu === "accommodation" && (
                <ul className="space-y-3 font-sans">
                  {ACCOMMODATIONS.map((room) => (
                    <li key={room.id} className="border-dashed-subtle pb-2.5">
                      <Link
                        href={`/accommodation/${room.slug}`}
                        onClick={() => setActiveMenu(null)}
                        className="group flex items-center justify-between text-sm sm:text-base font-semibold tracking-wider uppercase text-zinc-200 hover:text-[#C5A46D] transition-colors"
                      >
                        <span>{room.name}</span>
                        <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-[#C5A46D] group-hover:translate-x-1 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>
              )}

              {/* 2. Discover Links (Includes Nested For Shoot) */}
              {activeMenu === "discover" && (
                <ul className="space-y-3 font-sans">
                  <li className="border-dashed-subtle pb-2.5">
                    <Link
                      href="/discover/swimming-pool"
                      onClick={() => setActiveMenu(null)}
                      className="group flex items-center justify-between text-sm sm:text-base font-semibold tracking-wider uppercase text-zinc-200 hover:text-[#C5A46D] transition-colors"
                    >
                      <span>Swimming Pool</span>
                      <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-[#C5A46D] transition-all" />
                    </Link>
                  </li>
                  <li className="border-dashed-subtle pb-2.5">
                    <Link
                      href="/discover/adventure-park"
                      onClick={() => setActiveMenu(null)}
                      className="group flex items-center justify-between text-sm sm:text-base font-semibold tracking-wider uppercase text-zinc-200 hover:text-[#C5A46D] transition-colors"
                    >
                      <span>Adventure Park</span>
                      <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-[#C5A46D] transition-all" />
                    </Link>
                  </li>
                  <li className="border-dashed-subtle pb-2.5">
                    <Link
                      href="/discover/corporate-meeting"
                      onClick={() => setActiveMenu(null)}
                      className="group flex items-center justify-between text-sm sm:text-base font-semibold tracking-wider uppercase text-zinc-200 hover:text-[#C5A46D] transition-colors"
                    >
                      <span>Corporate Meeting</span>
                      <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-[#C5A46D] transition-all" />
                    </Link>
                  </li>
                  <li 
                    className="border-dashed-subtle pb-2.5 cursor-pointer"
                    onMouseEnter={() => setActiveForShootSubmenu(true)}
                  >
                    <div className="group flex items-center justify-between text-sm sm:text-base font-semibold tracking-wider uppercase text-zinc-200 hover:text-[#C5A46D] transition-colors">
                      <span className="flex items-center gap-2">
                        For Shoot 
                        <span className="text-[10px] normal-case bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded">Submenu</span>
                      </span>
                      <ChevronRight className="w-4 h-4 text-[#C5A46D]" />
                    </div>
                  </li>
                  <li className="border-dashed-subtle pb-2.5">
                    <Link
                      href="/accommodation/theme-village"
                      onClick={() => setActiveMenu(null)}
                      className="group flex items-center justify-between text-sm sm:text-base font-semibold tracking-wider uppercase text-zinc-200 hover:text-[#C5A46D] transition-colors"
                    >
                      <span>Theme Village</span>
                      <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-[#C5A46D] transition-all" />
                    </Link>
                  </li>
                </ul>
              )}

              {/* 3. Events Links */}
              {activeMenu === "events" && (
                <ul className="space-y-3 font-sans">
                  {EVENTS.map((event) => (
                    <li key={event.id} className="border-dashed-subtle pb-2.5">
                      <Link
                        href={`/events/${event.slug}`}
                        onClick={() => setActiveMenu(null)}
                        className="group flex items-center justify-between text-sm sm:text-base font-semibold tracking-wider uppercase text-zinc-200 hover:text-[#C5A46D] transition-colors"
                      >
                        <span>{event.name}</span>
                        <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-[#C5A46D] transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>
              )}

              {/* 4. For Shoot Links */}
              {activeMenu === "for-shoot" && (
                <ul className="space-y-3 font-sans">
                  {SHOOT_CATEGORIES.map((shoot) => (
                    <li key={shoot.id} className="border-dashed-subtle pb-2.5">
                      <Link
                        href={`/for-shoot/${shoot.slug}`}
                        onClick={() => setActiveMenu(null)}
                        className="group flex items-center justify-between text-sm sm:text-base font-semibold tracking-wider uppercase text-zinc-200 hover:text-[#C5A46D] transition-colors"
                      >
                        <span>{shoot.name}</span>
                        <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-[#C5A46D] transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Nested Submenu for Shoot when hovered inside Discover */}
            {activeMenu === "discover" && activeForShootSubmenu && (
              <div className="col-span-3 border-r border-zinc-800 pr-6 animate-in fade-in duration-150">
                <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase block mb-3">
                  Shoot Categories
                </span>
                <ul className="space-y-2.5 text-xs uppercase font-semibold text-zinc-300">
                  {SHOOT_CATEGORIES.map((s) => (
                    <li key={s.id} className="border-b border-zinc-800/60 pb-1.5">
                      <Link
                        href={`/for-shoot/${s.slug}`}
                        onClick={() => setActiveMenu(null)}
                        className="hover:text-[#C5A46D] flex items-center justify-between"
                      >
                        <span>{s.name}</span>
                        <ChevronRight className="w-3 h-3 text-zinc-500" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Right Column: Large relevant resort photograph with white border (Reference 3 Match) */}
            <div className={`${activeMenu === "discover" && activeForShootSubmenu ? "col-span-4" : "col-span-7"} pl-4`}>
              <div className="relative rounded-lg overflow-hidden border-2 border-white/90 shadow-2xl h-[260px] group">
                <img
                  src={
                    activeMenu === "accommodation"
                      ? ACCOMMODATIONS[3].image // Cottages photo
                      : activeMenu === "discover"
                      ? EXPERIENCES[1].image // Adventure dirt bike photo matching reference
                      : activeMenu === "events"
                      ? EVENTS[0].image // Wedding photo
                      : SHOOT_CATEGORIES[0].image // Pre-wedding photo
                  }
                  alt="Resort Experience Preview"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5">
                  <span className="text-xs uppercase font-bold text-[#C5A46D] tracking-widest">
                    {activeMenu === "accommodation"
                      ? "Luxury Cottages & Suites"
                      : activeMenu === "discover"
                      ? "Adventure Park & Dirt Tracks"
                      : activeMenu === "events"
                      ? "Grand Destination Weddings"
                      : "Cinematic Pre-Wedding Shoots"}
                  </span>
                  <p className="text-xs text-zinc-200 mt-1 max-w-md line-clamp-2">
                    Experience authentic luxury and breathtaking natural landscapes designed for lifelong memories.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MOBILE FULL-SCREEN NAVIGATION DRAWER                                      */}
      {/* ========================================================================= */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#000000] text-white flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300">
          <div className="p-6">
            {/* Mobile Header: Logo & Close */}
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-6">
              <div className="flex items-center space-x-3">
                <Image
                  src="/images/logo.png"
                  alt="Swapna Srushti Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
                <div>
                  <span className="font-serif text-lg font-bold">Swapna Srushti</span>
                  <span className="block text-[10px] text-[#C5A46D] tracking-wider uppercase">Luxury Resort</span>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-zinc-400 hover:text-white"
                aria-label="Close menu"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            {/* Mobile Links List */}
            <nav className="space-y-4 text-base font-semibold uppercase tracking-wider">
              {/* Home */}
              <div className="border-b border-zinc-900 pb-3">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block hover:text-[#C5A46D]"
                >
                  Home
                </Link>
              </div>

              {/* Expandable Accommodation */}
              <div className="border-b border-zinc-900 pb-3">
                <button
                  onClick={() => toggleMobileSection("accommodation")}
                  className="w-full flex items-center justify-between hover:text-[#C5A46D]"
                >
                  <span>Accommodation</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === "accommodation" ? "rotate-180 text-[#C5A46D]" : ""}`} />
                </button>
                {mobileExpandedSection === "accommodation" && (
                  <div className="mt-3 pl-4 space-y-2 text-sm text-zinc-300 normal-case tracking-normal">
                    {ACCOMMODATIONS.map((r) => (
                      <Link
                        key={r.id}
                        href={`/accommodation/${r.slug}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1 hover:text-[#C5A46D]"
                      >
                        {r.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Expandable Discover */}
              <div className="border-b border-zinc-900 pb-3">
                <button
                  onClick={() => toggleMobileSection("discover")}
                  className="w-full flex items-center justify-between hover:text-[#C5A46D]"
                >
                  <span>Discover</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === "discover" ? "rotate-180 text-[#C5A46D]" : ""}`} />
                </button>
                {mobileExpandedSection === "discover" && (
                  <div className="mt-3 pl-4 space-y-2 text-sm text-zinc-300 normal-case tracking-normal">
                    <Link href="/discover/swimming-pool" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#C5A46D]">Swimming Pool</Link>
                    <Link href="/discover/adventure-park" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#C5A46D]">Adventure Park</Link>
                    <Link href="/discover/corporate-meeting" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#C5A46D]">Corporate Meeting</Link>
                    <Link href="/accommodation/theme-village" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#C5A46D]">Theme Village</Link>
                  </div>
                )}
              </div>

              {/* Expandable Events */}
              <div className="border-b border-zinc-900 pb-3">
                <button
                  onClick={() => toggleMobileSection("events")}
                  className="w-full flex items-center justify-between hover:text-[#C5A46D]"
                >
                  <span>Events</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === "events" ? "rotate-180 text-[#C5A46D]" : ""}`} />
                </button>
                {mobileExpandedSection === "events" && (
                  <div className="mt-3 pl-4 space-y-2 text-sm text-zinc-300 normal-case tracking-normal">
                    {EVENTS.map((e) => (
                      <Link
                        key={e.id}
                        href={`/events/${e.slug}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1 hover:text-[#C5A46D]"
                      >
                        {e.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Restaurant */}
              <div className="border-b border-zinc-900 pb-3">
                <Link
                  href="/restaurant"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block hover:text-[#C5A46D]"
                >
                  Restaurant
                </Link>
              </div>

              {/* Gallery */}
              <div className="border-b border-zinc-900 pb-3">
                <Link
                  href="/gallery"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block hover:text-[#C5A46D]"
                >
                  Gallery
                </Link>
              </div>

              {/* Expandable For Shoot */}
              <div className="border-b border-zinc-900 pb-3">
                <button
                  onClick={() => toggleMobileSection("for-shoot")}
                  className="w-full flex items-center justify-between hover:text-[#C5A46D]"
                >
                  <span>For Shoot</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === "for-shoot" ? "rotate-180 text-[#C5A46D]" : ""}`} />
                </button>
                {mobileExpandedSection === "for-shoot" && (
                  <div className="mt-3 pl-4 space-y-2 text-sm text-zinc-300 normal-case tracking-normal">
                    {SHOOT_CATEGORIES.map((s) => (
                      <Link
                        key={s.id}
                        href={`/for-shoot/${s.slug}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1 hover:text-[#C5A46D]"
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Contact */}
              <div className="border-b border-zinc-900 pb-3">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block hover:text-[#C5A46D]"
                >
                  Contact
                </Link>
              </div>
            </nav>
          </div>

          {/* Bottom Action for Mobile */}
          <div className="p-6 bg-zinc-950 border-t border-zinc-900 space-y-3">
            <Link
              href="/booking"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 rounded-full btn-gold text-center block font-bold text-sm uppercase tracking-wider"
            >
              Book Your Stay
            </Link>
            <a
              href="tel:+919909922000"
              className="flex items-center justify-center space-x-2 text-zinc-400 text-xs py-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A46D]" />
              <span>Direct Concierge: +91 99099 22000</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

