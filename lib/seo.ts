import type { Metadata } from "next";
import { brandLogoPath } from "@/lib/brand";
import { getDictionary } from "@/lib/i18n";
import { getLandingPage, siteUrl } from "@/lib/pages";
import { hasThaiHreflangEquivalent, isEnglishRouteSlug, isThaiRouteSlug, localizePath } from "@/lib/routes";
import type { Locale, RouteSlug } from "@/lib/routes";

const localeMap: Record<Locale, string> = {
  en: "en_US",
  th: "th_TH"
};

export function getPageMetadata(locale: Locale, slug?: RouteSlug): Metadata {
  const dictionary = getDictionary(locale);
  const canonical = localizePath(locale, slug);
  const landingPage = slug ? getLandingPage(slug, locale) : undefined;
  const title = landingPage?.title ?? dictionary.metadata.title;
  const description = landingPage?.description ?? dictionary.metadata.description;
  const hasEnglishAlternate = !slug || isEnglishRouteSlug(slug);
  const hasThaiAlternate = !slug || (isThaiRouteSlug(slug) && hasThaiHreflangEquivalent(slug));
  const languages = {
    ...(hasEnglishAlternate && (locale === "en" || hasThaiAlternate) ? { en: localizePath("en", slug) } : {}),
    ...(locale === "th" && isThaiRouteSlug(slug) ? { th: localizePath("th", slug) } : hasThaiAlternate ? { th: localizePath("th", slug) } : {}),
    "x-default": hasEnglishAlternate ? localizePath("en", slug) : localizePath("th", slug)
  };

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: {
      canonical,
      languages
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      locale: localeMap[locale],
      alternateLocale: locale === "en" && hasThaiAlternate ? [localeMap.th] : locale === "th" && hasEnglishAlternate ? [localeMap.en] : [],
      images: [
        {
          url: brandLogoPath,
          width: 760,
          height: 760,
          alt: "Inphade logo"
        }
      ]
    },
    other: {
      "og:logo": brandLogoPath
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [brandLogoPath]
    }
  };
}
