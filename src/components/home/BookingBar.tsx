"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Calendar, Users, Home, Search, BedDouble, ChevronDown, User } from "lucide-react";

export default function BookingBar() {
  const router = useRouter();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState("2");
  const [children, setChildren] = useState("0");
  const [rooms, setRooms] = useState("1");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/booking?checkIn=${checkIn}&checkOut=${checkOut}&adults=${adults}&children=${children}&rooms=${rooms}`);
  };

  return (
    <>
      {/* =========================================================================
          MOBILE VIEW ONLY (< 768px): Directly Connected to Hero Section
          ========================================================================= */}
      <section className="block md:hidden w-full bg-transparent relative z-20 pb-12">
        {/* Overlapping Booking Card connected directly to HeroSection above */}
        <div className="relative -mt-28 px-4 z-20">
          <div className="relative bg-[#FAF7F0] rounded-[32px] p-5 xs:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-[#E9E2D2]">
            
            {/* Overlapping Circular Muted-Gold Badge with Bed Icon */}
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[#C5A46D] text-white flex items-center justify-center shadow-md border-4 border-[#FAF7F0]">
              <BedDouble className="w-6 h-6 stroke-[1.8]" />
            </div>

            {/* Card Title with decorative lines */}
            <div className="pt-5 pb-5 text-center flex items-center justify-center space-x-3">
              <span className="h-[1px] w-10 sm:w-14 bg-[#D3C3A7]" />
              <h2 className="font-serif font-bold text-xl xs:text-[22px] text-[#173A2B] tracking-wide">
                Check Availability
              </h2>
              <span className="h-[1px] w-10 sm:w-14 bg-[#D3C3A7]" />
            </div>

            {/* Mobile Booking Form Fields */}
            <form onSubmit={handleSearch} className="space-y-3.5">
              
              {/* 1. Check-In */}
              <div className="relative bg-white/80 border border-[#E4DCCB] rounded-2xl p-3 px-4 shadow-sm hover:border-[#C5A46D] transition-colors focus-within:border-[#C5A46D] focus-within:ring-1 focus-within:ring-[#C5A46D]">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-[#F7F3E9] flex items-center justify-center text-[#173A2B] shrink-0 border border-[#E9E2D2]">
                    <Calendar className="w-4 h-4 stroke-[1.8] text-[#C5A46D]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 block">
                      Check-In
                    </span>
                    <span className="text-sm font-semibold text-[#173A2B] truncate block">
                      {checkIn ? new Date(checkIn).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : "Select date"}
                    </span>
                  </div>
                  <Calendar className="w-4 h-4 text-zinc-400 shrink-0" />
                </div>
                <input
                  type="date"
                  required
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
              </div>

              {/* 2. Check-Out */}
              <div className="relative bg-white/80 border border-[#E4DCCB] rounded-2xl p-3 px-4 shadow-sm hover:border-[#C5A46D] transition-colors focus-within:border-[#C5A46D] focus-within:ring-1 focus-within:ring-[#C5A46D]">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-[#F7F3E9] flex items-center justify-center text-[#173A2B] shrink-0 border border-[#E9E2D2]">
                    <Calendar className="w-4 h-4 stroke-[1.8] text-[#C5A46D]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 block">
                      Check-Out
                    </span>
                    <span className="text-sm font-semibold text-[#173A2B] truncate block">
                      {checkOut ? new Date(checkOut).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : "Select date"}
                    </span>
                  </div>
                  <Calendar className="w-4 h-4 text-zinc-400 shrink-0" />
                </div>
                <input
                  type="date"
                  required
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
              </div>

              {/* 3. Adults & Children side by side */}
              <div className="grid grid-cols-2 gap-3">
                {/* Adults */}
                <div className="relative bg-white/80 border border-[#E4DCCB] rounded-2xl p-3 px-3.5 shadow-sm hover:border-[#C5A46D] transition-colors focus-within:border-[#C5A46D] focus-within:ring-1 focus-within:ring-[#C5A46D]">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#F7F3E9] flex items-center justify-center text-[#173A2B] shrink-0 border border-[#E9E2D2]">
                      <User className="w-4 h-4 stroke-[1.8] text-[#C5A46D]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 block">
                        Adults
                      </span>
                      <span className="text-xs xs:text-sm font-semibold text-[#173A2B] truncate block">
                        {adults} Adult{parseInt(adults) > 1 ? "s" : ""}
                      </span>
                    </div>
                    <ChevronDown className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                  </div>
                  <select
                    value={adults}
                    onChange={(e) => setAdults(e.target.value)}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  >
                    {[1, 2, 3, 4, 5, 6, 8, 10].map((num) => (
                      <option key={num} value={num}>
                        {num} Adult{num > 1 ? "s" : ""}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Children */}
                <div className="relative bg-white/80 border border-[#E4DCCB] rounded-2xl p-3 px-3.5 shadow-sm hover:border-[#C5A46D] transition-colors focus-within:border-[#C5A46D] focus-within:ring-1 focus-within:ring-[#C5A46D]">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#F7F3E9] flex items-center justify-center text-[#173A2B] shrink-0 border border-[#E9E2D2]">
                      <Users className="w-4 h-4 stroke-[1.8] text-[#C5A46D]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 block">
                        Children
                      </span>
                      <span className="text-xs xs:text-sm font-semibold text-[#173A2B] truncate block">
                        {children} Child{parseInt(children) > 1 ? "ren" : ""}
                      </span>
                    </div>
                    <ChevronDown className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                  </div>
                  <select
                    value={children}
                    onChange={(e) => setChildren(e.target.value)}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  >
                    {[0, 1, 2, 3, 4].map((num) => (
                      <option key={num} value={num}>
                        {num} Child{num > 1 ? "ren" : ""}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* 4. Rooms */}
              <div className="relative bg-white/80 border border-[#E4DCCB] rounded-2xl p-3 px-4 shadow-sm hover:border-[#C5A46D] transition-colors focus-within:border-[#C5A46D] focus-within:ring-1 focus-within:ring-[#C5A46D]">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-[#F7F3E9] flex items-center justify-center text-[#173A2B] shrink-0 border border-[#E9E2D2]">
                    <Home className="w-4 h-4 stroke-[1.8] text-[#C5A46D]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 block">
                      Rooms
                    </span>
                    <span className="text-sm font-semibold text-[#173A2B] truncate block">
                      {rooms} Room{parseInt(rooms) > 1 ? "s" : ""}
                    </span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-zinc-400 shrink-0" />
                </div>
                <select
                  value={rooms}
                  onChange={(e) => setRooms(e.target.value)}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num} Room{num > 1 ? "s" : ""}
                    </option>
                  ))}
                </select>
              </div>

              {/* 5. CTA Button: SEARCH AVAILABILITY -> */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl bg-[#C5A46D] hover:bg-[#b5935c] active:scale-[0.99] transition-all text-[#173A2B] font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-lg shadow-[#C5A46D]/20 cursor-pointer"
                >
                  <Search className="w-4 h-4 stroke-[2.2]" />
                  <span>SEARCH AVAILABILITY &rarr;</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* =========================================================================
          DESKTOP VIEW ONLY (>= 768px): Completely Preserved
          ========================================================================= */}
      <section id="booking-search" className="hidden md:block relative z-20 w-full bg-[#202522] text-white border-y border-zinc-800 shadow-2xl py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-4 border-b border-zinc-800/80 gap-2 mb-6">
            <div>
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#C5A46D] uppercase">
                RESERVATIONS & STAY
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-white font-semibold">
                Plan Your Gateway at Swapna Srushti
              </h3>
            </div>
            <span className="text-xs text-zinc-400">
              Best Rate Guarantee • Direct Concierge Service
            </span>
          </div>

          <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 items-end">
            {/* Check-In */}
            <div className="space-y-1.5">
              <label className="text-[11px] uppercase font-bold tracking-wider text-zinc-300 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#C5A46D]" /> Check-In
              </label>
              <input
                type="date"
                required
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full bg-[#161a18] border border-zinc-700 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#C5A46D]"
              />
            </div>

            {/* Check-Out */}
            <div className="space-y-1.5">
              <label className="text-[11px] uppercase font-bold tracking-wider text-zinc-300 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#C5A46D]" /> Check-Out
              </label>
              <input
                type="date"
                required
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-[#161a18] border border-zinc-700 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#C5A46D]"
              />
            </div>

            {/* Adults */}
            <div className="space-y-1.5">
              <label className="text-[11px] uppercase font-bold tracking-wider text-zinc-300 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#C5A46D]" /> Adults
              </label>
              <select
                value={adults}
                onChange={(e) => setAdults(e.target.value)}
                className="w-full bg-[#161a18] border border-zinc-700 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#C5A46D]"
              >
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? "Adult" : "Adults"}
                  </option>
                ))}
              </select>
            </div>

            {/* Children */}
            <div className="space-y-1.5">
              <label className="text-[11px] uppercase font-bold tracking-wider text-zinc-300 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#C5A46D]" /> Children
              </label>
              <select
                value={children}
                onChange={(e) => setChildren(e.target.value)}
                className="w-full bg-[#161a18] border border-zinc-700 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#C5A46D]"
              >
                {[0, 1, 2, 3, 4].map((num) => (
                  <option key={num} value={num}>
                    {num} Children
                  </option>
                ))}
              </select>
            </div>

            {/* Rooms */}
            <div className="space-y-1.5">
              <label className="text-[11px] uppercase font-bold tracking-wider text-zinc-300 flex items-center gap-1.5">
                <Home className="w-3.5 h-3.5 text-[#C5A46D]" /> Rooms
              </label>
              <select
                value={rooms}
                onChange={(e) => setRooms(e.target.value)}
                className="w-full bg-[#161a18] border border-zinc-700 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#C5A46D]"
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? "Room" : "Rooms"}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                className="w-full py-3 rounded-lg btn-gold flex items-center justify-center space-x-2 text-xs sm:text-sm font-bold tracking-wider uppercase cursor-pointer"
              >
                <Search className="w-4 h-4" />
                <span>Check</span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
