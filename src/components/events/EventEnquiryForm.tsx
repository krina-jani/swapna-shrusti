"use client";

import React, { useState } from "react";
import { CheckCircle2, Send, Loader2 } from "lucide-react";

interface EventEnquiryFormProps {
  initialEventType?: string;
  eventName?: string;
}

export default function EventEnquiryForm({
  initialEventType = "Weddings",
  eventName,
}: EventEnquiryFormProps) {
  const [formData, setFormData] = useState({
    eventType: initialEventType,
    fullName: "",
    phone: "",
    email: "",
    eventDate: "",
    guestCount: "",
    cateringRequired: "Pure Vegetarian Buffet",
    accommodationRequired: "Not Required",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const eventTypes = [
    "Weddings",
    "Festivals",
    "Birthday Parties",
    "Corporate Conferences",
    "Family Get-Togethers",
    "One-Day Picnic",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate safe client enquiry delivery
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white p-8 sm:p-10 rounded-2xl border border-zinc-200 shadow-xl text-center space-y-4 animate-in fade-in duration-300">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h3 className="font-serif font-bold text-2xl text-[#173A2B]">
          Enquiry Received
        </h3>
        <p className="text-xs sm:text-sm text-zinc-600 font-sans leading-relaxed max-w-sm mx-auto">
          Thank you, <strong>{formData.fullName}</strong>. Your enquiry for{" "}
          <strong>{formData.eventType}</strong> has been received by our resort events desk. Our team will contact you shortly at <strong>{formData.phone}</strong> to discuss dates, availability, and venue arrangements.
        </p>
        <p className="text-[11px] text-zinc-400 font-sans italic">
          * Note: This enquiry does not guarantee a reservation until formally confirmed by the resort.
        </p>
        <div className="pt-2">
          <button
            type="button"
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                ...formData,
                fullName: "",
                phone: "",
                email: "",
                eventDate: "",
                guestCount: "",
                notes: "",
              });
            }}
            className="text-xs font-bold text-[#C5A46D] underline hover:text-[#173A2B] transition-colors"
          >
            Submit another enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl border border-zinc-200/90 shadow-xl space-y-5">
      <div>
        <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A46D] font-sans">
          DIRECT EVENT DESK
        </span>
        <h3 className="font-serif font-bold text-2xl text-[#173A2B] mt-1">
          {eventName ? `Enquire About ${eventName}` : "Enquire About Your Event"}
        </h3>
        <p className="text-xs text-zinc-500 font-sans mt-1">
          Share your celebration plans and our team will get in touch with open dates and options.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3.5 text-xs font-sans">
        
        {/* Event Type */}
        <div>
          <label className="block text-zinc-700 font-semibold mb-1">
            Event Type *
          </label>
          <select
            value={formData.eventType}
            onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 text-xs text-[#202522] bg-[#F7F3E9]/50 focus:outline-none focus:border-[#C5A46D] focus:bg-white transition-colors"
          >
            {eventTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Full Name & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-zinc-700 font-semibold mb-1">
              Full Name *
            </label>
            <input
              type="text"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="Your Name"
              className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 text-xs text-[#202522] focus:outline-none focus:border-[#C5A46D] transition-colors"
            />
          </div>

          <div>
            <label className="block text-zinc-700 font-semibold mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+91 98765 43210"
              className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 text-xs text-[#202522] focus:outline-none focus:border-[#C5A46D] transition-colors"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-zinc-700 font-semibold mb-1">
            Email Address *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="name@example.com"
            className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 text-xs text-[#202522] focus:outline-none focus:border-[#C5A46D] transition-colors"
          />
        </div>

        {/* Preferred Date & Estimated Guests */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-zinc-700 font-semibold mb-1">
              Preferred Event Date
            </label>
            <input
              type="date"
              value={formData.eventDate}
              onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl border border-zinc-300 text-xs text-[#202522] focus:outline-none focus:border-[#C5A46D] transition-colors"
            />
          </div>

          <div>
            <label className="block text-zinc-700 font-semibold mb-1">
              Estimated Guests
            </label>
            <input
              type="text"
              value={formData.guestCount}
              onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
              placeholder="e.g. 50, 150, 500"
              className="w-full px-3.5 py-2 rounded-xl border border-zinc-300 text-xs text-[#202522] focus:outline-none focus:border-[#C5A46D] transition-colors"
            />
          </div>
        </div>

        {/* Catering & Accommodation options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-zinc-700 font-semibold mb-1">
              Catering Preference
            </label>
            <select
              value={formData.cateringRequired}
              onChange={(e) => setFormData({ ...formData, cateringRequired: e.target.value })}
              className="w-full px-3 py-2 rounded-xl border border-zinc-300 text-xs text-[#202522] bg-white focus:outline-none focus:border-[#C5A46D]"
            >
              <option value="Pure Vegetarian Buffet">Pure Vegetarian Buffet</option>
              <option value="Gujarati & Kathiyawadi">Gujarati &amp; Kathiyawadi</option>
              <option value="Jain Friendly Dining">Strict Jain Friendly</option>
              <option value="High Tea & Snacks Only">High Tea &amp; Snacks Only</option>
              <option value="Not Decided">To Be Discussed</option>
            </select>
          </div>

          <div>
            <label className="block text-zinc-700 font-semibold mb-1">
              Guest Rooms Needed?
            </label>
            <select
              value={formData.accommodationRequired}
              onChange={(e) => setFormData({ ...formData, accommodationRequired: e.target.value })}
              className="w-full px-3 py-2 rounded-xl border border-zinc-300 text-xs text-[#202522] bg-white focus:outline-none focus:border-[#C5A46D]"
            >
              <option value="Not Required">No Stay Needed</option>
              <option value="1-5 Rooms">1 to 5 Rooms</option>
              <option value="5-15 Rooms">5 to 15 Rooms</option>
              <option value="Large Block (15+ Rooms)">Block Booking (15+ Rooms)</option>
            </select>
          </div>
        </div>

        {/* Special Notes */}
        <div>
          <label className="block text-zinc-700 font-semibold mb-1">
            Additional Requirements / Notes
          </label>
          <textarea
            rows={3}
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            placeholder="Share details such as sound/AV requirements, decoration themes, or event timings..."
            className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 text-xs text-[#202522] focus:outline-none focus:border-[#C5A46D] transition-colors"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 rounded-full btn-gold text-center block font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-transform flex items-center justify-center space-x-2 disabled:opacity-60 cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Sending Enquiry...</span>
            </>
          ) : (
            <>
              <span>Submit Event Enquiry</span>
              <Send className="w-3.5 h-3.5" />
            </>
          )}
        </button>
      </form>

      <div className="pt-2 border-t border-zinc-100 text-center">
        <a
          href="tel:+919909922000"
          className="text-[11px] text-zinc-500 hover:text-[#173A2B] transition-colors"
        >
          Need urgent assistance? Call Event Desk: <strong>+91 99099 22000</strong>
        </a>
      </div>
    </div>
  );
}

