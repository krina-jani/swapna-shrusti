import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/navigation/Navbar";
import ResortFooter from "@/components/layout/ResortFooter";
import { EVENTS } from "@/data/resortData";
import { ArrowLeft, Send } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return EVENTS.map((event) => ({
    slug: event.slug,
  }));
}

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params;
  const event = EVENTS.find((e) => e.slug === slug);

  if (!event) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3E9] text-[#202522]">
      <Navbar />

      <main className="flex-1">
        <div className="bg-[#173A2B] text-white py-6 border-b border-zinc-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <Link
              href="/events"
              className="inline-flex items-center space-x-2 text-xs sm:text-sm text-zinc-300 hover:text-[#C5A46D]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Events</span>
            </Link>
            <span className="text-xs uppercase font-bold tracking-widest text-[#C5A46D]">
              {event.tagline}
            </span>
          </div>
        </div>

        <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-7 space-y-8">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white h-[380px] sm:h-[480px]">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h1 className="font-serif font-bold text-3xl sm:text-5xl text-[#173A2B]">
                  {event.name}
                </h1>
                <p className="mt-4 text-base text-zinc-700 leading-relaxed font-sans">
                  {event.description}
                </p>
                <p className="mt-4 text-sm text-zinc-600 leading-relaxed font-sans">
                  Our dedicated events management team provides end-to-end planning: customized floral decorations, state-of-the-art sound and lighting, photography permits, guest cottage arrangements, and royal vegetarian banquet menus.
                </p>
              </div>
            </div>

            {/* Event Enquiry Form Card */}
            <div className="lg:col-span-5">
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-zinc-200 sticky top-28 space-y-5">
                <div>
                  <span className="text-[11px] uppercase font-bold tracking-widest text-[#C5A46D]">
                    Event Enquiry
                  </span>
                  <h3 className="font-serif font-bold text-2xl text-[#173A2B] mt-1">
                    Book {event.name}
                  </h3>
                  <p className="text-xs text-zinc-500 mt-1">
                    Tell us your event requirements and our banquet coordinator will reach out promptly.
                  </p>
                </div>

                <form className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-zinc-700">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      className="w-full mt-1 px-3.5 py-2.5 rounded-lg border border-zinc-300 text-sm focus:outline-none focus:border-[#C5A46D]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-zinc-700">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full mt-1 px-3.5 py-2.5 rounded-lg border border-zinc-300 text-sm focus:outline-none focus:border-[#C5A46D]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-semibold text-zinc-700">Approx Date</label>
                      <input
                        type="date"
                        className="w-full mt-1 px-3 py-2 rounded-lg border border-zinc-300 text-xs focus:outline-none focus:border-[#C5A46D]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-zinc-700">Guest Count</label>
                      <input
                        type="number"
                        placeholder="e.g. 150"
                        className="w-full mt-1 px-3 py-2 rounded-lg border border-zinc-300 text-xs focus:outline-none focus:border-[#C5A46D]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-zinc-700">Special Notes / Requirements</label>
                    <textarea
                      rows={3}
                      placeholder="Let us know catering preferences, decoration themes, or stay requirements..."
                      className="w-full mt-1 px-3.5 py-2.5 rounded-lg border border-zinc-300 text-sm focus:outline-none focus:border-[#C5A46D]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full btn-gold text-center block font-bold text-xs uppercase tracking-wider shadow-lg"
                  >
                    Submit Event Enquiry
                  </button>
                </form>

                <div className="text-center pt-1">
                  <a
                    href="tel:+919909922000"
                    className="text-xs text-zinc-500 hover:text-[#173A2B] underline"
                  >
                    Direct Event Desk: +91 99099 22000
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

