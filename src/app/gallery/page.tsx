import React from "react";
import Navbar from "@/components/navigation/Navbar";
import ResortFooter from "@/components/layout/ResortFooter";
import GalleryPreview from "@/components/home/GalleryPreview";
import FAQSection from "@/components/common/FAQSection";
import { GALLERY_FAQS } from "@/data/faqsData";

export const metadata = {
  title: "Photo Gallery | Swapna Srushti Resort",
  description: "Browse photographs and visual highlights of Swapna Srushti Resort, including resort accommodation, water park attractions, event grounds, and facilities.",
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3E9] text-[#202522]">
      <Navbar />

      <main className="flex-1">
        <section className="relative h-80 sm:h-96 bg-[#173A2B] text-white flex items-center justify-center text-center px-4">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80')`,
            }}
          />
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C5A46D] uppercase">
              VISUAL COLLECTION
            </span>
            <h1 className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl mt-2">
              Swapna Srushti Resort Gallery
            </h1>
            <p className="text-sm sm:text-base text-zinc-300 mt-3 font-sans max-w-xl mx-auto">
              Explore photo highlights of Swapna Srushti Resort, showcasing our accommodation options, lush gardens, recreational facilities, and event venues.
            </p>
          </div>
        </section>

        <GalleryPreview />

        {/* SEO-friendly Scoped FAQ Section */}
        <FAQSection
          title="GALLERY & TOURS"
          description="Find out about authentic resort photography, arranging in-person guided premises visits, and browsing our social media reels."
          items={GALLERY_FAQS}
          ctaText="Schedule Site Visit"
          ctaLink="/contact"
        />
      </main>

      <ResortFooter />
    </div>
  );
}
