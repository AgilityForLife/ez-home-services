import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Home Cleaning Tips & Guides",
  description:
    "Expert tips on pressure washing, window cleaning, gutter maintenance, and exterior care for New Jersey homeowners. Seasonal guides and how-to articles from EZ Home Services.",
  alternates: {
    canonical: "https://ezhomeservices.business/blog",
  },
  openGraph: {
    title: "Blog | EZ Home Services",
    description:
      "Expert exterior cleaning tips, seasonal guides, and home maintenance advice for NJ homeowners.",
    url: "https://ezhomeservices.business/blog",
    type: "website",
  },
};

const posts = [
  {
    slug: "spring-pressure-washing-guide-nj",
    title: "Spring Pressure Washing Guide for New Jersey Homeowners",
    excerpt:
      "Winter is over — here's how to assess your property and get your driveway, siding, and deck looking brand new this spring. A complete guide for NJ homeowners.",
    date: "2026-04-16",
    readTime: "6 min read",
    category: "Pressure Washing",
  },
];

export default function BlogIndex() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-400 mb-3">
            Blog
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">
            Cleaning Tips &amp; Guides
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Expert advice on keeping your New Jersey property looking its best,
            season after season.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block p-8 rounded-2xl bg-card-bg border border-card-border hover:border-blue-500/50 transition-all group"
              >
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-blue-400 font-semibold text-sm group-hover:gap-2 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
