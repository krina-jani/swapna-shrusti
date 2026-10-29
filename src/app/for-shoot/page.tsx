import React from "react";
import Link from "next/link";
import Navbar from "@/components/navigation/Navbar";
import ResortFooter from "@/components/layout/ResortFooter";
import FAQSection from "@/components/common/FAQSection";
import GlareHover from "@/components/common/GlareHover";
import ShootEnquiryForm from "@/components/for-shoot/ShootEnquiryForm";
import { FOR_SHOOT_FAQS } from "@/data/faqsData";
import {
  Camera,
  Video,
  Film,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Phone,
  Layers,
  MapPin,
  Clock,
  Compass,
  FileCheck2,
  Users,
} from "lucide-react";

export const metadata = {
  title: "Photoshoot & Film Locations Near Gandhinagar | Swapna Srushti",
  description:
    "Explore photoshoot and media-location enquiries at Swapna Srushti Resort near Gandhinagar, Gujarat. Discuss pre-wedding photography, commercial shoots, and filming arrangements.",
  keywords: [
    "Photoshoot location near Gandhinagar",
    "Pre-wedding photoshoot in Gandhinagar",
    "Photoshoot locations in Gujarat",
    "Resort for pre-wedding photography",
    "Commercial photography location in Gujarat",
    "Film shooting location near Gandhinagar",
    "Wedding photography locations near Ahmedabad",
    "Resort photography and videography enquiries",
  ],
};

// 8 Verified Shoot Categories for enquiry
const SHOOT_CATEGORIES_EXPANDED = [
  {
    id: "pre-wedding",
    name: "Pre-Wedding Photography",
    slug: "pre-wedding",
    tagline: "ROMANTIC SCENIC BACKDROPS",
    description: "Couple portraits, engagement photography, romantic concepts, and cinematic pre-wedding videos amidst tranquil nature.",
    image: "/images/shoots/resort-poolside-shoot.jpg",
    cta: "Enquire For Pre-Wedding",
  },
  {
    id: "wedding",
    name: "Wedding Photography",
    slug: "wedding",
    tagline: "CELEBRATION MEMORIES",
    description: "Wedding-day coverage, couple portraits, mandap photography, and captures associated with sacred wedding celebrations.",
    image: "/images/sticky-wedding.jpg",
    cta: "Enquire For Wedding Shoots",
  },
  {
    id: "music-video",
    name: "Music Videos & Artist Shoots",
    slug: "album",
    tagline: "VISUAL EXPRESSION",
    description: "Artist portraits, music performances, promotional videos, and creative visual concepts with diverse backdrops.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
    cta: "Enquire For Music Videos",
  },
  {
    id: "film-production",
    name: "Film & Video Production",
    slug: "film",
    tagline: "CINEMATIC NARRATIVES",
    description: "Short films, cinematic scenes, independent productions, and regional video projects utilizing natural resort grounds.",
    image: "/images/shoots/village-night-shoot.jpg",
    cta: "Enquire For Film Shoots",
  },
  {
    id: "advertising",
    name: "Advertising & Commercial Shoots",
    slug: "ad-film",
    tagline: "COMMERCIAL CAMPAIGNS",
    description: "Brand campaigns, product promotion, lifestyle advertising photography, and commercial video content.",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80",
    cta: "Enquire For Commercials",
  },
  {
    id: "fashion",
    name: "Fashion & Editorial Photography",
    slug: "other-photoshoots",
    tagline: "DESIGNER LOOKBOOKS",
    description: "Fashion portraits, ethnic clothing collections, designer apparel campaigns, and creative editorial photography.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80",
    cta: "Enquire For Fashion Shoots",
  },
  {
    id: "family-maternity",
    name: "Family & Maternity Photography",
    slug: "other-photoshoots",
    tagline: "CHERISHED MILESTONES",
    description: "Heartwarming family portraits, maternity sessions, and milestone photography in peaceful, secure outdoor settings.",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80",
    cta: "Enquire For Family Shoots",
  },
  {
    id: "social-creator",
    name: "Social Media & Creator Content",
    slug: "other-photoshoots",
    tagline: "DIGITAL STORYTELLING",
    description: "Reels, short-form lifestyle videos, promotional brand content, and creator campaigns featuring refreshing nature aesthetics.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80",
    cta: "Enquire For Creator Shoots",
  },
];

