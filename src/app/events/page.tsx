import React from "react";
import Link from "next/link";
import Navbar from "@/components/navigation/Navbar";
import ResortFooter from "@/components/layout/ResortFooter";
import FAQSection from "@/components/common/FAQSection";
import { EVENTS } from "@/data/resortData";
import { EVENTS_FAQS } from "@/data/faqsData";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Events, Weddings & Venues | Swapna Srushti Resort",
  description: "Explore event venues and wedding lawns at Swapna Srushti Resort Gandhinagar. Discover spaces suited for weddings, corporate retreats, and family occasions.",
};

export default function EventsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3E9] text-[#202522]">
      <Navbar />

      <main className="flex-1">
        <section className="relative h-80 sm:h-96 bg-[#173A2B] text-white flex items-center justify-center text-center px-4">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: `url('${EVENTS[0].image}')`,
            }}
          />
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase">
              CELEBRATIONS & GATHERINGS
            </span>
            <h1 className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl mt-2">
              Events &amp; Celebrations
            </h1>
            <p className="text-sm sm:text-base text-zinc-300 mt-3 font-sans max-w-xl mx-auto">
              Find event spaces and banquet options at Swapna Srushti Resort suited for destination weddings, family celebrations, and corporate get-togethers.
            </p>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EVENTS.map((event) => (
              <div 
                key={event.id}
                className="bg-white rounded-xl overflow-hidden border border-zinc-200 shadow-md group hover:border-[#C5A46D] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-60 overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={`${event.name} venue at Swapna Srushti Resort`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A46D]">
                      {event.tagline}
                    </span>
                    <h3 className="font-serif font-bold text-2xl text-[#173A2B] mt-1">
                      {event.name}
                    </h3>
                    <p className="text-xs text-zinc-600 mt-2 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between border-t border-zinc-100">
                  <Link
                    href={`/events/${event.slug}`}
                    className="inline-flex items-center space-x-1.5 text-xs uppercase font-bold text-[#173A2B] hover:text-[#C5A46D] transition-colors"
                  >
                    <span>View Event Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/contact"
                    className="px-3.5 py-1.5 rounded-full btn-gold text-[11px] uppercase tracking-wider font-semibold"
                  >
                    Enquire
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SEO-friendly Scoped FAQ Section */}
        <FAQSection
          title="EVENTS & WEDDINGS"
          description="Everything you need to know about lawn capacities, catering arrangements, decoration permissions, and booking advance timelines."
          items={EVENTS_FAQS}
          ctaText="Enquire For Events"
          ctaLink="/contact"
        />
      </main>

      <ResortFooter />
    </div>
  );
}
