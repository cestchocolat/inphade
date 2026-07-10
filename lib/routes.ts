export const locales = ["en", "th"] as const;

export type Locale = (typeof locales)[number];

export type RouteSlug = "services" | "portfolio" | "contact";

export const localizedSlugs: Record<Locale, Record<RouteSlug, string>> = {
  en: {
    services: "services",
    portfolio: "portfolio",
    contact: "contact"
  },
  th: {
    services: "services",
    portfolio: "portfolio",
    contact: "contact"
  }
};

export const routeSlugs = Object.keys(localizedSlugs.en) as RouteSlug[];

export function isLocale(value: string | undefined): value is Locale {
  return value === "en" || value === "th";
}

export function isRouteSlug(value: string | undefined): value is RouteSlug {
  return value === "services" || value === "portfolio" || value === "contact";
}

export function localizePath(locale: Locale, slug?: RouteSlug) {
  const prefix = locale === "th" ? "/th" : "";
  if (!slug) return prefix || "/";
  return `${prefix}/${localizedSlugs[locale][slug]}`;
}

export function getAlternatePath(pathname: string, targetLocale: Locale) {
  const parts = pathname.split("/").filter(Boolean);
  const currentLocale = parts[0] === "th" ? "th" : "en";
  const slugPart = currentLocale === "th" ? parts[1] : parts[0];
  const slug = isRouteSlug(slugPart) ? slugPart : undefined;
  return localizePath(targetLocale, slug);
}
