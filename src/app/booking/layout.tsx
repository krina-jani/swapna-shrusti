import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Your Stay | Swapna Srushti Resort Gandhinagar",
  description: "Reserve your luxury cottage, executive suite, or theme village room at Swapna Srushti Resort. Transparent pricing, seasonal discounts, and instant reservations.",
  keywords: [
    "Swapna Srushti online booking",
    "Book resort stay Gandhinagar",
    "Swapna Srushti room reservation",
    "Weekend getaway booking Gujarat",
  ],
};

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

