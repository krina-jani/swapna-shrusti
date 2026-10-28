import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#121922] text-zinc-400 border-t border-zinc-800 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand USA column */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-heading font-black text-2xl tracking-tight text-white uppercase">
              Brand USA
            </span>
            <p className="text-zinc-400 text-xs sm:text-sm max-w-sm leading-relaxed">
              The official travel resource for the United States. Discover, explore and start planning your American adventure today.
            </p>

            {/* Social Icons matching the reference circles */}
            <div className="flex items-center space-x-3 pt-2 text-zinc-300">
              <a href="#" className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 hover:text-white transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.19 22 12z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 hover:text-white transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 hover:text-white transition-colors" aria-label="YouTube">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 hover:text-white transition-colors" aria-label="Pinterest">
                <span className="font-bold text-xs">P</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 hover:text-white transition-colors" aria-label="X Twitter">
                <span className="font-bold text-xs">𝕏</span>
              </a>
            </div>
          </div>

          {/* Destinations Links */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-4">
              Destinations
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li><a href="#destinations" className="hover:text-white transition-colors">Cities</a></li>
              <li><a href="#outdoors" className="hover:text-white transition-colors">National Parks</a></li>
              <li><a href="#outdoors" className="hover:text-white transition-colors">Road Trips</a></li>
              <li><a href="#outdoors" className="hover:text-white transition-colors">Beaches</a></li>
              <li><a href="#destinations" className="hover:text-white transition-colors">Hidden Gems</a></li>
            </ul>
          </div>

          {/* Plan Your Trip Links */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-4">
              Plan Your Trip
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li><a href="#visa-entry" className="hover:text-white transition-colors">Visa & Entry</a></li>
              <li><a href="#visa-entry" className="hover:text-white transition-colors">Travel Tips</a></li>
              <li><a href="#dream-trip" className="hover:text-white transition-colors">Maps & Guides</a></li>
              <li><a href="#visa-entry" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#dream-trip" className="hover:text-white transition-colors">Traveler Resources</a></li>
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-4">
              About
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li><a href="#" className="hover:text-white transition-colors">Our Mission</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Media</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Travel Trade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal bar with USA badge */}
        <div className="mt-16 pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© 2026 Brand USA. All rights reserved.</p>

          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-zinc-400">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-zinc-400">Terms of Use</a>
            <span>|</span>
            <a href="#" className="hover:text-zinc-400">Accessibility</a>
          </div>

          {/* Stylized USA brand badge matching reference */}
          <div className="flex items-center space-x-1 font-heading font-black text-zinc-300 tracking-wider">
            <span className="text-base font-extrabold tracking-tight">USA</span>
            <span className="text-[9px] uppercase tracking-widest text-zinc-400 pl-1">VISIT THE USA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
