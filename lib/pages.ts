import type { Locale, RouteSlug } from "@/lib/routes";
import { thaiPages } from "@/lib/thai-pages";

export const siteUrl = "https://www.inphade.com";

export type PageKind = "service" | "industry" | "company" | "portfolio" | "contact";

export type LandingPage = {
  slug: RouteSlug;
  kind: PageKind;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  intro: string;
  cta: string;
  ctaNote: string;
  sections: Array<{
    id?: string;
    title: string;
    body: string;
    items?: string[];
  }>;
  links: Array<{
    label: string;
    href: string;
  }>;
};

export const pages: Record<RouteSlug, LandingPage> = {
  services: {
    slug: "services",
    kind: "service",
    title: "Website Design & Development Services | Inphade",
    description: "Premium website design, development, redesign, SEO foundation and support services for businesses in Bangkok and Thailand.",
    h1: "Website Services for Businesses Ready to Grow Online",
    eyebrow: "Services",
    intro: "Inphade combines strategy, design, development and SEO foundations to create fast, professional websites that help businesses build trust and generate enquiries.",
    cta: "Get a Free Website Proposal",
    ctaNote: "Tell us about your website goals and we will recommend the right next step.",
    sections: [
      {
        title: "What We Build",
        body: "Every website is planned around business goals, user journeys and long-term maintainability, not only visual polish.",
        items: ["Website design", "Website development", "Website redesign", "Landing pages", "SEO foundation", "Website maintenance"]
      },
      {
        id: "seo-foundation",
        title: "SEO Foundation",
        body: "Technical foundations are planned early: crawlable pages, clear metadata, clean sitemap output, internal links, fast loading patterns and page structures that support future search visibility."
      },
      {
        id: "ongoing-support",
        title: "Ongoing Support",
        body: "After launch, support can cover content updates, small improvements, technical monitoring and practical iteration so the website stays accurate, fast and useful as the business changes."
      },
      {
        title: "Built for Performance and Leads",
        body: "We focus on clear content structure, mobile usability, conversion pathways, technical SEO basics and analytics-ready implementation so the website can support growth after launch."
      }
    ],
    links: [
      { label: "Web design in Bangkok", href: "/web-design-bangkok" },
      { label: "Website development", href: "/website-development-bangkok" },
      { label: "Website redesign", href: "/website-redesign-bangkok" },
      { label: "View portfolio concepts", href: "/portfolio" }
    ]
  },
  portfolio: {
    slug: "portfolio",
    kind: "portfolio",
    title: "Selected Website Concepts | Inphade",
    description: "Explore selected Inphade concept directions across real estate, clinics, hotels, restaurants, SaaS and professional services.",
    h1: "Selected Website Concepts",
    eyebrow: "Portfolio",
    intro: "Selected concept directions exploring how strategy, design and development can come together across different industries, user journeys, positioning and conversion goals. Concept work shown for design exploration.",
    cta: "Have a project in mind?",
    ctaNote: "Share the business context and we will help shape a website direction that feels specific, credible and ready to convert.",
    sections: [
      {
        title: "Luxury Real Estate",
        body: "Premium positioning, high-value property presentation and qualified enquiry generation.",
        items: ["Property discovery", "Project storytelling", "Lead conversion", "Mobile-first browsing"]
      },
      {
        title: "Clinic & Medical",
        body: "Trust, clarity and a frictionless path from service discovery to enquiry or booking.",
        items: ["Service hierarchy", "Provider credibility", "Location clarity", "Appointment intent"]
      },
      {
        title: "Hotel & Hospitality",
        body: "Brand experience, destination storytelling and direct booking intent.",
        items: ["Room presentation", "Offer discovery", "Guest journey", "Booking pathway"]
      },
      {
        title: "Restaurant & Cafe",
        body: "Fast mobile decisions supported by menus, location details and a clear reservation or enquiry path.",
        items: ["Menu structure", "Local discovery", "Mobile UX", "Reservation intent"]
      },
      {
        title: "Modern Startup / SaaS",
        body: "Clear value proposition, product understanding and conversion for teams selling something new.",
        items: ["Product clarity", "Feature communication", "Trust signals", "Demo or enquiry flow"]
      },
      {
        title: "Professional Services / Finance",
        body: "Credibility, authority and structured service communication for expert-led businesses.",
        items: ["Expert positioning", "Service architecture", "Consultation journey", "Content clarity"]
      }
    ],
    links: [
      { label: "Real estate websites", href: "/real-estate-web-design" },
      { label: "Hotel website design", href: "/hotel-web-design" },
      { label: "Contact Inphade", href: "/contact" }
    ]
  },
  contact: {
    slug: "contact",
    kind: "contact",
    title: "Contact Inphade | Get a Free Website Proposal",
    description: "Contact Inphade to discuss a business website, redesign or development project in Bangkok, Thailand or beyond.",
    h1: "Get a Free Website Proposal",
    eyebrow: "Contact",
    intro: "Share a few details about your website goals and Inphade will help you clarify the right approach for design, development, launch and growth.",
    cta: "Start Your Enquiry",
    ctaNote: "You can also email hello@inphade.com or start a WhatsApp conversation.",
    sections: [
      {
        title: "What to Include",
        body: "The most useful enquiries describe the business, current website if one exists, the main goal, preferred timeline and any must-have functionality."
      },
      {
        title: "Good Fit Projects",
        body: "Inphade is best suited to businesses that want a premium, fast and conversion-focused website rather than a generic template-only presence."
      }
    ],
    links: [
      { label: "Web design services", href: "/web-design-bangkok" },
      { label: "Website development", href: "/website-development-bangkok" },
      { label: "Website redesign", href: "/website-redesign-bangkok" }
    ]
  },
  about: {
    slug: "about",
    kind: "company",
    title: "About Inphade | Website Design & Development",
    description: "Learn about Inphade's approach to premium website design and development for businesses in Bangkok and Thailand.",
    h1: "Premium Website Design and Development With a Growth Mindset",
    eyebrow: "About",
    intro: "Inphade exists to help businesses turn their website into a sharper business asset: clearer positioning, stronger trust, better performance and easier enquiry paths.",
    cta: "Talk About Your Website",
    ctaNote: "We will help you decide whether design, development, redesign or ongoing support is the right next move.",
    sections: [
      {
        title: "What Inphade Does",
        body: "Inphade designs and develops professional websites for businesses that need credibility, speed, mobile usability, search foundations and a clear route from visitor interest to enquiry."
      },
      {
        title: "Who We Serve",
        body: "Our work is suited to service businesses, real estate teams, clinics, hotels, restaurants, professional services and startups across Bangkok and Thailand."
      },
      {
        title: "How We Work",
        body: "Projects move through discovery, strategy, design, development, launch and growth so the finished website is considered from both a brand and performance perspective."
      }
    ],
    links: [
      { label: "Our process", href: "/#process" },
      { label: "Services", href: "/services" },
      { label: "Contact", href: "/contact" }
    ]
  },
  "web-design-bangkok": {
    slug: "web-design-bangkok",
    kind: "service",
    title: "Web Design Bangkok | Custom Business Websites | Inphade",
    description: "Custom web design and development in Bangkok for businesses that need a fast, professional website built to generate leads and support long-term growth.",
    h1: "Web Design for Bangkok Businesses Ready to Grow",
    eyebrow: "Web Design Bangkok",
    intro: "Inphade designs and develops fast, conversion-focused websites for international businesses, expatriate-owned companies and Thailand-based teams that need a polished English-language website built for trust and enquiries.",
    cta: "Get a Free Website Proposal",
    ctaNote: "Share your business goals and we will help shape a website plan around them.",
    sections: [
      {
        title: "Websites Designed to Generate Business",
        body: "For English-speaking customers in Bangkok, a website often has to explain the business quickly, prove credibility and remove friction before a visitor makes contact. We plan pages around positioning, trust signals, mobile UX, SEO structure, speed, analytics and conversion-focused calls-to-action."
      },
      {
        title: "Web Design Services",
        body: "Inphade supports new websites, redesigns and focused landing pages with the technical foundation needed for search visibility, maintainable content and long-term business growth.",
        items: ["Website design", "Website development", "Website redesign", "Landing pages", "SEO foundation", "Website maintenance"]
      },
      {
        title: "Websites for Bangkok Businesses",
        body: "The English market in Thailand includes international companies, hospitality brands, real estate teams, clinics, restaurants, professional services and startups. Each audience needs different proof points, content depth and enquiry paths, so the structure is adapted to the business instead of reused as a generic template."
      },
      {
        title: "Our Process",
        body: "Discovery, strategy, design, development, launch and growth keep the project grounded in business goals from the first conversation through post-launch improvements. The process covers audience intent, page hierarchy, conversion paths, responsive design, technical SEO and analytics readiness."
      },
      {
        title: "Why Inphade",
        body: "Websites are custom-built around business goals, mobile-first usability, SEO-ready architecture, performance-focused development, analytics readiness and direct support."
      },
      {
        title: "Common Questions",
        body: "Website cost and timeline depend on scope, page count, content readiness, design complexity and required functionality. Inphade can help structure website content, redesign an existing site, prepare SEO foundations and plan ongoing maintenance without inventing fixed packages before understanding the project."
      }
    ],
    links: [
      { label: "Website development", href: "/website-development-bangkok" },
      { label: "Website redesign", href: "/website-redesign-bangkok" },
      { label: "Real estate websites", href: "/real-estate-web-design" },
      { label: "Portfolio", href: "/portfolio" }
    ]
  },
  "website-development-bangkok": {
    slug: "website-development-bangkok",
    kind: "service",
    title: "Website Development Bangkok | Custom Web Development | Inphade",
    description: "Website development in Bangkok for businesses that need fast, responsive, maintainable and SEO-ready websites with room to grow.",
    h1: "Website Development Built for Speed, Scale and Reliability",
    eyebrow: "Website Development",
    intro: "Inphade develops responsive, maintainable websites for businesses operating in Bangkok and Thailand, with attention to performance, search visibility, analytics and practical future growth.",
    cta: "Discuss a Development Project",
    ctaNote: "Tell us what your website needs to do and we will recommend a practical development path.",
    sections: [
      {
        title: "Development Beyond the Visual Layer",
        body: "A well-built website should load quickly, behave predictably on mobile, be easy to maintain and support the integrations a business actually needs. Development choices affect page speed, content updates, analytics accuracy, SEO crawlability and the reliability of enquiry flows."
      },
      {
        title: "What Development Can Include",
        body: "Scope depends on the project, but development can include responsive builds, performance tuning, maintainable page systems, analytics setup, CMS considerations, SEO foundations, form flows and custom functionality where it supports a real business need.",
        items: ["Responsive development", "Performance-focused implementation", "Analytics-ready events", "CMS planning where applicable", "Integrations where applicable", "Scalable content structures"]
      },
      {
        title: "Built for Growth",
        body: "The goal is to avoid fragile websites that are difficult to update. Clear structure, careful implementation and SEO-ready architecture help the website support future campaigns, landing pages, content expansion and conversion improvements."
      },
      {
        title: "Useful Technical Foundations",
        body: "For commercial websites, technical quality should support the whole lead journey: fast landing pages, clean URL structure, descriptive metadata, accessible forms, reliable mobile layouts and analytics events for enquiries, email clicks and messaging clicks."
      }
    ],
    links: [
      { label: "Web design Bangkok", href: "/web-design-bangkok" },
      { label: "Website redesign", href: "/website-redesign-bangkok" },
      { label: "Contact", href: "/contact" }
    ]
  },
  "website-redesign-bangkok": {
    slug: "website-redesign-bangkok",
    kind: "service",
    title: "Website Redesign Bangkok | Modern Business Websites | Inphade",
    description: "Website redesign in Bangkok for businesses with outdated design, slow performance, weak mobile UX or poor conversion paths.",
    h1: "Website Redesign for Businesses Ready for a Stronger Online Presence",
    eyebrow: "Website Redesign",
    intro: "A redesign should protect what is already working while improving clarity, performance, mobile usability, search foundations and the path from visitor interest to enquiry.",
    cta: "Request a Website Review",
    ctaNote: "Share your current website and we will look at the practical redesign opportunities.",
    sections: [
      {
        title: "When a Website Needs Redesigning",
        body: "A website may need a redesign when it looks outdated, loads slowly, performs poorly on mobile, has confusing navigation, weak calls-to-action or a content structure that no longer reflects the business. For international audiences, unclear English copy and missing trust signals can also reduce enquiry quality."
      },
      {
        title: "Redesign With SEO Continuity",
        body: "Redesign work should consider existing pages, important URLs, redirects where needed, metadata, analytics continuity and the content users and search engines already rely on. The aim is to improve the site without throwing away useful search equity or breaking campaign links."
      },
      {
        title: "What Improves",
        body: "The redesign process can improve page hierarchy, mobile experience, lead capture, trust signals, speed, analytics setup and the overall ability of the website to support growth."
      },
      {
        title: "What a Review Looks At",
        body: "A practical website review looks at user journeys, mobile layout, navigation, page speed, service-page depth, conversion points, current SEO structure and whether the website still matches how the business sells today."
      }
    ],
    links: [
      { label: "Web design Bangkok", href: "/web-design-bangkok" },
      { label: "Website development", href: "/website-development-bangkok" },
      { label: "Contact Inphade", href: "/contact" }
    ]
  },
  "company-website": {
    slug: "company-website",
    kind: "service",
    title: "Company Website Design | Corporate Websites | Inphade",
    description: "Company website design for businesses that need credibility, clear service pages, lead generation, responsive UX and SEO-ready structure.",
    h1: "Company Websites That Build Trust and Support Business Growth",
    eyebrow: "Company Websites",
    intro: "Inphade designs professional company websites that explain what a business does, make it easier to trust and create clear paths for enquiries, recruitment or business conversations.",
    cta: "Plan a Company Website",
    ctaNote: "Share your business goals and we will recommend a practical website structure.",
    sections: [
      {
        title: "A Stronger Corporate Presence",
        body: "A company website should present the business clearly, show services or capabilities, support credibility and make the next step obvious for potential customers, partners or candidates."
      },
      {
        title: "What a Company Website Can Include",
        body: "Scope depends on the business, but a company website can include service pages, company profile content, lead forms, multilingual structure where needed, analytics setup, SEO foundations and scalable page architecture.",
        items: ["Company profile", "Service pages", "Lead generation forms", "Responsive UX", "SEO-ready structure", "Analytics-ready implementation"]
      },
      {
        title: "Built for Future Growth",
        body: "The right structure makes it easier to add future pages, campaigns, hiring content or business information without rebuilding the website from scratch."
      }
    ],
    links: [
      { label: "Web design Bangkok", href: "/web-design-bangkok" },
      { label: "Website development", href: "/website-development-bangkok" },
      { label: "Professional services websites", href: "/professional-services-web-design" }
    ]
  },
  "real-estate-web-design": {
    slug: "real-estate-web-design",
    kind: "industry",
    title: "Real Estate Website Design Bangkok | Inphade",
    description: "Real estate website design for Bangkok property businesses, agencies and developers that need professional presentation and lead-generation foundations.",
    h1: "Real Estate Websites Built to Generate Property Leads",
    eyebrow: "Real Estate Website Design",
    intro: "Inphade designs real estate websites for Bangkok property agencies, developers and sales teams that need clear project presentation, searchable property information and strong enquiry paths.",
    cta: "Plan a Real Estate Website",
    ctaNote: "We can shape the feature scope around your agency, project or property marketing goals.",
    sections: [
      {
        title: "Property Presentation That Supports Enquiries",
        body: "Real estate websites need more than attractive imagery. They need clear project pages, listing structures, mobile-friendly browsing and direct enquiry paths for serious buyers, tenants, investors or agents comparing properties in Bangkok."
      },
      {
        title: "Possible Features",
        body: "Features are scoped to the project, but a custom real estate website can support property listings, project pages, search and filters, floor plans, viewing enquiries, lead capture, WhatsApp or LINE contact and CRM integrations where applicable.",
        items: ["Property listings", "Developer project pages", "Agent profiles", "Floor plan presentation", "Viewing enquiry CTAs", "SEO-ready property pages"]
      },
      {
        title: "Lead and Analytics Foundations",
        body: "Good structure helps teams understand which properties attract interest, which enquiry paths perform and how future content or campaigns can improve qualified lead generation."
      },
      {
        title: "Different Real Estate Use Cases",
        body: "A developer project website may need room types, master plans and campaign landing pages. An agency website may need listing management, filters and agent contact paths. A broker or boutique team may need fewer listings but stronger authority, location content and direct consultation CTAs."
      }
    ],
    links: [
      { label: "Web design Bangkok", href: "/web-design-bangkok" },
      { label: "Website development", href: "/website-development-bangkok" },
      { label: "View portfolio concepts", href: "/portfolio" }
    ]
  },
  "clinic-web-design": {
    slug: "clinic-web-design",
    kind: "industry",
    title: "Clinic Website Design Bangkok | Inphade",
    description: "Clinic website design in Bangkok for medical, dental and wellness businesses that need credibility, clear service pages and easy appointment enquiry paths.",
    h1: "Clinic Website Design Built Around Trust and Clear Patient Journeys",
    eyebrow: "Clinic Website Design",
    intro: "Clinic websites need to communicate credibility, services and appointment options clearly while staying fast, mobile-friendly and easy for English-speaking patients to navigate.",
    cta: "Discuss a Clinic Website",
    ctaNote: "We can help structure service pages, doctor profiles and enquiry paths without making unsupported medical claims.",
    sections: [
      {
        title: "Trust and Clarity First",
        body: "A clinic website should help visitors understand services, doctors or providers, location, appointment options and what to expect before getting in touch. It should support trust without making unsupported medical outcome claims."
      },
      {
        title: "Useful Clinic Website Elements",
        body: "Depending on scope, a clinic website can include doctor profiles, treatment or service pages, appointment CTAs, LINE contact, mobile-first UX, multilingual planning and SEO-ready content structure.",
        items: ["Doctor profiles", "Service and treatment pages", "Appointment enquiry CTAs", "LINE contact", "Mobile usability", "Multilingual structure where needed"]
      },
      {
        title: "Patient Journey Considerations",
        body: "English-speaking patients may compare clinics by credibility, doctor information, service clarity, location, language support and ease of appointment request. The website should make those signals easy to scan on mobile."
      }
    ],
    links: [
      { label: "Web design Bangkok", href: "/web-design-bangkok" },
      { label: "Website development", href: "/website-development-bangkok" },
      { label: "Contact Inphade", href: "/contact" }
    ]
  },
  "hotel-web-design": {
    slug: "hotel-web-design",
    kind: "industry",
    title: "Hotel Website Design Thailand | Inphade",
    description: "Hotel website design in Thailand for hotels and hospitality brands that need strong room pages, galleries, booking journeys and SEO foundations.",
    h1: "Hotel Website Design for Better Guest Journeys",
    eyebrow: "Hotel Website Design",
    intro: "A hotel website should make rooms, amenities, location and booking options clear on every device, while supporting search visibility, direct enquiry paths and future hospitality content growth.",
    cta: "Plan a Hotel Website",
    ctaNote: "We can help clarify room page structure, booking paths and integration requirements.",
    sections: [
      {
        title: "Direct Booking Journeys",
        body: "Hotel websites need clear paths from inspiration to booking: strong room pages, galleries, location context, offers and integration with booking engines where applicable. The goal is to reduce unnecessary friction without making unrealistic guarantees about booking mix."
      },
      {
        title: "Hospitality Website Foundations",
        body: "Scope can include room pages, gallery systems, multilingual planning, mobile speed, hotel SEO foundations and reduced friction in contact or booking journeys.",
        items: ["Room and suite pages", "Gallery presentation", "Booking engine integration where applicable", "Multilingual structure", "Mobile performance", "Hotel SEO foundations"]
      },
      {
        title: "Content That Helps Guests Decide",
        body: "Useful hotel pages often cover rooms, amenities, offers, location, nearby attractions, policies and contact options. Clear structure helps international guests compare quickly and move toward booking or enquiry."
      }
    ],
    links: [
      { label: "Web design Bangkok", href: "/web-design-bangkok" },
      { label: "Website development", href: "/website-development-bangkok" },
      { label: "Portfolio concepts", href: "/portfolio" }
    ]
  },
  "restaurant-web-design": {
    slug: "restaurant-web-design",
    kind: "industry",
    title: "Restaurant Website Design Bangkok | Inphade",
    description: "Restaurant website design in Bangkok for menus, mobile browsing, reservations, maps, local search foundations and clear contact journeys.",
    h1: "Restaurant Website Design That Makes Visiting and Booking Easier",
    eyebrow: "Restaurant Website Design",
    intro: "Restaurant websites should help people browse menus, understand the location, make reservations and contact the venue quickly from mobile devices.",
    cta: "Discuss a Restaurant Website",
    ctaNote: "We can shape the site around menus, photography, reservations and local search foundations.",
    sections: [
      {
        title: "Designed for Mobile Decisions",
        body: "Restaurant visitors often arrive from mobile search, maps or social channels. Clear menus, opening details, location, maps and booking actions need to be easy to find without forcing people through a slow or confusing journey."
      },
      {
        title: "Restaurant Website Elements",
        body: "A restaurant website can support menu presentation, food and venue photography, reservations, LINE or WhatsApp contact, maps, local search foundations and simple contact journeys.",
        items: ["Menus", "Photography presentation", "Reservations", "Location and maps", "LINE or WhatsApp contact", "Local search foundations"]
      },
      {
        title: "Local Search and Brand Experience",
        body: "For Bangkok restaurants, the website should reinforce the dining concept, make essential information visible and support local discovery with clear location content, contact details and structured page hierarchy."
      }
    ],
    links: [
      { label: "Web design Bangkok", href: "/web-design-bangkok" },
      { label: "Website redesign", href: "/website-redesign-bangkok" },
      { label: "Contact", href: "/contact" }
    ]
  },
  "professional-services-web-design": {
    slug: "professional-services-web-design",
    kind: "industry",
    title: "Professional Services Website Design | Inphade",
    description: "Website design for consulting firms, accounting offices, law firms and professional service businesses that need credibility and qualified leads.",
    h1: "Professional Services Websites Built for Trust and Qualified Leads",
    eyebrow: "Professional Services Website Design",
    intro: "Inphade helps professional service businesses present expertise clearly, structure service pages and make it easier for serious prospects to request a consultation.",
    cta: "Plan a Professional Services Website",
    ctaNote: "We can shape the website around your services, expertise and consultation journey.",
    sections: [
      {
        title: "Credibility for Expert-Led Businesses",
        body: "Consulting firms, accounting offices, legal teams and other professional service businesses need websites that communicate expertise, process, people and fit without overwhelming visitors."
      },
      {
        title: "Useful Website Elements",
        body: "A professional services website can include service pages, team or professional profiles, proof structures, consultation CTAs, contact forms, SEO foundations and analytics-ready enquiry tracking.",
        items: ["Service pages", "Professional profiles", "Case study structure", "Consultation CTAs", "Thought leadership", "Analytics foundations"]
      },
      {
        title: "Designed for Better Enquiries",
        body: "Clear positioning and page hierarchy help visitors understand whether the firm is relevant before they make contact, improving the quality of enquiries over time."
      }
    ],
    links: [
      { label: "Company websites", href: "/company-website" },
      { label: "Web design Bangkok", href: "/web-design-bangkok" },
      { label: "Contact", href: "/contact" }
    ]
  }
};

export function getLandingPage(slug: RouteSlug, locale: Locale = "en") {
  return locale === "th" ? thaiPages[slug] ?? pages[slug] : pages[slug];
}

export const englishSeoSlugs = [
  "web-design-bangkok",
  "website-development-bangkok",
  "website-redesign-bangkok",
  "real-estate-web-design",
  "clinic-web-design",
  "hotel-web-design",
  "restaurant-web-design"
] as const;
