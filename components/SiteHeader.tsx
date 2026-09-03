"use client";

import { ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/BrandLogo";
import { getAlternatePath, localizePath } from "@/lib/routes";
import type { Locale } from "@/lib/routes";

const whatsAppUrls: Record<Locale, string> = {
  en: `https://wa.me/66613306922?text=${encodeURIComponent("Hi! I'm interested in building a website with Inphade. I'd like to learn more about your services.")}`,
  th: `https://wa.me/66613306922?text=${encodeURIComponent("สวัสดี Inphade สนใจทำเว็บไซต์และอยากสอบถามรายละเอียดเพิ่มเติม")}`
};

function track(event: string) {
  const win = window as Window & { dataLayer?: Array<Record<string, unknown>>; gtag?: (...args: unknown[]) => void };
  if (win.gtag) {
    win.gtag("event", event);
    return;
  }
  win.dataLayer?.push({ event });
}

export function SiteHeader({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const isThai = locale === "th";
  const alternateEn = getAlternatePath(pathname, "en");
  const alternateTh = getAlternatePath(pathname, "th");
  const contactHref = localizePath(locale, "contact");
  const ctaHref = isThai ? contactHref : whatsAppUrls.en;

  const navItems = [
    { label: isThai ? "โปรเจกต์" : "Project", href: localizePath(locale, "project") },
    { label: isThai ? "บริการ" : "Services", href: localizePath(locale, "services") },
    { label: isThai ? "ขั้นตอน" : "Process", href: isThai ? "/th#process" : "/#process" },
    { label: isThai ? "ติดต่อ" : "Contact", href: contactHref }
  ];

  return (
    <nav className="glass relative z-20 mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-3">
      <a href={localizePath(locale)} className="flex items-center gap-2.5" aria-label={isThai ? "หน้าแรก Inphade" : "Inphade home"}>
        <BrandLogo width={52} height={52} priority className="h-10 w-10 rounded-md object-contain sm:h-12 sm:w-12" />
        <span className="text-[17.5px] font-semibold tracking-normal text-brandNavy sm:text-[21px]">Inphade</span>
      </a>
      <div className="hidden items-center gap-7 text-sm font-medium text-muted md:flex">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="hover:text-ink">
            {item.label}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1 text-xs font-semibold text-muted" aria-label={isThai ? "ภาษา" : "Language"}>
          <a
            href={alternateEn}
            hrefLang="en"
            className={`rounded-full px-2 py-1 transition ${locale === "en" ? "bg-[#E8F5EE] text-accent" : "hover:text-ink"}`}
            aria-current={locale === "en" ? "true" : undefined}
          >
            EN
          </a>
          <span className="text-line">|</span>
          <a
            href={alternateTh}
            hrefLang="th"
            className={`rounded-full px-2 py-1 transition ${locale === "th" ? "bg-[#E8F5EE] text-accent" : "hover:text-ink"}`}
            aria-current={locale === "th" ? "true" : undefined}
          >
            TH
          </a>
        </div>
        <a
          href={ctaHref}
          target={isThai ? undefined : "_blank"}
          rel={isThai ? undefined : "noopener noreferrer"}
          onClick={() => {
            if (!isThai) track("whatsapp_click");
          }}
          className="focus-ring hidden items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white sm:inline-flex"
        >
          {isThai ? "ขอใบเสนอราคา" : "Let's Talk"} <ArrowRight size={15} />
        </a>
      </div>
    </nav>
  );
}
