import { notFound } from "next/navigation";
import { LandingPage } from "@/components/LandingPage";
import { getLandingPage } from "@/lib/pages";
import { englishRouteSlugs, isEnglishRouteSlug } from "@/lib/routes";
import type { RouteSlug } from "@/lib/routes";
import { getPageMetadata } from "@/lib/seo";

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return englishRouteSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps) {
  if (!isEnglishRouteSlug(params.slug)) return {};
  return getPageMetadata("en", params.slug as RouteSlug);
}

export default function Page({ params }: PageProps) {
  if (!isEnglishRouteSlug(params.slug)) notFound();
  return <LandingPage locale="en" page={getLandingPage(params.slug as RouteSlug, "en")} />;
}
