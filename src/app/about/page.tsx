import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  Shield,
  Users,
  Target,
  Heart,
  Calendar,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Veteran-Owned Exterior Cleaning in NJ",
  description:
    "EZ Home Services is a veteran-owned, licensed & insured exterior cleaning company serving Central & Northern New Jersey. Founded by Erick Rosa — PMP-certified project management professional.",
  alternates: {
    canonical: "https://ezhomeservices.business/about",
  },
  openGraph: {
    title: "About EZ Home Services | Veteran-Owned in NJ",
    description:
      "Licensed & insured exterior cleaning. Veteran-owned with military discipline & work ethic. Serving 24+ communities across Central & Northern NJ.",
    url: "https://ezhomeservices.business/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-400 mb-3">
            About Us
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">
            The EZ Home Services Story
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Founded with a simple mission: deliver professional-quality exterior
            cleaning services with honest pricing and exceptional customer care.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="p-8 rounded-2xl bg-card-bg border border-card-border">
              <h2 className="text-2xl font-bold text-white mb-4">
                Who We Are
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                EZ Home Services is a professional exterior cleaning company
                serving Central and Northern New Jersey. Founded by Erick Rosa —
                a veteran, entrepreneur, and certified project management
                professional — EZ Home Services was built on the principles of
                discipline, attention to detail, and genuine customer care.
              </p>
              <p className="text-gray-400 leading-relaxed">
                We specialize in residential and commercial window cleaning,
                gutter maintenance, and pressure washing. Whether it&apos;s a
                single-family home in Montclair or a commercial building in
                Morristown, we bring the same level of professionalism and care
                to every job.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-card-bg border border-card-border">
                <Target className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">
                  Our Mission
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  To make professional exterior cleaning accessible, affordable,
                  and hassle-free for every homeowner and business in New Jersey.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card-bg border border-card-border">
                <Heart className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">
                  Our Values
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Integrity in pricing, excellence in service, and respect for
                  your property and time. We treat every home like it&apos;s our
                  own.
                </p>
              </div>
            </div>

            {/* Why EZ */}
            <div className="p-8 rounded-2xl bg-card-bg border border-card-border">
              <h2 className="text-2xl font-bold text-white mb-6">
                Why Customers Choose EZ
              </h2>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <Shield className="w-10 h-10 text-blue-400 mx-auto mb-3" />
                  <h3 className="text-white font-bold mb-1">
                    Licensed &amp; Insured
                  </h3>
                  <p className="text-sm text-gray-500">
                    Full coverage for your peace of mind
                  </p>
                </div>
                <div className="text-center">
                  <Users className="w-10 h-10 text-blue-400 mx-auto mb-3" />
                  <h3 className="text-white font-bold mb-1">
                    Veteran-Owned
                  </h3>
                  <p className="text-sm text-gray-500">
                    Military discipline &amp; work ethic
                  </p>
                </div>
                <div className="text-center">
                  <Calendar className="w-10 h-10 text-blue-400 mx-auto mb-3" />
                  <h3 className="text-white font-bold mb-1">
                    Flexible Scheduling
                  </h3>
                  <p className="text-sm text-gray-500">
                    Remote estimates via Google Earth
                  </p>
                </div>
              </div>
            </div>

            {/* Service Area */}
            <div className="p-8 rounded-2xl bg-card-bg border border-card-border">
              <h2 className="text-2xl font-bold text-white mb-4">
                Service Area
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                We proudly serve communities across Central and Northern New
                Jersey, including:
              </p>
              <div className="grid sm:grid-cols-3 gap-2 text-sm text-gray-300">
                {[
                  "Montclair",
                  "Morristown",
                  "Summit",
                  "Chatham",
                  "Madison",
                  "West Orange",
                  "Livingston",
                  "Short Hills",
                  "Maplewood",
                  "South Orange",
                  "Bloomfield",
                  "Glen Ridge",
                  "Caldwell",
                  "Verona",
                  "Cedar Grove",
                  "Parsippany",
                  "Wayne",
                  "Fair Lawn",
                  "Ridgewood",
                  "Hoboken",
                  "Jersey City",
                  "Newark",
                  "New Brunswick",
                  "And surrounding areas",
                ].map((town) => (
                  <p key={town} className="py-1">
                    {town}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
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
