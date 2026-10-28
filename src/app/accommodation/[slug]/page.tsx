import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/navigation/Navbar";
import ResortFooter from "@/components/layout/ResortFooter";
import { ACCOMMODATIONS } from "@/data/resortData";
import { Users, Check, ArrowLeft, Calendar, ShieldCheck } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ACCOMMODATIONS.map((room) => ({
    slug: room.slug,
  }));
}

export default async function RoomDetailPage({ params }: Props) {
  const { slug } = await params;
  const room = ACCOMMODATIONS.find((r) => r.slug === slug);

  if (!room) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3E9] text-[#202522]">
      <Navbar />

      <main className="flex-1">
        {/* Breadcrumb & Top Bar */}
        <div className="bg-[#173A2B] text-white py-6 border-b border-zinc-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <Link
              href="/accommodation"
              className="inline-flex items-center space-x-2 text-xs sm:text-sm text-zinc-300 hover:text-[#C5A46D]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Accommodations</span>
            </Link>
            <span className="text-xs uppercase font-bold tracking-widest text-[#C5A46D]">
              {room.tagline}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left 8 Cols: Images & Details */}
            <div className="lg:col-span-8 space-y-8">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white h-[380px] sm:h-[480px]">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h1 className="font-serif font-bold text-3xl sm:text-5xl text-[#173A2B]">
                  {room.name}
                </h1>
                <p className="mt-4 text-base text-zinc-700 leading-relaxed font-sans">
                  {room.description}
                </p>
              </div>

              {/* Amenities Grid */}
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md border border-zinc-200">
                <h3 className="font-serif font-bold text-2xl text-[#173A2B] mb-4">
                  Room Features & Amenities
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {room.amenities.map((a, i) => (
                    <div key={i} className="flex items-center space-x-2 text-sm text-zinc-700">
                      <Check className="w-4 h-4 text-[#C5A46D] shrink-0" />
                      <span>{a}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 4 Cols: Booking Sidebar Card */}
            <div className="lg:col-span-4">
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-zinc-200 sticky top-28 space-y-6">
                <div>
                  <span className="text-[11px] uppercase font-bold tracking-widest text-[#C5A46D]">
                    Instant Reservation
                  </span>
                  <h3 className="font-serif font-bold text-2xl text-[#173A2B] mt-1">
                    Book {room.name}
                  </h3>
                  <div className="flex items-center space-x-2 mt-2 text-xs text-zinc-500">
                    <Users className="w-4 h-4 text-[#C5A46D]" />
                    <span>Occupancy: {room.capacity}</span>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-[#F7F3E9] border border-zinc-200 text-xs text-zinc-700 space-y-2">
                  <div className="flex items-center space-x-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Complimentary Farm Breakfast Included</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Free Access to Swimming Pool & Gardens</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>100% Verified Cleaned & Sanitized Rooms</span>
                  </div>
                </div>

                <Link
                  href={`/booking?room=${room.slug}`}
                  className="w-full py-3.5 rounded-full btn-gold text-center block font-bold text-xs uppercase tracking-wider shadow-lg"
                >
                  Reserve This Room
                </Link>

                <div className="text-center">
                  <a
                    href="tel:+919909922000"
                    className="text-xs text-zinc-500 hover:text-[#173A2B] underline"
                  >
                    Need assistance? Call +91 99099 22000
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

