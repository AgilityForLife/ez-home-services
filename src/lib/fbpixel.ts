// Facebook Pixel helper — fires standard events for conversion tracking
// Pixel ID: 292091716754299 (initialized in layout.tsx)

// Extend window type to include fbq
declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Fire a Facebook Pixel standard event.
 * Safely no-ops if fbq isn't loaded (e.g., ad blocker).
 */
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window !== "undefined" && window.fbq) {
    if (params) {
      window.fbq("track", eventName, params);
    } else {
      window.fbq("track", eventName);
    }
  }
}

// ---- Convenience wrappers for each standard event ----

/** User views a key page (services, specials, about, contact) */
export function trackViewContent(contentName: string, contentCategory?: string) {
  trackEvent("ViewContent", {
    content_name: contentName,
    content_category: contentCategory || "page",
  });
}

/** User submits the quote form */
export function trackLead(contentName?: string) {
  trackEvent("Lead", {
    content_name: contentName || "Quote Form",
    content_category: "form_submission",
  });
}

/** User clicks a phone number link */
export function trackContact() {
  trackEvent("Contact", {
    content_name: "Phone Call",
    content_category: "phone",
  });
}

/** User clicks the Calendly scheduling link */
export function trackSchedule() {
  trackEvent("Schedule", {
    content_name: "Calendly Booking",
    content_category: "appointment",
  });
}
