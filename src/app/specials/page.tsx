"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  DollarSign,
  Banknote,
  Star,
  CreditCard,
  Calendar,
} from "lucide-react";

// Note: metadata export doesn't work in client components.
// We'll use a separate metadata file for this page.

const addOns = [
  { id: "screens", name: "Screen Cleaning (per screen)", price: 5, unit: "each" },
  { id: "tracks", name: "Track & Sill Deep Clean", price: 75, unit: "flat" },
  { id: "hardwater", name: "Hard Water Stain Removal (per window)", price: 15, unit: "each" },
  { id: "gutter_single", name: "Gutter Cleaning — Single Story", price: 175, unit: "flat" },
  { id: "gutter_two", name: "Gutter Cleaning — Two Story", price: 250, unit: "flat" },
  { id: "driveway", name: "Driveway Pressure Wash", price: 200, unit: "flat" },
  { id: "sidewalk", name: "Sidewalk / Walkway Pressure Wash", price: 100, unit: "flat" },
  { id: "deck", name: "Deck / Patio Pressure Wash (up to 200 sq ft)", price: 150, unit: "flat" },
  { id: "siding", name: "House Siding Soft Wash", price: 450, unit: "flat" },
];

export default function SpecialsPage() {
  const [selectedAddOns, setSelectedAddOns] = useState<Record<string, number>>({});
  const [googleReview, setGoogleReview] = useState(false);
  const [cashPayment, setCashPayment] = useState(false);

  const basePrice = 350;

  const addOnTotal = Object.entries(selectedAddOns).reduce((sum, [id, qty]) => {
    const addon = addOns.find((a) => a.id === id);
    if (!addon || qty <= 0) return sum;
    return sum + addon.price * qty;
  }, 0);

  const subtotal = basePrice + addOnTotal;
  const discount = (googleReview ? 50 : 0) + (cashPayment ? 50 : 0);
  const total = Math.max(subtotal - discount, 0);

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) => {
      const newState = { ...prev };
      if (newState[id]) {
        delete newState[id];
      } else {
        newState[id] = 1;
      }
      return newState;
    });
  };

  const updateQty = (id: string, qty: number) => {
    setSelectedAddOns((prev) => {
      const newState = { ...prev };
      if (qty <= 0) {
        delete newState[id];
      } else {
        newState[id] = qty;
      }
      return newState;
    });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Limited Time Online Special
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">
            Online Special
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Build your custom package starting with our exterior window cleaning
            special. Add on services and stack discounts.
          </p>
        </div>
      </section>

      {/* Package Builder */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left — Add-ons */}
            <div className="lg:col-span-2 space-y-6">
              {/* Base package */}
              <div className="p-6 rounded-2xl bg-card-bg border border-blue-500/30">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle2 className="w-5 h-5 text-blue-400" />
                      <h3 className="text-lg font-bold text-white">
                        Exterior Window Cleaning
                      </h3>
                    </div>
                    <p className="text-sm text-gray-400 ml-7">
                      Up to 30 exterior windows &bull; Professional-grade
                      equipment &bull; Streak-free guarantee
                    </p>
                  </div>
                  <p className="text-2xl font-extrabold text-white whitespace-nowrap">
                    $350
                  </p>
                </div>
              </div>

              {/* Add-ons */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Add Services to Your Package
                </h3>
                <div className="space-y-3">
                  {addOns.map((addon) => {
                    const isSelected = addon.id in selectedAddOns;
                    const qty = selectedAddOns[addon.id] || 0;
                    return (
                      <div
                        key={addon.id}
                        className={`p-4 rounded-xl border transition-colors cursor-pointer ${
                          isSelected
                            ? "bg-blue-500/5 border-blue-500/30"
                            : "bg-card-bg border-card-border hover:border-white/10"
                        }`}
                        onClick={() => {
                          if (addon.unit === "flat") toggleAddOn(addon.id);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-5 h-5 rounded border flex items-center justify-center ${
                                isSelected
                                  ? "bg-blue-500 border-blue-500"
                                  : "border-gray-600"
                              }`}
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleAddOn(addon.id);
                              }}
                            >
                              {isSelected && (
                                <CheckCircle2 className="w-4 h-4 text-white" />
                              )}
                            </div>
                            <div>
                              <p className="text-white font-medium">
                                {addon.name}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            {addon.unit === "each" && isSelected && (
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    updateQty(addon.id, qty - 1);
                                  }}
                                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-white/10"
                                >
                                  -
                                </button>
                                <span className="text-white w-8 text-center font-medium">
                                  {qty}
                                </span>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    updateQty(addon.id, qty + 1);
                                  }}
                                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-white/10"
                                >
                                  +
                                </button>
                              </div>
                            )}
                            <p className="text-blue-400 font-bold whitespace-nowrap min-w-[80px] text-right">
                              ${addon.price}
                              {addon.unit === "each" ? "/ea" : ""}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Discounts */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Stack Your Discounts
                </h3>
                <div className="space-y-3">
                  <div
                    className={`p-4 rounded-xl border cursor-pointer transition-colors ${
                      googleReview
                        ? "bg-green-500/5 border-green-500/30"
                        : "bg-card-bg border-card-border hover:border-white/10"
                    }`}
                    onClick={() => setGoogleReview(!googleReview)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded border flex items-center justify-center ${
                            googleReview
                              ? "bg-green-500 border-green-500"
                              : "border-gray-600"
                          }`}
                        >
                          {googleReview && (
                            <CheckCircle2 className="w-4 h-4 text-white" />
                          )}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <Star className="w-4 h-4 text-yellow-400" />
                            <p className="text-white font-medium">
                              Leave a Google Review
                            </p>
                          </div>
                          <p className="text-xs text-gray-500 ml-6">
                            Share your honest experience after service
                          </p>
                        </div>
                      </div>
                      <p className="text-green-400 font-bold">-$50</p>
                    </div>
                  </div>

                  <div
                    className={`p-4 rounded-xl border cursor-pointer transition-colors ${
                      cashPayment
                        ? "bg-green-500/5 border-green-500/30"
                        : "bg-card-bg border-card-border hover:border-white/10"
                    }`}
                    onClick={() => setCashPayment(!cashPayment)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded border flex items-center justify-center ${
                            cashPayment
                              ? "bg-green-500 border-green-500"
                              : "border-gray-600"
                          }`}
                        >
                          {cashPayment && (
                            <CheckCircle2 className="w-4 h-4 text-white" />
                          )}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <Banknote className="w-4 h-4 text-green-400" />
                            <p className="text-white font-medium">
                              Pay with Cash
                            </p>
                          </div>
                          <p className="text-xs text-gray-500 ml-6">
                            Cash payment on day of service
                          </p>
                        </div>
                      </div>
                      <p className="text-green-400 font-bold">-$50</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 p-6 rounded-2xl bg-card-bg border border-card-border">
                <h3 className="text-xl font-bold text-white mb-6">
                  Your Package
                </h3>

                {/* Items */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">
                      Exterior Window Cleaning
                    </span>
                    <span className="text-white font-medium">$350</span>
                  </div>
                  {Object.entries(selectedAddOns).map(([id, qty]) => {
                    const addon = addOns.find((a) => a.id === id);
                    if (!addon) return null;
                    return (
                      <div key={id} className="flex justify-between text-sm">
                        <span className="text-gray-300">
                          {addon.name}
                          {qty > 1 ? ` x${qty}` : ""}
                        </span>
                        <span className="text-white font-medium">
                          ${addon.price * qty}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Discounts */}
                {(googleReview || cashPayment) && (
                  <div className="space-y-2 mb-6 pt-4 border-t border-white/5">
                    {googleReview && (
                      <div className="flex justify-between text-sm">
                        <span className="text-green-400">Google Review Discount</span>
                        <span className="text-green-400 font-medium">-$50</span>
                      </div>
                    )}
                    {cashPayment && (
                      <div className="flex justify-between text-sm">
                        <span className="text-green-400">Cash Payment Discount</span>
                        <span className="text-green-400 font-medium">-$50</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Total */}
                <div className="pt-4 border-t border-white/10">
                  <div className="flex justify-between items-end">
                    <span className="text-gray-400 text-sm">Total</span>
                    <div className="text-right">
                      {discount > 0 && (
                        <p className="text-sm text-gray-500 line-through">
                          ${subtotal}
                        </p>
                      )}
                      <p className="text-3xl font-extrabold text-white">
                        ${total}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Payment Options */}
                <div className="mt-8 space-y-3">
                  {!cashPayment && (
                    <button className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:from-blue-500 hover:to-cyan-400 transition-all shadow-lg shadow-blue-500/25">
                      <CreditCard className="w-5 h-5" />
                      Pay ${total} with Stripe
                    </button>
                  )}

                  {cashPayment && (
                    <Link
                      href="/quote"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold hover:from-green-500 hover:to-emerald-400 transition-all shadow-lg shadow-green-500/25"
                    >
                      <Banknote className="w-5 h-5" />
                      Book Cash Payment — ${total}
                    </Link>
                  )}

                  <a
                    href="https://calendly.com/ezhomeservices"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-white font-medium hover:bg-white/5 transition-all text-sm"
                  >
                    <Calendar className="w-4 h-4" />
                    Schedule Phone Estimate Instead
                  </a>
                </div>

                <p className="text-xs text-gray-600 mt-4 text-center">
                  Secure payment powered by Stripe
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
