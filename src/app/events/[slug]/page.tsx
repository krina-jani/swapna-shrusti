export const instant = false;
import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/navigation/Navbar";
import ResortFooter from "@/components/layout/ResortFooter";
import FAQSection from "@/components/common/FAQSection";
import EventEnquiryForm from "@/components/events/EventEnquiryForm";
import { EVENTS_DATA } from "@/data/eventsData";
import {
  Check,
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Home,
  Sparkles,
  Phone,
  ShieldCheck,
  Calendar,
  Clock,
  Tag,
  AlertTriangle,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return EVENTS_DATA.map((event) => ({
    slug: event.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = EVENTS_DATA.find((e) => e.slug === slug);

  if (!event) {
    return {
      title: "Event Not Found | Swapna Srushti Resort",
    };
  }

  return {
    title: event.seoTitle,
    description: event.seoDescription,
    keywords: [
      `Swapna Srushti Resort ${event.name}`,
      `${event.name} near Gandhinagar`,
      "resort event venues Gujarat",
      "Swapna Srushti celebrations",
    ],
  };
}

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params;
  const event = EVENTS_DATA.find((e) => e.slug === slug);

  if (!event) {
    notFound();
  }

  // Pre-selected event type mapping
  const eventTypeMapping: Record<string, string> = {
    weddings: "Weddings",
    festivals: "Festivals",
    "birthday-parties": "Birthday Parties",
    "corporate-conferences": "Corporate Conferences",
    "family-get-togethers": "Family Get-Togethers",
    "one-day-picnic": "One-Day Picnic",
  };

  const initialEventType = eventTypeMapping[slug] || "Weddings";

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3E9] text-[#202522]">
      <Navbar />

      <main className="flex-1">
        {/* ========================================================================= */}
        {/* HERO SECTION                                                              */}
        {/* ========================================================================= */}
        <section className="relative bg-[#173A2B] text-white pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden border-b border-zinc-800">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30 scale-105 transition-transform duration-1000"
            style={{ backgroundImage: `url('${event.image}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#173A2B] via-[#173A2B]/85 to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb Navigation: Home > Events > Event Name */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center space-x-2 text-xs uppercase tracking-wider text-zinc-300 mb-6"
            >
              <Link href="/" className="hover:text-[#C5A46D] transition-colors flex items-center space-x-1">
                <Home className="w-3.5 h-3.5" />
                <span>Home</span>
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-zinc-500" />
              <Link href="/events" className="hover:text-[#C5A46D] transition-colors">
                Events
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-zinc-500" />
              <span className="text-[#C5A46D] font-bold">{event.name}</span>
            </nav>

            <div className="max-w-3xl">
              <span className="inline-block text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase mb-2">
                {event.tagline}
              </span>
              <h1 className="font-serif font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight">
                {event.heroHeading}
              </h1>
              <p className="mt-4 text-sm sm:text-base text-zinc-200 leading-relaxed font-sans max-w-2xl">
                {event.shortDescription}
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CONTENT SECTION (8 Cols Editorial + 4 Cols Sticky Enquiry Form)           */}
        {/* ========================================================================= */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left 7/8 Columns: Editorial and features */}
            <div className="lg:col-span-7 space-y-12">
              
              {/* Overview Card */}
              <section className="bg-white p-8 sm:p-10 rounded-2xl border border-zinc-200/90 shadow-sm space-y-5">
                <div className="flex items-center space-x-3">
                  <span className="w-8 h-[2px] bg-[#C5A46D]" />
                  <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase font-sans">
                    EVENT OVERVIEW
                  </span>
                </div>
                <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#173A2B]">
                  Planning Your {event.name} Celebration
                </h2>
                <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-sans">
                  {event.fullDescription}
                </p>
                <div className="p-4 rounded-xl bg-[#F7F3E9] border border-zinc-200 text-xs sm:text-sm text-zinc-600 leading-relaxed font-sans">
                  <p>
                    <strong>Please Note:</strong> Exact venue spaces, stage capacities, decoration setups, pure vegetarian catering menus, guest cottage blocks, and pricing are customized for every event and must be confirmed directly with our resort management.
                  </p>
                </div>
              </section>

              {/* Special Context Notice (if any) */}
              {event.packageContextNotice && (
                <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start space-x-3 font-sans">
                  <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    {event.packageContextNotice}
                  </p>
                </div>
              )}

              {/* Special One-Day Picnic Package Card if on /events/one-day-picnic */}
              {slug === "one-day-picnic" && (
                <section className="bg-[#173A2B] text-white p-8 sm:p-10 rounded-2xl border border-zinc-800 shadow-xl space-y-6">
                  <div>
                    <span className="text-[10px] font-bold tracking-[0.25em] text-[#C5A46D] uppercase font-sans">
                      SUPPLIED DAY OUTING PACKAGE
                    </span>
                    <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white mt-1">
                      Day Picnic Package &amp; Tariffs
                    </h3>
                    <div className="flex items-baseline space-x-2 mt-2">
                      <span className="font-serif font-bold text-3xl sm:text-4xl text-[#C5A46D]">
                        ₹1,500
                      </span>
                      <span className="text-xs text-zinc-300 font-sans">
                        per person (GST extra)
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-xl bg-black/40 border border-white/10 text-xs font-sans">
                    <div className="flex items-center space-x-2 text-zinc-200">
                      <Clock className="w-4 h-4 text-[#C5A46D]" />
                      <span>Timings: <strong>9:00 AM – 5:00 PM</strong></span>
                    </div>
                    <div className="flex items-center space-x-2 text-zinc-200">
                      <Tag className="w-4 h-4 text-[#C5A46D]" />
                      <span>Rates: <strong>Non-refundable</strong></span>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs text-zinc-200 font-sans">
                    <p className="font-bold text-white text-sm">Meals Included:</p>
                    <p>• Breakfast on arrival, multi-course pure vegetarian Lunch, and evening High Tea with snacks.</p>
                  </div>

                  <div className="space-y-2 text-xs text-zinc-200 font-sans">
                    <p className="font-bold text-white text-sm">Activities &amp; Facilities Included:</p>
                    <p>• Adventure Park entry covering 30 activities (with three adventure activities available on a one-time basis per ticket).</p>
                    <p>• Cricket, badminton, volleyball, pool table, foosball, carrom, chess, and table tennis.</p>
                    <p>• Access to manicured garden trails, Theme Village, and resort swimming pool.</p>
                  </div>

                  <p className="text-[11px] text-zinc-400 font-sans italic border-t border-zinc-800 pt-3">
                    * Note: This package is strictly for daytime recreation and does not include overnight room accommodation.
                  </p>
                </section>
              )}

              {/* Event Features and Enquiry Areas */}
              <section className="bg-white p-8 sm:p-10 rounded-2xl border border-zinc-200/90 shadow-sm space-y-6">
                <div className="flex items-center space-x-3">
                  <span className="w-8 h-[2px] bg-[#C5A46D]" />
                  <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase font-sans">
                    VENUE &amp; ENQUIRY SCOPE
                  </span>
                </div>
                <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#173A2B]">
                  Key Event Considerations
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1 font-sans">
                  {event.featuresAndEnquiryAreas.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[#F7F3E9] border border-zinc-200/80 space-y-1.5"
                    >
                      <div className="flex items-start space-x-2.5">
                        <div className="w-5 h-5 rounded-full bg-[#173A2B] text-[#C5A46D] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3" />
                        </div>
                        <h4 className="font-serif font-bold text-base text-[#173A2B]">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-600 leading-relaxed pl-7">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Photo Highlights */}
              <section className="bg-white p-8 sm:p-10 rounded-2xl border border-zinc-200/90 shadow-sm space-y-6">
                <div className="flex items-center space-x-3">
                  <span className="w-8 h-[2px] bg-[#C5A46D]" />
                  <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase font-sans">
                    PHOTO HIGHLIGHTS
                  </span>
                </div>
                <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#173A2B]">
                  Celebration Gallery
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {event.gallery.map((imgUrl, i) => (
                    <div
                      key={i}
                      className="rounded-xl overflow-hidden border border-zinc-200 shadow-md h-60 group"
                    >
                      <img
                        src={imgUrl}
                        alt={`${event.name} atmosphere at Swapna Srushti Resort`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  ))}
                </div>
              </section>

              {/* Return to Events Navigation */}
              <div className="pt-2">
                <Link
                  href="/events"
                  className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#173A2B] hover:text-[#C5A46D] transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Explore All Event Categories</span>
                </Link>
              </div>

            </div>

            {/* Right 5 Columns: Sticky Event Enquiry Form */}
            <aside className="lg:col-span-5 sticky top-28 space-y-6">
              <EventEnquiryForm
                initialEventType={initialEventType}
                eventName={event.name}
              />
            </aside>

          </div>
        </div>

        {/* Scoped FAQ Section */}
        <FAQSection
          title={`${event.name.toUpperCase()} FAQS`}
          description={`Common queries regarding hosting ${event.name.toLowerCase()} at Swapna Srushti Resort, including venue capacities, dining, and date reservations.`}
          items={event.faqList}
          ctaText="Enquire For Dates"
          ctaLink="#top"
        />
      </main>

      <ResortFooter />
    </div>
  );
}
