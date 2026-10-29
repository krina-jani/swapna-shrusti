import React from "react";
import Link from "next/link";
import Navbar from "@/components/navigation/Navbar";
import ResortFooter from "@/components/layout/ResortFooter";
import FAQSection from "@/components/common/FAQSection";
import { RESTAURANT_FAQS } from "@/data/faqsData";
import {
  Utensils,
  Coffee,
  Sun,
  Moon,
  Users,
  CheckCircle2,
  Phone,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Info,
  HeartHandshake,
} from "lucide-react";

export const metadata = {
  title: "Restaurant at Swapna Srushti Resort | Vegetarian Dining Near Gandhinagar",
  description:
    "Explore vegetarian dining and meal packages at Swapna Srushti Resort near Gandhinagar, Gujarat. Enquire about resort meals, day outings, and group dining arrangements.",
  keywords: [
    "Swapna Srushti Resort restaurant",
    "Vegetarian restaurant near Gandhinagar",
    "Resort dining in Gandhinagar",
    "Vegetarian dining in Gujarat",
    "Resort meal packages",
    "Day outing with meals near Gandhinagar",
    "Group dining enquiries near Gandhinagar",
  ],
};

export default function RestaurantPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3E9] text-[#202522]">
      <Navbar />

      <main className="flex-1">
        {/* ========================================================================= */}
        {/* SECTION 2: RESTAURANT HERO SECTION                                        */}
        {/* ========================================================================= */}
        <section className="relative min-h-[480px] sm:min-h-[520px] pt-32 pb-16 sm:pt-40 sm:pb-20 bg-[#173A2B] text-white flex flex-col items-center justify-center text-center px-4 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30 scale-105 transition-transform duration-1000"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#173A2B] via-[#173A2B]/80 to-transparent" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase font-sans">
              PURE VEGETARIAN DINING
            </span>
            <h1 className="font-serif font-bold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight">
              Restaurant &amp; Cuisine
            </h1>
            <p className="text-sm sm:text-base text-zinc-300 font-sans max-w-xl mx-auto leading-relaxed">
              Discover vegetarian dining at Swapna Srushti Resort near Gandhinagar, Gujarat. Explore regional flavours, freshly prepared meals, and dining options for family visits, resort stays, and group outings.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#meal-packages"
                className="px-7 py-3 rounded-full btn-gold text-xs uppercase tracking-wider font-bold shadow-lg hover:scale-105 transition-transform"
              >
                View Meal Packages
              </a>
              <a
                href="#dining-enquiry"
                className="px-7 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs uppercase tracking-wider font-semibold transition-all"
              >
                Enquire About Dining
              </a>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: A DINING EXPERIENCE FOR EVERY OCCASION                         */}
        {/* ========================================================================= */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Image with Subtle Accent Border */}
            <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-2xl border-4 border-white h-[420px] sm:h-[480px] relative">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
                alt="Swapna Srushti Resort Dining Setting"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-4 left-4 bg-[#173A2B]/90 text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md font-sans">
                Pure Vegetarian Setting
              </div>
            </div>

            {/* Right Column: Editorial Overview & 3 Content Blocks */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase font-sans">
                  A WELCOMING HOSPITALITY SETTING
                </span>
                <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#173A2B] mt-1.5">
                  A Setting for Every Meal
                </h2>
                <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-sans mt-3">
                  Located along the scenic Gandhinagar-Mahudi Highway in Amrapur village, dining at Swapna Srushti Resort provides a peaceful rural retreat where guests can enjoy wholesome vegetarian cuisine. Visitors can enquire about dining during an overnight stay, take advantage of complete meal inclusions featured in resort packages, or coordinate custom dining arrangements for family get-togethers and group celebrations.
                </p>
              </div>

              {/* Three Editorial Blocks: A, B, C */}
              <div className="grid grid-cols-1 gap-4 pt-1 font-sans">
                
                {/* Block A: Everyday Resort Dining */}
                <div className="p-4 rounded-xl bg-white border border-zinc-200/80 shadow-sm flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#173A2B]/10 text-[#173A2B] flex items-center justify-center shrink-0 mt-0.5">
                    <Utensils className="w-5 h-5 text-[#C5A46D]" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base text-[#173A2B]">Everyday Resort Dining</h3>
                    <p className="text-xs sm:text-sm text-zinc-600 mt-1 leading-relaxed">
                      A comfortable dining atmosphere is central to any rejuvenating resort getaway. Our dining areas are designed to provide relaxing meals for couples, families, and vacationers enjoying time away from city bustle.
                    </p>
                  </div>
                </div>

                {/* Block B: Regional Flavours */}
                <div className="p-4 rounded-xl bg-white border border-zinc-200/80 shadow-sm flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#173A2B]/10 text-[#173A2B] flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-5 h-5 text-[#C5A46D]" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base text-[#173A2B]">Regional Flavours</h3>
                    <p className="text-xs sm:text-sm text-zinc-600 mt-1 leading-relaxed">
                      Experience the comforting warmth of traditional vegetarian culinary heritage. Meals celebrate regional Gujarati tastes and familiar North Indian cooking, prepared fresh with seasonal farm produce.
                    </p>
                  </div>
                </div>

                {/* Block C: Dining Together */}
                <div className="p-4 rounded-xl bg-white border border-zinc-200/80 shadow-sm flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#173A2B]/10 text-[#173A2B] flex items-center justify-center shrink-0 mt-0.5">
                    <Users className="w-5 h-5 text-[#C5A46D]" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base text-[#173A2B]">Dining Together</h3>
                    <p className="text-xs sm:text-sm text-zinc-600 mt-1 leading-relaxed">
                      Planning a get-together with extended family, milestone birthday, or corporate team? Enquire directly with our resort team to coordinate dedicated group seating, coordinated service timings, and tailored menu preferences.
                    </p>
                  </div>
                </div>

              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 px-7 py-3 rounded-full btn-gold text-xs uppercase tracking-wider font-bold shadow-lg hover:scale-105 transition-transform font-sans"
                >
                  <span>Enquire About Table &amp; Dining</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: MEALS INCLUDED IN RESORT PACKAGES                               */}
        {/* ========================================================================= */}
        <section id="meal-packages" className="py-20 bg-white border-y border-zinc-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-14 space-y-3">
              <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase font-sans">
                VERIFIED RESORT PACKAGE INCLUSIONS
              </span>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#173A2B]">
                Good Food Throughout Your Stay
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 font-sans leading-relaxed">
                Swapna Srushti Resort features comprehensive stay and day-outing packages that include scheduled meals prepared fresh for registered package guests. Review the inclusions below to choose the right package for your visit:
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch font-sans">
              
              {/* PANEL A: OVERNIGHT STAY PACKAGES */}
              <div className="p-8 sm:p-10 rounded-2xl bg-[#F7F3E9] border-2 border-[#173A2B]/15 flex flex-col justify-between shadow-sm relative overflow-hidden">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-[#173A2B] text-white">
                      Residential Package
                    </span>
                    <span className="text-xs text-zinc-500 font-semibold">1 Night / 2 Days</span>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#173A2B]">
                      Overnight Stay Packages
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 mt-2 leading-relaxed">
                      Included with specified overnight stay packages (such as our Standard Resort Stay Package and Diwali Stay Package):
                    </p>
                  </div>

                  {/* 3 Core Meal Inclusions */}
                  <div className="space-y-3 pt-2">
                    <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-white border border-zinc-200/80">
                      <Sun className="w-5 h-5 text-[#C5A46D] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-serif font-bold text-sm text-[#173A2B]">Breakfast</h4>
                        <p className="text-xs text-zinc-600 mt-0.5">Wholesome morning breakfast accompanied by hot tea and coffee to start your day at the resort.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-white border border-zinc-200/80">
                      <Utensils className="w-5 h-5 text-[#C5A46D] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-serif font-bold text-sm text-[#173A2B]">Punjabi Lunch</h4>
                        <p className="text-xs text-zinc-600 mt-0.5">Flavorful pure vegetarian Punjabi lunch featuring freshly cooked paneer dishes, gravies, rotis, and rice.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-white border border-zinc-200/80">
                      <Moon className="w-5 h-5 text-[#C5A46D] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-serif font-bold text-sm text-[#173A2B]">Dinner</h4>
                        <p className="text-xs text-zinc-600 mt-0.5">Comforting evening dinner served in the resort dining area for registered overnight guests.</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-zinc-100 border border-zinc-200 text-xs text-zinc-600 flex items-start space-x-2.5">
                    <Info className="w-4 h-4 text-[#173A2B] shrink-0 mt-0.5" />
                    <p>
                      <strong>Important Notice:</strong> These meals are included exclusively under specified accommodation packages subject to applicable package terms. They do not automatically apply to room-only reservations.
                    </p>
                  </div>
                </div>

                <div className="pt-8">
                  <Link
                    href="/packages"
                    className="w-full text-center inline-block py-3 px-6 rounded-full bg-[#173A2B] hover:bg-[#0f281d] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
                  >
                    View Stay Package Tariffs
                  </Link>
                </div>
              </div>

              {/* PANEL B: ONE-DAY OUTING */}
              <div className="p-8 sm:p-10 rounded-2xl bg-[#173A2B] text-white flex flex-col justify-between shadow-xl relative overflow-hidden">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full btn-gold text-[#173A2B]">
                      Day Picnic Package
                    </span>
                    <span className="text-xs text-zinc-300 font-semibold">₹1,500 / Person + GST</span>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white">
                      Resort &amp; Adventure Park Day Outing
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-300 mt-2 leading-relaxed">
                      Package hours: <strong>9:00 AM to 5:00 PM</strong>. Complete culinary refreshments paired with 30 adventure activities:
                    </p>
                  </div>

                  {/* 3 Day Outing Food Inclusions */}
                  <div className="space-y-3 pt-2">
                    <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-white/10 border border-white/10">
                      <Sun className="w-5 h-5 text-[#C5A46D] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-serif font-bold text-sm text-white">Morning Breakfast</h4>
                        <p className="text-xs text-zinc-300 mt-0.5">Welcome breakfast served upon arrival during package check-in at 9:00 AM.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-white/10 border border-white/10">
                      <Utensils className="w-5 h-5 text-[#C5A46D] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-serif font-bold text-sm text-white">Wholesome Lunch</h4>
                        <p className="text-xs text-zinc-300 mt-0.5">Full pure vegetarian lunch provided mid-day between adventure thrills and pool visits.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-white/10 border border-white/10">
                      <Coffee className="w-5 h-5 text-[#C5A46D] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-serif font-bold text-sm text-white">High Tea with Snacks</h4>
                        <p className="text-xs text-zinc-300 mt-0.5">Evening high tea complemented by hot tea/coffee and evening snacks before 5:00 PM departure.</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 text-xs text-zinc-300 flex items-start space-x-2.5">
                    <Info className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
                    <p>
                      <strong>Package Condition:</strong> Rate is non-refundable, GST extra. Valid strictly for the day outing (9 AM–5 PM); does not include overnight room stay or open à la carte dining.
                    </p>
                  </div>
                </div>

                <div className="pt-8">
                  <a
                    href="#dining-enquiry"
                    className="w-full text-center inline-block py-3 px-6 rounded-full btn-gold text-[#173A2B] font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:scale-[1.02]"
                  >
                    Enquire About Dining Packages
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: EXPLORE OUR FOOD EXPERIENCE (Editorial Image-and-Text Blocks)  */}
        {/* ========================================================================= */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase font-sans">
              CULINARY FOCUS
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#173A2B] mt-1.5">
              Explore Our Food Experience
            </h2>
            <p className="text-sm text-zinc-600 mt-2 font-sans leading-relaxed">
              We focus on fresh vegetarian cuisine and genuine hospitality. While our daily menu rotates with regional market availability rather than a fixed à la carte catalog, guests consistently enjoy authentic cooking across four key culinary highlights:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
            
            {/* Block 1: 100% Pure Vegetarian Cuisine */}
            <div className="bg-white rounded-2xl overflow-hidden border border-zinc-200/80 shadow-md flex flex-col justify-between group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80"
                  alt="Wholesome Vegetarian Dining Preparations"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-3 left-3 bg-[#173A2B]/85 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  100% Pure Vegetarian
                </div>
              </div>
              <div className="p-6 sm:p-8 space-y-3">
                <h3 className="font-serif font-bold text-xl text-[#173A2B]">
                  Wholesome Vegetarian Cooking
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Every meal is prepared in a strictly vegetarian culinary setting with hygienic food handling, regional dairy products, and carefully selected seasonal vegetables.
                </p>
              </div>
            </div>

            {/* Block 2: Regional Gujarati Tastes */}
            <div className="bg-white rounded-2xl overflow-hidden border border-zinc-200/80 shadow-md flex flex-col justify-between group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80"
                  alt="Authentic Regional Indian Dishes"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-3 left-3 bg-[#173A2B]/85 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  Regional Heritage
                </div>
              </div>
              <div className="p-6 sm:p-8 space-y-3">
                <h3 className="font-serif font-bold text-xl text-[#173A2B]">
                  Regional Gujarati Flavours
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Celebrate time-honored Gujarati taste traditions, from comforting kadhi and dal preparations to seasonal sabzis that reflect the agricultural richness of the Sabarmati and Mehsana belts.
                </p>
              </div>
            </div>

            {/* Block 3: Punjabi Lunch in Verified Stay Packages */}
            <div className="bg-white rounded-2xl overflow-hidden border border-zinc-200/80 shadow-md flex flex-col justify-between group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80"
                  alt="Punjabi Dishes and Curries"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-3 left-3 bg-[#173A2B]/85 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  Package Inclusions
                </div>
              </div>
              <div className="p-6 sm:p-8 space-y-3">
                <h3 className="font-serif font-bold text-xl text-[#173A2B]">
                  Punjabi Lunch in Stay Packages
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Guests booking our verified overnight packages enjoy a hearty North Indian Punjabi lunch, featuring rich gravies, fresh rotis, savory paneer preparations, and spiced accompaniments.
                </p>
              </div>
            </div>

            {/* Block 4: Refreshing Breakfast & Evening High Tea */}
            <div className="bg-white rounded-2xl overflow-hidden border border-zinc-200/80 shadow-md flex flex-col justify-between group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
                  alt="Breakfast and Evening High Tea Service"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-3 left-3 bg-[#173A2B]/85 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  Day Picnics &amp; Stays
                </div>
              </div>
              <div className="p-6 sm:p-8 space-y-3">
                <h3 className="font-serif font-bold text-xl text-[#173A2B]">
                  Morning Breakfast &amp; Evening High Tea
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Start your morning with warm breakfast delicacies and recharge before sunset with evening high tea and savory snacks as part of our verified day outing and stay packages.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6: JAIN AND DIETARY REQUIREMENTS                                  */}
        {/* ========================================================================= */}
        <section className="py-16 bg-[#173A2B] text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-10 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase font-sans">
                    SPECIAL MEAL CONSIDERATIONS
                  </span>
                  <h2 className="font-serif font-bold text-2xl sm:text-3xl text-white mt-1">
                    Dining That Respects Your Preferences
                  </h2>
                </div>
                <div className="shrink-0">
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#C5A46D]/20 text-[#C5A46D] border border-[#C5A46D]/30 text-xs font-semibold">
                    <HeartHandshake className="w-3.5 h-3.5" />
                    <span>Advance Consultation</span>
                  </span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
                We understand that many families across Gujarat follow strict Jain or Swaminarayan dietary preferences. While our kitchen is 100% pure vegetarian, specific dietary preferences—such as root-free (no onion, garlic, or root vegetable) preparations—must be discussed and confirmed directly with the resort prior to arrival.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans text-xs text-zinc-300">
                <div className="p-4 rounded-xl bg-black/30 border border-white/10 space-y-1.5">
                  <strong className="text-white block text-sm">How to Request Special Meals:</strong>
                  <p>Inform our concierge team at least 24 hours prior to check-in or day outing so the kitchen staff can coordinate appropriate meal preparation.</p>
                </div>
                <div className="p-4 rounded-xl bg-black/30 border border-white/10 space-y-1.5">
                  <strong className="text-white block text-sm">Clear Dietary Boundary:</strong>
                  <p>We do not advertise certified allergy-free facilities or guaranteed on-the-spot à la carte substitutions without prior confirmation.</p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4 font-sans">
                <a
                  href="tel:+919909922000"
                  className="px-6 py-2.5 rounded-full btn-gold text-xs uppercase tracking-wider font-bold shadow-md hover:scale-105 transition-transform"
                >
                  Discuss Your Dietary Requirements
                </a>
                <span className="text-xs text-zinc-400">
                  Call Concierge Desk: +91 99099 22000
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 7: GROUP DINING AND CELEBRATIONS                                  */}
        {/* ========================================================================= */}
        <section className="py-20 bg-white border-b border-zinc-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase font-sans">
                    COMMUNAL GATHERINGS &amp; OCCASIONS
                  </span>
                  <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#173A2B] mt-1.5">
                    Dining Together at Swapna Srushti
                  </h2>
                  <p className="text-sm sm:text-base text-zinc-700 font-sans leading-relaxed mt-3">
                    Sharing meals is at the heart of meaningful celebrations. Whether you are hosting an intimate family reunion, a milestone birthday party, a corporate team seminar, or a pre-wedding gathering, Swapna Srushti Resort provides welcoming indoor and open-air lawn environments for shared dining.
                  </p>
                </div>

                <div className="space-y-3 font-sans">
                  <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-[#F7F3E9] border border-zinc-200">
                    <CheckCircle2 className="w-5 h-5 text-[#C5A46D] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-serif font-bold text-sm text-[#173A2B]">Family Gatherings &amp; Birthdays</h4>
                      <p className="text-xs text-zinc-600 mt-0.5">Reserve dedicated table clusters or lawn sections for celebratory lunches, evening cake cuttings, and high tea.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-[#F7F3E9] border border-zinc-200">
                    <CheckCircle2 className="w-5 h-5 text-[#C5A46D] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-serif font-bold text-sm text-[#173A2B]">Corporate Conferences &amp; Picnics</h4>
                      <p className="text-xs text-zinc-600 mt-0.5">Coordinate synchronized meal times with conference schedules, tea breaks, and adventure park activities.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-[#F7F3E9] border border-zinc-200">
                    <CheckCircle2 className="w-5 h-5 text-[#C5A46D] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-serif font-bold text-sm text-[#173A2B]">Wedding &amp; Festive Milestone Banquets</h4>
                      <p className="text-xs text-zinc-600 mt-0.5">Explore multi-course banqueting on our party plots with dedicated stage arrangements, chafing dishes, and live counter options confirmed with our events team.</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 text-xs text-zinc-500 font-sans">
                  * Note: Exact menu selections, banquet seating configurations, guest headcounts, and group pricing must be confirmed directly with resort management.
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4 font-sans">
                  <a
                    href="#dining-enquiry"
                    className="px-7 py-3 rounded-full btn-gold text-xs uppercase tracking-wider font-bold shadow-lg hover:scale-105 transition-transform"
                  >
                    Plan a Group Meal
                  </a>
                  <Link
                    href="/events"
                    className="px-7 py-3 rounded-full bg-[#173A2B] hover:bg-[#0f281d] text-white text-xs uppercase tracking-wider font-bold transition-all"
                  >
                    Explore Events
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#F7F3E9] h-[400px] sm:h-[480px]">
                <img
                  src="/images/sticky-wedding.jpg"
                  alt="Group Dining and Celebration Lawn Setup"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 8: RESTAURANT GALLERY                                             */}
        {/* ========================================================================= */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase font-sans">
              VISUAL GLIMPSE
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#173A2B] mt-1.5">
              Restaurant &amp; Dining Gallery
            </h2>
            <p className="text-sm text-zinc-600 mt-2 font-sans leading-relaxed">
              A curated photographic impression of dining moments, hospitality spaces, and culinary celebrations at Swapna Srushti Resort.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="rounded-2xl overflow-hidden shadow-md border border-zinc-200 group h-64 sm:h-72">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                alt="Dining Room Ambience and Tables"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            <div className="rounded-2xl overflow-hidden shadow-md border border-zinc-200 group h-64 sm:h-72">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
                alt="Resort Dining Hall Seating"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            <div className="rounded-2xl overflow-hidden shadow-md border border-zinc-200 group h-64 sm:h-72">
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
                alt="Fresh Vegetarian Preparations and Buffet"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            <div className="rounded-2xl overflow-hidden shadow-md border border-zinc-200 group h-64 sm:h-72">
              <img
                src="https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80"
                alt="Regional Indian Vegetarian Dishes"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            <div className="rounded-2xl overflow-hidden shadow-md border border-zinc-200 group h-64 sm:h-72">
              <img
                src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80"
                alt="North Indian Curries and Accompaniments"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            <div className="rounded-2xl overflow-hidden shadow-md border border-zinc-200 group h-64 sm:h-72">
              <img
                src="/images/sticky-picnic.jpg"
                alt="Day Outing and Garden Meal Setting"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 9: HOW TO PLAN YOUR DINING VISIT                                  */}
        {/* ========================================================================= */}
        <section className="py-20 bg-[#F7F3E9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase font-sans">
                PRACTICAL GUIDANCE
              </span>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#173A2B] mt-1.5">
                Plan Your Dining Experience
              </h2>
              <p className="text-sm text-zinc-600 mt-2 font-sans leading-relaxed">
                Follow these three simple steps to organize your meals at Swapna Srushti Resort:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
              
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-zinc-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#173A2B] text-[#C5A46D] flex items-center justify-center font-bold text-sm">
                  01
                </div>
                <h4 className="font-serif font-bold text-lg text-[#173A2B]">
                  Choose Your Visit
                </h4>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Decide whether you are visiting for an à la carte meal, an overnight stay package with all 3 meals, or the all-inclusive 9 AM–5 PM day outing package.
                </p>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-zinc-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#173A2B] text-[#C5A46D] flex items-center justify-center font-bold text-sm">
                  02
                </div>
                <h4 className="font-serif font-bold text-lg text-[#173A2B]">
                  Share Your Requirements
                </h4>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Tell our resort team your preferred date, approximate guest count, and any Jain or Swaminarayan dietary preferences.
                </p>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-zinc-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#173A2B] text-[#C5A46D] flex items-center justify-center font-bold text-sm">
                  03
                </div>
                <h4 className="font-serif font-bold text-lg text-[#173A2B]">
                  Confirm the Arrangements
                </h4>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Confirm table availability, package inclusions, timings, and formal pricing directly with our concierge desk before travelling.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 10: RESTAURANT FAQ                                                */}
        {/* ========================================================================= */}
        <FAQSection
          title="DINING & MENUS"
          description="Common questions regarding pure vegetarian dining, meal package inclusions, Jain food requests, group celebrations, and reservation guidelines."
          items={RESTAURANT_FAQS}
          ctaText="Enquire For Dining"
          ctaLink="#dining-enquiry"
        />

        {/* ========================================================================= */}
        {/* SECTION 11: FINAL RESTAURANT ENQUIRY SECTION                              */}
        {/* ========================================================================= */}
        <section id="dining-enquiry" className="py-20 bg-[#173A2B] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-6 font-sans">
                <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase">
                  GET IN TOUCH WITH OUR TEAM
                </span>
                <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-white">
                  Let&apos;s Plan Your Dining Experience
                </h2>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xl">
                  Whether you are planning a resort stay, a family outing, or a group celebration, contact Swapna Srushti Resort to enquire about dining options and meal arrangements.
                </p>

                <div className="p-4 rounded-xl bg-black/40 border border-white/10 text-xs text-zinc-300 space-y-2">
                  <div className="flex items-center space-x-2 text-[#C5A46D] font-bold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Direct Resort Hospitality Desk</span>
                  </div>
                  <p>Our team is available daily to answer queries about menu inclusions, package rates, table slots, and group dining reservations.</p>
                </div>

                <div className="space-y-3 pt-1">
                  <a
                    href="tel:+919909922000"
                    className="inline-flex items-center space-x-2 text-sm font-bold text-[#C5A46D] hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Concierge: +91 99099 22000</span>
                  </a>
                  <p className="text-xs text-zinc-400">
                    Location: 9PGF+84X, Amrapur village, near Grambharti Cross Road, Gujarat State Highway 213, Amarapur, Gujarat.
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-block px-8 py-3.5 rounded-full btn-gold text-xs uppercase tracking-wider font-bold shadow-lg hover:scale-105 transition-transform"
                  >
                    Contact Us About Dining
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl relative h-80 sm:h-96">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
                  alt="Swapna Srushti Resort Dining Experience"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 flex flex-col justify-end">
                  <span className="text-[#C5A46D] font-serif font-bold text-lg">Pure Vegetarian Hospitality</span>
                  <p className="text-xs text-zinc-300 mt-1">Gandhinagar-Mahudi Highway, Amrapur, Gujarat</p>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      <ResortFooter />
    </div>
  );
}
