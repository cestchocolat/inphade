"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Check,
  Code2,
  Globe2,
  Layers3,
  Palette,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
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
    "Website Design",
    Palette,
    "Premium UI/UX experiences crafted to elevate your brand and maximize engagement."
  ],
  [
    "Web Development",
    Code2,
    "Fast, scalable websites built with modern technologies and best practices."
  ],
  [
    "SEO Optimization",
    Search,
    "Improve search visibility, rankings, and long-term organic growth."
  ],
  [
    "Conversion Optimization",
    Target,
    "Transform website traffic into qualified leads and paying customers."
  ],
  [
    "Branding",
    Sparkles,
    "Build a distinctive visual identity that creates trust and recognition."
  ],
  [
    "AI Automation",
    Bot,
    "Automate repetitive workflows and improve operational efficiency."
  ],
  [
    "Website Maintenance",
    Wrench,
    "Reliable updates, security monitoring, and ongoing technical support."
  ],
  [
    "Analytics & Tracking",
    BarChart3,
    "Measure performance with actionable insights and data-driven reporting."
  ]
] as const;

const process = [
  ["01", "Discovery", "Learn about your business, audience, competitors, and goals before making any decisions."],
  ["02", "Planning", "Define the website structure, content strategy, user journey, and conversion goals."],
  ["03", "Design", "Create a clean, modern interface that reflects your brand and builds trust."],
  ["04", "Development", "Build a fast, responsive, SEO-ready website using modern web technologies."],
  ["05", "Launch", "Test, optimize, and deploy with analytics, performance checks, and quality assurance."],
  ["06", "Growth", "Improve content, SEO, user experience, and conversions over time."]
];

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
    serviceType: "Web design, web development, SEO, conversion optimization, AI automation"
  };

  return (
    <main className="overflow-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="relative overflow-hidden px-5 pb-20 pt-6 sm:px-8">
        <div className="mesh absolute inset-0" />
        <div className="grid-surface absolute inset-0 opacity-70" />
        <nav className="glass relative z-20 mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-3">
          <a href="#" className="text-lg font-semibold text-ink">Inphade</a>
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
            <a href="#contact" className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 font-semibold text-white shadow-glow">
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

      <section id="work" className="bg-soft py-24 sm:py-32">
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
        className="bg-[linear-gradient(180deg,rgba(23,108,75,0.05)_0%,rgba(255,255,255,1)_50%)] py-24 sm:py-32"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="relative mb-12 max-w-3xl">
            <div className="pointer-events-none absolute -left-8 -top-8 h-32 w-72 rounded-full bg-[rgba(23,108,75,0.12)] blur-3xl" />
            <p className="mb-3 text-sm font-semibold uppercase text-accent">Services</p>
            <h2 className="services-heading-gradient relative text-4xl font-semibold sm:text-5xl">Everything your business needs to grow online.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(([service, Icon, description]) => (
              <motion.div
                key={service}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.24, ease: "easeOut" }}
                className="relative overflow-hidden rounded-lg border border-[rgba(7,21,56,0.08)] bg-white p-6 shadow-[0_10px_26px_rgba(7,21,56,0.04)] transition-shadow duration-300 hover:shadow-[0_20px_40px_rgba(7,21,56,0.08)]"
              >
                <div className="absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,#176C4B,#245F48)]" />
                <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-md bg-[linear-gradient(135deg,#176C4B,#245F48)] text-white shadow-[0_12px_28px_rgba(23,108,75,0.24)] ring-1 ring-white/70">
                  <Icon size={26} strokeWidth={1.9} />
                </div>
                <h3 className="text-xl font-semibold text-ink">{service}</h3>
                <p className="mt-4 leading-7 text-muted">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="bg-soft py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="mb-3 text-sm font-semibold uppercase text-accent">Process</p>
          <h2 className="max-w-3xl text-4xl font-semibold text-brandNavy sm:text-5xl">How we build great websites.</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
            From strategy and design to launch and optimization, every project follows a clear process built for speed, clarity, and results.
          </p>
          <div className="mt-14 grid gap-4 lg:grid-cols-6">
            {process.map(([number, title, text], index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex h-full flex-col rounded-lg border border-line bg-white p-4 shadow-sm"
              >
                <div className="mb-6 text-sm font-semibold text-accent">{number}</div>
                <h3 className="text-xl font-semibold text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-lg bg-ink p-8 text-center text-white shadow-premium sm:p-16">
          <div className="mx-auto max-w-4xl">
            <Layers3 className="mx-auto mb-8 text-[#8FBFA8]" size={38} />
            <h2 className="text-4xl font-semibold sm:text-6xl">Ready to Build Your Next Digital Asset?</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">Let's create a website that works for your business 24/7.</p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a href="mailto:hello@inphade.com" className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 font-semibold text-ink">
                Schedule a Call <Globe2 size={18} />
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
              <a href="#" className="text-xl font-semibold tracking-normal text-white">INPHADE</a>
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
                <a href="#services" className="transition hover:text-white">Website Design</a>
                <a href="#services" className="transition hover:text-white">Website Development</a>
                <a href="#services" className="transition hover:text-white">SEO</a>
                <a href="#services" className="transition hover:text-white">Conversion Optimization</a>
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
