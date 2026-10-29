import React from "react";
import Link from "next/link";
import Navbar from "@/components/navigation/Navbar";
import ResortFooter from "@/components/layout/ResortFooter";
import FAQSection from "@/components/common/FAQSection";
import GlareHover from "@/components/common/GlareHover";
import DiscoverCTA from "@/components/discover/DiscoverCTA";
import { ACTIVITIES_DATA } from "@/data/activitiesData";
import { DISCOVER_FAQS } from "@/data/faqsData";
import {
  ArrowRight,
  Waves,
  Compass,
  Trees,
  Gamepad2,
  CheckCircle2,
  Clock,
  Sparkles,
  Phone,
  ShieldCheck,
  Calendar,
  Tag,
  ArrowUpRight,
} from "lucide-react";

export const metadata = {
  title: "Resort Activities, Day Outings & Packages | Swapna Srushti Resort",
  description: "Discover resort activities, swimming pool facilities, adventure park outings, indoor/outdoor games, stay packages, and day picnics at Swapna Srushti Resort Gandhinagar.",
  keywords: [
    "Swapna Srushti Resort activities",
    "Swapna Srushti Adventure Park",
    "Resort day outing in Gandhinagar",
    "Swapna Srushti Resort packages",
    "Resort stay package near Gandhinagar",
  ],
};

