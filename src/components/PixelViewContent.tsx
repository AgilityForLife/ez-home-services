"use client";

import { useEffect } from "react";
import { trackViewContent } from "@/lib/fbpixel";

/**
 * Drop this component into any page to fire a ViewContent event on mount.
 * Works in both server and client component pages.
 *
 * Usage: <PixelViewContent contentName="Services" contentCategory="services" />
 */
export default function PixelViewContent({
  contentName,
  contentCategory,
}: {
  contentName: string;
  contentCategory?: string;
}) {
  useEffect(() => {
    trackViewContent(contentName, contentCategory);
  }, [contentName, contentCategory]);

  return null; // renders nothing — tracking only
}
