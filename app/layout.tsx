import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { siteUrl } from "@/lib/pages";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Inphade",
  description: "Modern websites for ambitious businesses.",
  metadataBase: new URL(siteUrl),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  },
  openGraph: {
    title: "Inphade",
    description: "Modern websites for ambitious businesses.",
    type: "website",
    images: [
      {
        url: "/brand/inphade-logo.png",
        width: 1024,
        height: 1024,
        alt: "Inphade logo"
      }
    ]
  },
  other: {
    "og:logo": "/brand/inphade-logo.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
