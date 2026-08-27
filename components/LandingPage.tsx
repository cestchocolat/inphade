"use client";

import { useState } from "react";
import { ArrowRight, Check, Globe2, Mail, MessageCircle, Send } from "lucide-react";
import { localizePath } from "@/lib/routes";
import type { Locale } from "@/lib/routes";
import type { LandingPage } from "@/lib/pages";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const whatsAppUrls: Record<Locale, string> = {
  en: `https://wa.me/66613306922?text=${encodeURIComponent("Hi! I'm interested in building a website with Inphade. I'd like to get a free proposal.")}`,
  th: `https://wa.me/66613306922?text=${encodeURIComponent("สวัสดี Inphade สนใจทำเว็บไซต์และอยากขอคำปรึกษาเบื้องต้น")}`
};

const fieldClass = "mt-2 w-full rounded-lg border border-line bg-white px-4 py-3 outline-none transition focus:border-accent";
const labelClass = "text-sm font-semibold text-ink";

function track(event: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  const win = window as Window & { dataLayer?: Array<Record<string, unknown>>; gtag?: (...args: unknown[]) => void };
  if (win.gtag) {
    win.gtag("event", event, params);
    return;
  }
  win.dataLayer?.push({ event, ...params });
}

function EnquiryForm({ page }: { page: LandingPage }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  return (
    <form
      id="lead-form"
      className="grid gap-5"
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
              project: data.get("project"),
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
      <div className="grid gap-5 sm:grid-cols-2">
        <label className={labelClass}>
          Name
          <input name="name" required placeholder="Your name" className={fieldClass} />
        </label>
        <label className={labelClass}>
          Company
          <input name="company" placeholder="Company name" className={fieldClass} />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className={labelClass}>
          Email
          <input name="email" required type="email" placeholder="you@example.com" className={fieldClass} />
        </label>
        <label className={labelClass}>
          Phone
          <input name="phone" placeholder="Optional" className={fieldClass} />
        </label>
      </div>
      <label className={labelClass}>
        Current website
        <input name="currentWebsite" placeholder="Optional" className={fieldClass} />
      </label>
      <div>
        <label className={labelClass}>
          Project
          <select name="project" required className={fieldClass} defaultValue="">
            <option value="" disabled>Select project type</option>
            <option>Website Design & Development</option>
            <option>Website Development</option>
            <option>Website Redesign</option>
            <option>Company Website</option>
            <option>Landing Page</option>
            <option>Custom Website</option>
            <option>Website Maintenance</option>
            <option>Not Sure Yet</option>
          </select>
        </label>
      </div>
      <label className={labelClass}>
        Project details
        <textarea name="message" required placeholder="Tell us what you are building." rows={5} className={fieldClass} />
      </label>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="focus-ring mt-1 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 font-semibold text-white shadow-glow disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
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
      className="grid gap-5"
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
              project: data.get("project"),
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
      <div className="grid gap-5 sm:grid-cols-2">
        <label className={labelClass}>
          ชื่อ
          <input name="name" required placeholder="ชื่อของคุณ" className={fieldClass} />
        </label>
        <label className={labelClass}>
          บริษัท
          <input name="company" placeholder="ชื่อบริษัท" className={fieldClass} />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className={labelClass}>
          อีเมล
          <input name="email" required type="email" placeholder="you@example.com" className={fieldClass} />
        </label>
        <label className={labelClass}>
          เบอร์โทรศัพท์
          <input name="phone" required placeholder="เบอร์โทรศัพท์" className={fieldClass} />
        </label>
      </div>
      <label className={labelClass}>
        เว็บไซต์ปัจจุบัน
        <input name="currentWebsite" placeholder="ถ้ามี" className={fieldClass} />
      </label>
      <div>
        <label className={labelClass}>
          โปรเจกต์
          <select name="project" required className={fieldClass} defaultValue="">
            <option value="" disabled>เลือกประเภทโปรเจกต์</option>
            <option>ออกแบบและพัฒนาเว็บไซต์</option>
            <option>พัฒนาเว็บไซต์</option>
            <option>รีดีไซน์เว็บไซต์</option>
            <option>เว็บไซต์บริษัท</option>
            <option>Landing Page</option>
            <option>เว็บไซต์ Custom</option>
            <option>ดูแลและปรับปรุงเว็บไซต์</option>
            <option>ยังไม่แน่ใจ</option>
          </select>
        </label>
      </div>
      <label className={labelClass}>
        รายละเอียดโปรเจกต์
        <textarea name="message" required placeholder="เล่าให้เราฟังว่าคุณกำลังสร้างอะไร" rows={5} className={fieldClass} />
      </label>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="focus-ring mt-1 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 font-semibold text-white shadow-glow disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" ? "กำลังส่งข้อมูล..." : "ส่งรายละเอียดโปรเจกต์"} <Send size={18} />
      </button>
      {message && (
        <p className={`text-sm leading-6 ${status === "success" ? "text-accent" : "text-red-600"}`} role="status">
          {message}
        </p>
      )}
    </form>
  );
}

