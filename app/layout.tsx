import type { Metadata } from "next";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import LayoutWrapper from "@/components/layout-wrapper";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Suraj Vishwakarma — Full Stack & GenAI Developer",
  description:
    "I'm Suraj Vishwakarma, a full stack developer exploring GenAI and DevOps. Based on Banglore India ,Discover my projects and journey.",
  keywords: [
    "Suraj Vishwakarma",
    "Full Stack Developer",
    "GenAI Developer",
    "DevOps",
    "Next.js Portfolio",
    "Node.js Developer",
    "smartcraze",
  ],
  metadataBase: new URL("https://surajv.me"),
  openGraph: {
    title: "Suraj Vishwakarma — Full Stack & GenAI Developer",
    description: "Explore Suraj's portfolio of full stack and GenAI projects.",
    url: "https://surajv.me",
    siteName: "surajv.me",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Portfolio preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@surajv354",
    title: "Suraj Vishwakarma — Full Stack & GenAI Developer",
    description: "Full stack projects & GenAI experiments by Suraj Vishwakarma",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={`${inter.className} dark`}>
          <LayoutWrapper>{children}</LayoutWrapper>
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </ViewTransitions>
  );
}
