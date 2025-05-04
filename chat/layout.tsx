import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "chat",
  description: "chat Based on portfolio context",
  keywords: [
    "portfolio",
    "computer science",
    "engineering",
    "Suraj Vishwakarma",
    "chat",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark smooth">
      <head>
        <body className={inter.className}>{children}</body>
      </head>
    </html>
  );
}