function SectionItems({ items }: { items?: string[] }) {
  if (!items) return null;

  return (
    <div className="mt-7 grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <div key={item} className="flex gap-3 rounded-lg bg-[#F7FAF8] p-4">
          <Check className="mt-0.5 shrink-0 text-accent" size={18} />
          <span className="font-medium text-ink">{item}</span>
        </div>
      ))}
    </div>
  );
}

function PortfolioSections({ page, sectionIds }: { page: LandingPage; sectionIds: string[] }) {
  return (
    <section className="bg-[#F7FAF8] px-5 pb-14 sm:px-8 sm:pb-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid border-l border-t border-line bg-white sm:grid-cols-2 lg:grid-cols-3">
          {page.sections.map((section, index) => (
            <article
              key={section.title}
              id={sectionIds[index]}
              className="min-h-[11rem] border-b border-r border-line p-5 sm:p-6 lg:min-h-[12rem] lg:p-7"
            >
              <div className="flex h-full flex-col justify-between gap-8">
                <p className="text-lg font-semibold leading-none text-accent sm:text-xl">{String(index + 1).padStart(2, "0")}</p>
                <div>
                  <h2 className="text-xl font-semibold leading-snug text-brandNavy sm:text-2xl">{section.title}</h2>
                  <p className="mt-3 max-w-xs text-sm leading-6 text-muted">{section.body}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsPage({ page, locale }: { page: LandingPage; locale: Locale }) {
  const isThai = locale === "th";
  const sectionIds = page.sections.map((section, index) => section.id ?? `section-${index + 1}`);
  const heroLines = isThai
    ? ["เว็บไซต์ที่สร้างขึ้นเพื่อธุรกิจของคุณ"]
    : ["Built for Your Business"];

  return (
    <main className={`overflow-hidden bg-[#F7FAF8] ${isThai ? "[&_h1]:!leading-[1.2] [&_h2]:!leading-[1.25] [&_p]:!leading-8" : ""}`}>
      <section className="relative px-5 pb-8 pt-6 sm:px-8 sm:pb-10">
        <SiteHeader locale={locale} />
        <div className="relative z-10 mx-auto max-w-7xl pt-14 sm:pt-16 lg:pt-20">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-semibold uppercase text-accent">{page.eyebrow}</p>
            <h1 className="text-[2.25rem] font-semibold leading-[1.04] tracking-normal text-brandNavy sm:text-[3.2rem] lg:text-[4.1rem]">
              {heroLines.map((line) => (
                <span key={line} className="block">{line}</span>
              ))}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{page.intro}</p>
          </div>
          <div className="mt-10 border-t border-line" />
        </div>
      </section>
      <PortfolioSections page={page} sectionIds={sectionIds} />
      <SiteFooter locale={locale} />
    </main>
  );
}

function ContactPage({ page, locale }: { page: LandingPage; locale: Locale }) {
  const isThai = locale === "th";
  const whatsAppUrl = whatsAppUrls[locale];
  const form = isThai ? <ThaiLeadForm page={page} /> : <EnquiryForm page={page} />;

  return (
    <main className={`overflow-hidden bg-white ${isThai ? "[&_h1]:!leading-[1.22] [&_h2]:!leading-[1.25] [&_p]:!leading-8" : ""}`}>
      <section className="relative px-5 pb-20 pt-6 sm:px-8 sm:pb-28">
        <div className="mesh absolute inset-0" />
        <div className="grid-surface absolute inset-0 opacity-70" />
        <SiteHeader locale={locale} />
        <div className="relative z-10 mx-auto max-w-7xl pt-24">
          <p className="mb-4 text-sm font-semibold uppercase text-accent">{page.eyebrow}</p>
          <h1 className="max-w-4xl text-[2.2rem] sm:text-[3rem] lg:text-[3.45rem] font-semibold leading-[1.08] tracking-normal text-brandNavy">{page.h1}</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted sm:text-xl">{page.intro}</p>
        </div>
      </section>

      <section className="bg-white px-5 pb-24 sm:px-8 sm:pb-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.64fr_0.36fr] lg:items-start">
          <div className="rounded-lg border border-line bg-white p-6 shadow-premium sm:p-9">
            <div className="mb-8 flex items-end justify-between gap-6 border-b border-line pb-6">
              <div>
                <p className="text-sm font-semibold uppercase text-accent">{isThai ? "Project Enquiry" : "Project Enquiry"}</p>
                <h2 className="mt-2 text-3xl font-semibold text-brandNavy">{isThai ? "ส่งรายละเอียดโปรเจกต์" : "Tell us about the project"}</h2>
              </div>
            </div>
            {form}
          </div>

          <aside className="rounded-lg bg-ink p-8 text-white sm:p-9">
            <p className="text-sm font-semibold uppercase text-[#8FBFA8]">{isThai ? "ติดต่อโดยตรง" : "Direct Contact"}</p>
            <div className="mt-8 grid gap-8">
              <div>
                <h2 className="text-2xl font-semibold">Email</h2>
                <a href="mailto:hello@inphade.com" onClick={() => track("email_click")} className="mt-3 inline-block text-lg text-slate-300 transition hover:text-white">
                  hello@inphade.com
                </a>
              </div>
              <div className="border-t border-white/10 pt-8">
                <h2 className="text-2xl font-semibold">WhatsApp</h2>
                <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer" onClick={() => track("whatsapp_click")} className="mt-3 inline-flex items-center gap-2 text-lg text-slate-300 transition hover:text-white">
                  {isThai ? "เริ่มบทสนทนา" : "Start a conversation"} <MessageCircle size={18} />
                </a>
              </div>
              <div className="border-t border-white/10 pt-8">
                <p className="text-sm font-semibold uppercase text-[#8FBFA8]">{isThai ? "ขอบเขตงาน" : "Capabilities"}</p>
                <p className="mt-3 text-lg leading-8 text-slate-300">{page.ctaNote}</p>
              </div>
            </div>
          </aside>
        </div>
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}

function AboutSections({ page, locale, sectionIds }: { page: LandingPage; locale: Locale; sectionIds: string[] }) {
  const isThai = locale === "th";

  return (
    <section className="bg-white px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.45fr_0.55fr]">
        <div>
          <p className="text-sm font-semibold uppercase text-accent">{page.eyebrow}</p>
          <h2 className="mt-4 text-4xl font-semibold text-brandNavy sm:text-5xl">{page.sections[0]?.title}</h2>
        </div>
        <div className="grid gap-6">
          {page.sections.map((section, index) => (
            <article key={section.title} id={sectionIds[index]} className="border-t border-line pt-7">
              <h3 className="text-2xl font-semibold text-ink">{section.title}</h3>
              <p className="mt-4 text-lg leading-8 text-muted">{section.body}</p>
              <SectionItems items={section.items} />
            </article>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-20 max-w-7xl rounded-lg bg-[#F7FAF8] p-8 sm:p-10">
        <h2 className="text-3xl font-semibold text-brandNavy">{page.cta}</h2>
        <p className="mt-4 max-w-3xl leading-8 text-muted">{page.ctaNote}</p>
        <a href={localizePath(locale, "contact")} className="mt-7 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 font-semibold text-white">
          {isThai ? "ติดต่อเรา" : "Contact Inphade"} <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}

export function LandingPage({ page, locale }: { page: LandingPage; locale: Locale }) {
  if (page.kind === "contact") return <ContactPage page={page} locale={locale} />;
  if (page.kind === "project") return <ProjectsPage page={page} locale={locale} />;

  const isThai = locale === "th";
  const whatsAppUrl = whatsAppUrls[locale];
  const sectionIds = page.sections.map((section, index) => section.id ?? `section-${index + 1}`);
  const focusLabel = page.kind === "industry" ? (isThai ? "สิ่งที่โฟกัส" : "Industry Focus") : (isThai ? "ภาพรวมโปรเจกต์" : "Project Focus");

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
        <SiteHeader locale={locale} />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 pt-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase text-accent">{page.eyebrow}</p>
            <h1 className="max-w-4xl text-[2.2rem] font-semibold leading-[1.08] tracking-normal text-brandNavy sm:text-[3rem] lg:text-[3.45rem]">{page.h1}</h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-muted sm:text-xl">{page.intro}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={isThai ? localizePath(locale, "contact") : whatsAppUrl}
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
            <h2 className="text-2xl font-semibold text-ink">{focusLabel}</h2>
            <div className="mt-6 grid gap-3">
              {page.sections.map((section, index) => (
                <a key={section.title} href={`#${sectionIds[index]}`} className="flex items-center gap-3 rounded-lg border border-line p-4 text-left transition hover:border-accent/40 hover:bg-[#F7FAF8]">
                  <Check className="shrink-0 text-accent" size={18} />
                  <span className="font-medium text-ink">{section.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {page.kind === "company" ? (
        <AboutSections page={page} locale={locale} sectionIds={sectionIds} />
      ) : (
      <section className="bg-white px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.72fr_0.28fr]">
          <div className="grid gap-10">
            {page.sections.map((section, index) => (
              <article
                key={section.title}
                id={sectionIds[index]}
                className={`rounded-lg border border-line p-7 sm:p-9 ${
                  index % 2 === 0 ? "bg-white shadow-[0_8px_24px_rgba(0,0,0,0.04)]" : "bg-[#F7FAF8]"
                }`}
              >
                <div className="flex items-start gap-5">
                  <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#E8F5EE] text-sm font-semibold text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="text-3xl font-semibold text-brandNavy">{section.title}</h2>
                    <p className="mt-5 text-lg leading-8 text-muted">{section.body}</p>
                  </div>
                </div>
                <SectionItems items={section.items} />
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
                    if (link.href === "/project") track("portfolio_view");
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
      )}
      <SiteFooter locale={locale} />
    </main>
  );
}
