"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { User, Mail, Phone, ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import gsap from "gsap";

export default function LuxuryContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enquiryType: "Accommodation",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (cardRef.current) {
        gsap.from(cardRef.current, {
          opacity: 0,
          y: 30,
          duration: 0.9,
          ease: "power2.out",
        });
      }
      if (imageRef.current) {
        gsap.from(imageRef.current, {
          opacity: 0,
          x: -25,
          duration: 1,
          ease: "power2.out",
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const enquiryTypes = [
    "Accommodation",
    "Swimming Pool",
    "Adventure Park",
    "One-day Picnic",
    "Wedding & Events",
    "Pre-wedding Photoshoot",
    "Restaurant",
    "General Enquiry",
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-[#F7F3E9] text-[#202522] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Resort Visual Showcase & Quick Narrative */}
          <div ref={imageRef} className="lg:col-span-6 space-y-6">
            <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-[#E9DFCE]">
              <Image
                src="/images/resort-sunset-panoramic.png"
                alt="Swapna Srushti Resort Nature & Atmosphere"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="text-[10px] tracking-[0.25em] text-[#C5A46D] uppercase font-sans font-bold">
                  EXPERIENCE TRANQUILITY
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-snug">
                  Your Sanctuary of Joy & Celebrations
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 font-sans line-clamp-2">
                  Plan unforgettable moments with family, friends, and colleagues surrounded by lush green landscapes in Gujarat.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Exactly styled "Enquire Now" Contact Form Card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div
              ref={cardRef}
              className="relative w-full max-w-[480px] bg-[#FBF8F1] rounded-3xl p-7 sm:p-9 shadow-2xl border border-[#E9DFCE] overflow-hidden"
            >
              
              {/* Botanical Palm Leaf Watermark Artwork (Top Right) */}
              <svg
                className="absolute -top-6 -right-6 w-36 h-36 pointer-events-none opacity-20 select-none text-[#173A2B]"
                viewBox="0 0 200 200"
                fill="currentColor"
              >
                <path d="M 200 0 C 150 40 100 90 70 140 C 90 100 130 50 200 0 Z" />
                <path d="M 200 30 C 140 70 80 120 40 180 C 70 130 120 70 200 30 Z" />
                <path d="M 200 70 C 150 110 90 160 50 200 C 80 160 130 110 200 70 Z" />
                <path d="M 180 0 C 120 40 70 90 20 150 C 60 100 110 50 180 0 Z" />
              </svg>

              {/* Form Header */}
              <div className="relative z-10 mb-6">
                <div className="flex items-center space-x-2.5 mb-1.5">
                  <span className="text-[11px] font-sans font-extrabold tracking-[0.25em] text-[#C5A46D] uppercase">
                    SEND US A MESSAGE
                  </span>
                  <span className="w-10 h-[1.5px] bg-[#C5A46D]" />
                </div>

                <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#173A2B] tracking-tight leading-tight">
                  Enquire Now
                </h2>

                <p className="text-xs text-zinc-600 mt-2 font-sans leading-relaxed">
                  Share your details and our team will get back to you shortly.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-10 text-center space-y-3 animate-in fade-in">
                  <CheckCircle2 className="w-12 h-12 text-[#173A2B] mx-auto" />
                  <h3 className="font-serif font-bold text-2xl text-[#173A2B]">
                    Thank You!
                  </h3>
                  <p className="text-xs text-zinc-600 max-w-xs mx-auto leading-relaxed">
                    Your enquiry has been received. Our concierge team will connect with you via email or WhatsApp promptly.
                  </p>
                  <div className="pt-4">
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
                      className="text-xs font-bold text-[#C5A46D] hover:underline cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative z-10 space-y-3.5">
                  
                  {/* Full Name */}
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Name *"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#F4EFE6]/70 border border-[#E3D8C6] text-xs sm:text-sm text-[#202522] placeholder:text-zinc-500 focus:outline-none focus:border-[#C5A46D] focus:bg-white transition-all shadow-sm"
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
                      placeholder="Your Email *"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#F4EFE6]/70 border border-[#E3D8C6] text-xs sm:text-sm text-[#202522] placeholder:text-zinc-500 focus:outline-none focus:border-[#C5A46D] focus:bg-white transition-all shadow-sm"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Your Phone Number"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#F4EFE6]/70 border border-[#E3D8C6] text-xs sm:text-sm text-[#202522] placeholder:text-zinc-500 focus:outline-none focus:border-[#C5A46D] focus:bg-white transition-all shadow-sm"
                    />
                  </div>

                  {/* Enquiry Type Dropdown */}
                  <div className="relative">
                    <select
                      value={formData.enquiryType}
                      onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#F4EFE6]/70 border border-[#E3D8C6] text-xs sm:text-sm text-[#202522] focus:outline-none focus:border-[#C5A46D] focus:bg-white appearance-none cursor-pointer transition-all shadow-sm"
                    >
                      {enquiryTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" />
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Your Message *"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#F4EFE6]/70 border border-[#E3D8C6] text-xs sm:text-sm text-[#202522] placeholder:text-zinc-500 focus:outline-none focus:border-[#C5A46D] focus:bg-white transition-all resize-none shadow-sm"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-full bg-[#C5A46D] hover:bg-[#b8955c] active:scale-[0.98] text-[#173A2B] font-sans font-bold text-sm tracking-wide shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-60"
                  >
                    <span>{isSubmitting ? "Sending..." : "Send Enquiry"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-zinc-500 text-center pt-1 font-sans">
                    Direct concierge inquiries • Zero booking fee
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
