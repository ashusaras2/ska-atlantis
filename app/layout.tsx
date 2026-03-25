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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "SKA Group | Luxury 3 & 4 BHK Apartments in Sidharth Vihar, Ghaziabad",
  description:
    "SKA Group is launching soon luxury 3 & 4 BHK apartments in Sidharth Vihar, Ghaziabad across 4.5 acres with premium amenities, luxury clubhouse, and podium-based development.",
  keywords: [
    "SKA Group Sidharth Vihar",
    "Coming Soon Project Ghaziabad",
    "Sidharth Vihar Apartments",
    "3 BHK Ghaziabad",
    "4 BHK Ghaziabad",
    "Luxury Apartments Ghaziabad",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "SKA Group | Luxury 3 & 4 BHK Apartments in Sidharth Vihar, Ghaziabad",
    description:
      "Launching soon: SKA Group luxury 3 & 4 BHK apartments in Sidharth Vihar, Ghaziabad. Register for rates and priority updates.",
    siteName: "SKA Group",
    images: [
      {
        url: "/apt.jpg",
        width: 1200,
        height: 630,
        alt: "SKA Group coming soon luxury project in Ghaziabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SKA Group | Luxury 3 & 4 BHK Apartments in Sidharth Vihar, Ghaziabad",
    description:
      "Register for SKA Group pre-launch rates, floor plans, and priority access.",
    images: ["/apt.jpg"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
