import React from "react";
import Link from "next/link";
import Navbar from "@/components/navigation/Navbar";
import ResortFooter from "@/components/layout/ResortFooter";
import FAQSection from "@/components/common/FAQSection";
import GlareHover from "@/components/common/GlareHover";
import EventEnquiryForm from "@/components/events/EventEnquiryForm";
import EventsCTATitle from "@/components/events/EventsCTATitle";
import EventsAnimatedView from "@/components/events/EventsAnimatedView";
import "@/components/events/EventsAnimation.css";
import { EVENTS_DATA } from "@/data/eventsData";
import { EVENTS_FAQS } from "@/data/faqsData";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  ShieldCheck,
} from "lucide-react";

export const metadata = {
  title: "Events, Weddings & Celebrations | Swapna Srushti Resort",
  description: "Celebrate weddings, festivals, birthday parties, corporate conferences, family get-togethers, and one-day picnics at Swapna Srushti Resort near Gandhinagar, Gujarat.",
  keywords: [
    "Swapna Srushti Resort events",
    "Wedding venue near Gandhinagar",
    "Birthday party venue near Gandhinagar",
    "Corporate events in Gandhinagar",
    "Family get-together venue near Gandhinagar",
    "Swapna Srushti day outing package",
    "Swapna Srushti celebrations",
  ],
};

