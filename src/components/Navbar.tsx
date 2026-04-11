"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, Droplets } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/specials", label: "Specials" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
              <Droplets className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-white">
                EZ Home
              </span>
              <span className="text-lg font-bold tracking-tight text-blue-400">
                {" "}Services
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:8622020908"
              className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              (862) 202-0908
            </a>
            <Link
              href="/quote"
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-semibold hover:from-blue-500 hover:to-cyan-400 transition-all shadow-lg shadow-blue-500/25"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-gray-300"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass border-t border-white/5">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-base font-medium text-gray-300 hover:text-white transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:8622020908"
              className="flex items-center gap-2 text-base font-medium text-gray-300 py-2"
            >
              <Phone className="w-4 h-4" />
              (862) 202-0908
            </a>
            <Link
              href="/quote"
              onClick={() => setOpen(false)}
              className="block text-center px-5 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
