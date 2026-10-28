"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  User,
  MapPin, 
  Phone, 
  Mail, 
  ListFilter,
  MessageSquare,
  ChevronDown, 
  ArrowRight, 
  CheckCircle2 
} from "lucide-react";
import { RESORT_INFO } from "@/data/resortData";

// Clean inline SVGs matching exact icons in reference
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"/>
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

export default function ResortFooter() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enquiryType: "Accommodation",
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

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/#resort-intro" },
    { label: "Accommodation", href: "/accommodation" },
    { label: "Experiences", href: "/discover" },
    { label: "Events & Celebrations", href: "/events" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact Us", href: "/contact" },
  ];

  const experiences = [
    { label: "Swimming Pool", href: "/discover/swimming-pool" },
    { label: "Adventure Park", href: "/discover/adventure-park" },
    { label: "One-day Picnic", href: "/discover/one-day-picnic" },
    { label: "Weddings & Events", href: "/events/weddings" },
    { label: "Corporate Conference", href: "/events/corporate-conferences" },
    { label: "Pre-wedding Photoshoot", href: "/for-shoot/pre-wedding" },
    { label: "Restaurant & Dining", href: "/restaurant" },
    { label: "Theme Village", href: "/accommodation/theme-village" },
    { label: "All Resort Services", href: "/discover" },
  ];

  const dropdownOptions = [
    "Accommodation",
    "Swimming Pool",
    "Adventure Park",
    "One-day Picnic",
    "Weddings & Events",
    "Corporate Conference",
    "Pre-wedding Photoshoot",
    "Restaurant",
    "General Enquiry",
  ];

  return (
    <footer 
      className="relative w-full overflow-hidden bg-[#F7F3E9] text-[#202522] font-sans"
      style={{ fontFamily: 'var(--font-sans), "Plus Jakarta Sans", sans-serif' }}
    >
      {/* 
        ========================================================================
        SECTION A: Full-width Panoramic Alpine Lake Landscape Banner
        ========================================================================
      */}
      <div className="relative w-full h-[320px] sm:h-[380px] lg:h-[420px] overflow-hidden select-none">
        <Image
          src="/images/footer-banner-exact.jpg"
          alt="Swapna Srushti Resort Alpine Mountain Lake Landscape"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* 
        ========================================================================
        SECTION B: Warm Ivory Footer (#F7F3E9) with Absolute Floating Form
        ========================================================================
      */}
      <div className="relative w-full">
        {/* Constrained layout container matching exact reference aspect ratio */}
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-12 relative">
          
          {/*
            --------------------------------------------------------------------
            FLOATING "ENQUIRE NOW" FORM CARD (TALL FULL LENGTH)
            - Upper half extends over the panoramic landscape image.
            - Lower half extends into the warm ivory footer.
            - Exact styling from the reference:
              "SEND US A MESSAGE", "Enquire Now", Full Name, Email, Phone, Enquiry Type, Message.
            --------------------------------------------------------------------
          */}
          <div className="lg:absolute lg:right-6 xl:right-10 lg:-top-[260px] xl:-top-[280px] lg:w-[410px] xl:w-[430px] z-30 mb-12 lg:mb-0">
            <div className="relative bg-[#FBF8F1] rounded-3xl p-6 sm:p-7 shadow-2xl border border-[#E9DFCE] overflow-hidden text-[#173A2B]">
              
              {/* Botanical leaves watermark in top-right */}
              <svg
                className="absolute -top-4 -right-4 w-36 h-36 pointer-events-none opacity-20 select-none text-[#173A2B]"
                viewBox="0 0 200 200"
                fill="currentColor"
              >
                <path d="M 200 0 C 150 40 100 90 70 140 C 90 100 130 50 200 0 Z" />
                <path d="M 200 30 C 140 70 80 120 40 180 C 70 130 120 70 200 30 Z" />
                <path d="M 200 70 C 150 110 90 160 50 200 C 80 160 130 110 200 70 Z" />
                <path d="M 180 0 C 120 40 70 90 20 150 C 60 100 110 50 180 0 Z" />
              </svg>

              {/* Botanical leaf watermark in bottom-left */}
              <svg
                className="absolute -bottom-6 -left-6 w-28 h-28 pointer-events-none opacity-15 select-none text-[#173A2B]"
                viewBox="0 0 200 200"
                fill="currentColor"
              >
                <path d="M 0 200 C 40 150 90 100 140 70 C 100 90 50 130 0 200 Z" />
                <path d="M 30 200 C 70 140 120 80 180 40 C 130 70 70 120 30 200 Z" />
              </svg>

              <div className="relative z-10">
                {/* Header: Label & Heading matching exact screenshot */}
                <div className="mb-4">
                  <div className="flex items-center space-x-2.5 mb-1">
                    <span className="text-[10px] font-sans font-extrabold tracking-[0.25em] text-[#C5A46D] uppercase">
                      SEND US A MESSAGE
                    </span>
                    <span className="w-8 h-[1.5px] bg-[#C5A46D]" />
                  </div>

                  <h3 className="font-serif font-bold text-3xl text-[#173A2B] tracking-tight leading-tight">
                    Enquire Now
                  </h3>

                  <p className="text-[11px] text-zinc-600 mt-1 font-sans leading-relaxed">
                    Planning a stay, a celebration, or a special experience? Share your details and our team will get back to you shortly.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="py-8 text-center space-y-2.5 animate-in fade-in">
                    <CheckCircle2 className="w-10 h-10 text-[#173A2B] mx-auto" />
                    <h4 className="font-serif font-bold text-xl text-[#173A2B]">
                      Thank You!
                    </h4>
                    <p className="text-xs text-zinc-600 max-w-xs mx-auto leading-relaxed">
                      Your enquiry has been received. Our concierge team will connect with you shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          enquiryType: "Accommodation",
                          message: "",
                        });
                      }}
                      className="text-xs font-bold text-[#C5A46D] underline pt-2 cursor-pointer"
                    >
                      Send another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-2.5">
                    
                    {/* Full Name */}
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Full Name *"
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-[#F4EFE6]/70 border border-[#E3D8C6] text-xs text-[#202522] placeholder:text-zinc-500 focus:outline-none focus:border-[#C5A46D] focus:bg-white transition-all shadow-sm"
                      />
                    </div>

                    {/* Email Address */}
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Email Address *"
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-[#F4EFE6]/70 border border-[#E3D8C6] text-xs text-[#202522] placeholder:text-zinc-500 focus:outline-none focus:border-[#C5A46D] focus:bg-white transition-all shadow-sm"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Phone Number (Optional)"
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-[#F4EFE6]/70 border border-[#E3D8C6] text-xs text-[#202522] placeholder:text-zinc-500 focus:outline-none focus:border-[#C5A46D] focus:bg-white transition-all shadow-sm"
                      />
                    </div>

                    {/* Enquiry Type Dropdown */}
                    <div className="relative">
                      <ListFilter className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                      <select
                        value={formData.enquiryType}
                        onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                        className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-[#F4EFE6]/70 border border-[#E3D8C6] text-xs text-[#202522] focus:outline-none focus:border-[#C5A46D] focus:bg-white appearance-none cursor-pointer transition-all shadow-sm"
                      >
                        {dropdownOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" />
                    </div>

                    {/* Message */}
                    <div className="relative">
                      <MessageSquare className="absolute left-3.5 top-3 w-4 h-4 text-zinc-400 pointer-events-none" />
                      <textarea
                        required
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Your Message *"
                        className="w-full pl-10 pr-3.5 py-2 rounded-xl bg-[#F4EFE6]/70 border border-[#E3D8C6] text-xs text-[#202522] placeholder:text-zinc-500 focus:outline-none focus:border-[#C5A46D] focus:bg-white transition-all resize-none shadow-sm"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 rounded-full bg-[#C5A46D] hover:bg-[#b8955c] active:scale-[0.98] text-[#173A2B] font-sans font-bold text-xs tracking-wide shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-60"
                    >
                      <span>{isSubmitting ? "Sending..." : "Send Enquiry"}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* 
            --------------------------------------------------------------------
            FOOTER 3-COLUMN STRUCTURE (No text overlapping)
            - Column 1: Identity & contact (width ~340px)
            - Thin vertical divider line 1
            - Column 2: Quick Links (width ~170px)
            - Thin vertical divider line 2
            - Column 3: Experiences (width ~200px)
            - Remaining space (~380px) on the right reserved for the floating form
            --------------------------------------------------------------------
          */}
          <div className="pt-10 sm:pt-12 pb-12 sm:pb-14 flex flex-col lg:flex-row items-start lg:pr-[440px]">
            
            {/* COLUMN 1: Identity & Contact */}
            <div className="w-full lg:w-[300px] xl:w-[320px] shrink-0 space-y-3.5 pr-0 lg:pr-5">
              {/* Logo & Brand Name */}
              <div className="flex items-center space-x-3">
                <Image
                  src="/images/logo.png"
                  alt="Swapna Srushti Resort"
                  width={58}
                  height={58}
                  className="object-contain shrink-0"
                />
                <div>
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#173A2B] tracking-normal leading-tight">
                    Swapna Srushti Resort
                  </h4>
                  <span className="text-[9px] tracking-[0.25em] text-[#C5A46D] uppercase font-sans font-semibold block mt-0.5">
                    THE WORLD OF ETERNAL JOY
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-zinc-600 text-xs leading-relaxed max-w-xs pt-0.5">
                Gujarat&apos;s premier luxury nature resort featuring scenic cottages, themed village heritage, adventure sports, grand event lawns, and multi-cuisine vegetarian dining.
              </p>

              {/* Social Icons (Instagram, Facebook, YouTube) */}
              <div className="flex items-center space-x-3.5 pt-0.5 text-[#173A2B]">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:text-[#C5A46D] transition-colors"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="hover:text-[#C5A46D] transition-colors"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="hover:text-[#C5A46D] transition-colors"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
              </div>

              {/* Contact Details */}
              <div className="space-y-2 pt-2 text-xs text-zinc-700 font-sans">
                <div className="flex items-start space-x-2.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A46D] shrink-0 mt-0.5" />
                  <span className="leading-relaxed text-[11px] sm:text-xs">{RESORT_INFO.address}</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Phone className="w-3.5 h-3.5 text-[#C5A46D] shrink-0" />
                  <a href={`tel:${RESORT_INFO.phone}`} className="hover:text-[#173A2B] transition-colors font-medium text-[11px] sm:text-xs">
                    {RESORT_INFO.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Mail className="w-3.5 h-3.5 text-[#C5A46D] shrink-0" />
                  <a href={`mailto:${RESORT_INFO.email}`} className="hover:text-[#173A2B] transition-colors font-medium text-[11px] sm:text-xs">
                    {RESORT_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Vertical Divider 1 (matching reference line between Col 1 and Col 2) */}
            <div className="hidden lg:block w-[1px] bg-[#E3DAC6] self-stretch mx-5 xl:mx-7 shrink-0" />

            {/* COLUMN 2: QUICK LINKS */}
            <div className="w-full lg:w-[150px] xl:w-[165px] shrink-0 mt-8 lg:mt-0">
              <h5 className="font-serif font-bold text-xs uppercase tracking-[0.15em] text-[#173A2B] mb-4">
                QUICK LINKS
              </h5>
              <ul className="space-y-2 text-xs text-zinc-600 font-sans">
                {quickLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="hover:text-[#173A2B] transition-colors block py-0.5"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Vertical Divider 2 (matching reference line between Col 2 and Col 3) */}
            <div className="hidden lg:block w-[1px] bg-[#E3DAC6] self-stretch mx-5 xl:mx-7 shrink-0" />

            {/* COLUMN 3: EXPERIENCES */}
            <div className="w-full lg:w-[180px] xl:w-[200px] shrink-0 mt-8 lg:mt-0">
              <h5 className="font-serif font-bold text-xs uppercase tracking-[0.15em] text-[#173A2B] mb-4">
                EXPERIENCES
              </h5>
              <ul className="space-y-2 text-xs text-zinc-600 font-sans">
                {experiences.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="hover:text-[#173A2B] transition-colors block py-0.5 whitespace-nowrap"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* 
            --------------------------------------------------------------------
            SECTION C: BOTTOM LEGAL BAR
            - Thin champagne-gold divider
            - Copyright on left
            - Privacy Policy | Terms & Conditions | Cancellation Policy on right
            --------------------------------------------------------------------
          */}
          <div className="pt-5 pb-8 border-t border-[#E3DAC6] flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-600 gap-3 font-sans">
            <p className="text-[11px] sm:text-xs">© 2026 Swapna Srushti Resort. All rights reserved.</p>

            <div className="flex items-center space-x-3 sm:space-x-4 text-[11px] sm:text-xs text-zinc-600">
              <Link href="/privacy-policy" className="hover:text-[#173A2B] transition-colors">
                Privacy Policy
              </Link>
              <span className="text-[#C5A46D]">|</span>
              <Link href="/terms-and-conditions" className="hover:text-[#173A2B] transition-colors">
                Terms & Conditions
              </Link>
              <span className="text-[#C5A46D]">|</span>
              <Link href="/cancellation-policy" className="hover:text-[#173A2B] transition-colors">
                Cancellation Policy
              </Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}