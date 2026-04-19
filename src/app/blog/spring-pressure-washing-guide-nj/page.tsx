import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Phone,
  Calendar,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Droplets,
  Sun,
  Thermometer,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Spring Pressure Washing Guide for New Jersey Homeowners | EZ Home Services",
  description:
    "Complete spring pressure washing guide for NJ homeowners. Learn when to pressure wash, what surfaces need attention after winter, DIY vs professional tips, and how to protect your property's curb appeal.",
  alternates: {
    canonical:
      "https://ezhomeservices.business/blog/spring-pressure-washing-guide-nj",
  },
  openGraph: {
    title: "Spring Pressure Washing Guide for New Jersey Homeowners",
    description:
      "Winter is over — here's how to get your driveway, siding, and deck looking brand new. Expert tips from EZ Home Services.",
    url: "https://ezhomeservices.business/blog/spring-pressure-washing-guide-nj",
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Spring Pressure Washing Guide for New Jersey Homeowners",
  description:
    "Complete spring pressure washing guide for NJ homeowners. Learn when to pressure wash, what surfaces need attention after winter, and DIY vs professional tips.",
  author: {
    "@type": "Organization",
    name: "EZ Home Services",
    url: "https://ezhomeservices.business",
  },
  publisher: {
    "@type": "Organization",
    name: "EZ Home Services",
    url: "https://ezhomeservices.business",
  },
  datePublished: "2026-04-16",
  dateModified: "2026-04-16",
  mainEntityOfPage:
    "https://ezhomeservices.business/blog/spring-pressure-washing-guide-nj",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When is the best time to pressure wash in New Jersey?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Late March through May is ideal in NJ. Temperatures should be consistently above 40°F, and spring rains help loosen winter grime. Avoid pressure washing during freezing conditions as water can seep into cracks and cause damage.",
      },
    },
    {
      "@type": "Question",
      name: "How much does professional pressure washing cost in NJ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Prices vary by surface and size. Driveways typically start around $275, sidewalks from $175, decks and patios from $225, and full house siding soft wash from $525. Many companies offer bundled discounts when combining multiple surfaces.",
      },
    },
    {
      "@type": "Question",
      name: "Can pressure washing damage my home's siding?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, if done incorrectly. Vinyl siding, painted wood, and stucco require soft washing — a low-pressure technique using specialized detergents. High pressure should only be used on concrete, brick, and stone surfaces. This is one reason many homeowners choose professional services.",
      },
    },
  ],
};

