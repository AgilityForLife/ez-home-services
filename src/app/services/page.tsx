import type { Metadata } from "next";
import Link from "next/link";
import {
  Droplets,
  Sparkles,
  Shield,
  CheckCircle2,
  ArrowRight,
  Phone,
  Calendar,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services & Pricing | Window Cleaning, Gutter & Pressure Washing",
  description:
    "Transparent pricing for professional window cleaning (from $350), gutter cleaning (from $175), and pressure washing (from $150) in Central & Northern NJ. No hidden fees. Free estimates.",
  alternates: {
    canonical: "https://ezhomeservices.business/services",
  },
  openGraph: {
    title: "Services & Pricing | EZ Home Services",
    description:
      "Window cleaning, gutter maintenance & pressure washing with transparent pricing. Serving Central & Northern NJ.",
    url: "https://ezhomeservices.business/services",
    type: "website",
  },
};

const services = [
  {
    id: "window-cleaning",
    icon: Droplets,
    title: "Window Cleaning",
    tagline: "Crystal-clear views, guaranteed.",
    description:
      "Our professional window cleaning service delivers streak-free, sparkling results for both residential and commercial properties. We use purified water-fed pole systems and traditional squeegee techniques depending on your property's needs.",
    pricing: [
      { label: "Exterior Only (up to 30 windows)", price: "$350", note: "Online Special" },
      { label: "Interior & Exterior (up to 30 windows)", price: "$550", note: "" },
      { label: "Additional windows", price: "$12/window", note: "" },
      { label: "Screen cleaning", price: "$5/screen", note: "Add-on" },
      { label: "Track & sill cleaning", price: "$75", note: "Add-on" },
    ],
    features: [
      "Water-fed pole system for 2-3 story homes",
      "Traditional hand-squeegee for detail work",
      "Eco-friendly cleaning solutions",
      "Screen removal & cleaning available",
      "Window track and sill detailing",
      "Hard water stain removal",
    ],
  },
  {
    id: "gutter-maintenance",
    icon: Sparkles,
    title: "Gutter Cleaning & Maintenance",
    tagline: "Protect your home from water damage.",
    description:
      "Clogged gutters can lead to costly water damage, foundation issues, and pest infestations. Our thorough gutter cleaning service removes all debris, flushes downspouts, and includes a visual inspection for any issues.",
    pricing: [
      { label: "Single-story home", price: "$175", note: "" },
      { label: "Two-story home", price: "$250", note: "" },
      { label: "Large / multi-story home", price: "$350+", note: "Custom quote" },
      { label: "Downspout unclogging", price: "$75", note: "Add-on" },
      { label: "Gutter guard inspection", price: "Free", note: "With service" },
    ],
    features: [
      "Complete debris removal by hand",
      "Downspout flushing & unclogging",
      "Gutter & fascia inspection",
      "Before & after photos provided",
      "Minor reattachment & sealing",
      "Seasonal maintenance plans available",
    ],
  },
  {
    id: "pressure-washing",
    icon: Shield,
    title: "Pressure Washing",
    tagline: "Restore your property's curb appeal.",
    description:
      "Years of dirt, mold, algae, and grime can make your property look run-down. Our professional pressure washing (and soft washing for delicate surfaces) brings everything back to life safely and effectively.",
    pricing: [
      { label: "Driveway (standard 2-car)", price: "$200", note: "" },
      { label: "Sidewalk / walkway", price: "$100", note: "" },
      { label: "Deck or patio (up to 200 sq ft)", price: "$150", note: "" },
      { label: "House siding (soft wash)", price: "$450", note: "Avg. home" },
      { label: "Fence cleaning", price: "$150", note: "Add-on" },
    ],
    features: [
      "Hot & cold water pressure washing",
      "Soft wash available for delicate surfaces",
      "Eco-friendly, biodegradable detergents",
      "Concrete, brick, wood, vinyl, and stone",
      "Oil stain & rust removal",
      "Surface sealing available as add-on",
    ],
  },
];

const addOns = [
  { name: "Screen Cleaning", price: "$5/screen", desc: "Add to any window cleaning service" },
  { name: "Track & Sill Detail", price: "$75", desc: "Deep clean all window tracks & sills" },
  { name: "Hard Water Stain Removal", price: "$15/window", desc: "Mineral deposit removal" },
  { name: "Downspout Unclogging", price: "$75", desc: "Add to gutter service" },
  { name: "Fence Cleaning", price: "$150+", desc: "Add to pressure washing" },
  { name: "Surface Sealing", price: "From $200", desc: "Post-pressure wash protective seal" },
];

