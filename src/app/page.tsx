import Navbar from "@/components/navigation/Navbar";
import HeroSection from "@/components/home/HeroSection";
import BookingBar from "@/components/home/BookingBar";
import ResortIntroduction from "@/components/home/ResortIntroduction";
import StickyExperienceSections from "@/components/home/StickyExperienceSections";
import DiscoverSection from "@/components/home/DiscoverSection";
import EventsPreview from "@/components/home/EventsPreview";
import RestaurantPreview from "@/components/home/RestaurantPreview";
import ResortFooter from "@/components/layout/ResortFooter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3E9] text-[#202522]">
      {/* Universal Floating Glass Navbar */}
      <Navbar />

      <main className="flex-1 w-full">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Full-Length Booking Search Bar */}
        <BookingBar />

        {/* 3. Resort Introduction ("Planning Your Next Getaway?") */}
        <ResortIntroduction />

        {/* 4. Sticky Stacking 4 Editorial Sections (Swimming Pool, Adventure Park, One-day Picnic, Pre-wedding Shoot) */}
        <StickyExperienceSections />

        {/* 5. Discover & Resort Services */}
        <DiscoverSection />

        {/* 6. Events & Celebrations */}
        <EventsPreview />

        {/* 7. Restaurant & Dining Showcase */}
        <RestaurantPreview />
      </main>

      {/* 9. Master Reference Footer (Section A: Panoramic Banner + Section B: Warm Ivory Footer & Floating Form) */}
      <ResortFooter />
    </div>
  );
}
