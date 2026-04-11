import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "EZ Home Services | Window Cleaning, Gutter & Pressure Washing | Central & Northern NJ",
  description:
    "Professional window cleaning, gutter maintenance, and pressure washing services in Central & Northern New Jersey. Online special: $350 for up to 30 exterior windows. Call 862-202-0908 for a free estimate.",
  keywords:
    "window cleaning, gutter cleaning, pressure washing, NJ, New Jersey, EZ Home Services, exterior cleaning",
  openGraph: {
    title: "EZ Home Services | Professional Exterior Cleaning in NJ",
    description:
      "Window cleaning, gutter maintenance & pressure washing. Serving Central & Northern NJ. Online special available!",
    type: "website",
  },
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
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
