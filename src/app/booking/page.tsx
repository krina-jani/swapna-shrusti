"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/navigation/Navbar";
import ResortFooter from "@/components/layout/ResortFooter";
import PhoneInputWithCountry from "@/components/ui/PhoneInputWithCountry";
import { ACCOMMODATIONS } from "@/data/resortData";
import { Calendar, Users, ShieldCheck, CheckCircle2, CreditCard, Lock, BedDouble, ChevronDown, Search, ArrowRight, User, Home } from "lucide-react";

function BookingContent() {
  const searchParams = useSearchParams();
  const initialRoom = searchParams.get("room") || ACCOMMODATIONS[0].slug;

  const [selectedRoomSlug, setSelectedRoomSlug] = useState(initialRoom);
  const [checkIn, setCheckIn] = useState(searchParams.get("checkIn") || "");
  const [checkOut, setCheckOut] = useState(searchParams.get("checkOut") || "");
  const [adults, setAdults] = useState(searchParams.get("adults") || "2");
  const [children, setChildren] = useState(searchParams.get("children") || "0");
  const [rooms, setRooms] = useState(searchParams.get("rooms") || "1");
  const [guests, setGuests] = useState(searchParams.get("adults") || "2");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [hasSearchedMobile, setHasSearchedMobile] = useState(false);

  const selectedRoom = ACCOMMODATIONS.find((r) => r.slug === selectedRoomSlug) || ACCOMMODATIONS[0];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const handleMobileSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearchedMobile(true);
    // Smooth scroll to the available rooms / details if needed
    const target = document.getElementById("mobile-room-selection");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* =========================================================================
          MOBILE VIEW ONLY (Reference Re-creation for < 768px Viewports)
          ========================================================================= */}
      <div className="block md:hidden w-full bg-[#FAF7F0] pb-16">
        {/* Sunset Pool Hero Section */}
        <section className="relative w-full h-[400px] xs:h-[440px] sm:h-[480px] overflow-hidden">
          <img
            src="/images/sticky-pool-hd.jpg"
            alt="Swapna Srushti Resort Sunset Pool"
            className="w-full h-full object-cover object-center scale-105"
          />
          {/* Dark luxury gradient overlays for text readability & sunset atmosphere */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/30 pointer-events-none" />
          <div className="absolute inset-0 bg-amber-950/20 mix-blend-color pointer-events-none" />

          {/* Hero Typography & Eyebrow */}
          <div className="absolute inset-0 flex flex-col justify-end px-6 pb-16 z-10">
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#D8B478] uppercase mb-2 font-sans drop-shadow-sm">
              BOOK YOUR STAY
            </span>
            <h1 className="font-serif font-bold text-3xl xs:text-4xl text-white leading-[1.18] tracking-tight drop-shadow-md">
              Relax. Recharge.<br />Reconnect.
            </h1>
            <p className="text-xs xs:text-sm text-zinc-200/90 mt-2.5 font-sans leading-relaxed max-w-xs drop-shadow-sm">
              Experience a peaceful stay surrounded by nature and warm hospitality.
            </p>
          </div>
        </section>

        {/* Overlapping Booking Card */}
        <div className="relative -mt-8 px-4 z-20">
          <div className="relative bg-[#FAF7F0] rounded-[32px] p-5 xs:p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-[#E9E2D2]">
            
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
            <form onSubmit={handleMobileSearch} className="space-y-3.5">
              
              {/* 1. Check-In */}
              <div className="relative bg-white/80 border border-[#E4DCB] rounded-2xl p-3 px-4 shadow-sm hover:border-[#C5A46D] transition-colors focus-within:border-[#C5A46D] focus-within:ring-1 focus-within:ring-[#C5A46D]">
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
                    onChange={(e) => {
                      setAdults(e.target.value);
                      setGuests(e.target.value);
                    }}
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

              {/* 5. Primary CTA Button: SEARCH AVAILABILITY -> */}
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

            {/* Seamless Mobile Accommodation Selection & Booking Step after Search */}
            <div id="mobile-room-selection" className="mt-8 pt-6 border-t border-[#E9E2D2] space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C5A46D] block">
                Featured Accommodations
              </span>
              <div className="space-y-3">
                {ACCOMMODATIONS.map((r) => (
                  <div
                    key={r.id}
                    onClick={() => {
                      setSelectedRoomSlug(r.slug);
                    }}
                    className={`p-3 rounded-2xl border transition-all flex items-center space-x-3 cursor-pointer ${
                      selectedRoomSlug === r.slug
                        ? "border-[#173A2B] bg-[#173A2B]/5 ring-1 ring-[#173A2B] shadow-sm"
                        : "border-[#E4DCCB] bg-white hover:border-[#C5A46D]"
                    }`}
                  >
                    <img src={r.image} alt={r.name} className="w-14 h-14 rounded-xl object-cover shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-xs text-[#173A2B] truncate">{r.name}</h4>
                      <p className="text-[11px] text-zinc-500">{r.capacity}</p>
                      <p className="text-[10px] text-emerald-700 font-medium">Free Breakfast Included</p>
                    </div>
                    {selectedRoomSlug === r.slug && (
                      <CheckCircle2 className="w-5 h-5 text-[#173A2B] shrink-0" />
                    )}
                  </div>
                ))}
              </div>

              {/* Guest Details Form on Mobile */}
              <div className="pt-4 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C5A46D] block">
                  Reserve Your Selected Room
                </span>
                <input
                  type="text"
                  required
                  placeholder="Primary Guest Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value.replace(/[^a-zA-Z\s]/g, ""))}
                  className="w-full px-3.5 py-3 rounded-xl border border-[#E4DCCB] text-xs bg-white text-zinc-900 focus:outline-none focus:border-[#C5A46D]"
                />
                <PhoneInputWithCountry
                  required
                  value={phone}
                  onChange={(fullVal) => setPhone(fullVal)}
                  placeholder="WhatsApp Number"
                  className="rounded-xl border border-[#E4DCCB] bg-white"
                />
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-3 rounded-xl border border-[#E4DCCB] text-xs bg-white text-zinc-900 focus:outline-none focus:border-[#C5A46D]"
                />
                <button
                  onClick={handleBookingSubmit}
                  className="w-full py-3.5 rounded-xl bg-[#173A2B] text-[#FAF7F0] font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-md hover:bg-[#122e22] transition-colors"
                >
                  <span>Confirm Reservation ({selectedRoom.name})</span>
                </button>
              </div>

              {/* Zero booking fees guarantee note */}
              <div className="pt-2 text-center">
                <p className="text-[11px] text-zinc-500 flex items-center justify-center space-x-1.5">
                  <Lock className="w-3.5 h-3.5 text-[#C5A46D]" />
                  <span>Zero Booking Fees • Best Rate Guaranteed Direct</span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* =========================================================================
          DESKTOP VIEW (Completely Untouched & Preserved for >= 768px Viewports)
          ========================================================================= */}
      <main className="hidden md:block flex-1 py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-10">
          <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase">
            ONLINE ROOM RESERVATION
          </span>
          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-[#173A2B] mt-1">
            Complete Your Reservation
          </h1>
          <p className="text-sm text-zinc-600 mt-2 font-sans">
            Select your dates, preferred room tier, and guest details below. (Connects directly with backend availability engine & payment gateway).
          </p>
        </div>

      {isSuccess ? (
        <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-xl border border-zinc-200 text-center max-w-xl mx-auto space-y-4">
          <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
          <h2 className="font-serif font-bold text-3xl text-[#173A2B]">
            Reservation Request Received!
          </h2>
          <p className="text-sm text-zinc-600 leading-relaxed">
            Thank you, <strong>{fullName}</strong>. We have received your booking request for <strong>{selectedRoom.name}</strong> from {checkIn || "Upcoming date"} to {checkOut || "Upcoming date"}. Our concierge will verify availability and send your official confirmation voucher to <strong>{email}</strong>.
          </p>
          <div className="pt-4">
            <button
              onClick={() => setIsSuccess(false)}
              className="px-6 py-2.5 rounded-full btn-gold text-xs uppercase tracking-wider font-bold"
            >
              Make Another Booking
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Booking Form Left */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-zinc-200 space-y-6">
            <h3 className="font-serif font-bold text-xl text-[#173A2B] border-b border-zinc-100 pb-3">
              1. Stay Details & Room Selection
            </h3>

            <form onSubmit={handleBookingSubmit} className="space-y-5">
              {/* Select Room */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 block mb-2">
                  Choose Accommodation Category
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {ACCOMMODATIONS.map((r) => (
                    <div
                      key={r.id}
                      onClick={() => setSelectedRoomSlug(r.slug)}
                      className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center space-x-3 ${
                        selectedRoomSlug === r.slug
                          ? "border-[#173A2B] bg-[#173A2B]/5 shadow-sm ring-1 ring-[#173A2B]"
                          : "border-zinc-200 hover:border-zinc-300"
                      }`}
                    >
                      <img src={r.image} alt={r.name} className="w-12 h-12 rounded-lg object-cover" />
                      <div>
                        <h4 className="font-bold text-xs text-[#173A2B]">{r.name}</h4>
                        <span className="text-[10px] text-zinc-500">{r.capacity}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dates */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-zinc-700">Check-In Date</label>
                  <input
                    type="date"
                    required
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full mt-1 px-3.5 py-2.5 rounded-lg border border-zinc-300 text-sm focus:outline-none focus:border-[#C5A46D]"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-zinc-700">Check-Out Date</label>
                  <input
                    type="date"
                    required
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full mt-1 px-3.5 py-2.5 rounded-lg border border-zinc-300 text-sm focus:outline-none focus:border-[#C5A46D]"
                  />
                </div>
              </div>

              {/* Guests */}
              <div>
                <label className="text-xs font-semibold text-zinc-700">Number of Guests</label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full mt-1 px-3.5 py-2.5 rounded-lg border border-zinc-300 text-sm focus:outline-none focus:border-[#C5A46D]"
                >
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <option key={num} value={num}>{num} Guest{num > 1 ? "s" : ""}</option>
                  ))}
                </select>
              </div>

              <h3 className="font-serif font-bold text-xl text-[#173A2B] border-b border-zinc-100 pb-3 pt-4">
                2. Guest Details
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-zinc-700">Primary Guest Name</label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value.replace(/[^a-zA-Z\s]/g, ""))}
                    placeholder="Full Legal Name"
                    className="w-full mt-1 px-3.5 py-2.5 rounded-lg border border-zinc-300 text-sm focus:outline-none focus:border-[#C5A46D]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-zinc-700">Phone Number (WhatsApp)</label>
                    <PhoneInputWithCountry
                      required
                      value={phone}
                      onChange={(fullVal) => setPhone(fullVal)}
                      className="mt-1 rounded-lg border border-zinc-300 bg-white"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-zinc-700">Email Address</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="guest@example.com"
                      className="w-full mt-1 px-3.5 py-2.5 rounded-lg border border-zinc-300 text-sm focus:outline-none focus:border-[#C5A46D]"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-4 rounded-full btn-gold text-center block font-bold text-sm uppercase tracking-wider shadow-xl"
                >
                  Proceed to Secure Checkout
                </button>
              </div>
            </form>
          </div>

          {/* Booking Summary Card Right */}
          <div className="lg:col-span-5">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-zinc-200 sticky top-28 space-y-6">
              <div>
                <span className="text-[11px] uppercase font-bold tracking-widest text-[#C5A46D]">
                  Booking Summary
                </span>
                <h3 className="font-serif font-bold text-2xl text-[#173A2B] mt-1">
                  {selectedRoom.name}
                </h3>
              </div>

              <div className="rounded-xl overflow-hidden h-44 shadow-inner">
                <img src={selectedRoom.image} alt={selectedRoom.name} className="w-full h-full object-cover" />
              </div>

              <div className="space-y-3 text-xs text-zinc-600 border-t border-b border-zinc-100 py-4">
                <div className="flex justify-between">
                  <span>Selected Category:</span>
                  <span className="font-bold text-zinc-900">{selectedRoom.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Capacity:</span>
                  <span className="font-bold text-zinc-900">{selectedRoom.capacity}</span>
                </div>
                <div className="flex justify-between">
                  <span>Breakfast:</span>
                  <span className="font-bold text-emerald-600">Complimentary Included</span>
                </div>
                <div className="flex justify-between">
                  <span>Activities:</span>
                  <span className="font-bold text-zinc-900">Resort Pool & Garden Access</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#F7F3E9] border border-zinc-200 flex items-center space-x-3 text-xs text-zinc-700">
                <Lock className="w-5 h-5 text-[#C5A46D] shrink-0" />
                <span>Zero Booking Fees • Frontend booking interface prepared for live gateway integration.</span>
              </div>
            </div>
          </div>

        </div>
      )}
    </main>
    </>
  );
}

export default function BookingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3E9] text-[#202522]">
      <Navbar />
      <Suspense fallback={<div className="p-12 text-center text-zinc-500">Loading booking engine...</div>}>
        <BookingContent />
      </Suspense>
      <ResortFooter />
    </div>
  );
}

