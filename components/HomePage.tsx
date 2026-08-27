"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { localizePath } from "@/lib/routes";
import type { Locale } from "@/lib/routes";
import type { Dictionary } from "@/lib/i18n";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import {
  ArrowRight,
  Briefcase,
  Building2,
  Check,
  Globe2,
  HeartPulse,
  Hotel,
  Layers3,
  Palette,
  Search,
  ShieldCheck,
  Target,
  Utensils,
  Wrench
} from "lucide-react";

const conceptImages: Record<string, string> = {
  "real-estate": "/showcase/luxury-real-estate.png",
  startup: "/showcase/modern-startup.png",
  hotel: "/showcase/high-end-hotel.png",
  medical: "/showcase/medical-center.png",
  wealth: "/showcase/wealth-management.png",
  architecture: "/showcase/architecture-studio.png",
  restaurant: "/showcase/restaurant.png",
  personal: "/showcase/personal-brand.png",
  fitness: "/showcase/fitness-brand.png",
  ai: "/showcase/ai-product.png"
};

const serviceIcons = [Palette, Target, Search, Wrench] as const;
const industryIcons = [Building2, HeartPulse, Hotel, Utensils, Briefcase] as const;
const englishServiceLinks = ["/web-design-bangkok", "/website-redesign-bangkok", "/services#seo-foundation", "/services#ongoing-support"] as const;
const englishIndustryLinks = ["/real-estate-web-design", "/clinic-web-design", "/hotel-web-design", "/restaurant-web-design", "/web-design-bangkok"] as const;
const thaiServiceLinks = [
  "/th/web-design-bangkok",
  "/th/website-development-bangkok",
  "/th/website-redesign-bangkok",
  "/th/company-website",
  "/th/web-design-bangkok",
  "/th/services#seo-foundation",
  "/th/services#ongoing-support",
  "/th/website-development-bangkok"
] as const;
const thaiIndustryLinks = [
  "/th/real-estate-web-design",
  "/th/clinic-web-design",
  "/th/hotel-web-design",
  "/th/restaurant-web-design",
  "/th/professional-services-web-design"
] as const;

