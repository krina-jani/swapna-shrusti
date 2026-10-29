import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const serifFont = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sansFont = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://swapnasrushtiresort.in"),
  title: {
    default: "Swapna Srushti Resort — The World of Eternal Joy | Luxury Nature Resort Gandhinagar",
    template: "%s | Swapna Srushti Resort",
  },
  description: "Experience Gujarat's premier luxury resort along the Gandhinagar-Mahudi Highway. Featuring authentic theme village cottages, water park thrills, adventure sports, destination wedding lawns, and pure vegetarian dining.",
  keywords: [
    "Swapna Srushti Resort",
    "Swapna Srushti Water Park",
    "Swapna Srushti Adventure Park",
    "Luxury Resort Gandhinagar",
    "Best Resort near Ahmedabad",
    "Destination Wedding Venue Gujarat",
    "Theme Village Stay Gujarat",
    "Family One-Day Picnic Resort",
    "Pre-wedding shoot locations Gujarat",
  ],
  authors: [{ name: "Swapna Srushti Resort" }],
  creator: "Swapna Srushti Resort",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://swapnasrushtiresort.in",
    siteName: "Swapna Srushti Resort",
    title: "Swapna Srushti Resort — The World of Eternal Joy | Luxury Nature Resort",
    description: "Serene cottages, world-class water park, adventure tracks, grand event lawns, and pure vegetarian dining near Gandhinagar & Ahmedabad.",
    images: [
      {
        url: "/images/waterpark/waterpark-aerial.jpg",
        width: 1200,
        height: 630,
        alt: "Swapna Srushti Resort & Water Park",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Swapna Srushti Resort — Luxury Nature Resort Gandhinagar",
    description: "Serene cottages, water park thrills, adventure activities, destination weddings, and pure vegetarian dining.",
    images: ["/images/waterpark/waterpark-aerial.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serifFont.variable} ${sansFont.variable} scroll-smooth`}>
      <body className="bg-[#F7F3E9] text-[#202522] font-sans antialiased selection:bg-[#C5A46D] selection:text-white">
        {children}
      </body>
    </html>
  );
}