// Proposed Location Environments (Section 4)
const LOCATION_ENVIRONMENTS = [
  {
    id: "gardens",
    title: "Gardens & Outdoor Spaces",
    image: "/images/Tropical%20Resort%20Cottages%20at%20Sunset.png",
    description: "Lush botanical lawns, towering palm groves, flower beds, and natural shade provide classic, soft-lit backdrops.",
    useCases: ["Couple portraits", "Family photography", "Fashion photography", "Lifestyle campaigns"],
  },
  {
    id: "poolside",
    title: "Poolside Settings",
    image: "/images/sticky-pool-hd.jpg",
    description: "Crystal water reflections, poolside sundecks, and tropical leisure aesthetics for refreshing, vibrant visuals.",
    useCases: ["Resort lifestyle photography", "Hospitality campaigns", "Promotional videos"],
  },
  {
    id: "accommodation",
    title: "Accommodation Interiors",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    description: "Comfortable room interiors, standalone cottage verandas, and rustic themed stays for indoor lifestyle scenes.",
    useCases: ["Hospitality photography", "Room showcases", "Lifestyle content"],
  },
  {
    id: "event-spaces",
    title: "Event Spaces & Lawns",
    image: "/images/sticky-wedding.jpg",
    description: "Grand party plots and open lawns suited for staged setups, traditional attire, and celebratory narratives.",
    useCases: ["Wedding photography", "Couple portraits", "Event coverage"],
  },
  {
    id: "theme-village",
    title: "Theme Village (Swapnagram)",
    image: "/images/villagetheme/theme-village-3.png",
    description: "Authentic Gujarati and rustic village architecture featuring earthen textures, wooden carvings, and heritage courtyards.",
    useCases: ["Traditional attire", "Cultural concepts", "Creative editorial photography"],
  },
  {
    id: "adventure-recreation",
    title: "Adventure & Recreation Areas",
    image: "/images/sticky-adventure.jpg",
    description: "Dynamic outdoor adventure tracks, obstacle bridges, and open recreation zones for high-energy concepts.",
    useCases: ["Active lifestyle campaigns", "Promotional videos", "Recreational photography"],
  },
];

