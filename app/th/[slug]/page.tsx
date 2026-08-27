import { notFound } from "next/navigation";
import { LandingPage } from "@/components/LandingPage";
import { getLandingPage } from "@/lib/pages";
import { isThaiRouteSlug, thaiRouteSlugs } from "@/lib/routes";
import type { RouteSlug } from "@/lib/routes";
import { getPageMetadata } from "@/lib/seo";

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return thaiRouteSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps) {
  if (!isThaiRouteSlug(params.slug)) return {};
  return getPageMetadata("th", params.slug as RouteSlug);
}

export default function Page({ params }: PageProps) {
  if (!isThaiRouteSlug(params.slug)) notFound();
  return <LandingPage locale="th" page={getLandingPage(params.slug as RouteSlug, "th")} />;
}
