import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Inphade | Premium Digital Assets for Business Growth",
  description:
    "Premium websites engineered for growth, conversions, and long-term business value.",
  metadataBase: new URL("https://inphade.com"),
  openGraph: {
    title: "Inphade | We Build Digital Assets, Not Just Websites",
    description:
      "Premium websites engineered for growth, conversions, and long-term business value.",
    type: "website"
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
