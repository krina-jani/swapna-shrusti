import React from "react";
import Navbar from "@/components/navigation/Navbar";
import ResortFooter from "@/components/layout/ResortFooter";
import LuxuryContactSection from "@/components/contact/LuxuryContactSection";
import FAQSection from "@/components/common/FAQSection";
import { RESORT_INFO } from "@/data/resortData";
import { CONTACT_FAQS } from "@/data/faqsData";
import { MapPin, Phone, Mail } from "lucide-react";

export const metadata = {
  title: "Contact & Location | Swapna Srushti Resort Gandhinagar",
  description: "Get in touch with Swapna Srushti Resort. Find resort directions along the Gandhinagar-Mahudi Highway, customer service contact numbers, and enquiry forms.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3E9] text-[#202522]">
      {/* Universal Floating Glass Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* Header Hero */}
        <section className="relative h-80 sm:h-96 bg-[#173A2B] text-white flex items-center justify-center text-center px-4">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80')`,
            }}
          />
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase">
              REACH OUR TEAM
            </span>
            <h1 className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl mt-2">
              Contact Swapna Srushti
            </h1>
            <p className="text-sm sm:text-base text-zinc-300 mt-3 font-sans max-w-xl mx-auto">
              Have questions about booking a stay, hosting an event, or planning a day visit? Reach out through the details below or send us a direct message.
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

        {/* SEO-friendly Scoped FAQ Section */}
        <FAQSection
          title="VISITOR & DESK FAQS"
          description="Helpful details regarding resort location, route directions from Ahmedabad and Gandhinagar, helpdesk timings, and on-site parking."
          items={CONTACT_FAQS}
          ctaText="Call Concierge"
          ctaLink="tel:+919909922000"
        />
      </main>

      {/* Matching Master Reference Footer */}
      <ResortFooter />
    </div>
  );
}
