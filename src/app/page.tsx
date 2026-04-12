import Link from "next/link";
import {
  Droplets,
  Phone,
  Star,
  Shield,
  Clock,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  DollarSign,
  Award,
  Banknote,
  Calendar,
} from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Window Cleaning",
    description:
      "Crystal-clear windows inside & out. Residential and commercial properties. We use professional-grade equipment for a streak-free shine every time.",
    features: ["Interior & Exterior", "Screen Cleaning", "Track & Sill Cleaning"],
    price: "From $350",
  },
  {
    icon: Sparkles,
    title: "Gutter Maintenance",
    description:
      "Protect your home from water damage. Complete gutter cleaning, flushing, and minor repairs to keep your drainage system working perfectly.",
    features: ["Debris Removal", "Downspout Flushing", "Minor Repairs"],
    price: "From $175",
  },
  {
    icon: Shield,
    title: "Pressure Washing",
    description:
      "Restore your property's curb appeal. Driveways, sidewalks, patios, decks, siding — we blast away years of grime safely and effectively.",
    features: ["Driveways & Walkways", "Decks & Patios", "House Siding"],
    price: "From $150",
  },
];

const testimonials = [
  {
    name: "Maria T.",
    location: "Montclair, NJ",
    text: "EZ Home Services did an incredible job on our windows. The team was professional, on time, and our windows have never looked better. Highly recommend!",
    rating: 5,
  },
  {
    name: "James R.",
    location: "Morristown, NJ",
    text: "Had my gutters cleaned and pressure washing done on the same day. Great pricing and the crew was thorough. Will definitely use them again.",
    rating: 5,
  },
  {
    name: "Susan K.",
    location: "Summit, NJ",
    text: "Took advantage of their online special for window cleaning. Unbeatable price and the results were fantastic. My neighbors are asking for their number!",
    rating: 5,
  },
];

const faqItems = [
  {
    question: "How much does window cleaning cost in NJ?",
    answer:
      "EZ Home Services offers exterior window cleaning starting at $350 for up to 30 windows. Interior & exterior cleaning starts at $550. Stack our Google review discount ($50 off) and cash payment discount ($50 off) to pay as low as $250.",
  },
  {
    question: "Are you licensed and insured in New Jersey?",
    answer:
      "Yes, EZ Home Services is fully licensed and insured in New Jersey. We are a veteran-owned business providing professional exterior cleaning services across Central & Northern NJ.",
  },
  {
    question: "What areas in New Jersey do you serve?",
    answer:
      "We serve 22+ cities across Central & Northern New Jersey including Montclair, Morristown, Summit, Bloomfield, West Orange, Livingston, Maplewood, Chatham, Madison, Short Hills, Glen Ridge, Caldwell, Verona, Cedar Grove, Parsippany, Wayne, Fair Lawn, Ridgewood, Hoboken, Jersey City, Newark, and New Brunswick.",
  },
  {
    question: "Do you offer same-week scheduling?",
    answer:
      "Yes! EZ Home Services offers same-week scheduling with flexible morning slots Monday through Friday (7am–6pm) and Saturday (8am–4pm). Call (862) 202-0908 or book online for a free quote.",
  },
  {
    question: "What is the difference between soft washing and pressure washing?",
    answer:
      "Pressure washing uses high-pressure water to blast away dirt and grime — best for driveways, sidewalks, and tough stains. Soft washing uses lower pressure with eco-friendly biodegradable detergents — safer for house siding, roofs, and delicate surfaces. We use both methods based on what your property needs.",
  },
  {
    question: "How long does window cleaning take?",
    answer:
      "Most homes take 2–4 hours for exterior window cleaning depending on the number of windows and their condition. Interior & exterior cleaning may take 4–6 hours. We provide an accurate time estimate when you book.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://ezhomeservices.business",
    },
  ],
};

