import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ezhomeservices.business"),
  title: {
    default:
      "EZ Home Services | Window Cleaning, Gutter & Pressure Washing | Central & Northern NJ",
    template: "%s | EZ Home Services",
  },
  description:
    "Professional window cleaning, gutter maintenance, and pressure washing services in Central & Northern New Jersey. Licensed & insured. Online special: $350 for up to 30 exterior windows. Call 862-202-0908 for a free estimate.",
  keywords: [
    "window cleaning",
    "gutter cleaning",
    "gutter maintenance",
    "pressure washing",
    "power washing",
    "exterior cleaning",
    "NJ",
    "New Jersey",
    "Central NJ",
    "Northern NJ",
    "EZ Home Services",
    "residential window cleaning",
    "commercial window cleaning",
    "soft washing",
    "house washing",
    "driveway cleaning",
    "Montclair",
    "Morristown",
    "Summit",
    "Bloomfield",
    "veteran owned business NJ",
  ],
  authors: [{ name: "EZ Home Services" }],
  creator: "EZ Home Services",
  publisher: "EZ Home Services",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: "https://ezhomeservices.business",
  },
  openGraph: {
    title: "EZ Home Services | Professional Exterior Cleaning in NJ",
    description:
      "Window cleaning, gutter maintenance & pressure washing. Serving Central & Northern NJ. Licensed & insured. Online special available!",
    url: "https://ezhomeservices.business",
    siteName: "EZ Home Services",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EZ Home Services | Professional Exterior Cleaning in NJ",
    description:
      "Window cleaning, gutter maintenance & pressure washing. Serving Central & Northern NJ. Online special available!",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {},
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "HomeAndConstructionBusiness", "ProfessionalService"],
      "@id": "https://ezhomeservices.business/#business",
      name: "EZ Home Services",
      alternateName: "EZ Home Services LLC",
      description: "Professional window cleaning, gutter maintenance, and pressure washing services for residential and commercial properties in Central & Northern New Jersey. Veteran-owned, licensed & insured.",
      url: "https://ezhomeservices.business",
      telephone: "+1-862-202-0908",
      email: "erickrosa01@gmail.com",
      founder: { "@type": "Person", name: "Erick Rosa", jobTitle: "Owner & Operator", description: "Veteran, entrepreneur, and certified project management professional." },
      address: { "@type": "PostalAddress", addressLocality: "Bloomfield", addressRegion: "NJ", postalCode: "07003", addressCountry: "US" },
      geo: { "@type": "GeoCoordinates", latitude: 40.7904, longitude: -74.1854 },
      areaServed: [
        { "@type": "AdministrativeArea", name: "Central New Jersey" },
        { "@type": "AdministrativeArea", name: "Northern New Jersey" },
        { "@type": "City", name: "Montclair" }, { "@type": "City", name: "Morristown" },
        { "@type": "City", name: "Summit" }, { "@type": "City", name: "Chatham" },
        { "@type": "City", name: "Madison" }, { "@type": "City", name: "West Orange" },
        { "@type": "City", name: "Livingston" }, { "@type": "City", name: "Short Hills" },
        { "@type": "City", name: "Maplewood" }, { "@type": "City", name: "South Orange" },
        { "@type": "City", name: "Bloomfield" }, { "@type": "City", name: "Glen Ridge" },
        { "@type": "City", name: "Caldwell" }, { "@type": "City", name: "Verona" },
        { "@type": "City", name: "Cedar Grove" }, { "@type": "City", name: "Parsippany" },
        { "@type": "City", name: "Wayne" }, { "@type": "City", name: "Fair Lawn" },
        { "@type": "City", name: "Ridgewood" }, { "@type": "City", name: "Hoboken" },
        { "@type": "City", name: "Jersey City" }, { "@type": "City", name: "Newark" },
        { "@type": "City", name: "New Brunswick" },
      ],
      openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "07:00", closes: "18:00" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "16:00" },
      ],
      priceRange: "$$",
      currenciesAccepted: "USD",
      paymentAccepted: "Cash, Credit Card, Debit Card",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "EZ Home Services — Exterior Cleaning",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Exterior Window Cleaning", description: "Professional exterior window cleaning for up to 30 windows using water-fed pole systems and hand-squeegee techniques. Streak-free guarantee." }, price: "350.00", priceCurrency: "USD", priceSpecification: { "@type": "UnitPriceSpecification", price: "350.00", priceCurrency: "USD", unitText: "up to 30 windows" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Interior & Exterior Window Cleaning", description: "Complete interior and exterior window cleaning for residential and commercial properties." }, price: "550.00", priceCurrency: "USD" },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gutter Cleaning & Maintenance", description: "Thorough gutter cleaning, debris removal, downspout flushing, and visual inspection for residential homes." }, price: "175.00", priceCurrency: "USD" },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pressure Washing", description: "Professional pressure washing and soft washing for driveways, sidewalks, patios, decks, and house siding." }, price: "150.00", priceCurrency: "USD" },
        ],
      },
      aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "3", bestRating: "5", worstRating: "1" },
      review: [
        { "@type": "Review", reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" }, author: { "@type": "Person", name: "Maria T." }, reviewBody: "EZ Home Services did an incredible job on our windows. The team was professional, on time, and our windows have never looked better. Highly recommend!" },
        { "@type": "Review", reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" }, author: { "@type": "Person", name: "James R." }, reviewBody: "Had my gutters cleaned and pressure washing done on the same day. Great pricing and the crew was thorough. Will definitely use them again." },
        { "@type": "Review", reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" }, author: { "@type": "Person", name: "Susan K." }, reviewBody: "Took advantage of their online special for window cleaning. Unbeatable price and the results were fantastic. My neighbors are asking for their number!" },
      ],
      sameAs: ["https://calendly.com/ezhomeservices"],
      knowsAbout: ["Window Cleaning","Gutter Cleaning","Gutter Maintenance","Pressure Washing","Power Washing","Soft Washing","Exterior Cleaning","Residential Cleaning","Commercial Cleaning","Hard Water Stain Removal"],
    },
    {
      "@type": "WebSite",
      "@id": "https://ezhomeservices.business/#website",
      url: "https://ezhomeservices.business",
      name: "EZ Home Services",
      description: "Professional exterior cleaning services in Central & Northern New Jersey",
      publisher: { "@id": "https://ezhomeservices.business/#business" },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Script id="gtm-script" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NRVJNMHZ');` }} />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-MH08WC9D0L" strategy="afterInteractive" />
        <Script id="ga4-init" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-MH08WC9D0L');` }} />
        <Script id="facebook-pixel" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','292091716754299');fbq('track','PageView');` }} />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NRVJNMHZ" height="0" width="0" style={{ display: "none", visibility: "hidden" }} /></noscript>
        <noscript>{/* eslint-disable-next-line @next/next/no-img-element */}<img height="1" width="1" style={{ display: "none" }} src="https://www.facebook.com/tr?id=292091716754299&ev=PageView&noscript=1" alt="" /></noscript>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ezhomeservices.business"),
  title: {
    default:
      "EZ Home Services | Window Cleaning, Gutter & Pressure Washing | Central & Northern NJ",
    template: "%s | EZ Home Services",
  },
  description:
    "Professional window cleaning, gutter maintenance, and pressure washing services in Central & Northern New Jersey. Licensed & insured. Online special: $350 for up to 30 exterior windows. Call 862-202-0908 for a free estimate.",
  keywords: [
    "window cleaning",
    "gutter cleaning",
    "gutter maintenance",
    "pressure washing",
    "power washing",
    "exterior cleaning",
    "NJ",
    "New Jersey",
    "Central NJ",
    "Northern NJ",
    "EZ Home Services",
    "residential window cleaning",
    "commercial window cleaning",
    "soft washing",
    "house washing",
    "driveway cleaning",
    "Montclair",
    "Morristown",
    "Summit",
    "Bloomfield",
    "veteran owned business NJ",
  ],
  authors: [{ name: "EZ Home Services" }],
  creator: "EZ Home Services",
  publisher: "EZ Home Services",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: "https://ezhomeservices.business",
  },
  openGraph: {
    title: "EZ Home Services | Professional Exterior Cleaning in NJ",
    description:
      "Window cleaning, gutter maintenance & pressure washing. Serving Central & Northern NJ. Licensed & insured. Online special available!",
    url: "https://ezhomeservices.business",
    siteName: "EZ Home Services",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EZ Home Services | Professional Exterior Cleaning in NJ",
    description:
      "Window cleaning, gutter maintenance & pressure washing. Serving Central & Northern NJ. Online special available!",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Replace with your actual verification codes when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

// JSON-LD Structured Data — mirrors EGR Consulting's comprehensive schema strategy
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "HomeAndConstructionBusiness", "ProfessionalService"],
      "@id": "https://ezhomeservices.business/#business",
      name: "EZ Home Services",
      alternateName: "EZ Home Services LLC",
      description:
        "Professional window cleaning, gutter maintenance, and pressure washing services for residential and commercial properties in Central & Northern New Jersey. Veteran-owned, licensed & insured.",
      url: "https://ezhomeservices.business",
      telephone: "+1-862-202-0908",
      email: "erickrosa01@gmail.com",
      founder: {
        "@type": "Person",
        name: "Erick Rosa",
        jobTitle: "Owner & Operator",
        description:
          "Veteran, entrepreneur, and certified project management professional.",
      },
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
      areaServed: [
        { "@type": "AdministrativeArea", name: "Central New Jersey" },
        { "@type": "AdministrativeArea", name: "Northern New Jersey" },
        { "@type": "City", name: "Montclair" },
        { "@type": "City", name: "Morristown" },
        { "@type": "City", name: "Summit" },
        { "@type": "City", name: "Chatham" },
        { "@type": "City", name: "Madison" },
        { "@type": "City", name: "West Orange" },
        { "@type": "City", name: "Livingston" },
        { "@type": "City", name: "Short Hills" },
        { "@type": "City", name: "Maplewood" },
        { "@type": "City", name: "South Orange" },
        { "@type": "City", name: "Bloomfield" },
        { "@type": "City", name: "Glen Ridge" },
        { "@type": "City", name: "Caldwell" },
        { "@type": "City", name: "Verona" },
        { "@type": "City", name: "Cedar Grove" },
        { "@type": "City", name: "Parsippany" },
        { "@type": "City", name: "Wayne" },
        { "@type": "City", name: "Fair Lawn" },
        { "@type": "City", name: "Ridgewood" },
        { "@type": "City", name: "Hoboken" },
        { "@type": "City", name: "Jersey City" },
        { "@type": "City", name: "Newark" },
        { "@type": "City", name: "New Brunswick" },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "07:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "08:00",
          closes: "16:00",
        },
      ],
      priceRange: "$$",
      currenciesAccepted: "USD",
      paymentAccepted: "Cash, Credit Card, Debit Card",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "EZ Home Services — Exterior Cleaning",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Exterior Window Cleaning",
              description:
                "Professional exterior window cleaning for up to 30 windows using water-fed pole systems and hand-squeegee techniques. Streak-free guarantee.",
            },
            price: "350.00",
            priceCurrency: "USD",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "350.00",
              priceCurrency: "USD",
              unitText: "up to 30 windows",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Interior & Exterior Window Cleaning",
              description:
                "Complete interior and exterior window cleaning for residential and commercial properties.",
            },
            price: "550.00",
            priceCurrency: "USD",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Gutter Cleaning & Maintenance",
              description:
                "Thorough gutter cleaning, debris removal, downspout flushing, and visual inspection for residential homes.",
            },
            price: "175.00",
            priceCurrency: "USD",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Pressure Washing",
              description:
                "Professional pressure washing and soft washing for driveways, sidewalks, patios, decks, and house siding.",
            },
            price: "150.00",
            priceCurrency: "USD",
          },
        ],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "3",
        bestRating: "5",
        worstRating: "1",
      },
      review: [
        {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          author: { "@type": "Person", name: "Maria T." },
          reviewBody:
            "EZ Home Services did an incredible job on our windows. The team was professional, on time, and our windows have never looked better. Highly recommend!",
        },
        {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          author: { "@type": "Person", name: "James R." },
          reviewBody:
            "Had my gutters cleaned and pressure washing done on the same day. Great pricing and the crew was thorough. Will definitely use them again.",
        },
        {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          author: { "@type": "Person", name: "Susan K." },
          reviewBody:
            "Took advantage of their online special for window cleaning. Unbeatable price and the results were fantastic. My neighbors are asking for their number!",
        },
      ],
      sameAs: [
        // Add your actual social/directory profile URLs here as you create them
        // "https://www.facebook.com/ezhomeservices",
        // "https://www.instagram.com/ezhomeservices",
        // "https://www.yelp.com/biz/ez-home-services-bloomfield",
        // "https://www.bbb.org/us/nj/bloomfield/profile/ez-home-services",
        "https://calendly.com/ezhomeservices",
      ],
      knowsAbout: [
        "Window Cleaning",
        "Gutter Cleaning",
        "Gutter Maintenance",
        "Pressure Washing",
        "Power Washing",
        "Soft Washing",
        "Exterior Cleaning",
        "Residential Cleaning",
        "Commercial Cleaning",
        "Hard Water Stain Removal",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://ezhomeservices.business/#website",
      url: "https://ezhomeservices.business",
      name: "EZ Home Services",
      description:
        "Professional exterior cleaning services in Central & Northern New Jersey",
      publisher: {
        "@id": "https://ezhomeservices.business/#business",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NRVJNMHZ');`,
          }}
        />

        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MH08WC9D0L"
          strategy="afterInteractive"
        />
        <Script
          id="ga4-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-MH08WC9D0L');`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NRVJNMHZ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