export default function DiscoverPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3E9] text-[#202522]">
      <Navbar />

      <main className="flex-1">
        {/* ========================================================================= */}
        {/* SECTION 1: EXISTING HERO (Preserved unchanged)                            */}
        {/* ========================================================================= */}
        <section className="relative h-80 sm:h-96 bg-[#202522] text-white flex items-center justify-center text-center px-4">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: `url('${ACTIVITIES_DATA[1].image}')`,
            }}
          />
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase">
              RECREATION &amp; FACILITIES
            </span>
            <h1 className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl mt-2">
              Discover Resort Activities
            </h1>
            <p className="text-sm sm:text-base text-zinc-300 mt-3 font-sans max-w-xl mx-auto">
              From peaceful pool sessions and lush garden strolls to active adventure challenges and family games, explore verified experiences at Swapna Srushti Resort.
            </p>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: EXPERIENCE CATEGORIES (Compact Visual Navigation)              */}
        {/* ========================================================================= */}
        <section className="py-10 bg-[#173A2B] text-white border-b border-zinc-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              
              <a
                href="#water-recreation"
                className="group p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#C5A46D] hover:bg-white/10 transition-all flex flex-col items-center text-center space-y-2.5"
              >
                <div className="w-12 h-12 rounded-full bg-[#C5A46D]/15 text-[#C5A46D] flex items-center justify-center group-hover:bg-[#C5A46D] group-hover:text-[#173A2B] transition-colors">
                  <Waves className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-sm sm:text-base text-white group-hover:text-[#C5A46D] transition-colors">
                  Water &amp; Recreation
                </h3>
                <span className="text-[11px] text-zinc-400 font-sans">
                  Pools &amp; Aqua Zones
                </span>
              </a>

              <a
                href="#adventure-activities"
                className="group p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#C5A46D] hover:bg-white/10 transition-all flex flex-col items-center text-center space-y-2.5"
              >
                <div className="w-12 h-12 rounded-full bg-[#C5A46D]/15 text-[#C5A46D] flex items-center justify-center group-hover:bg-[#C5A46D] group-hover:text-[#173A2B] transition-colors">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-sm sm:text-base text-white group-hover:text-[#C5A46D] transition-colors">
                  Adventure &amp; Activities
                </h3>
                <span className="text-[11px] text-zinc-400 font-sans">
                  Ropes &amp; Challenges
                </span>
              </a>

              <a
                href="#leisure-nature"
                className="group p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#C5A46D] hover:bg-white/10 transition-all flex flex-col items-center text-center space-y-2.5"
              >
                <div className="w-12 h-12 rounded-full bg-[#C5A46D]/15 text-[#C5A46D] flex items-center justify-center group-hover:bg-[#C5A46D] group-hover:text-[#173A2B] transition-colors">
                  <Trees className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-sm sm:text-base text-white group-hover:text-[#C5A46D] transition-colors">
                  Leisure &amp; Nature
                </h3>
                <span className="text-[11px] text-zinc-400 font-sans">
                  Swapnagram &amp; Gardens
                </span>
              </a>

              <a
                href="#games-entertainment"
                className="group p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#C5A46D] hover:bg-white/10 transition-all flex flex-col items-center text-center space-y-2.5"
              >
                <div className="w-12 h-12 rounded-full bg-[#C5A46D]/15 text-[#C5A46D] flex items-center justify-center group-hover:bg-[#C5A46D] group-hover:text-[#173A2B] transition-colors">
                  <Gamepad2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-sm sm:text-base text-white group-hover:text-[#C5A46D] transition-colors">
                  Games &amp; Entertainment
                </h3>
                <span className="text-[11px] text-zinc-400 font-sans">
                  Sports &amp; Recreations
                </span>
              </a>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: EXISTING ACTIVITY CARDS (Preserved & Enhanced)                 */}
        {/* ========================================================================= */}
        <section id="activities-grid" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase">
              RESORT EXPERIENCES
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#173A2B] mt-1.5">
              Explore Available Activities
            </h2>
            <p className="text-sm text-zinc-600 mt-2 font-sans leading-relaxed">
              Explore our verified resort facilities and recreational spaces. Click any activity card below to view detailed features, operating schedules, guidelines, and booking instructions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ACTIVITIES_DATA.map((activity) => (
              <GlareHover
                key={activity.slug}
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
                <div className="bg-white rounded-xl overflow-hidden border border-zinc-200 shadow-md group hover:border-[#C5A46D] transition-all flex flex-col justify-between w-full h-full">
                  <Link href={`/discover/${activity.slug}`} className="block flex-1 group">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={activity.image} 
                        alt={`${activity.name} at Swapna Srushti Resort`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A46D]">
                        {activity.tagline}
                      </span>
                      <h3 className="font-serif font-bold text-2xl text-[#173A2B] mt-1 group-hover:text-[#C5A46D] transition-colors">
                        {activity.name}
                      </h3>
                      <p className="text-xs text-zinc-600 mt-2 leading-relaxed font-sans">
                        {activity.shortDescription}
                      </p>
                    </div>
                  </Link>

                  <div className="p-6 pt-0">
                    <Link
                      href={`/discover/${activity.slug}`}
                      className="inline-flex items-center space-x-1.5 text-xs uppercase font-bold text-[#173A2B] hover:text-[#C5A46D] transition-colors"
                    >
                      <span>View Activity Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </GlareHover>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: FEATURED EXPERIENCE (Swimming Pool Editorial)                  */}
        {/* ========================================================================= */}
        <section id="water-recreation" className="py-20 bg-white border-y border-zinc-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#F7F3E9] h-[380px] sm:h-[460px]">
                <img
                  src="/images/exact-pool.jpg"
                  alt="Swapna Srushti Resort Swimming Pool"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3.5 py-1 rounded-full text-xs font-semibold flex items-center space-x-1.5">
                  <Waves className="w-3.5 h-3.5 text-[#C5A46D]" />
                  <span>Resort Swimming Pool</span>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase">
                    FEATURED EXPERIENCE
                  </span>
                  <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#173A2B] mt-1.5">
                    Crystal Waters &amp; Poolside Leisure
                  </h2>
                  <p className="text-sm sm:text-base text-zinc-600 mt-3 font-sans leading-relaxed">
                    Set amid green tropical foliage, the swimming pool at Swapna Srushti Resort provides an inviting aquatic retreat for families, couples, and day travelers. Featuring continuously circulating, treated water and calm sun-lounging areas, it offers the perfect balance of relaxation and open-air enjoyment.
                  </p>
                </div>

                <div className="space-y-3 pt-1">
                  <div className="flex items-start space-x-3 p-3 rounded-xl bg-[#F7F3E9] border border-zinc-200/80">
                    <CheckCircle2 className="w-5 h-5 text-[#C5A46D] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-serif font-bold text-sm text-[#173A2B]">Dedicated Children&apos;s Splash Zone</h4>
                      <p className="text-xs text-zinc-600 font-sans mt-0.5">Shallow, safe wading section designed especially for toddlers and young children.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 rounded-xl bg-[#F7F3E9] border border-zinc-200/80">
                    <CheckCircle2 className="w-5 h-5 text-[#C5A46D] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-serif font-bold text-sm text-[#173A2B]">Complimentary Access for Stay Guests</h4>
                      <p className="text-xs text-zinc-600 font-sans mt-0.5">Residential guests across all room and cottage tiers enjoy inclusive swimming pool hours.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 rounded-xl bg-[#F7F3E9] border border-zinc-200/80">
                    <CheckCircle2 className="w-5 h-5 text-[#C5A46D] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-serif font-bold text-sm text-[#173A2B]">On-Duty Safety Marshals &amp; Clean Facilities</h4>
                      <p className="text-xs text-zinc-600 font-sans mt-0.5">Freshwater showers, private changing rooms, and trained safety staff on deck.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/discover/swimming-pool"
                    className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full btn-gold text-xs uppercase tracking-wider font-bold shadow-lg hover:scale-105 transition-transform"
                  >
                    <span>Explore Swimming Pool Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: ADVENTURE PARK (Dedicated Feature Section)                     */}
        {/* ========================================================================= */}
        <section id="adventure-activities" className="py-20 bg-[#173A2B] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase">
                    OUTDOOR THRILLS
                  </span>
                  <h2 className="font-serif font-bold text-3xl sm:text-4xl text-white mt-1.5">
                    Swapna Srushti Adventure Park
                  </h2>
                  <p className="text-sm sm:text-base text-zinc-300 mt-3 font-sans leading-relaxed">
                    Designed for adventure seekers, corporate team-building challenges, and school groups, the Adventure Park brings thrilling high-rope obstacles, balance challenges, and aerial rides supervised by certified instructors.
                  </p>
                </div>

                {/* Package Context Banner */}
                <div className="p-4 rounded-xl bg-black/40 border border-[#C5A46D]/40 text-xs text-zinc-200 space-y-1.5 font-sans">
                  <div className="flex items-center space-x-2 text-[#C5A46D] font-bold uppercase tracking-wider">
                    <Tag className="w-4 h-4" />
                    <span>Special Package Benefits</span>
                  </div>
                  <p className="text-zinc-300 leading-relaxed">
                    • <strong>Resort Stay Guests:</strong> Receive <strong>50% off</strong> on Adventure Park entry with room reservation.
                  </p>
                  <p className="text-zinc-300 leading-relaxed">
                    • <strong>Day-Outing Package:</strong> Includes Adventure Park entry covering 30 activities, with three adventure activities available on a one-time basis.
                  </p>
                  <span className="text-[10px] text-zinc-400 block italic">Terms subject to confirmation at time of booking.</span>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  {[
                    "High Rope Bridge Crossing",
                    "Suspended Sky Cycling",
                    "Zip-Line Aerial Glide",
                    "Commando Net Climbing",
                    "Archery & Air Rifle Target",
                    "Endurance Obstacle Courses",
                  ].map((act, i) => (
                    <div key={i} className="flex items-center space-x-2 text-xs sm:text-sm text-zinc-200">
                      <ShieldCheck className="w-4 h-4 text-[#C5A46D] shrink-0" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <Link
                    href="/discover/adventure-park"
                    className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full btn-gold text-xs uppercase tracking-wider font-bold shadow-lg hover:scale-105 transition-transform"
                  >
                    <span>View Adventure Park Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6 relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 h-[380px] sm:h-[460px]">
                <img
                  src="/images/sticky-adventure.jpg"
                  alt="Adventure Park at Swapna Srushti"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6: GAMES & RECREATION (Recreational Activities)                    */}
        {/* ========================================================================= */}
        <section id="games-entertainment" className="py-20 bg-[#F7F3E9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase">
                LEISURE &amp; SPORTS
              </span>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#173A2B] mt-1.5">
                Games &amp; Recreation
              </h2>
              <p className="text-sm text-zinc-600 mt-2 font-sans leading-relaxed">
                Enjoy a variety of friendly sports and classic parlor games listed as part of our verified recreational and day-outing offerings.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Outdoor Sports Card */}
              <div className="bg-white rounded-2xl p-8 border border-zinc-200/90 shadow-sm space-y-6">
                <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-[#173A2B] text-[#C5A46D] flex items-center justify-center font-bold">
                      <Trees className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-xl text-[#173A2B]">Outdoor Sports</h3>
                      <span className="text-[11px] text-zinc-500 font-sans">Open-air lawn activities</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-[#C5A46D] uppercase tracking-wider bg-[#F7F3E9] px-2.5 py-1 rounded-full">
                    Day Outing Included
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-[#F7F3E9] border border-zinc-200/80 flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C5A46D] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-serif font-bold text-base text-[#173A2B]">Cricket</h4>
                      <p className="text-xs text-zinc-600 font-sans mt-0.5">Spacious open green pitches suited for casual matches with family and corporate friends.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#F7F3E9] border border-zinc-200/80 flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C5A46D] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-serif font-bold text-base text-[#173A2B]">Badminton</h4>
                      <p className="text-xs text-zinc-600 font-sans mt-0.5">Outdoor courts with nets and loaner racquets for lively rallies under natural shade.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#F7F3E9] border border-zinc-200/80 flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C5A46D] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-serif font-bold text-base text-[#173A2B]">Volleyball</h4>
                      <p className="text-xs text-zinc-600 font-sans mt-0.5">Sand / lawn volleyball court setup encouraging energetic group participation.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Indoor Games Card */}
              <div className="bg-white rounded-2xl p-8 border border-zinc-200/90 shadow-sm space-y-6">
                <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-[#173A2B] text-[#C5A46D] flex items-center justify-center font-bold">
                      <Gamepad2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-xl text-[#173A2B]">Indoor Games</h3>
                      <span className="text-[11px] text-zinc-500 font-sans">Recreation lounge facilities</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-[#C5A46D] uppercase tracking-wider bg-[#F7F3E9] px-2.5 py-1 rounded-full">
                    Lounge Access
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="p-3.5 rounded-xl bg-[#F7F3E9] border border-zinc-200/80 space-y-1">
                    <h4 className="font-serif font-bold text-sm text-[#173A2B]">Pool Table</h4>
                    <p className="text-[11px] text-zinc-600 font-sans">Smooth billiard table with cues and full ball sets.</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#F7F3E9] border border-zinc-200/80 space-y-1">
                    <h4 className="font-serif font-bold text-sm text-[#173A2B]">Foosball</h4>
                    <p className="text-[11px] text-zinc-600 font-sans">Fast-paced table soccer tables for multi-player matches.</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#F7F3E9] border border-zinc-200/80 space-y-1">
                    <h4 className="font-serif font-bold text-sm text-[#173A2B]">Table Tennis</h4>
                    <p className="text-[11px] text-zinc-600 font-sans">Regulation indoor TT table with responsive paddles.</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#F7F3E9] border border-zinc-200/80 space-y-1">
                    <h4 className="font-serif font-bold text-sm text-[#173A2B]">Carrom &amp; Chess</h4>
                    <p className="text-[11px] text-zinc-600 font-sans">Classic traditional Indian parlor boards for strategic leisure.</p>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/discover/games"
                    className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-[#173A2B] hover:text-[#C5A46D] transition-colors"
                  >
                    <span>View Games &amp; Recreation Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 7: THEME VILLAGE & GARDEN (Wide Image & Text)                      */}
        {/* ========================================================================= */}
        <section id="leisure-nature" className="relative py-24 bg-[#202522] text-white overflow-hidden border-y border-zinc-800">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30 scale-105 transition-transform duration-1000"
            style={{
              backgroundImage: "url('/images/Tropical%20Resort%20Cottages%20at%20Sunset.png')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#202522] via-[#202522]/90 to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl space-y-6">
              <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase">
                HERITAGE &amp; TRANQUILITY
              </span>
              <h2 className="font-serif font-bold text-3xl sm:text-5xl text-white">
                Swapnagram Theme Village &amp; Gardens
              </h2>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-sans">
                Experience Gujarat&apos;s celebrated cultural heritage inside Swapnagram, a charming rustic village environment with traditional craftsmanship, thatched architectural motifs, and paved walkways meandering through manicured botanical grounds.
              </p>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                Whether taking an early sunrise walk among flowering bougainvillea or photographing the authentic rural backdrops, the gardens and theme village provide a peaceful counterbalance to the high-energy water and adventure rides.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/discover/garden-area"
                  className="px-7 py-3 rounded-full btn-gold text-xs uppercase tracking-wider font-bold shadow-lg hover:scale-105 transition-all"
                >
                  Explore Garden Trails
                </Link>
                <Link
                  href="/accommodation/cottages"
                  className="px-7 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs uppercase tracking-wider font-semibold transition-all"
                >
                  View Nature Cottages
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 8: PLAN YOUR VISIT (Supplied Package Rates & Timings)             */}
        {/* ========================================================================= */}
        <section id="plan-visit" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase">
                TRANSPARENT TARIFFS &amp; TIMINGS
              </span>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#173A2B] mt-1.5">
                Plan Your Visit &amp; Package Rates
              </h2>
              <p className="text-sm text-zinc-600 mt-2 font-sans leading-relaxed">
                Review the supplied package tariffs for residential stays and day outings. Please note all quoted rates are subject to applicable GST and confirmation by resort reception upon reservation.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Standard Stay Rates Table (7 Cols) */}
              <div className="lg:col-span-7 bg-[#F7F3E9] rounded-2xl p-6 sm:p-8 border border-zinc-200/90 shadow-sm space-y-6">
                <div className="flex items-center justify-between border-b border-zinc-300/70 pb-4">
                  <div>
                    <h3 className="font-serif font-bold text-xl text-[#173A2B]">Standard Stay Package</h3>
                    <p className="text-xs text-zinc-600 font-sans mt-0.5">Per couple, per night (GST extra)</p>
                  </div>
                  <div className="text-right text-xs text-zinc-600 font-sans">
                    <span className="block font-bold text-[#173A2B]">Check-in: 12:00 PM</span>
                    <span className="block">Check-out: 10:00 AM</span>
                  </div>
                </div>

                <div className="divide-y divide-zinc-200/80 font-sans text-xs sm:text-sm">
                  <div className="py-3 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-[#173A2B]">Superior Room</span>
                      <span className="block text-[11px] text-zinc-500">Comfortable room with garden setting</span>
                    </div>
                    <span className="font-bold text-sm sm:text-base text-[#173A2B]">₹5,500 <span className="text-[10px] text-zinc-500 font-normal">/ couple</span></span>
                  </div>

                  <div className="py-3 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-[#173A2B]">Premium Room</span>
                      <span className="block text-[11px] text-zinc-500">Spacious comfort &amp; refined decor</span>
                    </div>
                    <span className="font-bold text-sm sm:text-base text-[#173A2B]">₹6,000 <span className="text-[10px] text-zinc-500 font-normal">/ couple</span></span>
                  </div>

                  <div className="py-3 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-[#173A2B]">Kutchi Huts</span>
                      <span className="block text-[11px] text-zinc-500">Charming rustic heritage architecture</span>
                    </div>
                    <span className="font-bold text-sm sm:text-base text-[#173A2B]">₹6,500 <span className="text-[10px] text-zinc-500 font-normal">/ couple</span></span>
                  </div>

                  <div className="py-3 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-[#173A2B]">Executive Cottage</span>
                      <span className="block text-[11px] text-zinc-500">Private standalone secluded cottage</span>
                    </div>
                    <span className="font-bold text-sm sm:text-base text-[#173A2B]">₹7,500 <span className="text-[10px] text-zinc-500 font-normal">/ couple</span></span>
                  </div>

                  <div className="py-3 flex items-center justify-between bg-white/60 px-3 rounded-lg">
                    <span className="font-semibold text-zinc-700">Extra Person Charge</span>
                    <span className="font-bold text-[#173A2B]">₹2,000 <span className="text-[10px] text-zinc-500 font-normal">+ GST</span></span>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-zinc-200">
                  <span className="text-[11px] text-zinc-500 italic">* Includes 50% off on Adventure Park entry</span>
                  <Link
                    href="/accommodation"
                    className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-[#173A2B] hover:text-[#C5A46D]"
                  >
                    <span>View All Accommodations</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Day-Outing Package Summary (5 Cols) */}
              <div className="lg:col-span-5 bg-[#173A2B] text-white rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
                <div>
                  <span className="text-[10px] font-bold tracking-[0.25em] text-[#C5A46D] uppercase">
                    DAY EXPERIENCE
                  </span>
                  <h3 className="font-serif font-bold text-2xl text-white mt-1">
                    Day-Outing Package
                  </h3>
                  <div className="flex items-baseline space-x-2 mt-2">
                    <span className="font-serif font-bold text-3xl text-[#C5A46D]">₹1,500</span>
                    <span className="text-xs text-zinc-300 font-sans">per person (GST extra)</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-black/30 border border-white/10 space-y-1 text-xs text-zinc-300 font-sans">
                  <div className="flex items-center space-x-2 text-[#C5A46D] font-bold">
                    <Clock className="w-4 h-4" />
                    <span>Operating Hours: 9:00 AM – 5:00 PM</span>
                  </div>
                  <p className="text-zinc-400">Ideal for family getaways, corporate teams, and friend gatherings.</p>
                </div>

                <div className="space-y-2.5 text-xs text-zinc-200 font-sans">
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
                    <span><strong>Full Meals:</strong> Breakfast, Lunch, and High Tea with evening snacks included.</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
                    <span><strong>Adventure Park:</strong> Entry covering 30 activities (plus 3 adventure activities on a one-time basis).</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
                    <span><strong>Sports &amp; Games:</strong> Cricket, badminton, volleyball, pool table, TT, and carrom.</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="w-full py-3.5 rounded-full btn-gold text-center block font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-[1.02] transition-transform"
                  >
                    Enquire for Day Outing
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 9: RESORT PACKAGES (3 Distinct Highlights)                        */}
        {/* ========================================================================= */}
        <section className="py-20 bg-[#F7F3E9] border-t border-zinc-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase">
                TAILORED ESCAPES
              </span>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#173A2B] mt-1.5">
                Popular Resort Packages
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600 mt-2 font-sans">
                Choose the package that aligns with your holiday schedule, from overnight stays to action-packed day visits and upcoming seasonal retreats.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Package 1: Standard Resort Stay Package */}
              <div className="bg-white rounded-2xl overflow-hidden border border-zinc-200 shadow-md flex flex-col justify-between group hover:border-[#C5A46D] transition-all">
                <div>
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src="/images/Tropical%20Resort%20Cottages%20at%20Sunset.png"
                      alt="Standard Resort Stay Package"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-[#173A2B]/85 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                      Overnight Stay
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="font-serif font-bold text-2xl text-[#173A2B]">
                      Standard Resort Stay
                    </h3>
                    <div className="flex items-baseline space-x-1">
                      <span className="text-xs text-zinc-500">From</span>
                      <span className="font-serif font-bold text-xl text-[#173A2B]">₹5,500</span>
                      <span className="text-[11px] text-zinc-500 font-sans">/ couple per night + GST</span>
                    </div>
                    <p className="text-xs text-zinc-600 font-sans leading-relaxed">
                      Relax in Superior Rooms, Premium Rooms, Kutchi Huts, or Executive Cottages with swimming pool access, garden strolls, and 50% discount on Adventure Park entry.
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-zinc-100 flex items-center justify-between">
                  <span className="text-[11px] text-zinc-500">12:00 PM – 10:00 AM</span>
                  <Link
                    href="/accommodation"
                    className="px-4 py-2 rounded-full btn-gold text-xs uppercase tracking-wider font-semibold"
                  >
                    View Rooms
                  </Link>
                </div>
              </div>

              {/* Package 2: Resort & Adventure Park Day Outing */}
              <div className="bg-white rounded-2xl overflow-hidden border-2 border-[#C5A46D] shadow-xl flex flex-col justify-between relative group">
                <div className="absolute top-0 right-0 bg-[#C5A46D] text-[#173A2B] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-bl-xl z-10">
                  Most Popular
                </div>
                <div>
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src="/images/sticky-picnic.jpg"
                      alt="Resort & Adventure Park Day Outing"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-[#173A2B]/85 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                      Full Day Picnic
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="font-serif font-bold text-2xl text-[#173A2B]">
                      Day Outing &amp; Adventure
                    </h3>
                    <div className="flex items-baseline space-x-1">
                      <span className="font-serif font-bold text-xl text-[#C5A46D]">₹1,500</span>
                      <span className="text-[11px] text-zinc-500 font-sans">/ person + GST</span>
                    </div>
                    <p className="text-xs text-zinc-600 font-sans leading-relaxed">
                      A complete 9:00 AM to 5:00 PM day experience with breakfast, lunch, high tea with snacks, 30 adventure activities, and open indoor/outdoor sports access.
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-zinc-100 flex items-center justify-between">
                  <span className="text-[11px] text-zinc-500">9:00 AM – 5:00 PM</span>
                  <Link
                    href="/contact"
                    className="px-4 py-2 rounded-full btn-gold text-xs uppercase tracking-wider font-semibold"
                  >
                    Enquire Now
                  </Link>
                </div>
              </div>

              {/* Package 3: Diwali Stay Package */}
              <div className="bg-white rounded-2xl overflow-hidden border border-zinc-200 shadow-md flex flex-col justify-between group hover:border-[#C5A46D] transition-all">
                <div>
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src="/images/sticky-wedding.jpg"
                      alt="Diwali Stay Package"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-[#202522]/85 text-[#C5A46D] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                      Seasonal Festive
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="font-serif font-bold text-2xl text-[#173A2B]">
                      Diwali Stay Package
                    </h3>
                    <div className="flex items-baseline space-x-1">
                      <span className="text-xs text-amber-700 font-bold uppercase tracking-wider">Seasonal Dates Apply</span>
                    </div>
                    <p className="text-xs text-zinc-600 font-sans leading-relaxed">
                      Special holiday stay packages for the festive Diwali season featuring festive Gujarati dining and illuminated evening grounds. <em>Note: Festive dates, inclusions, and tariffs require confirmation with the resort prior to booking.</em>
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-zinc-100 flex items-center justify-between">
                  <span className="text-[11px] text-zinc-500">Advance Enquiry Only</span>
                  <Link
                    href="/contact"
                    className="px-4 py-2 rounded-full border border-zinc-300 text-xs uppercase tracking-wider font-semibold text-[#173A2B] hover:border-[#173A2B]"
                  >
                    Confirm Dates
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 10: GALLERY PREVIEW (Visual Mosaic Layout)                         */}
        {/* ========================================================================= */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase">
                  CAPTURED MOMENTS
                </span>
                <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#173A2B] mt-1.5">
                  Resort Experience Gallery
                </h2>
                <p className="text-sm text-zinc-600 mt-2 font-sans">
                  Real photographs showcasing our swimming pool, adventure zones, cottages, gardens, and dining spaces.
                </p>
              </div>

              <Link
                href="/gallery"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-full border border-[#173A2B] text-xs uppercase tracking-wider font-bold text-[#173A2B] hover:bg-[#173A2B] hover:text-white transition-all shrink-0 self-start md:self-auto"
              >
                <span>View Full Photo Gallery</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Varied Editorial Layout (Grid Mosaic) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4">
              
              {/* Large item 1: Swimming pool (7 cols) */}
              <div className="lg:col-span-7 h-72 sm:h-80 rounded-2xl overflow-hidden shadow-md group relative">
                <img
                  src="/images/pool-hd.jpg"
                  alt="Swimming Pool at Swapna Srushti Resort"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex items-end">
                  <span className="text-white text-sm font-serif font-bold">Swimming Pool &amp; Palms</span>
                </div>
              </div>

              {/* Item 2: Adventure Park (5 cols) */}
              <div className="lg:col-span-5 h-72 sm:h-80 rounded-2xl overflow-hidden shadow-md group relative">
                <img
                  src="/images/sticky-adventure.jpg"
                  alt="Adventure Park rope bridge challenges"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex items-end">
                  <span className="text-white text-sm font-serif font-bold">Adventure Park Challenges</span>
                </div>
              </div>

              {/* Item 3: Theme Village Cottages (4 cols) */}
              <div className="lg:col-span-4 h-64 sm:h-72 rounded-2xl overflow-hidden shadow-md group relative">
                <img
                  src="/images/Tropical%20Resort%20Cottages%20at%20Sunset.png"
                  alt="Nature Cottages & Theme Village"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex items-end">
                  <span className="text-white text-sm font-serif font-bold">Swapnagram Cottages</span>
                </div>
              </div>

              {/* Item 4: Garden Area (4 cols) */}
              <div className="lg:col-span-4 h-64 sm:h-72 rounded-2xl overflow-hidden shadow-md group relative">
                <img
                  src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80"
                  alt="Manicured Green Lawn & Walking Trails"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex items-end">
                  <span className="text-white text-sm font-serif font-bold">Botanical Garden Trails</span>
                </div>
              </div>

              {/* Item 5: Dining & Cuisine (4 cols) */}
              <div className="lg:col-span-4 h-64 sm:h-72 rounded-2xl overflow-hidden shadow-md group relative">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
                  alt="Pure Vegetarian Dining Hall"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex items-end">
                  <span className="text-white text-sm font-serif font-bold">Pure Vegetarian Restaurant</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 11: FREQUENTLY ASKED QUESTIONS (Preserved reference design)       */}
        {/* ========================================================================= */}
        <FAQSection
          title="EXPERIENCES & PACKAGES"
          description="Verified answers regarding day outing inclusions, swimming pool guidelines, package rates, and adventure access at Swapna Srushti Resort."
          items={DISCOVER_FAQS}
          ctaText="Contact Concierge"
          ctaLink="/contact"
        />

        <DiscoverCTA />

      </main>

      <ResortFooter />
    </div>
  );
}
