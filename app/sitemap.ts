import type { MetadataRoute } from "next";
import { locales, localizePath, routeSlugs } from "@/lib/routes";
import type { Locale, RouteSlug } from "@/lib/routes";

const siteUrl = "https://www.inphade.com";

function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

function sitemapEntry(locale: Locale, slug?: RouteSlug): MetadataRoute.Sitemap[number] {
  const enPath = localizePath("en", slug);
  const thPath = localizePath("th", slug);

  return {
    url: absoluteUrl(localizePath(locale, slug)),
    alternates: {
      languages: {
        en: absoluteUrl(enPath),
        th: absoluteUrl(thPath),
        "x-default": absoluteUrl(enPath)
      }
    }
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = [undefined, ...routeSlugs] as Array<RouteSlug | undefined>;

  return slugs.flatMap((slug) => locales.map((locale) => sitemapEntry(locale, slug)));
}
