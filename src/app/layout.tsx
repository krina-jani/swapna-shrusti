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
  title: "Swapna Srushti Resort — The World of Eternal Joy | Luxury Nature Resort",
  description: "Experience serene luxury, lush nature, cottages, water park, adventure activities, destination weddings, and authentic dining at Swapna Srushti Resort.",
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