export default function ForShootPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3E9] text-[#202522]">
      <Navbar />

      <main className="flex-1">
        {/* ========================================================================= */}
        {/* SECTION 2: HERO SECTION                                                   */}
        {/* ========================================================================= */}
        <section className="relative min-h-[480px] sm:min-h-[520px] pt-32 pb-16 sm:pt-40 sm:pb-20 bg-[#173A2B] text-white flex flex-col items-center justify-center text-center px-4 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30 scale-105 transition-transform duration-1000"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1600&q=80')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#173A2B] via-[#173A2B]/80 to-transparent" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase font-sans">
              SHOOT AT SWAPNA SRUSHTI
            </span>
            <h1 className="font-serif font-bold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight">
              Photoshoot &amp; Media Locations
            </h1>
            <p className="text-sm sm:text-base text-zinc-300 font-sans max-w-xl mx-auto leading-relaxed">
              Discover creative possibilities at Swapna Srushti Resort near Gandhinagar, Gujarat. Explore potential settings for pre-wedding photography, cinematic videos, advertising campaigns, fashion portraits, and other creative productions.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#shoot-enquiry"
                className="px-7 py-3 rounded-full btn-gold text-xs uppercase tracking-wider font-bold shadow-lg hover:scale-105 transition-transform font-sans"
              >
                ENQUIRE FOR A SHOOT
              </a>
              <a
                href="#location-showcase"
                className="px-7 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs uppercase tracking-wider font-semibold transition-all font-sans"
              >
                EXPLORE LOCATIONS
              </a>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: INTRODUCTION — A DESTINATION FOR CREATIVE PROJECTS              */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 bg-white border-b border-zinc-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="flex items-center justify-center space-x-2.5">
              <span className="w-8 h-[2px] bg-[#C5A46D]" />
              <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase font-sans">
                A DESTINATION FOR CREATIVE PROJECTS
              </span>
              <span className="w-8 h-[2px] bg-[#C5A46D]" />
            </div>

            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#173A2B]">
              A Setting for Every Story
            </h2>

            <p className="text-sm sm:text-base text-zinc-700 font-sans leading-relaxed">
              Every creative project begins with the right setting. Swapna Srushti Resort offers a destination near Gandhinagar where photographers, couples, content creators, and production teams can enquire about suitable locations for their creative concepts.
            </p>
            <p className="text-sm sm:text-base text-zinc-600 font-sans leading-relaxed">
              From pre-wedding portraits and lifestyle photography to promotional videos and commercial productions, share your vision with the resort team to explore available settings and plan your visit.
            </p>

            {/* Three Visual Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 font-sans text-left">
              <div className="p-5 rounded-xl bg-[#F7F3E9] border border-zinc-200/80 space-y-2">
                <div className="w-9 h-9 rounded-full bg-[#173A2B] text-[#C5A46D] flex items-center justify-center font-bold">
                  <Camera className="w-4 h-4" />
                </div>
                <h3 className="font-serif font-bold text-base text-[#173A2B]">Photography &amp; Portraits</h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Natural daylight, tropical foliage, and tranquil spots ideal for couple portraits and milestone photography.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#F7F3E9] border border-zinc-200/80 space-y-2">
                <div className="w-9 h-9 rounded-full bg-[#173A2B] text-[#C5A46D] flex items-center justify-center font-bold">
                  <Film className="w-4 h-4" />
                </div>
                <h3 className="font-serif font-bold text-base text-[#173A2B]">Cinematic Video Productions</h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Expansive terrain, village sets, and outdoor pathways supporting music video storylines and short films.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#F7F3E9] border border-zinc-200/80 space-y-2">
                <div className="w-9 h-9 rounded-full bg-[#173A2B] text-[#C5A46D] flex items-center justify-center font-bold">
                  <Video className="w-4 h-4" />
                </div>
                <h3 className="font-serif font-bold text-base text-[#173A2B]">Commercial &amp; Brand Content</h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Scenic hospitality aesthetics for fashion collections, brand lookbooks, and lifestyle ad campaigns.
                </p>
              </div>
            </div>

            <p className="text-xs text-zinc-500 font-sans italic pt-2">
              * Note: Specific production types, access hours, and location availability must be confirmed directly with resort management.
            </p>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: LOCATION SHOWCASE — ONE RESORT, MANY POSSIBILITIES             */}
        {/* ========================================================================= */}
        <section id="location-showcase" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase font-sans">
              AVAILABLE SETTINGS &amp; ENVIRONMENTS
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#173A2B] mt-1.5">
              Explore the Setting for Your Next Shoot
            </h2>
            <p className="text-sm text-zinc-600 mt-2 font-sans leading-relaxed">
              Explore potential environments across Swapna Srushti Resort. All area access is subject to scheduling and formal approval by resort management to ensure guest privacy and seamless coordination.
            </p>
          </div>

          <div className="space-y-12">
            {LOCATION_ENVIRONMENTS.map((loc, idx) => (
              <div
                key={loc.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white p-6 sm:p-8 rounded-2xl border border-zinc-200 shadow-sm ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className={`lg:col-span-6 rounded-xl overflow-hidden shadow-md h-72 sm:h-84 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                  <img
                    src={loc.image}
                    alt={`${loc.title} at Swapna Srushti Resort`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Content */}
                <div className={`lg:col-span-6 space-y-4 font-sans ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A46D]">
                    ENVIRONMENT 0{idx + 1}
                  </span>
                  <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#173A2B]">
                    {loc.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    {loc.description}
                  </p>

                  <div className="pt-1">
                    <span className="text-xs font-bold text-zinc-800 uppercase tracking-wider block mb-2">
                      Potential Use Cases:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {loc.useCases.map((uc, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full bg-[#F7F3E9] text-[#173A2B] text-xs border border-zinc-200/90 font-medium"
                        >
                          {uc}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3">
                    <a
                      href="#shoot-enquiry"
                      className="inline-flex items-center space-x-1.5 text-xs uppercase font-bold text-[#173A2B] hover:text-[#C5A46D] transition-colors"
                    >
                      <span>ENQUIRE ABOUT THIS LOCATION</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: SHOOT CATEGORIES (8 Categories with GlareHover)                 */}
        {/* ========================================================================= */}
        <section className="py-20 bg-white border-y border-zinc-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase font-sans">
                CREATIVE PRODUCTIONS WE WELCOME
              </span>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#173A2B] mt-1.5">
                Shoot Categories
              </h2>
              <p className="text-sm text-zinc-600 mt-2 font-sans leading-relaxed">
                Review the types of photography and media shoots you can enquire about at Swapna Srushti Resort. Each project is reviewed individually to confirm appropriate permissions and timings.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SHOOT_CATEGORIES_EXPANDED.map((cat) => (
                <GlareHover
                  key={cat.id}
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
                  <div className="bg-[#F7F3E9] rounded-xl overflow-hidden border border-zinc-200 shadow-sm hover:border-[#C5A46D] transition-all flex flex-col justify-between w-full h-full group">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={cat.image}
                        alt={`${cat.name} at Swapna Srushti Resort`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </div>
                    <div className="p-5 flex-1 flex flex-col justify-between font-sans">
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A46D]">
                          {cat.tagline}
                        </span>
                        <h3 className="font-serif font-bold text-lg text-[#173A2B] mt-1 group-hover:text-[#C5A46D] transition-colors leading-snug">
                          {cat.name}
                        </h3>
                        <p className="text-xs text-zinc-600 mt-2 leading-relaxed">
                          {cat.description}
                        </p>
                      </div>

                      <div className="pt-4 mt-4 border-t border-zinc-200/80">
                        <a
                          href="#shoot-enquiry"
                          className="w-full inline-block text-center py-2 px-3 rounded-full bg-[#173A2B] hover:bg-[#C5A46D] text-white hover:text-[#173A2B] text-[11px] font-bold uppercase tracking-wider transition-colors"
                        >
                          {cat.cta}
                        </a>
                      </div>
                    </div>
                  </div>
                </GlareHover>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6: WHY CONSIDER SWAPNA SRUSHTI?                                   */}
        {/* ========================================================================= */}
        <section className="py-20 bg-[#F7F3E9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase font-sans">
                WHY ENQUIRE WITH US
              </span>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#173A2B] mt-1.5">
                Bring Your Creative Vision to Life
              </h2>
              <p className="text-sm text-zinc-600 mt-2 font-sans leading-relaxed">
                Consider the advantages of coordinating your next photography or filming project on our spacious resort grounds:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-sans">
              <div className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#173A2B] text-[#C5A46D] flex items-center justify-center font-bold">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-base text-[#173A2B]">
                  Varied Visual Settings
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Explore which approved resort environments—from lush palms to rustic village motifs—best suit your photography or production concept.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#173A2B] text-[#C5A46D] flex items-center justify-center font-bold">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-base text-[#173A2B]">
                  Multiple Creative Possibilities
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Discuss whether multiple approved resort locations can be combined within a single coordinated shooting schedule.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#173A2B] text-[#C5A46D] flex items-center justify-center font-bold">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-base text-[#173A2B]">
                  Plan Around Your Concept
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Share your shoot requirements, preferred dates, wardrobe changes, and crew size directly with our production desk for tailored guidance.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#173A2B] text-[#C5A46D] flex items-center justify-center font-bold">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-base text-[#173A2B]">
                  Convenient Gujarat Location
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Located in Amrapur village along the Gandhinagar-Mahudi Highway, approximately 25 km from Gandhinagar and an easy drive from Ahmedabad.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 7: LOCATION GALLERY                                               */}
        {/* ========================================================================= */}
        <section className="py-20 bg-white border-y border-zinc-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase font-sans">
                VISUAL GLIMPSE
              </span>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#173A2B] mt-1.5">
                See the Possibilities
              </h2>
              <p className="text-sm text-zinc-600 mt-2 font-sans leading-relaxed">
                A photographic collection portraying actual resort grounds, cottage exteriors, poolside backdrops, and open event lawns:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-2xl overflow-hidden shadow-md border border-zinc-200 group h-64 sm:h-72">
                <img
                  src="/images/Tropical%20Resort%20Cottages%20at%20Sunset.png"
                  alt="Lush Resort Gardens and Standalone Cottages"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              <div className="rounded-2xl overflow-hidden shadow-md border border-zinc-200 group h-64 sm:h-72">
                <img
                  src="/images/sticky-pool-hd.jpg"
                  alt="Resort Swimming Pool and Palm Reflections"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              <div className="rounded-2xl overflow-hidden shadow-md border border-zinc-200 group h-64 sm:h-72">
                <img
                  src="/images/sticky-wedding.jpg"
                  alt="Open-Air Celebration Lawns and Event Sets"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              <div className="rounded-2xl overflow-hidden shadow-md border border-zinc-200 group h-64 sm:h-72">
                <img
                  src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"
                  alt="Accommodation Interiors and Veranda"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              <div className="rounded-2xl overflow-hidden shadow-md border border-zinc-200 group h-64 sm:h-72">
                <img
                  src="/images/sticky-adventure.jpg"
                  alt="Adventure Park and Activity Tracks"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              <div className="rounded-2xl overflow-hidden shadow-md border border-zinc-200 group h-64 sm:h-72">
                <img
                  src="/images/sticky-picnic.jpg"
                  alt="Lush Manicured Green Grounds"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 8: SHOOT INSPIRATION                                              */}
        {/* ========================================================================= */}
        <section className="py-20 bg-[#F7F3E9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase font-sans">
                CREATIVE CONCEPTS
              </span>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#173A2B] mt-1.5">
                Find Inspiration for Your Next Production
              </h2>
              <p className="text-sm text-zinc-600 mt-2 font-sans leading-relaxed">
                Discover how different creative visions can be realized using the organic and architectural diversity of our resort:
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 font-sans">
              {/* Block A: Romantic Stories */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-zinc-200 shadow-sm space-y-4">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A46D]">
                  STORYLINE 01
                </span>
                <h3 className="font-serif font-bold text-xl text-[#173A2B]">
                  Romantic Stories
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Capture genuine emotions under golden evening light. From serene strolls along palm avenues to candid moments by shimmering pool waters, create a timeless visual portfolio that celebrates your journey together.
                </p>
              </div>

              {/* Block B: Brand & Lifestyle Stories */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-zinc-200 shadow-sm space-y-4">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A46D]">
                  STORYLINE 02
                </span>
                <h3 className="font-serif font-bold text-xl text-[#173A2B]">
                  Brand &amp; Lifestyle Stories
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Frame resort lifestyle, hospitality experiences, and sustainable product stories with natural backdrops. Natural daylight and spacious outdoor areas help consumer brands articulate authenticity and tranquility.
                </p>
              </div>

              {/* Block C: Fashion & Cinematic Stories */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-zinc-200 shadow-sm space-y-4">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A46D]">
                  STORYLINE 03
                </span>
                <h3 className="font-serif font-bold text-xl text-[#173A2B]">
                  Fashion &amp; Cinematic Stories
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Blend traditional Gujarati weaves or contemporary couture with rustic textures and heritage architecture. The juxtaposition of vibrant fabrics against village motifs delivers memorable visual drama for lookbooks and music videos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 9: HOW TO PLAN YOUR SHOOT                                         */}
        {/* ========================================================================= */}
        <section className="py-20 bg-white border-y border-zinc-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase font-sans">
                STEP-BY-STEP PROCESS
              </span>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#173A2B] mt-1.5">
                Plan Your Shoot at Swapna Srushti
              </h2>
              <p className="text-sm text-zinc-600 mt-2 font-sans leading-relaxed">
                Follow these four steps to coordinate your shoot smoothly with our resort management:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-sans">
              <div className="p-6 rounded-2xl bg-[#F7F3E9] border border-zinc-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#173A2B] text-[#C5A46D] flex items-center justify-center font-bold text-sm">
                  01
                </div>
                <h4 className="font-serif font-bold text-lg text-[#173A2B]">
                  Share Your Concept
                </h4>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Tell the resort about your shoot type, creative vision, wardrobe count, and intended use of the photographs or videos.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F7F3E9] border border-zinc-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#173A2B] text-[#C5A46D] flex items-center justify-center font-bold text-sm">
                  02
                </div>
                <h4 className="font-serif font-bold text-lg text-[#173A2B]">
                  Discuss the Location
                </h4>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Share your preferred setting (gardens, poolside, theme village, lawn) and confirm which areas are available on your date.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F7F3E9] border border-zinc-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#173A2B] text-[#C5A46D] flex items-center justify-center font-bold text-sm">
                  03
                </div>
                <h4 className="font-serif font-bold text-lg text-[#173A2B]">
                  Confirm Requirements
                </h4>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Discuss timing slots, crew size, equipment needs, changing room availability, and applicable location tariffs.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F7F3E9] border border-zinc-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#173A2B] text-[#C5A46D] flex items-center justify-center font-bold text-sm">
                  04
                </div>
                <h4 className="font-serif font-bold text-lg text-[#173A2B]">
                  Receive Confirmation
                </h4>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Obtain written confirmation and pass details from the resort before arriving with your crew and production equipment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 10: PRODUCTION REQUIREMENTS & PERMISSIONS                         */}
        {/* ========================================================================= */}
        <section className="py-20 bg-[#173A2B] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12 space-y-3">
              <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase font-sans">
                CHECKLIST FOR CREATIVE TEAMS
              </span>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-white">
                Everything to Confirm Before Your Shoot
              </h2>
              <p className="text-sm text-zinc-300 font-sans leading-relaxed">
                Requirements may differ depending on your production scale. Review these key considerations with our production desk during enquiry:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
              <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <div className="flex items-center space-x-2 text-[#C5A46D] font-bold text-sm">
                  <FileCheck2 className="w-4 h-4" />
                  <span>Permissions &amp; Passes</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Confirm mandatory shooting pass, access hours, and signed registration prior to shoot commencement.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <div className="flex items-center space-x-2 text-[#C5A46D] font-bold text-sm">
                  <Compass className="w-4 h-4" />
                  <span>Drone Operations</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Drone usage requires explicit advance clearance from resort security to protect guest privacy and adhere to aviation norms.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <div className="flex items-center space-x-2 text-[#C5A46D] font-bold text-sm">
                  <Camera className="w-4 h-4" />
                  <span>Equipment &amp; Lighting</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Declare tripods, stands, battery power packs, and heavy lights in your request to ensure safe cable placement.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <div className="flex items-center space-x-2 text-[#C5A46D] font-bold text-sm">
                  <Users className="w-4 h-4" />
                  <span>Crew Size &amp; Access</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Total team headcount (models, clients, stylists, assistants) must match the registered pass limit.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <div className="flex items-center space-x-2 text-[#C5A46D] font-bold text-sm">
                  <Clock className="w-4 h-4" />
                  <span>Timings &amp; Audio</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Adhere strictly to agreed daytime or twilight slots. Amplified music or sound playback requires volume moderation.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <div className="flex items-center space-x-2 text-[#C5A46D] font-bold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Location Fees &amp; Rescheduling</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Confirm applicable tariffs, payment terms, and weather-related rescheduling protocols directly with the resort.
                </p>
              </div>
            </div>

            <div className="pt-8">
              <a
                href="#shoot-enquiry"
                className="px-7 py-3 rounded-full btn-gold text-xs uppercase tracking-wider font-bold shadow-lg hover:scale-105 transition-transform inline-block font-sans"
              >
                DISCUSS YOUR SHOOT REQUIREMENTS
              </a>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 11: SHOOT ENQUIRY FORM                                            */}
        {/* ========================================================================= */}
        <section id="shoot-enquiry" className="py-20 bg-[#F7F3E9]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ShootEnquiryForm />
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 12: SHOOT & PERMITS FAQ                                           */}
        {/* ========================================================================= */}
        <FAQSection
          title="SHOOT & PERMITS"
          description="Guidelines regarding photoshoot booking, commercial permits, drone usage, changing rooms, equipment rules, and timing slots."
          items={FOR_SHOOT_FAQS}
          ctaText="Enquire For Shoots"
          ctaLink="#shoot-enquiry"
        />

        {/* ========================================================================= */}
        {/* SECTION 13: FINAL CALL TO ACTION                                          */}
        {/* ========================================================================= */}
        <section className="py-20 bg-[#173A2B] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase font-sans">
              START YOUR DISCUSSION
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-5xl text-white">
              Have a Creative Project in Mind?
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 font-sans max-w-2xl mx-auto leading-relaxed">
              Whether you are planning a pre-wedding session, a brand campaign, or a video production, share your requirements with Swapna Srushti Resort to discuss available locations and arrangements.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4 font-sans">
              <a
                href="#shoot-enquiry"
                className="px-8 py-3.5 rounded-full btn-gold text-xs uppercase tracking-wider font-bold shadow-lg hover:scale-105 transition-transform"
              >
                ENQUIRE FOR A SHOOT
              </a>
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs uppercase tracking-wider font-semibold transition-all"
              >
                CONTACT THE RESORT
              </Link>
            </div>

            <div className="pt-4">
              <a
                href="tel:+919909922000"
                className="inline-flex items-center space-x-2 text-sm font-bold text-[#C5A46D] hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Production Concierge: +91 99099 22000</span>
              </a>
            </div>
          </div>
        </section>

      </main>

      <ResortFooter />
    </div>
  );
}
