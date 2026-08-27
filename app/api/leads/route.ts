import { NextResponse } from "next/server";

type LeadPayload = {
  locale?: string;
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  currentWebsite?: string;
  service?: string;
  budget?: string;
  message?: string;
  sourcePage?: string;
  submittedAt?: string;
};

const recentSubmissions = new Map<string, number>();
const duplicateWindowMs = 60_000;

function clean(value: unknown) {
  return typeof value === "string" ? value.trim().slice(0, 2000) : "";
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let payload: LeadPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid JSON." }, { status: 400 });
  }

  const locale = clean(payload.locale);
  const submittedAt = clean(payload.submittedAt) || new Date().toISOString();
  if (locale !== "en" && locale !== "th") {
    return NextResponse.json({ ok: false, message: "Invalid locale." }, { status: 400 });
  }

  const lead = {
    locale,
    name: clean(payload.name),
    company: clean(payload.company),
    email: clean(payload.email),
    phone: clean(payload.phone),
    currentWebsite: clean(payload.currentWebsite),
    service: clean(payload.service),
    budget: clean(payload.budget),
    message: clean(payload.message),
    sourcePage: clean(payload.sourcePage),
    submittedAt
  };

  if (!lead.name || !lead.email || !lead.service || !lead.message || !lead.sourcePage || !lead.submittedAt) {
    return NextResponse.json({ ok: false, message: "Missing required fields." }, { status: 400 });
  }

  if (!isEmail(lead.email)) {
    return NextResponse.json({ ok: false, message: "Invalid email." }, { status: 400 });
  }

  const duplicateKey = [lead.locale, lead.email.toLowerCase(), lead.service.toLowerCase(), lead.message.toLowerCase()].join("|");
  const now = Date.now();
  const lastSubmittedAt = recentSubmissions.get(duplicateKey);

  if (lastSubmittedAt && now - lastSubmittedAt < duplicateWindowMs) {
    return NextResponse.json({ ok: false, message: "Duplicate submission." }, { status: 409 });
  }

  recentSubmissions.forEach((timestamp, key) => {
    if (now - timestamp > duplicateWindowMs) recentSubmissions.delete(key);
  });

  const webhookUrl = process.env.LEAD_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json(
      { ok: false, message: "Lead webhook is not configured." },
      { status: 503 }
    );
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      source: "inphade-website",
      lead
    })
  });

  if (!response.ok) {
    return NextResponse.json({ ok: false, message: "Lead webhook failed." }, { status: 502 });
  }

  recentSubmissions.set(duplicateKey, now);

  return NextResponse.json({ ok: true });
}
