"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "@/components/navigation/Navbar";
import ResortFooter from "@/components/layout/ResortFooter";
import { ACCOMMODATIONS } from "@/data/resortData";
import FAQSection from "@/components/common/FAQSection";
import TextType from "@/components/ui/TextType";
import { ACCOMMODATION_FAQS } from "@/data/faqsData";
import {
  Users,
  Check,
  ArrowRight,
  ChevronDown,
  Compass,
  FileText,
  CalendarCheck,
  CheckCircle2,
  HelpCircle,
  PhoneCall,
  Sparkles,
} from "lucide-react";

export default function AccommodationPage() {

  const timelineRef = useRef<HTMLDivElement>(null);
  const [fillPercent, setFillPercent] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far through the timeline container the viewport center/bottom has passed
      const startTrigger = windowHeight * 0.75;
      const totalScrollable = rect.height;
      const currentScroll = startTrigger - rect.top;

      let progress = (currentScroll / totalScrollable) * 100;
      progress = Math.max(0, Math.min(100, progress));
      setFillPercent(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  const scrollToCards = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("available-accommodations");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };



  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3E9] text-[#202522]">
      <Navbar />

      <main className="flex-1">
        {/* ========================================================================= */}
        {/* SECTION 1: EXISTING HERO (Preserved unchanged)                            */}
        {/* ========================================================================= */}
        <section className="relative h-96 sm:h-[420px] pt-16 bg-[#173A2B] text-white flex items-center justify-center text-center px-4">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-45"
            style={{
              backgroundImage: "url('/images/Tropical%20Resort%20Cottages%20at%20Sunset.png')",
            }}
          />
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase">
              STAY AT SWAPNA SRUSHTI
            </span>
            <h1 className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl mt-2">
              Resort Accommodations
            </h1>
            <p className="text-sm sm:text-base text-zinc-300 mt-3 font-sans max-w-xl mx-auto">
              Explore the accommodation options at Swapna Srushti Resort, from comfortable rooms and suites to cottages and distinctive stays. Discover the available categories and find an option that suits your getaway.
            </p>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: EXISTING ACCOMMODATION CARDS (All 6 preserved unchanged)       */}
        {/* ========================================================================= */}
        <section id="available-accommodations" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ACCOMMODATIONS.map((room) => (
              <div
                key={room.id}
                className="bg-white rounded-xl overflow-hidden border border-zinc-200/80 shadow-lg group hover:border-[#C5A46D] transition-all flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={room.image}
                    alt={`${room.name} accommodation at Swapna Srushti Resort`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-black/75 px-3 py-1 rounded-full text-[11px] text-white flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#C5A46D]" />
                    <span>{room.capacity}</span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold tracking-widest text-[#C5A46D] uppercase">
                      {room.tagline}
                    </span>
                    <h3 className="font-serif font-bold text-2xl text-[#173A2B] mt-1">
                      {room.name}
                    </h3>
                    <p className="text-xs text-zinc-600 mt-2.5 leading-relaxed">
                      {room.description}
                    </p>

                    <div className="mt-4 pt-4 border-t border-zinc-100 flex flex-wrap gap-2">
                      {room.amenities.map((a, i) => (
                        <span key={i} className="text-[11px] bg-zinc-100 text-zinc-700 px-2 py-0.5 rounded flex items-center gap-1">
                          <Check className="w-3 h-3 text-[#C5A46D]" /> {a}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between">
                    <Link
                      href={`/accommodation/${room.slug}`}
                      className="text-xs font-bold uppercase tracking-wider text-[#173A2B] hover:text-[#C5A46D]"
                    >
                      View Details &rarr;
                    </Link>
                    <Link
                      href={`/booking?room=${room.slug}`}
                      className="px-4 py-2 rounded-full btn-gold text-xs uppercase tracking-wider font-semibold"
                    >
                      Book Stay
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: PLAN YOUR STAY (Editorial Image + 3 Clear Content Points)      */}
        {/* ========================================================================= */}
        <section className="py-20 bg-white border-y border-zinc-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Visual photograph */}
              <div className="lg:col-span-6">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3]">
                  <img
                    src="/images/resort-sunset-panoramic.png"
                    alt="Swapna Srushti Resort grounds and accommodation walkways"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A46D]">
                      RESORT ENVIRONMENT
                    </span>
                    <p className="text-xs sm:text-sm font-serif mt-1 text-zinc-100">
                      Surrounded by green landscape, open grounds, and peaceful walkways.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Editorial Copy & 3 Content Points */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase">
                    HELPFUL PLANNING
                  </span>
                  <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#173A2B] mt-1.5">
                    Plan a Stay That Suits You
                  </h2>
                  <p className="text-sm text-zinc-600 mt-3 font-sans leading-relaxed">
                    Choosing the right accommodation is an important part of planning your visit to Swapna Srushti Resort. Explore the available stay categories, review their features, and contact the resort to find an option that suits your plans.
                  </p>
                </div>

                {/* Vertical timeline line with circle nodes & scroll progress */}
                <div
                  ref={timelineRef}
                  className="relative pl-7 space-y-6 pt-1"
                >
                  {/* Background dotted line */}
                  <div className="absolute left-[7px] top-2 bottom-2 w-0 border-l-2 border-dotted border-[#C5A46D]/35 pointer-events-none" />

                  {/* Filled progress line that expands on scroll */}
                  <div
                    className="absolute left-[7px] top-2 w-0 border-l-2 border-solid border-[#C5A46D] pointer-events-none transition-all duration-150 ease-out"
                    style={{ height: `${fillPercent}%`, maxHeight: "calc(100% - 16px)" }}
                  />

                  {/* Step 1 */}
                  <div className="relative group">
                    <div
                      className={`absolute -left-7 top-1 w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 ring-4 ring-white ${
                        fillPercent >= 10
                          ? "border-[#C5A46D] bg-[#C5A46D] shadow-[0_0_8px_rgba(197,164,109,0.5)]"
                          : "border-[#C5A46D]/60 bg-[#FDFBF7]"
                      }`}
                    />
                    <div className="p-4 rounded-xl bg-[#F7F3E9] border border-zinc-200/80 flex items-start space-x-3.5 shadow-sm transition-all duration-300 hover:shadow-md">
                      <Compass className="w-5 h-5 text-[#C5A46D] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-serif font-bold text-base text-[#173A2B]">
                          Explore Your Options
                        </h4>
                        <p className="text-xs text-zinc-600 mt-1 font-sans leading-relaxed">
                          Discover the different accommodation categories available at the resort, from classic rooms to standalone cottages and themed villas.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative group">
                    <div
                      className={`absolute -left-7 top-1 w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 ring-4 ring-white ${
                        fillPercent >= 50
                          ? "border-[#C5A46D] bg-[#C5A46D] shadow-[0_0_8px_rgba(197,164,109,0.5)]"
                          : "border-[#C5A46D]/60 bg-[#FDFBF7]"
                      }`}
                    />
                    <div className="p-4 rounded-xl bg-[#F7F3E9] border border-zinc-200/80 flex items-start space-x-3.5 shadow-sm transition-all duration-300 hover:shadow-md">
                      <FileText className="w-5 h-5 text-[#C5A46D] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-serif font-bold text-base text-[#173A2B]">
                          Understand the Details
                        </h4>
                        <p className="text-xs text-zinc-600 mt-1 font-sans leading-relaxed">
                          Review confirmed room features, facilities, and other relevant information before enquiring to ensure the right fit.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="relative group">
                    <div
                      className={`absolute -left-7 top-1 w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 ring-4 ring-white ${
                        fillPercent >= 90
                          ? "border-[#C5A46D] bg-[#C5A46D] shadow-[0_0_8px_rgba(197,164,109,0.5)]"
                          : "border-[#C5A46D]/60 bg-[#FDFBF7]"
                      }`}
                    />
                    <div className="p-4 rounded-xl bg-[#F7F3E9] border border-zinc-200/80 flex items-start space-x-3.5 shadow-sm transition-all duration-300 hover:shadow-md">
                      <CalendarCheck className="w-5 h-5 text-[#C5A46D] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-serif font-bold text-base text-[#173A2B]">
                          Plan Ahead
                        </h4>
                        <p className="text-xs text-zinc-600 mt-1 font-sans leading-relaxed">
                          Contact the resort to ask about availability, rates, and booking arrangements for your intended dates of travel.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="#available-accommodations"
                    onClick={scrollToCards}
                    className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#173A2B] hover:text-[#C5A46D] transition-colors"
                  >
                    <span>Back to Accommodation Categories</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: KNOW BEFORE YOU ARRIVE (Visitor Guidance List)                 */}
        {/* ========================================================================= */}
        <section className="py-20 bg-[#202522] text-white border-y border-zinc-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase">
                GUEST GUIDANCE
              </span>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-white mt-1.5">
                Before You Plan Your Stay
              </h2>
              <p className="text-sm text-zinc-300 mt-2 font-sans">
                A brief checklist of practical recommendations to help ensure a smooth visit from reservation to arrival.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-xl bg-black/40 border border-zinc-800 space-y-3">
                <CheckCircle2 className="w-6 h-6 text-[#C5A46D]" />
                <h4 className="font-serif font-bold text-lg text-white">
                  Confirm Your Reservation
                </h4>
                <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                  Use the resort&apos;s existing booking or enquiry process to confirm your arrangements and receive official confirmation for your stay dates.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-black/40 border border-zinc-800 space-y-3">
                <CheckCircle2 className="w-6 h-6 text-[#C5A46D]" />
                <h4 className="font-serif font-bold text-lg text-white">
                  Check Accommodation Details
                </h4>
                <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                  Review the features and facilities of your preferred category before booking to ensure expectations align with the accommodations provided.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-black/40 border border-zinc-800 space-y-3">
                <CheckCircle2 className="w-6 h-6 text-[#C5A46D]" />
                <h4 className="font-serif font-bold text-lg text-white">
                  Ask About Resort Facilities
                </h4>
                <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                  Contact the resort to confirm the operating details, availability, and any applicable charges for attractions or facilities you wish to use.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-black/40 border border-zinc-800 space-y-3">
                <CheckCircle2 className="w-6 h-6 text-[#C5A46D]" />
                <h4 className="font-serif font-bold text-lg text-white">
                  Keep Your Booking Information
                </h4>
                <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                  Retain your booking confirmation and any instructions provided by the resort desk for easy reference upon your arrival at the property.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 7: FREQUENTLY ASKED QUESTIONS (8 Accessible Scoped Questions)     */}
        {/* ========================================================================= */}
        <FAQSection
          title="STAY & BOOKING"
          description="Clear details about accommodation categories, check-in policies, room amenities, and reservation guidance."
          items={ACCOMMODATION_FAQS}
          ctaText="Explore Stays"
          ctaLink="#available-accommodations"
        />

        {/* ========================================================================= */}
        {/* SECTION 8: FINAL CALL TO ACTION (Restrained Forest-Green + Gold)          */}
        {/* ========================================================================= */}
        <section className="py-20 bg-[#173A2B] text-white border-t border-zinc-800 text-center px-4">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="w-full flex justify-center items-center">
              <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase block text-center">
                START YOUR RESERVATION
              </span>
            </div>
            <div className="w-full flex justify-center items-center min-h-[4rem] sm:min-h-[5.5rem]">
              <TextType
                as="h2"
                text="Ready to Plan Your Stay?"
                className="font-serif font-bold text-3xl sm:text-5xl text-white text-center inline-block"
                typingSpeed={75}
                pauseDuration={2000}
                deletingSpeed={40}
                loop={true}
                showCursor={true}
                cursorStyle="underscore"
                cursorColor="#C5A46D"
                cursorGlide={true}
                startOnVisible={true}
              />
            </div>
            <p className="text-sm sm:text-base text-zinc-300 font-sans max-w-xl mx-auto leading-relaxed">
              Explore the accommodation options at Swapna Srushti Resort and contact the resort to learn more about availability, room features, and rates.
            </p>
            <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
              <a
                href="#available-accommodations"
                onClick={scrollToCards}
                className="px-8 py-3.5 rounded-full btn-gold text-xs uppercase tracking-wider font-bold shadow-xl hover:scale-105 transition-all"
              >
                Explore Accommodation
              </a>
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs uppercase tracking-wider font-semibold transition-all"
              >
                Contact the Resort
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* ========================================================================= */}
      {/* SECTION 9: EXISTING FOOTER (Preserved intact)                              */}
      {/* ========================================================================= */}
      <ResortFooter />
    </div>
  );
}
