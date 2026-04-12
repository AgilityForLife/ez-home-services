import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Free Quote | No-Obligation Estimate",
  description:
    "Request a free, no-obligation quote for window cleaning, gutter maintenance, or pressure washing services in Central & Northern NJ. We respond within 24 hours.",
  alternates: {
    canonical: "https://ezhomeservices.business/quote",
  },
  openGraph: {
    title: "Get a Free Quote | EZ Home Services",
    description:
      "Select your services, add extras, and get a personalized quote within 24 hours. Free estimates for Central & Northern NJ.",
    url: "https://ezhomeservices.business/quote",
    type: "website",
  },
};

export default function QuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
