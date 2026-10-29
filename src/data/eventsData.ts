export interface EventCategoryDetail {
  slug: string;
  name: string;
  tagline: string;
  heroHeading: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  gallery: string[];
  featuresAndEnquiryAreas: {
    title: string;
    description: string;
  }[];
  packageContextNotice?: string;
  faqList: { q: string; a: string }[];
  seoTitle: string;
  seoDescription: string;
}

export const EVENTS_DATA: EventCategoryDetail[] = [
  {
    slug: "weddings",
    name: "Weddings",
    tagline: "Celebrate Your Sacred Vows in Nature",
    heroHeading: "Celebrate Your Wedding at Swapna Srushti Resort",
    shortDescription: "A picturesque destination setting near Gandhinagar for royal marriage ceremonies, receptions, ring ceremonies, and joyous pre-wedding functions.",
    fullDescription: "Nestled along the Gandhinagar-Mahudi Highway near Amarapur village, Swapna Srushti Resort offers expansive landscaped lawns and banquet spaces tailored for memorable Indian weddings. From intimate engagement ceremonies and mehendi gatherings to grand evening receptions under the stars, our grounds provide a serene and photogenic canvas for celebrating with family and friends.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
      "/images/sticky-wedding.jpg",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80",
    ],
    featuresAndEnquiryAreas: [
      {
        title: "Grand Marriage Lawns & Stage Settings",
        description: "Expansive green party plots with dedicated avenues for baraat processions, mandap setups, and spacious guest dining pavilions.",
      },
      {
        title: "Pre-Wedding Functions & Gatherings",
        description: "Versatile areas suitable for mehendi, sangeet, haldi, and ring ceremonies surrounded by natural resort greenery.",
      },
      {
        title: "Pure Vegetarian Catering Inquiries",
        description: "Discussion options for traditional Gujarati thalis, North Indian banquets, and customized Jain wedding menus.",
      },
      {
        title: "Residential Guest Accommodations",
        description: "Options to enquire about room blocks across Superior Rooms, Premium Rooms, Cottages, and Theme Villas to lodge out-of-town guests comfortably on-site.",
      },
    ],
    faqList: [
      {
        q: "What types of wedding ceremonies can be hosted at Swapna Srushti Resort?",
        a: "Our event lawns and banquet spaces can accommodate engagement ceremonies, mehendi, sangeet, haldi rituals, main wedding mandap setups, and reception galas.",
      },
      {
        q: "How far in advance should we inquire about wedding dates?",
        a: "We recommend enquiring 3 to 6 months in advance for peak Gujarati wedding auspicious dates to ensure lawn and room block availability.",
      },
      {
        q: "Can wedding guests stay overnight on resort premises?",
        a: "Yes, wedding parties frequently coordinate block bookings across our room and cottage tiers so out-of-station family and friends can stay on the resort grounds.",
      },
      {
        q: "Are catering and decoration customizable?",
        a: "Yes, our team discusses custom pure vegetarian menus and connects with approved wedding planners to tailor decoration arrangements to your preferences.",
      },
    ],
    seoTitle: "Weddings at Swapna Srushti Resort | Gandhinagar, Gujarat",
    seoDescription: "Celebrate your wedding at Swapna Srushti Resort near Gandhinagar. Explore grand party lawns, pre-wedding function spaces, guest stay options, and banquet enquiries.",
  },
  {
    slug: "festivals",
    name: "Festivals",
    tagline: "Vibrant Community & Family Festivities",
    heroHeading: "Bring Your Celebrations Together",
    shortDescription: "Gather with family, community groups, and friends to mark major Indian festivals in a refreshing, open-air countryside environment.",
    fullDescription: "From the rhythmic beats of Navratri garba to joyful Holi gatherings, Diwali get-togethers, and Uttarayan celebrations, Swapna Srushti Resort offers an open, green setting for private festival celebrations. Surrounded by nature away from city congestion, groups can share festive meals, organize traditional games, and spend quality time together.",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
      "/images/Tropical%20Resort%20Cottages%20at%20Sunset.png",
    ],
    featuresAndEnquiryAreas: [
      {
        title: "Private Festive Lawn Enquiries",
        description: "Spacious outdoor grounds suitable for family and society festive meetups, garba circles, and holiday games.",
      },
      {
        title: "Festive Dining & Banquets",
        description: "Inquire about customized festive menus, authentic seasonal sweets, and pure vegetarian lunch and dinner buffets.",
      },
      {
        title: "Overnight Holiday Stays",
        description: "Combine festive gatherings with overnight cottage and room stays for a complete holiday relaxation experience.",
      },
    ],
    packageContextNotice: "Please note: Special festive offers (such as seasonal Diwali stay packages) are subject to specific holiday calendar dates and require direct confirmation with the resort desk prior to booking.",
    faqList: [
      {
        q: "Can community groups or housing societies book private festival celebrations?",
        a: "Yes, private groups frequently book designated lawn areas and banquet spaces to celebrate festivals together with custom dining.",
      },
      {
        q: "Are festival meal packages available for large groups?",
        a: "Our kitchen prepares special festive vegetarian buffets tailored to the occasion, which can be arranged upon advance notice.",
      },
      {
        q: "How can we confirm rates and availability for festival dates?",
        a: "Because festival holidays experience high demand, we advise reaching out through our enquiry form or calling our front desk directly to confirm open dates.",
      },
    ],
    seoTitle: "Festival Celebrations at Swapna Srushti Resort | Gandhinagar",
    seoDescription: "Plan private festival celebrations, family get-togethers, and community festivities at Swapna Srushti Resort near Gandhinagar, Gujarat.",
  },
  {
    slug: "birthday-parties",
    name: "Birthday Parties",
    tagline: "Joyous Milestones & Family Celebrations",
    heroHeading: "Make Every Birthday Special",
    shortDescription: "Celebrate milestone birthdays, children's parties, and surprise gatherings amidst open gardens and welcoming resort hospitality.",
    fullDescription: "Whether marking a child's milestone birthday, a surprise 50th celebration, or a casual weekend party with closest friends, Swapna Srushti Resort provides joyful indoor and outdoor celebration spaces. Pair your gathering with swimming pool fun, parlor games, and delicious vegetarian delicacies crafted for all generations.",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1200&q=80",
      "/images/exact-pool.jpg",
    ],
    featuresAndEnquiryAreas: [
      {
        title: "Kids & Family Birthday Venues",
        description: "Safe, open garden lawns and banquet spaces offering plenty of room for children's games and family activities.",
      },
      {
        title: "Poolside Celebration Inquiries",
        description: "Inquire about combining your birthday celebration with swimming pool access and refreshing poolside high tea.",
      },
      {
        title: "Custom Vegetarian Party Menus",
        description: "Tailor snacks, lunch buffets, and evening high tea to delight both young children and elder family guests.",
      },
      {
        title: "Decoration & Setup Discussions",
        description: "Coordinate with our banquet team regarding balloon themes, seating arrangements, and cake-cutting tables.",
      },
    ],
    faqList: [
      {
        q: "Can we bring our own birthday cake and decorations?",
        a: "Yes, guests can bring personal birthday cakes and coordinate decoration themes with our banquet team.",
      },
      {
        q: "Is there entertainment or games for young children?",
        a: "Children can enjoy our recreation lounge (carrom, table tennis, board games), open green spaces, and swimming pool splash zones.",
      },
      {
        q: "What is the typical guest capacity for birthday party halls?",
        a: "We accommodate intimate parties of 25 to 50 guests in our halls and larger birthday gatherings of 150+ guests on open lawns.",
      },
    ],
    seoTitle: "Birthday Party Venue Near Gandhinagar | Swapna Srushti Resort",
    seoDescription: "Plan kids birthday parties, milestone birthdays, and family celebrations at Swapna Srushti Resort near Gandhinagar. Check venue spaces and enquiry details.",
  },
  {
    slug: "corporate-conferences",
    name: "Corporate Conferences",
    tagline: "Inspiring Leadership & Business Conclaves",
    heroHeading: "Meet, Connect and Celebrate",
    shortDescription: "A focused, distraction-free countryside environment for business conferences, corporate annual summits, and leadership retreats.",
    fullDescription: "Combine focused strategic sessions with refreshing green surroundings at Swapna Srushti Resort. Positioned conveniently along the Gandhinagar-Mahudi Highway, the resort offers air-conditioned conference halls and open breakout lawns suited for management offsites, corporate celebrations, annual reviews, and dealer meets.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
      "/images/sticky-adventure.jpg",
    ],
    featuresAndEnquiryAreas: [
      {
        title: "Conference Hall Configurations",
        description: "Flexible theatre, cluster, or boardroom seating setups with presentation podium and microphone access.",
      },
      {
        title: "Audio-Visual Equipment Requirements",
        description: "Discuss projector screens, sound systems, and high-speed Wi-Fi requirements for seamless presentations.",
      },
      {
        title: "Corporate Banqueting & High Tea",
        description: "Professional morning coffee breaks, executive vegetarian luncheon buffets, and evening networking high tea.",
      },
      {
        title: "Team-Building & Stay Integration",
        description: "Enquire about combining morning boardroom sessions with afternoon Adventure Park team challenges and overnight executive stays.",
      },
    ],
    faqList: [
      {
        q: "What audiovisual facilities are available for corporate meetings?",
        a: "Projection screens, sound amplifiers, microphones, and Wi-Fi connectivity can be arranged upon prior corporate request.",
      },
      {
        q: "Can corporate packages include both meeting facilities and team activities?",
        a: "Yes, companies frequently book full-day packages combining conference hall use with team activities at our Adventure Park.",
      },
      {
        q: "How can we receive an official corporate proposal?",
        a: "Submit your delegate count, preferred date, and requirements through our event enquiry form to receive a prompt proposal.",
      },
    ],
    seoTitle: "Corporate Events & Conferences Near Gandhinagar | Swapna Srushti Resort",
    seoDescription: "Host corporate conferences, business meetings, and executive offsites at Swapna Srushti Resort Gandhinagar. Inquire for AV setups and day delegate rates.",
  },
  {
    slug: "family-get-togethers",
    name: "Family Get-Togethers",
    tagline: "Cherished Reunions & Multi-Generation Bonding",
    heroHeading: "Make Time for What Matters",
    shortDescription: "Reunite extended generations in a peaceful nature sanctuary featuring cottages, private lawns, group games, and home-style dining.",
    fullDescription: "Taking time out for an extended family reunion is effortless at Swapna Srushti Resort. With multiple room and cottage categories, peaceful garden walking paths, swimming pool relaxation, and wholesome pure vegetarian meals, grandparents, parents, and children all find comfort and joy together.",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80",
      "/images/Tropical%20Resort%20Cottages%20at%20Sunset.png",
    ],
    featuresAndEnquiryAreas: [
      {
        title: "Multi-Generation Family Comfort",
        description: "Accommodate large family circles across Superior Rooms, Premium Rooms, Kutchi Huts, and standalone Cottages.",
      },
      {
        title: "All-Meal Inclusive Stay Options",
        description: "Enquire about stay packages covering Breakfast, Punjabi lunch, and Dinner so you can focus entirely on family bonding.",
      },
      {
        title: "Recreation for All Ages",
        description: "Enjoy peaceful garden strolls, indoor parlor games (carrom, chess, TT), pool time, and 50% discount on Adventure Park entry.",
      },
      {
        title: "Private Lawns for Evening Chats",
        description: "Gather for casual tea and evening conversations on tranquil manicured lawns under the starlit sky.",
      },
    ],
    faqList: [
      {
        q: "Can we book multiple rooms together for a large family reunion?",
        a: "Yes, our team can arrange block room bookings to keep family members close together across our room or cottage clusters.",
      },
      {
        q: "Are the meals suitable for elderly family members and Jain diets?",
        a: "Yes, our restaurant serves 100% pure vegetarian cuisine and prepares strict Jain meals with fresh ingredients upon request.",
      },
      {
        q: "What recreational options are available for families?",
        a: "Families can enjoy the swimming pool, indoor recreation lounge, outdoor badminton and cricket, Theme Village walks, and Adventure Park activities.",
      },
    ],
    seoTitle: "Family Get-Togethers at Swapna Srushti Resort | Gandhinagar",
    seoDescription: "Plan memorable family reunions and celebrations at Swapna Srushti Resort near Gandhinagar. Group cottage stays, vegetarian dining, and recreation for all ages.",
  },
  {
    slug: "one-day-picnic",
    name: "One-Day Picnic",
    tagline: "The Complete Day Retreat & Adventure",
    heroHeading: "Enjoy a Day of Recreation",
    shortDescription: "A full day of refreshing fun from 9:00 AM to 5:00 PM featuring 3 meals, 30 Adventure Park activities, swimming pool, and sports.",
    fullDescription: "Swapna Srushti Resort's One-Day Picnic package offers a complete daytime escape for families, corporate teams, and friend circles. Starting with morning breakfast, guests enjoy continuous access to over 30 adventure activities, traditional sports, indoor parlor games, lush gardens, the Theme Village, and the swimming pool, followed by a hearty lunch and evening high tea.",
    image: "https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?auto=format&fit=crop&w=1200&q=80",
      "/images/sticky-adventure.jpg",
      "/images/exact-pool.jpg",
    ],
    featuresAndEnquiryAreas: [
      {
        title: "All 3 Meals Included",
        description: "Breakfast on arrival, multi-course pure vegetarian lunch, and evening high tea with snacks before departure.",
      },
      {
        title: "Adventure Park Access",
        description: "Entry covering 30 activities (with three adventure activities available on a one-time basis per ticket).",
      },
      {
        title: "Complete Sports & Leisure",
        description: "Cricket, badminton, volleyball, pool table, foosball, carrom, chess, table tennis, Theme Village walks, and swimming pool.",
      },
      {
        title: "Clear Package Terms",
        description: "Tariff of ₹1,500 per person (+ GST). Non-refundable rates. Strictly 9:00 AM to 5:00 PM (does not include overnight rooms).",
      },
    ],
    faqList: [
      {
        q: "What are the timings for the One-Day Picnic package?",
        a: "The day picnic runs from 9:00 AM to 5:00 PM.",
      },
      {
        q: "What is the price of the Day Outing package?",
        a: "The supplied rate is ₹1,500 per person (plus applicable GST). Rates are non-refundable.",
      },
      {
        q: "Does the day package include room accommodation?",
        a: "No, the Day Outing package is specifically a daytime retreat and does not include overnight room accommodation.",
      },
      {
        q: "Which adventure activities are included?",
        a: "It includes access to the Adventure Park covering 30 activities, with three adventure activities available on a one-time basis.",
      },
    ],
    seoTitle: "Day Outing Package at Swapna Srushti Resort & Adventure Park",
    seoDescription: "Book a full-day picnic package at Swapna Srushti Resort Gandhinagar for ₹1,500/person. Includes 3 meals, 30 adventure activities, swimming pool, and sports.",
  },
];

