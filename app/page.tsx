"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
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
  Sparkles,
  Target,
  Utensils,
  Wrench
} from "lucide-react";

const concepts = [
  "Luxury Real Estate",
  "Modern Startup",
  "High-End Hotel",
  "Medical Center",
  "Wealth Management",
  "Architecture Studio",
  "Restaurant",
  "Personal Brand",
  "Fitness Brand",
  "AI Product"
];

const conceptImages: Record<string, string> = {
  "Luxury Real Estate": "/showcase/luxury-real-estate.png",
  "Modern Startup": "/showcase/modern-startup.png",
  "High-End Hotel": "/showcase/high-end-hotel.png",
  "Medical Center": "/showcase/medical-center.png",
  "Wealth Management": "/showcase/wealth-management.png",
  "Architecture Studio": "/showcase/architecture-studio.png",
  Restaurant: "/showcase/restaurant.png",
  "Personal Brand": "/showcase/personal-brand.png",
  "Fitness Brand": "/showcase/fitness-brand.png",
  "AI Product": "/showcase/ai-product.png"
};

const services = [
  [
    "Website Design & Development",
    Palette,
    "Custom business websites, landing pages, and portfolio websites built to establish credibility, generate leads, and support long-term growth."
  ],
  [
    "Website Optimization",
    Target,
    "Improve user experience, content structure, trust elements, and conversion pathways to turn more visitors into customers."
  ],
  [
    "SEO Foundation",
    Search,
    "Technical SEO setup, sitemap configuration, metadata optimization, and search visibility improvements to help your business get discovered online."
  ],
  [
    "Ongoing Support",
    Wrench,
    "Monthly updates, content changes, technical monitoring, and maintenance to keep your website performing at its best."
  ]
] as const;

const industries = [
  [
    "Real Estate",
    Building2,
    "Property agencies, brokers, and developers looking to showcase listings and generate qualified leads."
  ],
  [
    "Clinics & Healthcare",
    HeartPulse,
    "Medical, dental, and wellness businesses that need credibility and a professional online presence."
  ],
  [
    "Hotels & Hospitality",
    Hotel,
    "Hotels, resorts, and hospitality brands focused on bookings and guest experience."
  ],
  [
    "Restaurants & Cafes",
    Utensils,
    "Food and beverage businesses looking to attract customers and strengthen their brand."
  ],
  [
    "Professional Services",
    Briefcase,
    "Consultants, law firms, financial advisors, and service-based businesses."
  ]
] as const;