export default function Home() {
  return (
    <>
      {/* Structured Data — FAQPage + BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-blue-950/30 to-gray-950" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[128px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-[128px]" />
        </div>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            Online Special — $350 for up to 30 Exterior Windows
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.1]">
            Spotless Windows.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Clean Gutters.
            </span>{" "}
            Fresh Exteriors.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Professional window cleaning, gutter maintenance &amp; pressure washing for homes
            and businesses across Central &amp; Northern New Jersey.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/quote"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-lg hover:from-blue-500 hover:to-cyan-400 transition-all shadow-xl shadow-blue-500/25"
            >
              Get Your Free Quote
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
          {/* Trust badges */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-400" />
              Licensed &amp; Insured
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400" />
              5-Star Rated
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-green-400" />
              Same-Week Scheduling
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-400 mb-3">
              What We Do
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">Our Services</h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              From sparkling windows to clean gutters and pristine exteriors — we handle it all
              so you don&apos;t have to.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative p-8 rounded-2xl bg-card-bg border border-card-border hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-500/20 border border-blue-500/20 flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
                <p className="text-blue-400 text-sm font-semibold mb-3">{service.price}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-gray-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition-colors"
            >
              View All Services &amp; Pricing
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-500/10" />
        <div className="absolute inset-0 border-y border-blue-500/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                Online Special
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
                $350{" "}
                <span className="text-gray-400 text-2xl md:text-3xl font-normal">
                  for up to 30 exterior windows
                </span>
              </h2>
              <p className="mt-4 text-gray-400 text-lg">
                Professional exterior window cleaning at an unbeatable price. Book online and
                save.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-green-500/5 border border-green-500/20">
                  <DollarSign className="w-6 h-6 text-green-400 shrink-0" />
                  <div>
                    <p className="text-white font-semibold">$50 Off — Leave a Google Review</p>
                    <p className="text-sm text-gray-400">
                      Share your experience and save $50 on your service
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-green-500/5 border border-green-500/20">
                  <Banknote className="w-6 h-6 text-green-400 shrink-0" />
                  <div>
                    <p className="text-white font-semibold">$50 Off — Cash Payment</p>
                    <p className="text-sm text-gray-400">
                      Pay with cash and receive an additional $50 discount
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-full max-w-md p-8 rounded-2xl bg-card-bg border border-card-border text-center">
                <p className="text-sm text-gray-400 mb-2">Starting at</p>
                <p className="text-6xl font-extrabold text-white">$350</p>
                <p className="text-gray-400 mt-2">Up to 30 exterior windows</p>
                <div className="mt-6 space-y-2 text-left">
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                    Professional-grade equipment
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                    Streak-free guarantee
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                    Pay online or cash
                  </div>
                  <div className="flex items-center gap-2 text-sm text-green-400">
                    <CheckCircle2 className="w-4 h-4" />
                    Stack discounts — pay as low as $250!
                  </div>
                </div>
                <Link
                  href="/specials"
                  className="mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-lg hover:from-blue-500 hover:to-cyan-400 transition-all shadow-lg shadow-blue-500/25"
                >
                  Book This Special
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Estimate via Calendly */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 md:p-12 rounded-2xl bg-card-bg border border-card-border text-center">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-500/20 border border-blue-500/20 flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4">
              Can&apos;t Visit? No Problem.
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              Schedule a phone consultation and we&apos;ll use Google Earth to assess your
              property remotely. Get an accurate estimate without anyone having to come to your
              home.
            </p>
            <a
              href="https://calendly.com/ezhomeservices"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-lg hover:from-blue-500 hover:to-cyan-400 transition-all shadow-lg shadow-blue-500/25"
            >
              <Calendar className="w-5 h-5" />
              Schedule Phone Estimate
            </a>
            <p className="text-xs text-gray-600 mt-4">
              Free 15-minute consultation &bull; No obligation
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-400 mb-3">
              Why EZ Home Services
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">
              The EZ Difference
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Award,
                title: "Licensed & Insured",
                desc: "Fully covered so you have complete peace of mind.",
              },
              {
                icon: Clock,
                title: "On-Time, Every Time",
                desc: "We respect your schedule. If we're late, you get a discount.",
              },
              {
                icon: Star,
                title: "5-Star Service",
                desc: "Consistently rated 5 stars by our customers across NJ.",
              },
              {
                icon: DollarSign,
                title: "Transparent Pricing",
                desc: "No hidden fees. You know exactly what you'll pay upfront.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl bg-card-bg border border-card-border text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-[#060606]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-400 mb-3">
              Testimonials
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">
              What Our Customers Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="p-6 rounded-2xl bg-card-bg border border-card-border"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-5">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <p className="text-white font-semibold">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-400 mb-3">
              FAQ
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto">
              Everything you need to know about our exterior cleaning services in NJ.
            </p>
          </div>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <div
                key={item.question}
                className="p-6 rounded-2xl bg-card-bg border border-card-border"
              >
                <h3 className="text-white font-bold text-lg mb-3">{item.question}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-gray-500 text-sm">
              Have more questions?{" "}
              <a href="tel:8622020908" className="text-blue-400 hover:text-blue-300 font-semibold">
                Call us at (862) 202-0908
              </a>{" "}
              or{" "}
              <Link href="/contact" className="text-blue-400 hover:text-blue-300 font-semibold">
                send a message
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-500/5" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Ready for Spotless Windows?
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Get a free, no-obligation quote in minutes. We serve all of Central &amp; Northern
            New Jersey.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
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
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
