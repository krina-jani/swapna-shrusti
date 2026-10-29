import React from "react";
import Link from "next/link";
import Navbar from "@/components/navigation/Navbar";
import ResortFooter from "@/components/layout/ResortFooter";
import FAQSection from "@/components/common/FAQSection";
import { RESTAURANT_FAQS } from "@/data/faqsData";
import { Check } from "lucide-react";

export const metadata = {
  title: "Restaurant & Dining | Swapna Srushti Resort",
  description: "Experience pure vegetarian dining at Swapna Srushti Resort Gandhinagar, featuring fresh Gujarati thalis, North Indian cuisine, and garden restaurant seating.",
};

export default function RestaurantPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3E9] text-[#202522]">
      <Navbar />

      <main className="flex-1">
        <section className="relative h-80 sm:h-96 bg-[#173A2B] text-white flex items-center justify-center text-center px-4">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80')`,
            }}
          />
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase">
              PURE VEGETARIAN DINING
            </span>
            <h1 className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl mt-2">
              Restaurant &amp; Cuisine
            </h1>
            <p className="text-sm sm:text-base text-zinc-300 mt-3 font-sans max-w-xl mx-auto">
              Enjoy freshly prepared vegetarian dishes, regional Gujarati specialties, and multi-cuisine flavors crafted for family dining.
            </p>
          </div>
        </section>

        {/* Restaurant Showcase Content */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white h-96">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
                alt="Swapna Srushti Resort dining room"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase">
                FRESH &amp; FLAVOURFUL
              </span>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#173A2B]">
                Regional Dining Experience
              </h2>
              <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-sans">
                Dining at Swapna Srushti Resort brings authentic flavors and welcoming service to every meal. Savor regional dishes, freshly prepared vegetarian meals, and refreshments tailored for relaxed meals with family and friends.
              </p>
              <div className="space-y-3 pt-2">
                {["100% Pure Vegetarian Kitchen", "Fresh Seasonal Ingredients Sourced from Regional Farms", "Air-conditioned Indoor Hall & Shaded Outdoor Garden Seating", "Custom Menus for Weddings, Conferences & Picnic Groups"].map((item, i) => (
                  <div key={i} className="flex items-center space-x-2 text-sm text-zinc-800">
                    <Check className="w-4 h-4 text-[#C5A46D]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-block px-7 py-3 rounded-full btn-gold text-xs uppercase tracking-wider font-bold shadow-lg"
                >
                  Table & Banquet Reservation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SEO-friendly Scoped FAQ Section */}
        <FAQSection
          title="DINING & MENUS"
          description="Common questions regarding pure vegetarian options, Jain food availability, private banquet reservations, and day dining hours."
          items={RESTAURANT_FAQS}
          ctaText="Reserve A Table"
          ctaLink="/contact"
        />
      </main>

      <ResortFooter />
    </div>
  );
}
