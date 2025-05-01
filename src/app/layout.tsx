import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Suraj Vishwakarma | smartcraze",
  description: "Portfolio of Suraj Vishwakarma Cse",
  keywords: ["portfolio", "computer science", "engineering", "Suraj Vishwakarma"],
  authors: [{ name: "Suraj Vishwakarma", url: "surajv.me" }],
  creator: "Suraj Vishwakarma",
  publisher: "Suraj Vishwakarma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html  lang="en" className="dark smooth">
      <head>
      <body className={inter.className}>
        <div className="relative w-full flex items-center justify-center ">
          <Navbar />
        </div>
        {children}
        <SpeedInsights />
      </body>
      </head>
    </html>
  );
}
