import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isRouteSlug } from "@/lib/routes";
import type { Locale } from "@/lib/routes";

const localeCookie = "inphade-locale";

function getSavedLocale(request: NextRequest): Locale | undefined {
  const value = request.cookies.get(localeCookie)?.value;
  return value === "en" || value === "th" ? value : undefined;
}

function getBrowserLocale(request: NextRequest): Locale {
  const preferred = request.headers.get("accept-language")?.split(",")[0]?.toLowerCase();
  return preferred?.startsWith("th") ? "th" : "en";
}

function getRouteInfo(pathname: string) {
  const parts = pathname.split("/").filter(Boolean);
  const isThai = parts[0] === "th";
  const slug = isThai ? parts[1] : parts[0];
  const isKnownRoute = slug === undefined || isRouteSlug(slug);

  return {
    isThai,
    slug: isRouteSlug(slug) ? slug : undefined,
    isKnownRoute
  };
}

function redirectTo(request: NextRequest, pathname: string) {
  const url = request.nextUrl.clone();
  url.pathname = pathname;
  return NextResponse.redirect(url);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const route = getRouteInfo(pathname);

  if (!route.isKnownRoute) return NextResponse.next();

  const savedLocale = getSavedLocale(request);

  if (savedLocale === "th" && !route.isThai) {
    return redirectTo(request, route.slug ? `/th/${route.slug}` : "/th");
  }

  if (savedLocale === "en" && route.isThai) {
    return redirectTo(request, route.slug ? `/${route.slug}` : "/");
  }

  if (!savedLocale && !route.isThai && getBrowserLocale(request) === "th") {
    return redirectTo(request, route.slug ? `/th/${route.slug}` : "/th");
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"]
};
