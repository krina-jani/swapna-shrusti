"use client";

import React, { useState } from "react";
import { Search, Menu, X, ChevronDown, ChevronRight, Globe, Compass, MapPin, Calendar, Heart } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  const toggleMegaMenu = (menuName: string) => {
    setActiveMegaMenu(activeMegaMenu === menuName ? null : menuName);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#161c24] text-white border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo */}
          <div className="flex items-center space-x-8">
            <a href="#" className="flex items-center space-x-1 group">
              <span className="font-heading font-black text-2xl tracking-tight text-white uppercase group-hover:text-blue-400 transition-colors">
                Brand <span className="text-white">USA</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-7 text-[13px] font-semibold tracking-wider uppercase text-zinc-200">
              <div 
                className="relative"
                onMouseEnter={() => setActiveMegaMenu("destinations")}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <button 
                  onClick={() => toggleMegaMenu("destinations")}
                  className={`flex items-center space-x-1 py-5 hover:text-white transition-colors ${activeMegaMenu === "destinations" ? "text-blue-400" : ""}`}
                >
                  <span>Destinations</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMegaMenu === "destinations" ? "rotate-180 text-blue-400" : ""}`} />
                </button>

                {/* Destinations Mega Menu */}
                {activeMegaMenu === "destinations" && (
                  <div className="absolute top-full left-0 w-[680px] bg-[#1a212b] border border-zinc-700/60 shadow-2xl rounded-b-lg p-6 grid grid-cols-3 gap-6 text-left normal-case tracking-normal">
                    <div>
                      <h4 className="text-xs uppercase font-bold text-blue-400 tracking-wider mb-3">Popular Regions</h4>
                      <ul className="space-y-2 text-sm text-zinc-300">
                        {["Pacific Northwest", "Southwest & Canyons", "New England & East Coast", "Rocky Mountains", "Deep South & Gulf Coast", "Midwest Heartlands"].map((r) => (
                          <li key={r}>
                            <a href="#destinations" className="hover:text-white hover:underline flex items-center justify-between">
                              {r}
                              <ChevronRight className="w-3 h-3 text-zinc-500" />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xs uppercase font-bold text-blue-400 tracking-wider mb-3">Top Cities</h4>
                      <ul className="space-y-2 text-sm text-zinc-300">
                        {["New York City", "Los Angeles", "San Francisco", "Las Vegas", "Chicago", "Miami"].map((c) => (
                          <li key={c}>
                            <a href="#destinations" className="hover:text-white hover:underline flex items-center justify-between">
                              {c}
                              <ChevronRight className="w-3 h-3 text-zinc-500" />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-[#12161c] p-4 rounded-lg flex flex-col justify-between">
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">Featured Highlight</span>
                        <h5 className="font-bold text-white text-base mt-1">National Parks Pass</h5>
                        <p className="text-xs text-zinc-400 mt-2 leading-relaxed">Discover 63 iconic national parks with majestic landscapes and hiking trails.</p>
                      </div>
                      <a href="#outdoors" className="text-xs text-blue-400 hover:text-blue-300 font-semibold mt-4 flex items-center gap-1">
                        Explore Parks &rarr;
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <div 
                className="relative"
                onMouseEnter={() => setActiveMegaMenu("experiences")}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <button 
                  onClick={() => toggleMegaMenu("experiences")}
                  className={`flex items-center space-x-1 py-5 hover:text-white transition-colors ${activeMegaMenu === "experiences" ? "text-blue-400" : ""}`}
                >
                  <span>Experiences</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMegaMenu === "experiences" ? "rotate-180 text-blue-400" : ""}`} />
                </button>

                {/* Experiences Mega Menu */}
                {activeMegaMenu === "experiences" && (
                  <div className="absolute top-full left-0 w-[540px] bg-[#1a212b] border border-zinc-700/60 shadow-2xl rounded-b-lg p-6 grid grid-cols-2 gap-6 text-left normal-case tracking-normal">
                    <div>
                      <h4 className="text-xs uppercase font-bold text-blue-400 tracking-wider mb-3">Categories</h4>
                      <ul className="space-y-2 text-sm text-zinc-300">
                        {["Road Trips & Scenic Drives", "Outdoor & Adventure Sports", "Historical & Heritage Sites", "Culinary & Food Scenes", "Music, Festivals & Arts"].map((item) => (
                          <li key={item}>
                            <a href="#sports" className="hover:text-white hover:underline flex items-center justify-between">
                              {item}
                              <ChevronRight className="w-3 h-3 text-zinc-500" />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-[#12161c] p-4 rounded-lg flex flex-col justify-between">
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">Summer & Fall</span>
                        <h5 className="font-bold text-white text-base mt-1">Surfing & Coastal Vibes</h5>
                        <p className="text-xs text-zinc-400 mt-2 leading-relaxed">Catch legendary waves in California, Hawaii, and coastal shores across the continent.</p>
                      </div>
                      <a href="#sports" className="text-xs text-blue-400 hover:text-blue-300 font-semibold mt-4 flex items-center gap-1">
                        View Activities &rarr;
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <a href="#dream-trip" className="hover:text-white transition-colors">
                Plan Your Trip
              </a>
              <a href="#visa-entry" className="hover:text-white transition-colors">
                About
              </a>
            </nav>
          </div>

          {/* Right utility items */}
          <div className="flex items-center space-x-5">
            <button 
              aria-label="Search" 
              className="text-zinc-300 hover:text-white p-2 rounded-full hover:bg-zinc-800 transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className="md:hidden text-zinc-200 hover:text-white p-1"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>

            {/* Desktop menu bars icon */}
            <button 
              aria-label="Open menu drawer"
              className="hidden md:flex flex-col space-y-1.5 p-2 text-zinc-300 hover:text-white group"
            >
              <span className="w-6 h-0.5 bg-zinc-300 group-hover:bg-white transition-colors"></span>
              <span className="w-6 h-0.5 bg-zinc-300 group-hover:bg-white transition-colors"></span>
              <span className="w-6 h-0.5 bg-zinc-300 group-hover:bg-white transition-colors"></span>
            </button>
          </div>
        </div>

        {/* Mobile menu drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-zinc-800 space-y-3 font-semibold text-sm">
            <a 
              href="#destinations" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-zinc-300 hover:text-white border-b border-zinc-800/60"
            >
              Destinations
            </a>
            <a 
              href="#experiences" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-zinc-300 hover:text-white border-b border-zinc-800/60"
            >
              Experiences
            </a>
            <a 
              href="#dream-trip" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-zinc-300 hover:text-white border-b border-zinc-800/60"
            >
              Plan Your Trip
            </a>
            <a 
              href="#visa-entry" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-zinc-300 hover:text-white"
            >
              About & Visa
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

