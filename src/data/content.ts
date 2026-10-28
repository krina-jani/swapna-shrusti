/**
 * High-quality curated Unsplash photography matching the exact scenes in the Brand USA reference image
 */

export const IMAGES = {
  // Hero: Yosemite Valley / Half Dome sunset with golden mountain glow
  hero: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=2400&q=85",
  
  // A Land of Endless Possibilities: Red rock canyon & valley view (Zion / Bryce Canyon)
  landIntro: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=80",
  
  // The Spirit of the West: Cowboy horseback overlooking scenic red rock canyon
  spiritWest: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1400&q=80",
  
  // Dream Trip USA map pin vignettes
  dreamPins: [
    { id: 1, name: "Yosemite", x: 12, y: 35, img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" },
    { id: 2, name: "Big Sur Coast", x: 6, y: 65, img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80" },
    { id: 3, name: "Monument Valley", x: 26, y: 62, img: "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=400&q=80" },
    { id: 4, name: "Grand Canyon", x: 28, y: 76, img: "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=400&q=80" },
    { id: 5, name: "Chicago / Great Lakes", x: 62, y: 32, img: "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=400&q=80" },
    { id: 6, name: "Smoky Mountains", x: 74, y: 64, img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80" },
    { id: 7, name: "New York City", x: 88, y: 34, img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=400&q=80" },
  ],

  // Visa & Entry: Statue of Liberty dramatic vertical background
  statueOfLiberty: "https://images.unsplash.com/photo-1508873696983-2df5703bc20d?auto=format&fit=crop&w=1200&q=80",

  // Explore Destinations Featured Cards
  exploreCards: [
    {
      id: "ny",
      name: "New York",
      tagline: "A CITY LIKE NO OTHER",
      category: "Cities",
      img: "https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=800&q=80", // Empire state building
    },
    {
      id: "ca",
      name: "California",
      tagline: "SUNSHINE STATE",
      category: "Nature",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80", // Palm trees row
    },
    {
      id: "fl",
      name: "Florida",
      tagline: "BEACHES & BEYOND",
      category: "Culture",
      img: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80", // Miami lifeguard tower
    },
  ],

  // Popular Destinations Grid (6 cards)
  popularDestinations: [
    {
      id: "lv",
      title: "Las Vegas",
      subtitle: "NEVADA",
      img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "la",
      title: "Los Angeles",
      subtitle: "CALIFORNIA",
      img: "https://images.unsplash.com/photo-1580655653885-65763b2597d0?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "sf",
      title: "San Francisco",
      subtitle: "CALIFORNIA",
      img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80", // Golden Gate Bridge
    },
    {
      id: "gc",
      title: "Grand Canyon",
      subtitle: "ARIZONA",
      img: "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "chi",
      title: "Chicago",
      subtitle: "ILLINOIS",
      img: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "mia",
      title: "Miami",
      subtitle: "FLORIDA",
      img: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?auto=format&fit=crop&w=800&q=80",
    },
  ],

  // Historical Gems US Capitol Building
  usCapitol: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",

  // Outdoor Wonders (Panoramic top banner + 3 cards)
  outdoorHero: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2000&q=80",
  outdoorCards: [
    {
      title: "National Parks",
      subtitle: "Breathtaking beauty",
      img: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Road Trips",
      subtitle: "Scenic drives",
      img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Coastlines",
      subtitle: "Stunning beaches",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    },
  ],

  // Sports, Surfing and Events
  sportsHeroWave: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=2000&q=80", // Big wave surfer
  sportsCards: [
    {
      title: "Sports",
      subtitle: "Major leagues & events",
      img: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80", // Stadium crowd
    },
    {
      title: "Surfing",
      subtitle: "Coastal adventures",
      img: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=800&q=80", // Surfer on wave
    },
    {
      title: "Events & Festivals",
      subtitle: "Year-round celebrations",
      img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80", // Concert stage lights
    },
  ],

  // Stay Inspired / Newsletter
  newsletterBg: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=80", // Mountain road vista
};

export const VISA_QUESTIONS = [
  {
    q: "Do I need a visa to visit the USA?",
    a: "Citizens of Visa Waiver Program (VWP) countries may travel to the United States without a visa for stays of 90 days or less for tourism or business if they meet specific requirements and have obtained an approved ESTA prior to boarding.",
  },
  {
    q: "How do I apply for a visa?",
    a: "To apply for a US nonimmigrant visa, complete the online DS-160 application form, pay the application fee, and schedule an interview appointment at your nearest US Embassy or Consulate.",
  },
  {
    q: "What is the ESTA?",
    a: "The Electronic System for Travel Authorization (ESTA) is an automated system that determines the eligibility of visitors to travel to the United States under the Visa Waiver Program (VWP). Applications should be submitted at least 72 hours prior to departure.",
  },
  {
    q: "How long can I stay?",
    a: "Under the Visa Waiver Program, travelers may stay up to 90 days. For standard B1/B2 tourist visas, standard initial permission allows stays up to 6 months as determined by US Customs and Border Protection officials at the port of entry.",
  },
  {
    q: "What documents do I need?",
    a: "You will need a passport valid for at least 6 months beyond your planned stay, an approved ESTA or valid US visa, proof of sufficient funds, and return or onward travel tickets.",
  },
  {
    q: "Customs and immigration",
    a: "All international travelers arriving in the US go through immigration and customs clearance at their first port of entry. Ensure you declare all agricultural, food, and monetary items exceeding $10,000.",
  },
  {
    q: "Travel tips and important information",
    a: "We recommend purchasing comprehensive travel and medical insurance, checking state-specific regulations, having digital copies of all reservations, and familiarizing yourself with US tipping customs.",
  },
];

export const HISTORICAL_GEMS = [
  {
    name: "Washington, DC",
    desc: "From the monumental National Mall and Smithsonian museums to historic Georgetown, explore the heart of American democracy and cultural heritage.",
  },
  {
    name: "Boston",
    desc: "Walk the historic 2.5-mile Freedom Trail connecting 16 nationally significant historic sites, Beacon Hill cobblestone streets, and revolutionary landmarks.",
  },
  {
    name: "Philadelphia",
    desc: "Birthplace of the United States: visit Independence Hall where the Declaration of Independence was signed, and ring in history at the Liberty Bell.",
  },
  {
    name: "New Orleans",
    desc: "A three-hundred-year tapestry of French, Spanish, Creole, and African cultural heritage, jazz music origins, and the architectural marvels of the French Quarter.",
  },
  {
    name: "Santa Fe",
    desc: "Founded in 1610, the oldest state capital in the US boasts rich Pueblo architecture, Native American markets, and historic adobe chapels.",
  },
  {
    name: "Williamsburg",
    desc: "Step back into the 18th century in the world's largest living history museum, featuring restored colonial buildings, reenactments, and artisan trades.",
  },
];

