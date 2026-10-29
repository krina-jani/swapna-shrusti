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

  const toggleMobileSection = (key: string) => {
    setMobileExpandedSection((prev) => (prev === key ? null : key));
  };

  // Structured mobile navigation matching exact desktop options with expandable dropdowns
  const mobileNavSections = [
    {
      key: "home",
      label: "Home",
      href: "/",
      subItems: null,
    },
    {
      key: "accommodation",
      label: "Accommodation",
      href: "/accommodation",
      subItems: [
        { label: "Superior Rooms", href: "/accommodation/superior-rooms" },
        { label: "Premium Rooms", href: "/accommodation/premium-rooms" },
        { label: "Executive Suites", href: "/accommodation/executive-suites" },
        { label: "Cottages", href: "/accommodation/cottages" },
        { label: "Unique Residency", href: "/accommodation/unique-residencies" },
        { label: "Theme Village", href: "/accommodation/theme-village" },
      ],
    },
    {
      key: "discover",
      label: "Discover",
      href: "/discover",
      subItems: [
        { label: "Swimming Pool", href: "/discover/swimming-pool" },
        { label: "Adventure Park", href: "/discover/adventure-park" },
        { label: "Corporate Meeting", href: "/discover/corporate-meeting" },
        { label: "For Shoot", href: "/for-shoot" },
        { label: "Theme Village", href: "/accommodation/theme-village" },
      ],
    },
    {
      key: "events",
      label: "Events",
      href: "/events",
      subItems: [
        { label: "Weddings", href: "/events/weddings" },
        { label: "Festivals", href: "/events/festivals" },
        { label: "Birthday Parties", href: "/events/birthday-parties" },
        { label: "Corporate Conferences", href: "/events/corporate-conferences" },
        { label: "Family Get-togethers", href: "/events/family-get-togethers" },
        { label: "One-day Picnic", href: "/events/one-day-picnic" },
      ],
    },
    {
      key: "restaurant",
      label: "Restaurant",
      href: "/restaurant",
      subItems: null,
    },
    {
      key: "for-shoot",
      label: "For Shoot",
      href: "/for-shoot",
      subItems: [
        { label: "Pre-wedding", href: "/for-shoot/pre-wedding" },
        { label: "Album", href: "/for-shoot/album" },
        { label: "Film", href: "/for-shoot/film" },
        { label: "Ad-Film", href: "/for-shoot/ad-film" },
        { label: "Other Photoshoots", href: "/for-shoot/other-photoshoots" },
      ],
    },
    {
      key: "contact",
      label: "Contact",
      href: "/contact",
      subItems: null,
    },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 select-none transition-all duration-500 ease-in-out px-3 sm:px-6 lg:px-8 pt-3 sm:pt-4 pointer-events-none ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div
          className={`max-w-[1380px] w-full mx-auto rounded-full transition-all duration-300 pointer-events-auto border border-white/15 shadow-2xl px-4 sm:px-8 ${
            isScrolled || activeMenu
              ? "bg-black/75 backdrop-blur-md ring-1 ring-white/10"
              : "bg-black/45 backdrop-blur-md ring-1 ring-white/5"
          } text-white`}
        >
          <div className="flex items-center justify-between h-16 sm:h-18">
            
            {/* Resort Original Logo with identity intact */}
            <Link href="/" className="flex items-center space-x-2.5 sm:space-x-3 py-2 shrink-0 mr-2 sm:mr-4 group min-w-0">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Swapna Srushti Resort Logo"
                  width={48}
                  height={48}
                  priority
                  className="object-contain filter drop-shadow hover:scale-105 transition-transform"
                />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-serif text-base sm:text-xl font-bold tracking-wide text-white leading-tight truncate">
                  Swapna Srushti
                </span>
                <span className="hidden sm:block text-[10px] sm:text-[11px] tracking-widest text-[#C5A46D] uppercase font-sans font-medium">
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

              {/* 6. For Shoot */}
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

              {/* 7. Contact */}
              <Link 
                href="/contact" 
                className={`px-3.5 py-1.5 rounded-full transition-all ${
                  isActive("/contact")
                    ? "bg-[#C5A46D] text-[#173A2B] font-bold shadow-md shadow-[#C5A46D]/20"
                    : "hover:bg-white/10 hover:text-[#C5A46D] text-white"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Right Section: Gold Book Your Stay CTA & Mobile Menu Button */}
            <div className="flex items-center space-x-2 sm:space-x-3 shrink-0 ml-auto lg:ml-4">
              <Link
                href="/booking"
                className="hidden lg:flex px-4.5 sm:px-5 py-2 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#C5A46D] to-[#B89758] text-[#173A2B] hover:text-black font-bold text-xs uppercase tracking-wider items-center space-x-1.5 shadow-md hover:shadow-[#C5A46D]/30 hover:scale-[1.02] active:scale-[0.98] transition-all shrink-0"
              >
                <Calendar className="w-3.5 h-3.5 text-[#173A2B] shrink-0" />
                <span className="whitespace-nowrap">Book Your Stay</span>
              </Link>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open mobile menu"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-nav-drawer"
                className="lg:hidden p-2 text-zinc-200 hover:text-[#C5A46D] focus:outline-none focus:ring-2 focus:ring-[#C5A46D]/50 rounded-full transition-colors"
              >
                <Menu className="w-6 h-6 sm:w-7 sm:h-7" />
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* FULL-WIDTH DESKTOP MEGA-MENU                                              */}
        {/* ========================================================================= */}
        {activeMenu && (
          <div
            ref={megaMenuRef}
            onMouseEnter={() => {
              if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
            }}
            onMouseLeave={handleMouseLeave}
            className="fixed left-0 right-0 top-24 mx-auto max-w-[1020px] px-4 sm:px-6 z-40 pointer-events-auto"
          >
            <div className="bg-[#121413]/95 backdrop-blur-xl border border-white/15 rounded-2xl p-7 shadow-2xl flex justify-between items-center gap-10">
              
              {/* Left Column: Contextual Navigation List */}
              <div className="w-[320px] shrink-0">
                <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase block mb-4">
                  {activeMenu === "accommodation"
                    ? "Rooms & Suites"
                    : activeMenu === "discover"
                    ? "Explore Resort"
                    : activeMenu === "events"
                    ? "Celebrations & Gatherings"
                    : "Production Sets & Venues"}
                </span>

                {/* 1. Accommodation Links */}
                {activeMenu === "accommodation" && (
                  <ul className="space-y-3 text-xs uppercase font-semibold text-zinc-200">
                    {ACCOMMODATIONS.map((r) => (
                      <li key={r.id} onMouseEnter={() => setHoveredPreview({ image: r.image, title: r.name, desc: r.description })}>
                        <Link
                          href={`/accommodation/${r.slug}`}
                          onClick={() => setActiveMenu(null)}
                          className="hover:text-[#C5A46D] flex items-center justify-between group py-1 border-b border-zinc-800/80"
                        >
                          <span className="group-hover:translate-x-1 transition-transform">{r.name}</span>
                          <ChevronRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:text-[#C5A46D] transition-all" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}

                {/* 2. Discover Links */}
                {activeMenu === "discover" && (
                  <ul className="space-y-3 text-xs uppercase font-semibold text-zinc-200">
                    {EXPERIENCES.slice(0, 4).map((e) => (
                      <li key={e.id} onMouseEnter={() => { setHoveredPreview({ image: e.image, title: e.name, desc: e.description }); setActiveForShootSubmenu(false); }}>
                        <Link
                          href={`/discover/${e.slug}`}
                          onClick={() => setActiveMenu(null)}
                          className="hover:text-[#C5A46D] flex items-center justify-between group py-1 border-b border-zinc-800/80"
                        >
                          <span className="group-hover:translate-x-1 transition-transform">{e.name}</span>
                          <ChevronRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:text-[#C5A46D] transition-all" />
                        </Link>
                      </li>
                    ))}
                    
                    {/* For Shoot submenu trigger */}
                    <li
                      onMouseEnter={() => {
                        setActiveForShootSubmenu(true);
                        setHoveredPreview({
                          image: SHOOT_CATEGORIES[0].image,
                          title: SHOOT_CATEGORIES[0].name,
                          desc: SHOOT_CATEGORIES[0].description
                        });
                      }}
                      className="hover:text-[#C5A46D] flex items-center justify-between group py-1 border-b border-zinc-800/80 cursor-pointer text-white"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">For Shoot</span>
                      <ChevronRight className={`w-3.5 h-3.5 transition-transform ${activeForShootSubmenu ? "text-[#C5A46D] translate-x-1" : "opacity-40"}`} />
                    </li>

                    {/* Theme Village link */}
                    <li onMouseEnter={() => { setHoveredPreview({ image: "/images/villagetheme/theme-village-1.png", title: "Theme Village", desc: "Experience our rich heritage themed village architectures and rustic tranquility." }); setActiveForShootSubmenu(false); }}>
                      <Link
                        href="/accommodation/theme-village"
                        onClick={() => setActiveMenu(null)}
                        className="hover:text-[#C5A46D] flex items-center justify-between group py-1 border-b border-zinc-800/80"
                      >
                        <span className="group-hover:translate-x-1 transition-transform">Theme Village</span>
                        <ChevronRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:text-[#C5A46D] transition-all" />
                      </Link>
                    </li>
                  </ul>
                )}

                {/* 3. Events Links */}
                {activeMenu === "events" && (
                  <ul className="space-y-3 text-xs uppercase font-semibold text-zinc-200">
                    {EVENTS.map((e) => (
                      <li key={e.id} onMouseEnter={() => setHoveredPreview({ image: e.image, title: e.name, desc: e.description })}>
                        <Link
                          href={`/events/${e.slug}`}
                          onClick={() => setActiveMenu(null)}
                          className="hover:text-[#C5A46D] flex items-center justify-between group py-1 border-b border-zinc-800/80"
                        >
                          <span className="group-hover:translate-x-1 transition-transform">{e.name}</span>
                          <ChevronRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:text-[#C5A46D] transition-all" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}

                {/* 4. For Shoot Direct Menu */}
                {activeMenu === "for-shoot" && (
                  <ul className="space-y-3 text-xs uppercase font-semibold text-zinc-200">
                    {SHOOT_CATEGORIES.map((s) => (
                      <li key={s.id} onMouseEnter={() => setHoveredPreview({ image: s.image, title: s.name, desc: s.description })}>
                        <Link
                          href={`/for-shoot/${s.slug}`}
                          onClick={() => setActiveMenu(null)}
                          className="hover:text-[#C5A46D] flex items-center justify-between group py-1 border-b border-zinc-800/80"
                        >
                          <span className="group-hover:translate-x-1 transition-transform">{s.name}</span>
                          <ChevronRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:text-[#C5A46D] transition-all" />
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
                          <ChevronRight className="w-3.5 h-3.5 text-zinc-500" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Right Column: Large relevant resort photograph with white border */}
              <div className="w-[460px] max-w-full shrink-0">
                <div className="relative rounded-lg overflow-hidden border-2 border-white/90 shadow-2xl w-full aspect-[16/10] group">
                  <img
                    src={
                      hoveredPreview?.image ||
                      (activeMenu === "accommodation"
                        ? ACCOMMODATIONS[3].image
                        : activeMenu === "discover"
                        ? EXPERIENCES[1].image
                        : activeMenu === "events"
                        ? EVENTS[0].image
                        : SHOOT_CATEGORIES[0].image)
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
      </header>

      {/* ========================================================================= */}
      {/* MOBILE FULL-SCREEN NAVIGATION DRAWER (Rendered Outside <header>)           */}
      {/* ========================================================================= */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
          style={{ position: "fixed", inset: 0, zIndex: 99999 }}
          className="bg-[#0f1412] text-white flex flex-col justify-between overflow-y-auto"
        >
          {/* Top Section: Header & Navigation Links */}
          <div className="p-6">
            {/* Header: Logo, Branding & Close (X) button */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center space-x-3"
              >
                <div className="relative w-11 h-11 shrink-0">
                  <Image
                    src="/images/logo.png"
                    alt="Swapna Srushti Logo"
                    width={44}
                    height={44}
                    className="object-contain"
                  />
                </div>
                <div>
                  <span className="font-serif text-lg font-bold tracking-wide text-white block leading-tight">
                    Swapna Srushti
                  </span>
                  <span className="text-[10px] text-[#C5A46D] tracking-widest uppercase font-sans font-medium">
                    Luxury Resort
                  </span>
                </div>
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 text-zinc-300 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A46D]"
                aria-label="Close menu"
              >
                <X className="w-6 h-6 text-[#C5A46D]" />
              </button>
            </div>

            {/* Navigation Options with Expandable Dropdowns */}
            <nav className="flex flex-col space-y-2">
              {mobileNavSections.map((item) => {
                const active = isActive(item.href);
                const hasSub = !!item.subItems && item.subItems.length > 0;
                const isExpanded = mobileExpandedSection === item.key;

                return (
                  <div key={item.key} className="border-b border-white/5 pb-1">
                    <div className="flex items-center justify-between">
                      {hasSub ? (
                        <button
                          type="button"
                          onClick={() => toggleMobileSection(item.key)}
                          className={`w-full flex items-center justify-between py-3.5 px-3 rounded-xl font-serif text-xl sm:text-2xl tracking-wide transition-all ${
                            active || isExpanded
                              ? "text-[#C5A46D] font-bold bg-white/5 border-l-4 border-[#C5A46D] pl-4"
                              : "text-zinc-100 hover:text-[#C5A46D] hover:bg-white/5"
                          }`}
                        >
                          <span>{item.label}</span>
                          <ChevronDown
                            className={`w-5 h-5 transition-transform duration-300 ${
                              isExpanded ? "rotate-180 text-[#C5A46D]" : "text-zinc-500"
                            }`}
                          />
                        </button>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`w-full flex items-center justify-between py-3.5 px-3 rounded-xl font-serif text-xl sm:text-2xl tracking-wide transition-all ${
                            active
                              ? "text-[#C5A46D] font-bold bg-white/5 border-l-4 border-[#C5A46D] pl-4"
                              : "text-zinc-100 hover:text-[#C5A46D] hover:bg-white/5"
                          }`}
                        >
                          <span>{item.label}</span>
                          <ChevronRight
                            className={`w-4 h-4 transition-transform ${
                              active ? "text-[#C5A46D] translate-x-1" : "text-zinc-600"
                            }`}
                          />
                        </Link>
                      )}
                    </div>

                    {/* Expandable Submenu Dropdown */}
                    {hasSub && isExpanded && (
                      <div className="mt-1 mb-2 ml-4 pl-3 border-l-2 border-[#C5A46D]/40 space-y-1 animate-in fade-in duration-200">
                        {/* Direct link to parent category landing page */}
                        <Link
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-2 px-3 text-xs uppercase tracking-wider text-[#C5A46D] font-bold hover:text-white transition-colors"
                        >
                          View All {item.label} &rarr;
                        </Link>
                        {item.subItems!.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-2 px-3 rounded-lg text-sm text-zinc-300 hover:text-white hover:bg-white/5 transition-colors font-sans"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>

          {/* Bottom Section: Book Your Stay CTA & Direct Concierge */}
          <div className="p-6 bg-black/60 border-t border-white/10 space-y-4">
            <Link
              href="/booking"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-4 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#C5A46D] to-[#B89758] text-[#173A2B] text-center block font-bold text-sm uppercase tracking-widest shadow-xl hover:brightness-110 active:scale-[0.99] transition-all"
            >
              Book Your Stay
            </Link>

            <a
              href="tel:+919909922000"
              className="flex items-center justify-center space-x-2 text-zinc-300 hover:text-[#C5A46D] text-xs py-1 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#C5A46D]" />
              <span className="tracking-wide">Direct Concierge: +91 99099 22000</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
