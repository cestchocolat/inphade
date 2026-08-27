"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, Check, Globe2, Mail, MessageCircle, Send } from "lucide-react";
import { localizePath } from "@/lib/routes";
import type { Locale } from "@/lib/routes";
import type { LandingPage } from "@/lib/pages";

const whatsAppUrls: Record<Locale, string> = {
  en: `https://wa.me/66613306922?text=${encodeURIComponent("Hi! I'm interested in building a website with Inphade. I'd like to get a free proposal.")}`,
  th: `https://wa.me/66613306922?text=${encodeURIComponent("สวัสดี Inphade สนใจทำเว็บไซต์และอยากขอคำปรึกษาเบื้องต้น")}`
};

function track(event: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  const win = window as Window & { dataLayer?: Array<Record<string, unknown>>; gtag?: (...args: unknown[]) => void };
  if (win.gtag) {
    win.gtag("event", event, params);
    return;
  }
  win.dataLayer?.push({ event, ...params });
}

function Nav({ locale }: { locale: Locale }) {
  const isThai = locale === "th";
  const whatsAppUrl = whatsAppUrls[locale];

  return (
    <nav className="glass relative z-20 mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-3">
      <a href={localizePath(locale)} className="flex items-center gap-3" aria-label="Inphade home">
        <Image
          src="/brand/inphade-logo.png"
          alt="Inphade"
          width={52}
          height={52}
          priority
          className="h-10 w-10 rounded-md object-contain sm:h-12 sm:w-12"
        />
        <span className="text-xl font-semibold tracking-normal text-brandNavy sm:text-2xl">Inphade</span>
      </a>
      <div className="hidden items-center gap-7 text-sm font-medium text-muted md:flex">
        <a href={isThai ? "/th#work" : "/portfolio"} className="hover:text-ink">{isThai ? "ผลงาน" : "Portfolio"}</a>
        <a href={isThai ? "/th#services" : "/website-development-bangkok"} className="hover:text-ink">{isThai ? "บริการ" : "Development"}</a>
        <a href={localizePath(locale, "web-design-bangkok")} className="hover:text-ink">{isThai ? "ออกแบบเว็บไซต์" : "Web Design"}</a>
        <a href={isThai ? "/th#process" : "/insights"} className="hover:text-ink">{isThai ? "ขั้นตอนการทำงาน" : "Insights"}</a>
        <a href={isThai ? "#lead-form" : "/contact"} className="hover:text-ink">{isThai ? "ติดต่อเรา" : "Contact"}</a>
      </div>
      <a
        href={isThai ? "#lead-form" : whatsAppUrl}
        target={isThai ? undefined : "_blank"}
        rel={isThai ? undefined : "noopener noreferrer"}
        onClick={() => {
          if (!isThai) track("whatsapp_click");
        }}
        className="focus-ring hidden items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white sm:inline-flex"
      >
        {isThai ? "ขอใบเสนอราคา" : "Get a Proposal"} <ArrowRight size={15} />
      </a>
    </nav>
  );
}

