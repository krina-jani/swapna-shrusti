import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resort Accommodations, Cottages & Suites | Swapna Srushti Resort",
  description: "Explore luxury rooms, cottages, executive suites, and authentic theme village stays at Swapna Srushti Resort near Gandhinagar, Gujarat. Book your serene getaway.",
  keywords: [
    "Swapna Srushti Resort rooms",
    "Resort cottages near Gandhinagar",
    "Luxury suites near Ahmedabad",
    "Theme village stay Gujarat",
    "Family resort accommodation Gandhinagar",
    "Swapna Srushti stay packages",
  ],
};

export default function AccommodationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

