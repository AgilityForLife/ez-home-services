"use client";

import { type ReactNode, type MouseEvent } from "react";
import { trackContact, trackSchedule } from "@/lib/fbpixel";

/**
 * Wrapper for <a> tags that fires Pixel events on click.
 *
 * trackType="contact"  → fires fbq Contact event (phone links)
 * trackType="schedule"  → fires fbq Schedule event (Calendly links)
 */
export default function TrackedLink({
  href,
  trackType,
  className,
  children,
  target,
  rel,
}: {
  href: string;
  trackType: "contact" | "schedule";
  className?: string;
  children: ReactNode;
  target?: string;
  rel?: string;
}) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (trackType === "contact") {
      trackContact();
    } else if (trackType === "schedule") {
      trackSchedule();
    }
    // Don't prevent default — let the link work normally
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={className}
      target={target}
      rel={rel}
    >
      {children}
    </a>
  );
}
