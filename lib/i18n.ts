import type { Locale } from "@/lib/routes";

export { locales, localizedSlugs, routeSlugs, isLocale, isRouteSlug, localizePath } from "@/lib/routes";
export type { Locale, RouteSlug } from "@/lib/routes";

export const dictionaries = {
  en: {
    metadata: {
      title: "Web Design Bangkok | High-Performance Websites | Inphade",
      description: "Inphade designs and develops high-performance websites for businesses in Bangkok and Thailand. Fast, SEO-ready and built to generate leads."
    },
    nav: {
      home: "Inphade home",
      work: "Project",
      services: "Services",
      process: "Process",
      contact: "Contact",
      book: "Let's Talk",
      language: "Language"
    },
    hero: {
      eyebrow: "",
      headline: "Web Design & Development Built for Growth",
      subheadline:
        "Inphade designs and develops fast, conversion-focused websites for businesses in Bangkok and across Thailand, combining strategy, design, development and SEO foundations in one build.",
      primary: "Get a Free Website Proposal",
      secondary: "View Project"
    },
    stats: {
      websites: "Websites Delivered",
      lighthouse: "Built Beyond the Standard Website",
      seo: "SEO-Optimized Builds",
      performance: "Fast Global Performance"
    },
    gallery: {
      label: "Website Showcase Gallery",
      heading: "Explore Website Concepts",
      concepts: [
        { id: "real-estate", title: "Luxury Real Estate" },
        { id: "startup", title: "Modern Startup" },
        { id: "hotel", title: "High-End Hotel" },
        { id: "medical", title: "Medical Center" },
        { id: "wealth", title: "Wealth Management" },
        { id: "architecture", title: "Architecture Studio" },
        { id: "restaurant", title: "Restaurant" },
        { id: "personal", title: "Personal Brand" },
        { id: "fitness", title: "Fitness Brand" },
        { id: "ai", title: "AI Product" }
      ]
    },
    services: {
      label: "Services",
      heading: "Everything your business needs to grow online.",
      items: [
        {
          title: "Website Design & Development",
          description:
            "Custom business websites, landing pages, and portfolio websites built to establish credibility, generate leads, and support long-term growth."
        },
        {
          title: "Website Optimization",
          description:
            "Improve user experience, content structure, trust elements, and conversion pathways to turn more visitors into customers."
        },
        {
          title: "SEO Foundation",
          description:
            "Technical SEO setup, sitemap configuration, metadata optimization, and search visibility improvements to help your business get discovered online."
        },
        {
          title: "Ongoing Support",
          description:
            "Monthly updates, content changes, technical monitoring, and maintenance to keep your website performing at its best."
        }
      ]
    },
    process: {
      label: "Process",
      heading: "How we build great websites.",
      subheading:
        "From strategy and design to launch and optimization, every project follows a clear process built for speed, clarity, and results.",
      items: [
        {
          title: "Discovery",
          description:
            "Learn about your business, audience, competitors, and goals before making any decisions."
        },
        {
          title: "Planning",
          description:
            "Define the website structure, content strategy, user journey, and conversion goals."
        },
        {
          title: "Design",
          description:
            "Create a clean, modern interface that reflects your brand and builds trust."
        },
        {
          title: "Development",
          description:
            "Build a fast, responsive, SEO-ready website using modern web technologies."
        },
        {
          title: "Launch",
          description:
            "Test, optimize, and deploy with analytics, performance checks, and quality assurance."
        },
        {
          title: "Growth",
          description:
            "Improve content, SEO, user experience, and conversions over time."
        }
      ]
    },
    industries: {
      label: "Who We Help",
      heading: "Industries We Work With",
      subheading:
        "We help businesses build professional websites that strengthen their brand and generate more opportunities online.",
      items: [
        {
          title: "Real Estate",
          description:
            "Property agencies, brokers, and developers looking to showcase listings and generate qualified leads."
        },
        {
          title: "Clinics & Healthcare",
          description:
            "Medical, dental, and wellness businesses that need credibility and a professional online presence."
        },
        {
          title: "Hotels & Hospitality",
          description:
            "Hotels, resorts, and hospitality brands focused on bookings and guest experience."
        },
        {
          title: "Restaurants & Cafes",
          description:
            "Food and beverage businesses looking to attract customers and strengthen their brand."
        },
        {
          title: "Professional Services",
          description:
            "Consultants, law firms, financial advisors, and service-based businesses."
        }
      ]
    },
    cta: {
      headline: "Ready For A Website That Helps Your Business Grow?",
      subheadline:
        "We build websites that create trust, generate leads, and support long-term business growth.",
      primary: "Let's Talk",
      primaryAria: "Chat with Inphade on WhatsApp about building a website",
      secondary: "Get a Free Proposal"
    },
    footer: {
      description:
        "Premium websites, digital experiences, and growth-focused solutions for modern businesses.",
      contact: "Contact",
      services: "Services",
      company: "Company",
      about: "About",
      process: "Process",
      portfolio: "Project",
      copyright: "© 2026 Inphade. All rights reserved."
    },
    schema: {
      description:
        "We design and develop high-performance websites that elevate brands, generate leads, and create long-term business value.",
      serviceType: "Web design, web development, SEO, conversion optimization, website support"
    }
  },
  th: {
    metadata: {
      title: "Inphade",
      description: "เว็บไซต์สมัยใหม่สำหรับธุรกิจที่ต้องการเติบโต"
    },
    nav: {
      home: "หน้าแรก Inphade",
      work: "โปรเจกต์",
      services: "บริการ",
      process: "ขั้นตอนการทำงาน",
      contact: "ติดต่อเรา",
      book: "ขอใบเสนอราคา",
      language: "ภาษา"
    },
    hero: {
      eyebrow: "",
      headline: "ออกแบบและพัฒนาเว็บไซต์เพื่อการเติบโตของธุรกิจ",
      subheadline:
        "เราออกแบบและพัฒนาเว็บไซต์ที่ช่วยสร้างความน่าเชื่อถือ เพิ่มโอกาสในการขาย และยกระดับแบรนด์ของคุณในระยะยาว",
      primary: "ขอใบเสนอราคา",
      secondary: "ดูโปรเจกต์"
    },
    stats: {
      websites: "เว็บไซต์ที่ส่งมอบ",
      lighthouse: "สร้างได้มากกว่าเว็บไซต์แบบมาตรฐาน",
      seo: "งานที่พร้อมสำหรับ SEO",
      performance: "ประสิทธิภาพระดับสากล"
    },
    gallery: {
      label: "ตัวอย่างเว็บไซต์",
      heading: "ตัวอย่างแนวคิดในการออกแบบ",
      concepts: [
        { id: "real-estate", title: "อสังหาริมทรัพย์ระดับพรีเมียม" },
        { id: "startup", title: "สตาร์ทอัพสมัยใหม่" },
        { id: "hotel", title: "โรงแรมระดับไฮเอนด์" },
        { id: "medical", title: "ศูนย์การแพทย์" },
        { id: "wealth", title: "บริหารความมั่งคั่ง" },
        { id: "architecture", title: "สตูดิโอสถาปัตยกรรม" },
        { id: "restaurant", title: "ร้านอาหาร" },
        { id: "personal", title: "แบรนด์บุคคล" },
        { id: "fitness", title: "แบรนด์ฟิตเนส" },
        { id: "ai", title: "ผลิตภัณฑ์ AI" }
      ]
    },
    services: {
      label: "บริการ",
      heading: "บริการเว็บไซต์สำหรับธุรกิจ",
      items: [
        {
          title: "ออกแบบเว็บไซต์",
          description:
            "ออกแบบเว็บไซต์ธุรกิจให้สื่อสารชัดเจน น่าเชื่อถือ ใช้งานง่ายบนมือถือ และรองรับการสร้าง Leads"
        },
        {
          title: "พัฒนาเว็บไซต์",
          description:
            "พัฒนาเว็บไซต์ที่โหลดเร็ว ดูแลต่อได้ รองรับฟังก์ชันเฉพาะ Integration และการขยายตัวของธุรกิจ"
        },
        {
          title: "รีดีไซน์เว็บไซต์",
          description:
            "ปรับปรุงเว็บไซต์เดิมให้ทันสมัยขึ้น ใช้งานง่ายขึ้น และรักษาความต่อเนื่องของ SEO ที่มีอยู่"
        },
        {
          title: "เว็บไซต์บริษัท",
          description:
            "สร้างเว็บไซต์องค์กรที่อธิบายบริการ โปรไฟล์บริษัท และช่องทางติดต่ออย่างเป็นระบบ"
        },
        {
          title: "Landing Page",
          description:
            "ออกแบบหน้าสำหรับแคมเปญ บริการ หรือข้อเสนอเฉพาะ เพื่อพาผู้เข้าชมไปสู่การติดต่อที่ชัดเจน"
        },
        {
          title: "SEO Foundation",
          description:
            "วางโครงสร้าง URL เนื้อหา Metadata Sitemap และพื้นฐานทางเทคนิคให้พร้อมสำหรับการค้นหา"
        },
        {
          title: "Website Maintenance",
          description:
            "อัปเดตเนื้อหา แก้ไขปัญหา และดูแลเว็บไซต์ให้พร้อมใช้งานอยู่เสมอ"
        },
        {
          title: "Custom Development",
          description:
            "พัฒนาฟังก์ชันเฉพาะตามขอบเขตงาน เช่น ฟอร์ม ระบบเนื้อหา การเชื่อมต่อ หรือโครงสร้างที่ต้องปรับตามธุรกิจ"
        }
      ]
    },
    process: {
      label: "ขั้นตอน",
      heading: "วิธีที่เราสร้างเว็บไซต์คุณภาพ",
      subheading:
        "ตั้งแต่กลยุทธ์และดีไซน์ ไปจนถึงการเปิดตัวและปรับปรุงต่อเนื่อง ทุกโปรเจกต์มีขั้นตอนที่ชัดเจนเพื่อความเร็ว ความเข้าใจตรงกัน และผลลัพธ์",
      items: [
        {
          title: "ค้นพบ",
          description:
            "ทำความเข้าใจธุรกิจ กลุ่มเป้าหมาย คู่แข่ง และเป้าหมายก่อนตัดสินใจออกแบบ"
        },
        {
          title: "วางแผน",
          description:
            "กำหนดโครงสร้างเว็บไซต์ กลยุทธ์เนื้อหา เส้นทางผู้ใช้ และเป้าหมายการเปลี่ยนผู้เข้าชมเป็นลูกค้า"
        },
        {
          title: "ออกแบบ",
          description:
            "สร้างอินเทอร์เฟซที่สะอาด ทันสมัย สะท้อนแบรนด์ และสร้างความไว้วางใจ"
        },
        {
          title: "พัฒนา",
          description:
            "สร้างเว็บไซต์ที่รวดเร็ว รองรับทุกอุปกรณ์ พร้อมพื้นฐาน SEO ด้วยเทคโนโลยีเว็บสมัยใหม่"
        },
        {
          title: "เปิดตัว",
          description:
            "ทดสอบ ปรับแต่ง และเผยแพร่พร้อม analytics การตรวจประสิทธิภาพ และการตรวจคุณภาพ"
        },
        {
          title: "เติบโต",
          description:
            "ปรับปรุงเนื้อหา SEO ประสบการณ์ผู้ใช้ และ conversion อย่างต่อเนื่อง"
        }
      ]
    },
    industries: {
      label: "เราช่วยใคร",
      heading: "อุตสาหกรรมที่เราทำงานด้วย",
      subheading:
        "เราช่วยธุรกิจสร้างเว็บไซต์มืออาชีพที่เสริมแบรนด์และสร้างโอกาสทางออนไลน์มากขึ้น",
      items: [
        {
          title: "อสังหาริมทรัพย์",
          description:
            "เอเจนซี่ นายหน้า และผู้พัฒนาโครงการที่ต้องการนำเสนอทรัพย์สินและสร้างลีดคุณภาพ"
        },
        {
          title: "คลินิกและสุขภาพ",
          description:
            "ธุรกิจการแพทย์ ทันตกรรม และสุขภาพที่ต้องการความน่าเชื่อถือและภาพลักษณ์ออนไลน์แบบมืออาชีพ"
        },
        {
          title: "โรงแรมและบริการต้อนรับ",
          description:
            "โรงแรม รีสอร์ต และแบรนด์บริการที่ต้องการเพิ่มการจองและยกระดับประสบการณ์ลูกค้า"
        },
        {
          title: "ร้านอาหารและคาเฟ่",
          description:
            "ธุรกิจอาหารและเครื่องดื่มที่ต้องการดึงดูดลูกค้าและเสริมความแข็งแรงของแบรนด์"
        },
        {
          title: "ธุรกิจอื่น ๆ",
          description:
            "ที่ปรึกษา สำนักงานกฎหมาย ที่ปรึกษาการเงิน และธุรกิจที่ต้องการเว็บไซต์มืออาชีพ"
        }
      ]
    },
    cta: {
      headline: "พร้อมมีเว็บไซต์ที่ช่วยให้ธุรกิจเติบโตหรือยัง?",
      subheadline:
        "เราสร้างเว็บไซต์ที่ช่วยสร้างความน่าเชื่อถือ เพิ่มโอกาสทางธุรกิจ และเติบโตไปพร้อมกับแบรนด์ของคุณ",
      primary: "ขอใบเสนอราคา",
      primaryAria: "ปรึกษาโปรเจกต์เว็บไซต์กับ Inphade",
      secondary: "ปรึกษาโปรเจกต์กับเรา"
    },
    footer: {
      description:
        "เว็บไซต์พรีเมียม ประสบการณ์ดิจิทัล และโซลูชันเพื่อการเติบโตสำหรับธุรกิจสมัยใหม่",
      contact: "ติดต่อ",
      services: "บริการ",
      company: "บริษัท",
      about: "เกี่ยวกับเรา",
      process: "ขั้นตอนการทำงาน",
      portfolio: "โปรเจกต์",
      copyright: "© 2026 Inphade สงวนลิขสิทธิ์"
    },
    schema: {
      description:
        "เราออกแบบและพัฒนาเว็บไซต์ประสิทธิภาพสูงที่ช่วยยกระดับแบรนด์ สร้างลีด และเพิ่มคุณค่าทางธุรกิจในระยะยาว",
      serviceType: "ออกแบบเว็บไซต์, พัฒนาเว็บไซต์, SEO, ปรับ Conversion, ดูแลเว็บไซต์"
    }
  }
} as const;

export type Dictionary = (typeof dictionaries)[Locale];

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
