import React from "react";
import Link from "next/link";
import { Utensils, Coffee, Clock } from "lucide-react";

export default function RestaurantPreview() {
  return (
    <section className="bg-[#173A2B] text-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Photos */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden shadow-xl border-2 border-white/20 h-64 sm:h-72">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                alt="Swapna Srushti Dining Ambience"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl border-2 border-white/20 h-64 sm:h-72 mt-6">
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
                alt="Gourmet Dining Feasts"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Copy */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase">
              CULINARY DELIGHTS
            </span>

            <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
              Pure Vegetarian Flavors, Fresh Farm Ingredients
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-sans">
              Indulge in an authentic culinary journey celebrating the rich culinary traditions of Gujarat alongside North Indian and continental specialties. Prepared with utmost hygiene using locally sourced farm produce, each meal at Swapna Srushti is crafted to delight every palate.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-lg bg-[#202522] border border-zinc-700/60">
                <Utensils className="w-5 h-5 text-[#C5A46D] mb-2" />
                <h4 className="font-bold text-sm text-white">Kathiyawadi & Gujarati Thali</h4>
                <p className="text-xs text-zinc-400 mt-1">Authentic village-style rotla, seasonal sabzis, and buttermilk.</p>
              </div>

              <div className="p-4 rounded-lg bg-[#202522] border border-zinc-700/60">
                <Coffee className="w-5 h-5 text-[#C5A46D] mb-2" />
                <h4 className="font-bold text-sm text-white">Multi-Cuisine Banqueting</h4>
                <p className="text-xs text-zinc-400 mt-1">Custom catering for weddings, corporate meets, and picnic groups.</p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/restaurant"
                className="inline-block px-8 py-3.5 rounded-full btn-gold text-xs sm:text-sm uppercase tracking-wider font-bold shadow-xl"
              >
                Explore Restaurant
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

