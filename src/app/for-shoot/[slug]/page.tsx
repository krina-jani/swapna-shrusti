import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/navigation/Navbar";
import ResortFooter from "@/components/layout/ResortFooter";
import { SHOOT_CATEGORIES } from "@/data/resortData";
import { ArrowLeft, Camera } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SHOOT_CATEGORIES.map((s) => ({
    slug: s.slug,
  }));
}

export default async function ShootDetailPage({ params }: Props) {
  const { slug } = await params;
  const shoot = SHOOT_CATEGORIES.find((s) => s.slug === slug);

  if (!shoot) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3E9] text-[#202522]">
      <Navbar />

      <main className="flex-1">
        <div className="bg-[#202522] text-white py-6 border-b border-zinc-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <Link
              href="/for-shoot"
              className="inline-flex items-center space-x-2 text-xs sm:text-sm text-zinc-300 hover:text-[#C5A46D]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to For Shoot</span>
            </Link>
            <span className="text-xs uppercase font-bold tracking-widest text-[#C5A46D]">
              {shoot.tagline}
            </span>
          </div>
        </div>

        <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-8 space-y-8">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white h-[380px] sm:h-[480px]">
                <img
                  src={shoot.image}
                  alt={shoot.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h1 className="font-serif font-bold text-3xl sm:text-5xl text-[#173A2B]">
                  {shoot.name} Shoots
                </h1>
                <p className="mt-4 text-base text-zinc-700 leading-relaxed font-sans">
                  {shoot.description}
                </p>
                <p className="mt-4 text-sm text-zinc-600 leading-relaxed font-sans">
                  Swapna Srushti offers dedicated vanity rooms for crew and makeup artists, flexible shoot hour slots, generator power hookups, security assistance, and tailored dining packages to support seamless production schedules.
                </p>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-zinc-200 sticky top-28 space-y-6">
                <div>
                  <span className="text-[11px] uppercase font-bold tracking-widest text-[#C5A46D]">
                    Permits & Packages
                  </span>
                  <h3 className="font-serif font-bold text-2xl text-[#173A2B] mt-1">
                    Book Location Permit
                  </h3>
                  <p className="text-xs text-zinc-500 mt-2">
                    Slot reservations for day and multi-day film or photo productions.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <Link
                    href="/contact"
                    className="w-full py-3.5 rounded-full btn-gold text-center block font-bold text-xs uppercase tracking-wider shadow-lg"
                  >
                    Enquire for Shoot Permit
                  </Link>
                </div>

                <div className="text-center pt-2">
                  <a
                    href="tel:+919909922000"
                    className="text-xs text-zinc-500 hover:text-[#173A2B] underline"
                  >
                    Direct Shoot Desk: +91 99099 22000
                  </a>
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

