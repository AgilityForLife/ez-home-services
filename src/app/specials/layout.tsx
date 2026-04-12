import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Specials | $350 Exterior Window Cleaning Deal",
  description:
    "EZ Home Services online special: $350 for up to 30 exterior windows. Stack discounts — save $50 with a Google review, another $50 with cash payment. Pay as low as $250! Central & Northern NJ.",
  alternates: {
    canonical: "https://ezhomeservices.business/specials",
  },
  openGraph: {
    title: "Online Specials | EZ Home Services",
    description:
      "$350 for up to 30 exterior windows. Stack discounts and pay as low as $250. Serving Central & Northern NJ.",
    url: "https://ezhomeservices.business/specials",
    type: "website",
  },
};

export default function SpecialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
