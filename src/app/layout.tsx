import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lodestar Talent | Find Your Next Star Hire",
  description:
    "Lodestar Talent connects growing companies with exceptional talent. Our expert recruiters find top-tier candidates so you can focus on scaling your business.",
  keywords: [
    "recruiting",
    "hiring agency",
    "talent acquisition",
    "executive search",
    "staffing",
  ],
  openGraph: {
    title: "Lodestar Talent | Find Your Next Star Hire",
    description:
      "We connect growing companies with exceptional talent. Let us handle the search while you focus on scaling your business.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
