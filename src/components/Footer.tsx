import Link from "next/link";
import { Droplets, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#060606] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                <Droplets className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-bold text-white">EZ Home</span>
                <span className="font-bold text-blue-400"> Services</span>
              </div>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed">
              Professional window cleaning, gutter maintenance &amp; pressure
              washing serving Central &amp; Northern New Jersey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "/services", label: "Our Services" },
                { href: "/specials", label: "Specials & Pricing" },
                { href: "/quote", label: "Get a Quote" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2.5">
              <li className="text-sm text-gray-400">Window Cleaning</li>
              <li className="text-sm text-gray-400">Gutter Cleaning &amp; Maintenance</li>
              <li className="text-sm text-gray-400">Pressure Washing</li>
              <li className="text-sm text-gray-400">Commercial Services</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:8622020908"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-blue-400" />
                  (862) 202-0908
                </a>
              </li>
              <li>
                <a
                  href="mailto:erickrosa01@gmail.com"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-blue-400" />
                  erickrosa01@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5" />
                <span>Serving Central &amp; Northern New Jersey</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} EZ Home Services. All rights
            reserved.
          </p>
          <p className="text-xs text-gray-600">
            Licensed &amp; Insured | Central &amp; Northern NJ
          </p>
        </div>
      </div>
    </footer>
  );
}
