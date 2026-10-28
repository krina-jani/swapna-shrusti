import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LandIntro from "@/components/LandIntro";
import FeaturedStory from "@/components/FeaturedStory";
import DreamTrip from "@/components/DreamTrip";
import VisaEntry from "@/components/VisaEntry";
import ExploreDestinations from "@/components/ExploreDestinations";
import HistoricalGems from "@/components/HistoricalGems";
import OutdoorWonders from "@/components/OutdoorWonders";
import SportsSurfing from "@/components/SportsSurfing";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-900 selection:bg-blue-600 selection:text-white">
      {/* 1. Brand USA Mega Navigation Header */}
      <Header />

      <main className="flex-1 w-full">
        {/* 2. Full-width Hero Section with Video/Image, Heading & Pill Navigation */}
        <Hero />

        {/* 3. Welcome to the USA: A Land of Endless Possibilities */}
        <LandIntro />

        {/* 4. Featured Travel Story: The Spirit of the West */}
        <FeaturedStory />

        {/* 5. Plan Your Journey: Your Dream Trip Begins Here (US Map & Pins) */}
        <DreamTrip />

        {/* 6. Travel Information: Visa & Entry Accordion & Statue of Liberty */}
        <VisaEntry />

        {/* 7 & 8. Travel Inspiration: Explore Amazing Destinations & Popular Grids */}
        <ExploreDestinations />

        {/* 9. Historical Gems Through the Ages & US Capitol Backdrop */}
        <HistoricalGems />

        {/* 10. Outdoor Wonders: Nature Like Nowhere Else & 3 Travel Cards */}
        <OutdoorWonders />

        {/* 11. Sports, Surfing and Events: Big Wave Surfer Split Banner & Experiences */}
        <SportsSurfing />

        {/* 12. Stay Inspired: Scenic Highway Newsletter Signup */}
        <Newsletter />
      </main>

      {/* 13. Brand USA Comprehensive Footer */}
      <Footer />
    </div>
  );
}