export default function EventsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3E9] text-[#202522]">
      <Navbar />

      <main className="flex-1">
        <EventsAnimatedView>
          {/* ========================================================================= */}
          {/* SECTION A: HERO (Cinematic Entrance)                                      */}
          {/* ========================================================================= */}
          <section className="relative min-h-[480px] sm:min-h-[520px] pt-32 pb-16 sm:pt-40 sm:pb-20 bg-zinc-900 text-white flex flex-col items-center justify-center text-center px-4 overflow-hidden">
            <div
              className="events-hero-bg absolute inset-0 bg-cover bg-center opacity-100"
              style={{
                backgroundImage: `url('${EVENTS_DATA[0].image}')`,
              }}
            />
            <div className="events-hero-overlay absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-black/15 pointer-events-none" />

            <div className="relative z-10 max-w-3xl space-y-4">
              <div className="events-hero-eyebrow">
                <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase font-sans">
                  CELEBRATE SPECIAL MOMENTS
                </span>
              </div>
              <h1 className="events-hero-title font-serif font-bold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight">
                Celebrate Every Occasion at Swapna Srushti Resort
              </h1>
              <p className="events-hero-desc text-sm sm:text-base text-zinc-300 font-sans max-w-xl mx-auto leading-relaxed">
                Discover a welcoming setting for weddings, birthdays, family gatherings, corporate events and day outings at Swapna Srushti Resort near Gandhinagar, Gujarat.
              </p>
              <div className="events-hero-ctas pt-2 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#event-categories"
                  className="px-7 py-3 rounded-full btn-gold text-xs uppercase tracking-wider font-bold shadow-lg hover:scale-105 transition-transform"
                >
                  Explore Events
                </a>
                <a
                  href="#event-enquiry"
                  className="px-7 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs uppercase tracking-wider font-semibold transition-all"
                >
                  Enquire About Your Event
                </a>
              </div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* SECTION B: INTRODUCTION                                                   */}
          {/* ========================================================================= */}
          <section className="py-16 sm:py-20 bg-white border-b border-zinc-200">
            <div
              data-events-reveal
              className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5"
            >
              <div className="flex items-center justify-center space-x-2.5">
                <span className="w-8 h-[2px] bg-[#C5A46D]" />
                <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase font-sans">
                  A WELCOMING SETTING
                </span>
                <span className="w-8 h-[2px] bg-[#C5A46D]" />
              </div>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#173A2B]">
                A Setting for Your Special Moments
              </h2>
              <p className="text-sm sm:text-base text-zinc-700 font-sans leading-relaxed">
                Situated in the tranquil countryside near Amarapur village along the Gandhinagar-Mahudi Highway, Swapna Srushti Resort provides open event lawns, air-conditioned banquet halls, and dedicated celebration spaces. Whether hosting an auspicious marriage ceremony, an anniversary reunion, or a corporate leadership conclave, our team helps coordinate custom pure vegetarian dining, stage arrangements, and guest stays.
              </p>
              <p className="text-xs sm:text-sm text-zinc-500 font-sans italic">
                * Note: Specific venue capacities, stage designs, guest room allocations, and date availability are confirmed directly through discussion with our resort event planners.
              </p>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* SECTION C: EVENT CATEGORIES (6 Categories with GlareHover)                */}
          {/* ========================================================================= */}
          <section id="event-categories" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-events-reveal className="max-w-2xl mb-12">
              <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase font-sans">
                OCCASIONS WE HOST
              </span>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#173A2B] mt-1.5">
                Event Categories
              </h2>
              <p className="text-sm text-zinc-600 mt-2 font-sans leading-relaxed">
                Explore the diverse types of celebrations and gatherings hosted at Swapna Srushti Resort. Click any card below to view detailed event planning guidelines and specific considerations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {EVENTS_DATA.map((event, idx) => (
                <div key={event.slug} data-events-card={idx} className="h-full">
                  <GlareHover
                    width="100%"
                    height="100%"
                    borderRadius="12px"
                    mode="hover"
                    variant="streak"
                    glareColor="#ffffff"
                    glareOpacity={0.35}
                    glareSize={35}
                    softness={0.6}
                    glareAngle={-45}
                    blendMode="screen"
                    rimGlint={true}
                    transitionDuration={700}
                    className="w-full h-full"
                  >
                    <div className="event-card-container bg-white rounded-xl overflow-hidden border border-zinc-200 shadow-md group hover:border-[#C5A46D] flex flex-col justify-between w-full h-full">
                      <Link href={`/events/${event.slug}`} className="block flex-1 group">
                        <div className="relative h-60 overflow-hidden">
                          <img 
                            src={event.image} 
                            alt={`${event.name} at Swapna Srushti Resort`}
                            className="event-card-image w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A46D] font-sans">
                            {event.tagline}
                          </span>
                          <h3 className="event-card-title font-serif font-bold text-2xl text-[#173A2B] mt-1 group-hover:text-[#C5A46D] transition-colors">
                            {event.name}
                          </h3>
                          <p className="text-xs text-zinc-600 mt-2 leading-relaxed font-sans">
                            {event.shortDescription}
                          </p>
                        </div>
                      </Link>

                      <div className="p-6 pt-0 border-t border-zinc-100 flex items-center justify-between">
                        <Link
                          href={`/events/${event.slug}`}
                          className="inline-flex items-center space-x-1.5 text-xs uppercase font-bold text-[#173A2B] hover:text-[#C5A46D] transition-colors"
                        >
                          <span>Explore Details</span>
                          <ArrowRight className="w-4 h-4 event-card-arrow" />
                        </Link>

                        <a
                          href="#event-enquiry"
                          className="px-3.5 py-1.5 rounded-full btn-gold text-[11px] uppercase tracking-wider font-semibold"
                        >
                          Enquire
                        </a>
                      </div>
                    </div>
                  </GlareHover>
                </div>
              ))}
            </div>
          </section>

          {/* ========================================================================= */}
          {/* SECTION D: FEATURED CELEBRATIONS (Editorial Image-and-Text Section)       */}
          {/* ========================================================================= */}
          <section className="py-20 bg-white border-y border-zinc-200 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                <div
                  data-events-reveal="left"
                  className="lg:col-span-6 relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#F7F3E9] h-[380px] sm:h-[460px] group"
                >
                  <img
                    src="/images/sticky-wedding.jpg"
                    alt="Wedding celebrations at Swapna Srushti Resort"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  />
                  <div className="absolute top-4 left-4 bg-[#173A2B]/85 text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                    Signature Celebrations
                  </div>
                </div>

                <div
                  data-events-reveal="right"
                  className="lg:col-span-6 space-y-6"
                >
                  <div>
                    <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase font-sans">
                      FEATURED CELEBRATIONS
                    </span>
                    <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#173A2B] mt-1.5">
                      Destination Weddings &amp; Family Milestones
                    </h2>
                    <p className="text-sm sm:text-base text-zinc-600 mt-3 font-sans leading-relaxed">
                      A destination wedding or milestone celebration at Swapna Srushti Resort harmonises grand Gujarati hospitality with peaceful natural surroundings. From vibrant pre-wedding sangeet evenings to sacred mandap ceremonies and banquet receptions, our grounds provide a versatile canvas.
                    </p>
                  </div>

                  <div className="space-y-3 pt-1 font-sans">
                    <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-[#F7F3E9] border border-zinc-200/80 hover:border-[#C5A46D]/60 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-[#C5A46D] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-serif font-bold text-sm text-[#173A2B]">Extensive Open-Air Lawns</h4>
                        <p className="text-xs text-zinc-600 mt-0.5">Spacious party plots capable of hosting large gatherings with customized staging and dining setups.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-[#F7F3E9] border border-zinc-200/80 hover:border-[#C5A46D]/60 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-[#C5A46D] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-serif font-bold text-sm text-[#173A2B]">Pure Vegetarian Banqueting</h4>
                        <p className="text-xs text-zinc-600 mt-0.5">Customized multi-course catering including traditional Gujarati thalis, Punjabi specialties, and Jain food.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-[#F7F3E9] border border-zinc-200/80 hover:border-[#C5A46D]/60 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-[#C5A46D] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-serif font-bold text-sm text-[#173A2B]">On-Site Guest Accommodation</h4>
                        <p className="text-xs text-zinc-600 mt-0.5">Room block options across cottages, premium rooms, and theme stays to accommodate family and wedding guests.</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      href="/events/weddings"
                      className="group inline-flex items-center space-x-2 px-7 py-3.5 rounded-full btn-gold text-xs uppercase tracking-wider font-bold shadow-lg hover:scale-105 transition-transform"
                    >
                      <span>View Wedding Details</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* SECTION E: PLAN YOUR EVENT (Step-by-Step Practical Guidance)              */}
          {/* ========================================================================= */}
          <section className="py-20 bg-[#F7F3E9]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div data-events-reveal className="max-w-2xl mb-12">
                <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase font-sans">
                  HOW TO ENQUIRE
                </span>
                <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#173A2B] mt-1.5">
                  Plan Your Event with Us
                </h2>
                <p className="text-sm text-zinc-600 mt-2 font-sans leading-relaxed">
                  Follow these practical steps to initiate your event discussion with our resort hospitality team:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-sans">
                
                <div
                  data-events-step="0"
                  className="event-step-card p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm space-y-3 hover:border-[#C5A46D] transition-colors"
                >
                  <div className="event-step-badge w-10 h-10 rounded-full bg-[#173A2B] text-[#C5A46D] flex items-center justify-center font-bold text-sm">
                    01
                  </div>
                  <h4 className="font-serif font-bold text-lg text-[#173A2B]">
                    Choose Event Type
                  </h4>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    Select your occasion: wedding, conference, birthday, festival, family reunion, or one-day picnic.
                  </p>
                </div>

                <div
                  data-events-step="1"
                  className="event-step-card p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm space-y-3 hover:border-[#C5A46D] transition-colors"
                >
                  <div className="event-step-badge w-10 h-10 rounded-full bg-[#173A2B] text-[#C5A46D] flex items-center justify-center font-bold text-sm">
                    02
                  </div>
                  <h4 className="font-serif font-bold text-lg text-[#173A2B]">
                    Share Dates &amp; Count
                  </h4>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    Provide your preferred celebration date, alternate dates, and expected guest count.
                  </p>
                </div>

                <div
                  data-events-step="2"
                  className="event-step-card p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm space-y-3 hover:border-[#C5A46D] transition-colors"
                >
                  <div className="event-step-badge w-10 h-10 rounded-full bg-[#173A2B] text-[#C5A46D] flex items-center justify-center font-bold text-sm">
                    03
                  </div>
                  <h4 className="font-serif font-bold text-lg text-[#173A2B]">
                    Discuss Requirements
                  </h4>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    Discuss catering preferences, audiovisual needs, lawn setups, and guest room blocks.
                  </p>
                </div>

                <div
                  data-events-step="3"
                  className="event-step-card p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm space-y-3 hover:border-[#C5A46D] transition-colors"
                >
                  <div className="event-step-badge w-10 h-10 rounded-full bg-[#173A2B] text-[#C5A46D] flex items-center justify-center font-bold text-sm">
                    04
                  </div>
                  <h4 className="font-serif font-bold text-lg text-[#173A2B]">
                    Confirm Directly
                  </h4>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    Confirm availability, customized tariffs, and formal arrangements directly with the resort.
                  </p>
                </div>

              </div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* SECTION F: EVENT ENQUIRY CTA & REUSABLE FORM                              */}
          {/* ========================================================================= */}
          <section id="event-enquiry" className="py-20 bg-[#173A2B] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                <div data-events-reveal="left" className="lg:col-span-6 space-y-6">
                  <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase font-sans">
                    START YOUR DISCUSSION
                  </span>
                  <div>
                    <EventsCTATitle />
                  </div>
                  <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
                    Tell us about your event, preferred date, and guest requirements. Our team can help you enquire about suitable arrangements, open banquet slots, and accommodation packages.
                  </p>

                  <div className="p-4 rounded-xl bg-black/40 border border-white/10 text-xs text-zinc-300 space-y-2 font-sans">
                    <div className="flex items-center space-x-2 text-[#C5A46D] font-bold">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Direct Resort Event Team</span>
                    </div>
                    <p>Our concierge reviews every inquiry personally to suggest the best lawn, hall, and catering package for your celebration.</p>
                  </div>

                  <div className="pt-2">
                    <a
                      href="tel:+919909922000"
                      className="group inline-flex items-center space-x-2 text-sm font-bold text-[#C5A46D] hover:text-white transition-colors"
                    >
                      <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span>Call Event Coordinator: +91 99099 22000</span>
                    </a>
                  </div>
                </div>

                <div data-events-reveal="right" className="lg:col-span-6">
                  <EventEnquiryForm initialEventType="Weddings" />
                </div>

              </div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* SECTION G: FAQ                                                            */}
          {/* ========================================================================= */}
          <div data-events-reveal>
            <FAQSection
              title="EVENTS & CELEBRATIONS"
              description="Helpful details regarding lawn capacities, catering arrangements, decoration permissions, and booking advance timelines."
              items={EVENTS_FAQS}
              ctaText="Enquire For Events"
              ctaLink="#event-enquiry"
            />
          </div>
        </EventsAnimatedView>
      </main>

      <ResortFooter />
    </div>
  );
}
