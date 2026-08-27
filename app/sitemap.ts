import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/pages";
import { englishRouteSlugs, localizePath, thaiRouteSlugs } from "@/lib/routes";
import type { Locale, RouteSlug } from "@/lib/routes";

function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

function sitemapEntry(locale: Locale, slug?: RouteSlug, includeEnglish = true, includeThai = true): MetadataRoute.Sitemap[number] {
  const enPath = localizePath("en", slug);
  const thPath = localizePath("th", slug);

  return {
    url: absoluteUrl(localizePath(locale, slug)),
    alternates: {
      languages: {
        ...(includeEnglish ? { en: absoluteUrl(enPath) } : {}),
        ...(includeThai ? { th: absoluteUrl(thPath) } : {}),
        "x-default": includeEnglish ? absoluteUrl(enPath) : absoluteUrl(thPath)
      }
    }
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [sitemapEntry("en"), sitemapEntry("th")];

  englishRouteSlugs.forEach((slug) => {
    const hasThai = thaiRouteSlugs.includes(slug as (typeof thaiRouteSlugs)[number]);
    entries.push(sitemapEntry("en", slug, true, hasThai));
  });

  thaiRouteSlugs.forEach((slug) => {
    const hasEnglish = englishRouteSlugs.includes(slug as (typeof englishRouteSlugs)[number]);
    entries.push(sitemapEntry("th", slug, hasEnglish, true));
  });

  return entries;
}
