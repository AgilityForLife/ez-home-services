"use client";

import { useState } from "react";
import {
  Send,
  CheckCircle2,
  Phone,
  Calendar,
  ArrowRight,
  Loader2,
} from "lucide-react";

// Note: metadata export doesn't work in client components.
// We'll use a separate metadata file for this page.

const serviceOptions = [
  { id: "ext_windows", label: "Exterior Window Cleaning (up to 30)", price: "$350" },
  { id: "int_ext_windows", label: "Interior & Exterior Windows (up to 30)", price: "$550" },
  { id: "gutter_single", label: "Gutter Cleaning — Single Story", price: "$175" },
  { id: "gutter_two", label: "Gutter Cleaning — Two Story", price: "$250" },
  { id: "driveway", label: "Driveway Pressure Wash", price: "$200" },
  { id: "sidewalk", label: "Sidewalk / Walkway Pressure Wash", price: "$100" },
  { id: "deck", label: "Deck / Patio Pressure Wash", price: "$150" },
  { id: "siding", label: "House Siding Soft Wash", price: "$450" },
];

const addOnOptions = [
  { id: "screens", label: "Screen Cleaning", price: "$5/screen" },
  { id: "tracks", label: "Track & Sill Deep Clean", price: "$75" },
  { id: "hardwater", label: "Hard Water Stain Removal", price: "$15/window" },
  { id: "downspout", label: "Downspout Unclogging", price: "$75" },
  { id: "fence", label: "Fence Cleaning", price: "$150+" },
  { id: "sealing", label: "Surface Sealing", price: "From $200" },
];

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    services: [] as string[],
    addOns: [] as string[],
    paymentPreference: "stripe",
    message: "",
  });

  const toggleService = (id: string) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(id)
        ? prev.services.filter((s) => s !== id)
        : [...prev.services, id],
    }));
  };

  const toggleAddOn = (id: string) => {
    setForm((prev) => ({
      ...prev,
      addOns: prev.addOns.includes(id)
        ? prev.addOns.filter((a) => a !== id)
        : [...prev.addOns, id],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission — replace with actual API call
    await new Promise((res) => setTimeout(res, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-400" />
          </div>
          <h1 className="text-3xl font-extrabold text-white mb-4">
            Quote Request Sent!
          </h1>
          <p className="text-gray-400 mb-8">
            Thanks for reaching out. We&apos;ll get back to you within 24 hours
            with your personalized quote. For immediate service, give us a call.
          </p>
          <a
            href="tel:8622020908"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-lg hover:from-blue-500 hover:to-cyan-400 transition-all shadow-lg shadow-blue-500/25"
          >
            <Phone className="w-5 h-5" />
            Call (862) 202-0908
          </a>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">
            Get Your Free Quote
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Select the services you need, and we&apos;ll send you a detailed
            quote within 24 hours. No obligation.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Contact Info */}
            <div className="p-6 rounded-2xl bg-card-bg border border-card-border">
              <h2 className="text-xl font-bold text-white mb-6">
                Your Information
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-colors"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-colors"
                    placeholder="(555) 555-5555"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1.5">
                    Property Address *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.address}
                    onChange={(e) =>
                      setForm({ ...form, address: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-colors"
                    placeholder="123 Main St, City, NJ"
                  />
                </div>
              </div>
            </div>

            {/* Service Selection */}
            <div className="p-6 rounded-2xl bg-card-bg border border-card-border">
              <h2 className="text-xl font-bold text-white mb-2">
                Select Services *
              </h2>
              <p className="text-sm text-gray-500 mb-6">
                Choose one or more services you&apos;re interested in.
              </p>
              <div className="space-y-3">
                {serviceOptions.map((service) => {
                  const isSelected = form.services.includes(service.id);
                  return (
                    <div
                      key={service.id}
                      className={`p-4 rounded-xl border cursor-pointer transition-colors ${
                        isSelected
                          ? "bg-blue-500/5 border-blue-500/30"
                          : "border-white/5 hover:border-white/10"
                      }`}
                      onClick={() => toggleService(service.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-5 h-5 rounded border flex items-center justify-center ${
                              isSelected
                                ? "bg-blue-500 border-blue-500"
                                : "border-gray-600"
                            }`}
                          >
                            {isSelected && (
                              <CheckCircle2 className="w-4 h-4 text-white" />
                            )}
                          </div>
                          <p className="text-white font-medium">
                            {service.label}
                          </p>
                        </div>
                        <p className="text-blue-400 font-bold">
                          {service.price}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Add-ons */}
            <div className="p-6 rounded-2xl bg-card-bg border border-card-border">
              <h2 className="text-xl font-bold text-white mb-2">
                Add-On Services
              </h2>
              <p className="text-sm text-gray-500 mb-6">
                Optional extras to enhance your service.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {addOnOptions.map((addon) => {
                  const isSelected = form.addOns.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      className={`p-3 rounded-xl border cursor-pointer transition-colors ${
                        isSelected
                          ? "bg-blue-500/5 border-blue-500/30"
                          : "border-white/5 hover:border-white/10"
                      }`}
                      onClick={() => toggleAddOn(addon.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-4 h-4 rounded border flex items-center justify-center ${
                              isSelected
                                ? "bg-blue-500 border-blue-500"
                                : "border-gray-600"
                            }`}
                          >
                            {isSelected && (
                              <CheckCircle2 className="w-3 h-3 text-white" />
                            )}
                          </div>
                          <p className="text-gray-300 text-sm">
                            {addon.label}
                          </p>
                        </div>
                        <p className="text-blue-400 text-sm font-semibold">
                          {addon.price}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Payment Preference */}
            <div className="p-6 rounded-2xl bg-card-bg border border-card-border">
              <h2 className="text-xl font-bold text-white mb-4">
                Payment Preference
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  {
                    value: "stripe",
                    label: "Pay Online (Stripe)",
                    desc: "Credit/debit card",
                  },
                  {
                    value: "cash",
                    label: "Pay with Cash",
                    desc: "$50 cash discount applies",
                  },
                ].map((option) => (
                  <div
                    key={option.value}
                    className={`p-4 rounded-xl border cursor-pointer transition-colors ${
                      form.paymentPreference === option.value
                        ? "bg-blue-500/5 border-blue-500/30"
                        : "border-white/5 hover:border-white/10"
                    }`}
                    onClick={() =>
                      setForm({ ...form, paymentPreference: option.value })
                    }
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          form.paymentPreference === option.value
                            ? "border-blue-500"
                            : "border-gray-600"
                        }`}
                      >
                        {form.paymentPreference === option.value && (
                          <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                        )}
                      </div>
                      <div>
                        <p className="text-white font-medium">{option.label}</p>
                        <p className="text-xs text-gray-500">{option.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Notes */}
            <div className="p-6 rounded-2xl bg-card-bg border border-card-border">
              <h2 className="text-xl font-bold text-white mb-4">
                Additional Details
              </h2>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-colors resize-none"
                placeholder="Anything else we should know? (number of stories, specific concerns, preferred dates, etc.)"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading || form.services.length === 0}
              className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-lg hover:from-blue-500 hover:to-cyan-400 transition-all shadow-xl shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Send className="w-5 h-5" />
              )}
              {loading ? "Sending..." : "Submit Quote Request"}
            </button>

            <div className="text-center">
              <p className="text-sm text-gray-500 mb-3">Or</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://calendly.com/ezhomeservices"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  Schedule Phone / Google Earth Estimate
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
