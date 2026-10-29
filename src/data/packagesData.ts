export interface RoomPackagePrice {
  roomName: string;
  slug?: string;
  pricePerCouple: number;
  priceDisplay: string;
  notes?: string;
}

export interface ResortPackage {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: "festive-stay" | "standard-stay" | "day-outing";
  duration: string;
  badge: string;
  timings: {
    checkIn?: string;
    checkOut?: string;
    operatingHours?: string;
  };
  pricing: {
    perPerson?: number;
    priceDisplay?: string;
    roomPricing?: RoomPackagePrice[];
    extraPersonPrice: number;
    extraPersonDisplay: string;
    taxNotes: string;
  };
  inclusions: string[];
  conditions: string[];
  isSeasonalOffer?: boolean;
  seasonalNotice?: string;
  description: string;
  image: string;
}

export const RESORT_PACKAGES: ResortPackage[] = [
  {
    id: "diwali-package",
    slug: "diwali-package",
    name: "Swapna Srushti Resort Diwali Package",
    tagline: "Festive Holiday Getaway",
    category: "festive-stay",
    duration: "1 Night",
    badge: "Seasonal Festive Offer",
    timings: {
      checkIn: "12:00 PM",
      checkOut: "10:00 AM",
    },
    pricing: {
      roomPricing: [
        { roomName: "Superior Room", slug: "superior-rooms", pricePerCouple: 6500, priceDisplay: "₹6,500" },
        { roomName: "Premium Room", slug: "premium-rooms", pricePerCouple: 7000, priceDisplay: "₹7,000" },
        { roomName: "Kutchi Huts", slug: "cottages", pricePerCouple: 7500, priceDisplay: "₹7,500", notes: "Standalone nature hut" },
        { roomName: "Executive Cottage", slug: "executive-suites", pricePerCouple: 8500, priceDisplay: "₹8,500", notes: "Secluded executive cottage" },
      ],
      extraPersonPrice: 2000,
      extraPersonDisplay: "₹2,000 per extra person",
      taxNotes: "GST is extra.",
    },
    inclusions: [
      "Breakfast",
      "Punjabi lunch",
      "Dinner",
      "Indoor games",
      "Outdoor games",
      "Swimming pool access",
      "Gym access",
      "Theme Village access",
      "Garden area access",
      "Adventure Park entry at 50% off",
    ],
    conditions: [
      "GST is extra on all published tariffs.",
      "Valid for 1 night stay per couple.",
      "Check-in at 12:00 PM; Check-out at 10:00 AM.",
      "Applicable dates and availability must be confirmed directly with the resort desk prior to booking.",
    ],
    isSeasonalOffer: true,
    seasonalNotice: "Please note: Diwali package dates, seasonal schedules, and availability must be confirmed directly with the resort prior to making reservation plans.",
    description: "Celebrate the joy and light of Diwali amidst nature at Swapna Srushti Resort. Enjoy traditional festive ambiance, multi-course Punjabi and Gujarati dining, recreational sports, and 50% savings on Adventure Park entry.",
    image: "/images/sticky-wedding.jpg",
  },
  {
    id: "standard-stay-package",
    slug: "standard-stay-package",
    name: "Swapna Srushti Resort Stay Package",
    tagline: "Relaxing Overnight Retreat",
    category: "standard-stay",
    duration: "1 Night / 2 Days",
    badge: "Most Popular Stay",
    timings: {
      checkIn: "12:00 PM",
      checkOut: "10:00 AM",
    },
    pricing: {
      roomPricing: [
        { roomName: "Superior Room", slug: "superior-rooms", pricePerCouple: 5500, priceDisplay: "₹5,500" },
        { roomName: "Premium Room", slug: "premium-rooms", pricePerCouple: 6000, priceDisplay: "₹6,000" },
        { roomName: "Kutchi Huts", slug: "cottages", pricePerCouple: 6500, priceDisplay: "₹6,500", notes: "Standalone nature hut" },
        { roomName: "Executive Cottage", slug: "executive-suites", pricePerCouple: 7500, priceDisplay: "₹7,500", notes: "Secluded executive cottage" },
      ],
      extraPersonPrice: 2000,
      extraPersonDisplay: "₹2,000 per extra person",
      taxNotes: "GST is extra.",
    },
    inclusions: [
      "Breakfast",
      "Punjabi lunch",
      "Dinner",
      "Indoor games",
      "Outdoor games",
      "Swimming pool access",
      "Gym access",
      "Theme Village access",
      "Garden area access",
      "Adventure Park entry at 50% off",
    ],
    conditions: [
      "GST is extra on all tariffs.",
      "Valid for 1 night / 2 days per couple.",
      "Check-in: 12:00 PM, Check-out: 10:00 AM.",
      "Advance reservation recommended to secure preferred room tier.",
    ],
    isSeasonalOffer: false,
    description: "Unwind on the tranquil grounds of Swapna Srushti Resort with inclusive pure vegetarian dining (breakfast, Punjabi lunch, and dinner), garden walks, swimming pool, parlor games, and 50% discount on Adventure Park admission.",
    image: "/images/Tropical%20Resort%20Cottages%20at%20Sunset.png",
  },
  {
    id: "day-outing-package",
    slug: "day-outing-package",
    name: "Swapna Srushti Resort & Adventure Park Day Outing",
    tagline: "All-Day Recreation & Adventure",
    category: "day-outing",
    duration: "Full Day (9:00 AM – 5:00 PM)",
    badge: "Day Picnic Special",
    timings: {
      operatingHours: "9:00 AM – 5:00 PM",
    },
    pricing: {
      perPerson: 1500,
      priceDisplay: "₹1,500 per person",
      extraPersonPrice: 1500,
      extraPersonDisplay: "₹1,500 per person",
      taxNotes: "GST is extra. Rates are non-refundable.",
    },
    inclusions: [
      "Breakfast",
      "Lunch",
      "High tea with snacks",
      "Adventure Park entry covering 30 activities",
      "Cricket",
      "Badminton",
      "Volleyball",
      "Pool table",
      "Foosball",
      "Carrom",
      "Chess",
      "Table tennis",
      "Garden area access",
      "Theme Village access",
      "Swimming pool access",
    ],
    conditions: [
      "GST is extra.",
      "Rates are non-refundable.",
      "Operating hours strictly 9:00 AM to 5:00 PM.",
      "Does not include overnight room accommodation.",
      "Three adventure activities are available on a one-time basis.",
    ],
    isSeasonalOffer: false,
    description: "The ideal day picnic for families, school groups, and corporate gatherings. Spanning 9:00 AM to 5:00 PM with all three meals (breakfast, lunch, and high tea with snacks), 30 adventure park activities (with 3 one-time adventure activities), and access to sports, games, and the pool.",
    image: "/images/sticky-picnic.jpg",
  },
];

