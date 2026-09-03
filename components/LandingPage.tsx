"use client";

import { useState } from "react";
import { ArrowRight, BriefcaseBusiness, Check, Globe2, Mail, MessageCircle, Send, Sparkles } from "lucide-react";
import { localizePath } from "@/lib/routes";
import type { Locale } from "@/lib/routes";
import type { LandingPage } from "@/lib/pages";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const whatsAppUrls: Record<Locale, string> = {
  en: `https://wa.me/66613306922?text=${encodeURIComponent("Hi! I'm interested in building a website with Inphade. I'd like to get a free proposal.")}`,
  th: `https://wa.me/66613306922?text=${encodeURIComponent("สวัสดี Inphade สนใจทำเว็บไซต์และอยากขอคำปรึกษาเบื้องต้น")}`
};

const thaiContactFieldClass =
  "mt-2 w-full border-0 border-b border-line bg-transparent px-0 py-4 text-base text-ink outline-none transition placeholder:text-slate-400 focus:border-accent";
const labelClass = "text-sm font-semibold text-ink";
const compactH1Slugs = new Set(["services"]);

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
  const contactFieldClass =
    "mt-2 w-full rounded-md border border-line bg-white/80 px-4 py-4 text-base text-ink outline-none transition placeholder:text-slate-400 focus:border-accent focus:bg-white focus:shadow-[0_0_0_4px_rgba(var(--verdant-rgb),0.08)]";
  const contactLabelClass = "text-sm font-semibold text-ink";

  return (
    <form
      id="lead-form"
      className="grid gap-6"
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
        <label className={contactLabelClass}>
          Full Name
          <input name="name" required placeholder="Your name" className={contactFieldClass} />
        </label>
        <label className={contactLabelClass}>
          Email
          <input name="email" required type="email" placeholder="you@example.com" className={contactFieldClass} />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className={contactLabelClass}>
          Phone
          <input name="phone" placeholder="Optional" className={contactFieldClass} />
        </label>
        <label className={contactLabelClass}>
          Company / Business
          <input name="company" placeholder="Company name" className={contactFieldClass} />
        </label>
      </div>
      <label className={contactLabelClass}>
        Current website
        <input name="currentWebsite" placeholder="Optional" className={contactFieldClass} />
      </label>
      <div>
        <label className={contactLabelClass}>
          Service Interested In
          <select name="project" required className={contactFieldClass} defaultValue="">
            <option value="" disabled>Select a service</option>
            <option>Custom Website</option>
            <option>Website Redesign</option>
            <option>Company Website</option>
            <option>Landing Page</option>
            <option>Website Maintenance</option>
            <option>Not Sure Yet</option>
          </select>
        </label>
      </div>
      <label className={contactLabelClass}>
        Message
        <textarea name="message" required placeholder="Tell us what you are building, what needs to change, or what result you want from the website." rows={6} className={`${contactFieldClass} min-h-44 resize-y`} />
      </label>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="focus-ring mt-1 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 font-semibold text-white shadow-glow transition hover:bg-[#245F48] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
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
      className="grid gap-7"
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
      <div className="grid gap-6 sm:grid-cols-2">
        <label className={labelClass}>
          ชื่อ-นามสกุล
          <input name="name" required placeholder="ชื่อของคุณ" className={thaiContactFieldClass} />
        </label>
        <label className={labelClass}>
          อีเมล
          <input name="email" required type="email" placeholder="you@example.com" className={thaiContactFieldClass} />
        </label>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <label className={labelClass}>
          โทรศัพท์
          <input name="phone" required placeholder="เบอร์โทรศัพท์" className={thaiContactFieldClass} />
        </label>
        <label className={labelClass}>
          บริษัท / ธุรกิจ
          <input name="company" placeholder="ชื่อบริษัทหรือประเภทธุรกิจ" className={thaiContactFieldClass} />
        </label>
      </div>
      <div>
        <label className={labelClass}>
          บริการที่สนใจ
          <select name="project" required className={thaiContactFieldClass} defaultValue="">
            <option value="" disabled>เลือกบริการที่สนใจ</option>
            <option value="ออกแบบและพัฒนาเว็บไซต์">ทำเว็บไซต์</option>
            <option value="รีดีไซน์เว็บไซต์">ออกแบบหน้าเว็บไซต์เดิม</option>
            <option>เว็บไซต์บริษัท</option>
            <option value="Landing Page">แลนดิ้งเพจ</option>
            <option value="ดูแลและปรับปรุงเว็บไซต์">ดูแลเว็บไซต์</option>
            <option>ยังไม่แน่ใจ</option>
          </select>
        </label>
      </div>
      <label className={labelClass}>
        เว็บไซต์ปัจจุบัน
        <input name="currentWebsite" placeholder="ถ้ามี" className={thaiContactFieldClass} />
      </label>
      <label className={labelClass}>
        ข้อความ
        <textarea name="message" required placeholder="เล่าให้เราฟังว่าคุณกำลังสร้างอะไร ต้องการแก้ปัญหาอะไร หรือมีไทม์ไลน์ประมาณไหน" rows={5} className={`${thaiContactFieldClass} min-h-40 resize-y`} />
      </label>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="focus-ring mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 font-semibold text-white shadow-glow transition hover:bg-[#245F48] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
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

function ThaiContactPage({ page, locale }: { page: LandingPage; locale: Locale }) {
  const whatsAppUrl = whatsAppUrls[locale];
  const contactMethods = [
    {
      label: "Email",
      value: "hello@inphade.com",
      href: "mailto:hello@inphade.com",
      icon: Mail,
      onClick: () => track("email_click")
    },
    {
      label: "WhatsApp",
      value: "+66 61 330 6922",
      href: whatsAppUrl,
      icon: MessageCircle,
      onClick: () => track("whatsapp_click"),
      external: true
    }
  ];

  return (
    <main className="overflow-hidden bg-white [&_h1]:!leading-[1.08] lg:[&_h1]:!leading-[1.04] [&_h2]:!leading-[1.22] [&_p]:!leading-8">
      <section className="relative px-5 pb-12 pt-6 sm:px-8 sm:pb-16 desktop-section-pb">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAF7_58%,#FFFFFF_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(var(--verdant-rgb),0.13),transparent_28rem),radial-gradient(circle_at_82%_10%,rgba(var(--verdant-rgb),0.09),transparent_24rem)]" />
        <SiteHeader locale={locale} />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 pt-10 sm:pt-12 lg:pt-14 lg:grid-cols-[0.9fr_0.72fr] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-accent">CONTACT</p>
            <h1 className="mt-5 text-[30px] font-semibold tracking-normal text-brandNavy lg:text-[36px]">
              เริ่มบทสนทนา
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted sm:text-xl">
              เล่าเป้าหมายของธุรกิจให้เราฟัง แล้วเราจะช่วยวางทิศทางเว็บไซต์ที่ชัดเจน น่าเชื่อถือ และพร้อมเติบโต
            </p>
          </div>

          <div className="pointer-events-none relative hidden min-h-[16rem] lg:block" aria-hidden="true">
            <div className="absolute right-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full border border-accent/15 bg-[radial-gradient(circle_at_36%_34%,rgba(var(--verdant-rgb),0.22),rgba(255,255,255,0.04)_46%,rgba(255,255,255,0)_70%)] blur-[1px]" />
            <div className="absolute right-8 top-10 h-48 w-48 rotate-12 rounded-[2rem] border border-line bg-white/70 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl" />
            <div className="absolute right-36 top-24 h-36 w-56 -rotate-6 border border-accent/20 bg-[linear-gradient(135deg,rgba(255,255,255,0.86),rgba(232,245,238,0.82))] shadow-[0_18px_70px_rgba(23,108,75,0.12)]" />
            <div className="absolute right-24 top-36 h-28 w-28 rounded-full border border-accent/20 bg-white/60 shadow-[inset_0_0_40px_rgba(23,108,75,0.08)]" />
            <div className="absolute right-48 top-16 h-3 w-3 rounded-full bg-accent/70" />
            <div className="absolute right-6 top-56 h-2 w-2 rounded-full bg-accent/50" />
          </div>
        </div>
      </section>

      <section className="relative bg-white px-5 pb-20 pt-4 sm:px-8 sm:pb-28 desktop-section-y">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,1.38fr)_minmax(20rem,0.62fr)] lg:items-start">
          <div className="border border-line bg-white p-6 shadow-[0_24px_90px_rgba(15,23,42,0.07)] sm:p-9 lg:p-11">
            <div className="mb-8 max-w-2xl border-b border-line pb-7">
              <p className="text-sm font-semibold uppercase text-accent">Project Enquiry</p>
              <h2 className="mt-3 text-[25px] font-semibold text-brandNavy sm:text-[30px]">ส่งรายละเอียดโปรเจกต์</h2>
              <p className="mt-4 text-muted">กรอกข้อมูลสำคัญสั้น ๆ เพื่อให้เราเข้าใจบริบทก่อนเริ่มคุยกัน</p>
            </div>
            <ThaiLeadForm page={page} />
          </div>

          <aside className="lg:sticky lg:top-8">
            <div className="border border-line bg-[#F8FAF7] p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase text-accent">Direct Contact</p>
              <h2 className="mt-3 text-[25px] font-semibold text-brandNavy sm:text-[30px]">ช่องทางติดต่อ</h2>
              <div className="mt-7 grid gap-4">
                {contactMethods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <a
                      key={method.label}
                      href={method.href}
                      target={method.external ? "_blank" : undefined}
                      rel={method.external ? "noopener noreferrer" : undefined}
                      onClick={method.onClick}
                      className="group flex items-center gap-4 border border-line bg-white p-4 transition hover:border-accent/40 hover:bg-[#FCFEFD]"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E8F5EE] text-accent">
                        <Icon size={19} />
                      </span>
                      <span>
                        <span className="block text-xs font-semibold uppercase text-muted">{method.label}</span>
                        <span className="mt-1 block font-semibold text-ink transition group-hover:text-accent">{method.value}</span>
                      </span>
                    </a>
                  );
                })}
              </div>
              <div className="mt-7 border-t border-line pt-7">
                <div className="flex items-center gap-3 text-accent">
                  <BriefcaseBusiness size={19} />
                  <p className="text-sm font-semibold uppercase">Focus</p>
                </div>
                <p className="mt-3 text-sm leading-7 text-muted">{page.ctaNote}</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-white px-5 pb-20 sm:px-8 sm:pb-28 desktop-section-pb">
        <div className="mx-auto max-w-7xl border-y border-line py-9">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="flex items-center gap-3 text-accent">
                <Sparkles size={18} />
                <p className="text-sm font-semibold uppercase">Next Step</p>
              </div>
              <h2 className="mt-3 text-[25px] font-semibold text-brandNavy sm:text-[30px]">มีโปรเจกต์ในใจ?</h2>
              <p className="mt-3 max-w-2xl text-muted">เริ่มจากบทสนทนาสั้น ๆ เพื่อดูว่าควรออกแบบใหม่ รีดีไซน์ พัฒนา หรือวางระบบเว็บไซต์ให้เหมาะกับเป้าหมายของคุณ</p>
            </div>
            <a
              href="#lead-form"
              className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 font-semibold text-white shadow-glow transition hover:bg-[#245F48] sm:w-auto"
            >
              ปรึกษาโปรเจกต์ <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <SiteFooter locale={locale} />
    </main>
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
    <section className="bg-[#F7FAF8] px-5 pb-14 sm:px-8 sm:pb-16 desktop-section-pb">
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
                  <h2 className="text-[25px] font-semibold leading-snug text-brandNavy sm:text-[30px]">{section.title}</h2>
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
    <main className={`overflow-hidden bg-[#F7FAF8] ${isThai ? "[&_h1]:!leading-[1.2] lg:[&_h1]:!leading-[1.04] [&_h2]:!leading-[1.25] [&_p]:!leading-8" : ""}`}>
      <section className="relative px-5 pb-8 pt-6 sm:px-8 sm:pb-10 desktop-section-pb">
        <SiteHeader locale={locale} />
        <div className="relative z-10 mx-auto max-w-7xl pt-14 sm:pt-16 lg:pt-20">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-semibold uppercase text-accent">{page.eyebrow}</p>
            <h1 className="text-[30px] font-semibold leading-[1.04] tracking-normal text-brandNavy sm:text-[30px] lg:text-[48px]">
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

  if (isThai) {
    return <ThaiContactPage page={page} locale={locale} />;
  }

  return (
    <main className="overflow-hidden bg-white">
      <section className="relative px-5 pb-12 pt-6 sm:px-8 sm:pb-16 desktop-section-pb">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAF7_68%,#FFFFFF_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(var(--verdant-rgb),0.12),transparent_28rem),radial-gradient(circle_at_78%_14%,rgba(var(--verdant-rgb),0.08),transparent_24rem)]" />
        <SiteHeader locale={locale} />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 pt-10 sm:pt-12 lg:pt-14 lg:grid-cols-[minmax(0,0.92fr)_minmax(22rem,0.62fr)] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-accent">CONTACT</p>
            <h1 className="mt-5 max-w-4xl text-[30px] font-semibold leading-[1.08] tracking-normal text-brandNavy lg:text-[36px] lg:leading-[1.04]">{page.h1}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">{page.intro}</p>
          </div>

          <div className="pointer-events-none relative hidden min-h-[16rem] lg:block" aria-hidden="true">
            <div className="absolute right-4 top-8 h-56 w-56 rounded-full border border-accent/15 bg-[radial-gradient(circle_at_35%_35%,rgba(var(--verdant-rgb),0.24),rgba(255,255,255,0.16)_48%,rgba(255,255,255,0)_72%)] blur-[1px]" />
            <div className="absolute right-24 top-8 h-40 w-56 rotate-6 border border-line bg-white/70 shadow-[0_24px_80px_rgba(15,23,42,0.07)] backdrop-blur-xl" />
            <div className="absolute right-2 top-28 h-36 w-64 -rotate-3 border border-accent/20 bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(232,245,238,0.78))] shadow-[0_18px_70px_rgba(23,108,75,0.11)]" />
            <div className="absolute right-40 top-32 h-24 w-24 rounded-full border border-accent/20 bg-white/60 shadow-[inset_0_0_40px_rgba(23,108,75,0.08)]" />
            <div className="absolute right-64 top-14 h-2.5 w-2.5 rounded-full bg-accent/60" />
            <div className="absolute right-2 top-56 h-2 w-2 rounded-full bg-accent/45" />
          </div>
        </div>
      </section>

      <section className="relative bg-white px-5 pb-20 pt-4 sm:px-8 sm:pb-28 desktop-section-y">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,1.36fr)_minmax(20rem,0.64fr)] lg:items-start">
          <div className="border border-line bg-white/95 p-6 shadow-[0_24px_90px_rgba(15,23,42,0.06)] sm:p-9 lg:p-11">
            <div className="mb-9 border-b border-line pb-7">
              <p className="text-sm font-semibold uppercase text-accent">Project Enquiry</p>
              <div className="mt-3 grid gap-4 md:grid-cols-[minmax(0,0.72fr)_minmax(14rem,0.28fr)] md:items-end">
                <h2 className="text-[25px] font-semibold leading-tight text-brandNavy sm:text-[30px]">Tell us about the project</h2>
                <p className="text-sm leading-6 text-muted">A few thoughtful details are enough to start the right conversation.</p>
              </div>
            </div>
            <EnquiryForm page={page} />
          </div>

          <aside className="lg:sticky lg:top-8">
            <div className="border border-line bg-[#F8FAF7] p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase text-accent">Direct Contact</p>
              <h2 className="mt-3 text-[25px] font-semibold text-brandNavy sm:text-[30px]">Prefer a direct note?</h2>
              <p className="mt-4 text-sm leading-7 text-muted">
                Use the same details already available through Inphade’s website.
              </p>
              <div className="mt-7 grid gap-4">
                <a
                  href="mailto:hello@inphade.com"
                  onClick={() => track("email_click")}
                  className="group flex items-center gap-4 border border-line bg-white p-4 transition hover:border-accent/40 hover:bg-[#FCFEFD]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E8F5EE] text-accent">
                    <Mail size={19} />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase text-muted">Email</span>
                    <span className="mt-1 block font-semibold text-ink transition group-hover:text-accent">hello@inphade.com</span>
                  </span>
                </a>
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("whatsapp_click")}
                  className="group flex items-center gap-4 border border-line bg-white p-4 transition hover:border-accent/40 hover:bg-[#FCFEFD]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E8F5EE] text-accent">
                    <MessageCircle size={19} />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase text-muted">WhatsApp</span>
                    <span className="mt-1 block font-semibold text-ink transition group-hover:text-accent">Start a conversation</span>
                  </span>
                </a>
              </div>
              <div className="mt-8 border-t border-line pt-7">
                <div className="flex items-center gap-3 text-accent">
                  <BriefcaseBusiness size={19} />
                  <p className="text-sm font-semibold uppercase">Capabilities</p>
                </div>
                <p className="mt-3 text-sm leading-7 text-muted">{page.ctaNote}</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-white px-5 pb-20 sm:px-8 sm:pb-28 desktop-section-pb">
        <div className="mx-auto max-w-7xl border-y border-line py-9">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="flex items-center gap-3 text-accent">
                <Sparkles size={18} />
                <p className="text-sm font-semibold uppercase">Next Step</p>
              </div>
              <h2 className="mt-3 text-[25px] font-semibold text-brandNavy sm:text-[30px]">Have a project in mind?</h2>
              <p className="mt-3 max-w-2xl text-muted">
                Start with a concise conversation about goals, scope, and the clearest path forward.
              </p>
            </div>
            <a
              href="#lead-form"
              className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 font-semibold text-white shadow-glow transition hover:bg-[#245F48] sm:w-auto"
            >
              Start the conversation <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <SiteFooter locale={locale} />
    </main>
  );
}

