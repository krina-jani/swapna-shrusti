import React from "react";
import Navbar from "@/components/navigation/Navbar";
import ResortFooter from "@/components/layout/ResortFooter";
import LuxuryContactSection from "@/components/contact/LuxuryContactSection";
import FAQSection from "@/components/common/FAQSection";
import { CONTACT_FAQS } from "@/data/faqsData";

export const metadata = {
  title: "Contact Us | Swapna Srushti Resort Gandhinagar, Gujarat",
  description: "We'd love to hear from you. Contact Swapna Srushti Resort for room reservations, destination weddings, day picnics, and photoshoot enquiries on Gandhinagar-Mahudi Highway, Gujarat.",
  keywords: [
    "Swapna Srushti Resort Contact",
    "Swapna Srushti phone number",
    "Swapna Srushti address",
    "Resort in Gandhinagar contact",
    "Swapna Srushti booking enquiry",
  ],
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3E9] text-[#202522]">
      {/* Universal Floating Glass Navbar */}
      <Navbar />

      <main className="flex-1 w-full">
        {/* Exact Redesigned Luxury Contact Section matching reference */}
        <LuxuryContactSection />

        {/* SEO-friendly Visitor & Desk FAQs Section */}
        <div className="bg-[#F7F3E9] border-t border-[#E9DFCE]/60">
          <FAQSection
            title="VISITOR & DESK FAQS"
            description="Helpful details regarding resort location, route directions from Ahmedabad and Gandhinagar, helpdesk timings, and on-site parking."
            items={CONTACT_FAQS}
            ctaText="Call Concierge"
            ctaLink="tel:+919909922000"
          />
        </div>
      </main>

      {/* Resort Footer */}
      <ResortFooter />
    </div>
  );
}
