import type { Metadata } from "next";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import LayoutWrapper from "@/components/layout-wrapper";
import StructuredData from "@/components/structured-data";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Suraj Vishwakarma — Full Stack & GenAI Developer",
    template: "%s | Suraj Vishwakarma",
  },
  description:
    "I'm Suraj Vishwakarma, a full stack developer exploring GenAI and DevOps. Based in Bangalore, India. Discover my projects, stories, and journey in software development.",
  keywords: [
    "Suraj Vishwakarma",
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
    "smartcraze",
    "hackathon winner",
    "Smart India Hackathon",
    "Warpspeed Hackathon",
  ],
  authors: [{ name: "Suraj Vishwakarma", url: "https://surajv.dev" }],
  creator: "Suraj Vishwakarma",
  publisher: "Suraj Vishwakarma",
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
    title: "Suraj Vishwakarma — Full Stack & GenAI Developer",
    description: "Explore Suraj's portfolio of full stack and GenAI projects. Building innovative solutions with React, Next.js, Node.js, and AI technologies.",
    url: "https://surajv.dev",
    siteName: "surajv.dev",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Suraj Vishwakarma - Full Stack & GenAI Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@surajv354",
    creator: "@surajv354",
    title: "Suraj Vishwakarma — Full Stack & GenAI Developer",
    description: "Full stack projects & GenAI experiments by Suraj Vishwakarma. Building the future with AI and modern web technologies.",
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
          <link rel="canonical" href="https://surajv.dev" />
          <meta name="theme-color" content="#18181b" />
          <StructuredData />
        </head>
        <meta
          name="google-site-verification"
          content="G1dKZPX7WqFguP2nxEt1PZE1W9KDieFNdGdOVMy3y3M"
        />
        <body className={`${inter.className} dark`}>
          <LayoutWrapper>{children}</LayoutWrapper>
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </ViewTransitions>
  );
}
