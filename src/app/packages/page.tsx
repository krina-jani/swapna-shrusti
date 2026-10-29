import React from "react";
import Link from "next/link";
import Navbar from "@/components/navigation/Navbar";
import ResortFooter from "@/components/layout/ResortFooter";
import FAQSection from "@/components/common/FAQSection";
import { RESORT_PACKAGES } from "@/data/packagesData";
import {
  Check,
  Clock,
  Tag,
  ShieldCheck,
  Calendar,
  ArrowRight,
  Info,
  Phone,
  Sparkles,
  Utensils,
  AlertTriangle,
} from "lucide-react";

export const metadata = {
  title: "Packages & Offers | Swapna Srushti Resort Gandhinagar",
  description: "View verified stay packages, day outing deals, and seasonal Diwali offers at Swapna Srushti Resort. Transparent pricing, meal inclusions, and booking enquiries.",
  keywords: [
    "Swapna Srushti Resort packages",
    "Swapna Srushti Resort room prices",
    "Resort stay package in Gandhinagar",
    "Swapna Srushti day outing package",
    "Swapna Srushti Adventure Park package",
    "Diwali resort package at Swapna Srushti",
  ],
};

export default function PackagesPage() {
  const diwaliPackage = RESORT_PACKAGES.find((p) => p.id === "diwali-package")!;
  const stayPackage = RESORT_PACKAGES.find((p) => p.id === "standard-stay-package")!;
  const dayOutingPackage = RESORT_PACKAGES.find((p) => p.id === "day-outing-package")!;

  const packagesFaqs = [
    {
      q: "What meals are included with the standard stay packages?",
      a: "Both the Standard Stay Package and the Diwali Stay Package include Breakfast, Punjabi lunch, and Dinner as part of the published tariff.",
    },
    {
      q: "What is the Adventure Park discount for residential stay guests?",
      a: "Residential stay guests staying under our resort packages receive 50% off on entry tickets to the adjacent Adventure Park.",
    },
    {
      q: "Is GST included in the published package tariffs?",
      a: "No, GST is applicable extra on all published rates for stay packages and day outings.",
    },
    {
      q: "What are the rules and inclusions for the Day Outing package?",
      a: "The Day Outing package is priced at ₹1,500 per person (plus GST) from 9:00 AM to 5:00 PM. It includes Breakfast, Lunch, High Tea with snacks, access to 30 adventure park activities (with 3 adventure activities on a one-time basis), and use of indoor/outdoor sports and swimming pool. Rates are non-refundable and do not include overnight rooms.",
    },
    {
      q: "How can I confirm availability and dates for the Diwali Stay Package?",
      a: "Because Diwali holiday dates carry high seasonal demand and custom festive schedules, guests are advised to contact our resort concierge directly via phone (+91 99099 22000) or our enquiry form to confirm applicable dates and availability prior to making plans.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3E9] text-[#202522]">
      <Navbar />

      <main className="flex-1">
        {/* ========================================================================= */}
        {/* HERO SECTION                                                              */}
        {/* ========================================================================= */}
        <section className="relative h-80 sm:h-96 bg-[#173A2B] text-white flex items-center justify-center text-center px-4">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: "url('/images/Tropical%20Resort%20Cottages%20at%20Sunset.png')",
            }}
          />
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase">
              TRANSPARENT TARIFFS &amp; INCLUSIONS
            </span>
            <h1 className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl mt-2">
              Resort Packages &amp; Offers
            </h1>
            <p className="text-sm sm:text-base text-zinc-300 mt-3 font-sans max-w-xl mx-auto">
              Explore authentic stay packages, all-day adventure picnics, and seasonal holiday getaways at Swapna Srushti Resort.
            </p>
          </div>
        </section>

        {/* Quick Nav Anchors */}
        <section className="py-4 bg-[#202522] text-white border-b border-zinc-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-4 text-xs font-bold uppercase tracking-wider">
            <a href="#standard-stay" className="text-zinc-300 hover:text-[#C5A46D] transition-colors">
              • Standard Stay Package
            </a>
            <a href="#day-outing" className="text-zinc-300 hover:text-[#C5A46D] transition-colors">
              • Day-Outing Package
            </a>
            <a href="#diwali-package" className="text-zinc-300 hover:text-[#C5A46D] transition-colors">
              • Diwali Festive Package
            </a>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-20">
          
          {/* ========================================================================= */}
          {/* PACKAGE 1: STANDARD RESORT STAY PACKAGE                                    */}
          {/* ========================================================================= */}
          <section id="standard-stay" className="bg-white rounded-3xl border border-zinc-200/90 shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full">
                <img
                  src={stayPackage.image}
                  alt={stayPackage.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#173A2B] text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                  {stayPackage.badge}
                </div>
              </div>

              <div className="lg:col-span-7 p-8 sm:p-10 space-y-6">
                <div>
                  <span className="text-[11px] font-bold tracking-[0.2em] text-[#C5A46D] uppercase font-sans">
                    {stayPackage.duration}
                  </span>
                  <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#173A2B] mt-1">
                    {stayPackage.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-600 mt-2 font-sans leading-relaxed">
                    {stayPackage.description}
                  </p>
                </div>

                {/* Timings and Tax Notes */}
                <div className="flex flex-wrap items-center gap-6 p-4 rounded-xl bg-[#F7F3E9] border border-zinc-200 text-xs font-sans text-zinc-700">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-[#C5A46D]" />
                    <span>Check-in: <strong>{stayPackage.timings.checkIn}</strong></span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-[#C5A46D]" />
                    <span>Check-out: <strong>{stayPackage.timings.checkOut}</strong></span>
                  </div>
                  <div className="flex items-center space-x-2 text-zinc-600">
                    <Tag className="w-4 h-4 text-[#C5A46D]" />
                    <span><strong>{stayPackage.pricing.taxNotes}</strong></span>
                  </div>
                </div>

                {/* Pricing Breakdown Table */}
                <div className="space-y-2">
                  <h4 className="font-serif font-bold text-base text-[#173A2B]">
                    Room Category Tariffs (Per Couple, Per Night)
                  </h4>
                  <div className="border border-zinc-200 rounded-xl overflow-hidden divide-y divide-zinc-200 text-xs sm:text-sm font-sans">
                    {stayPackage.pricing.roomPricing?.map((item, idx) => (
                      <div key={idx} className="p-3 sm:px-4 flex items-center justify-between hover:bg-zinc-50 transition-colors">
                        <div>
                          <span className="font-bold text-[#173A2B]">{item.roomName}</span>
                          {item.notes && <span className="block text-[11px] text-zinc-500">{item.notes}</span>}
                        </div>
                        <span className="font-serif font-bold text-base text-[#173A2B]">{item.priceDisplay}</span>
                      </div>
                    ))}
                    <div className="p-3 sm:px-4 flex items-center justify-between bg-zinc-50 font-semibold text-zinc-700">
                      <span>Extra Person</span>
                      <span className="font-serif font-bold text-[#173A2B]">{stayPackage.pricing.extraPersonDisplay}</span>
                    </div>
                  </div>
                </div>

                {/* Inclusions List */}
                <div className="space-y-2.5">
                  <h4 className="font-serif font-bold text-base text-[#173A2B]">
                    Package Inclusions
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 text-xs text-zinc-700 font-sans">
                    {stayPackage.inclusions.map((inc, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <Check className="w-3.5 h-3.5 text-[#C5A46D] shrink-0" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    href={`/contact?package=standard-stay-package`}
                    className="px-7 py-3 rounded-full btn-gold text-xs uppercase tracking-wider font-bold shadow-lg hover:scale-105 transition-transform"
                  >
                    Enquire About This Package
                  </Link>
                  <Link
                    href="/accommodation"
                    className="text-xs font-bold uppercase tracking-wider text-[#173A2B] hover:text-[#C5A46D] transition-colors"
                  >
                    View Room Photos &rarr;
                  </Link>
                </div>

              </div>

            </div>
          </section>

          {/* ========================================================================= */}
          {/* PACKAGE 2: RESORT & ADVENTURE PARK DAY OUTING                              */}
          {/* ========================================================================= */}
          <section id="day-outing" className="bg-[#173A2B] text-white rounded-3xl border border-zinc-800 shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              <div className="lg:col-span-7 p-8 sm:p-10 space-y-6 order-2 lg:order-1">
                <div>
                  <span className="text-[11px] font-bold tracking-[0.2em] text-[#C5A46D] uppercase font-sans">
                    {dayOutingPackage.duration}
                  </span>
                  <h2 className="font-serif font-bold text-3xl sm:text-4xl text-white mt-1">
                    {dayOutingPackage.name}
                  </h2>
                  <div className="flex items-baseline space-x-2 mt-2">
                    <span className="font-serif font-bold text-3xl sm:text-4xl text-[#C5A46D]">
                      {dayOutingPackage.pricing.priceDisplay}
                    </span>
                    <span className="text-xs text-zinc-300 font-sans">
                      ({dayOutingPackage.pricing.taxNotes})
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 mt-3 font-sans leading-relaxed">
                    {dayOutingPackage.description}
                  </p>
                </div>

                {/* Timings and Meals Badge */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-xl bg-black/40 border border-white/10 text-xs font-sans">
                  <div className="flex items-center space-x-2 text-zinc-200">
                    <Clock className="w-4 h-4 text-[#C5A46D]" />
                    <span>Timings: <strong>{dayOutingPackage.timings.operatingHours}</strong></span>
                  </div>
                  <div className="flex items-center space-x-2 text-zinc-200">
                    <Utensils className="w-4 h-4 text-[#C5A46D]" />
                    <span>Meals: <strong>Breakfast, Lunch &amp; High Tea</strong></span>
                  </div>
                </div>

                {/* Inclusions */}
                <div className="space-y-2.5">
                  <h4 className="font-serif font-bold text-base text-white">
                    Included Activities &amp; Facilities
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-xs text-zinc-200 font-sans">
                    {dayOutingPackage.inclusions.map((inc, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <Check className="w-3.5 h-3.5 text-[#C5A46D] shrink-0" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Important Conditions */}
                <div className="p-4 rounded-xl bg-black/30 border border-zinc-700/80 text-xs text-zinc-300 space-y-1 font-sans">
                  <span className="font-bold text-[#C5A46D] uppercase text-[10px] tracking-wider block">
                    Important Conditions
                  </span>
                  {dayOutingPackage.conditions.map((cond, i) => (
                    <p key={i}>• {cond}</p>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-2">
                  <Link
                    href={`/contact?package=day-outing-package`}
                    className="inline-block px-7 py-3 rounded-full btn-gold text-xs uppercase tracking-wider font-bold shadow-lg hover:scale-105 transition-transform"
                  >
                    Enquire About Day Outing
                  </Link>
                </div>

              </div>

              <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full order-1 lg:order-2">
                <img
                  src={dayOutingPackage.image}
                  alt={dayOutingPackage.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#C5A46D] text-[#173A2B] text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                  {dayOutingPackage.badge}
                </div>
              </div>

            </div>
          </section>

          {/* ========================================================================= */}
          {/* PACKAGE 3: DIWALI STAY PACKAGE                                             */}
          {/* ========================================================================= */}
          <section id="diwali-package" className="bg-white rounded-3xl border-2 border-[#C5A46D]/60 shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full">
                <img
                  src={diwaliPackage.image}
                  alt={diwaliPackage.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#202522] text-[#C5A46D] text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                  {diwaliPackage.badge}
                </div>
              </div>

              <div className="lg:col-span-7 p-8 sm:p-10 space-y-6">
                <div>
                  <span className="text-[11px] font-bold tracking-[0.2em] text-[#C5A46D] uppercase font-sans">
                    {diwaliPackage.duration}
                  </span>
                  <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#173A2B] mt-1">
                    {diwaliPackage.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-600 mt-2 font-sans leading-relaxed">
                    {diwaliPackage.description}
                  </p>
                </div>

                {/* Seasonal Notice Alert */}
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start space-x-3 font-sans">
                  <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    <strong>Seasonal Confirmation Required:</strong> {diwaliPackage.seasonalNotice}
                  </p>
                </div>

                {/* Timings */}
                <div className="flex flex-wrap items-center gap-6 p-4 rounded-xl bg-[#F7F3E9] border border-zinc-200 text-xs font-sans text-zinc-700">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-[#C5A46D]" />
                    <span>Check-in: <strong>{diwaliPackage.timings.checkIn}</strong></span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-[#C5A46D]" />
                    <span>Check-out: <strong>{diwaliPackage.timings.checkOut}</strong></span>
                  </div>
                  <div className="flex items-center space-x-2 text-zinc-600">
                    <Tag className="w-4 h-4 text-[#C5A46D]" />
                    <span><strong>{diwaliPackage.pricing.taxNotes}</strong></span>
                  </div>
                </div>

                {/* Pricing Table */}
                <div className="space-y-2">
                  <h4 className="font-serif font-bold text-base text-[#173A2B]">
                    Diwali Stay Rates (Per Couple, Per Night)
                  </h4>
                  <div className="border border-zinc-200 rounded-xl overflow-hidden divide-y divide-zinc-200 text-xs sm:text-sm font-sans">
                    {diwaliPackage.pricing.roomPricing?.map((item, idx) => (
                      <div key={idx} className="p-3 sm:px-4 flex items-center justify-between hover:bg-zinc-50 transition-colors">
                        <div>
                          <span className="font-bold text-[#173A2B]">{item.roomName}</span>
                          {item.notes && <span className="block text-[11px] text-zinc-500">{item.notes}</span>}
                        </div>
                        <span className="font-serif font-bold text-base text-[#173A2B]">{item.priceDisplay}</span>
                      </div>
                    ))}
                    <div className="p-3 sm:px-4 flex items-center justify-between bg-zinc-50 font-semibold text-zinc-700">
                      <span>Extra Person</span>
                      <span className="font-serif font-bold text-[#173A2B]">{diwaliPackage.pricing.extraPersonDisplay}</span>
                    </div>
                  </div>
                </div>

                {/* Inclusions */}
                <div className="space-y-2.5">
                  <h4 className="font-serif font-bold text-base text-[#173A2B]">
                    Inclusions
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-xs text-zinc-700 font-sans">
                    {diwaliPackage.inclusions.map((inc, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <Check className="w-3.5 h-3.5 text-[#C5A46D] shrink-0" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-2">
                  <Link
                    href={`/contact?package=diwali-package`}
                    className="inline-block px-7 py-3 rounded-full btn-gold text-xs uppercase tracking-wider font-bold shadow-lg hover:scale-105 transition-transform"
                  >
                    Confirm Dates &amp; Enquire
                  </Link>
                </div>

              </div>

            </div>
          </section>

        </div>

        {/* Scoped FAQ Section */}
        <FAQSection
          title="PACKAGE & RATE FAQS"
          description="Verified answers regarding room package meal plans, day outing rules, 50% adventure discounts, and seasonal Diwali confirmation."
          items={packagesFaqs}
          ctaText="Contact Concierge"
          ctaLink="/contact"
        />
      </main>

      <ResortFooter />
    </div>
  );
}

