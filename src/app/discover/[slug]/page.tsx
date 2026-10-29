import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/navigation/Navbar";
import ResortFooter from "@/components/layout/ResortFooter";
import FAQSection from "@/components/common/FAQSection";
import { ACTIVITIES_DATA, ActivityDetail } from "@/data/activitiesData";
import {
  Check,
  ArrowLeft,
  ArrowRight,
  Clock,
  Info,
  ShieldCheck,
  Phone,
  ChevronRight,
  Home,
  Sparkles,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ACTIVITIES_DATA.map((act) => ({
    slug: act.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const activity = ACTIVITIES_DATA.find((a) => a.slug === slug);

  if (!activity) {
    return {
      title: "Activity Not Found | Swapna Srushti Resort",
    };
  }

  return {
    title: activity.seoTitle,
    description: activity.seoDescription,
    keywords: [
      `Swapna Srushti Resort ${activity.name}`,
      `${activity.name} Gandhinagar`,
      "Swapna Srushti activities",
      "Swapna Srushti Resort facilities",
    ],
  };
}

export default async function ActivityDetailPage({ params }: Props) {
  const { slug } = await params;
  const activity = ACTIVITIES_DATA.find((a) => a.slug === slug);

  if (!activity) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3E9] text-[#202522]">
      <Navbar />

      <main className="flex-1">
        {/* ========================================================================= */}
        {/* SECTION 1: ACTIVITY HERO                                                 */}
        {/* ========================================================================= */}
        <section className="relative bg-[#173A2B] text-white pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden border-b border-zinc-800">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30 scale-105 transition-transform duration-1000"
            style={{ backgroundImage: `url('${activity.image}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#173A2B] via-[#173A2B]/80 to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumbs: Home > Discover > Activity Name */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center space-x-2 text-xs uppercase tracking-wider text-zinc-300 mb-6"
            >
              <Link href="/" className="hover:text-[#C5A46D] transition-colors flex items-center space-x-1">
                <Home className="w-3.5 h-3.5" />
                <span>Home</span>
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-zinc-500" />
              <Link href="/discover" className="hover:text-[#C5A46D] transition-colors">
                Discover
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-zinc-500" />
              <span className="text-[#C5A46D] font-bold">{activity.name}</span>
            </nav>

            <div className="max-w-3xl">
              <span className="inline-block text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase mb-2">
                {activity.tagline}
              </span>
              <h1 className="font-serif font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight">
                {activity.name}
              </h1>
              <p className="mt-4 text-sm sm:text-base text-zinc-200 leading-relaxed font-sans max-w-2xl">
                {activity.shortDescription}
              </p>
            </div>
          </div>
        </section>

        {/* Content Wrapper */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Main Editorial Body (8 Columns) */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* SECTION 2: ABOUT THIS ACTIVITY */}
              <section className="bg-white p-8 sm:p-10 rounded-2xl border border-zinc-200/90 shadow-sm space-y-5">
                <div className="flex items-center space-x-3">
                  <span className="w-8 h-[2px] bg-[#C5A46D]" />
                  <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase">
                    OVERVIEW
                  </span>
                </div>
                <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#173A2B]">
                  About This Experience
                </h2>
                <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-sans">
                  {activity.fullDescription}
                </p>
                <div className="p-4 rounded-xl bg-[#F7F3E9] border border-zinc-200/80 text-xs sm:text-sm text-zinc-600 leading-relaxed font-sans">
                  <p>{activity.overviewNotes}</p>
                </div>
              </section>

              {/* SECTION 3: FEATURES AND FACILITIES */}
              <section className="bg-white p-8 sm:p-10 rounded-2xl border border-zinc-200/90 shadow-sm space-y-6">
                <div className="flex items-center space-x-3">
                  <span className="w-8 h-[2px] bg-[#C5A46D]" />
                  <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase">
                    CONFIRMED AMENITIES
                  </span>
                </div>
                <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#173A2B]">
                  Features &amp; Highlights
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  {activity.verifiedFeatures.map((feature, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#F7F3E9] border border-zinc-200/80 flex items-start space-x-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#173A2B] text-[#C5A46D] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-medium text-xs sm:text-sm text-[#173A2B] leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* SECTION 4: ACTIVITY GALLERY */}
              <section className="bg-white p-8 sm:p-10 rounded-2xl border border-zinc-200/90 shadow-sm space-y-6">
                <div className="flex items-center space-x-3">
                  <span className="w-8 h-[2px] bg-[#C5A46D]" />
                  <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase">
                    VISUAL HIGHLIGHTS
                  </span>
                </div>
                <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#173A2B]">
                  Activity Gallery
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activity.gallery.map((imgUrl, i) => (
                    <div
                      key={i}
                      className="rounded-xl overflow-hidden border border-zinc-200 shadow-md h-64 group"
                    >
                      <img
                        src={imgUrl}
                        alt={`${activity.name} photograph ${i + 1} at Swapna Srushti Resort`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  ))}
                </div>
              </section>

              {/* SECTION 5: VISITOR INFORMATION */}
              <section className="bg-[#202522] text-white p-8 sm:p-10 rounded-2xl border border-zinc-800 shadow-lg space-y-6">
                <div className="flex items-center space-x-3">
                  <span className="w-8 h-[2px] bg-[#C5A46D]" />
                  <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase">
                    PRACTICAL GUIDANCE
                  </span>
                </div>
                <h2 className="font-serif font-bold text-2xl sm:text-3xl text-white">
                  Visitor Information
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  {activity.visitorInformation.hours && (
                    <div className="space-y-1.5 p-4 rounded-xl bg-black/30 border border-zinc-800">
                      <div className="flex items-center space-x-2 text-[#C5A46D] text-xs font-bold uppercase tracking-wider">
                        <Clock className="w-4 h-4" />
                        <span>Operating Hours</span>
                      </div>
                      <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                        {activity.visitorInformation.hours}
                      </p>
                    </div>
                  )}

                  {activity.visitorInformation.admissionNotes && (
                    <div className="space-y-1.5 p-4 rounded-xl bg-black/30 border border-zinc-800">
                      <div className="flex items-center space-x-2 text-[#C5A46D] text-xs font-bold uppercase tracking-wider">
                        <Info className="w-4 h-4" />
                        <span>Admission &amp; Access</span>
                      </div>
                      <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                        {activity.visitorInformation.admissionNotes}
                      </p>
                    </div>
                  )}

                  {activity.visitorInformation.safetyInstructions && (
                    <div className="sm:col-span-2 space-y-1.5 p-4 rounded-xl bg-black/30 border border-zinc-800">
                      <div className="flex items-center space-x-2 text-[#C5A46D] text-xs font-bold uppercase tracking-wider">
                        <ShieldCheck className="w-4 h-4" />
                        <span>Safety Guidelines</span>
                      </div>
                      <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                        {activity.visitorInformation.safetyInstructions}
                      </p>
                    </div>
                  )}
                </div>

                {activity.visitorInformation.enquiryGuidance && (
                  <p className="text-xs text-zinc-400 italic pt-2 border-t border-zinc-800/80 font-sans">
                    {activity.visitorInformation.enquiryGuidance}
                  </p>
                )}
              </section>

              {/* Return to Discover link */}
              <div className="pt-2">
                <Link
                  href="/discover"
                  className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#173A2B] hover:text-[#C5A46D] transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Explore All Resort Activities</span>
                </Link>
              </div>

            </div>

            {/* Sidebar Sticky Card (4 Columns) */}
            <aside className="lg:col-span-4 sticky top-28 space-y-6">
              
              {/* SECTION 8: ENQUIRY CARD */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-zinc-200/90 shadow-xl space-y-6">
                <div>
                  <span className="text-[11px] uppercase font-bold tracking-widest text-[#C5A46D]">
                    PLAN YOUR VISIT
                  </span>
                  <h3 className="font-serif font-bold text-2xl text-[#173A2B] mt-1">
                    Enquire About {activity.name}
                  </h3>
                  <p className="text-xs text-zinc-600 mt-2 font-sans leading-relaxed">
                    Contact Swapna Srushti Resort to confirm operational schedules, package bundles, and group arrangements for this activity.
                  </p>
                </div>

                <div className="space-y-3 pt-1">
                  <Link
                    href={activity.enquiryLink}
                    className="w-full py-3.5 rounded-full btn-gold text-center block font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-[1.02] transition-transform"
                  >
                    Enquire About This Activity
                  </Link>

                  <Link
                    href="/accommodation"
                    className="w-full py-3 rounded-full border border-zinc-300 text-center block font-semibold text-xs uppercase tracking-wider text-[#173A2B] hover:border-[#173A2B] transition-colors"
                  >
                    View Stay Packages
                  </Link>
                </div>

                <div className="pt-3 border-t border-zinc-100 text-center space-y-1">
                  <p className="text-[11px] text-zinc-500">Direct Concierge Desk</p>
                  <a
                    href="tel:+919909922000"
                    className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#173A2B] hover:text-[#C5A46D] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C5A46D]" />
                    <span>+91 99099 22000</span>
                  </a>
                </div>
              </div>

              {/* SECTION 7: RELATED RESORT EXPERIENCES */}
              <div className="bg-white p-6 rounded-2xl border border-zinc-200/90 shadow-md space-y-4">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-[#C5A46D]" />
                  <h4 className="font-serif font-bold text-base text-[#173A2B]">
                    Related Experiences
                  </h4>
                </div>
                <div className="space-y-3 pt-1">
                  {activity.relatedActivities.map((rel, index) => (
                    <Link
                      key={index}
                      href={`/discover/${rel.slug}`}
                      className="group flex items-center space-x-3 p-2 rounded-xl hover:bg-[#F7F3E9] transition-colors"
                    >
                      <img
                        src={rel.image}
                        alt={rel.name}
                        className="w-14 h-14 rounded-lg object-cover shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h5 className="font-serif font-bold text-sm text-[#173A2B] group-hover:text-[#C5A46D] transition-colors truncate">
                          {rel.name}
                        </h5>
                        <p className="text-[11px] text-zinc-500 truncate font-sans">
                          {rel.tagline}
                        </p>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-[#C5A46D] shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>

            </aside>

          </div>
        </div>

        {/* SECTION 6: FREQUENTLY ASKED QUESTIONS */}
        <FAQSection
          title={`${activity.name.toUpperCase()} FAQS`}
          description={`Verified questions and visitor answers regarding ${activity.name} access, timings, policies, and booking guidance at Swapna Srushti Resort.`}
          items={activity.faqs}
          ctaText="Enquire Now"
          ctaLink={activity.enquiryLink}
        />

        {/* SECTION 8 (Closing Banner): PLAN YOUR EXPERIENCE */}
        <section className="py-20 bg-[#173A2B] text-white border-t border-zinc-800 text-center px-4">
          <div className="max-w-3xl mx-auto space-y-5">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase">
              GET IN TOUCH
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-5xl text-white">
              Plan Your Experience at Swapna Srushti
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 font-sans max-w-xl mx-auto leading-relaxed">
              Contact Swapna Srushti Resort to learn more about this activity, availability, and applicable booking arrangements.
            </p>
            <div className="pt-3 flex flex-wrap justify-center items-center gap-4">
              <Link
                href={activity.enquiryLink}
                className="px-8 py-3.5 rounded-full btn-gold text-xs uppercase tracking-wider font-bold shadow-xl hover:scale-105 transition-all"
              >
                Enquire About This Activity
              </Link>
              <Link
                href="/discover"
                className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs uppercase tracking-wider font-semibold transition-all"
              >
                Browse All Activities
              </Link>
            </div>
          </div>
        </section>

      </main>

      <ResortFooter />
    </div>
  );
}
