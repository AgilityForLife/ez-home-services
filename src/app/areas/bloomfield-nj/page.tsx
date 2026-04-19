import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  Droplets,
  Sparkles,
  Shield,
  Star,
  MapPin,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Pressure Washing, Window Cleaning & Gutter Services in Bloomfield NJ",
  description:
    "EZ Home Services provides professional pressure washing, window cleaning, and gutter maintenance in Bloomfield, NJ. Veteran-owned, licensed & insured. Serving Bloomfield and surrounding areas. Call (862) 202-0908.",
  alternates: {
    canonical: "https://ezhomeservices.business/areas/bloomfield-nj",
  },
  openGraph: {
    title:
      "Exterior Cleaning Services in Bloomfield NJ | EZ Home Services",
    description:
      "Professional pressure washing, window cleaning & gutter maintenance in Bloomfield, New Jersey. Licensed & insured. Free estimates.",
    url: "https://ezhomeservices.business/areas/bloomfield-nj",
    type: "website",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "EZ Home Services — Bloomfield NJ",
  description:
    "Professional pressure washing, window cleaning, and gutter maintenance services in Bloomfield, New Jersey. Veteran-owned, licensed & insured.",
  url: "https://ezhomeservices.business/areas/bloomfield-nj",
  telephone: "+1-862-202-0908",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bloomfield",
    addressRegion: "NJ",
    postalCode: "07003",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.7904,
    longitude: -74.1854,
  },
  areaServed: {
    "@type": "City",
    name: "Bloomfield",
    containedIn: {
      "@type": "State",
      name: "New Jersey",
    },
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Bloomfield NJ Exterior Cleaning Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pressure Washing Bloomfield NJ",
          description:
            "Professional pressure washing for driveways, sidewalks, patios, and house siding in Bloomfield, New Jersey.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Window Cleaning Bloomfield NJ",
          description:
            "Residential and commercial window cleaning services in Bloomfield, NJ. Interior & exterior.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Gutter Cleaning Bloomfield NJ",
          description:
            "Gutter cleaning, debris removal, and downspout flushing for Bloomfield, NJ homes.",
        },
      },
    ],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does pressure washing cost in Bloomfield NJ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pressure washing in Bloomfield NJ starts at $175 for smaller surfaces like sidewalks. Driveways typically cost around $275, and full house siding soft wash starts at $525. We offer free estimates and bundled service discounts.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer window cleaning in Bloomfield?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! EZ Home Services offers professional window cleaning in Bloomfield NJ. Exterior window cleaning for up to 30 windows starts at $425. Interior & exterior packages are also available.",
      },
    },
    {
      "@type": "Question",
      name: "Are you licensed and insured to work in Bloomfield NJ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. EZ Home Services is fully licensed and insured to operate in Bloomfield and throughout Essex County, New Jersey. We are also a veteran-owned business.",
      },
    },
  ],
};

const services = [
  {
    icon: Shield,
    title: "Pressure Washing",
    description:
      "Driveways, sidewalks, patios, decks, and house siding. We use the right pressure for each surface — high-PSI for concrete, soft wash for siding and painted surfaces.",
    keywords: "pressure washing Bloomfield NJ, power washing Bloomfield",
  },
  {
    icon: Droplets,
    title: "Window Cleaning",
    description:
      "Crystal-clear windows for homes and businesses in Bloomfield. Professional water-fed pole systems and hand-squeegee techniques. Interior & exterior available.",
    keywords: "window cleaning Bloomfield NJ, window washer Bloomfield",
  },
  {
    icon: Sparkles,
    title: "Gutter Cleaning",
    description:
      "Complete gutter cleaning with debris removal, downspout flushing, and visual inspection. Protect your Bloomfield home from water damage year-round.",
    keywords: "gutter cleaning Bloomfield NJ, gutter maintenance Bloomfield",
  },
];

const neighborhoods = [
  "Brookdale",
  "Watsessing",
  "Bloomfield Center",
  "Silver Lake",
  "Ampere",
  "North End",
  "Halcyon Park",
  "Oak View",
];

