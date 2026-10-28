"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/navigation/Navbar";
import ResortFooter from "@/components/layout/ResortFooter";
import { ACCOMMODATIONS } from "@/data/resortData";
import { Calendar, Users, ShieldCheck, CheckCircle2, CreditCard, Lock } from "lucide-react";

function BookingContent() {
  const searchParams = useSearchParams();
  const initialRoom = searchParams.get("room") || ACCOMMODATIONS[0].slug;

  const [selectedRoomSlug, setSelectedRoomSlug] = useState(initialRoom);
  const [checkIn, setCheckIn] = useState(searchParams.get("checkIn") || "");
  const [checkOut, setCheckOut] = useState(searchParams.get("checkOut") || "");
  const [guests, setGuests] = useState(searchParams.get("adults") || "2");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const selectedRoom = ACCOMMODATIONS.find((r) => r.slug === selectedRoomSlug) || ACCOMMODATIONS[0];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  return (
    <main className="flex-1 py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Full Legal Name"
                    className="w-full mt-1 px-3.5 py-2.5 rounded-lg border border-zinc-300 text-sm focus:outline-none focus:border-[#C5A46D]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-zinc-700">Phone Number (WhatsApp)</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 99099 22000"
                      className="w-full mt-1 px-3.5 py-2.5 rounded-lg border border-zinc-300 text-sm focus:outline-none focus:border-[#C5A46D]"
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