function Footer({ locale }: { locale: Locale }) {
  const isThai = locale === "th";

  return (
    <footer className="border-t border-line bg-ink px-5 py-14 text-white sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
        <div>
          <Image src="/brand/inphade-logo.png" alt="Inphade" width={56} height={56} className="h-14 w-14 rounded-lg object-contain" />
          <p className="mt-4 max-w-md leading-7 text-slate-300">
            {isThai
              ? "เว็บไซต์พรีเมียมและประสบการณ์ดิจิทัลเพื่อธุรกิจที่ต้องการเติบโตในกรุงเทพและประเทศไทย"
              : "Premium websites, digital experiences and growth-focused solutions for modern businesses in Bangkok and Thailand."}
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-normal text-[#8FBFA8]">{isThai ? "บริการ" : "Services"}</h2>
          <div className="mt-4 grid gap-3 text-slate-300">
            <a href={localizePath(locale, "web-design-bangkok")} className="transition hover:text-white">{isThai ? "รับทำเว็บไซต์" : "Web Design"}</a>
            {isThai && <a href="/th/website-development-bangkok" className="transition hover:text-white">พัฒนาเว็บไซต์</a>}
            {isThai && <a href="/th/website-redesign-bangkok" className="transition hover:text-white">รีดีไซน์เว็บไซต์</a>}
            <a href={isThai ? localizePath(locale, "company-website") : "/website-development-bangkok"} className="transition hover:text-white">{isThai ? "เว็บไซต์บริษัท" : "Development"}</a>
            {!isThai && <a href="/website-redesign-bangkok" className="transition hover:text-white">Redesign</a>}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-normal text-[#8FBFA8]">{isThai ? "อุตสาหกรรม" : "Industries"}</h2>
          <div className="mt-4 grid gap-3 text-slate-300">
            <a href={localizePath(locale, "real-estate-web-design")} className="transition hover:text-white">{isThai ? "อสังหาริมทรัพย์" : "Real Estate"}</a>
            <a href={localizePath(locale, "clinic-web-design")} className="transition hover:text-white">{isThai ? "คลินิก" : "Clinics"}</a>
            <a href={localizePath(locale, "hotel-web-design")} className="transition hover:text-white">{isThai ? "โรงแรม" : "Hotels"}</a>
            <a href={localizePath(locale, "restaurant-web-design")} className="transition hover:text-white">{isThai ? "ร้านอาหาร" : "Restaurants"}</a>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-normal text-[#8FBFA8]">{isThai ? "บริษัท" : "Company"}</h2>
          <div className="mt-4 grid gap-3 text-slate-300">
            {!isThai && <a href="/about" className="transition hover:text-white">About</a>}
            {!isThai && <a href="/portfolio" className="transition hover:text-white">Portfolio</a>}
            {!isThai && <a href="/insights" className="transition hover:text-white">Insights</a>}
            <a href={isThai ? "#lead-form" : "/contact"} className="transition hover:text-white">{isThai ? "ติดต่อเรา" : "Contact"}</a>
            <a href="mailto:hello@inphade.com" onClick={() => track("email_click")} className="transition hover:text-white">hello@inphade.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function EnquiryForm({ page }: { page: LandingPage }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  return (
    <form
      id="lead-form"
      className="grid gap-4"
      onSubmit={async (event) => {
        event.preventDefault();
        setStatus("submitting");
        setMessage("");

        const form = event.currentTarget;
        const data = new FormData(form);

        try {
          const response = await fetch("/api/leads", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
              locale: "en",
              name: data.get("name"),
              company: data.get("company"),
              email: data.get("email"),
              phone: data.get("phone"),
              currentWebsite: data.get("currentWebsite"),
              service: data.get("service"),
              budget: data.get("budget"),
              message: data.get("message"),
              sourcePage: `/${page.slug}`,
              submittedAt: new Date().toISOString()
            })
          });

          if (response.ok) {
            track("form_submit", { locale: "en", sourcePage: `/${page.slug}` });
            setStatus("success");
            setMessage("Thanks. Your enquiry has been sent and we will follow up using the details provided.");
            form.reset();
            return;
          }

          setStatus("error");
          setMessage("We could not send your enquiry yet. Please try again, or use the email link as a backup.");
        } catch {
          setStatus("error");
          setMessage("We could not send your enquiry yet. Please try again, or use the email link as a backup.");
        }
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="name" required placeholder="Name" className="rounded-lg border border-line px-4 py-3 outline-none focus:border-accent" />
        <input name="company" placeholder="Company" className="rounded-lg border border-line px-4 py-3 outline-none focus:border-accent" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="email" required type="email" placeholder="Email" className="rounded-lg border border-line px-4 py-3 outline-none focus:border-accent" />
        <input name="phone" placeholder="Phone (optional)" className="rounded-lg border border-line px-4 py-3 outline-none focus:border-accent" />
      </div>
      <input name="currentWebsite" placeholder="Current website (optional)" className="rounded-lg border border-line px-4 py-3 outline-none focus:border-accent" />
      <div className="grid gap-4 sm:grid-cols-2">
        <select name="service" required className="rounded-lg border border-line bg-white px-4 py-3 outline-none focus:border-accent" defaultValue="">
          <option value="" disabled>What do you need?</option>
          <option>New website</option>
          <option>Website redesign</option>
          <option>Landing page</option>
          <option>Website support</option>
        </select>
        <select name="budget" className="rounded-lg border border-line bg-white px-4 py-3 outline-none focus:border-accent" defaultValue="">
          <option value="" disabled>Budget range</option>
          <option>Not sure yet</option>
          <option>Starter business website</option>
          <option>Custom business website</option>
          <option>Advanced website or integrations</option>
        </select>
      </div>
      <textarea name="message" required placeholder="Message" rows={5} className="rounded-lg border border-line px-4 py-3 outline-none focus:border-accent" />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 font-semibold text-white shadow-glow disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? "Sending..." : "Send Enquiry"} <Send size={18} />
      </button>
      {message && (
        <p className={`text-sm leading-6 ${status === "success" ? "text-accent" : "text-red-600"}`} role="status">
          {message}
        </p>
      )}
    </form>
  );
}

function ThaiLeadForm({ page }: { page: LandingPage }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  return (
    <form
      id="lead-form"
      className="grid gap-4"
      onSubmit={async (event) => {
        event.preventDefault();
        setStatus("submitting");
        setMessage("");

        const form = event.currentTarget;
        const data = new FormData(form);
        try {
          const response = await fetch("/api/leads", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
              locale: "th",
              name: data.get("name"),
              company: data.get("company"),
              email: data.get("email"),
              phone: data.get("phone"),
              currentWebsite: data.get("currentWebsite"),
              service: data.get("service"),
              budget: data.get("budget"),
              message: data.get("message"),
              sourcePage: `/th/${page.slug}`,
              submittedAt: new Date().toISOString()
            })
          });

          if (response.ok) {
            track("form_submit", { locale: "th", sourcePage: `/th/${page.slug}` });
            setStatus("success");
            setMessage("ส่งข้อมูลเรียบร้อยแล้ว ทีมงานจะติดต่อกลับตามรายละเอียดที่ให้ไว้");
            form.reset();
            return;
          }

          setStatus("error");
          setMessage("ยังส่งข้อมูลไม่ได้ กรุณาลองใหม่อีกครั้ง หรือทัก WhatsApp เพื่อปรึกษาโปรเจกต์กับเรา");
        } catch {
          setStatus("error");
          setMessage("ยังส่งข้อมูลไม่ได้ กรุณาลองใหม่อีกครั้ง หรือทัก WhatsApp เพื่อปรึกษาโปรเจกต์กับเรา");
        }
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="name" required placeholder="ชื่อ" className="rounded-lg border border-line px-4 py-3 outline-none focus:border-accent" />
        <input name="company" placeholder="บริษัท" className="rounded-lg border border-line px-4 py-3 outline-none focus:border-accent" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="email" required type="email" placeholder="อีเมล" className="rounded-lg border border-line px-4 py-3 outline-none focus:border-accent" />
        <input name="phone" required placeholder="เบอร์โทรศัพท์" className="rounded-lg border border-line px-4 py-3 outline-none focus:border-accent" />
      </div>
      <input name="currentWebsite" placeholder="เว็บไซต์ปัจจุบัน" className="rounded-lg border border-line px-4 py-3 outline-none focus:border-accent" />
      <div className="grid gap-4 sm:grid-cols-2">
        <select name="service" required className="rounded-lg border border-line bg-white px-4 py-3 outline-none focus:border-accent" defaultValue="">
          <option value="" disabled>บริการที่สนใจ</option>
          <option>ทำเว็บไซต์ใหม่</option>
          <option>ทำเว็บไซต์บริษัท</option>
          <option>ปรับปรุงเว็บไซต์เดิม</option>
          <option>Landing Page</option>
          <option>เว็บไซต์เฉพาะอุตสาหกรรม</option>
          <option>ยังไม่แน่ใจ</option>
        </select>
        <select name="budget" className="rounded-lg border border-line bg-white px-4 py-3 outline-none focus:border-accent" defaultValue="">
          <option value="" disabled>งบประมาณ</option>
          <option>ยังไม่แน่ใจ</option>
          <option>เว็บไซต์ธุรกิจเริ่มต้น</option>
          <option>เว็บไซต์ธุรกิจแบบ Custom</option>
          <option>เว็บไซต์ที่มีฟังก์ชันหรือ Integration เพิ่มเติม</option>
        </select>
      </div>
      <textarea name="message" required placeholder="รายละเอียดโปรเจกต์" rows={5} className="rounded-lg border border-line px-4 py-3 outline-none focus:border-accent" />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 font-semibold text-white shadow-glow disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? "กำลังส่งข้อมูล..." : "ขอใบเสนอราคา"} <Send size={18} />
      </button>
      {message && (
        <p className={`text-sm leading-6 ${status === "success" ? "text-accent" : "text-red-600"}`} role="status">
          {message}
        </p>
      )}
    </form>
  );
}

export function LandingPage({ page, locale }: { page: LandingPage; locale: Locale }) {
  const isContact = page.kind === "contact";
  const isThai = locale === "th";
  const whatsAppUrl = whatsAppUrls[locale];
  const sectionIds = page.sections.map((_, index) => `section-${index + 1}`);
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: isThai ? "หน้าแรก" : "Home", item: "https://www.inphade.com/" },
      { "@type": "ListItem", position: 2, name: page.h1, item: `https://www.inphade.com${localizePath(locale, page.slug)}` }
    ]
  };

  return (
    <main className={`overflow-hidden bg-white ${isThai ? "[&_h1]:!leading-[1.22] [&_h2]:!leading-[1.25] [&_p]:!leading-8" : ""}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="relative px-5 pb-20 pt-6 sm:px-8 sm:pb-28">
        <div className="mesh absolute inset-0" />
        <div className="grid-surface absolute inset-0 opacity-70" />
        <Nav locale={locale} />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 pt-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase text-accent">{page.eyebrow}</p>
            <h1 className="max-w-4xl text-[2.2rem] font-semibold leading-[1.08] tracking-normal text-brandNavy sm:text-[3rem] lg:text-[3.45rem]">{page.h1}</h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-muted sm:text-xl">{page.intro}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={isThai ? "#lead-form" : whatsAppUrl}
                target={isThai ? undefined : "_blank"}
                rel={isThai ? undefined : "noopener noreferrer"}
                onClick={() => {
                  if (!isThai) {
                    track("whatsapp_click");
                    track("book_call_click");
                  }
                }}
                className="focus-ring inline-flex w-[calc(100vw-2.5rem)] items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-center font-semibold text-white shadow-glow sm:w-auto"
              >
                {page.cta} <ArrowRight size={18} />
              </a>
              {isThai ? (
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("whatsapp_click")}
                  className="focus-ring inline-flex w-[calc(100vw-2.5rem)] items-center justify-center gap-2 rounded-full border border-line bg-white px-6 py-4 text-center font-semibold text-ink shadow-sm sm:w-auto"
                >
                  ปรึกษาโปรเจกต์กับเรา <MessageCircle size={18} />
                </a>
              ) : (
                <a
                  href="mailto:hello@inphade.com?subject=Free Website Proposal"
                  onClick={() => track("email_click")}
                  className="focus-ring inline-flex w-[calc(100vw-2.5rem)] items-center justify-center gap-2 rounded-full border border-line bg-white px-6 py-4 text-center font-semibold text-ink shadow-sm sm:w-auto"
                >
                  Email Inphade <Mail size={18} />
                </a>
              )}
            </div>
          </div>
          <div className="rounded-lg border border-line bg-white p-6 shadow-premium">
            <h2 className="text-2xl font-semibold text-ink">{isContact || isThai ? (isThai ? "ขอใบเสนอราคา" : "Project Enquiry") : "What This Page Covers"}</h2>
            {isThai ? (
              <div className="mt-6">
                <ThaiLeadForm page={page} />
              </div>
            ) : isContact ? (
              <div className="mt-6">
                <EnquiryForm page={page} />
              </div>
            ) : (
              <div className="mt-6 grid gap-3">
                {page.sections.map((section, index) => (
                  <a key={section.title} href={`#${sectionIds[index]}`} className="flex items-center gap-3 rounded-lg border border-line p-4 text-left transition hover:border-accent/40 hover:bg-[#F7FAF8]">
                    <Check className="shrink-0 text-accent" size={18} />
                    <span className="font-medium text-ink">{section.title}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.72fr_0.28fr]">
          <div className="grid gap-10">
            {page.sections.map((section, index) => (
              <article key={section.title} id={sectionIds[index]} className="rounded-lg border border-line bg-white p-7 shadow-[0_8px_24px_rgba(0,0,0,0.04)] sm:p-9">
                <h2 className="text-3xl font-semibold text-brandNavy">{section.title}</h2>
                <p className="mt-5 text-lg leading-8 text-muted">{section.body}</p>
                {section.items && (
                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {section.items.map((item) => (
                      <div key={item} className="flex gap-3 rounded-lg bg-[#F7FAF8] p-4">
                        <Check className="mt-0.5 shrink-0 text-accent" size={18} />
                        <span className="font-medium text-ink">{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
          <aside className="h-fit rounded-lg border border-line bg-[#F7FAF8] p-6">
            <h2 className="text-xl font-semibold text-ink">{isThai ? "หน้าที่เกี่ยวข้อง" : "Related Pages"}</h2>
            <div className="mt-5 grid gap-3">
              {page.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    if (link.href === "/portfolio") track("portfolio_view");
                  }}
                  className="group flex items-center justify-between rounded-lg bg-white p-4 font-medium text-ink shadow-sm transition hover:text-accent"
                >
                  {link.label}
                  <ArrowRight className="transition group-hover:translate-x-1" size={16} />
                </a>
              ))}
            </div>
            <div className="mt-6 rounded-lg bg-ink p-5 text-white">
              <Globe2 className="mb-4 text-[#8FBFA8]" size={28} />
              <h3 className="text-lg font-semibold">{page.cta}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{page.ctaNote}</p>
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("whatsapp_click")}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink"
              >
                {isThai ? "คุยทาง WhatsApp" : "WhatsApp"} <MessageCircle size={15} />
              </a>
            </div>
          </aside>
        </div>
      </section>
      <Footer locale={locale} />
    </main>
  );
}