const process = [
  [
    "Discovery",
    "Learn about your business, audience, competitors, and goals before making any decisions."
  ],
  [
    "Planning",
    "Define the website structure, content strategy, user journey, and conversion goals."
  ],
  [
    "Design",
    "Create a clean, modern interface that reflects your brand and builds trust."
  ],
  [
    "Development",
    "Build a fast, responsive, SEO-ready website using modern web technologies."
  ],
  [
    "Launch",
    "Test, optimize, and deploy with analytics, performance checks, and quality assurance."
  ],
  [
    "Growth",
    "Improve content, SEO, user experience, and conversions over time."
  ]
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
            alt={`${title} website preview`}
            className="min-h-0 w-full flex-1 object-cover"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Inphade",
    description:
      "We design and develop high-performance websites that elevate brands, generate leads, and create long-term business value.",
    areaServed: "Global",
    logo: "https://inphade.com/brand/inphade-logo.png",
    serviceType: "Web design, web development, SEO, conversion optimization, AI automation"
  };

  return (
    <main className="overflow-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="relative overflow-hidden px-5 pb-20 pt-6 sm:px-8">
        <div className="mesh absolute inset-0" />
        <div className="grid-surface absolute inset-0 opacity-70" />
        <div className="pointer-events-none absolute inset-x-0 top-24 mx-auto h-[32rem] max-w-5xl bg-[radial-gradient(circle_at_center,rgba(31,122,83,0.08),transparent_70%)]" />
        <nav className="glass relative z-20 mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-3">
          <a href="#" className="flex items-center gap-3" aria-label="Inphade home">
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
            <a href="#work" className="hover:text-ink">Work</a>
            <a href="#services" className="hover:text-ink">Services</a>
            <a href="#process" className="hover:text-ink">Process</a>
            <a href="#contact" className="hover:text-ink">Contact</a>
          </div>
          <a href="#contact" className="focus-ring inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white">
            Book a Call <ArrowRight size={15} />
          </a>
        </nav>
        <div className="relative z-10 mx-auto max-w-7xl pt-24 text-center sm:pt-32">
          <motion.p initial={false} className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-white/75 px-4 py-2 text-sm font-semibold text-muted shadow-sm backdrop-blur">
            <Sparkles size={16} className="text-accent" /> We build digital assets that generate business growth.
          </motion.p>
          <motion.h1 initial={false} className="mx-auto max-w-4xl text-4xl font-semibold leading-[1.08] tracking-normal text-brandNavy sm:text-6xl lg:text-7xl">
            Premium Websites Built For Growth
          </motion.h1>
          <motion.p initial={false} className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
            We design and develop high-performance websites that elevate brands, generate leads, and create long-term business value.
          </motion.p>
          <motion.div initial={false} className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="https://calendly.com/hello-inphade/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 font-semibold text-white shadow-glow"
            >
              Book a Discovery Call <ArrowRight size={18} />
            </a>
            <a href="#work" className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-line bg-white px-6 py-4 font-semibold text-ink shadow-sm">
              View Our Work
            </a>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-line bg-white py-10">
        <div className="pointer-events-none absolute inset-x-8 top-1/2 h-24 -translate-y-1/2 rounded-full bg-[linear-gradient(90deg,rgba(164,208,190,0),rgba(164,208,190,0.24),rgba(164,208,190,0))] blur-3xl" />
        <div className="mx-auto grid max-w-7xl gap-4 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
          {[
            ["50", "+ Websites Delivered"],
            ["95", "+ Lighthouse Scores"],
            ["1", " SEO-Optimized Builds"],
            ["1", " Fast Global Performance"]
          ].map(([value, label], index) => (
            <div
              key={label}
              className="relative overflow-hidden rounded-lg border border-[rgba(7,21,56,0.08)] bg-white p-5 text-center shadow-[0_12px_30px_rgba(7,21,56,0.045)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(7,21,56,0.075)]"
            >
              <div className="absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,rgba(164,208,190,0),#A4D0BE,rgba(164,208,190,0))]" />
              <div className="text-[2.65rem] font-semibold leading-none text-ink">
                {index < 2 ? <Counter value={Number(value)} suffix={label.startsWith("+") ? "" : ""} /> : <Check className="mx-auto text-[#A4D0BE]" size={40} strokeWidth={2.1} />}
                {index < 2 && <span>{label.split(" ")[0]}</span>}
              </div>
              <p className="mt-2 text-sm font-medium text-muted">{index < 2 ? label.replace("+ ", "") : label.trim()}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="work" className="bg-[#F7FAF8] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="mb-3 text-sm font-semibold uppercase text-accent">Website Showcase Gallery</p>
          <h2 className="max-w-3xl text-4xl font-semibold text-brandNavy sm:text-5xl">Explore Website Concepts</h2>
        </div>
        <div className="mt-10 overflow-hidden">
          <div className="concept-track flex w-max gap-6 px-5 sm:px-8">
            {[...concepts, ...concepts].map((concept, index) => (
              <div key={`${concept}-${index}`} className="w-[340px] rounded-lg border border-line bg-white p-3 shadow-sm sm:w-[440px]">
                <GalleryImageMockup title={concept} src={conceptImages[concept]} />
                <div className="px-2 pt-4 text-lg font-semibold text-ink">{concept}</div>
              </div>
            ))}
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
            <p className="mb-3 text-sm font-semibold uppercase text-accent">Services</p>
            <h2 className="services-heading-gradient relative text-3xl font-semibold sm:text-4xl">Everything your business needs to grow online.</h2>
          </div>
          <div className="grid gap-x-12 gap-y-0 border-y border-line/80 md:grid-cols-2">
            {services.map(([service, Icon, description]) => (
              <motion.div
                key={service}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group relative py-10 transition duration-300 md:border-b md:border-line/80 md:[&:nth-last-child(-n+2)]:border-b-0"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#A4D0BE]/70 to-transparent md:hidden" />
                <div className="flex gap-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#E8F5EE] text-accent shadow-[0_10px_30px_rgba(23,108,75,0.08)] transition duration-300 group-hover:bg-[#DCEFE6] group-hover:shadow-[0_14px_36px_rgba(23,108,75,0.12)]">
                    <Icon size={28} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-ink">{service}</h3>
                    <p className="mt-4 max-w-xl leading-7 text-muted">{description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="relative overflow-hidden bg-ink py-28 sm:py-36">
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] [background-size:44px_44px]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <p className="mb-3 text-sm font-semibold uppercase text-[#A7F3D0]">Process</p>
          <h2 className="max-w-3xl text-4xl font-semibold text-white sm:text-5xl">How we build great websites.</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            From strategy and design to launch and optimization, every project follows a clear process built for speed, clarity, and results.
          </p>

          <div className="relative mt-20 hidden min-h-[520px] lg:block">
            <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-white/35 to-transparent" />
            <div className="grid grid-cols-6 gap-4">
              {process.map(([title, text], index) => {
                const isTop = index % 2 === 0;
                return (
                  <div key={title} className="relative min-h-[520px]">
                    <motion.div
                      whileHover={{ y: isTop ? -6 : 6 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className={`absolute left-0 right-0 ${isTop ? "bottom-[calc(50%+4.75rem)]" : "top-[calc(50%+4.75rem)]"}`}
                    >
                      <div className="rounded-lg border border-white/8 bg-white/[0.045] p-5 shadow-[0_18px_54px_rgba(0,0,0,0.16)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/[0.065]">
                        <div className="mb-3 text-base font-semibold text-[#A7F3D0]">{title}</div>
                        <p className="text-sm leading-6 text-slate-300">{text}</p>
                      </div>
                    </motion.div>

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
            {process.map(([title, text]) => (
              <motion.div
                key={title}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative grid grid-cols-[2rem_1fr] gap-5"
              >
                <div className="relative z-10 mt-2 h-3 w-3 rounded-full border border-[#A7F3D0]/70 bg-[#A7F3D0]" />
                <div className="rounded-lg border border-white/8 bg-white/[0.045] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.14)] backdrop-blur-md">
                  <h3 className="text-lg font-semibold text-[#A7F3D0]">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F2F8F5] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase text-accent">Who We Help</p>
            <h2 className="text-4xl font-semibold text-brandNavy sm:text-5xl">Industries We Work With</h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              We help businesses build professional websites that strengthen their brand and generate more opportunities online.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {industries.map(([industry, Icon, description]) => (
              <motion.div
                key={industry}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative overflow-hidden rounded-lg border border-line bg-white p-7 shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition duration-300 hover:border-[#1F7A53]/35 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]"
              >
                <div className="absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,#176C4B,#245F48)]" />
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-lg bg-[#E8F5EE] text-[#1F7A53]">
                  <Icon size={30} strokeWidth={1.8} />
                </div>
                <h3 className="text-xl font-semibold text-ink">{industry}</h3>
                <p className="mt-4 text-sm leading-6 text-muted">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-lg bg-ink p-8 text-center text-white shadow-premium sm:p-16">
          <div className="mx-auto max-w-4xl">
            <Layers3 className="mx-auto mb-8 text-[#8FBFA8]" size={38} />
            <h2 className="text-4xl font-semibold sm:text-6xl">Ready For A Website That Helps Your Business Grow?</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              We build websites that create trust, generate leads, and support long-term business growth.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="https://calendly.com/hello-inphade/30min"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book a 30-minute discovery call with Inphade"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 font-semibold text-ink"
              >
                Book a Discovery Call <Globe2 size={18} />
              </a>
              <a href="mailto:hello@inphade.com?subject=Free Proposal" className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-4 font-semibold text-white">
                Get a Free Proposal <ShieldCheck size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-line bg-ink px-5 py-14 text-white sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-[1.25fr_0.75fr_0.75fr_0.75fr]">
            <div>
              <a href="#" className="inline-flex items-center" aria-label="Inphade home">
                <Image
                  src="/brand/inphade-logo.png"
                  alt="Inphade"
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-lg object-contain"
                />
              </a>
              <p className="mt-4 max-w-md leading-7 text-slate-300">
                Premium websites, digital experiences, and growth-focused solutions for modern businesses.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-normal text-[#8FBFA8]">Contact</h3>
              <a href="mailto:hello@inphade.com" className="mt-4 block text-slate-300 transition hover:text-white">
                hello@inphade.com
              </a>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-normal text-[#8FBFA8]">Services</h3>
              <div className="mt-4 grid gap-3 text-slate-300">
                <a href="#services" className="transition hover:text-white">Website Design & Development</a>
                <a href="#services" className="transition hover:text-white">Website Optimization</a>
                <a href="#services" className="transition hover:text-white">SEO Foundation</a>
                <a href="#services" className="transition hover:text-white">Ongoing Support</a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-normal text-[#8FBFA8]">Company</h3>
              <div className="mt-4 grid gap-3 text-slate-300">
                <a href="#" className="transition hover:text-white">About</a>
                <a href="#process" className="transition hover:text-white">Process</a>
                <a href="#work" className="transition hover:text-white">Portfolio</a>
                <a href="#contact" className="transition hover:text-white">Contact</a>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-6 text-sm text-slate-400">
            © 2026 Inphade. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
