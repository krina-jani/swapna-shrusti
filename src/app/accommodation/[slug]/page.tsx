import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/navigation/Navbar";
import ResortFooter from "@/components/layout/ResortFooter";
import { ACCOMMODATIONS, RoomItem } from "@/data/resortData";
import { RESORT_PACKAGES } from "@/data/packagesData";
import {
  Check,
  ArrowLeft,
  Calendar,
  Sparkles,
  Phone,
  Mail,
  ChevronRight,
  Home,
  CheckCircle2,
  Tag,
  Clock,
  AlertTriangle,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ACCOMMODATIONS.map((room) => ({
    slug: room.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const room = ACCOMMODATIONS.find((r) => r.slug === slug);

  if (!room) {
    return {
      title: "Accommodation Not Found | Swapna Srushti Resort",
    };
  }

  return {
    title: `${room.name} | Swapna Srushti Resort Accommodation`,
    description: `Explore ${room.name} at Swapna Srushti Resort Gandhinagar. ${room.tagline}. ${room.description}`,
    keywords: [
      `Swapna Srushti Resort ${room.name}`,
      "Swapna Srushti Resort accommodation",
      "Swapna Srushti Resort Gandhinagar stay",
      room.name,
    ],
  };
}

export default async function RoomDetailPage({ params }: Props) {
  const { slug } = await params;
  const room = ACCOMMODATIONS.find((r) => r.slug === slug);

  if (!room) {
    notFound();
  }

  // Lookup package pricing for confirmed categories
  const ratesMap: Record<string, { standard: string; diwali: string }> = {
    "superior-rooms": { standard: "₹5,500", diwali: "₹6,500" },
    "premium-rooms": { standard: "₹6,000", diwali: "₹7,000" },
    "cottages": { standard: "₹6,500", diwali: "₹7,500" },
    "executive-suites": { standard: "₹7,500", diwali: "₹8,500" },
  };

  const packageRates = ratesMap[slug];

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3E9] text-[#202522]">
      <Navbar />

      <main className="flex-1">
        {/* ========================================================================= */}
        {/* SECTION 1: ACCOMMODATION HERO                                            */}
        {/* ========================================================================= */}
        <section className="relative bg-[#173A2B] text-white pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden border-b border-zinc-800">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30 scale-105 transition-transform duration-1000"
            style={{ backgroundImage: `url('${room.image}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#173A2B] via-[#173A2B]/80 to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb Navigation */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center space-x-2 text-xs uppercase tracking-wider text-zinc-300 mb-6"
            >
              <Link href="/" className="hover:text-[#C5A46D] transition-colors flex items-center space-x-1">
                <Home className="w-3.5 h-3.5" />
                <span>Home</span>
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-zinc-500" />
              <Link href="/accommodation" className="hover:text-[#C5A46D] transition-colors">
                Accommodation
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-zinc-500" />
              <span className="text-[#C5A46D] font-bold">{room.name}</span>
            </nav>

            <div className="max-w-3xl">
              <span className="inline-block text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase mb-2">
                {room.tagline}
              </span>
              <h1 className="font-serif font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight">
                {room.name}
              </h1>
              <p className="mt-4 text-sm sm:text-base text-zinc-200 leading-relaxed font-sans max-w-2xl">
                {room.description}
              </p>
            </div>
          </div>
        </section>

        {/* Content Wrapper */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left 8 Cols: Main editorial content */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* SECTION 2: ABOUT THIS ACCOMMODATION */}
              <section className="bg-white p-8 sm:p-10 rounded-2xl border border-zinc-200/90 shadow-sm space-y-5">
                <div className="flex items-center space-x-3">
                  <span className="w-8 h-[2px] bg-[#C5A46D]" />
                  <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase">
                    OVERVIEW
                  </span>
                </div>
                <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#173A2B]">
                  About This Accommodation
                </h2>
                <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-sans">
                  {room.description}
                </p>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-sans">
                  Designed to harmonise with the resort&apos;s natural landscape along the Gandhinagar-Mahudi Highway, this stay provides a peaceful environment where you can unwind. Review the confirmed amenities and features below prior to planning your visit.
                </p>
              </section>

              {/* SECTION 3: ROOM AMENITIES */}
              <section className="bg-white p-8 sm:p-10 rounded-2xl border border-zinc-200/90 shadow-sm space-y-6">
                <div className="flex items-center space-x-3">
                  <span className="w-8 h-[2px] bg-[#C5A46D]" />
                  <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase">
                    CONFIRMED FEATURES
                  </span>
                </div>
                <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#173A2B]">
                  Room Amenities
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {room.amenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="p-3.5 rounded-xl bg-[#F7F3E9] border border-zinc-200/80 flex items-center space-x-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#173A2B] text-[#C5A46D] flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-medium text-xs sm:text-sm text-[#173A2B]">
                        {amenity}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* SECTION 4: PHOTO GALLERY */}
              <section className="bg-white p-8 sm:p-10 rounded-2xl border border-zinc-200/90 shadow-sm space-y-6">
                <div className="flex items-center space-x-3">
                  <span className="w-8 h-[2px] bg-[#C5A46D]" />
                  <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase">
                    PHOTOGRAPHY
                  </span>
                </div>
                <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#173A2B]">
                  Room Gallery
                </h2>
                <div className="rounded-xl overflow-hidden border border-zinc-200/80 shadow-md">
                  <img
                    src={room.image}
                    alt={`${room.name} photograph at Swapna Srushti Resort`}
                    className="w-full h-[320px] sm:h-[460px] object-cover hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
              </section>

              {/* COMPACT PACKAGE INFORMATION SECTION */}
              <section className="bg-white p-8 sm:p-10 rounded-2xl border border-zinc-200/90 shadow-sm space-y-6">
                <div className="flex items-center space-x-3">
                  <span className="w-8 h-[2px] bg-[#C5A46D]" />
                  <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase">
                    AVAILABLE PACKAGES &amp; TARIFFS
                  </span>
                </div>
                <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#173A2B]">
                  Stay Package Rates
                </h2>

                {packageRates ? (
                  <div className="space-y-4">
                    <div className="p-5 rounded-xl bg-[#F7F3E9] border border-zinc-200 space-y-3 font-sans">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-300/60 pb-3">
                        <div>
                          <span className="font-serif font-bold text-lg text-[#173A2B]">
                            Standard Resort Stay Package
                          </span>
                          <span className="block text-xs text-zinc-600">
                            1 Night / 2 Days (Check-in 12:00 PM, Check-out 10:00 AM)
                          </span>
                        </div>
                        <div className="text-left sm:text-right">
                          <span className="font-serif font-bold text-2xl text-[#173A2B]">
                            {packageRates.standard}
                          </span>
                          <span className="block text-[11px] text-zinc-500 font-normal">
                            per couple / night (GST extra)
                          </span>
                        </div>
                      </div>

                      <div className="text-xs text-zinc-700 space-y-1">
                        <p><strong>Package Inclusions:</strong> Breakfast, Punjabi lunch, Dinner, indoor games, outdoor games, swimming pool, gym, Theme Village, garden area, and 50% discount on Adventure Park entry.</p>
                        <p className="text-zinc-500">Extra person: ₹2,000 per person + GST.</p>
                      </div>
                    </div>

                    {/* Separately Identified Diwali Offer */}
                    <div className="p-5 rounded-xl bg-amber-50/70 border border-amber-200/80 space-y-3 font-sans">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-200 pb-3">
                        <div className="flex items-center space-x-2">
                          <Tag className="w-4 h-4 text-amber-700 shrink-0" />
                          <div>
                            <span className="font-serif font-bold text-lg text-[#173A2B]">
                              Diwali Festive Stay Offer
                            </span>
                            <span className="block text-[11px] text-amber-900">
                              Seasonal Festive Package (1 Night)
                            </span>
                          </div>
                        </div>
                        <div className="text-left sm:text-right">
                          <span className="font-serif font-bold text-2xl text-[#173A2B]">
                            {packageRates.diwali}
                          </span>
                          <span className="block text-[11px] text-zinc-600">
                            per couple / night (GST extra)
                          </span>
                        </div>
                      </div>

                      <div className="text-xs text-amber-950 space-y-1">
                        <p><strong>Inclusions:</strong> Breakfast, Punjabi lunch, Dinner, full games, pool, gym, Theme Village, and 50% off Adventure Park.</p>
                        <p className="text-amber-800 italic">Note: Festive dates, availability, and applicable holiday terms must be confirmed directly with the resort prior to booking.</p>
                      </div>
                    </div>

                    <div className="pt-1">
                      <Link
                        href="/packages"
                        className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-[#173A2B] hover:text-[#C5A46D] transition-colors"
                      >
                        <span>View All Resort Packages &amp; Offers</span>
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="p-5 rounded-xl bg-[#F7F3E9] border border-zinc-200 space-y-3 font-sans text-xs sm:text-sm text-zinc-700">
                    <p>
                      Special package pricing and customized group rates for {room.name} are available upon request through our reservations desk.
                    </p>
                    <Link
                      href="/packages"
                      className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-[#173A2B] hover:text-[#C5A46D] transition-colors"
                    >
                      <span>Explore Published Stay &amp; Day Packages</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                )}
              </section>

              {/* SECTION 6: RETURN NAVIGATION */}
              <div className="pt-2">
                <Link
                  href="/accommodation"
                  className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#173A2B] hover:text-[#C5A46D] transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Explore All Accommodation</span>
                </Link>
              </div>

            </div>

            {/* Right 4 Cols: SECTION 5: BOOKING ENQUIRY SIDEBAR */}
            <aside className="lg:col-span-4 sticky top-28 space-y-6">
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-zinc-200/90 shadow-xl space-y-6">
                <div>
                  <span className="text-[11px] uppercase font-bold tracking-widest text-[#C5A46D]">
                    RESERVATION ENQUIRY
                  </span>
                  <h3 className="font-serif font-bold text-2xl text-[#173A2B] mt-1">
                    Enquire About This Stay
                  </h3>
                  <p className="text-xs text-zinc-600 mt-2 font-sans leading-relaxed">
                    Check availability and confirm details for {room.name} directly with our reservations desk.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F7F3E9] border border-zinc-200/80 text-xs text-zinc-700 space-y-2.5">
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
                    <span>Direct enquiry for {room.name}</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
                    <span>Confirmed amenity review with resort staff</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
                    <span>Personal assistance for travel dates and occupancy</span>
                  </div>
                </div>

                <div className="space-y-3 pt-1">
                  <Link
                    href={`/booking?room=${room.slug}`}
                    className="w-full py-3.5 rounded-full btn-gold text-center block font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-[1.02] transition-transform"
                  >
                    Enquire About This Stay
                  </Link>

                  <Link
                    href="/contact"
                    className="w-full py-3 rounded-full border border-zinc-300 text-center block font-semibold text-xs uppercase tracking-wider text-[#173A2B] hover:border-[#173A2B] transition-colors"
                  >
                    Contact Reception
                  </Link>
                </div>

                <div className="pt-3 border-t border-zinc-100 text-center space-y-1">
                  <p className="text-[11px] text-zinc-500">Need immediate assistance?</p>
                  <a
                    href="tel:+919909922000"
                    className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#173A2B] hover:text-[#C5A46D] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C5A46D]" />
                    <span>+91 99099 22000</span>
                  </a>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </main>

      <ResortFooter />
    </div>
  );
}
