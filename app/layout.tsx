import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ViewTransitions } from 'next-view-transitions';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "suraj vishwakarma",
  description: "A Student and Backend Developer based in Bangalore, India",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${inter.className}`}
      >
        <main className="bg-white dark:border-zinc-800 border-zinc-200 border-2 dark:bg-zinc-900 min-h-screen max-w-2xl mx-auto my-1 px-4 py-4">
            {children}
            {/* <SpeedInsights />
            <Analytics /> */}
          </main>
      </body>
    </html>
    </ViewTransitions>
  );
}
