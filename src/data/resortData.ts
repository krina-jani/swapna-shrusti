export interface RoomItem {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  capacity: string;
  amenities: string[];
  image: string;
  images?: string[];
}

export interface ExperienceItem {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  image: string;
}

export interface EventItem {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  image: string;
}

export interface ShootCategory {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  image: string;
}

// 1. Accommodation
export const ACCOMMODATIONS: RoomItem[] = [
  {
    id: "superior-rooms",
    name: "Superior Rooms",
    slug: "superior-rooms",
    tagline: "Comfortable Resort Stay",
    description: "Comfortable and well-appointed rooms surrounded by peaceful greenery, offering a relaxing stay with essential modern conveniences.",
    capacity: "2 Guests",
    amenities: ["Comfortable Bedding", "Garden View", "Air Conditioning", "En-suite Bathroom", "Wi-Fi Access"],
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "premium-rooms",
    name: "Premium Rooms",
    slug: "premium-rooms",
    tagline: "Spacious Comfort & Refined Ambiance",
    description: "Generously sized rooms featuring refined decor, enhanced living comfort, and pleasant natural views for a restful resort retreat.",
    capacity: "2-3 Guests",
    amenities: ["King Bed", "Nature View", "Air Conditioning", "Television", "Attached Bathroom", "Sitting Area"],
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "executive-suites",
    name: "Executive Suites",
    slug: "executive-suites",
    tagline: "Expansive Layout & Added Privacy",
    description: "Sophisticated executive suites offering dedicated living space, elevated comfort, and an inviting ambiance suited for extended stays and families.",
    capacity: "3-4 Guests",
    amenities: ["Spacious Suite", "Living Area", "Air Conditioning", "En-suite Bathroom", "Television", "Room Amenities"],
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "cottages",
    name: "Cottages",
    slug: "cottages",
    tagline: "Charming Nature Stays & Seclusion",
    description: "Charming standalone cottages set amidst tranquil greenery, offering a secluded getaway with rustic appeal and comfortable accommodations.",
    capacity: "2-4 Guests",
    amenities: ["Independent Cottage", "Verandah / Seating", "Green Surroundings", "Attached Bathroom", "Air Conditioning"],
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "unique-residencies",
    name: "Unique Residencies",
    slug: "unique-residencies",
    tagline: "Distinctive Concept & Novelty Living",
    description: "Distinctive and imaginative accommodations designed for a truly memorable resort getaway, celebrating innovative concepts and charming character.",
    capacity: "Families & Couples",
    amenities: ["Unique Architecture", "Themed Decor", "Comfortable Bedding", "En-suite Bathroom", "Air Conditioning"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "theme-villas",
    name: "Theme Villas",
    slug: "theme-villas",
    tagline: "Themed Living & Group Retreats",
    description: "Immersive villas characterized by distinct design themes and generous space, ideal for families and groups seeking a memorable retreat.",
    capacity: "Families & Groups",
    amenities: ["Themed Ambience", "Spacious Layout", "Outdoor Seating", "Private Bathroom", "Resort Amenities"],
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "theme-village",
    name: "Theme Village",
    slug: "theme-village",
    tagline: "Rustic Gujarati Heritage & Cultural Living",
    description: "Immerse yourself in authentic rural heritage with traditional handcrafted cottage dwellings, earthen architectural textures, wooden carvings, and scenic garden courtyards.",
    capacity: "Families & Couples",
    amenities: [
      "Authentic Village Architecture",
      "Garden Courtyard",
      "Air Conditioning",
      "En-suite Bathroom",
      "Traditional Decor",
      "Wi-Fi Access",
      "Cultural Walk Access"
    ],
    image: "/images/villagetheme/theme-village-main.jpg",
    images: [
      "/images/villagetheme/theme-village-main.jpg",
      "/images/villagetheme/village-room-1.jpg",
      "/images/villagetheme/village-room-3.jpg",
      "/images/villagetheme/theme-village-1.png",
      "/images/villagetheme/theme-village-2.png",
      "/images/villagetheme/theme-village-3.png"
    ],
  },
];

// 2. Discover & Services
export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "swimming-pool",
    name: "Water Park & Pool",
    slug: "swimming-pool",
    tagline: "Water Slides & Crystal Pools",
    description: "Thrill to high-speed water slides, wave pools, interactive rain dance zones, and crystal azure pools surrounded by lush greenery.",
    image: "/images/waterpark/waterpark-aerial.jpg",
  },
  {
    id: "adventure-park",
    name: "Adventure Park",
    slug: "adventure-park",
    tagline: "High-Octane Thrills & Obstacles",
    description: "Heart-pounding dirt bike tracks, zip-lines, rope bridges, rock climbing walls, and obstacle challenges set against scenic forest terrains.",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "corporate-meeting",
    name: "Corporate Meeting",
    slug: "corporate-meeting",
    tagline: "Productive Conferences in Nature",
    description: "State-of-the-art audiovisual equipped conference halls, breakout rooms, and tranquil open-air lawns perfect for leadership retreats and corporate summits.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "gym",
    name: "Gym",
    slug: "gym",
    tagline: "Modern Wellness & Fitness",
    description: "Fully equipped fitness studio featuring advanced cardiovascular machines, free weights, and stretching areas overlooking garden landscapes.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "games",
    name: "Games",
    slug: "games",
    tagline: "Indoor & Outdoor Recreation",
    description: "Engage in friendly competition with billiards, table tennis, badminton, carrom, chess, and cricket lawns for all ages.",
    image: "https://images.unsplash.com/photo-1511193311914-0346f16efe90?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "garden-area",
    name: "Garden Area",
    slug: "garden-area",
    tagline: "Botanical Trails & Manicured Lawns",
    description: "Expansive green spaces adorned with exotic flora, shaded gazebos, peaceful meditation corners, and walking paths.",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "campfire",
    name: "Campfire",
    slug: "campfire",
    tagline: "Starlit Nights & Warmth",
    description: "Gather around the crackling evening fire under a canopy of stars with acoustic melodies, barbecue delights, and cherished family conversations.",
    image: "https://images.unsplash.com/photo-1475483768296-6163e08872a1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "party-plot",
    name: "Party Plot",
    slug: "party-plot",
    tagline: "Grand Open-Air Event Grounds",
    description: "Magnificent manicured event lawns designed to host grand celebrations, musical concerts, and gala dinners accommodating over 2,000 guests.",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80",
  },
];