export default function BloomfieldNJ() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-blue-400 mb-3">
            <MapPin className="w-4 h-4" />
            Bloomfield, New Jersey
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">
            Exterior Cleaning Services in Bloomfield, NJ
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            Professional pressure washing, window cleaning, and gutter
            maintenance for Bloomfield homes and businesses. Veteran-owned,
            licensed &amp; insured. Based right here in Bloomfield.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/quote"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-lg hover:from-blue-500 hover:to-cyan-400 transition-all shadow-xl shadow-blue-500/25"
            >
              Get Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:8622020908"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/10 text-white font-semibold text-lg hover:bg-white/5 transition-all"
            >
              <Phone className="w-5 h-5" />
              (862) 202-0908
            </a>
          </div>
        </div>
      </section>

      {/* Why Bloomfield */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-2xl bg-card-bg border border-card-border">
            <h2 className="text-2xl font-bold text-white mb-4">
              Why Bloomfield Homeowners Trust EZ Home Services
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              As a Bloomfield-based business, we know the area inside and
              out. We understand the unique challenges that Essex County homes
              face — from the mature tree canopy that clogs gutters every
              fall, to the road salt damage that hits Garden State Parkway
              corridor properties hardest in winter.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Being local means faster response times, no travel surcharges,
              and the accountability that comes with working in your own
              community. Our owner, Erick Rosa, is a veteran and Bloomfield
              resident who takes pride in keeping our neighborhood looking
              its best.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: "Based in Bloomfield", icon: MapPin },
                { label: "Veteran-Owned", icon: Shield },
                { label: "Licensed & Insured", icon: CheckCircle2 },
                { label: "5-Star Rated", icon: Star },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <item.icon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-300 font-medium">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Our Services in Bloomfield
          </h2>
          <div className="space-y-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-6 rounded-xl bg-card-bg border border-card-border"
              >
                <div className="flex items-start gap-4">
                  <service.icon className="w-8 h-8 text-blue-400 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {service.title} in Bloomfield, NJ
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-2xl bg-card-bg border border-card-border">
            <h2 className="text-2xl font-bold text-white mb-4">
              Bloomfield Neighborhoods We Serve
            </h2>
            <p className="text-gray-400 mb-4">
              We provide exterior cleaning services throughout all of
              Bloomfield, including:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {neighborhoods.map((n) => (
                <p
                  key={n}
                  className="text-sm text-gray-300 py-1 px-2 rounded bg-white/5"
                >
                  {n}
                </p>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-4">
              We also serve neighboring communities including Glen Ridge,
              Montclair, Nutley, Belleville, and East Orange.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Bloomfield Pressure Washing FAQ
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "How much does pressure washing cost in Bloomfield NJ?",
                a: "Pressure washing in Bloomfield starts at $175 for smaller surfaces like sidewalks. Driveways typically cost around $275, and full house siding soft wash starts at $525. We offer free estimates and bundled service discounts.",
              },
              {
                q: "Do you offer window cleaning in Bloomfield?",
                a: "Yes! EZ Home Services offers professional window cleaning in Bloomfield NJ. Exterior window cleaning for up to 30 windows starts at $425. Interior & exterior packages are also available starting at $625.",
              },
              {
                q: "Are you licensed and insured to work in Bloomfield NJ?",
                a: "Absolutely. EZ Home Services is fully licensed and insured to operate in Bloomfield and throughout Essex County, New Jersey. We are also a veteran-owned business.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="p-6 rounded-xl bg-card-bg border border-card-border"
              >
                <h3 className="text-white font-bold mb-2">{faq.q}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-950/50 to-cyan-950/50 border border-blue-500/20 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Get a Free Estimate for Your Bloomfield Home
            </h2>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto">
              Whether you need pressure washing, window cleaning, or gutter
              maintenance — we&apos;re right here in Bloomfield and ready to
              help. No obligation, no pressure.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/quote"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-lg hover:from-blue-500 hover:to-cyan-400 transition-all shadow-xl shadow-blue-500/25"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:8622020908"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/10 text-white font-semibold text-lg hover:bg-white/5 transition-all"
              >
                <Phone className="w-5 h-5" />
                (862) 202-0908
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
