import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from 'react-hot-toast';
// imports 
import Navbar from "@/components/Navbar"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: "Suraj Vishwakarma | smartcraze",
  description: "Portfolio of Suraj Vishwakarma Cse",
  keywords: ["portfolio", "computer science", "engineering", "Suraj Vishwakarma"],
  authors: [{ name: "Suraj Vishwakarma", url: "surajv.me" }],
  creator: "Suraj Vishwakarma",
  publisher: "Suraj Vishwakarma",
};



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark smooth">
      <head />
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="relative w-full flex items-center justify-center">
          <Navbar />
          <Toaster />
        </div>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
