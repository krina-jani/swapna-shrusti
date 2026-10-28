"use client";

import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { IMAGES } from "@/data/content";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 4000);
    }
  };

  return (
    <section className="relative w-full h-[360px] sm:h-[400px] flex items-center justify-center text-center overflow-hidden">
      {/* Scenic Mountain Road Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${IMAGES.newsletterBg})`,
        }}
      >
        <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 w-full">
        <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-zinc-300 uppercase">
          STAY INSPIRED
        </span>

        <h2 className="mt-3 font-heading font-medium text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
          Get travel ideas, tips and<br />
          exclusive content straight to your inbox.
        </h2>

        {/* Input & Subscribe Button */}
        <form onSubmit={handleSubmit} className="mt-8 max-w-xl mx-auto flex flex-col sm:flex-row items-center gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Your email address"
            className="w-full sm:flex-1 px-5 py-3 rounded-full bg-white text-zinc-900 placeholder:text-zinc-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#005ea2] hover:bg-[#004e87] text-white text-sm font-semibold tracking-wide shadow-md transition-colors whitespace-nowrap cursor-pointer"
          >
            Subscribe
          </button>
        </form>

        {isSubmitted && (
          <div className="mt-4 flex items-center justify-center space-x-2 text-emerald-400 text-xs font-medium animate-in fade-in">
            <CheckCircle2 className="w-4 h-4" />
            <span>Thank you for subscribing to Brand USA inspiration!</span>
          </div>
        )}
      </div>
    </section>
  );
}

