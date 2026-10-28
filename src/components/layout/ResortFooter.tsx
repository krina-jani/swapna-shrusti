import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { RESORT_INFO, ACCOMMODATIONS, EXPERIENCES, EVENTS, SHOOT_CATEGORIES } from "@/data/resortData";

export default function ResortFooter() {
  return (
    <footer className="bg-[#000000] text-zinc-400 border-t border-zinc-800 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          
          {/* Col 1 & 2: Logo and Resort Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/logo.png"
                alt="Swapna Srushti Logo"
                width={56}
                height={56}
                className="object-contain"
              />
              <div>
                <span className="font-serif text-xl font-bold text-white tracking-wide block">
                  Swapna Srushti
                </span>
                <span className="text-[10px] tracking-widest text-[#C5A46D] uppercase font-sans">
                  The World of Eternal Joy
                </span>
              </div>
            </div>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-sm pt-2">
              Gujarat&apos;s premier luxury nature resort featuring scenic cottages, themed village heritage, adventure sports, grand event lawns, and multi-cuisine vegetarian dining.
            </p>

            <div className="space-y-2.5 pt-2 text-xs">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
                <span>{RESORT_INFO.address}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#C5A46D] shrink-0" />
                <span>{RESORT_INFO.phone}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#C5A46D] shrink-0" />
                <span>{RESORT_INFO.email}</span>
              </div>
            </div>
          </div>

          {/* Col 3: Accommodation */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-4 border-b border-zinc-800 pb-2">
              Accommodation
            </h4>
            <ul className="space-y-2 text-xs">
              {ACCOMMODATIONS.map((room) => (
                <li key={room.id}>
                  <Link href={`/accommodation/${room.slug}`} className="hover:text-[#C5A46D] transition-colors">
                    {room.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Experiences */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-4 border-b border-zinc-800 pb-2">
              Experiences
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/discover/swimming-pool" className="hover:text-[#C5A46D] transition-colors">Swimming Pool</Link></li>
              <li><Link href="/discover/adventure-park" className="hover:text-[#C5A46D] transition-colors">Adventure Park</Link></li>
              <li><Link href="/discover/corporate-meeting" className="hover:text-[#C5A46D] transition-colors">Corporate Meeting</Link></li>
              <li><Link href="/accommodation/theme-village" className="hover:text-[#C5A46D] transition-colors">Theme Village</Link></li>
              <li><Link href="/discover" className="hover:text-[#C5A46D] transition-colors">All Resort Services</Link></li>
            </ul>
          </div>

          {/* Col 5: Events & Celebrations */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-4 border-b border-zinc-800 pb-2">
              Events
            </h4>
            <ul className="space-y-2 text-xs">
              {EVENTS.map((event) => (
                <li key={event.id}>
                  <Link href={`/events/${event.slug}`} className="hover:text-[#C5A46D] transition-colors">
                    {event.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 6: Quick Links & Shoots */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-4 border-b border-zinc-800 pb-2">
              For Shoot & Links
            </h4>
            <ul className="space-y-2 text-xs">
              {SHOOT_CATEGORIES.slice(0, 3).map((s) => (
                <li key={s.id}>
                  <Link href={`/for-shoot/${s.slug}`} className="hover:text-[#C5A46D] transition-colors">
                    {s.name} Shoot
                  </Link>
                </li>
              ))}
              <li><Link href="/restaurant" className="hover:text-[#C5A46D] transition-colors">Restaurant & Dining</Link></li>
              <li><Link href="/gallery" className="hover:text-[#C5A46D] transition-colors">Photo & Video Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-[#C5A46D] transition-colors">Contact Concierge</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="mt-16 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© 2026 Swapna Srushti Resort. All rights reserved.</p>

          <div className="flex items-center space-x-6">
            <Link href="/privacy-policy" className="hover:text-zinc-400">Privacy Policy</Link>
            <span>•</span>
            <Link href="/terms-and-conditions" className="hover:text-zinc-400">Terms and Conditions</Link>
            <span>•</span>
            <Link href="/cancellation-policy" className="hover:text-zinc-400">Cancellation Policy</Link>
          </div>

          <div className="text-[11px] text-[#C5A46D]">
            Luxury Nature Haven • Gandhinagar, Gujarat
          </div>
        </div>

      </div>
    </footer>
  );
}

