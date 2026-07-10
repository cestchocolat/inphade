import type { Metadata } from "next";
import { getDictionary } from "@/lib/i18n";
import { localizePath } from "@/lib/routes";
import type { Locale, RouteSlug } from "@/lib/routes";

const localeMap: Record<Locale, string> = {
  en: "en_US",
  th: "th_TH"
};

export function getPageMetadata(locale: Locale, slug?: RouteSlug): Metadata {
  const dictionary = getDictionary(locale);
  const canonical = localizePath(locale, slug);
  const title = dictionary.metadata.title;
  const description = dictionary.metadata.description;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: localizePath("en", slug),
        th: localizePath("th", slug),
        "x-default": localizePath("en", slug)
      }
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      locale: localeMap[locale],
      alternateLocale: locale === "en" ? [localeMap.th] : [localeMap.en],
      images: [
        {
          url: "/brand/inphade-logo.png",
          width: 1024,
          height: 1024,
          alt: "Inphade logo"
        }
      ]
    },
    other: {
      "og:logo": "/brand/inphade-logo.png"
    }
  };
}