// 3. Events & Celebrations
export const EVENTS: EventItem[] = [
  {
    id: "weddings",
    name: "Weddings",
    slug: "weddings",
    tagline: "Royal Destination Weddings",
    description: "Create timeless fairy-tale weddings with picturesque mandap settings, royal entry avenues, banquet lawns, and bespoke catering.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "festivals",
    name: "Festivals",
    slug: "festivals",
    tagline: "Vibrant Cultural Celebrations",
    description: "Celebrate Navratri, Diwali, Holi, and seasonal festivals in true grand Gujarati tradition with folk performers and festive feasts.",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "birthday-parties",
    name: "Birthday Parties",
    slug: "birthday-parties",
    tagline: "Joyous Milestone Moments",
    description: "From poolside splash parties to themed indoor ballroom gatherings, our team coordinates custom decor, entertainment, and delicious gourmet cakes.",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "corporate-conferences",
    name: "Corporate Conferences",
    slug: "corporate-conferences",
    tagline: "Impactful Business Summits",
    description: "Equipped with executive seating, pristine acoustics, high-speed WiFi, and customized business banqueting for productive leadership conclaves.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "family-get-togethers",
    name: "Family Get-togethers",
    slug: "family-get-togethers",
    tagline: "Bonding Over Joy & Nature",
    description: "Reunite with extended generations in a peaceful nature sanctuary featuring cottages, private lawns, group games, and home-style hospitality.",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "one-day-picnic",
    name: "One-day Picnic",
    slug: "one-day-picnic",
    tagline: "The Perfect Day Retreat",
    description: "Recharge with our renowned full-day picnic package: welcome breakfast, water park access, adventure sports, buffet lunch, high tea, and evening entertainment.",
    image: "https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?auto=format&fit=crop&w=1200&q=80",
  },
];

// 4. For Shoot Subcategories
export const SHOOT_CATEGORIES: ShootCategory[] = [
  {
    id: "pre-wedding",
    name: "Pre-wedding",
    slug: "pre-wedding",
    tagline: "Romantic Scenic Backdrops",
    description: "Dreamy floral avenues, rustic wooden bridges, serene poolside reflections, and golden hour meadows for unforgettable pre-wedding portfolios.",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "album",
    name: "Album",
    slug: "album",
    tagline: "Music Video & Concept Shoots",
    description: "Diverse architectural settings ranging from heritage Rajasthani/Gujarati village themes to contemporary European resort aesthetics.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "film",
    name: "Film",
    slug: "film",
    tagline: "Feature Film Production Sets",
    description: "Expansive private property with versatile topography, green cover, cottage clusters, and uninterrupted production infrastructure with crew accommodation.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "ad-film",
    name: "Ad-Film",
    slug: "ad-film",
    tagline: "Commercial Advertising Shoots",
    description: "Clean, scenic natural light zones and manicured luxury environments perfectly tailored for lifestyle, fashion, and automobile TVCs.",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "other-photoshoots",
    name: "Other Photoshoots",
    slug: "other-photoshoots",
    tagline: "Fashion, Maternity & Editorial",
    description: "Tailored photoshoot permits for fashion lookbooks, maternity portraits, graduation portfolios, and personal milestones.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80",
  },
];

// 5. Resort Info
export const RESORT_INFO = {
  name: "Swapna Srushti Resort",
  tagline: "The World of Eternal Joy",
  headline: "A World of Experiences. One Beautiful Escape.",
  subheadline: "Surrender to the whisper of palm leaves, authentic Gujarati warmth, thrilling adventures, and opulent accommodations just a short drive from Ahmedabad and Gandhinagar.",
  address: "Gram Bharati Cross Road, Amarapur, Gandhinagar-Mahudi Highway, Gujarat 382721",
  email: "info@swapnasrushtiresort.in",
  phone: "+91 99099 22000",
  highlights: [
    { title: "Lush 100+ Acre Sanctuary", desc: "Sprawling botanical gardens with thousands of exotic plants and towering palm trees." },
    { title: "Holistic Leisure for All Ages", desc: "From tranquil Ayurvedic spa vibes to heart-racing adventure tracks and water thrills." },
    { title: "Pure Gourmet Feasts", desc: "Authentic Kathiyawadi, North Indian, and global delicacies prepared with fresh farm ingredients." }
  ],
  gallery: [
    { category: "Resort", title: "Lush Palms & Gazebo", img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80" },
    { category: "Resort", title: "Sunset Pathway", img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80" },
    { category: "Rooms", title: "Luxury Suite Living", img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80" },
    { category: "Rooms", title: "Private Cottage Balcony", img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80" },
    { category: "Experiences", title: "Resort Pool Waters", img: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80" },
    { category: "Experiences", title: "Adventure Dirt Track", img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80" },
    { category: "Events", title: "Destination Mandap", img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80" },
    { category: "Restaurant", title: "Fine Dining Ambience", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80" }
  ]
};

