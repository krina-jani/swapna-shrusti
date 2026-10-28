import React from "react";
import Navbar from "@/components/navigation/Navbar";
import ResortFooter from "@/components/layout/ResortFooter";
import LuxuryContactSection from "@/components/contact/LuxuryContactSection";
import { Phone, Mail, MapPin } from "lucide-react";
import { RESORT_INFO } from "@/data/resortData";

export const metadata = {
  title: "Contact & Location | Swapna Srushti Resort",
  description: "Contact Swapna Srushti Resort for accommodation reservations, event enquiries, day picnics, and visitor information on Gandhinagar-Mahudi Highway, Gujarat.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3E9] text-[#202522]">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-72 sm:h-80 bg-[#173A2B] text-white flex items-center justify-center text-center px-4">
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase">
              GET IN TOUCH
            </span>
            <h1 className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl mt-2">
              Contact Swapna Srushti Resort
            </h1>
            <p className="text-sm sm:text-base text-zinc-300 mt-3 font-sans max-w-xl mx-auto">
              Reach out to Swapna Srushti Resort for accommodation bookings, event venue enquiries, picnic packages, or general visitor information.
            </p>
          </div>
        </section>

        {/* Dedicated Luxury Contact Form Section with Resort Visual Showcase */}
        <LuxuryContactSection />

        {/* Concierge Desk Information Cards */}
        <section className="pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#E9DFCE] shadow-sm flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-[#C5A46D] shrink-0 mt-1" />
              <div>
                <h4 className="font-serif font-bold text-base text-[#173A2B]">Resort Address</h4>
                <p className="text-xs text-zinc-600 mt-1 leading-relaxed">{RESORT_INFO.address}</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E9DFCE] shadow-sm flex items-start space-x-4">
              <Phone className="w-6 h-6 text-[#C5A46D] shrink-0 mt-1" />
              <div>
                <h4 className="font-serif font-bold text-base text-[#173A2B]">Call & WhatsApp</h4>
                <p className="text-xs text-zinc-600 mt-1">{RESORT_INFO.phone}</p>
                <span className="text-[11px] text-zinc-400">Lines open 9:00 AM – 9:00 PM IST</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E9DFCE] shadow-sm flex items-start space-x-4">
              <Mail className="w-6 h-6 text-[#C5A46D] shrink-0 mt-1" />
              <div>
                <h4 className="font-serif font-bold text-base text-[#173A2B]">Email Inquiries</h4>
                <p className="text-xs text-zinc-600 mt-1">{RESORT_INFO.email}</p>
                <span className="text-[11px] text-zinc-400">Response within 24 business hours</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Matching Master Reference Footer */}
      <ResortFooter />
    </div>
  );
}