// Service Schema for rich results
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "EZ Home Services — Services & Pricing",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "Window Cleaning",
        description:
          "Professional window cleaning service with streak-free results for residential and commercial properties. Water-fed pole systems and traditional squeegee techniques.",
        provider: {
          "@type": "LocalBusiness",
          name: "EZ Home Services",
        },
        areaServed: [
          { "@type": "AdministrativeArea", name: "Central New Jersey" },
          { "@type": "AdministrativeArea", name: "Northern New Jersey" },
        ],
        offers: [
          {
            "@type": "Offer",
            name: "Exterior Only (up to 30 windows)",
            price: "350.00",
            priceCurrency: "USD",
          },
          {
            "@type": "Offer",
            name: "Interior & Exterior (up to 30 windows)",
            price: "550.00",
            priceCurrency: "USD",
          },
        ],
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "Gutter Cleaning & Maintenance",
        description:
          "Thorough gutter cleaning service with debris removal, downspout flushing, and visual inspection to protect your home from water damage.",
        provider: {
          "@type": "LocalBusiness",
          name: "EZ Home Services",
        },
        areaServed: [
          { "@type": "AdministrativeArea", name: "Central New Jersey" },
          { "@type": "AdministrativeArea", name: "Northern New Jersey" },
        ],
        offers: [
          {
            "@type": "Offer",
            name: "Single-story home",
            price: "175.00",
            priceCurrency: "USD",
          },
          {
            "@type": "Offer",
            name: "Two-story home",
            price: "250.00",
            priceCurrency: "USD",
          },
        ],
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "Pressure Washing",
        description:
          "Professional pressure washing and soft washing for driveways, sidewalks, patios, decks, and house siding. Eco-friendly, biodegradable detergents.",
        provider: {
          "@type": "LocalBusiness",
          name: "EZ Home Services",
        },
        areaServed: [
          { "@type": "AdministrativeArea", name: "Central New Jersey" },
          { "@type": "AdministrativeArea", name: "Northern New Jersey" },
        ],
        offers: [
          {
            "@type": "Offer",
            name: "Driveway (standard 2-car)",
            price: "200.00",
            priceCurrency: "USD",
          },
          {
            "@type": "Offer",
            name: "House siding (soft wash)",
            price: "450.00",
            priceCurrency: "USD",
          },
        ],
      },
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      {/* Service Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-400 mb-3">
            Our Services
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">
            Services &amp; Pricing
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Bundle services and add-ons
            to customize your package.
          </p>
        </div>
      </section>

      {/* Service Detail Cards */}
      {services.map((service, idx) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-16 md:py-24 ${idx % 2 === 1 ? "bg-[#060606]" : ""}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Info */}
              <div>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-500/20 border border-blue-500/20 flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-blue-400" />
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
                  {service.title}
                </h2>
                <p className="text-blue-400 font-semibold mb-4">
                  {service.tagline}
                </p>
                <p className="text-gray-400 leading-relaxed mb-8">
                  {service.description}
                </p>
                <h3 className="text-lg font-bold text-white mb-4">
                  What&apos;s Included
                </h3>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing Card */}
              <div className="p-8 rounded-2xl bg-card-bg border border-card-border">
                <h3 className="text-xl font-bold text-white mb-6">Pricing</h3>
                <div className="space-y-4">
                  {service.pricing.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between py-3 border-b border-white/5 last:border-0"
                    >
                      <div>
                        <p className="text-gray-200 font-medium">
                          {item.label}
                        </p>
                        {item.note && (
                          <p className="text-xs text-blue-400 mt-0.5">
                            {item.note}
                          </p>
                        )}
                      </div>
                      <p className="text-white font-bold text-lg">
                        {item.price}
                      </p>
                    </div>
                  ))}
                </div>
                <Link
                  href="/quote"
                  className="mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:from-blue-500 hover:to-cyan-400 transition-all shadow-lg shadow-blue-500/25"
                >
                  Get a Quote for {service.title}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Add-Ons */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-400 mb-3">
              Customize Your Service
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Popular Add-Ons
            </h2>
            <p className="mt-3 text-gray-400">
              Enhance any service with these add-ons for a complete clean.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {addOns.map((addon) => (
              <div
                key={addon.name}
                className="flex items-center justify-between p-5 rounded-xl bg-card-bg border border-card-border hover:border-blue-500/30 transition-colors"
              >
                <div>
                  <p className="text-white font-semibold">{addon.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{addon.desc}</p>
                </div>
                <p className="text-blue-400 font-bold whitespace-nowrap ml-4">
                  {addon.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Remote Estimate */}
      <section className="py-16 md:py-20 bg-[#060606]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Calendar className="w-12 h-12 text-blue-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Not Sure What You Need?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Schedule a free phone consultation. We&apos;ll use Google Earth to
            assess your property and give you an accurate estimate remotely — no
            on-site visit required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://calendly.com/ezhomeservices"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-lg hover:from-blue-500 hover:to-cyan-400 transition-all shadow-lg shadow-blue-500/25"
            >
              <Calendar className="w-5 h-5" />
              Schedule Phone Estimate
            </a>
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
    </>
  );
}
