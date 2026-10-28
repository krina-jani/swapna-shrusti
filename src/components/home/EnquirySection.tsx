"use client";

import React, { useState } from "react";
import Image from "next/image";
import { User, Mail, Phone, ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";

export default function EnquirySection() {
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
    }, 1200);
  };

  return (
    <section className="relative w-full overflow-visible z-20">
      {/* Upper Landscape Resort Image Banner */}
      <div className="relative w-full h-[360px] sm:h-[420px] lg:h-[460px] overflow-hidden">
        <Image
          src="/images/resort-sunset-panoramic.png"
          alt="Swapna Srushti Resort Scenic Landscape"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Subtle dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
      </div>

      {/* 
        Overlapping Form Card Container:
        The landscape banner touches the black footer directly with ZERO intermediate white/ivory space.
        The card uses a negative bottom margin (-mb-64) so exactly the top half sits over the landscape
        image, and the bottom half hangs over and overlaps the black footer.
      */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end">
          
          <div className="w-full lg:w-[460px] xl:w-[480px] -mt-64 sm:-mt-72 lg:-mt-80 -mb-52 sm:-mb-60 lg:-mb-72 z-30 relative bg-[#FBF8F1] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E9DFCE] overflow-hidden">
            
            {/* Subtle Tropical Palm Leaf Watermark in the Top Right Corner */}
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

            {/* Header: Label & Heading matching the exact 1st screenshot */}
            <div className="relative z-10 mb-5">
              <div className="flex items-center space-x-2.5 mb-1.5">
                <span className="text-[11px] font-sans font-extrabold tracking-[0.25em] text-[#C5A46D] uppercase">
                  SEND US A MESSAGE
                </span>
                <span className="w-10 h-[1.5px] bg-[#C5A46D]" />
              </div>

              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#173A2B] tracking-tight leading-none">
                Enquire Now
              </h2>

              <p className="text-xs text-zinc-600 mt-2.5 font-sans leading-relaxed">
                Share your details and our team will get back to you shortly.
              </p>
            </div>

            {isSubmitted ? (
              <div className="py-8 text-center space-y-3 animate-in fade-in">
                <CheckCircle2 className="w-12 h-12 text-[#173A2B] mx-auto" />
                <h3 className="font-serif font-bold text-2xl text-[#173A2B]">
                  Thank You!
                </h3>
                <p className="text-xs text-zinc-600 max-w-xs mx-auto">
                  Your enquiry has been received. Our concierge team will connect with you via email or WhatsApp promptly.
                </p>
                <div className="pt-3">
                  <button
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
                    className="text-xs font-bold text-[#C5A46D] hover:underline"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative z-10 space-y-3">
                
                {/* Full Name */}
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name *"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#F4EFE6]/70 border border-[#E3D8C6] text-xs sm:text-sm text-[#202522] placeholder:text-zinc-500 focus:outline-none focus:border-[#C5A46D] focus:bg-white transition-all"
                  />
                </div>

                {/* Email Address */}
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Your Email *"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#F4EFE6]/70 border border-[#E3D8C6] text-xs sm:text-sm text-[#202522] placeholder:text-zinc-500 focus:outline-none focus:border-[#C5A46D] focus:bg-white transition-all"
                  />
                </div>

                {/* Phone Number */}
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Your Phone Number"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#F4EFE6]/70 border border-[#E3D8C6] text-xs sm:text-sm text-[#202522] placeholder:text-zinc-500 focus:outline-none focus:border-[#C5A46D] focus:bg-white transition-all"
                  />
                </div>

                {/* Enquiry Type Dropdown */}
                <div className="relative">
                  <select
                    value={formData.enquiryType}
                    onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F4EFE6]/70 border border-[#E3D8C6] text-xs sm:text-sm text-[#202522] focus:outline-none focus:border-[#C5A46D] focus:bg-white appearance-none cursor-pointer transition-all"
                  >
                    <option value="Accommodation">Accommodation (Rooms & Cottages)</option>
                    <option value="Swimming Pool">Swimming Pool</option>
                    <option value="Adventure Park">Adventure Park</option>
                    <option value="One-day Picnic">One-day Picnic</option>
                    <option value="Wedding & Events">Wedding & Celebrations</option>
                    <option value="Corporate Conference">Corporate Conference</option>
                    <option value="Pre-wedding Photoshoot">Pre-wedding Photoshoot</option>
                    <option value="Restaurant">Restaurant & Dining</option>
                    <option value="General Enquiry">General Enquiry</option>
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
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F4EFE6]/70 border border-[#E3D8C6] text-xs sm:text-sm text-[#202522] placeholder:text-zinc-500 focus:outline-none focus:border-[#C5A46D] focus:bg-white transition-all resize-none"
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

              </form>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
