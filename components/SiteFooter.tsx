"use client";

import { BrandLogo } from "@/components/BrandLogo";
import { localizePath } from "@/lib/routes";
import type { Locale } from "@/lib/routes";

function track(event: string) {
  const win = window as Window & { dataLayer?: Array<Record<string, unknown>>; gtag?: (...args: unknown[]) => void };
  if (win.gtag) {
    win.gtag("event", event);
    return;
  }
  win.dataLayer?.push({ event });
}

const footerHeadingClass = "text-[16px] font-semibold uppercase tracking-normal text-[#8FBFA8]";

export function SiteFooter({ locale }: { locale: Locale }) {
  const isThai = locale === "th";

  const serviceLinks = [
    { label: isThai ? "ออกแบบเว็บไซต์" : "Web Design", href: localizePath(locale, "web-design-bangkok") },
    { label: isThai ? "พัฒนาเว็บไซต์" : "Website Development", href: localizePath(locale, "website-development-bangkok") },
    { label: isThai ? "รีดีไซน์เว็บไซต์" : "Website Redesign", href: localizePath(locale, "website-redesign-bangkok") },
    { label: isThai ? "พื้นฐาน SEO" : "SEO Foundation", href: `${localizePath(locale, "services")}#seo-foundation` },
    { label: isThai ? "การดูแลต่อเนื่อง" : "Ongoing Support", href: `${localizePath(locale, "services")}#ongoing-support` }
  ];

  const industryLinks = [
    { label: isThai ? "อสังหาริมทรัพย์" : "Real Estate", href: localizePath(locale, "real-estate-web-design") },
    { label: isThai ? "คลินิก" : "Clinics", href: localizePath(locale, "clinic-web-design") },
    { label: isThai ? "โรงแรม" : "Hotels", href: localizePath(locale, "hotel-web-design") },
    { label: isThai ? "ร้านอาหาร" : "Restaurants", href: localizePath(locale, "restaurant-web-design") }
  ];

  const companyLinks = [
    { label: isThai ? "โปรเจกต์" : "Project", href: localizePath(locale, "project") },
    { label: isThai ? "ติดต่อ" : "Contact", href: localizePath(locale, "contact") }
  ];

  return (
    <footer className="border-t border-line bg-ink px-5 py-14 text-white sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.85fr_0.85fr_0.85fr]">
        <div>
          <a href={localizePath(locale)} className="inline-flex items-center" aria-label={isThai ? "หน้าแรก Inphade" : "Inphade home"}>
            <BrandLogo width={56} height={56} className="h-14 w-14 rounded-lg object-contain" />
          </a>
          <p className="mt-4 max-w-md leading-7 text-slate-300">
            {isThai
              ? "เว็บไซต์พรีเมียมและประสบการณ์ดิจิทัลสำหรับธุรกิจที่ต้องการเติบโตในกรุงเทพและประเทศไทย"
              : "Premium websites, digital experiences and growth-focused solutions for modern businesses in Bangkok and Thailand."}
          </p>
          <a href="mailto:hello@inphade.com" onClick={() => track("email_click")} className="mt-5 block text-slate-300 transition hover:text-white">
            hello@inphade.com
          </a>
        </div>
        <div>
          <h2 className={footerHeadingClass}>{isThai ? "บริการ" : "Services"}</h2>
          <div className="mt-4 grid gap-3 text-slate-300">
            {serviceLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h2 className={footerHeadingClass}>{isThai ? "อุตสาหกรรม" : "Industries"}</h2>
          <div className="mt-4 grid gap-3 text-slate-300">
            {industryLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h2 className={footerHeadingClass}>{isThai ? "บริษัท" : "Company"}</h2>
          <div className="mt-4 grid gap-3 text-slate-300">
            {companyLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-sm text-slate-400">
        {isThai ? "© 2026 Inphade สงวนลิขสิทธิ์" : "© 2026 Inphade. All rights reserved."}
      </div>
    </footer>
  );
}