export function LandingPage({ page, locale }: { page: LandingPage; locale: Locale }) {
  if (page.kind === "contact") return <ContactPage page={page} locale={locale} />;
  if (page.kind === "project") return <ProjectsPage page={page} locale={locale} />;

  const isThai = locale === "th";
  const whatsAppUrl = whatsAppUrls[locale];
  const sectionIds = page.sections.map((section, index) => section.id ?? `section-${index + 1}`);
  const focusLabel = page.kind === "industry" ? (isThai ? "สิ่งที่โฟกัส" : "Industry Focus") : (isThai ? "ภาพรวมโปรเจกต์" : "Project Focus");
  const h1ClassName = compactH1Slugs.has(page.slug)
    ? "max-w-4xl text-[30px] font-semibold leading-[1.08] tracking-normal text-brandNavy sm:text-[30px] lg:text-[36px] lg:leading-[1.04]"
    : "max-w-4xl text-[30px] font-semibold leading-[1.08] tracking-normal text-brandNavy sm:text-[30px] lg:text-[48px] lg:leading-[1.04]";
  const heroGridClassName = `relative z-10 mx-auto grid max-w-7xl gap-10 pt-24 lg:grid-cols-[1.05fr_0.95fr] ${
    page.slug === "services" ? "lg:items-start" : "lg:items-end"
  }`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: isThai ? "หน้าแรก" : "Home", item: "https://www.inphade.com/" },
      { "@type": "ListItem", position: 2, name: page.h1, item: `https://www.inphade.com${localizePath(locale, page.slug)}` }
    ]
  };

  return (
    <main className={`overflow-hidden bg-white ${isThai ? "[&_h1]:!leading-[1.22] lg:[&_h1]:!leading-[1.04] [&_h2]:!leading-[1.25] [&_p]:!leading-8" : ""}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="relative px-5 pb-20 pt-6 sm:px-8 sm:pb-28 desktop-section-pb">
        <div className="mesh absolute inset-0" />
        <div className="grid-surface absolute inset-0 opacity-70" />
        <SiteHeader locale={locale} />
        <div className={heroGridClassName}>
          <div>
            <p className="mb-4 text-sm font-semibold uppercase text-accent">{page.eyebrow}</p>
            <h1 className={h1ClassName}>{page.h1}</h1>
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
            <h2 className="text-[25px] font-semibold text-ink">{focusLabel}</h2>
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

      <section className="bg-white px-5 py-20 sm:px-8 sm:py-28 desktop-section-y">
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
                    <h2 className="text-[25px] font-semibold text-brandNavy sm:text-[30px]">{section.title}</h2>
                    <p className="mt-5 text-lg leading-8 text-muted">{section.body}</p>
                  </div>
                </div>
                <SectionItems items={section.items} />
              </article>
            ))}
          </div>
          <aside className="h-fit rounded-lg border border-line bg-[#F7FAF8] p-6">
            <h2 className="text-[25px] font-semibold text-ink sm:text-[30px]">{isThai ? "หน้าที่เกี่ยวข้อง" : "Related Pages"}</h2>
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
              <h3 className="text-[25px] font-semibold sm:text-[30px]">{page.cta}</h3>
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
      <SiteFooter locale={locale} />
    </main>
  );
}
