import HeroSection from "@/components/home/HeroSection";
import BookingBar from "@/components/home/BookingBar";
import ResortIntroduction from "@/components/home/ResortIntroduction";
import AccommodationPreview from "@/components/home/AccommodationPreview";
import DiscoverSection from "@/components/home/DiscoverSection";
import EventsPreview from "@/components/home/EventsPreview";
import RestaurantPreview from "@/components/home/RestaurantPreview";
import ForShootPreview from "@/components/home/ForShootPreview";
import GalleryPreview from "@/components/home/GalleryPreview";
import FinalCTA from "@/components/home/FinalCTA";
import ResortFooter from "@/components/layout/ResortFooter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3E9] text-[#202522]">
      <main className="flex-1 w-full">
        {/* 1. Hero Section with the floating glass pill-navbar embedded inside */}
        <HeroSection />

        {/* 2. Full-Length Booking Search Bar */}
        <BookingBar />

        {/* 3. Resort Introduction */}
        <ResortIntroduction />

        {/* 4. Accommodation Showcase */}
        <AccommodationPreview />

        {/* 5. Discover & Resort Services */}
        <DiscoverSection />

        {/* 6. Events & Celebrations */}
        <EventsPreview />

        {/* 7. Restaurant & Dining Showcase */}
        <RestaurantPreview />

        {/* 8. For Shoot Locations */}
        <ForShootPreview />

        {/* 9. Categorized Photo Gallery */}
        <GalleryPreview />

        {/* 10. Final CTA */}
        <FinalCTA />
      </main>

      {/* 11. Resort Footer */}
      <ResortFooter />
    </div>
  );
}
