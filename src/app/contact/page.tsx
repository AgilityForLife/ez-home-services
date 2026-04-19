import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Get a Free Estimate | (862) 202-0908",
  description:
    "Contact EZ Home Services for free window cleaning, gutter maintenance, and pressure washing estimates in Central & Northern NJ. Call (862) 202-0908 or schedule a remote Google Earth estimate.",
  alternates: {
    canonical: "https://ezhomeservices.business/contact",
  },
  openGraph: {
    title: "Contact EZ Home Services | Free Estimates in NJ",
    description:
      "Reach out for a free, no-obligation quote. Call, email, or schedule a remote estimate via Google Earth.",
    url: "https://ezhomeservices.business/contact",
    type: "website",
  },
};

// FAQ Schema for rich results in Google
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you provide free estimates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! All quotes are free and no-obligation. We can even estimate remotely using Google Earth.",
      },
    },
    {
      "@type": "Question",
      name: "What areas do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve all of Central and Northern New Jersey, including Essex, Morris, Bergen, Hudson, Union, Middlesex, and Somerset counties.",
      },
    },
    {
      "@type": "Question",
      name: "Can I pay with cash?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! We accept Stripe (credit/debit) and cash. Cash payments receive a $50 discount.",
      },
    },
    {
      "@type": "Question",
      name: "Are you insured?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we are fully licensed and insured for your protection.",
      },
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      {/* FAQ Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-400 mb-3">
            Get In Touch
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Have questions? Ready to schedule? Reach out — we&apos;re here to
            help.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-card-bg border border-card-border">
                <Phone className="w-8 h-8 text-blue-400 mb-4" />
                <h2 className="text-xl font-bold text-white mb-2">Call Us</h2>
                <a
                  href="tel:8622020908"
                  className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  (862) 202-0908
                </a>
                <p className="text-sm text-gray-500 mt-2">
                  Call or text anytime. We aim to respond within the hour during
                  business hours.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-card-bg border border-card-border">
                <Mail className="w-8 h-8 text-blue-400 mb-4" />
                <h2 className="text-xl font-bold text-white mb-2">Email Us</h2>
                <a
                  href="mailto:erickrosa01@gmail.com"
                  className="text-lg font-semibold text-blue-400 hover:text-blue-300 transition-colors break-all"
                >
                  erickrosa01@gmail.com
                </a>
                <p className="text-sm text-gray-500 mt-2">
                  Send us your questions or request a quote by email.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-card-bg border border-card-border">
                <MapPin className="w-8 h-8 text-blue-400 mb-4" />
                <h2 className="text-xl font-bold text-white mb-2">
                  Service Area
                </h2>
                <p className="text-gray-300 font-medium">
                  Central &amp; Northern New Jersey
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  From Jersey City to Morristown, Montclair to New Brunswick —
                  and everywhere in between.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-card-bg border border-card-border">
                <Clock className="w-8 h-8 text-blue-400 mb-4" />
                <h2 className="text-xl font-bold text-white mb-2">
                  Business Hours
                </h2>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between text-gray-300">
                    <span>Monday - Friday</span>
                    <span className="font-medium">7:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Saturday</span>
                    <span className="font-medium">8:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Sunday</span>
                    <span className="font-medium">By Appointment</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-6">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-600/10 to-cyan-500/10 border border-blue-500/20">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Quick Actions
                </h2>
                <div className="space-y-4">
                  <Link
                    href="/quote"
                    className="w-full flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors group"
                  >
                    <div>
                      <p className="text-white font-semibold">
                        Request a Free Quote
                      </p>
                      <p className="text-xs text-gray-500">
                        Select services &amp; get pricing in 24 hours
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-blue-400 transition-colors" />
                  </Link>

                  <a
                    href="https://calendly.com/ezhomeservices"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors group"
                  >
                    <div>
                      <p className="text-white font-semibold">
                        Schedule Phone Estimate
                      </p>
                      <p className="text-xs text-gray-500">
                        Free 15-min consultation with Google Earth review
                      </p>
                    </div>
                    <Calendar className="w-5 h-5 text-gray-600 group-hover:text-blue-400 transition-colors" />
                  </a>

                  <Link
                    href="/specials"
                    className="w-full flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors group"
                  >
                    <div>
                      <p className="text-white font-semibold">
                        View Online Specials
                      </p>
                      <p className="text-xs text-gray-500">
                        $425 for 30 exterior windows &amp; more
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-blue-400 transition-colors" />
                  </Link>

                  <a
                    href="tel:8622020908"
                    className="w-full flex items-center justify-center gap-2 p-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:from-blue-500 hover:to-cyan-400 transition-all shadow-lg shadow-blue-500/25"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now — (862) 202-0908
                  </a>
                </div>
              </div>

              {/* FAQ snippet */}
              <div className="p-8 rounded-2xl bg-card-bg border border-card-border">
                <h2 className="text-xl font-bold text-white mb-6">
                  Common Questions
                </h2>
                <div className="space-y-5">
                  {[
                    {
                      q: "Do you provide free estimates?",
                      a: "Yes! All quotes are free and no-obligation. We can even estimate remotely using Google Earth.",
                    },
                    {
                      q: "What areas do you serve?",
                      a: "We serve all of Central and Northern New Jersey, including Essex, Morris, Bergen, Hudson, Union, Middlesex, and Somerset counties.",
                    },
                    {
                      q: "Can I pay with cash?",
                      a: "Absolutely! We accept Stripe (credit/debit) and cash. Cash payments receive a $50 discount.",
                    },
                    {
                      q: "Are you insured?",
                      a: "Yes, we are fully licensed and insured for your protection.",
                    },
                  ].map((faq) => (
                    <div key={faq.q}>
                      <p className="text-white font-semibold text-sm">
                        {faq.q}
                      </p>
                      <p className="text-gray-400 text-sm mt-1">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
