import React from "react";
import Link from "next/link";
import Navbar from "@/components/navigation/Navbar";
import ResortFooter from "@/components/layout/ResortFooter";
import FAQSection from "@/components/common/FAQSection";
import { SHOOT_CATEGORIES } from "@/data/resortData";
import { FOR_SHOOT_FAQS } from "@/data/faqsData";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Photography & Film Shoot Locations | Swapna Srushti Resort",
  description: "Discover photoshoot locations, pre-wedding backdrops, and video production venues at Swapna Srushti Resort along the Gandhinagar-Mahudi Highway.",
};

export default function ForShootPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3E9] text-[#202522]">
      <Navbar />

      <main className="flex-1">
        <section className="relative h-80 sm:h-96 bg-[#173A2B] text-white flex items-center justify-center text-center px-4">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: `url('${SHOOT_CATEGORIES[0].image}')`,
            }}
          />
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase">
              CINEMATIC BACKDROPS
            </span>
            <h1 className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl mt-2">
              Photoshoot &amp; Media Locations
            </h1>
            <p className="text-sm sm:text-base text-zinc-300 mt-3 font-sans max-w-xl mx-auto">
              Explore picturesque sets and outdoor settings at Swapna Srushti Resort, offering distinct backgrounds for pre-wedding photography, family shoots, and media projects.
            </p>
          </div>
        </section>

        {/* Shoot Locations Grid */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SHOOT_CATEGORIES.map((s) => (
              <div 
                key={s.id}
                className="bg-white rounded-xl overflow-hidden border border-zinc-200 shadow-md group hover:border-[#C5A46D] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-60 overflow-hidden">
                    <img 
                      src={s.image} 
                      alt={`${s.name} photoshoot set at Swapna Srushti Resort`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A46D]">
                      {s.tagline}
                    </span>
                    <h3 className="font-serif font-bold text-2xl text-[#173A2B] mt-1">
                      {s.name}
                    </h3>
                    <p className="text-xs text-zinc-600 mt-2 leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between border-t border-zinc-100">
                  <Link
                    href={`/for-shoot/${s.slug}`}
                    className="inline-flex items-center space-x-1.5 text-xs uppercase font-bold text-[#173A2B] hover:text-[#C5A46D] transition-colors"
                  >
                    <span>View Location Sets</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/contact"
                    className="px-3.5 py-1.5 rounded-full btn-gold text-[11px] uppercase tracking-wider font-semibold"
                  >
                    Permit Enquiry
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SEO-friendly Scoped FAQ Section */}
        <FAQSection
          title="SHOOT & PERMITS"
          description="Guidelines regarding photography passes, changing room facilities, commercial equipment rules, and timing slots."
          items={FOR_SHOOT_FAQS}
          ctaText="Enquire For Shoots"
          ctaLink="/contact"
        />
      </main>

      <ResortFooter />
    </div>
  );
}
