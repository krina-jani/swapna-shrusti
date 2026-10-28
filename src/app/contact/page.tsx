import React from "react";
import Navbar from "@/components/navigation/Navbar";
import ResortFooter from "@/components/layout/ResortFooter";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { RESORT_INFO } from "@/data/resortData";

export const metadata = {
  title: "Contact Concierge — Swapna Srushti Resort",
  description: "Get in touch with Swapna Srushti Resort for bookings, wedding inquiries, picnic packages, and location permits.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3E9] text-[#202522]">
      <Navbar />

      <main className="flex-1">
        <section className="relative h-80 sm:h-96 bg-[#173A2B] text-white flex items-center justify-center text-center px-4">
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase">
              REACH OUT TO US
            </span>
            <h1 className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl mt-2">
              Contact & Directions
            </h1>
            <p className="text-sm sm:text-base text-zinc-300 mt-3 font-sans max-w-xl mx-auto">
              We are delighted to assist with your room reservations, weddings, picnics, or photoshoot permit queries.
            </p>
          </div>
        </section>

        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Details Left */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold tracking-[0.2em] text-[#C5A46D] uppercase">
                  CONCIERGE DESK
                </span>
                <h2 className="font-serif font-bold text-3xl text-[#173A2B] mt-1">
                  How to Find & Reach Us
                </h2>
                <p className="text-sm text-zinc-600 mt-3 font-sans">
                  Located conveniently on the Gandhinagar-Mahudi Highway, within pleasant driving distance from Ahmedabad Airport and Gandhinagar Railway Station.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-5 rounded-xl bg-white border border-zinc-200/80 shadow-sm flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-[#C5A46D] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-sm text-[#173A2B]">Resort Address</h4>
                    <p className="text-xs text-zinc-600 mt-1 leading-relaxed">{RESORT_INFO.address}</p>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-white border border-zinc-200/80 shadow-sm flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-[#C5A46D] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-sm text-[#173A2B]">Call & WhatsApp</h4>
                    <p className="text-xs text-zinc-600 mt-1">{RESORT_INFO.phone}</p>
                    <span className="text-[11px] text-zinc-400">Lines open 9:00 AM – 9:00 PM IST</span>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-white border border-zinc-200/80 shadow-sm flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-[#C5A46D] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-sm text-[#173A2B]">Email Inquiries</h4>
                    <p className="text-xs text-zinc-600 mt-1">{RESORT_INFO.email}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Right */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-zinc-200 space-y-6">
                <div>
                  <h3 className="font-serif font-bold text-2xl text-[#173A2B]">
                    Send a Message to Front Desk
                  </h3>
                  <p className="text-xs text-zinc-500 mt-1">
                    Fill out the form below and we will respond within 24 hours.
                  </p>
                </div>

                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-zinc-700">Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full mt-1 px-3.5 py-2.5 rounded-lg border border-zinc-300 text-sm focus:outline-none focus:border-[#C5A46D]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-zinc-700">Phone Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 99099 22000"
                        className="w-full mt-1 px-3.5 py-2.5 rounded-lg border border-zinc-300 text-sm focus:outline-none focus:border-[#C5A46D]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-zinc-700">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="w-full mt-1 px-3.5 py-2.5 rounded-lg border border-zinc-300 text-sm focus:outline-none focus:border-[#C5A46D]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-zinc-700">Inquiry Subject</label>
                      <select className="w-full mt-1 px-3.5 py-2.5 rounded-lg border border-zinc-300 text-sm focus:outline-none focus:border-[#C5A46D]">
                        <option>Room Stay Reservation</option>
                        <option>Wedding & Reception Banquet</option>
                        <option>One-Day Picnic Package</option>
                        <option>Corporate Conference</option>
                        <option>Photoshoot / Film Location Permit</option>
                        <option>General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-zinc-700">Your Message</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Please share details such as dates, number of guests, or specific requests..."
                      className="w-full mt-1 px-3.5 py-2.5 rounded-lg border border-zinc-300 text-sm focus:outline-none focus:border-[#C5A46D]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full btn-gold text-center block font-bold text-xs uppercase tracking-wider shadow-lg"
                  >
                    Send Inquiry Now
                  </button>
                </form>
              </div>
            </div>

          </div>
        </section>
      </main>

      <ResortFooter />
    </div>
  );
}