function Counter({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const total = 72;
    const id = window.setInterval(() => {
      frame += 1;
      const eased = 1 - Math.pow(1 - frame / total, 3);
      setCount(Math.round(value * eased));
      if (frame >= total) window.clearInterval(id);
    }, 18);
    return () => window.clearInterval(id);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

function track(event: string) {
  const win = window as Window & { dataLayer?: Array<Record<string, unknown>>; gtag?: (...args: unknown[]) => void };
  if (win.gtag) {
    win.gtag("event", event);
    return;
  }
  win.dataLayer?.push({ event });
}

function GalleryImageMockup({ title, src }: { title: string; src: string }) {
  return (
    <div className="device-chrome h-[474px] rounded-lg border border-white/80 p-2 shadow-premium">
      <div className="flex h-full overflow-hidden rounded-md border border-line bg-white">
        <div className="flex min-h-0 flex-1 flex-col">
          <div className="flex h-8 shrink-0 items-center gap-1.5 border-b border-line bg-soft px-3">
            <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#176C4B]" />
            <span className="ml-3 h-3 w-28 rounded-full bg-white shadow-inner" />
          </div>
          <img
            src={src}
            alt={title}
            className="min-h-0 w-full flex-1 object-cover"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}

export function HomePage({ locale, dictionary }: { locale: Locale; dictionary: Dictionary }) {
  const t = dictionary;
  const concepts = t.gallery.concepts;
  const services = t.services.items.map((service, index) => ({
    ...service,
    Icon: serviceIcons[index % serviceIcons.length]
  }));
  const industries = t.industries.items.map((industry, index) => ({
    ...industry,
    Icon: industryIcons[index]
  }));
  const englishWhatsAppUrl = `https://wa.me/66613306922?text=${encodeURIComponent("Hi! I'm interested in building a website with Inphade. I'd like to learn more about your services.")}`;
  const thaiWhatsAppUrl = `https://wa.me/66613306922?text=${encodeURIComponent("สวัสดี Inphade สนใจทำเว็บไซต์และอยากสอบถามรายละเอียดเพิ่มเติม")}`;
  const whatsAppUrl = locale === "th" ? thaiWhatsAppUrl : englishWhatsAppUrl;
  const primaryCtaHref = locale === "th" ? "/th/contact" : whatsAppUrl;
  const primaryCtaTarget = locale === "th" ? undefined : "_blank";
  const primaryCtaRel = locale === "th" ? undefined : "noopener noreferrer";
  const workHref = localizePath(locale, "project");
  const getServiceHref = (index: number) => locale === "en" ? englishServiceLinks[index] ?? "/services" : thaiServiceLinks[index] ?? "/th/web-design-bangkok";
  const getIndustryHref = (index: number) => locale === "en" ? englishIndustryLinks[index] ?? "/web-design-bangkok" : thaiIndustryLinks[index] ?? "/th/web-design-bangkok";
  const thaiTypographyClass = locale === "th" ? "[&_h1]:!leading-[1.22] [&_h2]:!leading-[1.22] [&_h3]:!leading-[1.3] [&_p]:!leading-8 sm:[&_p]:!leading-9" : "";

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Inphade",
    url: "https://www.inphade.com/",
    description: t.schema.description,
    logo: "https://www.inphade.com/brand/inphade-logo.png",
    email: "hello@inphade.com"
  };

  return (
    <main className={`overflow-hidden bg-white ${thaiTypographyClass}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="relative overflow-visible px-5 pb-40 pt-6 sm:px-8 sm:pb-44">
        <div className="mesh absolute inset-0" />
        <div className="grid-surface absolute inset-0 opacity-70" />
        <div className="pointer-events-none absolute inset-x-0 top-24 mx-auto h-[27rem] max-w-4xl bg-[radial-gradient(circle_at_center,rgba(31,122,83,0.08),transparent_70%)]" />
        <SiteHeader locale={locale} />
        <div className="relative z-10 mx-auto max-w-7xl pt-36 text-center sm:pt-44">
          <h1
            className={`mx-auto max-w-4xl font-semibold leading-[1.08] tracking-normal text-brandNavy ${
              locale === "th" ? "text-[2.2rem] sm:text-[2.75rem] lg:text-[3.2rem]" : "text-[2.05rem] sm:text-[3rem] lg:text-[3.6rem]"
            }`}
          >
            {t.hero.headline}
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
            {t.hero.subheadline}
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={primaryCtaHref}
              target={primaryCtaTarget}
              rel={primaryCtaRel}
              onClick={() => {
                track("whatsapp_click");
                track("book_call_click");
              }}
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 font-semibold text-white shadow-glow"
            >
              {t.hero.primary} <ArrowRight size={18} />
            </a>
            <a href={workHref} onClick={() => track("portfolio_view")} className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-line bg-white px-6 py-4 font-semibold text-ink shadow-sm">
              {t.hero.secondary}
            </a>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-line bg-white py-10">
        <div className="pointer-events-none absolute inset-x-8 top-1/2 h-24 -translate-y-1/2 rounded-full bg-[linear-gradient(90deg,rgba(164,208,190,0),rgba(164,208,190,0.24),rgba(164,208,190,0))] blur-3xl" />
        <div className="mx-auto grid max-w-7xl gap-4 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
          {[
            { type: "counter", value: 50, suffix: "+", label: t.stats.websites },
            { type: "infinity", label: t.stats.lighthouse },
            { type: "check", label: t.stats.seo },
            { type: "check", label: t.stats.performance }
          ].map((stat) => (
            <div
              key={stat.label}
              className="relative overflow-hidden rounded-lg border border-[rgba(7,21,56,0.08)] bg-white p-5 text-center shadow-[0_12px_30px_rgba(7,21,56,0.045)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(7,21,56,0.075)]"
            >
              <div className="absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,rgba(164,208,190,0),#A4D0BE,rgba(164,208,190,0))]" />
              <div className="text-[2.65rem] font-semibold leading-none text-ink">
                {stat.type === "counter" && <Counter value={stat.value} suffix={stat.suffix} />}
                {stat.type === "infinity" && <span className="infinity-drift inline-block text-[#176C4B]">∞</span>}
                {stat.type === "check" && <Check className="mx-auto text-[#A4D0BE]" size={40} strokeWidth={2.1} />}
              </div>
              <p className="mt-2 text-sm font-medium text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="work" className="bg-[#F7FAF8] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="mb-3 text-sm font-semibold uppercase text-accent">{t.gallery.label}</p>
          <h2 className={`max-w-3xl font-semibold text-brandNavy ${locale === "th" ? "text-3xl sm:text-4xl" : "text-4xl sm:text-5xl"}`}>{t.gallery.heading}</h2>
        </div>
        <div className="mt-10 overflow-hidden">
          <div className="concept-track flex w-max gap-6 px-5 sm:px-8">
            {[...concepts, ...concepts].map((concept, index) => {
              const isClone = index >= concepts.length;

              return (
              <div key={`${concept.id}-${index}`} aria-hidden={isClone} className="w-[340px] rounded-lg border border-line bg-white p-3 shadow-sm sm:w-[440px]">
                <GalleryImageMockup title={concept.title} src={conceptImages[concept.id]} />
                <div className="px-2 pt-4 text-lg font-semibold text-ink">{concept.title}</div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="services"
        className="relative overflow-hidden bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FFFC_52%,#F2FBF7_100%)] py-24 sm:py-32"
      >
        <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#A7F3D0]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-28 h-[28rem] w-[28rem] rounded-full bg-[#D1FAE5]/30 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="relative mb-12 max-w-3xl">
            <div className="pointer-events-none absolute -left-8 -top-8 h-32 w-72 rounded-full bg-[rgba(23,108,75,0.12)] blur-3xl" />
            <p className="mb-3 text-sm font-semibold uppercase text-accent">{t.services.label}</p>
            <h2 className="services-heading-gradient relative text-3xl font-semibold sm:text-4xl">{t.services.heading}</h2>
          </div>
          <div className="grid gap-x-12 gap-y-0 border-y border-line/80 md:grid-cols-2">
            {services.map(({ title, Icon, description }, index) => (
              <div
                key={title}
                className="group relative py-10 transition duration-300 md:border-b md:border-line/80 md:[&:nth-last-child(-n+2)]:border-b-0"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#A4D0BE]/70 to-transparent md:hidden" />
                <div className="flex gap-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#E8F5EE] text-accent shadow-[0_10px_30px_rgba(23,108,75,0.08)] transition duration-300 group-hover:bg-[#DCEFE6] group-hover:shadow-[0_14px_36px_rgba(23,108,75,0.12)]">
                    <Icon size={28} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-ink">{title}</h3>
                    <p className="mt-4 max-w-xl leading-7 text-muted">{description}</p>
                    <a href={getServiceHref(index)} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                      {locale === "th" ? "ดูรายละเอียด" : "Learn more"} <ArrowRight size={15} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="relative overflow-hidden bg-ink py-28 sm:py-36">
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] [background-size:44px_44px]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <p className="mb-3 text-sm font-semibold uppercase text-[#A7F3D0]">{t.process.label}</p>
          <h2 className="max-w-3xl text-4xl font-semibold text-white sm:text-5xl">{t.process.heading}</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            {t.process.subheading}
          </p>

          <div className="relative mt-20 hidden min-h-[520px] lg:block">
            <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-white/35 to-transparent" />
            <div className="grid grid-cols-6 gap-4">
              {t.process.items.map(({ title, description }, index) => {
                const isTop = index % 2 === 0;
                return (
                  <div key={title} className="relative min-h-[520px]">
                    <div
                      className={`absolute left-0 right-0 ${isTop ? "bottom-[calc(50%+4.75rem)]" : "top-[calc(50%+4.75rem)]"}`}
                    >
                      <div className="rounded-lg border border-white/8 bg-white/[0.045] p-5 shadow-[0_18px_54px_rgba(0,0,0,0.16)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/[0.065]">
                        <div className="mb-3 text-base font-semibold text-[#A7F3D0]">{title}</div>
                        <p className="text-sm leading-6 text-slate-300">{description}</p>
                      </div>
                    </div>

                    <div className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
                      <div className="h-3 w-3 rounded-full border border-[#A7F3D0]/70 bg-[#A7F3D0]" />
                      <div className={`h-16 w-px bg-gradient-to-b ${isTop ? "order-first mb-4 from-transparent to-white/25" : "mt-4 from-white/25 to-transparent"}`} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative mt-14 grid gap-5 lg:hidden">
            <div className="absolute bottom-8 left-6 top-8 w-px bg-gradient-to-b from-white/35 via-white/20 to-transparent" />
            {t.process.items.map(({ title, description }) => (
              <div
                key={title}
                className="relative grid grid-cols-[2rem_1fr] gap-5"
              >
                <div className="relative z-10 mt-2 h-3 w-3 rounded-full border border-[#A7F3D0]/70 bg-[#A7F3D0]" />
                <div className="rounded-lg border border-white/8 bg-white/[0.045] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.14)] backdrop-blur-md">
                  <h3 className="text-lg font-semibold text-[#A7F3D0]">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F2F8F5] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase text-accent">{t.industries.label}</p>
            <h2 className="text-4xl font-semibold text-brandNavy sm:text-5xl">{t.industries.heading}</h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              {t.industries.subheading}
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {industries.map(({ title, Icon, description }, index) => (
              <div
                key={title}
                className="relative overflow-hidden rounded-lg border border-line bg-white p-7 shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition duration-300 hover:border-[#1F7A53]/35 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]"
              >
                <div className="absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,#176C4B,#245F48)]" />
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-lg bg-[#E8F5EE] text-[#1F7A53]">
                  <Icon size={30} strokeWidth={1.8} />
                </div>
                <h3 className="text-xl font-semibold text-ink">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted">{description}</p>
                <a href={getIndustryHref(index)} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                  {locale === "th" ? "ดูบริการ" : "View service"} <ArrowRight size={15} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-lg bg-ink p-8 text-center text-white shadow-premium sm:p-16">
          <div className="mx-auto max-w-4xl">
            <Layers3 className="mx-auto mb-8 text-[#8FBFA8]" size={38} />
            <h2 className="text-4xl font-semibold sm:text-6xl">{t.cta.headline}</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              {t.cta.subheadline}
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={primaryCtaHref}
                target={primaryCtaTarget}
                rel={primaryCtaRel}
                aria-label={t.cta.primaryAria}
                onClick={() => {
                  if (locale === "en") {
                    track("whatsapp_click");
                    track("book_call_click");
                  }
                }}
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 font-semibold text-ink"
              >
                {t.cta.primary} <Globe2 size={18} />
              </a>
              {locale === "th" ? (
                <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer" onClick={() => track("whatsapp_click")} className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-4 font-semibold text-white">
                  {t.cta.secondary} <ShieldCheck size={18} />
                </a>
              ) : (
                <a href="mailto:hello@inphade.com?subject=Free Proposal" onClick={() => track("email_click")} className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-4 font-semibold text-white">
                  {t.cta.secondary} <ShieldCheck size={18} />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter locale={locale} />
    </main>
  );
}
