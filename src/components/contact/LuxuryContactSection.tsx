"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  User,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Navigation,
  ExternalLink,
} from "lucide-react";
import PhoneInputWithCountry from "@/components/ui/PhoneInputWithCountry";
import { RESORT_INFO } from "@/data/resortData";

export default function LuxuryContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Room Reservation",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const subjects = [
    "Room Reservation",
    "Day Picnic Package",
    "Destination Wedding",
    "Corporate Conference",
    "Pre-wedding / Film Shoot",
    "Restaurant & Dining",
    "General Enquiry",
  ];

  return (
    <section className="relative w-full pt-28 sm:pt-32 pb-16 sm:pb-24 bg-[#F7F3E9] text-[#173A2B] overflow-hidden">
      {/* Decorative Botanical Corner Line-Arts (Matches Reference Top-Right & Bottom-Right) */}
      <div className="absolute top-0 right-0 w-64 sm:w-80 h-64 sm:h-80 pointer-events-none opacity-25 select-none">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full text-[#C5A46D] stroke-current fill-none stroke-[1.2]"
        >
          <path d="M200,0 C170,40 140,80 110,100 C80,120 40,140 0,150" />
          <path d="M160,20 C140,10 130,40 145,50 C155,55 170,40 160,20 Z" />
          <path d="M130,55 C110,45 100,75 115,85 C125,90 140,75 130,55 Z" />
          <path d="M100,90 C80,80 70,110 85,120 C95,125 110,110 100,90 Z" />
          <path d="M180,60 C165,85 185,115 195,100" />
          <path d="M140,105 C120,130 145,155 160,140" />
        </svg>
      </div>

      <div className="absolute bottom-0 right-0 w-72 sm:w-96 h-72 sm:h-96 pointer-events-none opacity-20 select-none">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full text-[#C5A46D] stroke-current fill-none stroke-[1.2]"
        >
          <path d="M200,200 C160,160 130,120 100,80 C70,40 30,20 0,0" />
          <path d="M170,150 C150,140 140,170 155,180 C165,185 180,170 170,150 Z" />
          <path d="M135,115 C115,105 105,135 120,145 C130,150 145,135 135,115 Z" />
          <path d="M105,75 C85,65 75,95 90,105 C100,110 115,95 105,75 Z" />
        </svg>
      </div>

      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================================= */}
        {/* 1. HERO HEADER: CONTACT LABEL + EDITORIAL TITLE + INTRO PARAGRAPH         */}
        {/* ========================================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 sm:pb-14">
          <div className="max-w-xl">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.28em] text-[#C5A46D] uppercase block mb-3">
              CONTACT
            </span>
            <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-[56px] text-[#173A2B] leading-[1.1] tracking-tight">
              We&apos;d Love to <br />
              Hear From You
            </h1>
          </div>
          <div className="max-w-md lg:pb-1">
            <p className="text-zinc-600 text-sm sm:text-[15px] leading-relaxed">
              Whether you&apos;re planning a weekend getaway, a family vacation or a special celebration, our team is here to help. Reach out to us for bookings, enquiries or any assistance.
            </p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. MAIN 3-COLUMN LAYOUT (Matches Reference Image Exactly)                 */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-7 items-stretch">
          
          {/* ----------------------------------------------------------------------- */}
          {/* LEFT COLUMN: Large Scenic Resort Photo with Location Badge Overlay       */}
          {/* ----------------------------------------------------------------------- */}
          <div className="lg:col-span-5 relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-[#E9DFCE] min-h-[360px] sm:min-h-[440px] flex flex-col justify-end group">
            <Image
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
              alt="Swapna Srushti Resort Scenic Villa & Lush Gardens"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Dark Location Floating Badge at Bottom */}
            <div className="relative z-10 m-4 sm:m-6 p-4 sm:p-5 rounded-2xl bg-black/65 backdrop-blur-md border border-white/20 text-white flex items-center justify-between shadow-xl">
              <div className="flex items-center space-x-3.5">
                <div className="w-10 h-10 rounded-full bg-[#C5A46D] flex items-center justify-center shrink-0 text-[#173A2B] shadow-md">
                  <MapPin className="w-5 h-5 text-[#173A2B] stroke-[2.2]" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-white leading-tight">
                    Swapna Srushti Resort
                  </h3>
                  <span className="text-xs text-zinc-300 block mt-0.5">
                    Gandhinagar-Mahudi Highway, Gujarat
                  </span>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Swapna+Srushti+Resort+Gandhinagar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Swapna Srushti Resort on Google Maps"
                className="w-9 h-9 rounded-full bg-white/15 hover:bg-[#C5A46D] hover:text-[#173A2B] text-white flex items-center justify-center transition-all duration-300 shrink-0 ml-3"
              >
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* MIDDLE COLUMN: 4 Separate Contact Info Cards with Circular Gold Icons    */}
          {/* ----------------------------------------------------------------------- */}
          <div className="lg:col-span-3 flex flex-col justify-between gap-3.5 sm:gap-4">
            
            {/* Card 1: Phone */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E9DFCE] shadow-sm hover:shadow-md transition-all flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-[#D8B979] text-[#173A2B] flex items-center justify-center shrink-0 shadow-inner">
                <Phone className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider block">
                  Phone
                </span>
                <a
                  href={`tel:${RESORT_INFO.phone}`}
                  className="font-serif font-bold text-base sm:text-[17px] text-[#173A2B] hover:text-[#C5A46D] transition-colors truncate block"
                >
                  {RESORT_INFO.phone}
                </a>
                <span className="text-[11px] text-zinc-400 block mt-0.5">Call us anytime</span>
              </div>
            </div>

            {/* Card 2: Email */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E9DFCE] shadow-sm hover:shadow-md transition-all flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-[#D8B979] text-[#173A2B] flex items-center justify-center shrink-0 shadow-inner">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider block">
                  Email
                </span>
                <a
                  href={`mailto:${RESORT_INFO.email}`}
                  className="font-sans font-bold text-xs sm:text-[13px] text-[#173A2B] hover:text-[#C5A46D] transition-colors truncate block"
                >
                  {RESORT_INFO.email}
                </a>
                <span className="text-[11px] text-zinc-400 block mt-0.5">Drop us an email</span>
              </div>
            </div>

            {/* Card 3: Location */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E9DFCE] shadow-sm hover:shadow-md transition-all flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-[#D8B979] text-[#173A2B] flex items-center justify-center shrink-0 shadow-inner">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider block">
                  Location
                </span>
                <h4 className="font-serif font-bold text-base text-[#173A2B] leading-tight">
                  Gandhinagar, Gujarat
                </h4>
                <a
                  href="https://maps.google.com/?q=Swapna+Srushti+Resort+Gandhinagar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-semibold text-[#C5A46D] hover:underline inline-flex items-center space-x-1 mt-0.5"
                >
                  <span>View on Google Maps</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Card 4: Working Hours */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E9DFCE] shadow-sm hover:shadow-md transition-all flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-[#D8B979] text-[#173A2B] flex items-center justify-center shrink-0 shadow-inner">
                <Clock className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider block">
                  Working Hours
                </span>
                <h4 className="font-serif font-bold text-base text-[#173A2B] leading-tight">
                  Mon - Sun
                </h4>
                <span className="text-[11px] text-zinc-500 block mt-0.5">
                  9:00 AM - 8:00 PM IST
                </span>
              </div>
            </div>

          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* RIGHT COLUMN: White Booking Enquiry Card with Gold Accent & Form         */}
          {/* ----------------------------------------------------------------------- */}
          <div className="lg:col-span-4 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#E9DFCE] shadow-md flex flex-col justify-between">
            <div>
              {/* Header with mini gold underline accent matching reference */}
              <div>
                <h2 className="font-serif font-bold text-2xl sm:text-[26px] text-[#173A2B]">
                  Booking Enquiry
                </h2>
                <div className="w-12 h-0.5 bg-[#C5A46D] mt-2 mb-2" />
                <p className="text-zinc-500 text-xs sm:text-[13px] leading-relaxed">
                  Share your details and we&apos;ll get back to you soon.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-14 h-14 bg-[#173A2B]/10 text-[#173A2B] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 text-[#C5A46D]" />
                  </div>
                  <h4 className="font-serif font-bold text-xl text-[#173A2B]">Thank You!</h4>
                  <p className="text-xs text-zinc-600 max-w-xs mx-auto">
                    Your enquiry has been received. Our concierge desk will contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs text-[#C5A46D] font-bold underline pt-2 cursor-pointer"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
                  {/* Name Input */}
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 text-xs sm:text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-[#C5A46D] focus:ring-1 focus:ring-[#C5A46D] transition-all bg-[#FCFAF6]"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 text-xs sm:text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-[#C5A46D] focus:ring-1 focus:ring-[#C5A46D] transition-all bg-[#FCFAF6]"
                    />
                  </div>

                  {/* Phone Input */}
                  <PhoneInputWithCountry
                    required
                    value={formData.phone}
                    onChange={(fullVal) => setFormData({ ...formData, phone: fullVal })}
                    placeholder="Phone Number"
                    showIcon={true}
                    variant="outline"
                  />

                  {/* Subject Dropdown */}
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full pl-10 pr-9 py-3 rounded-xl border border-zinc-200 text-xs sm:text-sm text-zinc-800 focus:outline-none focus:border-[#C5A46D] focus:ring-1 focus:ring-[#C5A46D] transition-all bg-[#FCFAF6] appearance-none cursor-pointer"
                    >
                      {subjects.map((sub) => (
                        <option key={sub} value={sub}>
                          {sub}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <textarea
                      rows={3}
                      required
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-xs sm:text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-[#C5A46D] focus:ring-1 focus:ring-[#C5A46D] transition-all bg-[#FCFAF6] resize-none"
                    />
                  </div>

                  {/* Full-width Gold Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-[#C5A46D] hover:bg-[#b8955c] active:scale-[0.99] text-white font-sans font-bold text-sm tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-60"
                  >
                    <span>{isSubmitting ? "Sending..." : "Send Enquiry"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 3. BOTTOM SECTION: GOOGLE MAPS PANEL + "FIND US HERE" CARD                */}
        {/* ========================================================================= */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-7 items-stretch">
          
          {/* Google Maps Panel on Left (Spans 8 columns) */}
          <div className="lg:col-span-8 relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E9DFCE] shadow-sm min-h-[280px] sm:min-h-[320px] bg-[#E5E3DF]">
            <iframe
              title="Swapna Srushti Resort Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117284.99617462067!2d72.63223126744062!3d23.275338198751493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b0d32bb33f3%3A0xe54fb712a7a40b37!2sSwapna%20Srushti%20Resort!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "280px" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full object-cover"
            />
            {/* Soft Pin Badge Overlay */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-zinc-200 shadow-md flex items-center space-x-2 text-xs font-semibold text-[#173A2B] pointer-events-none">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
              <span>Swapna Srushti Resort, Gandhinagar</span>
            </div>
          </div>

          {/* "Find Us Here" Card on Right (Spans 4 columns) */}
          <div className="lg:col-span-4 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#E9DFCE] shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <h3 className="font-serif font-bold text-2xl text-[#173A2B]">
                Find Us Here
              </h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                {RESORT_INFO.name} <br />
                {RESORT_INFO.address}
              </p>
            </div>

            <div className="pt-6">
              <a
                href="https://maps.google.com/?q=Swapna+Srushti+Resort+Gandhinagar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full border border-[#C5A46D] text-[#C5A46D] hover:bg-[#C5A46D] hover:text-white font-sans font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
              >
                <span>Get Directions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
