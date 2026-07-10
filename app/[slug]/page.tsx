import { notFound } from "next/navigation";
import { HomePage } from "@/components/HomePage";
import { getDictionary } from "@/lib/i18n";
import { isRouteSlug, routeSlugs } from "@/lib/routes";
import type { RouteSlug } from "@/lib/routes";
import { getPageMetadata } from "@/lib/seo";

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return routeSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps) {
  if (!isRouteSlug(params.slug)) return {};
  return getPageMetadata("en", params.slug as RouteSlug);
}

export default function Page({ params }: PageProps) {
  if (!isRouteSlug(params.slug)) notFound();
  return <HomePage locale="en" dictionary={getDictionary("en")} />;
}
