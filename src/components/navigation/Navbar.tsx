"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ChevronDown, ChevronRight, Menu, X, Phone, Calendar } from "lucide-react";
import gsap from "gsap";
import { ACCOMMODATIONS, EXPERIENCES, EVENTS, SHOOT_CATEGORIES } from "@/data/resortData";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeForShootSubmenu, setActiveForShootSubmenu] = useState(false);
  const [hoveredPreview, setHoveredPreview] = useState<{ image: string; title: string; desc?: string } | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  const megaMenuRef = useRef<HTMLDivElement>(null);
  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastScrollY = useRef(0);

  // Scroll listener for hero detection and smooth hide on scroll down / show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Glass effect styling toggle
      setIsScrolled(currentScrollY > 20);

      // In hero section (<= 150px), always show navbar
      if (currentScrollY <= 150) {
        setIsVisible(true);
      } else {
        // When scrolling down past hero, hide smoothly; when scrolling up, show navbar
        if (currentScrollY > lastScrollY.current && currentScrollY - lastScrollY.current > 5) {
          // Scrolling DOWN
          setIsVisible(false);
          setActiveMenu(null); // close dropdown when hiding
        } else if (currentScrollY < lastScrollY.current && lastScrollY.current - currentScrollY > 5) {
          // Scrolling UP
          setIsVisible(true);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    setHoveredPreview(null);
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
      setActiveForShootSubmenu(false);
    }, 200);
  };

  const toggleMobileSection = (section: string) => {
    setMobileExpandedSection(mobileExpandedSection === section ? null : section);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 select-none transition-all duration-500 ease-in-out px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4 pointer-events-none ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}>
      <div className={`max-w-[1380px] w-full mx-auto rounded-full transition-all duration-300 pointer-events-auto border border-white/15 shadow-2xl px-6 sm:px-8 ${
        isScrolled || activeMenu
          ? "bg-black/75 backdrop-blur-md ring-1 ring-white/10"
          : "bg-black/45 backdrop-blur-md ring-1 ring-white/5"
      } text-white`}>
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Resort Original Logo with identity intact */}
          <Link href="/" className="flex items-center space-x-3 py-2 shrink-0 mr-4 group">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center">
              <Image
                src="/images/logo.png"
                alt="Swapna Srushti Resort Logo"
                width={48}
                height={48}
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
            className="hidden lg:flex items-center gap-1.5 text-[12px] font-semibold tracking-wide text-white"
            onMouseLeave={handleMouseLeave}
          >
            {/* 1. Home */}
            <Link 
              href="/" 
              className={`px-3.5 py-1.5 rounded-full whitespace-nowrap transition-all ${
                isActive("/")
                  ? "bg-[#C5A46D] text-[#173A2B] font-bold shadow-md shadow-[#C5A46D]/20 whitespace-nowrap"
                  : "hover:bg-white/10 hover:text-[#C5A46D] text-white whitespace-nowrap"
              }`}
            >
              Home
            </Link>

            {/* 2. Accommodation */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter("accommodation")}
            >
              <Link
                href="/accommodation"
                onClick={() => setActiveMenu(null)}
                className={`flex items-center space-x-1 px-3.5 py-1.5 rounded-full text-[12px] font-semibold tracking-wide whitespace-nowrap transition-all ${
                  isActive("/accommodation")
                    ? "bg-[#C5A46D] text-[#173A2B] font-bold shadow-md shadow-[#C5A46D]/20"
                    : activeMenu === "accommodation"
                    ? "bg-white/20 text-[#C5A46D]"
                    : "hover:bg-white/10 text-white hover:text-[#C5A46D]"
                }`}
                aria-expanded={activeMenu === "accommodation"}
              >
                <span>Accommodation</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeMenu === "accommodation" ? "rotate-180 text-[#C5A46D]" : ""
                }`} />
              </Link>
            </div>

            {/* 3. Discover */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter("discover")}
            >
              <Link
                href="/discover"
                onClick={() => setActiveMenu(null)}
                className={`flex items-center space-x-1 px-3.5 py-1.5 rounded-full text-[12px] font-semibold tracking-wide whitespace-nowrap transition-all ${
                  isActive("/discover")
                    ? "bg-[#C5A46D] text-[#173A2B] font-bold shadow-md shadow-[#C5A46D]/20"
                    : activeMenu === "discover"
                    ? "bg-white/20 text-[#C5A46D]"
                    : "hover:bg-white/10 text-white hover:text-[#C5A46D]"
                }`}
                aria-expanded={activeMenu === "discover"}
              >
                <span>Discover</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeMenu === "discover" ? "rotate-180 text-[#C5A46D]" : ""
                }`} />
              </Link>
            </div>

            {/* 4. Events */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter("events")}
            >
              <Link
                href="/events"
                onClick={() => setActiveMenu(null)}
                className={`flex items-center space-x-1 px-3.5 py-1.5 rounded-full text-[12px] font-semibold tracking-wide whitespace-nowrap transition-all ${
                  isActive("/events")
                    ? "bg-[#C5A46D] text-[#173A2B] font-bold shadow-md shadow-[#C5A46D]/20"
                    : activeMenu === "events"
                    ? "bg-white/20 text-[#C5A46D]"
                    : "hover:bg-white/10 text-white hover:text-[#C5A46D]"
                }`}
                aria-expanded={activeMenu === "events"}
              >
                <span>Events</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeMenu === "events" ? "rotate-180 text-[#C5A46D]" : ""
                }`} />
              </Link>
            </div>

            {/* 5. Restaurant */}
            <Link 
              href="/restaurant" 
              className={`px-3.5 py-1.5 rounded-full whitespace-nowrap transition-all ${
                isActive("/restaurant")
                  ? "bg-[#C5A46D] text-[#173A2B] font-bold shadow-md shadow-[#C5A46D]/20"
                  : "hover:bg-white/10 hover:text-[#C5A46D] text-white"
              }`}
            >
              Restaurant
            </Link>

            {/* 6. Gallery */}
            <Link 
              href="/gallery" 
              className={`px-3.5 py-1.5 rounded-full whitespace-nowrap transition-all ${
                isActive("/gallery")
                  ? "bg-[#C5A46D] text-[#173A2B] font-bold shadow-md shadow-[#C5A46D]/20"
                  : "hover:bg-white/10 hover:text-[#C5A46D] text-white"
              }`}
            >
              Gallery
            </Link>

            {/* 7. For Shoot */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter("for-shoot")}
            >
              <Link
                href="/for-shoot"
                onClick={() => setActiveMenu(null)}
                className={`flex items-center space-x-1 px-3.5 py-1.5 rounded-full text-[12px] font-semibold tracking-wide whitespace-nowrap transition-all ${
                  isActive("/for-shoot")
                    ? "bg-[#C5A46D] text-[#173A2B] font-bold shadow-md shadow-[#C5A46D]/20"
                    : activeMenu === "for-shoot"
                    ? "bg-white/20 text-[#C5A46D]"
                    : "hover:bg-white/10 text-white hover:text-[#C5A46D]"
                }`}
                aria-expanded={activeMenu === "for-shoot"}
              >
                <span>For Shoot</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeMenu === "for-shoot" ? "rotate-180 text-[#C5A46D]" : ""
                }`} />
              </Link>
            </div>

            {/* 8. Contact */}
            <Link 
              href="/contact" 
              className={`px-3 py-2 rounded-full transition-all ${
                isActive("/contact")
                  ? "bg-[#C5A46D] text-[#173A2B] font-bold shadow-md shadow-[#C5A46D]/20"
                  : "hover:bg-white/10 hover:text-[#C5A46D] text-white"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Section: Gold Book Your Stay CTA */}
          <div className="flex items-center space-x-4 shrink-0 ml-4">
            <Link
              href="/booking"
              className="px-4.5 sm:px-5 py-2 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#C5A46D] to-[#B89758] text-[#173A2B] hover:text-black font-bold text-xs uppercase tracking-wider flex items-center space-x-1.5 shadow-md hover:shadow-[#C5A46D]/30 hover:scale-[1.02] active:scale-[0.98] transition-all shrink-0"
            >
              <Calendar className="w-3.5 h-3.5 text-[#173A2B]" />
              <span className="whitespace-nowrap">Book Your Stay</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile menu"
              className="lg:hidden p-2 text-zinc-200 hover:text-white"
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
          className="pointer-events-auto mt-2.5 max-w-7xl mx-auto bg-black/85 backdrop-blur-2xl border border-white/15 rounded-3xl shadow-2xl py-8 px-6 sm:px-10 overflow-hidden ring-1 ring-white/10"
        >
          <div className="max-w-5xl mx-auto flex items-center justify-center gap-5 my-2">
            
            {/* Left Column: Vertically stacked uppercase links with subtle dashed dividers */}
            <div className="w-[340px] shrink-0 border-r border-zinc-800/80 pr-6">
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#C5A46D] uppercase block mb-4">
                {activeMenu.replace("-", " ")}
              </span>

              {/* 1. Accommodation Links */}
              {activeMenu === "accommodation" && (
                <ul className="space-y-3 font-sans">
                  {ACCOMMODATIONS.map((room) => (
                    <li 
                      key={room.id} 
                      className="border-dashed-subtle pb-2.5"
                      onMouseEnter={() => setHoveredPreview({ image: room.image, title: room.name, desc: room.description })}
                    >
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
                      href="/discover/swimming-pool" onMouseEnter={() => setHoveredPreview({ image: EXPERIENCES[0].image, title: EXPERIENCES[0].name, desc: EXPERIENCES[0].description })}
                      onClick={() => setActiveMenu(null)}
                      className="group flex items-center justify-between text-sm sm:text-base font-semibold tracking-wider uppercase text-zinc-200 hover:text-[#C5A46D] transition-colors"
                    >
                      <span>Swimming Pool</span>
                      <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-[#C5A46D] transition-all" />
                    </Link>
                  </li>
                  <li className="border-dashed-subtle pb-2.5">
                    <Link
                      href="/discover/adventure-park" onMouseEnter={() => setHoveredPreview({ image: EXPERIENCES[1].image, title: EXPERIENCES[1].name, desc: EXPERIENCES[1].description })}
                      onClick={() => setActiveMenu(null)}
                      className="group flex items-center justify-between text-sm sm:text-base font-semibold tracking-wider uppercase text-zinc-200 hover:text-[#C5A46D] transition-colors"
                    >
                      <span>Adventure Park</span>
                      <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-[#C5A46D] transition-all" />
                    </Link>
                  </li>
                  <li className="border-dashed-subtle pb-2.5">
                    <Link
                      href="/discover/corporate-meeting" onMouseEnter={() => setHoveredPreview({ image: EXPERIENCES[2].image, title: EXPERIENCES[2].name, desc: EXPERIENCES[2].description })}
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
                      href="/accommodation/theme-villas" onMouseEnter={() => setHoveredPreview({ image: ACCOMMODATIONS[5].image, title: ACCOMMODATIONS[5].name, desc: ACCOMMODATIONS[5].description })}
                      onClick={() => setActiveMenu(null)}
                      className="group flex items-center justify-between text-sm sm:text-base font-semibold tracking-wider uppercase text-zinc-200 hover:text-[#C5A46D] transition-colors"
                    >
                      <span>Theme Villas</span>
                      <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-[#C5A46D] transition-all" />
                    </Link>
                  </li>
                </ul>
              )}

              {/* 3. Events Links */}
              {activeMenu === "events" && (
                <ul className="space-y-3 font-sans">
                  {EVENTS.map((event) => (
                    <li key={event.id} className="border-dashed-subtle pb-2.5" onMouseEnter={() => setHoveredPreview({ image: event.image, title: event.name, desc: event.description })}>
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
                    <li key={shoot.id} className="border-dashed-subtle pb-2.5" onMouseEnter={() => setHoveredPreview({ image: shoot.image, title: shoot.name, desc: shoot.description })}>
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
                    <li key={s.id} className="border-b border-zinc-800/60 pb-1.5" onMouseEnter={() => setHoveredPreview({ image: s.image, title: s.name, desc: s.description })}>
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
            <div className="w-[420px] max-w-full shrink-0">
              <div className="relative rounded-lg overflow-hidden border-2 border-white/90 shadow-2xl w-full aspect-[16/10] group">
                <img
                  src={
                    hoveredPreview?.image ||
                    (activeMenu === "accommodation"
                      ? ACCOMMODATIONS[3].image // Cottages photo
                      : activeMenu === "discover"
                      ? EXPERIENCES[1].image // Adventure dirt bike photo matching reference
                      : activeMenu === "events"
                      ? EVENTS[0].image // Wedding photo
                      : SHOOT_CATEGORIES[0].image) // Pre-wedding photo
                  }
                  alt={hoveredPreview?.title || "Resort Experience Preview"}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5">
                  <span className="text-xs uppercase font-bold text-[#C5A46D] tracking-widest">
                    {hoveredPreview?.title ||
                      (activeMenu === "accommodation"
                        ? "Luxury Cottages & Suites"
                        : activeMenu === "discover"
                        ? "Adventure Park & Dirt Tracks"
                        : activeMenu === "events"
                        ? "Grand Destination Weddings"
                        : "Cinematic Pre-Wedding Shoots")}
                  </span>
                  <p className="text-xs text-zinc-200 mt-1 max-w-md line-clamp-2">
                    {hoveredPreview?.desc || "Experience authentic luxury and breathtaking natural landscapes designed for lifelong memories."}
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
                  className={`block hover:text-[#C5A46D] ${isActive("/") ? "text-[#C5A46D] font-bold" : ""}`}
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
                    <Link href="/accommodation/theme-villas" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#C5A46D]">Theme Villas</Link>
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

