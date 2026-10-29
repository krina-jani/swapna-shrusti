import React from "react";
import Link from "next/link";
import Navbar from "@/components/navigation/Navbar";
import ResortFooter from "@/components/layout/ResortFooter";
import FAQSection from "@/components/common/FAQSection";
import { EXPERIENCES } from "@/data/resortData";
import { DISCOVER_FAQS } from "@/data/faqsData";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Resort Attractions & Experiences | Swapna Srushti Resort",
  description: "Discover attractions, recreation, and family outing experiences at Swapna Srushti Resort, including our water park, adventure activities, swimming pool, and gardens.",
};

export default function DiscoverPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3E9] text-[#202522]">
      <Navbar />

      <main className="flex-1">
        <section className="relative h-80 sm:h-96 bg-[#202522] text-white flex items-center justify-center text-center px-4">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: `url('${EXPERIENCES[1].image}')`,
            }}
          />
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase">
              RECREATION & ACTIVITIES
            </span>
            <h1 className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl mt-2">
              Discover Swapna Srushti
            </h1>
            <p className="text-sm sm:text-base text-zinc-300 mt-3 font-sans max-w-xl mx-auto">
              From high-spirited water park rides to peaceful nature walks and adventure activities, find the experiences that make your visit enjoyable.
            </p>
          </div>
        </section>

        {/* Attractions Grid */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {EXPERIENCES.map((exp) => (
              <div 
                key={exp.id}
                className="bg-white rounded-xl overflow-hidden border border-zinc-200 shadow-md group hover:border-[#C5A46D] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={exp.image} 
                      alt={`${exp.name} attraction at Swapna Srushti Resort`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A46D]">
                      {exp.tagline}
                    </span>
                    <h3 className="font-serif font-bold text-2xl text-[#173A2B] mt-1">
                      {exp.name}
                    </h3>
                    <p className="text-xs text-zinc-600 mt-2 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/discover/${exp.slug}`}
                    className="inline-flex items-center space-x-1.5 text-xs uppercase font-bold text-[#173A2B] hover:text-[#C5A46D] transition-colors"
                  >
                    <span>View Activity Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SEO-friendly Scoped FAQ Section */}
        <FAQSection
          title="ATTRACTIONS & ENTRY"
          description="Essential information regarding day outing packages, water park access, swimming pool guidelines, and visitor safety."
          items={DISCOVER_FAQS}
          ctaText="Plan Your Visit"
          ctaLink="/contact"
        />
      </main>

      <ResortFooter />
    </div>
  );
}
