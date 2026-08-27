export const locales = ["en", "th"] as const;

export type Locale = (typeof locales)[number];

export const routeSlugs = [
  "services",
  "project",
  "contact",
  "about",
  "web-design-bangkok",
  "website-development-bangkok",
  "website-redesign-bangkok",
  "company-website",
  "real-estate-web-design",
  "clinic-web-design",
  "hotel-web-design",
  "restaurant-web-design",
  "professional-services-web-design"
] as const;

export type RouteSlug = (typeof routeSlugs)[number];

export const englishRouteSlugs = [
  "services",
  "project",
  "contact",
  "about",
  "company-website",
  "professional-services-web-design",
  "web-design-bangkok",
  "website-development-bangkok",
  "website-redesign-bangkok",
  "real-estate-web-design",
  "clinic-web-design",
  "hotel-web-design",
  "restaurant-web-design"
] as const;

export type EnglishRouteSlug = (typeof englishRouteSlugs)[number];

export const thaiRouteSlugs = [
  "services",
  "project",
  "contact",
  "about",
  "web-design-bangkok",
  "website-development-bangkok",
  "website-redesign-bangkok",
  "company-website",
  "real-estate-web-design",
  "clinic-web-design",
  "hotel-web-design",
  "restaurant-web-design",
  "professional-services-web-design"
] as const;

export type ThaiRouteSlug = (typeof thaiRouteSlugs)[number];

export const thaiHreflangEquivalentSlugs = [
  "services",
  "project",
  "contact",
  "about",
  "web-design-bangkok",
  "website-development-bangkok",
  "website-redesign-bangkok",
  "company-website",
  "real-estate-web-design",
  "clinic-web-design",
  "hotel-web-design",
  "restaurant-web-design",
  "professional-services-web-design"
] as const;

export type ThaiHreflangEquivalentSlug = (typeof thaiHreflangEquivalentSlugs)[number];

export const localizedSlugs: Record<Locale, Record<RouteSlug, string>> = {
  en: {
    services: "services",
    project: "project",
    contact: "contact",
    about: "about",
    "web-design-bangkok": "web-design-bangkok",
    "website-development-bangkok": "website-development-bangkok",
    "website-redesign-bangkok": "website-redesign-bangkok",
    "company-website": "company-website",
    "real-estate-web-design": "real-estate-web-design",
    "clinic-web-design": "clinic-web-design",
    "hotel-web-design": "hotel-web-design",
    "restaurant-web-design": "restaurant-web-design",
    "professional-services-web-design": "professional-services-web-design"
  },
  th: {
    services: "services",
    project: "project",
    contact: "contact",
    about: "about",
    "web-design-bangkok": "web-design-bangkok",
    "website-development-bangkok": "website-development-bangkok",
    "website-redesign-bangkok": "website-redesign-bangkok",
    "company-website": "company-website",
    "real-estate-web-design": "real-estate-web-design",
    "clinic-web-design": "clinic-web-design",
    "hotel-web-design": "hotel-web-design",
    "restaurant-web-design": "restaurant-web-design",
    "professional-services-web-design": "professional-services-web-design"
  }
};

export function isLocale(value: string | undefined): value is Locale {
  return value === "en" || value === "th";
}

export function isRouteSlug(value: string | undefined): value is RouteSlug {
  return routeSlugs.includes(value as RouteSlug);
}

export function isEnglishRouteSlug(value: string | undefined): value is EnglishRouteSlug {
  return englishRouteSlugs.includes(value as EnglishRouteSlug);
}

export function isThaiRouteSlug(value: string | undefined): value is ThaiRouteSlug {
  return thaiRouteSlugs.includes(value as ThaiRouteSlug);
}

export function hasThaiHreflangEquivalent(value: string | undefined): value is ThaiHreflangEquivalentSlug {
  return thaiHreflangEquivalentSlugs.includes(value as ThaiHreflangEquivalentSlug);
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
  if (targetLocale === "th" && slug && !isThaiRouteSlug(slug)) return localizePath("th");
  if (targetLocale === "en" && slug && !isEnglishRouteSlug(slug)) return localizePath("en");
  return localizePath(targetLocale, slug);
}