export default function SpringPressureWashingGuide() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="inline-flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              April 16, 2026
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="w-4 h-4" />6 min read
            </span>
            <span className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium">
              Pressure Washing
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Spring Pressure Washing Guide for New Jersey Homeowners
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Winter in New Jersey is tough on your property. Between road salt
            spray, freeze-thaw cycles, mold growth, and months of accumulated
            grime, your exterior surfaces take a beating. Here&apos;s your
            complete guide to restoring your curb appeal this spring.
          </p>
        </div>
      </section>

      {/* Article Body */}
      <article className="pb-20 md:pb-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Section 1 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Thermometer className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">
                  Why Spring Is the Best Time to Pressure Wash in NJ
                </h2>
              </div>
              <div className="p-6 rounded-xl bg-card-bg border border-card-border space-y-4">
                <p className="text-gray-400 leading-relaxed">
                  New Jersey winters create the perfect conditions for exterior
                  buildup. Road salt gets kicked onto your siding and walkways.
                  Freeze-thaw cycles push mold and mildew deep into concrete
                  pores. Fallen leaves decompose and stain decks and patios.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Spring — specifically late March through May — is the ideal
                  window for pressure washing. Temperatures are consistently
                  above 40&deg;F (important because water can freeze in cracks
                  below that), spring rains help pre-loosen grime, and
                  you&apos;re getting ahead of the summer season when
                  you&apos;ll actually want to enjoy your outdoor spaces.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Waiting too long means algae and mold have more time to set
                  in, making them harder and more expensive to remove later.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">
                  Your Spring Pressure Washing Checklist
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    surface: "Driveway & Walkways",
                    why: "Salt stains, oil drips, and embedded dirt from winter traffic",
                    tip: "Concrete can handle high-pressure (3,000+ PSI). Pre-treat oil stains with degreaser for best results.",
                  },
                  {
                    surface: "House Siding",
                    why: "Mold, mildew, and green algae growth on north-facing walls",
                    tip: "Use soft washing (low pressure + detergent) for vinyl, wood, and painted surfaces. Never use high pressure on siding.",
                  },
                  {
                    surface: "Deck & Patio",
                    why: "Leaf stain discoloration, slippery algae buildup, weathered finish",
                    tip: "Wood decks need low-to-medium pressure (under 1,500 PSI). Consider re-staining after washing for maximum protection.",
                  },
                  {
                    surface: "Fences",
                    why: "Green algae, dirt splatter, discoloration",
                    tip: "Vinyl fences clean easily. Wood fences need gentle pressure to avoid splintering.",
                  },
                ].map((item) => (
                  <div
                    key={item.surface}
                    className="p-6 rounded-xl bg-card-bg border border-card-border"
                  >
                    <h3 className="text-lg font-bold text-white mb-2">
                      {item.surface}
                    </h3>
                    <p className="text-sm text-gray-400 mb-3">{item.why}</p>
                    <p className="text-sm text-blue-400">
                      <span className="font-semibold">Pro tip:</span> {item.tip}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-yellow-400" />
                <h2 className="text-2xl font-bold text-white">
                  DIY vs. Professional: When to Call a Pro
                </h2>
              </div>
              <div className="p-6 rounded-xl bg-card-bg border border-card-border space-y-4">
                <p className="text-gray-400 leading-relaxed">
                  Renting a pressure washer from your local hardware store is
                  fine for small, flat concrete areas. But there are situations
                  where professional service saves you time, money, and
                  potential damage:
                </p>
                <div className="grid sm:grid-cols-2 gap-6 mt-4">
                  <div>
                    <h3 className="text-white font-bold mb-2">
                      DIY-Friendly
                    </h3>
                    <ul className="space-y-2">
                      {[
                        "Small patio or walkway section",
                        "Outdoor furniture and planters",
                        "Trash can area cleanup",
                        "Garden tools and equipment",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-gray-400"
                        >
                          <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">
                      Call a Professional
                    </h3>
                    <ul className="space-y-2">
                      {[
                        "Full driveway or large concrete areas",
                        "House siding (soft wash required)",
                        "Second-story surfaces",
                        "Wood decks (wrong PSI = damage)",
                        "Roof cleaning (never use high pressure)",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-gray-400"
                        >
                          <AlertTriangle className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Droplets className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">
                  Soft Washing vs. Pressure Washing: Know the Difference
                </h2>
              </div>
              <div className="p-6 rounded-xl bg-card-bg border border-card-border space-y-4">
                <p className="text-gray-400 leading-relaxed">
                  This is one of the most common mistakes homeowners make.
                  Pressure washing uses high-pressure water (2,500–4,000 PSI)
                  to blast away grime. Soft washing uses low pressure (under
                  500 PSI) combined with specialized eco-friendly detergents
                  that kill mold, mildew, and algae at the root.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead>
                      <tr className="border-b border-card-border">
                        <th className="py-3 pr-4 text-gray-300 font-semibold">
                          Surface
                        </th>
                        <th className="py-3 pr-4 text-gray-300 font-semibold">
                          Method
                        </th>
                        <th className="py-3 text-gray-300 font-semibold">
                          Why
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-400">
                      <tr className="border-b border-card-border/50">
                        <td className="py-3 pr-4">Concrete / Brick</td>
                        <td className="py-3 pr-4 text-blue-400">
                          Pressure Wash
                        </td>
                        <td className="py-3">
                          Hard surfaces can handle high PSI
                        </td>
                      </tr>
                      <tr className="border-b border-card-border/50">
                        <td className="py-3 pr-4">Vinyl Siding</td>
                        <td className="py-3 pr-4 text-cyan-400">Soft Wash</td>
                        <td className="py-3">
                          High pressure can crack or loosen panels
                        </td>
                      </tr>
                      <tr className="border-b border-card-border/50">
                        <td className="py-3 pr-4">Wood Deck</td>
                        <td className="py-3 pr-4 text-cyan-400">Soft Wash</td>
                        <td className="py-3">
                          Prevents splintering and grain damage
                        </td>
                      </tr>
                      <tr className="border-b border-card-border/50">
                        <td className="py-3 pr-4">Painted Surfaces</td>
                        <td className="py-3 pr-4 text-cyan-400">Soft Wash</td>
                        <td className="py-3">
                          Pressure strips paint and damages finish
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4">Roof Shingles</td>
                        <td className="py-3 pr-4 text-cyan-400">Soft Wash</td>
                        <td className="py-3">
                          High pressure voids manufacturer warranties
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  At EZ Home Services, we use both methods and match the
                  technique to the surface. We use eco-friendly, biodegradable
                  detergents that are safe for your landscaping and pets.
                </p>
              </div>
            </section>

            {/* Section 5: NJ-Specific */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Sun className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">
                  New Jersey-Specific Considerations
                </h2>
              </div>
              <div className="p-6 rounded-xl bg-card-bg border border-card-border space-y-4">
                <p className="text-gray-400 leading-relaxed">
                  Living in Central and Northern NJ means dealing with some
                  unique challenges. Here&apos;s what to watch for:
                </p>
                <div className="space-y-3">
                  {[
                    {
                      title: "Salt damage from winter roads",
                      detail:
                        "NJ uses more road salt per lane-mile than most states. That salt spray reaches your siding, walkways, and landscaping walls. Spring washing removes salt residue before it causes long-term erosion.",
                    },
                    {
                      title: "Humidity-driven mold growth",
                      detail:
                        "NJ's humid summers mean mold and mildew start growing fast once temperatures rise. A spring wash + treatment gives your home a clean slate and slows regrowth through summer.",
                    },
                    {
                      title: "Tree pollen season",
                      detail:
                        "April and May bring heavy pollen in NJ. Many homeowners schedule a wash in late April to clear winter grime, then a light touch-up in June after pollen season winds down.",
                    },
                    {
                      title: "HOA and municipal standards",
                      detail:
                        "Some NJ communities and HOAs have exterior maintenance requirements. Regular pressure washing keeps you compliant and avoids potential fines.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="pl-4 border-l-2 border-blue-500/30">
                      <h3 className="text-white font-semibold text-sm mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-400">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {[
                  {
                    q: "When is the best time to pressure wash in New Jersey?",
                    a: "Late March through May is ideal. Temperatures should be consistently above 40°F, and spring rains help loosen winter grime. Avoid pressure washing during freezing conditions as water can seep into cracks and cause damage.",
                  },
                  {
                    q: "How much does professional pressure washing cost in NJ?",
                    a: "Prices vary by surface and size. Driveways typically start around $275, sidewalks from $175, decks and patios from $225, and full house siding soft wash from $525. Many companies offer bundled discounts when combining multiple surfaces.",
                  },
                  {
                    q: "Can pressure washing damage my home's siding?",
                    a: "Yes, if done incorrectly. Vinyl siding, painted wood, and stucco require soft washing — a low-pressure technique using specialized detergents. High pressure should only be used on concrete, brick, and stone surfaces.",
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
            </section>

            {/* CTA */}
            <section className="p-8 rounded-2xl bg-gradient-to-r from-blue-950/50 to-cyan-950/50 border border-blue-500/20 text-center">
              <h2 className="text-2xl font-bold text-white mb-3">
                Ready to Restore Your Curb Appeal?
              </h2>
              <p className="text-gray-400 mb-6 max-w-xl mx-auto">
                EZ Home Services provides professional pressure washing and
                soft washing across Central &amp; Northern New Jersey.
                Veteran-owned, licensed &amp; insured. Free estimates — no
                obligation.
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
            </section>
          </div>
        </div>
      </article>
    </>
  );
}
