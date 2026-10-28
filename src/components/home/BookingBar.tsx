"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Calendar, Users, Home, Search } from "lucide-react";

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
    <section id="booking-search" className="relative z-20 w-full bg-[#202522] text-white border-y border-zinc-800 shadow-2xl py-6 sm:py-8">
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
  );
}
