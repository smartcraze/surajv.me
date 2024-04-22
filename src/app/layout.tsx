import type { Metadata } from "next";
import Head from 'next/head';
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Smartcraze - Suraj Vishwakarma",
  description: "Portfolio of Computer Science Engineering by Suraj Vishwakarma",
  keywords: ["portfolio", "computer science", "engineering", "Suraj Vishwakarma"],
  // authors: "Suraj Vishwakarma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html  lang="en" className="dark smooth">
      <head>
      <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png"/>
      <link rel="manifest" href="favicon/site.webmanifest"/>
      <body className={inter.className}>
        <div className="relative w-full flex items-center justify-center ">
          <Navbar />
        </div>
        {children}
      </body>
      </head>
    </html>
  );
}
