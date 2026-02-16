import type { Metadata } from "next";
import "./globals.css";
import "../lib/polyfills";
import { ViewTransitions } from "next-view-transitions";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import LayoutWrapper from "@/components/layout-wrapper";
import StructuredData from "@/components/structured-data";
const inter = Inter({ subsets: ["latin"] });
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "smartcraze (Suraj Vishwakarma) — Full Stack & GenAI Developer | surajv.dev",
    template: "%s | smartcraze (Suraj Vishwakarma)",
  },
  description:
    "smartcraze — I'm Suraj Vishwakarma, a full stack developer and GenAI enthusiast based in Bangalore, India. Hackathon winner (SIH, Warpspeed). Explore my projects, docs, and developer journey at surajv.dev.",
  keywords: [
    "smartcraze",
    "Suraj Vishwakarma",
    "surajv.dev",
    "smartcraze developer",
    "smartcraze Suraj Vishwakarma",
    "Full Stack Developer",
    "GenAI Developer",
    "AI Developer",
    "Machine Learning",
    "DevOps Engineer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "Software Engineer",
    "Web Developer",
    "Bangalore Developer",
    "India Developer",
    "Portfolio",
    "hackathon winner",
    "Smart India Hackathon",
    "Warpspeed Hackathon",
  ],
  authors: [{ name: "smartcraze (Suraj Vishwakarma)", url: "https://surajv.dev" }],
  creator: "smartcraze (Suraj Vishwakarma)",
  publisher: "smartcraze (Suraj Vishwakarma)",
  metadataBase: new URL("https://surajv.dev"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "smartcraze (Suraj Vishwakarma) — Full Stack & GenAI Developer",
    description:
      "Explore smartcraze's portfolio — full stack and GenAI projects by Suraj Vishwakarma. Building innovative solutions with React, Next.js, Node.js, and AI technologies.",
    url: "https://surajv.dev",
    siteName: "smartcraze | surajv.dev",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "smartcraze (Suraj Vishwakarma) — Full Stack & GenAI Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@surajv354",
    creator: "@surajv354",
    title: "smartcraze (Suraj Vishwakarma) — Full Stack & GenAI Developer",
    description:
      "Full stack projects & GenAI experiments by smartcraze (Suraj Vishwakarma). Building the future with AI and modern web technologies at surajv.dev.",
    images: ["/opengraph-image.png"],
  },
  verification: {
    google: "G1dKZPX7WqFguP2nxEt1PZE1W9KDieFNdGdOVMy3y3M",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <head>
          <meta
            name="google-site-verification"
            content="WOBvoHYJ_MAcI-cvXhCIExK6oX9kAlwLhIdJcph4kmo"
          />
          <link rel="canonical" href="https://surajv.dev" />
          <meta name="theme-color" content="#18181b" />
          <StructuredData />
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-YGQ31E83TL"
            strategy="afterInteractive"
          />

          <Script id="gtag-init" strategy="afterInteractive">
            {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-YGQ31E83TL');
    `}
          </Script>
        </head>
        <body className={`${inter.className} dark`}>
          <LayoutWrapper>{children}</LayoutWrapper>
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </ViewTransitions>
  );
}
