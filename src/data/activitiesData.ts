import { FAQItem } from "@/components/common/FAQSection";

export interface ActivityDetail {
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  overviewNotes: string;
  image: string;
  gallery: string[];
  verifiedFeatures: string[];
  visitorInformation: {
    hours?: string;
    admissionNotes?: string;
    safetyInstructions?: string;
    enquiryGuidance?: string;
  };
  faqs: FAQItem[];
  relatedActivities: { name: string; slug: string; tagline: string; image: string }[];
  seoTitle: string;
  seoDescription: string;
  enquiryLink: string;
}

export const ACTIVITIES_DATA: ActivityDetail[] = [
  {
    slug: "swimming-pool",
    name: "Water Park & Swimming Pool",
    tagline: "High-Thrill Water Slides & Wave Pools Amid Lush Palms",
    shortDescription: "Experience Gujarat's famous water park with spiraling thrill slides, wave pools, kids water play stations, and crystal resort swimming pools.",
    fullDescription: "Swapna Srushti's renowned Water Park and Swimming Pool complex is one of Gujarat's most celebrated aquatic attractions. Featuring exhilarating high-speed tornado funnel slides, multi-lane body racers, massive wave pools, interactive water playgrounds for children, and calm resort swimming pools surrounded by tropical greenery, it offers boundless excitement for families, school picnics, and weekend getaways.",
    overviewNotes: "Water Park and Swimming Pool access is bundled with selected resort room packages, One-Day Picnic tickets, and dedicated water park day passes. Operating schedules and safety rules are confirmed upon entry.",
    image: "/images/waterpark/waterpark-aerial.jpg",
    gallery: [
      "/images/waterpark/waterpark-aerial.jpg",
      "/images/waterpark/waterpark-slides.jpg",
      "/images/waterpark/waterpark-funnel.jpg",
    ],
    verifiedFeatures: [
      "Main swimming pool with treated, filtered water",
      "Dedicated shallow splash zone for children",
      "Poolside sun loungers and shaded gazebo seating",
      "Freshwater shower cubicles and changing rooms",
      "Trained safety marshals on duty during pool hours",
      "Green garden surroundings with evening mood lighting",
    ],
    visitorInformation: {
      hours: "Morning 7:00 AM – 10:30 AM | Afternoon 4:00 PM – 7:00 PM (Subject to seasonal daylight)",
      admissionNotes: "Complimentary for in-house stay guests. Day visitors can access via One-Day Picnic passes.",
      safetyInstructions: "Proper nylon or lycra swimwear required. Children under 12 must be accompanied by an adult. Glassware and food items are prohibited at poolside.",
      enquiryGuidance: "Contact the resort reception to check current operational timings or seasonal pool maintenance schedules.",
    },
    faqs: [
      {
        q: "Is swimming pool access included with resort room bookings?",
        a: "Yes, residential room guests receive complimentary access to the swimming pool during standard operating hours.",
      },
      {
        q: "Is there a separate swimming pool area for young children?",
        a: "Yes, the resort swimming pool features a shallow wading zone designed to ensure a safe and enjoyable splash environment for toddlers and kids.",
      },
      {
        q: "Can day visitors access the resort swimming pool?",
        a: "Day visitors can access the pool as part of dedicated One-Day Picnic packages or activity passes booked through the reception.",
      },
      {
        q: "What attire is mandatory for the pool?",
        a: "All swimmers are required to wear proper nylon or lycra swimwear. Cotton clothes are not permitted inside the water.",
      },
    ],
    relatedActivities: [
      { name: "Adventure Park", slug: "adventure-park", tagline: "Thrills & Outdoor Obstacles", image: "/images/adventure/adventure-park.jpg" },
      { name: "Garden Area", slug: "garden-area", tagline: "Botanical Trails & Green Lawns", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80" },
      { name: "Games", slug: "games", tagline: "Indoor & Outdoor Recreation", image: "https://images.unsplash.com/photo-1511193311914-0346f16efe90?auto=format&fit=crop&w=1200&q=80" },
    ],
    seoTitle: "Swimming Pool Facility | Swapna Srushti Resort Gandhinagar",
    seoDescription: "Explore the swimming pool and children's splash area at Swapna Srushti Resort, Gandhinagar. Check pool timings, verified amenities, and booking instructions.",
    enquiryLink: "/contact?activity=swimming-pool",
  },
  {
    slug: "adventure-park",
    name: "Adventure Park",
    tagline: "Outdoor Thrills & Nature Activities",
    shortDescription: "Experience thrilling outdoor activities, high rope courses, zip-lines, and agility challenges set within expansive greenery.",
    fullDescription: "Located on the resort property along the Gandhinagar-Mahudi Highway, the Adventure Park at Swapna Srushti offers high-energy outdoor activities tailored for adventure seekers, corporate groups, and family outings. From suspended aerial rope crossings to agility challenges, participants can test their balance and endurance under the watchful supervision of certified instructors.",
    overviewNotes: "Adventure Park activities operate on scheduled day hours and may be bundled with day-picnic passes or booked as individual activity tokens on-site. Availability depends on weather conditions and routine safety maintenance.",
    image: "/images/adventure/adventure-park.jpg",
    gallery: [
      "/images/adventure/adventure-park.jpg",
      "/images/experiences/adventure.jpg",
    ],
    verifiedFeatures: [
      "High rope obstacle courses and commando net crossings",
      "Suspended zip-line and sky cycling tracks",
      "Tyre walls and structured climbing hurdles",
      "Target sports including archery and air rifle ranges",
      "Trained safety instructors with harnesses and helmets",
      "Spacious open grounds for team building exercises",
    ],
    visitorInformation: {
      hours: "10:00 AM – 5:30 PM (Daily, subject to daylight and weather conditions)",
      admissionNotes: "Included in select One-Day Outing packages; individual pay-per-activity tokens also available on-site.",
      safetyInstructions: "Closed-toe sports footwear mandatory. Safety harnesses and helmets must remain secured during all elevated rope activities. Minimum height and weight limits apply to aerial rides.",
      enquiryGuidance: "Contact the resort desk in advance for corporate team-building group reservations and customized challenge itineraries.",
    },
    faqs: [
      {
        q: "What activities are available at Swapna Srushti Adventure Park?",
        a: "Activities include high rope bridges, commando net climbs, zip-lines, sky cycling, archery, target shooting, and physical obstacle courses.",
      },
      {
        q: "Are safety gears provided for high rope and zip-line rides?",
        a: "Yes, certified safety harnesses, helmets, and safety briefings are provided and managed by on-site adventure marshals.",
      },
      {
        q: "Are there height or age restrictions for adventure rides?",
        a: "Certain aerial activities require a minimum height of 4 feet and may have weight thresholds for harness safety. Gentle ground obstacles are open to younger participants.",
      },
      {
        q: "Can corporate companies arrange team-building events here?",
        a: "Yes, corporate groups frequently book guided team challenge sessions combined with meeting hall facilities and buffet dining.",
      },
    ],
    relatedActivities: [
      { name: "Swimming Pool", slug: "swimming-pool", tagline: "Crystal Waters Amid Palms", image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80" },
      { name: "Games", slug: "games", tagline: "Indoor & Outdoor Recreation", image: "https://images.unsplash.com/photo-1511193311914-0346f16efe90?auto=format&fit=crop&w=1200&q=80" },
      { name: "Corporate Meeting", slug: "corporate-meeting", tagline: "Conferences in Nature", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80" },
    ],
    seoTitle: "Swapna Srushti Adventure Park | Outdoor Activities & Rope Courses",
    seoDescription: "Discover adventure activities, zip-lining, rope obstacles, and team sports at Swapna Srushti Adventure Park Gandhinagar. Check timings, safety, and package details.",
    enquiryLink: "/contact?activity=adventure-park",
  },
  {
    slug: "corporate-meeting",
    name: "Corporate Meeting",
    tagline: "Productive Conferences in Nature",
    shortDescription: "Air-conditioned conference halls, audio-visual setups, and quiet outdoor lawns designed for corporate summits, seminars, and leadership retreats.",
    fullDescription: "Swapna Srushti Resort provides an inspiring, distraction-free environment for business conferences, corporate annual meets, dealer conventions, and executive retreats. Set amid quiet greenery along the Gandhinagar-Mahudi Highway, the venue combines air-conditioned indoor banquet halls with high-speed presentation capabilities, complemented by pure vegetarian corporate dining and breakout lawns.",
    overviewNotes: "Corporate packages can be tailored to include day conference facilities, overnight room allotments, audio-visual equipment, morning and evening tea breaks, and multi-cuisine vegetarian buffets.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80",
    ],
    verifiedFeatures: [
      "Air-conditioned conference halls with flexible theatre or cluster seating",
      "Audio-visual equipment, projection systems, and podium microphones",
      "High-speed Wi-Fi and power backup support for uninterrupted sessions",
      "Dedicated breakout garden areas for informal discussions and networking",
      "Tailored pure vegetarian business lunches, high tea, and dinner buffets",
      "Residential corporate stay options in executive suites and cottages",
    ],
    visitorInformation: {
      hours: "Available 24/7 for pre-booked corporate delegates; daytime conference slots typically 9:00 AM – 6:00 PM.",
      admissionNotes: "Advance corporate inquiry and booking contract required.",
      safetyInstructions: "Adherence to hall occupancy limits and fire safety guidelines.",
      enquiryGuidance: "Contact the resort corporate sales desk with your anticipated delegate count, session dates, and audio-visual requirements.",
    },
    faqs: [
      {
        q: "What capacity can the conference halls accommodate?",
        a: "Our meeting spaces can be configured for intimate board meetings of 30 delegates up to seminar gatherings of 200+ guests depending on seating arrangement.",
      },
      {
        q: "Does the resort provide audio-visual and projector facilities?",
        a: "Yes, projection screens, sound systems, collar/cordless microphones, and podiums can be arranged upon prior booking.",
      },
      {
        q: "Can corporate events combine conference sessions with team activities?",
        a: "Yes, many organizations book hybrid itineraries comprising morning boardroom conferences followed by afternoon adventure park team building and evening dining.",
      },
      {
        q: "How can we get a corporate rate proposal?",
        a: "Submit a request through our Contact page or call our reservations team with your company details and expected dates.",
      },
    ],
    relatedActivities: [
      { name: "Party Plot", slug: "party-plot", tagline: "Grand Open-Air Grounds", image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80" },
      { name: "Adventure Park", slug: "adventure-park", tagline: "Outdoor Team Challenges", image: "/images/adventure/adventure-park.jpg" },
      { name: "Garden Area", slug: "garden-area", tagline: "Botanical Trails & Lawns", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80" },
    ],
    seoTitle: "Corporate Meeting & Conference Facilities | Swapna Srushti Resort",
    seoDescription: "Host corporate conferences, retreats, and business seminars at Swapna Srushti Resort Gandhinagar. Check hall capacities, AV facilities, and corporate packages.",
    enquiryLink: "/contact?activity=corporate-meeting",
  },
  {
    slug: "gym",
    name: "Gym & Fitness",
    tagline: "Modern Wellness & Fitness",
    shortDescription: "A well-maintained fitness studio featuring cardiovascular machines, free weights, and stretching space for residential resort guests.",
    fullDescription: "Maintaining your wellness routine while on holiday is simple at Swapna Srushti Resort. Our fitness room provides in-house guests with essential cardio equipment, weight-training apparatus, and open floor space for stretching and yoga, all positioned in a clean, quiet air-conditioned environment looking out toward the garden grounds.",
    overviewNotes: "Gym facilities are reserved primarily for residential room guests staying at the resort. Equipment access and operating hours should be confirmed with the front desk upon arrival.",
    image: "/images/campfire/gym.png",
    gallery: [
      "/images/campfire/gym.png",
    ],
    verifiedFeatures: [
      "Treadmills and cardiovascular stationary exercise machines",
      "Free dumbbells, benches, and strength conditioning weights",
      "Dedicated floor mat space for yoga and body stretching",
      "Air-conditioned fitness studio with natural garden light",
      "Filtered drinking water and towel station",
    ],
    visitorInformation: {
      hours: "Morning 6:30 AM – 10:00 AM | Evening 5:00 PM – 8:30 PM",
      admissionNotes: "Complimentary for registered in-house residential guests.",
      safetyInstructions: "Proper athletic gym attire and clean indoor sports shoes mandatory. Children below 14 must be accompanied by a guardian.",
      enquiryGuidance: "Consult with reception for access keys or fitness area orientations during your stay.",
    },
    faqs: [
      {
        q: "Is the gym accessible to all room guests?",
        a: "Yes, residential guests across all room and cottage categories enjoy access to the resort fitness room.",
      },
      {
        q: "Are fitness trainers stationed in the gym?",
        a: "The gym operates as a self-directed fitness space. Guests work out at their own pace using the verified equipment provided.",
      },
      {
        q: "What footwear is required?",
        a: "Guests must wear clean sports or running sneakers. Bare feet or outdoor sandals are prohibited for hygiene and safety.",
      },
    ],
    relatedActivities: [
      { name: "Swimming Pool", slug: "swimming-pool", tagline: "Crystal Waters Amid Palms", image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80" },
      { name: "Garden Area", slug: "garden-area", tagline: "Botanical Trails & Lawns", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80" },
      { name: "Games", slug: "games", tagline: "Indoor & Outdoor Recreation", image: "https://images.unsplash.com/photo-1511193311914-0346f16efe90?auto=format&fit=crop&w=1200&q=80" },
    ],
    seoTitle: "Resort Gym & Fitness Studio | Swapna Srushti Resort",
    seoDescription: "Stay active during your getaway at Swapna Srushti Resort's fitness room. View gym equipment, operating hours, and guest access guidelines.",
    enquiryLink: "/contact?activity=gym",
  },
  {
    slug: "games",
    name: "Games & Recreation",
    tagline: "Indoor & Outdoor Recreation",
    shortDescription: "Enjoy leisurely indoor games including table tennis, carrom, and chess, along with open recreation areas for friendly family fun.",
    fullDescription: "Swapna Srushti Resort offers dedicated recreational spaces designed to bring families, friends, and school groups together through classic indoor and outdoor games. Whether enjoying an afternoon table tennis match, testing strategic skill over chess and carrom, or playing casual badminton on open lawns, guests of all ages have ample options for lighthearted entertainment.",
    overviewNotes: "Indoor games equipment is stationed in the activity lounge and is accessible to in-house guests and day picnic ticket holders. Equipment is loaned on a first-come, first-served basis.",
    image: "/images/campfire/games.png",
    gallery: [
      "/images/campfire/games.png",
    ],
    verifiedFeatures: [
      "Table tennis tables with balls and paddles available at the desk",
      "Carrom boards with coins and striker accessories",
      "Chess and traditional family board games",
      "Open outdoor lawn areas suitable for casual badminton or volleyball",
      "Child-friendly activity zones safe for young kids",
    ],
    visitorInformation: {
      hours: "9:00 AM – 8:00 PM Daily",
      admissionNotes: "Accessible to residential guests and day outing ticket holders.",
      safetyInstructions: "Please return all game accessories and sports gear to the concierge desk after use.",
      enquiryGuidance: "Ask the activity attendant for fresh game equipment and equipment loan policies.",
    },
    faqs: [
      {
        q: "What indoor games are available at the resort?",
        a: "Guests can enjoy table tennis, carrom, chess, and popular family board games in the recreation lounge.",
      },
      {
        q: "Are outdoor game items provided?",
        a: "Badminton sets and volleyballs are available on request for use in designated lawn recreation zones.",
      },
      {
        q: "Is there an additional charge for using indoor games?",
        a: "General recreation access is included with standard room stays and day picnic passes. Some specialized coin-operated arcade machines (if seasonal) may have nominal token charges.",
      },
    ],
    relatedActivities: [
      { name: "Swimming Pool", slug: "swimming-pool", tagline: "Crystal Waters Amid Palms", image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80" },
      { name: "Adventure Park", slug: "adventure-park", tagline: "Outdoor Thrills & Nature", image: "/images/adventure/adventure-park.jpg" },
      { name: "Garden Area", slug: "garden-area", tagline: "Botanical Trails & Lawns", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80" },
    ],
    seoTitle: "Indoor & Outdoor Games Recreation | Swapna Srushti Resort",
    seoDescription: "Explore family games, table tennis, carrom, and outdoor sports at Swapna Srushti Resort. Perfect for family getaways and day picnics near Gandhinagar.",
    enquiryLink: "/contact?activity=games",
  },
  {
    slug: "garden-area",
    name: "Garden Area",
    tagline: "Botanical Trails & Manicured Lawns",
    shortDescription: "Expansive green landscapes adorned with native flora, shaded gazebos, walking pathways, and quiet nature corners.",
    fullDescription: "The verdant landscape of Swapna Srushti Resort spans multiple acres of mature trees, flowering shrubs, and meticulously manicured lawns. A favorite for morning joggers, birdwatchers, and families looking for a peaceful sanctuary away from city traffic, the gardens offer paved trails, shaded benches, and gentle open spaces that showcase Gujarat's natural countryside beauty.",
    overviewNotes: "The garden area is open throughout the day for all resort visitors. Guests are encouraged to respect the natural flora and keep the grounds clean.",
    image: "/images/campfire/garden.png",
    gallery: [
      "/images/campfire/garden.png",
    ],
    verifiedFeatures: [
      "Extensive manicured natural lawns surrounded by mature trees",
      "Paved walking and jogging paths illuminated with warm evening lamps",
      "Shaded gazebos and wooden park benches for quiet reading and relaxation",
      "Native bird species sightings during early morning sunrise hours",
      "Photogenic garden backdrops ideal for family snapshots and strolls",
    ],
    visitorInformation: {
      hours: "Open from 6:00 AM – 9:00 PM for walking and leisure",
      admissionNotes: "Open to all residential guests, day visitors, and event attendees.",
      safetyInstructions: "Please remain on paved pathways in designated eco-zones. Plucking flowers and littering are strictly prohibited.",
      enquiryGuidance: "Contact the resort for specific lawn reservations for private breakfast picnics or group yoga sessions.",
    },
    faqs: [
      {
        q: "Are the garden lawns open for morning walks?",
        a: "Yes, in-house guests frequently use the paved garden trails from 6:00 AM onwards for morning strolls, meditation, and exercise.",
      },
      {
        q: "Can we organize informal group yoga or meditation on the lawns?",
        a: "Yes, the serene environment is well-suited for wellness groups. Large organized sessions should be coordinated with the desk.",
      },
      {
        q: "Is photography allowed in the garden area?",
        a: "Casual personal photography on mobile phones is welcome. Professional pre-wedding photo crews require a commercial shooting permit.",
      },
    ],
    relatedActivities: [
      { name: "Swimming Pool", slug: "swimming-pool", tagline: "Crystal Waters Amid Palms", image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80" },
      { name: "Campfire", slug: "campfire", tagline: "Starlit Nights & Warmth", image: "https://images.unsplash.com/photo-1475483768296-6163e08872a1?auto=format&fit=crop&w=1200&q=80" },
      { name: "Party Plot", slug: "party-plot", tagline: "Grand Open-Air Grounds", image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80" },
    ],
    seoTitle: "Lush Garden Area & Walking Trails | Swapna Srushti Resort",
    seoDescription: "Experience nature walks, manicured lawns, and shaded gazebos at Swapna Srushti Resort. Peaceful eco-friendly greenery along the Gandhinagar-Mahudi Highway.",
    enquiryLink: "/contact?activity=garden-area",
  },
  {
    slug: "campfire",
    name: "Campfire Experiences",
    tagline: "Starlit Nights & Warmth",
    shortDescription: "Special evening campfire gatherings under the stars, arranged for residential groups, family reunions, and winter retreats.",
    fullDescription: "As the sun sets over the Gandhinagar countryside, Swapna Srushti Resort offers seasonal evening campfire experiences on selected open lawns. Designed to provide memorable outdoor warmth during cooler autumn and winter evenings, guests can gather around a crackling wood fire to enjoy conversations, music, and peaceful starlit skies.",
    overviewNotes: "Campfire sessions are seasonal, weather-dependent, and subject to prior arrangement with the management. Additional fuel setup charges and minimum group size guidelines may apply.",
    image: "/images/campfire/image.png",
    gallery: [
      "/images/campfire/image.png",
    ],
    verifiedFeatures: [
      "Designated outdoor fire pit zones located safely away from guest accommodations",
      "Cozy circular lawn seating arrangements for groups and families",
      "Fire safety equipment and trained attendants present on site",
      "Optional pairing with warm evening tea, snacks, or dinner buffets",
      "A peaceful rustic outdoor ambiance ideal for winter getaways",
    ],
    visitorInformation: {
      hours: "7:30 PM – 10:00 PM (Winter / cooler months, upon advance request)",
      admissionNotes: "Available on pre-order basis for residential groups. Subject to local weather and fire safety regulations.",
      safetyInstructions: "Guests must maintain a safe distance from active fire pits. Attendants manage the wood fire. Children must be supervised at all times.",
      enquiryGuidance: "Please confirm campfire arrangements with the resort at least 24 hours prior to your evening.",
    },
    faqs: [
      {
        q: "Is a campfire arranged every night?",
        a: "Campfires are organized primarily during cooler winter months and on specific advance request for staying families and group bookings.",
      },
      {
        q: "Are there additional charges for a campfire setup?",
        a: "Yes, dedicated campfire setups involve a nominal fuel and arrangement fee. Inquire with reception during check-in.",
      },
      {
        q: "Can we have light music or refreshments around the fire?",
        a: "Yes, acoustic instruments and light refreshments can be coordinated with the resort dining team subject to noise curfews.",
      },
    ],
    relatedActivities: [
      { name: "Garden Area", slug: "garden-area", tagline: "Botanical Trails & Lawns", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80" },
      { name: "Party Plot", slug: "party-plot", tagline: "Grand Open-Air Grounds", image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80" },
      { name: "Corporate Meeting", slug: "corporate-meeting", tagline: "Conferences in Nature", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80" },
    ],
    seoTitle: "Evening Campfire Gatherings | Swapna Srushti Resort",
    seoDescription: "Enjoy evening campfires under the starlit sky at Swapna Srushti Resort. Learn about seasonal campfire availability, fire pit safety, and group arrangements.",
    enquiryLink: "/contact?activity=campfire",
  },
  {
    slug: "party-plot",
    name: "Party Plot & Event Lawns",
    tagline: "Grand Open-Air Event Grounds",
    shortDescription: "Vast manicured open-air party plots designed to host grand wedding receptions, cultural festivals, concerts, and gala celebrations.",
    fullDescription: "Swapna Srushti Resort boasts some of the most expansive and scenic party plots in North Gujarat, capable of accommodating gatherings from 200 to over 2,000 guests. With grand entrance gates, manicured green carpeting, high-capacity electrical setups, and ample space for grand stages and dining pavilions, these lawns provide the quintessential canvas for landmark celebrations.",
    overviewNotes: "Party plots are booked on advance contract for weddings, corporate galas, and social milestone events. Inspection visits can be arranged with the event sales team.",
    image: "/images/campfire/partyplot.png",
    gallery: [
      "/images/campfire/partyplot.png",
    ],
    verifiedFeatures: [
      "Expansive lush green event lawn accommodating up to 2,000+ attendees",
      "Dedicated entrance driveway suited for grand wedding processions and baraat",
      "High-power electrical distribution infrastructure for lighting and sound stages",
      "Designated catering area for authentic pure vegetarian buffet banquet setups",
      "Adjacent guest washrooms and private air-conditioned preparation rooms",
      "Spacious on-site vehicle parking accommodating hundreds of cars and buses",
    ],
    visitorInformation: {
      hours: "Event timings coordinated per booking contract in accordance with local authorities.",
      admissionNotes: "Private event booking via advance contract.",
      safetyInstructions: "Adherence to local decibel curfew regulations and fire safety protocols.",
      enquiryGuidance: "Contact the resort event coordinator to check open dates and schedule an on-site venue tour.",
    },
    faqs: [
      {
        q: "What is the maximum capacity of the party plot?",
        a: "Our largest open-air party lawn can comfortably host up to 2,000+ attendees with banquet seating and staging.",
      },
      {
        q: "Can we bring outside decorators or event planners?",
        a: "The resort offers in-house decor and catering services, and also collaborates with approved external planners subject to resort guidelines.",
      },
      {
        q: "Is guest accommodation available on-site for event attendees?",
        a: "Yes, residential packages combine party plots with rooms, cottages, and private villas to host family and wedding guests right on the grounds.",
      },
    ],
    relatedActivities: [
      { name: "Corporate Meeting", slug: "corporate-meeting", tagline: "Conferences in Nature", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80" },
      { name: "Garden Area", slug: "garden-area", tagline: "Botanical Trails & Lawns", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80" },
      { name: "Campfire", slug: "campfire", tagline: "Starlit Nights & Warmth", image: "https://images.unsplash.com/photo-1475483768296-6163e08872a1?auto=format&fit=crop&w=1200&q=80" },
    ],
    seoTitle: "Party Plot & Grand Event Lawns | Swapna Srushti Resort",
    seoDescription: "Host grand open-air celebrations, weddings, and galas on the expansive party plots at Swapna Srushti Resort. Ample parking, lush lawns, and premium catering.",
    enquiryLink: "/contact?activity=party-plot",
  },
];

